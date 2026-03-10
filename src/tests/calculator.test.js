const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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

    describe('modulo', () => {
        test('modulo of positive numbers', () => {
            expect(modulo(10, 3)).toBe(1);
        });

        test('modulo resulting in zero', () => {
            expect(modulo(9, 3)).toBe(0);
        });

        test('modulo with negative numbers', () => {
            expect(modulo(-10, 3)).toBe(-1);
            expect(modulo(10, -3)).toBe(1);
        });

        test('modulo with decimal numbers', () => {
            expect(modulo(10.5, 3)).toBeCloseTo(1.5);
        });

        test('modulo with larger dividend', () => {
            expect(modulo(17, 5)).toBe(2);
        });

        test('throws error on modulo by zero', () => {
            expect(() => modulo(10, 0)).toThrow('Modulo by zero');
        });
    });

    describe('power', () => {
        test('power with positive base and exponent', () => {
            expect(power(2, 3)).toBe(8);
        });

        test('power with zero exponent', () => {
            expect(power(5, 0)).toBe(1);
        });

        test('power with negative exponent', () => {
            expect(power(2, -1)).toBe(0.5);
        });

        test('power with fractional result', () => {
            expect(power(4, 0.5)).toBe(2);
        });

        test('power with base zero', () => {
            expect(power(0, 5)).toBe(0);
        });

        test('power with negative base', () => {
            expect(power(-2, 3)).toBe(-8);
        });

        test('power with decimal base', () => {
            expect(power(1.5, 2)).toBe(2.25);
        });
    });

    describe('squareRoot', () => {
        test('square root of perfect square', () => {
            expect(squareRoot(16)).toBe(4);
        });

        test('square root of non-perfect square', () => {
            expect(squareRoot(2)).toBe(Math.sqrt(2));
        });

        test('square root of zero', () => {
            expect(squareRoot(0)).toBe(0);
        });

        test('square root of decimal number', () => {
            expect(squareRoot(0.25)).toBe(0.5);
        });

        test('square root of large number', () => {
            expect(squareRoot(100)).toBe(10);
        });

        test('throws error on negative number', () => {
            expect(() => squareRoot(-1)).toThrow('Square root of negative number');
        });

        test('throws error on negative decimal', () => {
            expect(() => squareRoot(-0.5)).toThrow('Square root of negative number');
        });
    });
});