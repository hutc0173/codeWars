// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0

function noBoringZeros(n) {
  let numToString = n.toString();
  let lastChar = numToString.charAt(numToString.length - 1);
  console.log("numToString:", numToString);
  console.log("lastChar:", lastChar);
  if (lastChar == "0") {
    newString = numToString.slice(0, -1);
  }
  return n;
}

console.log(noBoringZeros(1828));

// find the last number
//check if its zero
//if it is remove it
