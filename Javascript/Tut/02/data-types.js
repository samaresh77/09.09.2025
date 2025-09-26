//Primitive(value copied)(stack memory)
// Numbers
var num1 = 10; // Integer
var num2 = 10.5; // Float
var num3 = -5; // Negative number
var num4 = 0; // Zero

// BigInt
var bigInt1 = 9007199254740991n; // BigInt literal
var bigInt2 = BigInt(9007199254740991); // BigInt using constructor


// Strings
var str1 = "Hello, World!"; // Double quotes
var str2 = 'Hello, JavaScript!'; // Single quotes
var str3 = `Hello, Template Literals!`; // Backticks   
var str4 = "It's a beautiful day!"; // Using single quote inside double quotes
var str5 = 'He said, "JavaScript is awesome!"'; // Using double quote inside single quotes

// Booleans
var bool1 = true; // true
var bool2 = false; // false 

// Null and Undefined
var nullVar = null; // null
console.log(typeof nullVar); // "object" (this is a known quirk in JavaScript)
var undefinedVar; // undefined  
console.log(typeof undefinedVar); // "undefined"
var undefinedVar2 = undefined; // explicitly undefined
var nanVar = NaN; // Not a Number
console.log(typeof nanVar); // "number"
console.log(isNaN(nanVar)); // true
console.log(Number.isNaN(nanVar)); // true

// Symbols
var sym1 = Symbol('description'); // Symbol with description
var sym2 = Symbol(); // Symbol without description  
var sym3 = Symbol.for('globalSymbol'); // Global symbol
var sym4 = Symbol.for('globalSymbol'); // Same global symbol
var sym5 = Symbol('description'); // Different symbol with same description as sym1

//Non-primitive (reference copied) (heap memory)
// Objects
var obj1 = { name: "John", age: 30 }; // Object literal
var obj2 = new Object(); // Object using constructor
obj2.name = "Jane";
obj2.age = 25;  
var obj3 = Object.create(obj1); // Object created from another object
obj3.name = "Doe"; // Inherited property
var obj4 = Object.assign({}, obj1); // Shallow copy of an object


// Arrays
var arr1 = [1, 2, 3, 4, 5]; // Array literal
var arr2 = new Array(1, 2, 3, 4, 5); // Array using constructor
var arr3 = Array.of(1, 2, 3, 4, 5); // Array using Array.of
var arr4 = Array.from('hello'); // Array from iterable (string) 
var arr5 = Array.from([1, 2, 3], x => x * 2); // Array from array-like with map function
var arr6 = []; // Empty array

// Functions
function func1() {
    return "Hello from func1!";
} // Function declaration   
var func2 = function() {
    return "Hello from func2!";
} // Function expression
var func3 = () => "Hello from func3!"; // Arrow function
var func4 = new Function('a', 'b', 'return a + b;'); // Function constructor
var func5 = function namedFunc() {
    return "Hello from namedFunc!";
} // Named function expression
var func6 = (...args) => args.reduce((acc, val) => acc + val, 0); // Arrow function with rest parameters

// Date Object
var date1 = new Date(); // Current date and time
var date2 = new Date('2023-01-01'); // Specific date
var date3 = new Date(2023, 0, 1); // Specific date (year, month, day)
var date4 = new Date(1672531200000); // Date from timestamp 
var date5 = new Date(Date.now()); // Date from current timestamp
var date6 = new Date().toISOString(); // Current date in ISO format
var date7 = new Date().toLocaleDateString(); // Current date in local format
var date8 = new Date().toLocaleTimeString(); // Current time in local format
var date9 = new Date().toUTCString(); // Current date in UTC format
var date10 = new Date().getFullYear(); // Current year
var date11 = new Date().getMonth(); // Current month (0-11)
var date12 = new Date().getDate(); // Current day of the month (1-31)
var date13 = new Date().getDay(); // Current day of the week (0-6)
var date14 = new Date().getHours(); // Current hour (0-23)
var date15 = new Date().getMinutes(); // Current minutes (0-59)
var date16 = new Date().getSeconds(); // Current seconds (0-59)
var date17 = new Date().getMilliseconds();  // Current milliseconds (0-999)
var date18 = new Date().getTime(); // Current timestamp (milliseconds since Jan 1, 1970)
var date19 = new Date().setFullYear(2024); // Set year to 2024


// Regular Expressions
var regex1 = /abc/; // Simple regex literal     
var regex2 = new RegExp('abc'); // Regex using constructor
var regex3 = /[a-z]/gi; // Regex with flags (global, case-insensitive)
var regex4 = /\d+/; // Regex to match one or more digits
var regex5 = new RegExp('\\d+', 'g'); // Regex using constructor with flags
var regex6 = /hello/i; // Regex to match 'hello' case-insensitively
var regex7 = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/; // Regex to validate URL
var regex8 = /\b\w{3}\b/g; // Regex to match all 3-letter words in a string 


// Map
var map1 = new Map(); // Empty map
map1.set('key1', 'value1'); // Set key-value pair   
map1.set('key2', 'value2');
var map2 = new Map([['keyA', 'valueA'], ['keyB', 'valueB']]); // Map from array of key-value pairs
var map3 = new Map(map2); // Map from another map
var mapSize = map1.size; // Size of the map
var mapHasKey = map1.has('key1'); // Check if key exists
var mapValue = map1.get('key1'); // Get value by key
map1.delete('key2');    // Delete key-value pair
map1.clear(); // Clear all key-value pairs  
map1.forEach((value, key) => console.log(key, value)); // Iterate over map
var mapKeys = Array.from(map1.keys()); // Get all keys as an array
var mapValues = Array.from(map1.values()); // Get all values as an array
var mapEntries = Array.from(map1.entries()); // Get all entries as an array of [key, value] pairs   
var mapToObj = Object.fromEntries(map1); // Convert map to object
var objToMap = new Map(Object.entries({ a: 1, b: 2 })); // Convert object to map

// Set  
var set1 = new Set(); // Empty set
set1.add(1);    // Add value to set
set1.add(2);
set1.add(2); // Duplicate values are ignored
var set2 = new Set([1, 2, 3, 4, 5]); // Set from array
var set3 = new Set(set2); // Set from another set
var setSize = set1.size; // Size of the set
var setHasValue = set1.has(1); // Check if value exists
set1.delete(2); // Delete value from set
set1.clear();   // Clear all values from set
set1.forEach(value => console.log(value)); // Iterate over set
var setValues = Array.from(set1.values()); // Get all values as an array
var setEntries = Array.from(set1.entries()); // Get all entries as an array of [value, value] pairs
var setToArr = Array.from(set1); // Convert set to array
var arrToSet = new Set([1, 2, 3, 4, 5]); // Convert array to set


