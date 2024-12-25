const person = {
  name: "Hitesh",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "John" });
boundGreet();

//bind, call and apply
// Study More About Call, Apply Bind Methods using Chat-GPT 