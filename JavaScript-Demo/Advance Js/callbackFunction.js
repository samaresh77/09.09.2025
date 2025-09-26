// Callback function
// A callback is a function passed as an argument to another function

const print = (p) => {
    console.log("Printing press", p);
}

const test = (name, p, callback) => {          // name = variable, callback = function
    console.log("insinder called", name);
    callback(p);
}

test("sam", 10, print);