// DOM elements
let kgInput = document.getElementById('kgInput');
let gramOutput = document.getElementById('gramOutput');
let poundOutput = document.getElementById('poundOutput');
let ounceOutput = document.getElementById('ounceOutput');
//Listening to events
kgInput.addEventListener('input', event => {
    let kg = event.target.value;
    gramOutput.innerHTML = `${kg * 1000} g`;
    poundOutput.innerHTML = `${kg * 2.205} lbs`;
    ounceOutput.innerHTML = `${kg * 35.274} oz`;
});
