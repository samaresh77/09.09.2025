//forEach (did not return anything, just iterated)

const arr = [10, 20, 30, 40, 50];

arr.forEach((value, index, array) => {
    console.log(`Index: ${index}, Value: ${value}, Array: ${array}`);
});

//filter (returns a new array based on condition)
const filteredArr = arr.filter(value => value > 25);
console.log("Filtered Array (values > 25):", filteredArr);

//filter with objects
const users = [
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 22 },
    { id: 3, name: "Charlie", age: 32 },
    { id: 4, name: "David", age: 24 }
];
const adults = users.filter(user => user.age >= 25);
console.log("Adults (age >= 25):", adults);

// Combining map and filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// First filter even numbers, then map to their squares
const evenSquares = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * num);
console.log("Even Squares:", evenSquares);

//filter with strings
const fruits = ["apple", "banana", "grape", "kiwi", "mango", "blueberry"];
const longFruits = fruits.filter(fruit => fruit.length > 4);
console.log("Fruits with more than 4 letters:", longFruits);

//filter with Map
const fruitMap = new Map([
    ["apple", 5],
    ["banana", 3],
    ["grape", 8],
    ["kiwi", 2],
    ["mango", 6]
]);
const expensiveFruits = Array.from(fruitMap)
    .filter(([fruit, price]) => price > 4)
    .map(([fruit, price]) => fruit);
console.log("Fruits with price > 4:", expensiveFruits);
// Note: Map itself does not have a filter method, so we convert it to an array first.

//filter with Set
const numSet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const filteredSet = new Set(
    Array.from(numSet).filter(num => num % 2 !== 0)
);
console.log("Filtered Set (odd numbers):", filteredSet);
// Note: Set itself does not have a filter method, so we convert it to an array first.

//reduce (not filter, but often used together)
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of array elements:", sum);

const product = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log("Product of array elements:", product);
// Finding the maximum value in an array
const max = arr.reduce((max, current) => (current > max ? current : max), arr[0]);
console.log("Maximum value in the array:", max);
// Finding the minimum value in an array
const min = arr.reduce((min, current) => (current < min ? current : min), arr[0]);
console.log("Minimum value in the array:", min);
// Counting occurrences of elements in an array
const fruitsArr = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruitsArr.reduce((count, fruit) => {
    count[fruit] = (count[fruit] || 0) + 1;
    return count;
}, {});
console.log("Fruit count:", fruitCount);

const shoppingCart = [
    { item: "Laptop", price: 1000, quantity: 1 },
    { item: "Phone", price: 500, quantity: 2 },
    { item: "Tablet", price: 300, quantity: 3 }
];
const totalCost = shoppingCart.reduce((total, product) => total + product.price * product.quantity, 0);
console.log("Total cost of shopping cart:", totalCost);