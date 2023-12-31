// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] < 5 ? 0 : 1);
  }
  return result.join("");
}

console.log(fakeBin([5, 1, 1, 0, 10]));
