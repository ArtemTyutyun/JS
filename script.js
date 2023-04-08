let firstNumber;
let secondNumber;

firstNumber = prompt("Enter first number");
secondNumber = prompt("Enter second number");

if (firstNumber === "" || secondNumber === "") {
  alert("Error: You need to enter two numbers");
} else {
  alert(`Adding = ${Number(firstNumber) + Number(secondNumber)}`);

  if (firstNumber < secondNumber) {
    if (confirm("Are you sure you want to proceed with the operation?")) {
      alert(`Subtraction =  ${firstNumber - secondNumber}`);
    }
  } else {
    alert(`Subtraction =  ${firstNumber - secondNumber}`);
  }

  alert(`Multiplication =  ${firstNumber * secondNumber}`);

  if (secondNumber == 0) {
    alert("Division by 0 is impossible");
  } else {
    alert(`Division = ${firstNumber / secondNumber}`);
  }
}