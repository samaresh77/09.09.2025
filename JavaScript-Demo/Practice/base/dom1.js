// document.getElementById('title').id
// document.getElementById('title').className
// document.getElementById('title').getAttribute('id')
// document.getElementById('title').setAttribute('id','hello')
// document.getElementsByClassName('heading')

title.style.backgroundColor = 'green'
title.style.padding = "15px"
title.style.borderRadius = "10px"

// 1.innerHTML: returns all html nodes 
// 2.textContent : returns all text content
// 3.innerText : gives the text in the selected node
// 4.querySelector
// 5.querySelectorAll
// 6.getAttribute
// 7.setAttribute


// title.textContent =>it's return text which is display on the html document
// title.innertext => it's return text which is display on the web page
// title.innerHTML => it's return all the html document(or tags) inside the tag

// document.querySelector('h1') => it's select particular tag (first tag)
// document.querySelector('#title')
// document.querySelector('.heading')

// document.querySelector('input[type="text"]')
// document.querySelector('p:first-child')

// const ul = document.querySelector('ul')
// const li1 = ul.querySelector('li')
// li1.style.backgroundColor = "green"
// li1.innerText = "Ten"

const myUl = document.querySelectorAll('li')
myUl.forEach((l) => {
    l.style.backgroundColor = "yellow"
})

const cl = document.getElementsByClassName('li-1')
//converted to array
const cl1 = Array.from(cl)
cl1.forEach((l) => {
    l.style.backgroundColor = "green"
})

