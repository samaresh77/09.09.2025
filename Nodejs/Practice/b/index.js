let name = prompt("Enter your name: ");

let h1 = document.createElement("h1");
h1.innerText = `Hello, ${name}! Welcome to the Node.js practice page.`;
document.body.appendChild(h1);