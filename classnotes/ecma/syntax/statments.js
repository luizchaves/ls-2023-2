const x = 10;
const y = 20;
const operator = '-'; // +, -, *, /

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
