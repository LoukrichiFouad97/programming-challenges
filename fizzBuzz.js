// [x] divisible by 3 fizz
// [x] divisible by 5 buzz
// [x] divisible by 3 & 5 fizzbuzz
// [x] not divisible by 3 & 5 => input
// [x] not a number return => "Not a number"

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "fizzBuzz";
  if (input % 3 === 0) return "fizz";
  if (input % 5 === 0) return "buzz";

  return input;
}

console.log(fizzBuzz(13));
