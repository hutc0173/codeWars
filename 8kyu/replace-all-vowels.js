// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s) {
  let vowels = "aeiouAEIOU";
  let characters = s.split("");
  let replaced = characters.map((char) => (vowels.includes(char) ? "!" : char));
  return replaced.join("");
}
