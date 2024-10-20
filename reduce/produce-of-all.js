// Write a function to calculate the product of all the numbers in an array using reduce().

// Example input: [2, 3, 4]
// Expected output: 24 (because 2 * 3 * 4 = 24)

function productOfArray(arr) {
  return arr.reduce((acc, cur) => {
    return cur * acc;
  }, 1);
}

console.log(productOfArray([2, 3, 4]));
