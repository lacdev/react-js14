const { ThirteenMpSharp } = require('@mui/icons-material')

class Hero {
  constructor(name, level, ultimate, hp = 100) {
    this.name = name
    this.level = level
    this.ultimate = ultimate
    this.hp = hp
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

  primaryHeal(ally) {
    if (ally.hp < 100 && ally.hp > 0) {
      ally.hp += 10
      return `${this.name} has healed ${ally.name} with ${this.spell}.`
    }

    if (ally.hp === 0) {
      return `${this.name} is out of combat and can't be healed.`
    }
  }

  secondaryHeal(ally) {
    if (ally.hp < 100 && ally.hp > 0) {
      ally.hp += 10
      return `${this.name} has healed ${ally.name} with ${this.spell}.`
    }

    if (ally.hp === 0) {
      return `${this.name} is out of combat and can't be healed.`
    }
  }
}

class Frontline extends Hero {
  constructor(
    name,
    level,
    spell,
    spell2,
    ultimate,
    shield = 50,
    type = 'Frontline'
  ) {
    // Chain constructor with super
    super(name, level)

    // Add a new property
    this.spell = spell
    this.spell2 = spell2
    this.ultimate = ultimate
    this.shield = shield
    this.type = type
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

  primaryAttack(enemy) {
    if (enemy.hp === 10) {
      enemy.hp -= 10
      return `${this.name} has killed ${enemy.name} with ${this.spell}`
    }

    if (enemy.hp <= 100) {
      enemy.hp -= 10
      return `${this.name} has attacked ${enemy.name} with ${this.spell}`
    }
    if (enemy.hp === 0) {
      return `${enemy.name} is out of combat already.`
    }
  }

  secondaryAttack(enemy) {
    if (enemy.hp === 10) {
      enemy.hp -= 10
      return `${this.name} has killed ${enemy.name} with ${this.spell2}`
    }

    if (enemy.hp <= 100) {
      enemy.hp -= 10
      return `${this.name} has attacked ${enemy.name} with ${this.spell2}`
    }
    if (enemy.hp === 0) {
      return `${enemy.name} is out of combat already.`
    }
  }
}

const Seris = new Support(
  'Seris',
  10,
  'Rejuvenate',
  'Life Link',
  'Resurrection'
)

const Raum = new Frontline('Raum', 50, 'earthquake', 'shield', 'Overpower')

const Strix = new Damage(
  'Strix',
  30,
  'Sniper shot',
  'Quick Pistol',
  'Cross Fire'
)

const Andro = new Damage('Andro', 40, 'Revolver', 'Light Shot', 'Cursed Arm')
