// function declaration
function sum(a, b) {
  return a + b;
}

// call function
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));

// anonymous/lambda function
const addition = function (a, b) {
  return a + b;
};

console.log(addition(1, 2));

// arrow function
const minus = (a, b) => {
  return a - b;
};

const subtraction = (a, b) => a - b;

// rest param
const multiply = (...numbers) => {
  console.log(numbers);
};

multiply(1, 2);
multiply(1, 2, 3, 4, 5);

// default param
function divide(a, b = 1) {
  return a / b;
}

console.log(divide(2));
console.log(divide(2, 2));
