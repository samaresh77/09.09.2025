// An Array is a data structure that allow you to store multiple values in a single variable.

let phone = ["apple", "sumsung", "one plus"]

// methods

// push: put element in the last of array
let arr = [10, 20, 30];
arr.push("20", 40);
console.log(arr);

// pop: remove element in the last of array
let arr2 = [10, 20, 30, 40, 50];
arr2.pop();
arr2.pop(20,60,50);
console.log(arr2);

// shift: remove element in the first of array
let arr3 = [10, 20, 30, 40, 50];
// arr3.shift();
arr3.shift(50);
console.log(arr3)

// unshift: add element in the first of array
let arr4 = [10, 20, 30, 40, 50];
arr4.unshift(50);
console.log(arr4)

//find: return the first/particular element which satisfies condition
let arr5 = [10, 20, 30, 40, 50];
let a1 = arr5.find((ele) => ele>10)
console.log(a1);

//join: Joins all array elements into a string, with an optional operator
let arr6 = ["apple", "banana", "chery"];
let joins = arr6.join(", ");
console.log(joins);

//splice: adds or remove elements from the array
let a7 = [1, 2, 3, 4] 
let newa7 = a7.splice(2, 1, "a"); //1st - index, 2nd - how many, 3rd - add element
console.log(newa7)
console.log(a7)

//slice: returns a shallow copy of a portion of an array
let a8 = [1, 2, 3, 4, 5]
let slice = a8.slice(1,3)
console.log(slice) 