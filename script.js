const container = document.querySelector('#box');

let column = function() {
    for (let i = 1; i <= 16; i++) {
        const newDiv = document.createElement('div')
        container.appendChild(newDiv);
        newDiv.setAttribute('style', 'border: 1px solid black; width: 40px; height: 40px;');
    }
}