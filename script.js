// Checking objects for emptiness //
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// The result of the call //
function UsreInfo(name, age) {
  return {
    name: name,
    age: age,
    sayHello() {
      console.log(`Hello, I am ${this.name}, I am ${this.age} years old`);
    },
  };
}

function getNameAndAge(user) {
  return user.name + " " + user.age;
}

function sayUserHello(user) {
  user.sayHello();
}

const user = UsreInfo("John", 24);
sayUserHello(user);



// Calculator //
const calculator = {
  num1: 0,
  num2: 0,
  ask() {
    this.num1 = Number(prompt("Введіть перше число"));
    this.num2 = Number(prompt("Введіть друге число"));
  },
  sum() {
    console.log(this.num1 + this.num2);
  },
  mul() {
    console.log(this.num1 * this.num2);
  },
};

calculator.ask(); // запитає користувача про введення 2 чисел
calculator.sum(); // виведе суму збережених чисел
calculator.mul(); // виведе добуток чисел



























// const calculator = {
//   num1: 0,
//   num2: 0,
//   ask() {
//     this.num1 = Number(prompt("Введіть перше число"));
//     this.num2 = Number(prompt("Введіть друге число"));
//   },
//   sum() {
//     console.log(this.num1 + this.num2);
//   },
//   mul() {
//     console.log(this.num1 * this.num2);
//   },
// };

// calculator.ask(); // запитає користувача про введення 2 чисел
// calculator.sum(); // виведе суму збережених чисел
// calculator.mul(); // виведе добуток чисел