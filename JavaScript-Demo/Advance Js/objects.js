// Objects: An Object in javascript is a collection of key-value pairs. 
// The keys (properties) are strings(or symbols) and the values can be any data type(numbers, strings, arrays, etc.)

const person = {
    name: "sam",
    age: 25,
    greet: function () {
        return (`Hello my name is ${this.name}`);
    },
}

console.log(person.name);
console.log(person.age);
console.log(person.greet());
