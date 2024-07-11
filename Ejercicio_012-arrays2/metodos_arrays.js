// CONCAT
let array1 = ["a","e","i"];
let array2 = ["o", "u"];
let array3 = array1.concat(array2);
//console.log(array3); // ["a","e","i","o","u"]

// INCLUDES
let meses = ["Enero", "Febrero", "Marzo"];
//console.log(meses.includes('Febrero')); //true

//  JOIN
let numeros = [1,2,3,4,5];
console.log(numeros.join("*"));


// REDUCE
const arrayNumeros = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);  // Expected output: 10

//INDEXOF
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2)); // Expected output: 4

console.log(beasts.indexOf('giraffe')); // Expected output: -1

//FINDINDEX
const arrNum = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber)); // Expected output: 3

// FILL
const numbers = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4)); // Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1)); // Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6)); // Expected output: Array [6, 6, 6, 6]

// SHIFT
const arrNumb = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1); // Expected output: Array [2, 3]

console.log(firstElement); // Expected output: 1

// SLICE
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); // Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4)); // Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5)); // Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2)); // Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1)); // Expected output: Array ["camel", "duck"]

console.log(animals.slice()); // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// SPLICE
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months); // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months); // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// REVERSE
const letras = ['one', 'two', 'three'];
console.log('letras:', letras); // Expected output: "letras:" Array ["one", "two", "three"]

const reversed = letras.reverse();
console.log('reversed:', reversed); // Expected output: "reversed:" Array ["three", "two", "one"]

// LASTINDEXOF
const animales = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animales.lastIndexOf('Dodo')); // Expected output: 3

console.log(animales.lastIndexOf('Tiger')); // Expected output: 1

// FLAT
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat()); // expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat()); // expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2)); // expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity)); // expected output: Array [0, 1, 2, 3, 4, 5]

// IS ARRAY
// Array.isArray() metodo estatico que dice si es un array o no
console.log(Array.isArray([1, 3, 5])); // Expected output: true

console.log(Array.isArray('[]')); // Expected output: false

console.log(Array.isArray(new Array(5))); // Expected output: true

console.log(Array.isArray(new Int16Array([15, 33]))); // Expected output: false

// FROM
console.log(Array.from('foo')); // Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));  // Expected output: Array [2, 4, 6]