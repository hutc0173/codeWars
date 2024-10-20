// Write a function to count how many even numbers are present in an array using reduce().

// Example input: [1, 2, 3, 4, 5, 6]
// Expected output: 3 (because there are three even numbers: 2, 4, and 6)

function countEvenNumbers(arr) {
  return arr.reduce((acc, cur) => {
    return cur % 2 === 0 ? acc + 1 : acc;
  }, 0);
}

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 40, 80, 100]));
