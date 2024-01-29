let add = (a,b) => a + b;
let sub = (a,b) => a - b;
let multiply = (a,b) => a*b;
let divide = (a,b) => a/b;


function operate(operator, num1, num2) {

    if (operator == '+') {
        console.log(add(num1,num2));
        number.textContent = add(num1,num2);
        stringNumber = add(num1,num2);
    } else if (operator == '-') {
        console.log(sub(num1,num2));
        number.textContent = sub(num1,num2);
        stringNumber = sub(num1,num2);
    } else if (operator == 'x') {
        console.log(multiply(num1,num2));
        number.textContent = multiply(num1,num2);
        stringNumber = multiply(num1,num2);
    } else if (operator == '÷') {
        console.log(divide(num1,num2));
        number.textContent = divide(num1,num2);
        stringNumber = divide(num1,num2);
    } else {
        console.log(error);
    };
}

let adnd = 0;
let stringNumber = '';
let isNumber = false;
let op = 0; 
let total = 0;
let aug = 0;

const display = document.querySelector('.display');
const sign = document.querySelector('.sign');
const number = document.querySelector('.number');
const btns = document.querySelectorAll('button');
for (const btn of btns) {
    btn.addEventListener('click', function () {
        
        if (isNaN(this.value) === false) {

            stringNumber += this.value;
            adnd = stringNumber;
            isNumber = true;
            number.textContent = adnd;
        } else if (this.value === 'clear') {
            number.textContent = '';
            sign.textContent = '';
        } else if (this.value === '=') {
            operate(op, +aug, +adnd);
            sign.textContent = '';
        }  else if (isNaN(this.value) === true) {
            sign.textContent = this.value;
            isNumber = false;
            op = this.value;
            operate(op, +aug, +adnd);
            aug = +stringNumber;
            stringNumber = ''; 
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
