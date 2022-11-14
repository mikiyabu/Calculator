const buttons = Array.from(document.querySelectorAll('.buttons2 button'));
const p = document.querySelector('p');
const clear = document.querySelector('.clear');
const del = document.querySelector('.del');

const display = document.querySelector('.display');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (p.textContent === '0') {
            p.textContent = e.target.textContent;
        }
        else {
            p.textContent += e.target.textContent;
        }
    });
}); //displays numbers on screen when clicked

clear.addEventListener('click', () => {
    display.textContent = '0';
}); //clears display when clicked

del.addEventListener('click', (e) => {
    e.preventDefault();
    let displayArr = Array.from(p.textContent);
    displayArr.pop();
    
    p.textContent = displayArr.join('');
});