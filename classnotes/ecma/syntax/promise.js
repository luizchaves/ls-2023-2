function sum(a, b) {
  if (typeof a == 'number' && typeof b == 'number') {
    return a + b;
  } else {
    return NaN;
  }
}

console.log(sum(1, 2));
console.log(sum(1, true));

let temp = sum(1, 1);
console.log(sum(temp, 2));

function sumPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a == 'number' && typeof b == 'number') {
      resolve(a + b);
    } else {
      reject(NaN);
    }
  });
}

// console.log(sumPromise(1, 2));
// console.log(sumPromise(1, true));
sumPromise(1, 2).then((result) => console.log(result));

sumPromise(1, true)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// let temp = sum(1, 1);
// console.log(sum(temp, 2));

sumPromise(1, 1)
  .then((result) => sumPromise(result, 2))
  .then((result) => console.log(result))
  .catch(() => console.log('Error na soma'));

async function sumAsync(a, b) {
  if (typeof a == 'number' && typeof b == 'number') {
    return a + b;
  } else {
    throw new Error('Invalid params');
  }
}

sumAsync(4, 4)
  .then((result) => console.log(result))
  .catch((error) => console.log('Error na soma'));

sumAsync(4, true)
  .then((result) => console.log(result))
  .catch((error) => console.log('Error na soma'));

async function main() {
  try {
    const temp = await sumAsync(5, 5);
    console.log(temp);
  } catch (error) {
    console.log('Error na soma');
  }
}

main();
