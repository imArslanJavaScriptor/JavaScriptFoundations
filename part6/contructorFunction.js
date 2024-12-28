function Person (name, age) {
  this.name = name
  this.age = age
}

let user1 = new Person("Arslan", 20)
let user2 = new Person("Hadi", 10)
let user3 = new Person("Shery", 40)
let user4 = new Person("Mumtahin", 30)
let user5 = new Person("Muazim", 25)

// console.log(user1)
// console.log(user2)
// console.log(user3)
// console.log(user4)
// console.log(user5)

function Car(make, model) {
  this.make = make
  this.model = model
}

let Car1 = new Car("Honda", "Civic EK")
let Car2 = new Car("Audi", "A6")

// console.log(Car1)
// console.log(Car2)

function Tea(type) {
  this.type = type
  this.description = function () {
    return `This is a Cup of ${this.type}`
  }
}

let greenTea = new Tea("Green Tea")
let Chai  = new Tea("Everyday Chai")

// console.log(greenTea.description())
// console.log(Chai.description())

// function Animal(species) {
//   this.species = species;
// }

function Animal(Species) {
  this.Species = Species
}


Animal.prototype.sound = function() {
  return `${this.Species} Make Sound`
}
let animal1 = new Animal("Cat")
let animal2 = new Animal("Horse")

// console.log(animal1.sound())
// console.log(animal2.sound())

// function Drink(name) {
//   if (!new.target) {
//     throw new Error("Drink must be called with new keyword");
//   }
//   this.name = name;
// }

function Drink(name) {
  if(!new.target) {
    throw new Error("Constructor Function Drink must be called with new keyword")
  }
  this.name = name
}
let juice = new Drink("Mango Shake")
// let milk =  Drink("Almond Shake")
// console.log(juice)
// console.log(milk)
