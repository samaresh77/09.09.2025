function abc () {
    console.log("Hello from abc");
}
abc();

function add(a, b) {//arguments
    console.log(a + b);
} 
add(3, 4);//parameters

let val = function( a, b) {
    return a + b;
}
console.log(val(5, 6));

const arrow = (a, b) => a + b;//arrow function
console.log(arrow(7, 8));


function calculate (a, b, ...num) {//rest operator
    let sum = a + b;
    for (let i of num) {
        sum += i;
    }
    return sum;
}
console.log(calculate(1, 2, 3, 4, 5));