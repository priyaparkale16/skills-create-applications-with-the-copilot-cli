const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Functions', () => {
    describe('add', () => {
        test('adds two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('adds positive and negative numbers', () => {
            expect(add(5, -3)).toBe(2);
        });

        test('adds two negative numbers', () => {
            expect(add(-2, -3)).toBe(-5);
        });

        test('adds decimal numbers', () => {
            expect(add(1.5, 2.5)).toBe(4);
        });

        test('adds zero', () => {
            expect(add(0, 5)).toBe(5);
            expect(add(5, 0)).toBe(5);
        });
    });

    describe('subtract', () => {
        test('subtracts two positive numbers', () => {
            expect(subtract(10, 4)).toBe(6);
        });

        test('subtracts resulting in negative', () => {
            expect(subtract(4, 10)).toBe(-6);
        });

        test('subtracts negative numbers', () => {
            expect(subtract(-5, -3)).toBe(-2);
        });

        test('subtracts decimal numbers', () => {
            expect(subtract(5.5, 2.2)).toBe(3.3);
        });

        test('subtracts zero', () => {
            expect(subtract(5, 0)).toBe(5);
            expect(subtract(0, 5)).toBe(-5);
        });
    });

    describe('multiply', () => {
        test('multiplies two positive numbers', () => {
            expect(multiply(5, 6)).toBe(30);
        });

        test('multiplies positive and negative', () => {
            expect(multiply(5, -3)).toBe(-15);
        });

        test('multiplies two negative numbers', () => {
            expect(multiply(-2, -3)).toBe(6);
        });

        test('multiplies by zero', () => {
            expect(multiply(5, 0)).toBe(0);
            expect(multiply(0, 5)).toBe(0);
        });

        test('multiplies decimal numbers', () => {
            expect(multiply(1.5, 2)).toBe(3);
        });
    });

    describe('divide', () => {
        test('divides two positive numbers', () => {
            expect(divide(15, 3)).toBe(5);
        });

        test('divides resulting in decimal', () => {
            expect(divide(10, 4)).toBe(2.5);
        });

        test('divides negative numbers', () => {
            expect(divide(-10, 2)).toBe(-5);
            expect(divide(10, -2)).toBe(-5);
            expect(divide(-10, -2)).toBe(5);
        });

        test('divides by one', () => {
            expect(divide(10, 1)).toBe(10);
        });

        test('throws error on division by zero', () => {
            expect(() => divide(10, 0)).toThrow('Division by zero');
            expect(() => divide(0, 0)).toThrow('Division by zero');
        });
    });
});