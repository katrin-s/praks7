// DOM elements
let kgInput = document.getElementById('kgInput');
let gramOutput = document.getElementById('gramOutput');
let poundOutput = document.getElementById('poundOutput');
let ounceOutput = document.getElementById('ounceOutput');
let output = document.getElementById('output');
output.style.visibility = 'hidden';
//Listening to events
kgInput.addEventListener('input', event => {
    let kg = event.target.value;
    output.style.visibility = (kg === '0') ? 'hidden' : 'visible';
    gramOutput.innerHTML = `${kg * 1000} g`;
    poundOutput.innerHTML = `${(kg * 2.20462).toFixed(2)} lb`;
    ounceOutput.innerHTML = `${(kg * 35.274).toFixed(2)} oz`;
});
