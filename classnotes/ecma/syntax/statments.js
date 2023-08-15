// statements (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

// if
const number = 5;

if (number > 0) console.log('This number is positive');

if (number > 0) {
  console.log('This number is');
  console.log('positive');
}

// if..esle
if (number >= 0) {
  console.log('This number is positive');
} else {
  console.log('This number is negative');
}

// if..else if..else
if (number > 0) {
  console.log('This number is positive');
} else if (number < 0) {
  console.log('This number is negative');
} else {
  console.log('This number is equal to zero');
}

// switch
const value1 = 10;
const value2 = 20;
const operator = '-'; // +, -
let result;

// if (operator === '+') {
//   console.log(x + y);
// } else if (operator === '-') {
//   console.log(x - y);
// } else {
//   console.log('Invalid operator');
// }

switch (operator) {
  case '+':
    console.log(x + y);
    break;
  case '-':
    console.log(x - y);
    break;
  default:
    console.log('Invalid operator');
}

switch (operator) {
  case '+':
    result = value2 + value1;
    break;
  case '-':
    result = value2 - value1;
    break;
  default:
    result = 'Invalid Operator';
}

console.log(result);

switch (true) {
  case number > 0:
    console.log('This number is positive');
  case number < 0:
    console.log('This number is negative');
  default:
    console.log('This number is equal to zero');
}

// while
let flag = 0;

while (flag < 10) {
  console.log(flag);
  flag++; // flag += 1
}

// do..while
flag = 0;

do {
  console.log(flag);
  flag++; // flag += 1
} while (flag < 10);

// for
result = '';

for (let flag = 1; flag < 10; flag++) {
  result += flag;
}

console.log(result);

// 00, 01, ..., 09
// 10, 11, ..., 19
// ...
// 90, 91, ... 99

// for for
