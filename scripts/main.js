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

function clear() {
    console.log("CLEARING");
    operandA = undefined;
    operandB = undefined;
    operandN = "";
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
    return result;
}

function calculate(operand) {
    console.log("calculating...")
    //check if there is already an operandA
    if(operandA) operandB = operand;
    else operandA = operand;

    //operate if all three inputs exist
    if(operandA && operandB && operator) {
       result = operate(operandA, operandB, operator);
       display.textContent = result;
       operandA = result;
       operandB = undefined;
    //    operator = undefined;
    }

    operandN = "";
}

function buttonClicked(event) {
    const input = event.target.id;

    //validation and guard clauses
    if(!(input)) return;
    if(input === "AC") {
        clear();
        return;
    }

    let operand;

    display.textContent = input;
    console.log(`${input} clicked, which is ${Number(input)}`);

    // if input is a number, then append to whichever operand
    if(!(isNaN(Number(input)))) {
        operandN += input;
        display.textContent = operandN;
        return;
    }

    if(!(operator)) operator = input;

    calculate(Number(operandN));
}

const defaultText = "Press a button..."
let operandN = "";
let operandA;
let operandB;
let operator;
let result;

const display = document.querySelector(".display")
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", buttonClicked))