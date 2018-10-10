// DOM elements
let kgInput = document.getElementById('kgInput');

//Listening to events
kgInput.addEventListener('input', event => {
    let kg = event.target.value;
    console.log(kg);
});