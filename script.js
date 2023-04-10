let firstNumber = prompt("Enter first number");
let secondNumber = prompt("Enter second number");

function error(a, b) {
  if (a === '' || b === '') {
    throw("Error: Please enter a number");
  }
}

function adding(a, b) {
  if (!isNaN(a) && !isNaN(b)) {
    const result = a + b;
    return "Adding = " + result;
  } else {
    return "Error: Not a number";
  }
}

function subtracting(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Error: Not a number";
  }
  if (a < b) {
    if (confirm("Are you sure you want to proceed with the operation?")) {
      const result = a - b;
      return "Subtracting = " + result;
    } else {
      return "The subtraction was canceled"; 
    }
  } else {
    const result = a - b;
    return "Subtracting = " + result;
  }
}

function multiplying(a, b) {
  if (!isNaN(a) && !isNaN(b)) {
    const result = a * b;
    return "Multiplying = " + result;
  } else {
    return "Error: Not a number";
  } 
}

function dividing(a, b) {
  if (!isNaN(a) && !isNaN(b)) {
    const result = a / b;
    if (b == 0) {
      return "Error: Division by 0 is impossible";
    } else {
      return "Dividing = " + result;
    }
  } else {
    return "Error: Not a number";
  }
}

error(firstNumber, secondNumber);
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);
console.log(adding(firstNumber, secondNumber));
console.log(subtracting(firstNumber, secondNumber));
console.log(multiplying(firstNumber, secondNumber));
console.log(dividing(firstNumber, secondNumber));
console.log(" ");



// min/max nambers //

const numbers = [
  27049,
  true,
  46066,
  22591,
  false,
  20232, 
  15372,  
  null, 
  66230,
  24795, 
  'test',
  14433,
  undefined,
  45986,
  15355
]
function findMinMax(numbers) {
let min = Infinity;
let max = -Infinity;

for (let i = 1; i < numbers.length; i++) {
  const element = numbers[i];
 if(typeof element === 'number') {
  if (element < min) {
    min = element;
  }

  if (element > max) {
    max = element;
  }
}
}
return [min, max];
}

const [min, max] = findMinMax(numbers);
console.log("Finding the minimum and maximum values:");
console.log(`Minimum value: ${min}`); 
console.log(`Maximum value: ${max}`); 