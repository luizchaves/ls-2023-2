// create array with values
const numbers = [10, 20, 30];

console.log(numbers);
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);
console.log(numbers.at(-1));

// create empty array
const names = [];

// adding/
names[0] = 'John';
names[1] = 'Alice';
names[2] = 'Bob';

console.log(names);

// changing values
names[2] = 'Charlie';
console.log(names);

// [0, 1, 2]
const values = [0, 1, 2];

// [0, 1, 2] <=
// values[3] = 3;
values.push(3);

// => [0, 1, 2, 3]
values.unshift(-1);

// [-1, 0, 1, 2, 3]
console.log(values);

// multiple types
const person = [2023123, 'John', 20, ['LS', 'SO']];

console.log(person[3][0]);

// destructuring arrays
// const id = person[0];
// const name = person[1];
const [id, name] = person;

console.log(id);

const [studentId, , studentAge, [firstSubject]] = person;

console.log(studentId);

console.log(firstSubject);

// const [name, setName] = useState('');

// spread operator
const phone = '+55123456789';

// person.push('john@email.com');
const student = [...person, 'john@email.com', phone];

console.log(student);

// iteration
// [10, 20, 30]
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (const number of numbers) {
  console.log(number);
}

for (const index in numbers) {
  console.log(index);
  console.log(numbers[index]);
}

for (const [index, number] of numbers.entries()) {
  console.log(index);
  console.log(number);
}

// Object Array
// Property: length
// Mutator: push(), unshift(), pop(), shift(), reverse(), sort(), splice()
// Accessor: includes(), join(), slice()
// Iteration: map(), filter(), reduce(), every(), some()
