class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation;
  }

  calculate() {
    switch (this.operation.toLowerCase()) {
      case 'add':
        return this.a + this.b;
      case 'subtract':
        return this.a - this.b;
      case 'multiply':
        return this.a * this.b;
      case 'divide':
        return this.b !== 0 ? this.a / this.b : 'Error: Division by zero';
      default:
        return 'Invalid operation';
    }
  }
}

// output
const calc = new Calculator(10.5, 2.5, 'add');
console.log(calc.calculate());  // Output: 13
