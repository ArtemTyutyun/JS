//Accumulator//
function Accumulator(initialValue) {
  this.value = initialValue;

  this.increment = function () {
    this.value++;
  };

  this.decrement = function () {
    this.value--;
  };
}

// CancelableAccumulator //
function CancelableAccumulator(initialValue) {
  Accumulator.call(this, initialValue);

  this.clear = function () {
    this.value = initialValue;
  };
}
CancelableAccumulator.prototype = Object.create(Accumulator.prototype);

let input = prompt("Enter a number for Accumulator: ");
let accumulator = new Accumulator(parseInt(input));
console.log(accumulator.value);
accumulator.increment();
console.log(accumulator.value);
accumulator.decrement();
console.log(accumulator.value);

console.log(" ");

let input2 = prompt("Enter a number for CancelableAccumulator: ");
let cancelableAccumulator = new CancelableAccumulator(parseInt(input2));
console.log(cancelableAccumulator.value);
cancelableAccumulator.increment();
console.log(cancelableAccumulator.value);
cancelableAccumulator.decrement();
console.log(cancelableAccumulator.value);
cancelableAccumulator.clear();
console.log(cancelableAccumulator.value);
