// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

const { CLIENT_PUBLIC_FILES_PATH } = require("next/dist/shared/lib/constants");

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  const min1 = Math.min(...numbers);
  const minIndex1 = numbers.indexOf(min1);
  numbers.splice(minIndex1, 1);

  const min2 = Math.min(...numbers);
  console.log(min1, min2);

  return min1 + min2;
}

console.log(sumTwoSmallestNumbers([2, 4, 6, 7, 1]));

// make sure they are positive
// min of 4
// find 2 lowests
// add them
