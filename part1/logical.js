// && -> and
// || -> or
// ! -> reverse

let isLogedIn = true;
let isPaid = true;

if (isLogedIn && isPaid) {
  console.log("You can Access This Product");
}

let chekingAccess =
  isLogedIn || isPaid ? "You Have The Access" : "You Don't have the Access";

// Reverse Checking
let validatingUser = !isLogedIn ? "Please Loggin First" : "OK";

console.log(chekingAccess);
console.log(validatingUser);
