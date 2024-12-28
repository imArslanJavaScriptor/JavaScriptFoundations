let computer = {cpu: 20}
let Lenovo = {
  screen: "FHD",
  __proto__: computer
}
let TomHardware = {} 

console.log(Lenovo.__proto__)
console.log(Lenovo.cpu)

let GenericCar = {tyres: 4}

let Tesla = {
  driver: "AI",
}

Object.setPrototypeOf(Tesla, GenericCar)
console.log("Tesla", Object.getPrototypeOf(Tesla))


// Practice Exercises

// EX1:
let Animal = { eats: true };
let Rabbit = { jumps: true };

// Task: Set `animal` as the prototype of `rabbit`.
// Check if `rabbit` has access to the `eats` property.

Object.setPrototypeOf(Rabbit, Animal)
console.log(Rabbit.eats)


// EX2:
let Vehicle = { wheels: 4 };
let Bike = { type: "two-wheeler" };

// Task: Dynamically set `vehicle` as the prototype of `bike` using `Object.setPrototypeOf`.
// Check if `bike` can access the `wheels` property.
Object.setPrototypeOf(Bike, Vehicle)
console.log(Bike.wheels)


// EX3:
let Gadget = { powered: true };
let SmartPhone = { hasTouchScreen: true };
let Iphone = { model: "iPhone 14" };

// Task: 
// 1. Set `gadget` as the prototype of `smartphone`.
// 2. Set `smartphone` as the prototype of `iphone`.
// Check if `iphone` can access the `powered` property.

Object.setPrototypeOf(SmartPhone, Gadget)
Object.setPrototypeOf(Iphone, SmartPhone)
console.log("Access: ", Iphone.powered)


// EX4:
let Car = { doors: 4 };
let ElectricCar = { doors: 2 };

// Task: Set `car` as the prototype of `electricCar`.
// Check the value of `electricCar.doors` before and after setting the prototype.
console.log(ElectricCar.doors)
Object.setPrototypeOf(ElectricCar, Car)
console.log(ElectricCar)
console.log(ElectricCar.__proto__)
console.log(ElectricCar.__proto__.doors)


let Parent = { generation: 1 };
let Child = Object.create(null);

// Task: Try setting `parent` as the prototype of `child`.
// Check if `child` can access the `generation` property.

Object.setPrototypeOf(Child, Parent)
console.log("Child: ", Child)
console.log("Child Getting Generation Access: ", Child.generation)