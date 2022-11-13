let buttons = Array.from(document.querySelectorAll('button'));

let display = document.querySelector('.display');

buttons.map(button => {
    button.addEventListener('click', (e) => {
        const element = document.createElement('p');
        element.textContent = e.target.innerText;
        display.appendChild('element');
    });
});

