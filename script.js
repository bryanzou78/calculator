//Variables
const display = document.querySelector('.display');
const number = document.querySelectorAll('.number-btn');
const decimal = document.querySelector('.decimal-btn');
const operator = document.querySelectorAll('.operator-btn');
const equals = document.querySelector('.equals-btn');
const clear = document.querySelector('.clear-btn');
const deleteBtn = document.querySelector('.delete-btn');

let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let newOperator = null;



//Functions
function scrollToEnd() {
    display.scrollLeft = display.scrollWidth;
}

//Add function
function add (num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

//Subtract function
function subtract (num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
}

//Multiply function
function multiply (num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}

//Divide function
function divide (num1, num2) {
    if (num2 === '0') {
        return "Error, cannot divide by 0";
    } else {
        return parseFloat(num1) / parseFloat(num2);
    }
}

//Operate function
function operate () {
    if (currentOperator === null || secondNumber === '') {
        return;
    }

    let result;

    if (currentOperator === '+') {
        result = add(firstNumber, secondNumber);
    } else if (currentOperator === '-') {
        result = subtract(firstNumber, secondNumber);
    } else if (currentOperator === '*') {
        result = multiply(firstNumber, secondNumber);
    } else if (currentOperator === '/') {
        result = divide(firstNumber, secondNumber);
    }
    
    if (result === "Error, cannot divide by 0") {
        display.textContent = result;
        secondNumber = '';
        currentOperator = null;
        return;
    } 
        display.textContent = result;
        firstNumber = result;
        secondNumber = '';
        scrollToEnd();
}

//Event listeners
number.forEach(number => {
    number.addEventListener('click', () => {
        if (display.textContent === "Error, cannot divide by 0") {
            secondNumber = '';
            currentOperator = null;
            display.textContent = firstNumber;
        }
        
        if (currentOperator === null) {
            firstNumber += number.textContent;
            display.textContent = firstNumber;
        } else {
            secondNumber += number.textContent;
            display.textContent = `${firstNumber} ${currentOperator} ${secondNumber}`;
        }
        scrollToEnd();
    })
})

decimal.addEventListener('click', () => {
    if (currentOperator === null) {
        if (!firstNumber.includes('.')) {
            firstNumber += decimal.textContent;
            display.textContent = firstNumber;
        }
    } else if (!secondNumber.includes('.')) {
        secondNumber += decimal.textContent;
        display.textContent = `${firstNumber} ${currentOperator} ${secondNumber}`;
    }
    scrollToEnd();
})

operator.forEach(operator => {
    operator.addEventListener('click', () => {
        if (display.textContent === "Error, cannot divide by 0") {
            secondNumber = '';
            currentOperator = null;
            display.textContent = firstNumber;
        }

        if (currentOperator === null) {
            currentOperator = operator.textContent;
            display.textContent = `${firstNumber} ${currentOperator}`;
        } else if (currentOperator !== null) {
            newOperator = operator.textContent;
            if (currentOperator !== null && firstNumber !== '' && secondNumber !== '') {
                operate();
            }
            if (display.textContent === "Error, cannot divide by 0") {
                return;
            }
            currentOperator = newOperator;
            display.textContent = `${firstNumber} ${currentOperator}`;
        }
        scrollToEnd();
    })
})

equals.addEventListener('click', () => {
    operate();
    currentOperator = null;
})

clear.addEventListener('click', () => {
    firstNumber = '';
    currentOperator = null;
    secondNumber = '';
    display.textContent = 0;
})

deleteBtn.addEventListener('click', () => {
    if (secondNumber !== '') {
        secondNumber = secondNumber.slice(0, -1);
        display.textContent = `${firstNumber} ${currentOperator} ${secondNumber}`
    } else if (currentOperator !== null) {
        currentOperator = null;
        display.textContent = `${firstNumber}`;
    } else if (firstNumber !== '' && firstNumber.length > 1) {
        firstNumber = firstNumber.slice(0, -1);
        display.textContent = firstNumber;
    } else if (firstNumber.length = 1) {
        firstNumber = '';
        display.textContent = 0;
    }
})

