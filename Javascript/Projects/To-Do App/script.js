let input = document.getElementById('todo-input');
let btn = document.getElementById('add-btn');
let list = document.getElementById('todo-list');

const addFunction = () => {
    // console.log(input);
    // list.innerHTML = `<li>${input.value}</li>`;

    if (input.value.trim() === "") return; // ignore empty input

    // Create a new list item
    let p = document.createElement('p');
    p.innerHTML = `<input type='checkbox'/> ${input.value} <i class="material-icons">delete</i>`;

    // Add it to the list
    list.appendChild(p);

    // Clear input field
    input.value = "";

    // console.log(input.value);
}

btn.addEventListener('click', addFunction);
