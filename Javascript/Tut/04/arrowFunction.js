//1.Syntax

function func1() { //normal function
    console.log("Hello from func1" );
}
func1();

const func2 = function() { //function expression
    console.log("Hello from func2" );
}
func2();

const func3 = () => { //arrow function
    console.log("Hello from func3" );
}
func3();

const add = (a, b) => { //arrow function with return
    return a + b;
}
console.log(add(3, 5));

const addImplicit = (a, b) => a + b; //arrow function with implicit return
console.log(addImplicit(4, 6));

//2.'arguments' object
function normalFunction() {
    console.log("Normal Function arguments:", arguments);
}
normalFunction(1, 2, 3, 4, 5);

const arrowFunction = () => {
    // console.log("Arrow Function arguments:", arguments); // Error: arguments is not defined
};
arrowFunction(1, 2, 3, 4, 5);

//3. hoisting
hoistedFunction(); // Works because of hoisting
function hoistedFunction() {
    console.log("This function is hoisted");
}

// 4. 'this' keyword
const obj = {
    name: "JavaScript",
    normalMethod: function() {
        console.log("Normal Method 'this':", this.name);// 'this' refers to obj
    },
    arrowMethod: () => {
        console.log("Arrow Method 'this':", this.name); // 'this' does not refer to obj
    }
};
obj.normalMethod(); //'javaScript'
obj.arrowMethod(); //undefined

// 5. Constructor functions
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const john = new Person("John", 30);
console.log("Person:", john);

