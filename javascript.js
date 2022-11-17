const display = document.querySelector('.display');
const p = document.querySelector('p');
const buttons = Array.from(document.querySelectorAll('button'));
const operator = Array.from(document.querySelectorAll('.operator'));

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
            default:
                while(!p.textContent.includes('+' || '-' || 'x' || '÷')) {
                    let arg1 = appendNumber(e.target.textContent);

                    if (p.textContent.includes('+' || '-' || 'x' || '÷')) {
                        let arg2 = parseFloat(p.textContent.substring
                        (p.textContent.indexOf('+' || '-' || 'x' || '÷') + 1, p.textContent.length - 1));
                        if (e.target.textContent === '=') {
                            operate(arg1, arg2, operatorr);
                        }
                    }
                }
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

    else if (p.textContent === 0) {
        p.textContent = number;
    }
    else {
        p.textContent += number;
    }
}

function operate(a, b, operatorr) {
    switch (operatorr) {
        case ('+'):
            add(a, b);
            break;
        case ('-'):
            subtract(a, b);
            break;
        case ('x'):
            multiply(a, b);
            break;
        case ('÷'):
            divide(a, b);
            break;
    }
}

function add(a, b) {
    p.textContent = (a + b).toString();
}

function subtract(a, b) {
    p.textContent = a - b;
}

function multiply(a, b) {
    p.textContent = a * b;
}

function divide(a, b) {
    p.textContent = a / b;
}

function clear() {
    p.textContent = 0;
}

function del() {
    if (p.textContent.length === 1) return;
    else p.textContent = p.textContent.slice(0, -1);
}