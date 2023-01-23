// write a function that sums up all the multiplies of 3 and 5
// [] get the multiplies of 3
// [] get the multiplies of 5
// [] sum up all the multiplies of 3
// [] sum up all the multiplies of 5
// [] sum up all the multiplies of 3 and 5

function sum(limit) {

  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }

  console.log(sum);
}

console.log(sum(10));
