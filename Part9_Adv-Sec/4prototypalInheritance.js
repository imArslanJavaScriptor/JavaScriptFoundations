function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let hitesh = new Person("hitesh");
hitesh.greet();
// Practice More About Prototypal Inheritance Using Chat GPT
// Also Explore and Understand the Diffrence B/W Proto & Prototype