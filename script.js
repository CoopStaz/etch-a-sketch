const container = document.querySelector('#box');
container.setAttribute('style', 'display: flex; justify-content: center;');

for (let i = 1; i <= 16; i++) {
    let column = document.createElement('div');
    column.classList.add('column');
    container.appendChild(column);
        
     for (let i = 1; i <= 16; i++) {
        let newDiv = document.createElement('div');
         newDiv.classList.add('square');
         column.appendChild(newDiv);
         newDiv.setAttribute('style', 'border: 1px solid black; width: 2em; height: 2em;');

         newDiv.addEventListener('mouseover', function() {
            newDiv.style.backgroundColor = 'blue';
        });
    };
};

//Click a button that will show a prompt
//Ability to enter any number from 1 to 100
//Delete previous grid
//Create a grid using the chosen number
const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    let numInput = prompt('What is your chosen grid width?');
    if (numInput > 100) {
        alert('ERROR \nThe number chosen cannot be larger than 100');
    } else {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        for (let i = 1; i <= numInput; i++) {
            let column = document.createElement('div');
            column.classList.add('column');
            container.appendChild(column);
                
             for (let i = 1; i <= numInput; i++) {
                let newDiv = document.createElement('div');
                 newDiv.classList.add('square');
                 column.appendChild(newDiv);
                 newDiv.setAttribute('style', 'border: 1px solid black; width: 2em; height: 2em;');
        
                 newDiv.addEventListener('mouseover', function() {
                    newDiv.style.backgroundColor = 'blue';
                });
            };
        };
    }
});