// adding numbers //
const numbers = [
    28215,
    27049, 
    22591,
    'namber', 
    20017, 
    15372, 
    undefined, 
    22486,
    'test', 
    24795, 
    23914,
    16191, 
    15355
]

let sum = 0;
const elementType = [];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  
  if (typeof element === 'number' && !isNaN(element)){
    elementType.push(element);
    sum += element;
  }
}

console.log(elementType);
console.log(sum);





// min/max nambers //
let min = numbers[0];
let max = numbers[0];
const elementType2 = [];

for (let i = 1; i < numbers.length; i++) {
  const element = numbers[i];

  if (element < min) {
    min = element;
  }
  if (element > max) {
    max = element;
  }

  if (typeof numbers[i] === 'number' && !isNaN(numbers[i])) {
    elementType2.push(numbers[i]);
  }
}

console.log(elementType2);
console.log("Мінімальне значення: " + min);
console.log("Максимальне значення: " + max);






// lattices as a numbers //
for( let i = 0; i <= 5; i++) {
    let lattices = "";
    for(let j = 1; j <= i; j++) {
        lattices += "#";
    }
    console.log(lattices);
}