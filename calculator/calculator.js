let displayValue = '';

function appendToDisplay(value) {
    if (value === '+/-') {
        displayValue = displayValue.charAt(0) === '-' ? displayValue.slice(1) : '-' + displayValue;
    } else if (value === '%') {
        displayValue = (parseFloat(displayValue) / 100).toString();
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (e) {
        displayValue = 'Error';
    }
    updateDisplay();
}
