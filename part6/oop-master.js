// JavaScript Object and Methods
let car = {
  make: "Honda",
  model: "Civic X",
  year: 2017,
  start: function () {
    return `${this.make} ${this.model} started in ${this.year}`;
  },
};
// console.log(car.start());

// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person("Arslan", 20);
let person2 = new Person("Endrew", 30);
// console.log(person1);
// console.log(person2);

// Prototype and Prototypal Chain
// Prototypes allow us to add shared properties and methods for objects created from the same constructor.
// Prototypal chaining enables inheritance of properties or methods.

function Animal(species) {
  this.species = species;
}

Animal.prototype.speak = function () {
  return `${this.species} can speak`;
};

Animal.prototype.run = function (speed) {
  return `${this.species} runs at ${speed} km/h`;
};

let cat = new Animal("Cat");
let dog = new Animal("Dog");

// console.log(cat.run(30));
// console.log(dog.speak());

// Adding Custom Methods to Built-in Objects
String.prototype.isHero = function () {
  return `${this} is a Hero`;
};

let name1 = "Arslan";
// console.log(name1.isHero());

// ES6 Classes and Inheritance
class Vehicle {
  constructor(make, model, variant) {
    this.make = make;
    this.model = model;
    this.variant = variant;
  }

  info() {
    return `This is a ${this.make} ${this.model}, ${this.variant} variant`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} is an example of class inheritance`;
  }
}

let myCar = new Car("Hyundai", "Sonata", "Top");
// console.log(myCar.info());
// console.log(myCar.drive());

// Encapsulation
// Encapsulation restricts direct access to internal data by using private fields (#).
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return `$${this.#balance}`;
  }
}

let account = new BankAccount();
account.deposit(100);
// console.log(account.getBalance());


// Abstraction
// Abstraction hides complexity and exposes only essential details.
class CoffeeMachine {
  #start() {
    return "Starting the machine...";
  }

  #brewCoffee() {
    return "Brewing coffee...";
  }

  pressStartButton() {
    return `${this.#start()} ${this.#brewCoffee()}`;
  }
}

let machine = new CoffeeMachine();
// console.log(machine.pressStartButton());

// Polymorphism
// Polymorphism allows overriding methods to change behavior in child classes.
class Bird {
  fly() {
    return "Flying...";
  }
}

class Penguin extends Bird {
  fly() {
    return "Penguins can't fly.";
  }
}

let penguin = new Penguin();
// console.log(penguin.fly());

// Static Methods
// Static methods are called on the class itself, not on instances.
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// console.log(Calculator.add(2, 3));

// Getters and Setters
// Getters and setters control how properties are accessed and modified.
class Employee {
  #salary;

  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return "Salary is private";
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
// console.log(emp.salary);
emp.salary = 60000;




// Revisions
// Encapsulation
{
  class BankAccount {
    #balance = 1000 // By Putting # in front of balance i explicitly says that nobody can have a access of it direclty.

    deposit(amount) {
      this.#balance +=  amount
      return this.#balance
    }

    getBalance() {
      return `$ ${this.#balance}`
    }
  }
  let account = new BankAccount()
  // console.log(account.deposit(100))
  // console.log("Get Balance", account.getBalance())
}

// Abstraction 
{
  class CoffeeMachine{
    start() {
      return `Starting the Machine`
    }
    
    brewCofee() {
      return "Brewing Cofee"
    }

    pressStartButton() {
      let msg1 = this.start()
      let msg2 = this.brewCofee()
      return `${msg1} + ${msg2}`
    }
  }

  let myMachine = new CoffeeMachine()
  // console.log(myMachine.start())
  // console.log(myMachine.brewCofee())
  // console.log(myMachine.pressStartButton())
}

// Polymorphism
{
  class Bird {
    fly() {
      return `Flying...`
    }
  }
  
  class Penguin extends Bird {
    fly() {
      return `Penguin can't fly`
    }
  }
  
  let bird = new Bird()
  let penguin = new Penguin()
  // console.log(bird.fly())
  // console.log(penguin.fly())

}

// Statics Method
{
  class Calculator {
    static add (a, b) {
      return `Sum = ${a + b}`
    }
  }

  let miniCal = new Calculator()
  // console.log(miniCal.add(10, 40))
  console.log(Calculator.add(10,20))
}

// Getters & Setters
// Private Fields (#): Used to restrict direct access to certain properties, like #salary here.
// Getters: Provide controlled access to read-only data.
// Setters: Validate and update the data safely.
{
  class Employee {
    #salary; // Private field to store salary
  
    constructor(name, salary) {
      this.name = name;
      if (salary < 0) {
        console.error("Salary cannot be negative"); // Validation during initialization
        this.#salary = 0; // Default to 0 if invalid
      } else {
        this.#salary = salary;
      }
    }
  
    // Getter to restrict viewing the salary
    get salary() {
      return "You are not allowed to see the salary.";
    }
  
    // Setter to validate and update the salary
    set salary(value) {
      if (value < 0) {
        console.error("Invalid Salary");
      } else {
        this.#salary = value;
      }
    }
  
    // Method to retrieve actual salary (for demonstration purposes)
    getActualSalary() {
      return this.#salary;
    }
  }
  
  // Create an Employee object
  let emp1 = new Employee("Arslan", -40000); // Invalid salary handled
  console.log(emp1.salary); // Output: "You are not allowed to see the salary."
  console.log(emp1.getActualSalary()); // Output: 0 (default after validation)
  
  // Update salary using setter
  emp1.salary = 60000; // Valid salary updated
  console.log(emp1.getActualSalary()); // Output: 60000
  
}