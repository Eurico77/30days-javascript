const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const calculate = operation => (a, b) => operation(a, b) 
console.log(calculate(sum)(1, 2));