// Return the number (count) of vowels in the given string.

const { get } = require("mongoose");

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(getCount("hello barry"));

function getCount(str) {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(getCount("hello barry"));
