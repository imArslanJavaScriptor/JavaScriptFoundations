/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/


// let sum = 0
// let i = 1
// while(i <= 5) {
//   sum += i
//   i++
// }
// console.log(sum)


/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

// let i = 5
// let countdown = []
// while (i > 0) {
//   countdown.push(i)
//   i--
// }
// console.log(countdown)





/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/

// let askUser;
// let teaCollection = []

// do {
//   askUser = prompt("What is your favourite tea?")
//   if(askUser !== "stop") {
//     teaCollection.push(askUser)
//   }
  
// } while (askUser !== "stop");
// console.log(teaCollection)



/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

// let total = 0;
// let num = 1;
// do {
//   total += num
//   num++
// } while (num <= 3);
// console.log(total)


/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

// let arr = [2,4,6]
// let multipliedNumbers = []
// for(let i = 0; i < arr.length; i++ ) {
//   multipliedNumbers.push(arr[i] * 2)
// }
// console.log(multipliedNumbers)


/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let citiesArray = ["Paris", "New York", "Tokyo", "London"]
let cityList = []
for(let i = 0; i < citiesArray.length; i++) {
  cityList.push(citiesArray[i])
}
console.log(cityList)