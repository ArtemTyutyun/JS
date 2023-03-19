let firstNumber = prompt("Enter first number");
let secondNumber = prompt("Enter second number");

function error(a, b) {
  if (firstNumber === '' || secondNumber === '') {
    alert("Error: Please enter a number");
  }
}

function adding(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    alert("Error: Not a number");
  }
}

function subtracting(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    if (a < b) {
      if (confirm("Are you sure you want to proceed with the operation?")) {
        return a - b;
      } else {
        return a - b;
      }
    } else {
      return a - b;
    }
  } else {
    alert("Error: Not a number");
    return a - b;
  } 
}

function multiplying(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else {
    alert("Error: Not a number");
  } 
}

function dividing(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    if (b == 0) {
      alert("Error: Division by 0 is impossible");
    } 
   else {
      return a / b;
    }
  } else {
    alert("Error: Not a number");
  }
}

error(firstNumber, secondNumber);

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

console.log(adding(firstNumber, secondNumber));
console.log(subtracting(firstNumber, secondNumber));
console.log(multiplying(firstNumber, secondNumber));
console.log(dividing(firstNumber, secondNumber));

const numbers = [firstNumber, secondNumber];

function getMaxClosure() {
  let max = -Infinity;

  return function (number) {
    if (typeof number === 'number' && number > max) {
      max = number;
    }
    return max;
  }
}

function MaxNumber(numbers) {
  const getMax = getMaxClosure();
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (typeof number === 'number') {
      getMax(number);
    }
  }
  return getMax(-Infinity);
}

function MinNumber(numbers) {
  let min = Infinity;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (typeof number === 'number' && number < min) {
min = number;
}
}
return min;
}

console.log("Max number is: ", MaxNumber(numbers));
console.log("Min number is: ", MinNumber(numbers));

function MaxNumber(numbers) {
  let max = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (typeof number === 'number' && number > max) {
      max = number;
    }
  }
  return max;
}