// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

// function addLength(str) {
//   let words = ["apple", "ban", "you will win", "cheese sandwich"];
//   let result = [];

//   for (let i = 0; i < words.length; i++) {
//     let text = words[i].split(" ");
//     for (let j = 0; j < text.length; j++) {
//       result.push(text[j] + " " + text[j].length);
//     }
//   }
//   return result;
// }

// let splitWord = addLength();
// console.log(splitWord);

function addLength(arr) {
  return arr.map((phrase) =>
    phrase.split(" ").map((word) => word + " " + word.length)
  );
}

let result = addLength(["apple", "ban", "you  will win"]);
console.log(result);
