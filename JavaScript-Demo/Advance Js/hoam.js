// Higher Order Array Method's

//1. map(): Creates and return new array by applying a function to each element of the original array

let arr = [10, 20, 30];
let double = arr.map((el) => el*2)
console.log(double)

//2. filter(): Creates and return new array with elements that pass a specified a test condition

let a1 = [1, 2, 3, 4];
let evens = a1.filter((el) => el % 2 === 0);
console.log(evens);

//3. reduce(): Reduces an array to a single value by applying a function to each element

let a2 = [1, 2, 3, 4];
let sum = a2.reduce((acc, el) => acc + el, 0)
console.log(sum)