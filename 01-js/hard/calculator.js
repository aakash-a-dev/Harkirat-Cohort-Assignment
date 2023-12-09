/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
}

// Adds a number to the result
add(number) {
    this.result += number;
}

// Subtracts a number from the result
subtract(number) {
    this.result -= number;
}

// Multiplies the result by a number
multiply(number) {
    this.result *= number;
}

// Divides the result by a number
divide(number) {
    if (number === 0) {
        throw new Error("Division by zero is not allowed");
    }
    this.result /= number;
}

// Sets the result variable to 0
clear() {
    this.result = 0;
}

// Returns the current value of the result variable
getResult() {
    return this.result;
}

// Evaluates a string expression with multiple arithmetic operations
calculate(expression) {
    // Remove continuous spaces and trim the expression
    const cleanedExpression = expression.replace(/\s+/g, ' ').trim();

    // Check for invalid characters in the expression
    if (!/^[\d\s\+\-\*\/\(\)\.]+$/.test(cleanedExpression)) {
      throw new Error("Invalid characters in the expression");
  }

    try {
        // Evaluate the expression and update the result
        this.result = eval(cleanedExpression);
    } catch (error) {
        throw new Error("Invalid expression");
    }
}}

module.exports = Calculator;
