// create an array range from the min and max values

function arrayFromRange(min, max) {
  const array = [];

  for (let i = min; i <= max; i++) array.push(i);

  return array;
}

const nums = arrayFromRange(-10, -4);
console.log(nums);
