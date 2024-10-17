"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.modulo = modulo;
exports.calculate = calculate;
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b == 0) {
        throw new Error("Cannot divide by 0");
    }
    return a / b;
}
function modulo(a, b) {
    if (b == 0) {
        throw new Error("b cannot be 0");
    }
    return a % b;
}
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        case '%':
            return modulo(a, b);
        default:
            throw new Error("Invalid operator");
    }
}
