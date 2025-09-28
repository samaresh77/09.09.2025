// 1. An Array is an object type designed for storing data collections.
// 2. JavaScript arrays are resizable and can contain a mix of different data types.
// 3. JavaScript array-copy operations create shallow copies. 
// (All standard built-in copy operations with any JavaScript objects 
// create shallow copies, rather than deep copies).

// * A shallow copy of an object is a copy whose properties share the same references
// * A deep copy of an object is a copy whose properties do not share the same references

let arr = [1, 2, 3, 4, 5]; //array literal syntax
console.log("Initial array:", arr);

let arr2 = new Array(1, 2, 3, 4, 5); //array constructor syntax
console.log("Array using constructor:", arr2);

let arr3 = Array.of(1, 2, 3, 4, 5); //Array.of() method
console.log("Array using Array.of():", arr3);

let arr4 = Array.from("hello"); //Array.from() method
console.log("Array from string using Array.from():", arr4);

let mixedArr = [1, "two", true, null, undefined, { name: "John" }, [1, 2, 3]];
console.log("Mixed array:", mixedArr);

// Accessing elements
console.log("First element:", arr[0]);
console.log("Last element:", arr[arr.length - 1]);

// Modifying elements
arr[2] = 10;
console.log("Modified array:", arr);

// Adding elements
arr.push(6); //add to end
console.log("After push:", arr);
arr.unshift(0); //add to beginning
console.log("After unshift:", arr);

// Removing elements
arr.pop(); //remove from end
console.log("After pop:", arr);
arr.shift(); //remove from beginning
console.log("After shift:", arr);

arr.slice(1, 3); //creates a new array from index 1 to 3 (not including 3)
console.log("After slice (1,3):", arr.slice(1, 3));
arr.splice(2, 1); //remove 1 element at index 2
console.log("After splice:", arr);

// Iterating over an array
arr.forEach((element, index) => {
    console.log(`Element at index ${index}:`, element);
});

// Array methods
let mappedArr = arr.map(x => x * 2);
console.log("Mapped array (elements * 2):", mappedArr);
let filteredArr = arr.filter(x => x > 2);
console.log("Filtered array (elements > 2):", filteredArr);
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of elements:", sum);

// Finding elements
let foundElement = arr.find(x => x > 3);
console.log("First element greater than 3:", foundElement);
let foundIndex = arr.findIndex(x => x > 3);
console.log("Index of first element greater than 3:", foundIndex);

