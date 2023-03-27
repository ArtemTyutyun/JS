const result = document.getElementById("result");

function add() {
	const num1 = parseFloat(document.getElementById("number1").value);
	const num2 = parseFloat(document.getElementById("number2").value);
	const sum = num1 + num2;
	result.textContent = sum;
	if (sum >= 0) {
		result.style.color = `rgb(0, ${Math.min(sum * 10, 255)}, 0)`;
	} else {
		result.style.color = `rgb(${Math.min(-sum * 10, 255)}, 0, 0)`;
	}
}

function subtract() {
	const num1 = parseFloat(document.getElementById("number1").value);
	const num2 = parseFloat(document.getElementById("number2").value);
	const difference = num1 - num2;
	result.textContent = difference;
	if (difference >= 0) {
		result.style.color = `rgb(0, ${Math.min(difference * 10, 255)}, 0)`;
	} else {
		result.style.color = `rgb(${Math.min(-difference * 10, 255)}, 0, 0)`;
	}
}

function multiply() {
	const num1 = parseFloat(document.getElementById("number1").value);
	const num2 = parseFloat(document.getElementById("number2").value);
	const product = num1 * num2;
	result.textContent = product;
	if (product >= 0) {
		result.style.color = `rgb(0, ${Math.min(product * 10, 255)}, 0)`;
	} else {
		result.style.color = `rgb(${Math.min(-product * 10, 255)}, 0, 0)`;
	}
}

function divide() {
	const num1 = parseFloat(document.getElementById("number1").value);
	const num2 = parseFloat(document.getElementById("number2").value);
	const quotient = num1 / num2;
	result.textContent = quotient;
	if (quotient >= 0) {
		result.style.color = `rgb(0, ${Math.min(quotient * 10, 255)}, 0)`;
	} else {
		result.style.color = `rgb(${Math.min(-quotient * 10, 255)}, 0, 0)`;
	}
}

document.getElementById("addBtn").addEventListener("click", add);
document.getElementById("subtractBtn").addEventListener("click", subtract);
document.getElementById("multiplyBtn").addEventListener("click", multiply);
document.getElementById("divideBtn").addEventListener("click", divide);