console.log("Hello world");

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