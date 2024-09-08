// You need to write a function that reverses the words in a given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

function reverse(string) {
  let words = string.trim().split(" ");
  let reverseWords = words.reverse();
  return reverseWords.join(" ");
}

console.log(reverse("I am an expert at this"));
