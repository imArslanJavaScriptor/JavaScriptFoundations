// Checking if a number is greater than another number:
let num1 = 5;
let num2 = 8;
if(num1 > num2) {
  console.log("num1 is Greater than another num2")
}else {
  console.log("Nope, num1 is not greater")
}


// Checking if a string is equal to another string:
let username = "chai";
let anotherUsername = "chai";

if(username === anotherUsername) {
  console.log("Pick Another Username")
}else {
  console.log("You can use this name")
}
//Checking if a variable is a number or not:

let score = "44";
if(typeof score === "number") {
  console.log("Yes score is a number")
}else {
  console.log("The Type of score is not a number")
}

//Checking if a boolean value is true or false:
let isTeaReady = false;

if(isTeaReady) {
  console.log("Tea is Ready")
}else {
  console.log("Tea is not ready")
}

// Checking if an array is empty or not:

let items = ["Item"];

if(items.length) {
  console.log("Array is not Empty")
}else {
  console.log("Array is Empty")
}