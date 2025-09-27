// Variables (var, let, const)

var name = "John"; // 'var' is function-scoped and can be redeclared
let age = 30; // 'let' is block-scoped and cannot be redeclared
const pi = 3.14; // 'const' is block-scoped and cannot be reassigned


let a = 10;
// let a = 20; // Error: Identifier 'a' has already been declared
a = 30; // Valid

const b = 50;
b = 60; // Error: Assignment to constant variable

var c = 100;
var c = 200; // Valid
c = 300; // Valid

