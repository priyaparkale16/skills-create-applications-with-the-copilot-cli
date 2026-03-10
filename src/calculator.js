#!/usr/bin/env node

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
};
const modulo = (a, b) => {
    if (b === 0) throw new Error('Modulo by zero');
    return a % b;
};
const power = (base, exponent) => Math.pow(base, exponent);
const squareRoot = (n) => {
    if (n < 0) throw new Error('Square root of negative number');
    return Math.sqrt(n);
};

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

if (require.main === module) {
    // Node.js CLI Calculator
    // This calculator supports the following math operations:
    // - add: Addition of two numbers
    // - subtract: Subtraction of two numbers
    // - multiply: Multiplication of two numbers
    // - divide: Division of two numbers
    // - modulo: Remainder of division of two numbers
    // - power: Exponentiation (base raised to exponent)
    // - sqrt: Square root of a number

    const args = process.argv.slice(2);

    let operation, num1, num2;

    if (args.length === 2) {
        [operation, num1] = args;
        num2 = null; // for single-arg operations
    } else if (args.length === 3) {
        [operation, num1, num2] = args;
    } else {
        console.log('Usage: node calculator.js <operation> <num1> [num2]');
        console.log('Operations: add, subtract, multiply, divide, modulo, power, sqrt');
        console.log('Note: sqrt takes only one number');
        process.exit(1);
    }

    num1 = parseFloat(num1);
    if (isNaN(num1)) {
        console.log('Error: First argument must be a number');
        process.exit(1);
    }

    if (num2 !== null) {
        num2 = parseFloat(num2);
        if (isNaN(num2)) {
            console.log('Error: Second argument must be a number');
            process.exit(1);
        }
    }

    let result;

    try {
        switch (operation) {
            case 'add':
                result = add(num1, num2);
                break;
            case 'subtract':
                result = subtract(num1, num2);
                break;
            case 'multiply':
                result = multiply(num1, num2);
                break;
            case 'divide':
                result = divide(num1, num2);
                break;
            case 'modulo':
                result = modulo(num1, num2);
                break;
            case 'power':
                result = power(num1, num2);
                break;
            case 'sqrt':
                result = squareRoot(num1);
                break;
            default:
                throw new Error('Invalid operation. Supported: add, subtract, multiply, divide, modulo, power, sqrt');
        }
        console.log(`Result: ${result}`);
    } catch (e) {
        console.log(`Error: ${e.message}`);
        process.exit(1);
    }
}