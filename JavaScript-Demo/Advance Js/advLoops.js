// 1. for..in loop: Iterates over the keys (properties) of an object or the indices of an aaray

let obj = {a : 1, b : 2, c : 3}
for(let key in obj){
    console.log(key, obj[key]);
}

// 2. for..of loop: Iterates over the values of iterable objects like aarays, strings, map etc.

let arr = [10, 20, 30];
for(let val of arr){
    console.log(val)
}

// 3. forEach loop : executes a function once for each element in an array(cannot be used to break the loop)

let a1 = [10, 20, 30, 40];
a1.forEach((value, index) => {
    console.log(index, value);
})