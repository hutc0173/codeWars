// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let checker = str.toLowerCase().split("");

  let ex = 0;
  let oh = 0;
  for (i = 0; i < checker.length; i++) {
    if (checker[i] === "x") {
      ex++;
    } else if (checker[i] === "o") {
      oh++;
    }
  }
  return ex === oh;
}

console.log(XO("ooxx")); // true
console.log(XO("xooxx")); // false
console.log(XO("ooxXm")); // true
console.log(XO("zpzpzpp")); // true
console.log(XO("zzoo")); // false
console.log(XO("dog"));
// split string up
// loop through
