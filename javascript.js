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

const div = document.querySelector('#divide');
