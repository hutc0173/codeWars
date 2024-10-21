// Write a function to find the maximum number in an array using reduce().

// Example input: [3, 5, 1, 9, 7]
// Expected output: 9

function findMax(arr) {
  return arr.reduce((acc, cur) => {
    return cur > acc ? cur : acc;
  });
}

console.log(findMax([3, 5, 1, 9, 7])); // Output: 9
