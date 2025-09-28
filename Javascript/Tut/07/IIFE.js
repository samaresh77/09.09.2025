//IIFE(Immediately Invoked Function Expression) - A function that runs as soon as it is defined

(function() {
    console.log("This is an IIFE");
})();

(() => {
    console.log("This is an arrow function IIFE");
})();

//IIFE with parameters
(function(name) {
    console.log(`Hello, ${name} from IIFE`);
})("Alice");

//IIFE returning a value
const result = (function(a, b) {
    return a + b;
})(5, 10);
console.log("Result from IIFE:", result);

//IIFE to create a private scope
const counter = (function() {
    let count = 0; //private variable
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;    
            return count;
        },
        getCount: function() {
            return count;
        }
    };  
})();

console.log("Initial Count:", counter.getCount());
console.log("After Increment:", counter.increment());
console.log("After Increment:", counter.increment());
console.log("After Decrement:", counter.decrement());
console.log("Final Count:", counter.getCount());