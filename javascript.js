let add = (a,b) => a + b;
let sub = (a,b) => a - b;
let multiply = (a,b) => a*b;
let divide = (a,b) => a/b;


function operate(operator, num1, num2) {

    if (operator == add) {
        return add(num1,num2);
    } else if (operator == sub) {
        return sub(num1,num2);
    } else if (operator == multiply) {
        return multiply(num1,num2);
    } else if (operator == divide) {
        return divide(num1,num2);
    } else {
        return(error);
    };
}

const display = document.querySelector('.display');
const sign = document.querySelector('.sign');
const number = document.querySelector('.number');

const divideOP = document.querySelector('#divide');
divideOP.onclick = function() { sign.textContent = '÷'; };

const multiplyOP = document.querySelector('#multiply');
multiplyOP.onclick = function() { sign.textContent = '×'; };

const addOP = document.querySelector('#add');
addOP.onclick = function() { sign.textContent = '+'; };

const subOP = document.querySelector('#subtract');
subOP.onclick = function() { sign.textContent = '−'; };