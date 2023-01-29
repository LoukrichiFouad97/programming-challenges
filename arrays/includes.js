// create a new function that will take an array and a search string
// if the search string found it will return true. Otherwise it will return false

function includes(array, searchElement) {
  for (const item of array) {
    if (item === searchElement) return true;
  }

  return false;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(includes(array, 3));
