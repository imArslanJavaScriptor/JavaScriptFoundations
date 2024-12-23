let computer = { cpu: 12 };
let arslan = {
  name:"HM-Arslan",
  age: 20,
  Health: "Good",
  Stremina: "Extreamely Good" 
}

let healtyPerson = {
  myName: "Arslan"
  // __proto__: arslan
}
// console.log(healtyPerson.__proto__)

Object.setPrototypeOf(healtyPerson, arslan)
console.log(`Healthy Person: `,healtyPerson);
console.log(`Value Comming From Healthy Person's Protoype : ${healtyPerson.age}`);
console.log(`Healthy Person Prototype: `, Object.getPrototypeOf(healtyPerson));
console.log(`Own Property`, healtyPerson.hasOwnProperty("myName"))


let lenovo = {
  screen: "HD",
  __proto__: computer,
};

let tomHardware = {};

// console.log(`lenovo `, lenovo.__proto__);

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

// console.log(`tesla `, Object.getPrototypeOf(tesla));
