//Maps
const map = new Map()
map.set("In", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("In", "Hinduthan")

// console.log(map)

for(const [key,value] of map){
    // console.log(key, ":",value)
}
const myObj = {
    "game1": "NFS",
    "game2": "Spiderman"
}
for(const key in myObj){
    // console.log(key,":", myObj[key])
}

const programming = ["js","rb","py","java","cpp"]
for(const key in programming){
    // console.log(key)
    // console.log(key,":-",programming[key])
}
programming.forEach((item) =>{
    // console.log(item)
})

const myCoding = [
    {
        fname: "sam",
        lname: "mon"
    },
    {
        fname: "ram",
        lname: "man"
    },
]
myCoding.forEach((item) => {
    console.log(item.fname)
})
