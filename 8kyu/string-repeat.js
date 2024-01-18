// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr(n, s) {
  if (n <= 0) {
    return "";
  }
  return s.repeat(n);
}

console.log(repeatStr(7, "hello"));
