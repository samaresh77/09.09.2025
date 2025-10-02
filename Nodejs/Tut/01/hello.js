console.log("Hello World");

// Importing sum function from sum.js
const sum = require('./sum');
let a = 20;
let b = 10;
console.log(`The sum of ${a} and ${b} is ${sum(a, b)}`);

//math
const math = require('./math');

console.log(`The sum of ${a} and ${b} is ${math.add(a, b)}`);
console.log(`The difference of ${a} and ${b} is ${math.sub(a, b)}`);
console.log(`The product of ${a} and ${b} is ${math.mul(a, b)}`);
console.log(`The division of ${a} and ${b} is ${math.div(a, b)}`);