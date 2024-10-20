// Use reduce() to find the sum of the squares of numbers in an array.
// Example input: [2, 3, 4]
// Expected output: 29 (because 2^2 + 3^2 + 4^2 = 4 + 9 + 16 = 29)

function sumSqNums(arr) {
  return arr.reduce((acc, cur) => {
    return cur * cur + acc;
  }, 0);
}

console.log(sumSqNums([2, 3, 4]));
