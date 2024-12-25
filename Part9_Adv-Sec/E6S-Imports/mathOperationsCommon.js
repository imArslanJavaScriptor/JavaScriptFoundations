//named export

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// Exporting in Common Js
module.exports = {
  add,
  subtract,
  multiply,
};
