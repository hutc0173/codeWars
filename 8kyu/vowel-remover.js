// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut(string) {
  let newString = string.replace(/[aeiou]/g, "");
  return newString;
}

console.log(shortcut("hello world"));
