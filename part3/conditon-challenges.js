// Checking if a number is greater than another number:
let num1 = 50
let num2 = 20

if(num1 > num2) {
  console.log("Number 1 is Greater Then Number 2")
}else {
  console.log("No, Number1 is not Greater Then Number 2")
}

// Checking if a string is equal to another string:
let myName = "Arslan"
let yourName = "HM-Arslan"
if(myName !== yourName) {
  console.log("You Both Have Unique Names")
}else {
  console.log("You Both have Same Name")
}

//Checking if a variable is a number or not:
let val = 100
if(typeof val === "number") {
  console.log("Val Variable is type of Number")
}else {
  console.log("val variable is not type of Number")
}

//Checking if a boolean value is true or false:
let userPaid = true
if(userPaid) {
  console.log("This User is Paid Provide Him Pro Access")
}else {
  console.log("Get Membership By Paying First")
}

// Checking if an array is empty or not:
let myArr = ["Lion", {userName: "Arslan", age: 20}, true]
if(myArr.length > 0) {
  console.log("This Array is Not Empty")
}else {
  console.log("This is an Empty Array");  
}

