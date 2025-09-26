//store in the memory
const div = document.createElement('div')
console.log(div)
div.className = "main"
div.id = Math.round( Math.random()*10+1)
div.setAttribute("title", "gen title")
div.style.backgroundColor = "green"
div.style.padding = "12px"
// div.innerText = "Hello Javascript"
const addText = document.createTextNode("Hello Javascript")
div.appendChild(addText)

//attach webpage
document.body.appendChild(div)