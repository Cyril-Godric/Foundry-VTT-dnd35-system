// Namespace D&D3.5e Configuration Values
export const DND35E = {};

/**ASCII Artwork 
 * @todo make it a 3.5e ascii
 */ 

DND35E.ASCII = String.raw`______________________________________
______      ___________    _____ _____ 
|  _  \___  |  _  \___ \  | ___|  ___|
| | | ( _ ) | | | |__/ /  \___ \| |__  
| | | / _ \/\ | | |__ <       \ \  __| 
| |/ / (_>  < |/ /___\ \  /\__/ / |___ 
|___/ \___/\/___/ \____/()\____/\____/
______________________________________`;


/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
DND35E.abilities = {
  "str": "DND35E.AbilityStr",
  "dex": "DND35E.AbilityDex",
  "con": "DND35E.AbilityCon",
  "int": "DND35E.AbilityInt",
  "wis": "DND35E.AbilityWis",
  "cha": "DND35E.AbilityCha"
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
DND35E.alignments = {
  'lg': "DND35E.AlignmentLG",
  'ng': "DND35E.AlignmentNG",
  'cg': "DND35E.AlignmentCG",
  'ln': "DND35E.AlignmentLN",
  'tn': "DND35E.AlignmentTN",
  'cn': "DND35E.AlignmentCN",
  'le': "DND35E.AlignmentLE",
  'ne': "DND35E.AlignmentNE",
  'ce': "DND35E.AlignmentCE"
};

/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
DND35E.armorProficiencies = {
  "lgt": "DND35E.ArmorLight",
  "med": "DND35E.ArmorMedium",
  "hvy": "DND35E.ArmorHeavy",
  "shl": "DND35E.ArmorShield"
};

DND35E.weaponProficiencies = {
  "sim": "DND35E.WeaponSimple",
  "mar": "DND35E.WeaponMartial",
  "exo": "DND35E.WeaponExotic"
};

DND35E.saves = {
  "for": "DND35E.SaveFor",
  "ref": "DND35E.SaveRef",
  "wil": "DND35E.SaveWil"
};

DND35E.savesProgressionName = {
  "good": "DND35E.Good",
  "poor": "DND35E.Poor"
}

DND35E.saveProgression = {
  "good": "DND35E.Good",
  "poor": "DND35E.Poor"
}

DND35E.saveTypes = {
  "none": "DND35E.None",
  "partial": "DND35E.SavePartial",
  "half": "DND35E.SaveHalf",
  "negate": "DND35E.SaveNegate",
  "disbelief": "DND35E.SaveDisbelief"
};

DND35E.baseAttackBonus = {
  "bab": "DND35E.BAB"
}

DND35E.babProgression = {
  "good": "DND35E.Good",
  "average": "DND35E.Average",
  "poor": "DND35E.Poor"
}

DND35E.abilityActivationTypes = {
  "none": "None",
  "standard": "DND35E.ActionStandard",
  "move": "DND35E.ActionMove",
  "full-round": "DND35E.ActionFullRound",
  "free": "DND35E.ActionFree",
  "swift": "DND35E.ActionSwift",
  "immediate": "DND35E.ActionImmediate",
  "rounds": "DND35E.TimeRound",
  "minute": "DND35E.TimeMinute",
  "hour": "DND35E.TimeHour",
  "day": "DND35E.TimeDay",
  "permanent": "DND35E.TimePerm",
  "special": "DND35E.Special"
};

/* -------------------------------------------- */

// Creature Sizes MAYBE add stuff for long bois (as a modifier maybe?)
DND35E.sizes = {
  "fine": "Fine",
  "dim": "Diminutive",
  "tiny": "Tiny",
  "sm": "Small",
  "med": "Medium",
  "lg": "Large",
  "huge": "Huge",
  "grg": "Gargantuan",
  "col": "Colossal"
};

DND35E.tokenSizes = {
  "fine": 1,
  "dim": 1,
  "tiny": 1,
  "sm": 1,
  "med": 1,
  "lg": 2,
  "huge": 3,
  "grg": 4,
  "col": 4
};

/* -------------------------------------------- */

/**
 * Classification types for item action types
 * @type {Object}
 */
DND35E.itemActionTypes = {
  "mnak": "DND35E.ActionMNAK",
  "rnak": "DND35E.ActionRNAK",
  "mtak": "DND35E.ActionMTAK",
  "rtak": "DND35E.ActionRTAK",
  "brea": "DND35E.ActionBREA",
  "save": "DND35E.ActionSave",
  "heal": "DND35E.ActionHeal",
  "abil": "DND35E.ActionAbil",
  "util": "DND35E.ActionUtil",
  "misc": "DND35E.ActionMisc"
};

/* -------------------------------------------- */

DND35E.itemCapacityTypes = {
  "items": "DND35E.ItemContainerCapacityItems",
  "weight": "DND35E.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
DND35E.limitedUsePeriods = {
  "sr": "DND35E.LimitedUseSR",
  "lr": "DND35E.LimitedUseLR",
  "day": "DND35E.LimitedUseDay",
  "charges": "DND35E.LimitedUseCharges"
};


/* -------------------------------------------- */

// Equipment Types
DND35E.equipmentTypes = {
  "light": "DND35E.EquipmentLight",
  "medium": "DND35E.EquipmentMedium",
  "heavy": "DND35E.EquipmentHeavy",
  "bonus": "DND35E.EquipmentBonus",
  "natural": "DND35E.EquipmentNatural",
  "shield": "DND35E.EquipmentShield",
  "clothing": "DND35E.EquipmentClothing",
  "trinket": "DND35E.EquipmentTrinket"
};

/* -------------------------------------------- */

DND35E.armorTypes = {
  "light": "DND35E.ArmorLight",
  "medium": "DND35E.ArmorMedium",
  "heavy": "DND35E.ArmorHeavy",
  "shield": "DND35E.ArmorShield"
};

/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
DND35E.consumableTypes = {
  "potion": "DND35E.ConsumablePotion",
  "poison": "DND35E.ConsumablePoison",
  "lightsource": "DND35E.ConsumableLightSource",
  "food": "DND35E.ConsumableFood",
  "scroll": "DND35E.ConsumableScroll",
  "wand": "DND35E.ConsumableWand",
  "trinket": "DND35E.ConsumableTrinket",
  "special": "DND35E.Special"
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 3.5e system
 * @type {Object}
 */
DND35E.currencies = {
  "pp": "DND35E.CurrencyPP",
  "gp": "DND35E.CurrencyGP",
  "sp": "DND35E.CurrencySP",
  "cp": "DND35E.CurrencyCP",
};

/* -------------------------------------------- */


// Damage Types
DND35E.damageTypes = {
  "acid": "DND35E.DamageAcid",               // Acid Damage
  "bludgeoning": "DND35E.DamageBludgeoning", // Bludgeoning Damage
  "cold": "DND35E.DamageCold",               // Cold Damage
  "fire": "DND35E.DamageFire",               // Fire Damage
  "force": "DND35E.DamageForce",             // Force Damage
  "lightning": "DND35E.DamageLightning",     // Lightning Damage
  "necrotic": "DND35E.DamageNecrotic",       // Necrotic Damage
  "piercing": "DND35E.DamagePiercing",       // Piercing Damage
  "poison": "DND35E.DamagePoison",           // Poison Damage
  "psychic": "DND35E.DamagePsychic",         // Psychic Damage
  "radiant": "DND35E.DamageRadiant",         // Radiant Damage
  "slashing": "DND35E.DamageSlashing",       // Slashing Damage
  "thunder": "DND35E.DamageThunder"          // Thunder Damage
};

/* -------------------------------------------- */

DND35E.distanceUnits = {
  "none": "DND35E.None",
  "ft": "DND35E.DistFt",
  "mi": "DND35E.DistMi",
  "spec": "DND35E.Special",
  "any": "DND35E.DistAny"
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied in D&D35E
 * @type {Object}
 */
DND35E.targetTypes = {
  "none": "DND35E.None",
  "self": "DND35E.TargetSelf",
  "creature": "DND35E.TargetCreature",
  "ally": "DND35E.TargetAlly",
  "enemy": "DND35E.TargetEnemy",
  "object": "DND35E.TargetObject",
  "space": "DND35E.TargetSpace",
  "radius": "DND35E.TargetRadius",
  "sphere": "DND35E.TargetSphere",
  "cylinder": "DND35E.TargetCylinder",
  "cone": "DND35E.TargetCone",
  "square": "DND35E.TargetSquare",
  "cube": "DND35E.TargetCube",
  "line": "DND35E.TargetLine",
  "wall": "DND35E.TargetWall"
};


/* -------------------------------------------- */


/**
 * Map the subset of target types which produce a template area of effect
 * The keys are DND35E target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
DND35E.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray"
};


/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur in D&D35E
 * @type {Object}
 */
DND35E.timePeriods = {
  "inst": "DND35E.TimeInst",
  "round": "DND35E.TimeRound",
  "minute": "DND35E.TimeMinute",
  "hour": "DND35E.TimeHour",
  "day": "DND35E.TimeDay",
  "month": "DND35E.TimeMonth",
  "year": "DND35E.TimeYear",
  "perm": "DND35E.TimePerm",
  "spec": "DND35E.Special"
};

/* -------------------------------------------- */

// Healing Types
DND35E.healingTypes = {
  "healing": "DND35E.Healing",
  "temphp": "DND35E.HealingTemp"
};


/* -------------------------------------------- */


/**
 * Enumerate the denominations of hit dice which can apply to classes in the D&D35E system
 * @type {Array.<string>}
 */
DND35E.hitDieTypes = ["d4","d6", "d8", "d10", "d12"];


/* -------------------------------------------- */

/**
 * Character senses options
 * @type {Object}
 */
DND35E.senses = {
  "bs": "DND35E.SenseBS",
  "dv": "DND35E.SenseDV",
  "ts": "DND35E.SenseTS",
  "tr": "DND35E.SenseTR"
};


/* -------------------------------------------- */

/**
 * Available types for feats
 * @type {Object}
 */
DND35E.featTypes = {
  "gen": "DND35E.FeatGen",
  "ite": "DND35E.FeatIte",
  "mem": "DND35E.FeatMeM",
  "mep": "DND35E.FeatMeP"
}

/**
 * The set of skill which can be trained in D&D3.5e
 * @type {Object}
 */
DND35E.skills = {
  "app": "DND35E.SkillApp", // Appraise
  "aut": "DND35E.SkillAut", // Autohypnosis
  "bal": "DND35E.SkillBal", // Balance
  "blu": "DND35E.SkillBlu", // Bluff
  "cli": "DND35E.SkillCli", // Climb
  "con": "DND35E.SkillCon", // Concentration
  "cra": "DND35E.SkillCra", // Craft
  "dec": "DND35E.SkillDec", // Decipher Script
  "dip": "DND35E.SkillDip", // Diplomacy
  "did": "DND35E.SkillDiD", // Disable Devise
  "dis": "DND35E.SkillDis", // Disguise
  "esc": "DND35E.SkillEsc", // Escape Artist
  "for": "DND35E.SkillFor", // Forgery
  "gat": "DND35E.SkillGat", // Gather Information
  "han": "DND35E.SkillHan", // Handle Animal
  "hea": "DND35E.SkillHea", // Heal
  "hid": "DND35E.SkillHid", // Hide
  "int": "DND35E.SkillInt", // Intimidate
  "jum": "DND35E.SkillJum", // Jump
  "kar": "DND35E.SkillKAr", // Knowledge (arcana)
  "kae": "DND35E.SkillKAE", // Knowledge (architecture and engineering)
  "kdu": "DND35E.SkillKDu", // Knowledge (dungeoneering)
  "kge": "DND35E.SkillKGe", // Knowledge (geography)
  "khi": "DND35E.SkillKHi", // Knowledge (history)
  "klo": "DND35E.SkillKLo", // Knowledge (local)
  "kna": "DND35E.SkillKNa", // Knowledge (nature)
  "kno": "DND35E.SkillKNo", // Knowledge (nobility and royalty)
  "kps": "DND35E.SkillKPs", // Knowledge (psionics)
  "kre": "DND35E.SkillKRe", // Knowledge (religion)
  "kpl": "DND35E.SkillKPl", // Knowledge (the planes)
  "lis": "DND35E.SkillLis", // Listen
  "mov": "DND35E.SkillMov", // Move Silently
  "ope": "DND35E.SkillOpe", // Open Lock
  "per": "DND35E.SkillPer", // Perform
  "pro": "DND35E.SkillPro", // Profession
  "psi": "DND35E.SkillPsi", // Psicraft
  "rid": "DND35E.SkillRid", // Ride
  "sea": "DND35E.SkillSea", // Search
  "sen": "DND35E.SkillSen", // Sense Motive
  "sle": "DND35E.SkillSle", // Sleight of Hand
  "spe": "DND35E.SkillSpe", // Speak Language
  "spl": "DND35E.SkillSpl", // Spellcraft
  "spo": "DND35E.SkillSpo", // Spot
  "sur": "DND35E.SkillSur", // Survival
  "swi": "DND35E.SkillSwi", // Swim
  "tum": "DND35E.SkillTum", // Tumble
  "uma": "DND35E.SkillUMa", // Use Magic Device
  "ups": "DND35E.SkillUPs", // Use Psionic Device
  "uro": "DND35E.SkillURo" // Use Rope
};


/* -------------------------------------------- */


DND35E.spellcastingTypes = {
  "arcaneinnate": "DND35E.SpellArcaneInnate",
  "arcaneprep": "DND35E.SpellArcanePrep",
  "divine": "DND35E.SpellDivine"
};

/* -------------------------------------------- */

DND35E.spellLevels = {
  "level0": "DND35E.SpellLevel0",
  "level1": "DND35E.SpellLevel1",
  "level2": "DND35E.SpellLevel2",
  "level3": "DND35E.SpellLevel3",
  "level4": "DND35E.SpellLevel4",
  "level5": "DND35E.SpellLevel5",
  "level6": "DND35E.SpellLevel6",
  "level7": "DND35E.SpellLevel7",
  "level8": "DND35E.SpellLevel8",
  "level9": "DND35E.SpellLevel9"
};


/**
 * The available choices for how spell damage scaling may be computed
 * @type {Object}
 */
DND35E.spellScalingModes = {
  "none": "DND35E.SpellNone",
  "level": "DND35E.SpellLevel"
};


/* -------------------------------------------- */

/**
 * Define the set of weapon categories of weapons
 * @type {Object}
 */
DND35E.weaponCategories = {
  "simpleM": "DND35E.WeaponSimpleM",   // Simple Melee
  "simpleR": "DND35E.WeaponSimpleR",   // Simple Ranged
  "martialM": "DND35E.WeaponMartialM", // Martial Melee
  "martialR": "DND35E.WeaponMartialR", // Martial Ranged
  "exoticM": "DND35E.WeaponExoticM",   // Exotic Melee
  "exoticR": "DND35E.WeaponExoticR"    // Exotic Ranged
};

/* -------------------------------------------- */

/**
 * Define the set of weapon properties which can exist on a weapon
 * @type {Object}
 */
DND35E.weaponProperties = {
  "amm": "DND35E.WeaponPropertiesAmm", // Ammunition
  "dou": "DND35E.WeaponPropertiesDou", // Double
  "imp": "DND35E.WeaponPropertiesImp", // Improvised
  "pro": "DND35E.WeaponPropertiesPro", // Projectile
  "rea": "DND35E.WeaponPropertiesRea", // Reach
  "thr": "DND35E.WeaponPropertiesThr"  // Thrown
};

/**
 * Define the set of weapon types of weapons
 * @type {Object}
 */
DND35E.weaponTypes = {
  "bludgeoning": "DND35E.DamageBludgeoning",
  "piercing": "DND35E.DamagePiercing",
  "slashing": "DND35E.DamageSlashing"
};


// Spell Components
DND35E.spellComponents = {
  "V": "DND35E.ComponentVerbal",      // Verbal
  "S": "DND35E.ComponentSomatic",     // Somatic
  "M": "DND35E.ComponentMaterial",    // Material
  "F": "DND35E.ComponentFocus",       // Focus
  "D": "DND35E.ComponentDivineFocus", // Divine Focus
  "X": "DND35E.ComponentXP"           // Experience Points
};

DND35E.spellDuration = {
  "con": "DND35E.SkillCon"
};

DND35E.spellRange = {
  "pers": "DND35E.RangePersonal",
  "touch": "DND35E.RangeTouch",
  "close": "DND35E.RangeClose",
  "medium": "DND35E.RangeMedium",
  "long": "DND35E.RangeLong",
  "unlim": "DND35E.RangeUnlimited",
  "custom": "DND35E.Custom"

};

DND35E.spellResistance = {
  "yes": "DND35E.Yes",
  "no": "DND35E.No",
  "yesharmless": "DND35E.SRHarmless",
  "yesobject": "DND35E.SRObject",
  "yesharmlessobject": "DND35E.SRHarmlessObject"
};

// Spell Schools
DND35E.spellSchools = {
  "abj": "DND35E.SchoolAbj", // Abjuration
  "con": "DND35E.SchoolCon", // Conjuration
  "div": "DND35E.SchoolDiv", // Divination
  "enc": "DND35E.SchoolEnc", // Enchantement
  "evo": "DND35E.SchoolEvo", // Evocation
  "ill": "DND35E.SchoolIll", // Illusion
  "nec": "DND35E.SchoolNec", // Necromancy
  "trs": "DND35E.SchoolTrs", // Transmutation
  "uni": "DND35E.SchoolUni"  // Universal
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
DND35E.proficiencyLevels = {
  0: "Not Proficient",
  0.5: "Untrained",
  1: "Proficient"
};

/* -------------------------------------------- */


DND35E.view = {
  "icongrid": "DND35E.IconGrid",
  "list": "DND35E.List"
}


// Condition Types
DND35E.conditionTypes = {
  "ability burned": "DND35E.ConAbilityBurned",
  "ability damaged": "DND35E.ConAbilityDamaged",
  "ability drained": "DND35E.ConAbilityDrained",
  "blinded": "DND35E.ConBlinded",
  "blown away": "DND35E.ConBlownAway",
  "checked": "DND35E.ConChecked",
  "confused": "DND35E.ConConfunsed",
  "cowering": "DND35E.ConCowering",
  "dazed": "DND35E.ConDazed",
  "dazzled": "DND35E.ConDazzled",
  "dead": "DND35E.ConDead",
  "deafened": "DND35E.ConDeafened",
  "disabled": "DND35E.ConDisabled",
  "dying": "DND35E.ConDying",
  "energy drained": "DND35E.ConEnergyDrained",
  "entangled": "DND35E.ConEntangled",
  "exhausted": "DND35E.ConExhausted",
  "fatigued": "DND35E.ConFatigued",
  "flat-footed": "DND35E.ConFlatFooted",
  "frightened": "DND35E.ConFrightened",
  "grappling": "DND35E.ConGrappling",
  "helpless": "DND35E.ConHelpless",
  "incorporeal": "DND35E.ConIncorporeal",
  "invisible": "DND35E.ConInvisible",
  "nauseated": "DND35E.ConNauseated",
  "paralyzed": "DND35E.ConParalyzed",
  "petrified": "DND35E.ConPetrified",
  "pinned": "DND35E.ConPinned",
  "prone": "DND35E.ConProne",
  "shaken": "DND35E.ConShaken",
  "sickened": "DND35E.ConSickened",
  "stable": "DND35E.ConStable",
  "staggered": "DND35E.ConStaggered",
  "stunned": "DND35E.ConStunned",
  "turned": "DND35E.ConTurned",
  "unconscious": "DND35E.ConUnconscious"
};

// Languages
DND35E.languages = {
  "common": "DND35E.LangCommon",
  "abyssal": "DND35E.LangAbyssal",
  "aquan": "DND35E.LangAquan",
  "auran": "DND35E.LangAuran",
  "celestial": "DND35E.LangCelestial",
  "draconic": "DND35E.LangDraconic",
  "druidic": "DND35E.LangDruidic",
  "dwarven": "DND35E.LangDwarven",
  "elven": "DND35E.LangElven",
  "giant": "DND35E.LangGiant",
  "gnome": "DND35E.LangGnome",
  "goblin": "DND35E.LangGoblin",
  "gnoll": "DND35E.LangGnoll",
  "halfling": "DND35E.LangHalfling",
  "ignan": "DND35E.LangIgnan",
  "infernal": "DND35E.LangInfernal",
  "orc": "DND35E.LangOrc",
  "sylvan": "DND35E.LangSylvan",
  "terran": "DND35E.LangTerran",
  "undercommon": "DND35E.LangUndercommon"
};

// Character Level XP Requirements
DND35E.CHARACTER_EXP_LEVELS =  [
  0, 1000, 3000, 6000, 10000, 15000, 21000, 28000, 36000, 45000, 55000, 66000,
  78000, 91000, 105000, 120000, 136000, 153000, 171000, 190000]
;

DND35E.AC_SIZE_MODIFIER = {
  "fine": "+8",
  "dim": "+4",
  "tiny": "+2",
  "sm": "+1",
  "med": "+0",
  "lg": "-1",
  "huge": "-2",
  "grg": "-4",
  "col": "-8"
}

DND35E.BAB_TABLES = {
  "average": [0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15],
  "good": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  "poor": [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10]
}

// Challenge Rating XP Levels
DND35E.CR_EXP_LEVELS = [
  [300, 300, 300, 300, 300, 300, 263, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // cr 1 
  [600, 600, 600, 600, 500, 450, 350, 600, 225, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // cr 2
  [900, 900, 900, 800, 750, 600, 525, 400, 338, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // cr 3
  [1350, 1350, 1350, 1200, 1000, 900, 700, 600, 450, 375, 275, 0, 0, 0, 0, 0, 0, 0, 0, 0], // cr 4
  [1800, 1800, 1800, 1600, 1500, 1200, 1050, 800, 675, 500, 413, 300, 0, 0, 0, 0, 0, 0, 0, 0], // cr 5
  [2700, 2700, 2700, 2400, 2250, 1800, 1400, 1200, 900, 750, 550, 450, 325, 0, 0, 0, 0, 0, 0, 0], // cr 6
  [3600, 3600, 3600, 3200, 3000, 2700, 2100, 1600, 1350, 1000, 825, 600, 488, 350, 0, 0, 0, 0, 0, 0], // cr 7
  [5400, 5400, 5400, 4800, 4500, 3600, 3150, 2400, 1800, 1500, 1100, 900, 650, 525, 375, 0, 0, 0, 0, 0], // cr 8
  [7200, 7200, 7200, 6400, 6000, 5400, 4200, 3600, 2700, 2000, 1650, 1200, 975, 700, 563, 400, 0, 0, 0, 0], // cr 9
  [10800, 10800, 10800, 9600, 9000, 7200, 6300, 4800, 4050, 3000, 2200, 1800, 1300, 1050, 750, 600, 425, 0, 0, 0], // cr 10
  [0, 0, 0, 12800, 12000, 10800, 8400, 7200, 5400, 4500, 3300, 2400, 1950, 1400, 1125, 800, 638, 450, 0, 0], // cr 11
  [0, 0, 0, 0, 18000, 14400, 12600, 9600, 8100, 6000, 4950, 3600, 2600, 2100, 1500, 1200, 850, 675, 475, 0], // cr 12
  [0, 0, 0, 0, 0, 21600, 16800, 14400, 10800, 9000, 6600, 5400, 3900, 2800, 2250, 1600, 1275, 900, 713, 500], // cr 13
  [0, 0, 0, 0, 0, 0, 25200, 19200, 16200, 12000, 9900, 7200, 5850, 4200, 3000, 2400, 1700, 1350, 950, 750], // cr 14
  [0, 0, 0, 0, 0, 0, 0, 28800, 21600, 18000, 13200, 10800, 7800, 6300, 4500, 3200, 2550, 1800, 1425, 1000], // cr 15
  [0, 0, 0, 0, 0, 0, 0, 0, 32400, 24000, 19800, 14400, 11700, 8400, 6750, 4800, 3400, 2700, 1900, 1500], // cr 16
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 36000, 26400, 21600, 15600, 12600, 9000, 7200, 5100, 3600, 2850, 2000], // cr 17
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39600, 28800, 23400, 16800, 13500, 9600, 7650, 5400, 3800, 3000], // cr 18
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43200, 31200, 25200, 18000, 14400, 13200, 8100, 5700, 4000], // cr 19
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 46800, 33600, 27000, 19200, 15300, 10800, 8550, 6000] // cr 20
];

DND35E.GRAPPLE_SIZE_MODIFIER = {
  "fine": "-16",
  "dim": "-12",
  "tiny": "-8",
  "sm": "-4",
  "med": "+0",
  "lg": "+4",
  "huge": "+8",
  "grg": "+12",
  "col": "+16"
}


// Note could be reworked as formula as a first attempt to make rules epic
// Base Save Bonus Table
DND35E.SAVE_TABLE = {
  "good": [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
  "poor": [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6]
};

/**
 * Enumerate the skills that can be used if untrained
 * @type {Array.<string>}
 */
DND35E.UNTRAINED_SKILLS = ["app", "bal", "blu", "cli", "con", "cra", "dip", "dis", "esc", "for", "gat", "hea", "hid", "int", "jum", "lis", "mov", "per", "rid", "sea", "sen", "spo", "sur", "swi", "uro"]

// Configure Optional Character Flags
DND35E.characterFlags = {
  "powerfulBuild": {
    name: "Powerful Build",
    hint: "Provides increased carrying capacity.",
    section: "Racial Traits",
    type: Boolean
  },
  "savageAttacks": {
    name: "Savage Attacks",
    hint: "Adds extra critical hit weapon dice.",
    section: "Racial Traits",
    type: Boolean
  },
  "initiativeAlert": {
    name: "Alert Feat",
    hint: "Provides +5 to Initiative.",
    section: "Feats",
    type: Boolean
  },
  "initiativeHalfProf": {
    name: "Half-Proficiency to Initiative",
    hint: "Provided by Jack of All Trades or Remarkable Athlete.",
    section: "Feats",
    type: Boolean
  },
  "weaponCriticalThreshold": {
    name: "Critical Hit Threshold",
    hint: "Allow for expanded critical range; for example Improved or Superior Critical",
    section: "Feats",
    type: Number,
    placeholder: 20
  }
};
