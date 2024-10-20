// Find the maximum value in an array:

// Use reduce() to return the maximum value in an array.
// Example input: [5, 1, 7, 3]
// Expected output: 7

function maxValue(x) {
  return x.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
  });
}

console.log(maxValue([5, 1, 7, 3]));
