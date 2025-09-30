//Map
//Map is a collection of keyed data items, just like an Object.
// But the main difference is that Map allows keys of any type.
// Map takes unique values as keys (which means you cannot have duplicate keys).

// Creating a Map
const map = new Map();

// Setting values in the Map
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");

console.log("Map size:", map.size);
console.log(map);

// Getting values from the Map
console.log("Name:", map.get("name"));
console.log("Age:", map.get("age"));

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}
