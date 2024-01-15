// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

function contamination(text, char) {
  if (text === "" || char === "") {
    return "";
  }
  const mutatedText = text
    .split("")
    .map(() => char)
    .join("");

  return mutatedText;
}

const originalText = "This text is infected!";
const mutatedCharacter = "#";

const mutatedText = contamination(originalText, mutatedCharacter);
console.log(mutatedText);

// The below also works the same

// function contamination(text, char){
//   return char.repeat(text.length)
// }
