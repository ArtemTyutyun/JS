// Accumulator //
function Accumulator(initialValue) {
  this.value = initialValue;

  this.increment = function() {
    this.value++;
  };

  this.decrement = function() {
    this.value--;
  };
}

// CancelableAccumulator //
function CancelableAccumulator(initialValue) {
  Accumulator.call(this, initialValue);

  this.clear = function() {
    this.value = initialValue;
  };
}
CancelableAccumulator.prototype = Object.create(Accumulator.prototype);


let accumulator = new Accumulator(6);
console.log(accumulator.value);
accumulator.increment();
console.log(accumulator.value);
accumulator.decrement();
console.log(accumulator.value);

let cancelableAccumulator = new CancelableAccumulator(1);
console.log(cancelableAccumulator.value); 
cancelableAccumulator.increment();
console.log(cancelableAccumulator.value); 
cancelableAccumulator.decrement();
console.log(cancelableAccumulator.value); 
cancelableAccumulator.clear();
console.log(cancelableAccumulator.value); 