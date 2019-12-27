const cont = document.querySelector('#container');
var btn = document.querySelector('#btnclr');

var div2;
let i = 0;
let j = 0;
let k = 1;

while (i < 16) {
    while (j < 16) {
        div2 = document.createElement('div1');
        div2.id = k;
        cont.appendChild(div2);
        j++;
        k++;
    }

    i++;
    j = 0;
}

const divs = document.querySelectorAll('div1');

divs.forEach((div1) => {
    div1.addEventListener('mousedown', (e) => {
        e.target.style.background = 'black';
    })
})

btn.addEventListener('click', (e) => {
    divs.forEach(div1 => div1.style.backgroundColor = 'white');
})