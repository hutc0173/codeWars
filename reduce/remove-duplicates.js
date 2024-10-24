// Write a function that removes duplicate elements from an array using reduce().

// Example input: [1, 2, 3, 1, 2, 4]
// Expected output: [1, 2, 3, 4]
// javascript
// Copy code

function removeDuplicates(arr) {
  return arr.reduce((acc, cur) => {
    // Check if the current value is already in the accumulator
    if (!acc.includes(cur)) {
      acc.push(cur); // If not, add it to the accumulator
    }
    return acc; // Return the updated accumulator
  }, []); // Start with an empty array
}

console.log(removeDuplicates([1, 2, 3, 1, 2, 4])); // Output: [1, 2, 3, 4]
