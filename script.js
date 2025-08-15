const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let expression = "";

function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;

        if (value === 'AC') {
            expression = "";
            display.textContent = "0";
        }
        else if (value === 'DEL') {
            expression = expression.slice(0, -1);
            display.textContent = expression || "0";
        }
        else if (value === '=') {
            try {
                let exp = expression
                    .replace(/\^2/g, '**2')
                    .replace(/\^3/g, '**3')
                    .replace(/√/g, 'Math.sqrt')
                    .replace(/∛/g, 'Math.cbrt')
                    .replace(/sin\(/g, 'Math.sin(')
                    .replace(/cos\(/g, 'Math.cos(')
                    .replace(/tan\(/g, 'Math.tan(')
                    .replace(/!/g, 'factorial');

                display.textContent = eval(exp);
                expression = display.textContent;
            } catch {
                display.textContent = "Xato!";
                expression = "";
            }
        }
        else {
            expression += value;
            display.textContent = expression;
        }
    });
});