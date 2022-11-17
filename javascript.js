const display = document.querySelector('.display');
const p = document.querySelector('p');
const buttons = Array.from(document.querySelectorAll('button'));
const operator = Array.from(document.querySelectorAll('.operator'));

let pNum = parseFloat(p.textContent);

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        switch (button.textContent) {
            case ('Clear'):
                clear();
                break;
            case ('Delete'):
                del();
                break;
            case ('+'):
                
            default:
                appendNumber(e.target.textContent);
        }
    })
});

function appendNumber(number) {
    if (number === '+' && p.textContent.includes('+')) return;
    else if (number === '÷' && p.textContent.includes('÷')) return;
    else if (number === 'x' && p.textContent.includes('x')) return;
    else if (number === '-' && p.textContent.includes('-')) return;
    else if (number === '=' && p.textContent.includes('=')) return;
    else if (number === '.' && p.textContent.includes('.')) return;

    else if (p.textContent === '0') {
        p.textContent = number;
    }
    else {
        p.textContent += number;
    }
}

function clear() {
    p.textContent = '0';
}

function del() {
    if (p.textContent.length === 1) return;
    else p.textContent = p.textContent.slice(0, -1);
}