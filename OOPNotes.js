class Wallet {
    #balance = 0;  
    addMoney(amount) {
      if (amount <= 0) {
        return 'Invalid amount';
      }
      this.#balance += amount;
      return `Added: $${amount}`;
    }
    getBalance() {
      return `Wallet balance: $${this.#balance}`;
    }
  }
  const myWallet = new Wallet();
  console.log(myWallet.addMoney(100)); // $100 جمع کریں
  console.log(myWallet.getBalance()); // بیلنس چیک کریں
  
  class User {
    #password;
  
    constructor(username, password) {
      this.username = username;
      this.#password = password;
    }
  
    checkPassword(inputPassword) {
      return this.#password === inputPassword ? 'Access granted' : 'Access denied';
    }
  }
  
  const user = new User('Snap', '12345');
  console.log(user.checkPassword('wrong')); // Access denied
  console.log(user.checkPassword('12345')); // Access granted
  class Product {
    #stock = 0;
  
    addStock(amount) {
      if (amount <= 0) {
        return 'Invalid stock amount';
      }
      this.#stock += amount;
      return `Stock updated: ${this.#stock}`;
    }
  
    sellProduct(quantity) {
      if (quantity > this.#stock) {
        return 'Not enough stock';
      }
      this.#stock -= quantity;
      return `Stock remaining: ${this.#stock}`;
    }
  
    getStock() {
      return `Available stock: ${this.#stock}`;
    }
  }
  
  const product = new Product();
  console.log(product.addStock(50)); // اسٹاک بڑھائیں
  console.log(product.sellProduct(10)); // پروڈکٹ سیل کریں
  console.log(product.getStock()); // اسٹاک چیک کریں
  class BankAccount {
    #balance = 0;
  
    deposit(amount) {
      if (amount <= 0) {
        return 'Invalid deposit amount';
      }
      this.#balance += amount;
      return `Deposited: $${amount}`;
    }
  
    withdraw(amount) {
      if (amount > this.#balance) {
        return 'Insufficient balance';
      }
      this.#balance -= amount;
      return `Withdrawn: $${amount}`;
    }
  
    getBalance() {
      return `Current balance: $${this.#balance}`;
    }
  }
  
  const account = new BankAccount();
  console.log(account.deposit(200)); // $200 جمع کریں
  console.log(account.withdraw(50)); // $50 نکالیں
  console.log(account.getBalance()); // بیلنس چیک کریں
  class Library {
    #books = [];
  
    addBook(bookName) {
      this.#books.push(bookName);
      return `Book added: ${bookName}`;
    }
  
    getBooks() {
      return `Available books: ${this.#books.join(', ')}`;
    }
  }
  
  const library = new Library();
  console.log(library.addBook('1984')); // کتاب شامل کریں
  console.log(library.addBook('The Alchemist')); // ایک اور کتاب شامل کریں
  console.log(library.getBooks()); // کتابیں دیکھیں
          

// Polymorphism Exercises
class Animal {
    sound() {
      return `Animals make sound`;
    }
  }
  
  class Dog extends Animal {
    sound() {
      return `Woof Woof`;
    }
  }
  
  class Cat extends Animal {
    sound() {
      return `Meow`;
    }
  }
  
  class Cow extends Animal {
    sound() {
      return `Moo`;
    }
  }
  
  const dog = new Dog();
  const cat = new Cat();
  const cow = new Cow();
  
  console.log(dog.sound()); // Woof Woof
  console.log(cat.sound()); // Meow
  console.log(cow.sound()); // Moo
  class Shape {
    calculateArea() {
      return `Cannot calculate area`;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
    }
  
    calculateArea() {
      return this.side * this.side;
    }
  }
  
  class Rectangle extends Shape {
    constructor(length, width) {
      super();
      this.length = length;
      this.width = width;
    }
  
    calculateArea() {
      return this.length * this.width;
    }
  }
  
  const circle = new Circle(5);
  const square = new Square(4);
  const rectangle = new Rectangle(10, 5);
  
  console.log(circle.calculateArea()); // Area of Circle
  console.log(square.calculateArea()); // Area of Square
  console.log(rectangle.calculateArea()); // Area of Rectangle

  class Employee {
    getSalary() {
      return `Base salary is not defined`;
    }
  }
  
  class FullTimeEmployee extends Employee {
    getSalary() {
      return `Full-time salary: $3000`;
    }
  }
  
  class PartTimeEmployee extends Employee {
    getSalary() {
      return `Part-time salary: $1000`;
    }
  }
  
  const fullTime = new FullTimeEmployee();
  const partTime = new PartTimeEmployee();
  
  console.log(fullTime.getSalary()); // Full-time salary
  console.log(partTime.getSalary()); // Part-time salary

  class Vehicle {
    move() {
      return `Vehicles move`;
    }
  }
  
  class Car extends Vehicle {
    move() {
      return `Car moves on roads`;
    }
  }
  
  class Bike extends Vehicle {
    move() {
      return `Bike moves faster on roads`;
    }
  }
  
  const car = new Car();
  const bike = new Bike();
  
  console.log(car.move()); // Car moves on roads
  console.log(bike.move()); // Bike moves faster on roads

  class Payment {
    processPayment() {
      return `Processing payment`;
    }
  }
  
  class CreditCard extends Payment {
    processPayment() {
      return `Payment processed using Credit Card`;
    }
  }
  
  class PayPal extends Payment {
    processPayment() {
      return `Payment processed using PayPal`;
    }
  }
  
  const creditCard = new CreditCard();
  const payPal = new PayPal();
  
  console.log(creditCard.processPayment()); // Credit Card
  console.log(payPal.processPayment()); // PayPal
  

// Static Methods - Simple Urduish Explanation
// Static methods wo methods hote hain jo directly class ke saath call kiye jaate hain, na ke kisi object ke saath. Matlab aapko class ka instance (object) banane ki zarurat nahi hoti in methods ko use karne ke liye.

// Static Methods ki Khasiyat:
// Static methods class ke instance se nahi chalein ge, sirf class se directly chalein ge.
// Static methods ka use mostly tab hota hai jab aapko class ka shared behavior banana ho jo kisi specific object par depend nahi karta.
// static keyword ka istemal karke methods ko define kiya jata hai.
// Aapke Code Ki Samajh:
// javascript
// Copy code
class Calculator {
  static add(a, b) {
    return a + b; // Addition ka function
  }

  static multiply(a, b) {
    return a * b; // Multiplication ka function
  }
}

// Object banane ki koshish:
let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3)); // Error: Static method object ke saath nahi chalega
// console.log(miniCalc.multiply(2, 3)); // Error: Same as above

// Class ke saath directly call:

// Static Methods ke Fayde:
// Utility Functions: Jab aapko aise functions likhne ho jo kisi specific object pe depend na karein (e.g., calculations, conversions).
// Memory Efficient: Static methods class ke saath hi rehte hain, alag-alag objects ke liye naye copies nahi banti.
// Reusability: Aap unhe directly kisi bhi part of code me reuse kar sakte hain bina instance banaye.
class TemperatureConverter {
    static toCelsius(fahrenheit) {
      return ((fahrenheit - 32) * 5) / 9;
    }
  
    static toFahrenheit(celsius) {
      return (celsius * 9) / 5 + 32;
    }
  }
  
  console.log(TemperatureConverter.toCelsius(100)); // Output: Celsius temperature
  console.log(TemperatureConverter.toFahrenheit(37.8)); // Output: Fahrenheit temperature

  class MathUtil {
    static square(number) {
      return number * number;
    }
  
    static cube(number) {
      return number * number * number;
    }
  }
  
  console.log(MathUtil.square(5)); // Output: 25
  console.log(MathUtil.cube(3)); // Output: 27

  
  class StringUtil {
    static reverse(string) {
      return string.split('').reverse().join('');
    }
  
    static toUpperCase(string) {
      return string.toUpperCase();
    }
  }
  
  console.log(StringUtil.reverse('snap')); // Output: pans
  console.log(StringUtil.toUpperCase('snap')); // Output: SNAP
  
  class AreaCalculator {
    static circle(radius) {
      return Math.PI * radius * radius;
    }
  
    static rectangle(length, width) {
      return length * width;
    }
  }
  
  console.log(AreaCalculator.circle(5)); // Output: Area of Circle
  console.log(AreaCalculator.rectangle(10, 20)); // Output: Area of Rectangle

  
  class DiscountCalculator {
    static calculate(price, discountPercentage) {
      return price - (price * discountPercentage) / 100;
    }
  }
  
  console.log(DiscountCalculator.calculate(1000, 20)); // Output: Discounted Price
  console.log(DiscountCalculator.calculate(500, 10)); // Output: Discounted Price
  

//   Getters and Setters - In-Depth and Simple Explanation
//   Getters and setters are special methods used to control how properties of a class are accessed and updated. They help to ensure data encapsulation and maintain data integrity. Let's break this concept step by step:
  
//   What are Getters?
//   A getter is a method that allows you to retrieve (get) the value of a property.
//   It behaves like a property, but internally, it executes a function to return a value.
//   Getters are useful when you want to customize how data is retrieved.
//   Example:
//   If someone tries to access the salary property, you can return a customized value or message using the getter.
  
//   What are Setters?
//   A setter is a method that allows you to set (update) the value of a property.
//   It is used to validate or control the data before updating the property.
//   Setters are useful when you want to ensure only valid data is assigned to a property.
//   Example:
//   If someone tries to update the salary property, you can validate the value (e.g., it should not be negative) before actually updating it.

class Employee {
  #salary; // Private property

  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    }
    this.name = name;
    this.#salary = salary; // Private property is set in constructor
  }

  // Getter for salary
  get salary() {
    return `You are not allowed to see salary`; // Always return a fixed message
  }

  // Setter for salary
  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary"); // Validation: salary cannot be negative
    } else {
      this._salary = value; // Sets the new value
    }
  }
}

// Creating a new Employee object
let emp = new Employee("Alice", -50000); // Error because salary is negative
console.log(emp._salary); // Access the _salary property (if it exists)
emp.salary = 60000; // Updates the salary using the setter

// Simplified Example
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary; // Direct property access
  }
}

let emp = new Employee("Alice", -50000);
console.log(emp.salary); // Output: -50000 (Invalid salary, no validation)

// With Getters & Setters
class Employee {
  #salary; // Private property

  constructor(name, salary) {
    this.name = name;
    if (salary < 0) {
      throw new Error("Salary cannot be negative");
    }
    this.#salary = salary;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this.#salary = value;
    }
  }
}

let emp = new Employee("Alice", 50000);
console.log(emp.salary); // Output: 50000
emp.salary = -10000; // Output: Invalid Salary

/*
Exercises to Practice Getters and Setters
1. Bank Account Example
Create a BankAccount class with:

A private property #balance.
A getter for balance that shows "You cannot access balance directly".
A setter for balance that ensures balance cannot be negative.
2. Temperature Conversion
Create a Temperature class with:

A private property #celsius.
A getter fahrenheit that converts Celsius to Fahrenheit.
A setter fahrenheit that converts Fahrenheit to Celsius and sets it.
3. Product Inventory
Create a Product class with:

A private property #price.
A getter for price that adds a 10% tax before returning the value.
A setter for price that ensures the price is not negative.
4. Age Validator
Create a Person class with:

A private property #age.
A getter for age that returns a message like "Age is confidential".
A setter for age that ensures age is greater than or equal to 0.
5. Car Speed
Create a Car class with:

A private property #speed.
A getter that adds " km/h" to the speed.
A setter that ensures speed is a positive value.
How to Practice and Master This Concept
Build Examples: Practice with small, real-world problems (e.g., salary, bank account, age validation).
Understand Access Control: Experiment with private fields (#field) and observe how getters and setters make them accessible.
Use Debugging Tools: Add console.log statements in getters and setters to see when they are called.
Practice Validation: Write setter logic to validate data before updating properties.
Explore Frameworks: See how getters and setters are used in frameworks like React or Vue for reactivity.
*/

// Call, Apply, Bind - Simple Urduish Explanation
// Call, Apply aur Bind JavaScript ke methods hain jo functions ka behavior control karte hain. Yeh methods humein allow karte hain ke hum kisi object ko bind karein aur uska context (this) change karein.

/*

### **Call, Apply, Bind - Simple Urduish Explanation**

**Call, Apply aur Bind** JavaScript ke methods hain jo functions ka behavior control karte hain. Yeh methods humein allow karte hain ke hum kisi object ko bind karein aur uska context (`this`) change karein.

---

### **`call` Method**

- **Definition**: `call` method ek function ko **immediately invoke** karta hai aur uska context (`this`) set karta hai kisi dusre object ke sath. Arguments ko directly pass kiya jata hai.
- **Use Case**: Jab aapko kisi object ka context (`this`) change karke uska method kisi aur object ke liye use karna ho.

#### Syntax:
```javascript
functionName.call(context, arg1, arg2, ...);
```

#### Example:
```javascript
let person = { name: "Alice" };

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

console.log(greet.call(person, "Hello", "!")); // Output: "Hello, Alice!"
```

---

### **`apply` Method**

- **Definition**: `apply` method bhi `call` ki tarah hi hota hai, lekin arguments ko **array ke form mein** pass karte hain.
- **Use Case**: Jab arguments ki ek array already ho aur aap usse pass karna chahte ho.

#### Syntax:
```javascript
functionName.apply(context, [arg1, arg2, ...]);
```

#### Example:
```javascript
let person = { name: "Bob" };

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

console.log(greet.apply(person, ["Hi", "?"])); // Output: "Hi, Bob?"
```

---

### **`bind` Method**

- **Definition**: `bind` method ek **new function create karta hai** jo kisi specific context (`this`) ke sath bind hota hai. Iska execution **delayed** hota hai.
- **Use Case**: Jab aapko ek function ko context ke sath save karna ho aur baad mein call karna ho.

#### Syntax:
```javascript
let newFunction = functionName.bind(context, arg1, arg2, ...);
```

#### Example:
```javascript
let person = { name: "Charlie" };

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

let boundGreet = greet.bind(person, "Hey");
console.log(boundGreet("!")); // Output: "Hey, Charlie!"
```

---

### **Comparison Table**

| Method  | Executes Immediately? | Pass Arguments | Creates New Function? |
|---------|------------------------|----------------|------------------------|
| `call`  | Yes                    | Comma-separated| No                     |
| `apply` | Yes                    | Array          | No                     |
| `bind`  | No                     | Comma-separated| Yes                    |

---

### **Exercises**

#### **Call Method Exercises**

1. Create an `add` function to add numbers, and call it with different objects containing values.
   ```javascript
   let numbers = { a: 5, b: 10 };
   function add() {
     return this.a + this.b;
   }
   console.log(add.call(numbers)); // Output: 15
   ```

2. Use `call` to borrow a method from another object.
   ```javascript
   let car = { brand: "Toyota" };
   let bike = { brand: "Yamaha" };

   function describe() {
     return `This is a ${this.brand}`;
   }
   console.log(describe.call(car));  // Output: "This is a Toyota"
   console.log(describe.call(bike)); // Output: "This is a Yamaha"
   ```

3. Use `call` to pass additional arguments to a function.
   ```javascript
   function multiply(x, y) {
     return x * y;
   }
   console.log(multiply.call(null, 5, 4)); // Output: 20
   ```

4. Use `call` with a constructor function.
   ```javascript
   function Person(name, age) {
     this.name = name;
     this.age = age;
   }

   function Student(name, age, grade) {
     Person.call(this, name, age);
     this.grade = grade;
   }

   let student = new Student("Ali", 20, "A");
   console.log(student); // Output: { name: "Ali", age: 20, grade: "A" }
   ```

5. Use `call` with built-in JavaScript methods.
   ```javascript
   let array = [1, 2, 3];
   console.log(Math.max.call(null, ...array)); // Output: 3
   ```

---

#### **Apply Method Exercises**

1. Pass an array of arguments to a function using `apply`.
   ```javascript
   let numbers = [5, 10];
   function add(x, y) {
     return x + y;
   }
   console.log(add.apply(null, numbers)); // Output: 15
   ```

2. Use `apply` to find the maximum value in an array.
   ```javascript
   let array = [3, 6, 1, 8, 2];
   console.log(Math.max.apply(null, array)); // Output: 8
   ```

3. Use `apply` to concatenate strings.
   ```javascript
   function joinStrings(separator, strings) {
     return strings.join(separator);
   }
   console.log(joinStrings.apply(null, ["-", ["a", "b", "c"]])); // Output: "a-b-c"
   ```

4. Use `apply` for object inheritance.
   ```javascript
   function Animal(name) {
     this.name = name;
   }

   function Dog(name, breed) {
     Animal.apply(this, [name]);
     this.breed = breed;
   }

   let dog = new Dog("Buddy", "Labrador");
   console.log(dog); // Output: { name: "Buddy", breed: "Labrador" }
   ```

5. Use `apply` with a default context.
   ```javascript
   function greet(greeting, name) {
     return `${greeting}, ${name}`;
   }
   console.log(greet.apply(null, ["Hello", "Ali"])); // Output: "Hello, Ali"
   ```

---

#### **Bind Method Exercises**

1. Bind a function to an object and call it later.
   ```javascript
   let person = { name: "Sara" };
   function greet() {
     return `Hello, ${this.name}`;
   }
   let boundGreet = greet.bind(person);
   console.log(boundGreet()); // Output: "Hello, Sara"
   ```

2. Bind a function with partial arguments.
   ```javascript
   function multiply(x, y) {
     return x * y;
   }
   let multiplyBy2 = multiply.bind(null, 2);
   console.log(multiplyBy2(5)); // Output: 10
   ```

3. Use `bind` to set a method's context in an event listener.
   ```javascript
   let button = { text: "Click me!" };

   function handleClick() {
     console.log(this.text);
   }

   let boundClick = handleClick.bind(button);
   boundClick(); // Output: "Click me!"
   ```

4. Bind a method to a prototype.
   ```javascript
   let person = { name: "John" };
   function introduce() {
     return `Hi, I'm ${this.name}`;
   }
   let boundIntroduce = introduce.bind(person);
   console.log(boundIntroduce()); // Output: "Hi, I'm John"
   ```

5. Use `bind` with constructor functions.
   ```javascript
   function Product(name, price) {
     this.name = name;
     this.price = price;
   }

   let createProduct = Product.bind(null, "Laptop");
   let newProduct = new createProduct(1500);
   console.log(newProduct); // Output: { name: "Laptop", price: 1500 }
   ```

---

### **Key Points to Remember**
- Use `call` when arguments are comma-separated.
- Use `apply` when arguments are in an array.
- Use `bind` to create a new function with a specific context for later use.

*/