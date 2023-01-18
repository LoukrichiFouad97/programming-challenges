/**
 *
 *
 */

function filteredArray(arr, elem) {
  let newArr = [];
  let subArr;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    subArr = arr[i];
    if (subArr.indexOf(elem) == -1) {
      newArr.push(subArr);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 2, 9],
    ],
    3
  )
);

console.log(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6],
    ],
    18
  )
);
// [ [10, 8, 3], [14, 6, 23] ]

console.log(
  filteredArray(
    [
      ["trumpets", 2],
      ["flutes", 4],
      ["saxophones", 2],
    ],
    2
  )
);
// [ ["flutes", 4] ]

console.log(
  filteredArray(
    [
      ["amy", "beth", "sam"],
      ["dave", "sean", "peter"],
    ],
    "peter"
  )
);
// [ ["amy", "beth", "sam"] ]

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
// [ ]
