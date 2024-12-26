// Data Types

// Primtive Types
// Null, Number, String, Symbol, Boolean, BigInt, Undefined

// Non-Primitive / Reffrence Types
// Objects, Arrays, Functions

let AccountInfo = null;
let score = 100;
let userName = "HM-Arslan";
let unique = Symbol(120);
let Pakistani = true;
let bigNumber = BigInt(12020323452134312345312345n);
let Winner = undefined;

let userInfo = {
  userName: "Arslan",
  userAge: 20,
};
console.log(userInfo.userName);
console.log(userInfo["userAge"]);

let dataTypesList = [
  "Apple",
  "Mango",
  "Banana",
  10,
  20,
  30,
  true,
  false,
  { myName: "Arslan" },
  null,
  undefined,
];
function sayGoodMorning() {
  console.log(`Good Morning Sir ${userName}`);
}

sayGoodMorning();
