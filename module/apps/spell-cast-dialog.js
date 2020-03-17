/**
 * A specialized Dialog subclass for casting a spell item at a certain level
 * @type {Dialog}
 */
export class SpellCastDialog extends Dialog {
  constructor(actor, item, dialogData={}, options={}) {
    super(dialogData, options);
    this.options.classes = ["dnd35e", "dialog"];

    /**
     * Store a reference to the Actor entity which is casting the spell
     * @type {Actor35e}
     */
    this.actor = actor;

    /**
     * Store a reference to the Item entity which is the spell being cast
     * @type {Item35e}
     */
    this.item = item;
  }

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  /**
   * A constructor function which displays the Spell Cast Dialog app for a given Actor and Item.
   * Returns a Promise which resolves to the dialog FormData once the workflow has been completed.
   * @param {Actor35e} actor
   * @param {Item35e} item
   * @return {Promise}
   */
  static async create(actor, item) {
    const ad = actor.data.data;
    const id = item.data.data;

    // Determine whether the spell may be upcast
    const lvl = id.level;
    const canUpcast = (lvl > 0) && (id.preparation.mode === "prepared");

    // Determine the levels which are feasible
    let lmax = 0;
    const spellLevels = Array.fromRange(10).reduce((arr, i) => {
      if ( i < lvl ) return arr;
      const l = ad.spells["spell"+i] || {max: 0};
      let max = parseInt(l.max || 0);
      let slots = Math.clamped(parseInt(l.value || 0), 0, max);
      if ( max > 0 ) lmax = i;
      arr.push({
        level: i,
        label: i > 0 ? `${CONFIG.DND35E.spellLevels[i]} (${slots} Slots)` : CONFIG.DND35E.spellLevels[i],
        canCast: canUpcast && (max > 0),
        hasSlots: slots > 0
      });
      return arr;
    }, []).filter(sl => sl.level <= lmax);
    const canCast = spellLevels.some(l => l.hasSlots);

    // Render the Spell casting template
    const html = await renderTemplate("systems/dnd35e/templates/apps/spell-cast.html", {
      item: item.data,
      canCast: canCast,
      canUpcast: canUpcast,
      spellLevels,
      hasPlaceableTemplate: game.user.isTrusted && item.hasAreaTarget
    });

    // Create the Dialog and return as a Promise
    return new Promise((resolve, reject) => {
      const dlg = new this(actor, item, {
        title: `${item.name}: Spell Configuration`,
        content: html,
        buttons: {
          cast: {
            icon: '<i class="fas fa-magic"></i>',
            label: "Cast",
            callback: html => resolve(new FormData(html[0].querySelector("#spell-config-form")))
          }
        },
        default: "cast",
        close: reject
      });
      dlg.render(true);
    });
  }
}
