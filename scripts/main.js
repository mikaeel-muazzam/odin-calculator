console.log("Hello world");

function add(operandA, operandB) {
    const operation = "addition";
    console.log(`Performing ${operation} on ${operandA} and ${operandB}`)
}

function subtract(operandA, operandB) {
    const operation = "subtraction";
    console.log(`Performing ${operation} on ${operandA} and ${operandB}`)
}

function multiply(operandA, operandB) {
    const operation = "multiplication";
    console.log(`Performing ${operation} on ${operandA} and ${operandB}`)
}

function divide(operandA, operandB) {
    const operation = "division";
    console.log(`Performing ${operation} on ${operandA} and ${operandB}`)
}

function testAll() {
    add(1, 2);
    subtract(3, 4);
    multiply(5, 6);
    divide(7, 8);
}