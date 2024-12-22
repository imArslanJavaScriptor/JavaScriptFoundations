// EX1: Playing with Types
function stringToNumber(input) {
    let num = Number(input);
    if (isNaN(num)) {
        return "Not a number";
    }
    return num;
  }
//  console.log(stringToNumber("10"))
  
  function flipBoolean(input) {
    return !Boolean(input)
  }
//   console.log(flipBoolean(false))
  
  function whatAmI(input) {
    return `I'm a ${typeof(input)}!`
  }

//   console.log(whatAmI(20))
  
  function isItTruthy(input) {
    if (input) {
        return "It's truthy!";
    } else {
        return "It's falsey!";
    }
  }
//   console.log(isItTruthy(10))
//   console.log(isItTruthy(""))

// EX2: Playing with Variables
// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
    return a + b;
}

// Subtract small value from larger one
function subtract() {
    return b - a;
}

function multiply() {
    return a * b;
}

// Divide larger value by small
function divide() {
    return b / a;
}

// Increase value of a by 1
function increment() {
    return a + 1;
}

// Decrease value of b by 1
function decrement() {
    return b - 1;
}

// Divide larger value by small to find the reminder
function reminder() {
    return b % a;
}


// EX3: Array Methods
function filterNumbers(arr) {
    return arr.filter(item => typeof item === "number");
  }
  let resArr = [1,2,3,4, "Arslan", "King", 6,7,8,9,10]
  let res = filterNumbers(resArr)
  // console.log(res)
  
  function reverseArray(arr) {
    return arr.slice().reverse();
  }
//   console.log(reverseArray(resArr))
  
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  let arr = [1,2,3,4,5,5,5,5,5,6,6,66,6,7,7,7,7]
//   console.log(removeDuplicates(arr))
  
  function flattenArray(arr) {
    return arr.flat(Infinity);
  }
  
  let SmapleArr = [1,2,3,4, [1,2,3,4, [1,2,3,4, [1,2,3,4]]]]
//   console.log(flattenArray(SmapleArr))


//   EX4: Loops

function sumOfN(n) {
    return (n * (n + 1) /2);
  }
  
  function printMultiplicationTable(n) {
    const table = [];
    for (let i = 1; i <= 10; i++) {
      table.push(`${n} * ${i} = ${n * i}`);
    }
    return table;
  }
  
  console.log(printMultiplicationTable(2));
  
  function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  