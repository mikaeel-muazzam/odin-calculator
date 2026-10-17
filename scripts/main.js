function add(operandA, operandB) {
    const operation = "addition";
    console.log(`Performing ${operation} on ${operandA} and ${operandB}`)
    return operandA + operandB;
}

function subtract(operandA, operandB) {
    const operation = "subtraction";
    console.log(`Performing ${operation} on ${operandA} and ${operandB}`)
    return operandA - operandB;
}

function multiply(operandA, operandB) {
    const operation = "multiplication";
    console.log(`Performing ${operation} on ${operandA} and ${operandB}`)
    return operandA * operandB;
}

function divide(operandA, operandB) {
    const operation = "division";
    console.log(`Performing ${operation} on ${operandA} and ${operandB}`)
    return operandA / operandB;
}

function testAll() {
    console.log(add(1, 2));
    console.log(subtract(3, 4));
    console.log(multiply(5, 6));
    console.log(divide(7, 8));
}

function operate(operandA, operandB, operator) {
    let result;
    //switch between +, -, *, and / to add, subtract, multiply, and divide
    switch (operator) {
        case "+":
            result = add(operandA, operandB);
            break;
        case "-":
            result = subtract(operandA, operandB);
            break;
        case "*":
            result = multiply(operandA, operandB);
            break;
        case "/":
            result = divide(operandA, operandB);
            break;
        default:
            result = "ERROR";
    }
    return result;
}

function buttonClicked(event) {
    console.log(`${event.target.id} clicked`);
}

let operandA;
let operandB;
let operator;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", buttonClicked))