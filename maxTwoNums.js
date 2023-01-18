// write a function that takes two numbers and returns
// the maximum number of the two numbers.

function max(a, b) {
  if (a > b) return `a:${a}`;
  else if (a < b) return `b:${b}`;

  return `a:${a} and b:${b} are equal`;
}

const MAX_NUMBER = 100;
function randomNumber(n) {
  return Math.floor(Math.random() * n + 1);
}

console.log(max(randomNumber(MAX_NUMBER), randomNumber(MAX_NUMBER)));
