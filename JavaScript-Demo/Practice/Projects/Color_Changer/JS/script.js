// const button = document.querySelectorAll('.button')
// // console.log(button)

// const body = document.querySelector('body')
// let count = 0;
// button.forEach((btn) => {
//     // console.log(btn)
//     btn.addEventListener('click', function(e){
//         // console.log(e)
//         // console.log(e.target.id)
//         count++;
//         console.log(count)
//         if(e.target.id === 'grey'){
//             body.style.backgroundColor = e.target.id
//         }
//         else if(e.target.id === 'red'){
//             body.style.backgroundColor = e.target.id
//         }
//         else if(e.target.id === 'blue'){
//             body.style.backgroundColor = e.target.id
//         }
//         else if(e.target.id === 'yellow'){
//             body.style.backgroundColor = e.target.id
//         }
//     })
// })

/******************************************************************************************************* */

const allSpan = document.querySelectorAll(".button")
// console.log(allSpan)

let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
const body = document.querySelector("body")
allSpan.forEach((item) => {
    item.addEventListener('click',function(e){
        if(e.target.id === 'grey'){
            c1++;
            console.log(c1);
            if(c1===2){
                // console.log("true")
                body.style.backgroundColor = 'white'
                c1 = 0;
            }
            else{
                // console.log(c1)
                body.style.backgroundColor = e.target.id
            }
            
        }
        else if(e.target.id === 'red'){
            c2++;
            if(c2===2){
                body.style.backgroundColor = 'white'
                c2 = 0;
            }
            else{
                body.style.backgroundColor = e.target.id
            }
        }
        else if(e.target.id === 'blue'){
            c3++;
            if(c3===2){
                body.style.backgroundColor = 'white'
                c3 = 0;
            }
            else{
                body.style.backgroundColor = e.target.id
            }
        }
        else if(e.target.id === 'yellow'){
            c4++;
            if(c4===2){
                body.style.backgroundColor = 'white'
                c4 = 0;
            }
            else{
                body.style.backgroundColor = e.target.id
            }
        }
    })
})




























