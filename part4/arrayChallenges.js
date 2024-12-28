/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"]
let firstTea = teaFlavors[0]
// console.log(firstTea)

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"]
let favoriteCity = cities[2]
// console.log(favoriteCity)

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
let teaTypes = ["herbal tea", "white tea", "masala chai"]
teaTypes[1] = "jasmine tea"
// console.log(teaTypes[1])

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin")
// console.log(citiesVisited)

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
let lastOrder = teaOrders.pop()
// console.log(teaOrders)

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas
// console.log(popularTeas)
// console.log(softCopyTeas)

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];
// let hardCopyCities = [...topCities];
// // let hardCopyCities = topCities.slice();
// topCities.pop();
// // console.log(hardCopyCities);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
// let worldCities = [...europeanCities, ...asianCities]
let worldCities = europeanCities.concat(asianCities)

// console.log(worldCities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length
// console.log(menuLength)

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London")
// console.log(isLondonInList)

// IMP Concepts:

// Hard Copy
// A hard copy of an array (or object) creates an independent duplicate. Changes to the original do not affect the copy, and changes to the copy do not affect the original.

// Example
// let originalArray = [1, 2, 3];
// let hardCopy = [...originalArray]; // Using spread operator to create a hard copy

// // Modifying original
// originalArray.push(4);

// console.log(originalArray); // [1, 2, 3, 4]
// console.log(hardCopy);      // [1, 2, 3] (Unchanged)
// How to Create a Hard Copy
// Using the spread operator: [...originalArray]
// Using the slice method: originalArray.slice()
// Using Array.from(): Array.from(originalArray)



// Soft Copy
// A soft copy means the new variable references the same array (or object) in memory. Any changes to the original or the copy affect both because they share the same reference.

// Copy code
// let originalArray = [1, 2, 3];
// let softCopy = originalArray; // Soft copy (both point to the same array)

// // Modifying original
// originalArray.push(4);

// console.log(originalArray); // [1, 2, 3, 4]
// console.log(softCopy);      // [1, 2, 3, 4] (Affected)