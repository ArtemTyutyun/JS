

// Lesson-24 //


// Calculator //

// let firstNumber = prompt("Enter first number");
// let secondNumber = prompt("Enter second number");

// function error(a, b) {
//   if (a === '' || b === '') {
//     throw("Error: Please enter a number");
//   }
// }

// function adding(a, b) {
//   if (!isNaN(a) && !isNaN(b)) {
//     const result = a + b;
//     return "Adding = " + result;
//   } else {
//     return "Error: Not a number";
//   }
// }

// function subtracting(a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     return "Error: Not a number";
//   }
//   if (a < b) {
//     if (confirm("Are you sure you want to proceed with the operation?")) {
//       const result = a - b;
//       return "Subtracting = " + result;
//     } else {
//       return "The subtraction was canceled"; 
//     }
//   } else {
//     const result = a - b;
//     return "Subtracting = " + result;
//   }
// }

// function multiplying(a, b) {
//   if (!isNaN(a) && !isNaN(b)) {
//     const result = a * b;
//     return "Multiplying = " + result;
//   } else {
//     return "Error: Not a number";
//   } 
// }

// function dividing(a, b) {
//   if (!isNaN(a) && !isNaN(b)) {
//     const result = a / b;
//     if (b == 0) {
//       return "Error: Division by 0 is impossible";
//     } else {
//       return "Dividing = " + result;
//     }
//   } else {
//     return "Error: Not a number";
//   }
// }

// error(firstNumber, secondNumber);
// firstNumber = Number(firstNumber);
// secondNumber = Number(secondNumber);
// console.log(adding(firstNumber, secondNumber));
// console.log(subtracting(firstNumber, secondNumber));
// console.log(multiplying(firstNumber, secondNumber));
// console.log(dividing(firstNumber, secondNumber));
// console.log(" ");


// min/max nambers //

// const numbers = [
//     27049,
//     true,
//     46066,
//     22591,
//     false,
//     20232, 
//     15372,  
//     null, 
//     66230,
//     24795, 
//     'test',
//     14433,
//     undefined,
//     45986,
//     15355
//   ]
//   function findMinMax(numbers) {
//   let min = Infinity;
//   let max = -Infinity;
  
//   for (let i = 1; i < numbers.length; i++) {
//     const element = numbers[i];
//    if(typeof element === 'number') {
//     if (element < min) {
//       min = element;
//     }
  
//     if (element > max) {
//       max = element;
//     }
//   }
//   }
//   return [min, max];
//   }
  
//   const [min, max] = findMinMax(numbers);
//   console.log("Finding the minimum and maximum values:");
//   console.log(`Minimum value: ${min}`); 
//   console.log(`Maximum value: ${max}`); 
  









// Lesson-26 //


//   //Accumulator//
// function Accumulator(initialValue) {
//   this.value = initialValue;

//   this.increment = function () {
//     this.value++;
//   };

//   this.decrement = function () {
//     this.value--;
//   };
// }

// // CancelableAccumulator //
// function CancelableAccumulator(initialValue) {
//   Accumulator.call(this, initialValue);

//   this.clear = function () {
//     this.value = initialValue;
//   };
// }
// CancelableAccumulator.prototype = Object.create(Accumulator.prototype);

// let input = prompt("Enter a number for Accumulator: ");
// let accumulator = new Accumulator(parseInt(input));
// console.log(accumulator.value);
// accumulator.increment();
// console.log(accumulator.value);
// accumulator.decrement();
// console.log(accumulator.value);

// console.log(" ");

// let input2 = prompt("Enter a number for CancelableAccumulator: ");
// let cancelableAccumulator = new CancelableAccumulator(parseInt(input2));
// console.log(cancelableAccumulator.value);
// cancelableAccumulator.increment();
// console.log(cancelableAccumulator.value);
// cancelableAccumulator.decrement();
// console.log(cancelableAccumulator.value);
// cancelableAccumulator.clear();
// console.log(cancelableAccumulator.value);











// // Lesson-28 //


// // Zoom in and out of the photo with a click //
// const photo = document.querySelector('.photo');

// photo.addEventListener('click', () => {
//     photo.classList.toggle('active');
// });



// // Navigation by letters //
// var navLetters = document.querySelectorAll('.nav-letter');

// document.addEventListener('keydown', function(event) {
 
//   var navLetter = event.key.toUpperCase();
  
  
//   var letterToNavigate = Array.from(navLetters).find(function(letter) {
//     return letter.getAttribute('data-nav') === navLetter;
//   });
  
  
//   if (letterToNavigate) {
//     var section = letterToNavigate.parentNode;
//     section.scrollIntoView({behavior: "smooth"});
//   }
// });