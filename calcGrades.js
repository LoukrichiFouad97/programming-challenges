// you have given a student makrs calculate the average grade
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const makrs = [80, 80, 50];
function calculateGrade(marks) {
  let grade = calculateAverage(marks);

  if (grade < 60) return `${grade} is F`;
  if (grade < 70) return `${grade} is D`;
  if (grade < 80) return `${grade} is C`;
  if (grade < 90) return `${grade} is B`;

  return `${grade} is A`;
}

function calculateAverage(array) {
  let sum = 0;
  for (const value of array) {
    sum += value;
  }

  return sum / array.length;
}

console.log(calculateGrade(makrs));
