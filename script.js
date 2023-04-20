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
    let color = result >= 0 ? "green" : "red";
    return "Adding = <span style='color: " + color + "'>" + result + "</span>";
  } else {
    return "<span style='color:red;'>Error: Not a number</span>";
  }
}

function subtracting(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "<span style='color:red;'>Error: Not a number</span>";
  }
  if (a < b) {
    if (confirm("Are you sure you want to proceed with the operation?")) {
      const result = a - b;
      let color = result >= 0 ? "green" : "red"; 
      return "Subtracting = <span style='color: " + color + "'>" + result + "</span>";
    } else {
      return "<span style='color:red;'>The subtraction was canceled</span>";
    }
  } else {
    const result = a - b;
    let color = result >= 0 ? "green" : "red";
    return "Subtracting = <span style='color: " + color + "'>" + result + "</span>";
  }
}

function multiplying(a, b) {
  if (!isNaN(a) && !isNaN(b)) {
    const result = a * b;
    let color = result >= 0 ? "green" : "red"; 
    return "Multiplying = <span style='color: " + color + "'>" + result + "</span>";
  } else {
    return "<span style='color:red;'>Error: Not a number</span>";
  } 
}

function dividing(a, b) {
  if (!isNaN(a) && !isNaN(b)) {
    const result = a / b;
    if (b == 0) {
		return "<span style='color:red;'>Error: Division by 0 is impossible</span>";
    } else {
      let color = result >= 0 ? "green" : "red"; 
      return "Dividing = <span style='color: " + color + "'>" + result + "</span>";
    }
  } else {
    return "<span style='color:red;'>Error: Not a number</span>";
  }
}

error(firstNumber, secondNumber);
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);
document.write(adding(firstNumber, secondNumber) + "<br>");
document.write("<br>");
document.write(subtracting(firstNumber, secondNumber) + "<br>");
document.write("<br>");
document.write(multiplying(firstNumber, secondNumber) + "<br>");
document.write("<br>");
document.write(dividing(firstNumber, secondNumber) + "<br>");
document.write("<br>");
document.write("<br>");



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
  ];
  
  function findMinMax(numbers) {
	let min = Infinity;
	let max = -Infinity;
  
	for (let i = 0; i < numbers.length; i++) {
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
  
  const fixedMin = 0;
  const fixedMax = 100000; 
  
  const colorMin = `rgb(${Math.round(((min - fixedMin) / (fixedMax - fixedMin)) * 255)}, 0, 0)`;
  const colorMax = `rgb(0, ${Math.round(((max - fixedMin) / (fixedMax - fixedMin)) * 255)}, 0)`;
  
  document.write("Finding the minimum and maximum values: <br>");
  document.write("<br>");
  document.write(`<span style="color: ${colorMin}">Minimum value: ${min}</span> <br>`);
  document.write(`<span style="color: ${colorMax}">Maximum value: ${max}</span> <br>`);