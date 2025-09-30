// for of

const arr = [10, 20, 30, 40, 50];

// for of loop  
for (const value of arr) {
    console.log("Value:", value);
}

//string iteration using for of
const str = "Hello";
for (const char of str) {
    console.log("Character:", char);
}

//object iteration using for of with Object.keys()
const obj = {a: 1, b: 2, c: 3};
for (const key of Object.keys(obj)) {
    console.log("Key:", key, "Value:", obj[key]);
}

// for in loop (not recommended for arrays, but works)
for (const index in arr) {
    console.log("Index:", index, "Value:", arr[index]);
}

// for in loop for objects
for (const key in obj) {
    console.log("Key:", key, "Value:", obj[key]);
}

// forEach method
arr.forEach((value, index) => {
    console.log("Index:", index, "Value:", value);
});

// forEach with objects using Object.entries()
Object.entries(obj).forEach(([key, value]) => {
    console.log("Key:", key, "Value:", value);
});


