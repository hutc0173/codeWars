// Multiply all elements in an array:

// Use reduce() to multiply all values in the array, starting with an initial value of 1.
// Example input: [2, 3, 4]
// Expected output: 24

function multiply() {
  const arr = [4, 2, 8, 4];
  const result = arr.reduce((acc, curr) => {
    return acc * curr;
  }, 1);

  return result;
}

console.log(multiply());
