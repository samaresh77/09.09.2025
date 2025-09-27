// function sayName(){
//     console.log("H")
// }
// sayName()

// function add(n1,n2){  //arguments
//     return n1+n2
//     // console.log(n1+n2)
// }
// const result = add(3,5) //parameters
// console.log("Result :", result)

// function wellcome(user="s"){
//     if(!user){
//         console.log("please enter username")
//         return
//     }
//     return `${user} wellcome to the world`
// }
// console.log(wellcome())

// // //rest operator
// function items(val1, val2, ...num){
//     return num
// }
// console.log(items(10,20,30,40,50))

// const user = {
//     username: "sam",
//     price: 200
// }
// function handleObject(obj){
//     console.log(`Username is ${obj.username} and price is ${obj.price}`)
// }
// // handleObject(user)
// handleObject({
//     username: "sam",
//     price: 200
// })

// const myArr = [100, 200, 300, 400, 500]
// function handleArray(arr){
//     console.log(arr[3])
// }
// // handleArray(myArr)
// handleArray(
//     [100, 200, 300, 400, 500]
// )


//scope
// let a = 300
// if(true){
//     let a = 20
//     console.log("Inner", a)
// }
// console.log(a)

// function one(){
//     const name = "sam"
//     function two(){
//         const id = 20
//         console.log(name)
//     }
//     // console.log(id)
//     two()
// }
// one()

//this
// const user = {
//     username : "sam",
//     id: 20,
//     wellcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`)
//         // console.log(this)
//     }
// }
// user.wellcomeMessage()
// user.username = "sana"
// user.wellcomeMessage()
// console.log(this)

// function one(){
//     let un = "sam"
//     console.log(this.un)
// }
// one()

//Arrow function
// const one = () => {
//     let un = "sam"
//     console.log(this.un)
// }
// one()

// const addTwo = (n1,n2) => {
//     return n1+n2
// }
// const addTwo = (n1,n2) =>  n1+n2
// const addTwo = (n1,n2) => {return n1+n2}
// console.log(addTwo(10,20))


// Immediately Invoked Function Expressions (IIFE)
// (function one(){ //which function call immediately and remove globla scope polution 
//     console.log("db is connected")
// })();
// ((name) => {
//     console.log(`hello db ${name}`)
// })("sam");

// if(true && true && false){
//     console.log("first")
// }

//false, 0, -0, BigInt 0n, "", null, undefined, NaN
//true, "0", "false", " ", [], {}, function(){}

// const emptyObj = {}
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }

//Nullish coalescing Operator (??): null undefined
// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// val1 = undefined ?? 10
// console.log(val1)