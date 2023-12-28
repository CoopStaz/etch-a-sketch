const container = document.querySelector('#box');
container.setAttribute('style', 'display: flex; justify-content: center;');

for (let i = 1; i <= 16; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    container.appendChild(column);
        
     for (let i = 1; i <= 16; i++) {
        const newDiv = document.createElement('div');
         newDiv.classList.add('square');
         column.appendChild(newDiv);
         newDiv.setAttribute('style', 'border: 1px solid black; width: 40px; height: 40px;');

         newDiv.addEventListener('mouseover', function() {
            newDiv.style.backgroundColor = 'blue';
        });
    };
};