// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

function solution(a, b) {
  let short = a.length < b.length ? a : b;
  let long = a.length < b.length ? b : a;

  return short + long + short;
}

// Testing the function
console.log(solution("599", "17")); // Expected output: "1759917"
console.log(solution("22", "1"));
