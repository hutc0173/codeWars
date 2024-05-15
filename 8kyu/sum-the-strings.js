// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// get the value from 1 and 2 convert to num
// add them together
// convert back to a number

function sumStr(a, b) {
  let num1 = a === "" ? 0 : Number(a);
  let num2 = b === "" ? 0 : Number(b);

  let sum = num1 + num2;
  return sum.toString();
}

console.log(sumStr("8", "9"));
