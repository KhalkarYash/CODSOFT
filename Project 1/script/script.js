let currentValue = '0';
let operator = '';
let storedValue = '';

function updateDisplay() {
    document.getElementById('result').textContent = currentValue;
}

function appendValue(value) {
    if (currentValue === '0') {
        currentValue = value;
    } else {
        currentValue += value;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    operator = op;
    storedValue = currentValue;
    currentValue = '0';
    updateDisplay();
}

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(storedValue) + parseFloat(currentValue);
            break;
        case '-':
            result = parseFloat(storedValue) - parseFloat(currentValue);
            break;
        case '*':
            result = parseFloat(storedValue) * parseFloat(currentValue);
            break;
        case '/':
            result = parseFloat(storedValue) / parseFloat(currentValue);
            break;
        default:
            return;
    }
    currentValue = result.toString();
    operator = '';
    storedValue = '';
    updateDisplay();
}

function clearDisplay() {
    currentValue = '0';
    operator = '';
    storedValue = '';
    updateDisplay();
}

updateDisplay();
