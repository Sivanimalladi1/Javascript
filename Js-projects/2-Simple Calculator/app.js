//!====Coding Challenge: Simple Calculator===
/*Create a calculator that performs basic operations like addition, subtraction, multiplication, and division. Use different types of functions, such as function expressions and arrow functions, for each operation */

function add(a,b){
    return a + b;
}
console.log("Addition ",add(10,20));

function subtract(a,b){
    return a - b;
}
console.log("Subtraction ",subtract(20,10));

const multiply = function(a, b) {
    return a * b;
}
console.log("Multiplication ",multiply(10,20));

const divide = (a, b) => {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}   
console.log("Division ",divide(20,10));
