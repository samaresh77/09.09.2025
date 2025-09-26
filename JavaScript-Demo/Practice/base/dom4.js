function addLanguage(langName){
    const li = document.createElement('li')
    li.innerHTML = `${langName}`//here full tree traverse
    const language = document.querySelector('.language')
    language.appendChild(li)
}
addLanguage('Python')
addLanguage('Typescript')

//optimize approach
function addOptiLanguage(langName){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))//here particulr element traverse
    document.querySelector('.language').appendChild(li)
}
addOptiLanguage("Java")

//Edit
const secondLang = document.querySelector("li:nth-child(2)")
// console.log(secondLang)
const newli = document.createElement("li")
newli.textContent = "PyTorch"
secondLang.replaceWith(newli)

const one = document.querySelector('li:first-child')
// console.log(one)
one.outerHTML = '<li>Nodejs</li>'

//remove
const lastLang = document.querySelector('li:last-child')
lastLang.remove()

