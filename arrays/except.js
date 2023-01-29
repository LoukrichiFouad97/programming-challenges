// write a function that takes 2 arrays as arguments and returns
// the first array filtered by the second

function except(first, second) {
  const firstCopy = [...first];

  for (const item of second) {
    let startIndex = firstCopy.indexOf(item);

    if (startIndex >= 0) {
      firstCopy.splice(startIndex, 1);
    }
  }

  return firstCopy;
}

const array1 = [1, 2, 3, 4];
const array2 = [1];

console.log(except(array1, array2));
