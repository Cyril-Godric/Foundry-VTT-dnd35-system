import { Selector } from "../../apps/selector.js";
import { ActorSheetFlags } from "../../apps/actor-flags.js";

/**
 * Extend the basic ActorSheet class to do all the D&D3.5e things!
 * This sheet is an Abstract layer which is not used.
 *
 * @type {ActorSheet}
 */
export class ActorSheet35e extends ActorSheet {
  constructor(...args) {
    super(...args);

    /**
     * Track the set of item filters which are applied
     * @type {Set}
     */
    this._filters = {
      inventory: new Set(),
      spellbook: new Set(),
      features: new Set()
    };
  }

  /* -------------------------------------------- */

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      scrollY: [
        ".inventory .inventory-list",
        ".features .inventory-list",
        ".spellbook .inventory-list"
      ],
      tabs: [{navSelector: ".tabs", contentSelector: ".sheet-body", initial: "description"}]
    });
  }


  /* -------------------------------------------- */

  /** @override */
  getData() {

    // Basic data
    let isOwner = this.entity.owner;
    const data = {
      owner: isOwner,
      limited: this.entity.limited,
      options: this.options,
      editable: this.isEditable,
      cssClass: isOwner ? "editable" : "locked",
      isCharacter: this.entity.data.type === "character",
      isNPC: this.entity.data.type === "npc",
      config: CONFIG.DND35E,
    };

    // The Actor and its Items
    data.actor = duplicate(this.actor.data);
    data.items = this.actor.items.map(i => {
      i.data.labels = i.labels;
      return i.data;
    });
    data.items.sort((a, b) => (a.sort || 0) - (b.sort || 0));
    data.data = data.actor.data;
    data.labels = this.actor.labels || {};
    data.filters = this._filters;

    // Ability Scores
    for ( let [a, abl] of Object.entries(data.actor.data.abilities)) { 
      abl.label = CONFIG.DND35E.abilities[a];
    };

    // Update Saving Throws labels
    for ( let [s, save] of Object.entries(data.actor.data.attributes.saves)) {
      save.label = CONFIG.DND35E.saves[s];
    };

    // Update skill labels
    for ( let [s, skl] of Object.entries(data.actor.data.skills)) {
      skl.icon = this._getProficiencyIcon(skl.proficiency);
      skl.hover = CONFIG.DND35E.proficiencyLevels[skl.proficiency];
      skl.label = CONFIG.DND35E.skills[s];
    };

    // Update traits
    this._prepareTraits(data.actor.data.traits);

    // Prepare owned items
    this._prepareItems(data);

    // Return data to the sheet
    console.log(data);
    return data;
  }

  /* -------------------------------------------- */

  _prepareTraits(traits) {
    const map = {
      "dr": CONFIG.DND35E.damageTypes,
      "di": CONFIG.DND35E.damageTypes,
      "dv": CONFIG.DND35E.damageTypes,
      "ci": CONFIG.DND35E.conditionTypes,
      "languages": CONFIG.DND35E.languages,
      "armorProf": CONFIG.DND35E.armorProficiencies,
      "weaponProf": CONFIG.DND35E.weaponProficiencies
    };
    for ( let [t, choices] of Object.entries(map) ) {
      const trait = traits[t];
      trait.cssClass = "";
    }
  }

  /* -------------------------------------------- */

  /**
   * Insert a spell into the spellbook object when rendering the character sheet
   * @param {Object} data     The Actor data being prepared
   * @param {Array} spells    The spell data being prepared
   * @private
   */
  _prepareSpellbook(data, spells) {
    const owner = this.actor.owner;

    // Define some mappings
    const levels = {
      "always": -30,
      "innate": -20,
      "pact": -10
    };

    // Label spell slot uses headers
    const useLabels = {
      "-30": "-",
      "-20": "-",
      "-10": "-",
      "0": "&infin;"
    };

    // Reduce spells to the nested spellbook structure
    let spellbook = spells.reduce((sb, spell) => {

      // Define the numeric spell level for sorting
      const mode = spell.data.preparation.mode || "prepared";
      const lvl = levels[mode] || spell.data.level || 0;

      // Prepare a new Spellbook level
      if ( !sb[lvl] ) {
        sb[lvl] = {
          level: lvl,
          usesSlots: lvl > 0,
          canCreate: owner && (lvl >= 0),
          canPrepare: (data.actor.type === "character") && (lvl > 0),
          label: lvl >= 0 ? CONFIG.DND35E.spellLevels[lvl] : CONFIG.DND35E.spellPreparationModes[mode],
          spells: [],
          uses: useLabels[lvl] || data.data.spells["spell"+lvl].value || 0,
          slots: useLabels[lvl] || data.data.spells["spell"+lvl].max || 0,
          dataset: {"type": "spell", "level": lvl}
        };
      }

      // Add the spell to the section
      sb[lvl].spells.push(spell);
      return sb;
    }, {});

    // Sort the spellbook by section order
    spellbook = Object.values(spellbook);
    spellbook.sort((a, b) => a.level - b.level);
    return spellbook;
  }

  /* -------------------------------------------- */

  /**
   * Determine whether an Owned Item will be shown based on the current set of filters
   * @return {boolean}
   * @private
   */
  _filterItems(items, filters) {
    return items.filter(item => {
      const data = item.data;

      // Action usage
      for ( let f of ["action", "bonus", "reaction"] ) {
        if ( filters.has(f) ) {
          if ((data.activation && (data.activation.type !== f))) return false;
        }
      }

      // Spell-specific filters
      if ( filters.has("ritual") ) {
        if (data.components.ritual !== true) return false;
      }
      if ( filters.has("concentration") ) {
        if (data.components.concentration !== true) return false;
      }
      if ( filters.has("prepared") ) {
        if ( data.level === 0 || ["pact", "innate"].includes(data.preparation.mode) ) return true;
        if ( this.actor.data.type === "npc" ) return true;
        return data.preparation.prepared;
      }

      // Equipment-specific filters
      if ( filters.has("equipped") ) {
        if (data.equipped && data.equipped !== true) return false;
      }
      return true;
    });
  }

  /* -------------------------------------------- */

  /**
   * Get the font-awesome icon used to display a certain level of skill proficiency
   * @private
   */
  _getProficiencyIcon(level) {
    const icons = {
      0: '<i class="far fa-square"></i>',
      0.5: '<i class="fas fa-square"></i>',
      1: '<i class="far fa-check-square"></i>'
    };
    return icons[level];
  }

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers
  /* -------------------------------------------- */

  /**
   * Activate event listeners using the prepared sheet HTML
   * @param html {HTML}   The prepared HTML object ready to be rendered into the DOM
   */
  activateListeners(html) {

    // Activate Item Filters
    const filterLists = html.find(".filter-list");
    filterLists.each(this._initializeFilterItemList.bind(this));
    filterLists.on("click", ".filter-item", this._onToggleFilter.bind(this));

    // Item summaries
    html.find('.item .item-name h4').click(event => this._onItemSummary(event));

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;

    // Relative updates for numeric fields
    html.find('input[data-dtype="Number"]').change(this._onChangeInputDelta.bind(this));

    /* -------------------------------------------- */
    /*  Abilities, Skills, and Traits
    /* -------------------------------------------- */

    // Ability Checks
    html.find('.ability-name').click(this._onRollAbilityTest.bind(this));

    // Saving Throws
    html.find('.saving-throw-name').click(this._onRollSavingThrow.bind(this));

    // Toggle Skill Proficiency
    html.find('.skill-proficiency').on("click contextmenu", this._onCycleSkillProficiency.bind(this));

    // Roll Skill Checks
    html.find('.skill-name').click(this._onRollSkillCheck.bind(this));

    // Trait Selector
    html.find('.trait-selector').click(this._onTraitSelector.bind(this));

    // Configure Special Flags
    html.find('.configure-flags').click(this._onConfigureFlags.bind(this));

    /* -------------------------------------------- */
    /*  Inventory
    /* -------------------------------------------- */

    // Owned Item management
    html.find('.item-create').click(this._onItemCreate.bind(this));
    html.find('.item-edit').click(this._onItemEdit.bind(this));
    html.find('.item-delete').click(this._onItemDelete.bind(this));
    
    // Item Uses
    html.find('.item-uses input').click(ev => ev.target.select()).change(this._onUsesChange.bind(this));

    // Item Dragging
    let handler = ev => this._onDragItemStart(ev);
    html.find('li.item').each((i, li) => {
      if ( li.classList.contains("inventory-header") ) return;
      li.setAttribute("draggable", true);
      li.addEventListener("dragstart", handler, false);
    });

    // Item Rolling
    html.find('.item .item-image').click(event => this._onItemRoll(event));
    html.find('.item .item-recharge').click(event => this._onItemRecharge(event));

    // Handle default listeners last so system listeners are triggered first
    super.activateListeners(html);
  }

  /* -------------------------------------------- */

  /**
   * Iinitialize Item list filters by activating the set of filters which are currently applied
   * @private
   */
  _initializeFilterItemList(i, ul) {
    const set = this._filters[ul.dataset.filter];
    const filters = ul.querySelectorAll(".filter-item");
    for ( let li of filters ) {
      if ( set.has(li.dataset.filter) ) li.classList.add("active");
    }
  }

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  /**
   * Handle input changes to numeric form fields, allowing them to accept delta-typed inputs
   * @param event
   * @private
   */
  _onChangeInputDelta(event) {
    const input = event.target;
    const value = input.value;
    if ( ["+", "-"].includes(value[0]) ) {
      let delta = parseFloat(value);
      input.value = getProperty(this.actor.data, input.name) + delta;
    } else if ( value[0] === "=" ) {
      input.value = value.slice(1);
    }
  }

  /* -------------------------------------------- */

  /**
   * Handle click events for the Traits tab button to configure special Character Flags
   */
  _onConfigureFlags(event) {
    event.preventDefault();
    new ActorSheetFlags(this.actor).render(true);
  }

  /* -------------------------------------------- */

  /**
   * Handle cycling proficiency in a Skill
   * @param {Event} event   A click or contextmenu event which triggered the handler
   * @private
   */
  _onCycleSkillProficiency(event) {
    event.preventDefault();
    const field = $(event.currentTarget).siblings('input[type="hidden"]');

    // Get the current level and the array of levels
    const level = parseFloat(field.val());
    const levels = [0, 1, 0.5, 2];
    let idx = levels.indexOf(level);

    // Toggle next level - forward on click, backwards on right
    if ( event.type === "click" ) {
      field.val(levels[(idx === levels.length - 1) ? 0 : idx + 1]);
    } else if ( event.type === "contextmenu" ) {
      field.val(levels[(idx === 0) ? levels.length - 1 : idx - 1]);
    }

    // Update the field value and save the form
    this._onSubmit(event);
  }

  /* -------------------------------------------- */

    /**
     * Change the uses amount of an Owned Item within the Actor
     * @param {Event} event   The triggering click event
     * @private
     */
    async _onUsesChange(event) {
        event.preventDefault();
        const itemId = event.currentTarget.closest(".item").dataset.itemId;
        const item = this.actor.getOwnedItem(itemId);
        const uses = Math.clamped(0, parseInt(event.target.value), item.data.data.uses.max);
        event.target.value = uses;
        return item.update({ 'data.uses.value': uses });
    }
    
  /* -------------------------------------------- */

  /**
   * Handle rolling of an item from the Actor sheet, obtaining the Item instance and dispatching to it's roll method
   * @private
   */
  _onItemRoll(event) {
    event.preventDefault();
    const itemId = event.currentTarget.closest(".item").dataset.itemId;
    const item = this.actor.getOwnedItem(itemId);

    // Roll spells through the actor
    if ( item.data.type === "spell" ) {
      return this.actor.useSpell(item, {configureDialog: !event.shiftKey});
    }

    // Otherwise roll the Item directly
    else return item.roll();
  }

  /* -------------------------------------------- */

  /**
   * Handle attempting to recharge an item usage by rolling a recharge check
   * @param {Event} event   The originating click event
   * @private
   */
  _onItemRecharge(event) {
    event.preventDefault();
    const itemId = event.currentTarget.closest(".item").dataset.itemId;
    const item = this.actor.getOwnedItem(itemId);
    return item.rollRecharge();
  };

  /* -------------------------------------------- */

  /**
   * Handle rolling of an item from the Actor sheet, obtaining the Item instance and dispatching to it's roll method
   * @private
   */
  _onItemSummary(event) {
    event.preventDefault();
    let li = $(event.currentTarget).parents(".item"),
        item = this.actor.getOwnedItem(li.data("item-id")),
        chatData = item.getChatData({secrets: this.actor.owner});

    // Toggle summary
    if ( li.hasClass("expanded") ) {
      let summary = li.children(".item-summary");
      summary.slideUp(200, () => summary.remove());
    } else {
      let div = $(`<div class="item-summary">${chatData.description.value}</div>`);
      let props = $(`<div class="item-properties"></div>`);
      chatData.properties.forEach(p => props.append(`<span class="tag">${p}</span>`));
      div.append(props);
      li.append(div.hide());
      div.slideDown(200);
    }
    li.toggleClass("expanded");
  }

  /* -------------------------------------------- */

  /**
   * Handle creating a new Owned Item for the actor using initial data defined in the HTML dataset
   * @param {Event} event   The originating click event
   * @private
   */
  _onItemCreate(event) {
    event.preventDefault();
    const header = event.currentTarget;
    const type = header.dataset.type;
    const itemData = {
      name: `New ${type.capitalize()}`,
      type: type,
      data: duplicate(header.dataset)
    };
    delete itemData.data["type"];
    return this.actor.createOwnedItem(itemData);
  }

  /* -------------------------------------------- */

  /**
   * Handle editing an existing Owned Item for the Actor
   * @param {Event} event   The originating click event
   * @private
   */
  _onItemEdit(event) {
    event.preventDefault();
    const li = event.currentTarget.closest(".item");
    const item = this.actor.getOwnedItem(li.dataset.itemId);
    item.sheet.render(true);
  }

  /* -------------------------------------------- */

  /**
   * Handle deleting an existing Owned Item for the Actor
   * @param {Event} event   The originating click event
   * @private
   */
  _onItemDelete(event) {
    event.preventDefault();
    const li = event.currentTarget.closest(".item");
    this.actor.deleteOwnedItem(li.dataset.itemId);
  }

  /* -------------------------------------------- */

  /**
   * Handle rolling an Ability check
   * @param {Event} event   The originating click event
   * @private
   */
  _onRollAbilityTest(event) {
    event.preventDefault();
    let ability = event.currentTarget.parentElement.dataset.ability;
    this.actor.rollAbility(ability, {event: event});
  }

  /* -------------------------------------------- */

  /**
   * Handle rolling an Ability check
   * @param {Event} event   The originating click event
   * @private
   */
  _onRollSavingThrow(event) {
    event.preventDefault();
    let save = event.currentTarget.parentElement.dataset.save;
    this.actor.rollSavingThrow(save, {event: event});
  }

  /* -------------------------------------------- */

  /**
   * Handle rolling a Skill check
   * @param {Event} event   The originating click event
   * @private
   */
  _onRollSkillCheck(event) {
    event.preventDefault();
    const skill = event.currentTarget.parentElement.dataset.skill;
    this.actor.rollSkill(skill, {event: event});
  }

  /* -------------------------------------------- */

  /**
   * Handle toggling of filters to display a different set of owned items
   * @param {Event} event     The click event which triggered the toggle
   * @private
   */
  _onToggleFilter(event) {
    event.preventDefault();
    const li = event.currentTarget;
    const set = this._filters[li.parentElement.dataset.filter];
    const filter = li.dataset.filter;
    if ( set.has(filter) ) set.delete(filter);
    else set.add(filter);
    this.render();
  }

  /* -------------------------------------------- */

  /**
   * Handle spawning the ActorTraitSelector application which allows a checkbox of multiple trait options
   * @param {Event} event   The click event which originated the selection
   * @private
   */
  _onTraitSelector(event) {
    event.preventDefault();
    const a = event.currentTarget;
    const label = a.parentElement.querySelector("label");
    const options = {
      name: label.getAttribute("for"),
      title: label.innerText,
      type: "trait",
      choices: CONFIG.DND35E[a.dataset.options]
    };
    new Selector(this.actor, options).render(true)
  }
}