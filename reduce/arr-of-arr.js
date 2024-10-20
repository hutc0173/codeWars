// Write a function to flatten a 2D array into a 1D array using reduce().

// Example input: [[1, 2], [3, 4], [5]]
// Expected output: [1, 2, 3, 4, 5]

function flattenArray(arr) {
  return arr.reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);
}

console.log(flattenArray([[1, 2], [3, 4], [5]])); // Output: [1, 2, 3, 4, 5]
