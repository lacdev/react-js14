// Pet
// - Especie
// - Raza
// - Nombre
// - Dueño
// * alimenta
// * duerme
// * juega
// * hace sus necesidades

class Pet {
  constructor(species, breed, name, owner) {
    this.species = species
    this.breed = breed
    this.name = name
    this.owner = owner
  }

  sleep() {
    return `${this.name} esta durmiendo`
  }

  eat() {
    return `${this.name} esta comiento`
  }
}

class Dog extends Pet {
  constructor(breed, name, owner, pedigree) {
    super('Canis ..', breed, name, owner)
    this.pedigree = pedigree
  }

  bark() {
    return 'guauuu'
  }
}

// Perro
// - HERECIA: Pet
// - pedigree
// - longevidad
// * ladrar
// * comen su popo
// * oler la cola
