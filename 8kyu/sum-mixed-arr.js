// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  return x.reduce((acc, curr) => acc + Number(curr), 0);
}

console.log(sumMix([1, "2", 3, "4", 5]));
console.log(sumMix(["8", 8]));
