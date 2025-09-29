// An Object is a variable that can hold many variables. 
// Objects are collections of key-value pairs, where each key (known as property names) has a value.

// singleton object
const singleton = {
    name: "Singleton Object",
    getName: function() {
        return this.name;
    }
};
console.log("Singleton Name:", singleton.getName());

// Object.create
const a = new Object(); //singleton object using Object constructor
a.name = "Object A";

// object constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    };
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

//object literal
const b = {}; //empty object using object literal syntax
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    "price" : "$24,000",
    getInfo: function() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};
console.log("Car Info:", car.getInfo());
console.log(car.make); // Accessing property
console.log(car['model']); // Accessing property using bracket notation
console.log(car.price); // Accessing property with special character

//Object Destructuring
const { make, model, year } = car;
console.log(`Destructured Car: ${year} ${make} ${model}`);


// Nested Objects
const student = {
    name: "John",
    age: 22,
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    },
    getAddress: function() {
        return `${this.address.street}, ${this.address.city}, ${this.address.zip}`;
    }
};
console.log("Student Address:", student.getAddress());