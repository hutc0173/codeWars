// Write a function that groups elements by their type (number, string, boolean, etc.) using reduce().

// Example input: [1, 'apple', true, 3, 'banana', false]
// Expected output: { number: [1, 3], string: ['apple', 'banana'], boolean: [true, false] }

function groupByType(arr) {
  return arr.reduce((acc, cur) => {
    const type = typeof cur;

    if (!acc[type]) {
      acc[type] = []; // Create a new array for that type
    }

    acc[type].push(cur);

    return acc;
  }, {});
}

console.log(groupByType([1, "apple", true, 3, "banana", false]));
// Output: { number: [1, 3], string: ['apple', 'banana'], boolean: [true, false] }

//initialise an empty object
//if no type create one
// push into the
