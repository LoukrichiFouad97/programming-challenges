// you have given an array of elements count the truthy values

function countTruthy(array) {
  let counter = 0;
  for (const i of array) {
    if (i) counter++;
  }
  return counter;
}

const array = [1, 2,  4, null, undefined, 0];
console.log(countTruthy(array));
