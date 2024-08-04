// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function () {
  const regex = /[a-z]/;
  return !regex.test(this);
};

console.log("c".isUpperCase()); // False
console.log("C".isUpperCase()); // True
console.log("hello I AM DONALD".isUpperCase()); // False
console.log("HELLO I AM DONALD".isUpperCase()); // True
console.log("ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase()); // False
console.log("ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase()); // True
