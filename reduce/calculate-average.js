// Write a function to calculate the average of numbers in an array using reduce().

// Example input: [10, 20, 30, 40]
// Expected output: 25

function averageOfArray(arr) {
  const totalSum = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return totalSum / arr.length;
}

console.log(averageOfArray([10, 20, 30, 40])); // Output: 25
