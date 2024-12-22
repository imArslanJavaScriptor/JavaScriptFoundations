//Imporent info! we cannot use break and continue inside the functions these keywords are specially designed for loops

/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`
}

let teaOrder = makeTea("Yellow tea")
// console.log(teaOrder)

/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/
function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`
  }
  return confirmOrder()
}

let orderConfirmed = orderTea("Doodh Patti")
// console.log(orderConfirmed)


/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

const calculateTotal = (price, quantity) =>  price * quantity

let totalCost = calculateTotal(2700, 5000)

// console.log(totalCost)


/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/

function makeTea(tea){
  return `makeTea: ${tea}`
}
function processTeaOrder(teaFunction) {
  return teaFunction("earl grey")
}
let order = processTeaOrder(makeTea)
// console.log(order)

/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

function createTeaMaker() {
  return function(teaType) {
    return `Making ${teaType}`
  }
}

let Order = createTeaMaker()
// console.log(Order("Green Tea"))


// Extra Info
// We have the Access the vairables that we defined inside the function in the
// entire Functions Scope
function createLogoMaker(LogoName) {
  let logoOwner = LogoName
  logoOwner.toUpperCase()
  return function(logoCost) {
    return function(logoType) {
      return `Making ${logoType} for ${logoOwner}. in Just ${logoCost} `
    }
  }
}

let LogoOwner = createLogoMaker("Sir Arslan")
let logoCost = LogoOwner("$10K")
console.log(logoCost("Premium Logo"))

// What We Call These Concepts
// Closures:

// Your code demonstrates closures, a feature in JavaScript where a function "remembers" variables from its parent scope even after the parent function has finished executing.
// In this case, the second inner function uses logoOwner from the createLogoMaker function and logoCost from the first inner function.
// Example:

// return `Making ${logoType} for ${logoOwner}. in Just ${logoCost} `;
// Higher-Order Functions:

// A higher-order function is a function that either takes another function as an argument or returns a function.
// createLogoMaker is a higher-order function because it returns a function.
// Function Currying:

// Your function is an example of currying, a technique where a function doesn't take all its arguments upfront. Instead, it takes them one at a time through multiple calls.
// createLogoMaker takes LogoName, the first inner function takes logoCost, and the second inner function takes logoType.