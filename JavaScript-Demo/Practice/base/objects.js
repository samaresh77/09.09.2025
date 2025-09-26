//objects

//singleton

// object literals
// const mySym = Symbol("key1")

// const jsUser ={
//     name: "sam",
//     age: 18,
//     location: "HP",
//     email: "sam@gmail.com",
//     isLogin: false,
//     lastLoginDays: ["sun","mon","tue"],
//     // "full_name": "Sam Mon",
//     // [mySym] : "a1"
// }
// jsUser.email = "hello@gmail.com"
// console.log(jsUser.email)
// console.log(jsUser[mySym])
// // console.log(jsUser["email"])
// // console.log(jsUser.full_name)
// Object.freeze(jsUser)
// jsUser.email = "ajbda@gmail.com"
// console.log(jsUser)
// jsUser.greeting = function(){
//     console.log(`Hello js user, ${this.name} `)
// }
// console.log( jsUser.greeting())


// const user1 = new Object() // singleton
// const user2 = {} //non singleton
// user2.id = "123"
// user2.name = "sam"
// user2.email = "sam@gmail.com"
// console.log(user2)

// const regularUser = {
//     full_name: {
//         userfullname: {
//             firstname: "sam",
//             lastname: "mon"
//         }
//     }
// }
// console.log(regularUser.full_name.userfullname.firstname)

// const obj1 = {
//     1: "a",
//     2: "b"
// }
// const obj2 = {
//     3: "c",
//     4: "d"
// }
// // const obj3 = Object.assign({},obj1, obj2)
// const obj3 = {...obj1,...obj2}
// console.log(obj3)

//Object de-structure
// const course = {
//     courseName : "javascript",
//     price : "999",
//     courseCode : "js101"
// }
// const {courseCode:cc} = course
// // console.log(courseCode)
// console.log(cc)
