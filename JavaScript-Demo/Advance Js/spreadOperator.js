// Spread Operator :
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

const person = { name: "sam", age: 25}
const clone = {...person}
console.log(clone);

const smartphone1 = {
    name: "IPhone -16",
    price: "1.2 lacs",
    camera: "80 mp",
    ram: "16 gb",
    battery: "5000 mah"
}
const smartphone2 = {...smartphone1, name: "Galaxy S20 pro", price: "80k"}
console.log("Smart Phone : ", smartphone2);