// const saySamaresh = function(a){
//     console.log("Samaresh");
//     // return `Hi ${a}`
// }
// // console.log(saySamaresh(10))
// const change = setTimeout(saySamaresh(10),2000)


const changeText = function(){
    document.querySelector('h1').innerHTML = "best JS series"
}

const changeMe = setTimeout(changeText, 2000)

document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe)
    console.log("STOPPED")
})