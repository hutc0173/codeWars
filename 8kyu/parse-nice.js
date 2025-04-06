// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString) {
  const words = inputString.split(" ");
  const age = parseInt(words[0]);

  return age;
}

console.log(getAge("5 hello dave how are you"));

// spilt the string up
// take first element out
// turn into a int
