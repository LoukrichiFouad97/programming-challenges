function showNumbers(limit) {
  if (limit % 2 === 0) return `${limit} is EVEN`;
  return `${limit} is ODD`;
}

function randomNumber(max) {
  return Math.floor(Math.random() * max + 1);
}

console.log(showNumbers(randomNumber(10)));
