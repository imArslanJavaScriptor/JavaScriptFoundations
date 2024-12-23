function Person(name, age) {
  this.name = name
  this.age = age
}


function Car(make, model) {
  this.make = make
  this.model = model
}

let myCar = new Car("Honda", "Civic X")
let myNewCar = new Car("Hyundai", "Sonata")
console.log(myCar)
console.log(myNewCar)


let arslan = new Person("Arslan", 20)
let hammad = new Person("Hammad", 18)
let bablu = new Person("Bablu", 16)
let hadi = new Person("Hadi", 10)
console.log(arslan)
console.log(hammad)
console.log(bablu)
console.log(hadi)


function Tea(type) {
  this.type = type
  this.description = function() {
    return `This is a cup of ${this.type}`
  }
}

let LemonTea = new Tea("Lemon Tea")
let desc = LemonTea.description()
console.log(desc)
console.log(LemonTea.description())
console.log(LemonTea.type)

function Animal(species) {
  this.species = species
}

Animal.prototype.soud = function() {
  return `${this.species} makes sound`
}

let Cat = new Animal("Cat")
console.log(Cat.soud())

function Drink(type){
  if(!new.target) {
    throw new Error("This is a Constructor Function Make Sure to Start with New Key Word");
  }
  this.type = type
}

let AlmondMilk = new Drink("Almond Milk") 
// let AlmondMilk = Drink("Almond Milk") 
// console.log(AlmondMilk)