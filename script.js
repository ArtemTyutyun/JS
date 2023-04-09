// adding numbers //
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

let sum = 0;
const elementType = [];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];

   if(typeof element === 'number'){
    elementType.push(element);
    sum = sum + element;
    
  }
}

console.log(elementType);
console.log(sum);



// min/max nambers //
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

console.log(`Мінімальне значення:  ${min}`);
console.log(`Максимальне значення:  ${max}`);



// lattices as a numbers //
for( let i = 0; i <= 5; i++) {
    let lattices = "";

    for(let j = 1; j <= i; j++) {
        lattices = lattices + "#";
    }

    console.log(lattices);
}