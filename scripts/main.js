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
    if(operandB === 0) {
        return "Thought ya could get away with it?";
    }
    const operation = "division";
    console.log(`Performing ${operation} on ${operandA} and ${operandB}`)
    return operandA / operandB;
}

function clear() {
    console.log("CLEARING");
    num = "";
    operandA = undefined;
    operandB = undefined;
    operator = undefined;
    display.textContent = defaultText;
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
    updateVars(result);
}

function updateVars (result) {
    if (isNaN(Number(result))) {
        display.textContent = result;
        operandA = undefined;
        operandB = undefined;
    }
    else {
        display.textContent = (result != result.toFixed(0)) ? display.textContent = result.toFixed(4) : display.textContent = result;
        operandA = result;
        operandB = undefined;
    }
}

function numberPressed(input) {
    console.log(`Number ${input} pressed`);
    num += input;
    display.textContent = num;
}

function operatorPressed(input) {
    console.log(`Operator ${input} pressed`);
    if (operandA) operandB = Number(num);
    else operandA = Number(num);
    display.textContent = input;
    num = "";
    if ((operandA || operandA === 0) && (operandB || operandB === 0)) operate(operandA, operandB, operator);
    operator = input;
}

function equalPressed() {
    console.log(`Equals to pressed`);
    if (operandA) operandB = Number(num);
    num = "";
    if ((operandA || operandA === 0) && (operandB || operandB === 0) && operator) operate(operandA, operandB, operator);
}

function deletePressed(input) {
    console.log(`Deletor ${input} pressed`);
    if (input === "AC") clear();
}

function buttonClicked(event) {
    const input = event.target.id;
    console.log(`${input} pressed`);

    if (!input) return;
    else if (!isNaN(Number(input))) numberPressed(input);
    else if (input === '=') equalPressed();
    else if (input === 'AC' || input === 'DEL') deletePressed(input);
    else operatorPressed(input);
}

const defaultText = "Press a button..."

let num = "";
let operandA;
let operandB;
let operator;

let result;

const display = document.querySelector(".display")
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", buttonClicked))