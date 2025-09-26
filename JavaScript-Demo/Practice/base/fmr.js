// const coding = ["js","ruby","java","py","cpp"]

// coding.forEach((item) => {
//     console.log(item)
// })

//filter
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // const newNums = myNums.filter((num) => num>4)
// const newNums = myNums.filter((num) => {
//     return num>4
// })
// console.log(newNums)

//map
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // const newNums = myNums.map((num) => num+10 )
// const newNums = myNums
//                 .map((num) => num*10 )
//                 .map((num) => num+1)
//                 .filter((num) => num>50)
// console.log(newNums)

//reduce
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newSum = myNums.reduce((acc, currval) => {
//     return acc+currval
// },0)
// console.log(newSum)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 4999
    },
    {
        itemName: "android course",
        price: 5999
    },
    {
        itemName: "AI course",
        price: 7999
    }
]
const priceToPay = shoppingCart.reduce((acc,item) => {
    return acc+item.price
},0)
console.log(priceToPay)