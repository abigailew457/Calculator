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

// first row
const divideOP = document.querySelector('#divide');
divideOP.onclick = function() { sign.textContent = '÷'; };

const multiplyOP = document.querySelector('#multiply');
multiplyOP.onclick = function() { sign.textContent = '×'; };

const addOP = document.querySelector('#add');
addOP.onclick = function() { sign.textContent = '+'; };

const subOP = document.querySelector('#subtract');
subOP.onclick = function() { sign.textContent = '−'; };

// nums
const zero = document.querySelector('#zero');
zero.onclick = function() { number.textContent = '0';};

const one = document.querySelector('#one');
one.onclick = function() { number.textContent = '1';};

const two = document.querySelector('#two');
two.onclick = function() { number.textContent = '2';};

const three = document.querySelector('#three');
three.onclick = function() { number.textContent = '3';};

const four = document.querySelector('#four');
four.onclick = function() { number.textContent = '4';};

const five = document.querySelector('#five');
five.onclick = function() { number.textContent = '5';};

const six = document.querySelector('#six');
six.onclick = function() { number.textContent = '6';};

const seven = document.querySelector('#seven');
seven.onclick = function() { number.textContent = '7';};

const eight = document.querySelector('#eight');
eight.onclick = function() { number.textContent = '8';};

const nine = document.querySelector('#nine');
nine.onclick = function() { number.textContent = '9';};



// clear and equals will not show up in display 
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');