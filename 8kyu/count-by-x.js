// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

function countBy(x, n) {
  let z = [];

  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }

  return z;
}

console.log(countBy(5, 3));

// x * n = 15
// store answer in variable and then divide that by

// x: A number that will be used as the base for creating multiples.
// n: The number of multiples to generate.
// For example, if x is 5 and n is 3, the function should return an array [5, 10, 15], which contains the first three multiples of 5.
