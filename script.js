//Variables
const display = document.querySelector('.display');
const number = document.querySelectorAll('.number-btn');
const operator = document.querySelectorAll('.operator-btn');
const equals = document.querySelector('.equals-btn');
const clear = document.querySelector('.clear-btn');
const deleteBtn = document.querySelector('.delete-btn');

let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let newOperator = null;

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
    
    display.textContent = result;
    firstNumber = result;
    secondNumber = '';
}

//Event listeners
number.forEach(number => {
    number.addEventListener('click', () => {
        if (currentOperator === null) {
            firstNumber += number.textContent;
            display.textContent = firstNumber;
        } else {
            secondNumber += number.textContent;
            display.textContent = `${firstNumber} ${currentOperator} ${secondNumber}`;
        }
    })
})

operator.forEach(operator => {
    operator.addEventListener('click', () => {
        if (currentOperator === null) {
            currentOperator = operator.textContent;
            display.textContent = `${firstNumber} ${currentOperator}`;
        } else if (currentOperator !== null) {
            newOperator = operator.textContent;
            if (currentOperator !== null && firstNumber !== '' && secondNumber !== '') {
                operate();
            }
            currentOperator = newOperator;
            display.textContent = `${firstNumber} ${currentOperator}`;
        }
    })
})

equals.addEventListener('click', () => {
    operate();
    currentOperator = null;
    display.textContent = `${firstNumber}`
})

clear.addEventListener('click', () => {
    firstNumber = '';
    currentOperator = null;
    secondNumber = '';
    display.textContent = 0;
})

deleteBtn.addEventListener('click', () => {

})

