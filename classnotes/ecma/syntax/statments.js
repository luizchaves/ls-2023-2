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
//   console.log(value1 + value2);
// } else if (operator === '-') {
//   console.log(value1 - value2);
// } else {
//   console.log('Invalid operator');
// }

switch (operator) {
  case '+':
    console.log(value1 + value2);
    break;
  case '-':
    console.log(value1 - value2);
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
let sequence = '';

for (let flag = 0; flag <= 99; flag += 1) {
  if (flag < 10) {
    sequence += '0' + flag;
  } else {
    sequence += flag;
  }
  if (flag % 10 === 9) {
    sequence += '\n';
  } else {
    sequence += ' ';
  }
}

// console.log(sequence);

// for for
sequence = '';

for (let decimal = 0; decimal <= 9; decimal++) {
  for (let unit = 0; unit <= 9; unit++) {
    sequence += decimal + String(unit) + (unit === 9 ? '\n' : ' ');
  }
}

// console.log(sequence);

// 90, 91, ... 99
// ...
// 10, 11, ..., 19
// 00, 01, ..., 09
sequence = '';

for (let flag = 99; flag >= 0; flag -= 1) {
  if (flag < 10) {
    sequence += '0' + flag;
  } else {
    sequence += flag;
  }
  if (flag % 10 === 0) {
    sequence += '\n';
  } else {
    sequence += ' ';
  }
}

console.log(sequence);
