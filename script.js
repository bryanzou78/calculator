//Variables
const display = document.querySelector('.display');
const number = document.querySelectorAll('.number-btn');
const operator = document.querySelectorAll('.operator-btn');
const clear = document.querySelector('.clear-btn');
const equals = document.querySelector('.equals-btn');

let firstNumber = '';
let chosenOperator = null;
let secondNumber = '';

//Add function
function add (num1, num2) {
    return num1 + num2;
}

//Subtract function
function subtract (num1, num2) {
    return num1 - num2;
}

//Multiply function
function multiply (num1, num2) {
    return num1 * num2;
}

//Divide function
function divide (num1, num2) {
    return num1 / num2;
}

//Operate function
function operate () {
    let result;
    const opnum1 = parseFloat(firstNumber);
    const opnum2 = parseFloat(secondNumber);

    if (chosenOperator === '+') {
        result = add(opnum1, opnum2);
    } else if (chosenOperator === '-') {
        result = subtract(opnum1, opnum2);
    } else if (chosenOperator === '*') {
        result = multiply(opnum1, opnum2);
    } else if (chosenOperator === '/') {
        result = divide(opnum1, opnum2);
    }

    display.textContent = result;
}

//Event listeners
number.forEach(number => {
    number.addEventListener('click', () => {
        if (chosenOperator === null) {
            firstNumber += number.textContent;
            display.textContent = firstNumber;
        } else {
            secondNumber += number.textContent;
            display.textContent = `${firstNumber} ${chosenOperator} ${secondNumber}`;
        }
    })
})


operator.forEach(operator => {
    operator.addEventListener('click', () => {
        chosenOperator = operator.textContent;
        display.textContent = `${firstNumber} ${chosenOperator}`;
    })
})

equals.addEventListener('click', () => {
    operate();
})

