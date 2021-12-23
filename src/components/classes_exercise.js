const { ThirteenMpSharp } = require('@mui/icons-material')

class Hero {
  constructor(name, level, ultimate) {
    this.name = name
    this.level = level
    this.ultimate = ultimate
  }

  sayHi() {
    return `Hi, my name is ${this.name}!`
  }

  levelUp() {
    return (this.level += 1)
  }

  pushPayload() {
    return `${this.name} has pushed the payload one step further.`
  }

  useUltimate() {
    return `${this.name} has used his ${this.ultimate} ultimate ability`
  }
}

class Support extends Hero {
  constructor(name, level, spell, spell2, ultimate) {
    // Chain constructor with super
    super(name, level)

    // Add a new property
    this.spell = spell
    this.spell2 = spell2
    this.ultimate = ultimate
  }

  primaryHeal() {
    return `${this.name} has used ${this.spell}`
  }

  secondaryHeal() {
    return `${this.name} has used ${this.spell2}`
  }
}

class Frontline extends Hero {
  constructor(name, level, spell, spell2, ultimate) {
    // Chain constructor with super
    super(name, level)

    // Add a new property
    this.spell = spell
    this.spell2 = spell2
    this.ultimate = ultimate
  }

  primaryDefense() {
    return `${this.name} has used ${this.spell}`
  }

  secondaryDefense() {
    return `${this.name} has used ${this.spell2}`
  }
}

class Damage extends Hero {
  constructor(name, level, spell, spell2, ultimate) {
    // Chain constructor with super
    super(name, level)

    // Add a new property
    this.spell = spell
    this.spell2 = spell2
    this.ultimate = ultimate
  }

  primaryAttack() {
    return `${this.name} has used ${this.spell}`
  }

  secondaryAttack() {
    return `${this.name} has used ${this.spell2}`
  }
}

const Seris = new Support('Seris', 10, 'rejuvente', 'autoheal', 'Resurrection')

const Raum = new Frontline('Raum', 50, 'earthquake', 'shield', 'Overpower')

const Strix = new Damage(
  'Strix',
  30,
  'Sniper shot',
  'Quick Pistol',
  'Cross Fire'
)

const Andro = new Damage('Andro', 40, 'Revolver', 'Light Shot', 'Cursed Arm')
