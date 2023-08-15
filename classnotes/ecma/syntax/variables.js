// without declaration keyword
test = 10;

console.log(test);

// const
const number = 10;

console.log(number);

// 'const' declarations must be initialized.
// const value;

// TypeError: Assignment to constant variable.
// number = 100;

// not imutable
const numbers = [1, 2];

numbers.push(3);

console.log(numbers);

// Cannot redeclare block-scoped variable 'number'
// const number = 100;

function test() {
  const number = 10;
}

// let
let person = 'John';

// Cannot redeclare block-scoped variable 'value'
person = 'Alice';

// var
var email = 'john@email.com';

var email = 'alice@email.com';

// reassignment
email = 10;

// dynamic types
let value = 10;

value = 'john';

// case sensitive
let Value = 100;

// weak type
const x = 10;
const y = '5';
console.log(x + y);
console.log(x - y);
