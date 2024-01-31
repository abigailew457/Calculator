let add = (a,b) => a + b;
let sub = (a,b) => a - b;
let multiply = (a,b) => a*b;
let divide = (a,b) => a/b;


function operate(operator, num1, num2) {

    if (operator == '+') {
        number.textContent = Math.round(add(num1,num2) * 100000) / 100000;
        stringNumber = add(num1,num2);
    } else if (operator == '-') {
        number.textContent = Math.round(sub(num1,num2) * 100000) / 100000;
        stringNumber = sub(num1,num2);
    } else if (operator == 'x') {
        number.textContent = Math.round(multiply(num1,num2) * 100000) / 100000;
        stringNumber = multiply(num1,num2);
    } else if (operator == '÷' && num2 == 0) {
        number.textContent = "Nah fam";
        stringNumber = '';
    } else if (operator == '÷') {
        number.textContent = Math.round(divide(num1,num2) * 100000) / 100000;
        stringNumber = divide(num1,num2);
    };
}

let adnd = null;
let stringNumber = '';
let isNumber = false;
let op = null; 
let aug = null;

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
            adnd = null;
            stringNumber = '';
            isNumber = false;
            op = null; 
            aug = null;
        } else if (this.value === '=') {
            operate(op, +aug, +adnd);
            sign.textContent = '';
        }  else if (isNaN(this.value) === true) {
            sign.textContent = this.value;
            isNumber = false;
            op = this.value;
            if (aug == null) {
                aug = +stringNumber;
                stringNumber = ''; 
            } else {
                operate(op, +aug, +adnd);
                aug = +stringNumber;
                stringNumber = ''; 
            }
        }; 
    });
};