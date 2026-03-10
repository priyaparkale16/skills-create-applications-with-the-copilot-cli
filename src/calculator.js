#!/usr/bin/env node

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
};

module.exports = { add, subtract, multiply, divide };

if (require.main === module) {
    // Node.js CLI Calculator
    // This calculator supports the four basic math operations:
    // - add: Addition of two numbers
    // - subtract: Subtraction of two numbers
    // - multiply: Multiplication of two numbers
    // - divide: Division of two numbers

    const args = process.argv.slice(2);

    if (args.length !== 3) {
        console.log('Usage: node calculator.js <operation> <num1> <num2>');
        console.log('Operations: add, subtract, multiply, divide');
        process.exit(1);
    }

    const [operation, num1Str, num2Str] = args;

    const num1 = parseFloat(num1Str);
    const num2 = parseFloat(num2Str);

    if (isNaN(num1) || isNaN(num2)) {
        console.log('Error: Both arguments must be numbers');
        process.exit(1);
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
            default:
                throw new Error('Invalid operation. Supported: add, subtract, multiply, divide');
        }
        console.log(`Result: ${result}`);
    } catch (e) {
        console.log(`Error: ${e.message}`);
        process.exit(1);
    }
}