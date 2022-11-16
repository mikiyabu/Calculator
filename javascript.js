const buttons = Array.from(document.querySelectorAll('.buttons2 button'));
const p = document.querySelector('p');
const clear = document.querySelector('.clear');
const del = document.querySelector('.del');
const display = document.querySelector('.display');
const operator = Array.from(document.querySelectorAll('.operator'));

let a = 0;
let b = 0;
let answer = 0;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (p.textContent === '0') {
            p.textContent = e.target.textContent;
        }
        else if (p.textContent.length === 21) return;
        else if (button.className === 'operator') {
            p.textContent += e.target.textContent;
            e.target.removeEventListener('click', () => {
                p.textContent = e.target.textContent;
            });
        }
        else {
            p.textContent += e.target.textContent;
        }
    });
}); //displays numbers on screen when clicked



clear.addEventListener('click', (e) => {
    e.preventDefault();

    p.textContent = '0';
}); //clears display when clicked

del.addEventListener('click', (e) => {
    e.preventDefault();
    let displayArr = Array.from(p.textContent);
    displayArr.pop();
    
    p.textContent = displayArr.join('');
});  //deletes a single digit when clicked

function operate(a, b) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case 'x': return a * b;
        case '÷': return a / b;
    }
}
