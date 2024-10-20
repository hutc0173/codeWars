// Count the occurrences of a value in an array:

// Use reduce() to count how many times a specific value appears in an array.
// Example input: ['a', 'b', 'a', 'c', 'a', 'b'], looking for occurrences of 'a'.
// Expected output: 3

function occurrences(arr, value) {
  return arr.reduce((acc, cur) => {
    return cur === value ? acc + 1 : acc;
  }, 0);
}
console.log(occurrences(["a", "b", "a", "c", "a", "b"], "a"));
