'use strict';

let image = document.getElementById('bulb-image');
const btn = document.getElementById('btn');
let btnText = btn.innerHTML;

btn.addEventListener('click', () => {
    if(btnText === 'TURN OFF') {
        image.src = 'assets/bulb-off.png';
        btnText = 'TURN ON';
        btn.innerHTML = 'TURN ON';
    } else {
        image.src = 'assets/bulb-on.png';
        btnText = 'TURN OFF';
        btn.innerHTML = 'TURN OFF';
    }
});