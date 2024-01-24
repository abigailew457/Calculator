let add = (a,b) => a + b;
let sub = (a,b) => a - b;
let multiply = (a,b) => a*b;
let divide = (a,b) => a/b;


function operate(operator, num1, num2) {

    if (operator == '+') {
        return add(num1,num2);
    } else if (operator == '-') {
        return sub(num1,num2);
    } else if (operator == 'x') {
        return multiply(num1,num2);
    } else if (operator == '÷') {
        return divide(num1,num2);
    } else {
        return(error);
    };
}

let adnd = 0;
let stringNumber = '';
let isNumber = false;
let op = 0; 

const display = document.querySelector('.display');
const sign = document.querySelector('.sign');
const number = document.querySelector('.number');
const btns = document.querySelectorAll('button');
for (const btn of btns) {
    btn.addEventListener('click', function storeVar(x) {
        console.log(this.value);
        if (isNaN(this.value) === false) {
            stringNumber += this.value;
            adnd = stringNumber;
            isNumber = true;
            number.textContent = adnd;

        } else if (isNaN(this.value) === true) {
            sign.textContent = this.value;
            isNumber = false;
            aug = +stringNumber;
            stringNumber = ''; 
            op = this.value;

        } else if (this.value === '=') {
                operate(op, aug, adnd)
            }; 
        
    });
};


// sign
const divideOP = document.querySelector('#divide');
const multiplyOP = document.querySelector('#multiply');
const addOP = document.querySelector('#add');
const subOP = document.querySelector('#subtract');

// nums
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');


// clear and equals will not show up in display 
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');
