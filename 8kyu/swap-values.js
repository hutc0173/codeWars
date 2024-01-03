// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

function swapValues(input) {
  let temp = input[0];
  input[0] = input[1];
  input[1] = temp;
  return input;
}
let arr = [3, 7];
let result = swapValues(arr);

console.log(result);
