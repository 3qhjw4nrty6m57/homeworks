const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const multiply = function(a, b) {
  return a * b;
};

const divide = function(a, b) {
  return a / b;
};

const operations = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide
};

const calculate = function(a, b, operation) {
  return operation(a, b);
};

const selectedOperation = "multiply";
console.log(calculate(6, 3, operations[selectedOperation]));
