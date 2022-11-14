const buttons = Array.from(document.querySelectorAll('button'));
const clear = document.querySelector('.clear');

const display = document.querySelector('.display');
display.textContent = '0';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (display.textContent === '0') {
            display.textContent = e.target.textContent;
        }
        else {
            display.textContent += e.target.textContent;
        }
    });
});

clear.addEventListener('click', () => {
    display.textContent = '0';
});