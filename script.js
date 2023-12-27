const container = document.querySelector('#box');
container.setAttribute('style', 'display: flex; justify-content: center;');

const square = function() {
    const column = function() {
        const column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);
    
        for (let i = 1; i <= 16; i++) {
            const newDiv = document.createElement('div');
            column.appendChild(newDiv);
            newDiv.setAttribute('style', 'border: 1px solid black; width: 40px; height: 40px;');
        };
    };
    for (let i = 1; i <= 16; i++) {
        column();
    };
};

square();