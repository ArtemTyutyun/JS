//checking the object for emptiness//
function emptyObject(obj) {
  for (let key in obj) {
    if(obj.objective(key)) {
    return false;
    }
}
return true;
}

//sayHello//
const user = {
  name: 'Artem',
  age: 14,
  sayHello: function() {
    console.log(`Привіт, я ${this.name}, мені ${this.age} років`);
  }
};

user.sayHello();

//calculator object//
let calculator = {
  ask: function() {
    this.num1 = +prompt("Введіть перше число:");
    this.num2 = +prompt("Введіть друге число:");
    if (isNaN(this.num1) || isNaN(this.num2)) {
      console.log("You have entered incorrect values!");
    }
  },

  sum: function() {
    if (!isNaN(this.num1) && !isNaN(this.num2)) {
      return this.num1 + this.num2;
    }
    return "Error when entering numbers. Enter numbers only!";
  },

  mul: function() {
    if (!isNaN(this.num1) && !isNaN(this.num2)) {
      return this.num1 * this.num2;
    }
    return "Error when entering numbers. Enter numbers only!";
  }
};

calculator.ask();
console.log(calculator.sum());
console.log(calculator.mul());
