// Challange 1: Playing with Types
{
  // Task 1:
  // Write a function stringToNumber that takes a string
  // input and tries to convert it to a number. If the
  // conversion fails, return "Not a number".

  function stringToNumber(input) {
    let num = Number(input);
    if (isNaN(num)) {
      return `Not a number`;
    }
  }

  // Task 2:
  // Write a function flipBoolean that takes any input
  // and converts it to its boolean equivalent, then flips it.
  // For example, true becomes false, 0 becomes true, etc.

  function flipBoolean(input) {
    return !Boolean(input);
  }

  console.log(flipBoolean(false));

  // Task 3:
  // Write a function whatAmI that takes an input
  // and returns a string describing its type after conversion.
  // If it's a number, return "I'm a number!", if it's a string, return
  // "I'm a string!"

  function whatAmI(input) {
    return `I'm a ${typeof input}`;
  }
  console.log(whatAmI("Arslan"));
  console.log(whatAmI(20));

  // Task 4:
  // Write a function isItTruthy that takes an input
  // and returns "It's truthy!" if the value is truthy
  // in JavaScript, or "It's falsey!" if it's falsey.

  function isItTruthy(input) {
    if (input) {
      return "It's truthy!";
    } else {
      return "It's falsey!";
    }
  }

  console.log(isItTruthy(""));
  console.log(isItTruthy(10));
  console.log(isItTruthy("Arslan"));
}

// Challange 2: Playing with Variables
{
  /*
  Task:
  Perform the following mathematical operations
  on the provided variables a and b

  Add
  Subtract
  Multiply
  Divide
  Increment
  Decrement
  Reminder

*/
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
}

// Challange 3: Arrays and Methods
{
  // Utilise the inbuilt methods of arrays in
  // Javascript to solve the below tasks:
  // Task 1: Array Filtering
  // Write a function filterNumbers(arr) that
  // returns only numbers from a mixed array

  function filterNumbers(arr) {
    return arr.filter((value) => typeof value === "number");
  }
  let resArr = [1, 2, 3, 4, "Arslan", "King"];
  console.log(filterNumbers(resArr));

  // Task 2: Array Reversal
  // Write a function reverseArray(arr) that reverses the array
  function reverseArray(arr) {
    return arr.slice().reverse();
  }
  console.log(reverseArray(resArr));

  // Task 3: Find Maximum in an Array
  // Write a function findMax(arr) that returns
  // the largest number in the array

  function findMax(arr) {
    return Math.max(...arr);
  }
  console.log(findMax(filterNumbers(resArr)));

  // Task 4: Remove Duplicates from an Array
  // Write a function removeDuplicates(arr) that
  // returns a new array with all duplicates removed
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  let arr = [1, 2, 3, 4, 5, 5, 5, 5, 5, 6, 6, 66, 6, 7, 7, 7, 7];
  console.log(removeDuplicates(arr));

  // Task 5: Flatten a Nested Array
  // Write a function flattenArray(arr) that takes a nested
  // array and returns a single flattened array
  function flattenArray(arr) {
    return arr.flat(Infinity);
  }
  let SmapleArr = [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4]]]];
  console.log(flattenArray(SmapleArr));
}

// Challange 4: Loops
{
  // Task 1: Sum of First N Natural Numbers
  // Write a function sumOfN(n) that returns the
  // sum of the first n natural numbers

  function sumOfN(n) {
    return (n * (n + 1)) / 2;
  }

  // Task 2: Multiplication Table
  // Write a function printMultiplicationTable(n)
  // that returns the multiplication table for n.
  // Values return in the array must be of the format 2 * 2 = 4

  function printMultiplicationTable(n) {
    const table = [];
    for (let i = 1; i <= 10; i++) {
      table.push(`${n} * ${i} = ${n * i}`);
    }
    return table;
  }

  console.log(printMultiplicationTable(2));

  // Task 3: Count Vowels in a String
  // Write a function countVowels(str) that returns
  // the number of vowels (in both lower & uppercase)
  // in the given string str.

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
}

// Challange 5: Higher-Order Functions and Arrow Functions

{
  // All the following tasks must be strictly
  //  be writtern in arrow functions only.

  // Task 1: Using Array Methods
  // Write a function squareNumbers(arr) using map() and arrow functions

  const squareNumbers = (arr) => arr.map((num) => num ** 2);

  // Task 2: Custom Filter Function
  // Create a function filterEvenNumbers(arr) using filter() and arrow functions

  const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

  // Task 3: Sum of Positive Numbers
  // Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions

  const sumPositiveNumbers = (arr) =>
    arr.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);

  // Task 4: Transform Array of Objects
  // Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions

  const getNames = (arr) => arr.map((obj) => obj.name);

  // Task 5: Find the Longest Word
  // Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

  const findLongestWord = (arr) =>
    arr.reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );

  // Example input arrays
  const numbers = [1, 2, 3, 4, 5];
  const mixedNumbers = [-1, 2, -3, 4, 5];
  const objects = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
  const words = ["apple", "banana", "cherry", "watermelon"];

  // Task 1
  console.log(squareNumbers(numbers)); // [1, 4, 9, 16, 25]

  // Task 2
  console.log(filterEvenNumbers(numbers)); // [2, 4]

  // Task 3
  console.log(sumPositiveNumbers(mixedNumbers)); // 11

  // Task 4
  console.log(getNames(objects)); // ["Alice", "Bob", "Charlie"]

  // Task 5
  console.log(findLongestWord(words)); // "watermelon"
}

// Challange 6: Nested Functions and Context
{
  // Task 1: Using this in Objects
  // Create an object person with a method introduce()
  // that uses this additionally add properties of name & age
  // that will result in Hi, my name is Hitesh and I am 19.5
  // years old on calling introduce()

  const person = {
    name: "Hitesh",
    age: 19.5,
    introduce() {
      return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    },
  };

  // Example usage
  console.log(person.introduce()); // "Hi, my name is Hitesh and I am 19.5 years old."

  // Task 2: Function within a function
  // Write a function outer() that contains another function
  // inner() and returns a value of 'Inner function called'
  // on calling outer()
  function outer() {
    function inner() {
      return "Inner function called";
    }
    return inner();
  }

  // Example usage
  console.log(outer()); // "Inner function called"
}

// === JS Foundation Challenges Completed ===

// === Starting Hands on JavaScript OOP Challenges

// Challange 1: Prototypes in JavaScript
{
  // Task: Prototype Chaining
  // Create a constructor function Animal that has
  // a method speak() that return 'Animal speaking'.

  // Then create another constructor Dog that inherits
  // from Animal using prototypes.

  // The Dog constructor should add a method bark()
  // that returns 'Woof!'. Demonstrate the prototype
  // chain between Dog and Animal.

  // Constructor for Animal
  function Animal() {
    this.type = "Animal";
  }

  // Adding a method speak() to the Animal prototype
  Animal.prototype.speak = function () {
    return "Animal speaking";
  };

  // Constructor for Dog
  function Dog() {
    Animal.call(this); // Call the Animal constructor to inherit its properties
    this.type = "Dog";
  }

  // Inherit from Animal prototype
  Dog.prototype = Object.create(Animal.prototype);

  // Set the constructor of Dog back to Dog (optional, for clarity)
  Dog.prototype.constructor = Dog;

  // Adding a method bark() to the Dog prototype
  Dog.prototype.bark = function () {
    return "Woof!";
  };

  // Demonstrate the prototype chain
  const dog = new Dog();

  console.log(dog.speak()); // "Animal speaking"
  console.log(dog.bark()); // "Woof!"
  console.log(dog instanceof Dog); // true
  console.log(dog instanceof Animal); // true
}

// Challange 2: Functional Constructor and Errors
{
  // Task 1: Create a Functional Constructor
  // Create a functional constructor Person that takes
  // name and age as parameters. Add a method greet()
  // to the constructor that returns "Hello, my name is [name]".

  // Task 2: Handle Errors
  // Modify the Person constructor to throw an
  // error if the age is not a positive number.

  function Person(name, age) {
    // Throw error if age is not a positive number
    if (typeof age !== "number" || age <= 0) {
      throw new Error("Age must be a positive number");
    }

    this.name = name;
    this.age = age;

    // Method greet
    this.greet = function () {
      return `Hello, my name is ${this.name}`;
    };
  }

  // Example usage
  try {
    const person1 = new Person("Hitesh", 25);
    console.log(person1.greet()); // "Hello, my name is Hitesh"

    const person2 = new Person("John", -5); // This will throw an error
  } catch (error) {
    console.error(error.message); // "Age must be a positive number"
  }
}

// Challange 3: Classes, Objects, and Inheritance
{
  // Task 1: Class Inheritance
  // Create a class Vehicle with properties make and model,
  // and a method getDetails() that returns a string
  // "Make: [make], Model: [model]".
  // Create a subclass Car that extends Vehicle and adds
  // a method startEngine() that returns "Engine started".
  class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }

    getDetails() {
      return `Make: ${this.make}, Model: ${this.model}`;
    }
  }

  class Car extends Vehicle {
    startEngine() {
      return "Engine started";
    }
  }

  // Example usage
  const myCar = new Car("Toyota", "Corolla");
  console.log(myCar.getDetails()); // "Make: Toyota, Model: Corolla"
  console.log(myCar.startEngine()); // "Engine started"

  // Task 2: Method Overriding in Inheritance
  // Extend the Vehicle class from the previous task
  // to include a method move() that returns "The vehicle is moving".
  // Then, override the move() method in the Car class to return
  // "The car is driving".
  class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }

    getDetails() {
      return `Make: ${this.make}, Model: ${this.model}`;
    }

    move() {
      return "The vehicle is moving";
    }
  }

  class Car extends Vehicle {
    startEngine() {
      return "Engine started";
    }

    // Overriding the move method
    move() {
      return "The car is driving";
    }
  }

  // Example usage
  const myCar2 = new Car("Toyota", "Corolla");
  console.log(myCar2.move()); // "The car is driving"

  // Task 3: Static Methods in Classes
  // Add a static method isVehicle(obj) to the Vehicle class
  // that checks if a given object is an instance of Vehicle.
  // The method should return true if the object is a Vehicle
  // or a subclass of Vehicle, and false otherwise.
  class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }

    getDetails() {
      return `Make: ${this.make}, Model: ${this.model}`;
    }

    move() {
      return "The vehicle is moving";
    }

    // Static method
    static isVehicle(obj) {
      return obj instanceof Vehicle;
    }
  }

  class Car extends Vehicle {
    startEngine() {
      return "Engine started";
    }

    move() {
      return "The car is driving";
    }
  }

  // Example usage
  const myCar3 = new Car("Toyota", "Corolla");
  console.log(Vehicle.isVehicle(myCar3)); // true
  console.log(Vehicle.isVehicle({})); // false
}

// Challange 4: Encapsulation, Polymorphism, Abstraction, and Getters/Setters

{
  // Task 1: Encapsulation Using Getters and Setters
  // Create a class BankAccount with a private property _balance.
  // Add methods deposit(amount) and withdraw(amount). Use getters and
  // setters to access and modify the _balance while ensuring the balance
  // never goes negative.

  // Task 1
  class BankAccount {
    constructor(balance = 0) {
      if (balance < 0) {
        throw new Error("Initial balance cannot be negative");
      }
      this._balance = balance; // Encapsulated property
    }

    // Getter for balance
    get balance() {
      return this._balance;
    }

    // Setter for balance (Ensures non-negative balance)
    set balance(amount) {
      if (amount < 0) {
        throw new Error("Balance cannot be negative");
      }
      this._balance = amount;
    }

    // Method to deposit amount
    deposit(amount) {
      if (amount <= 0) {
        throw new Error("Deposit amount must be positive");
      }
      this._balance += amount;
    }

    // Method to withdraw amount
    withdraw(amount) {
      if (amount <= 0) {
        throw new Error("Withdrawal amount must be positive");
      }
      if (this._balance < amount) {
        throw new Error("Insufficient funds"); // Updated error message here
      }
      this._balance -= amount;
    }
  }

  // Example usage
  try {
    const account = new BankAccount(100);
    console.log(account.balance); // 100
    account.deposit(50);
    console.log(account.balance); // 150
    account.withdraw(200); // Error: Insufficient funds
  } catch (error) {
    console.error(error.message);
  }

  try {
    const invalidAccount = new BankAccount(-10); // Error: Initial balance cannot be negative
  } catch (error) {
    console.error(error.message);
  }

  // Task 2: Polymorphism with Method Overriding
  // Create a class Shape with a method area() that returns 0.
  // Create two subclasses Circle and Rectangle that override
  // the area() method to calculate the area of a circle and a
  // rectangle, respectively.
  class Shape {
    area() {
      return 0; // Default implementation
    }
  }

  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }

    // Overriding the area method
    area() {
      return Math.PI * this.radius ** 2;
    }
  }

  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }

    // Overriding the area method
    area() {
      return this.width * this.height;
    }
  }

  // Example usage
  const circle = new Circle(5);
  console.log(circle.area()); // Area of the circle: 78.53981633974483

  const rectangle = new Rectangle(4, 6);
  console.log(rectangle.area()); // Area of the rectangle: 24

  const genericShape = new Shape();
  console.log(genericShape.area()); // 0 (default implementation)
}

// === Hands on JS JavaScript OOP Challenges Completed ===

// === Starting Hands on Advance JavaScript  Challenges

// Challange 1: Asynchronous JavaScript with Event Loop
{
  // Task 1: Simulating Asynchronous Behavior
  // Create a function simulateAsyncTask() that
  // logs “Task started”, then after 2 seconds logs
  // “Task finished”.
  // Use setTimeout to simulate this behaviour.

  function simulateAsyncTask() {
    console.log("Task started");
    setTimeout(() => {
      console.log("Task finished");
    }, 2000); // 2 seconds delay
  }

  // Task 2: Simulate Multiple Async Tasks with Different Delays
  // Create a function simulateMultipleTasks() that starts three
  // asynchronous tasks with different delays
  // (1 second, 2 seconds, and 3 seconds).
  // Each task should log "Task [n] finished" where [n] is the task number.
  // Ensure the tasks run asynchronously.
  function simulateMultipleTasks() {
    setTimeout(() => {
      console.log("Task 1 finished");
    }, 1000); // 1 second delay

    setTimeout(() => {
      console.log("Task 2 finished");
    }, 2000); // 2 seconds delay

    setTimeout(() => {
      console.log("Task 3 finished");
    }, 3000); // 3 seconds delay
  }

  // Task 3: Async Task with Callback Function
  // Create a function fetchDataWithCallback(callback)
  // that simulates fetching data asynchronously using
  // setTimeout (after 2 seconds).
  // Once the data is “fetched”, it should invoke the provided callback function with "Fetched data" as an argument.

  function fetchDataWithCallback(callback) {
    setTimeout(() => {
      callback("Fetched data");
    }, 2000); // 2 seconds delay
  }
}

// Challange 2: Closures in JavaScript
{
  // Task 1: Creating a Counter Using Closures
  // Create a function createCounter() that returns a
  // function which increments and returns a counter value
  // each time it is called.

  function createCounter() {
    let count = 0; // This variable is private to the returned function

    return function () {
      count++;
      return count; // Return the updated count each time the function is called
    };
  }

  // Task 2: Rate Limiter Function
  // Create a function rateLimiter(fn, limit) that
  // returns a new function. The returned function allows
  // calling fn only once within a limit time in milliseconds.
  // If it is called again before the limit is reached, it should
  // return "Rate limit exceeded".

  function rateLimiter(fn, limit) {
    let lastCalled = 0;

    return function (...args) {
      const now = Date.now();
      if (now - lastCalled < limit) {
        return "Rate limit exceeded"; // Return the message if the function is called too soon
      }
      lastCalled = now;
      return fn(...args); // Otherwise, call the function
    };
  }

  // Task 3: Memoization Function
  // Write a function memoize(fn) that returns a memoized
  // version of fn. The memoized function should cache the
  // results of function calls, and return the cached result
  // if the same inputs are provided again.

  function memoize(fn) {
    const cache = new Map(); // Use a Map to store cached results

    return function (...args) {
      const key = JSON.stringify(args); // Create a unique key for each set of arguments

      if (cache.has(key)) {
        return cache.get(key); // Return cached result if available
      }

      const result = fn(...args); // Otherwise, compute the result
      cache.set(key, result); // Cache the result for future use
      return result;
    };
  }
}

// Challange 3: Prototypal Inheritance in JavaScript
{
  // Task 1: Create Inheritance Using Prototypes
  // Create a constructor Animal with a method makeSound().
  // Then create a constructor Dog that inherits from Animal
  // and adds a method bark()

  // Task 1

  function Animal() {}

  Animal.prototype.makeSound = function () {
    return "Animal sound"; // Return string to match expected output
  };

  function Dog() {}

  // Inherit methods from Animal
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog; // Restore the constructor property of Dog

  // Add a new method for Dog
  Dog.prototype.bark = function () {
    return "Woof!"; // Return string to match expected output
  };

  // Example usage
  const dog = new Dog();
  console.log(dog.makeSound()); // "Animal sound"
  console.log(dog.bark()); // "Woof!"

  // Task 2: Shape and Rectangle Inheritance
  // Create a constructor function Shape that takes color
  // as a parameter and has a method getColor() that returns the color.
  // Create another constructor Rectangle that inherits from Shape and adds
  // properties width and height. Add a method getArea() to Rectangle that
  // returns the area of the rectangle.

  // Task 2

  function Shape(color) {
    this.color = color;
  }

  Shape.prototype.getColor = function () {
    return this.color;
  };

  function Rectangle(width, height, color) {
    // Inherit properties from Shape
    Shape.call(this, color); // Call Shape constructor for setting color
    this.width = width;
    this.height = height;
  }

  // Inherit methods from Shape
  Rectangle.prototype = Object.create(Shape.prototype);

  // Add a method for getArea in Rectangle
  Rectangle.prototype.getArea = function () {
    return this.width * this.height;
  };

  // Example usage
  const rectangle = new Rectangle(5, 10, "blue");
  console.log(rectangle.getColor()); // "blue"
  console.log(rectangle.getArea()); // 50
}

// Challange 3: THIS and Binding Context
{
  // Task 1: Bind the Correct Context
  // Create an object person with properties name and a method
  // introduce(). Use the bind() method to ensure the method works
  // correctly when passed to another function.
  // Task 1
  const person = {
    name: "John",
    introduce: function () {
      console.log(`Hi, my name is ${this.name}.`);
    },
  };

  // Bind the introduce method to the person object
  const introducePerson = person.introduce.bind(person);

  // Now we can pass introducePerson to other functions, and it will correctly refer to the person object
  introducePerson(); // Hi, my name is John.

  // Task 2: Using call() to Invoke a Function with Different Contexts
  // Write a function introduce() that uses the this keyword to introduce
  // a person by name. Then, invoke introduce() using call() to introduce different people with the same function.

  // Task 2
  function introduce() {
    console.log(`Hi, my name is ${this.name}.`);
  }

  const person1 = { name: "John" };
  const person2 = { name: "Alice" };

  // Using call() to invoke the introduce function with different contexts
  introduce.call(person1); // Hi, my name is John.
  introduce.call(person2); // Hi, my name is Alice.

  // Task 3: Using apply() to Pass Arguments with Context
  // Create a function sum() that accepts two numbers and uses
  // this to access a multiplier value. Then, invoke sum() with
  // different contexts using apply(), passing the numbers as an array.
  // Task 3
  function sum(a, b) {
    console.log(`Sum: ${a + b} and Multiplier: ${this.multiplier}`);
  }

  const multiplier1 = { multiplier: 2 };
  const multiplier2 = { multiplier: 3 };

  // Using apply() to invoke sum() with different contexts and pass arguments as an array
  sum.apply(multiplier1, [5, 10]); // Sum: 15 and Multiplier: 2
  sum.apply(multiplier2, [5, 10]); // Sum: 15 and Multiplier: 3
}
