// Given an array of arrays, use reduce() to flatten them into a single array.
// Example input: [[1, 2], [3, 4], [5]]
// Expected output: [1, 2, 3, 4, 5]

function flattenArr(arr) {
  return arr.reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);
}

console.log(flattenArr([[1, 2], [3, 4], [5]]));
