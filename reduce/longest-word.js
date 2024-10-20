// Write a function to find the longest word in an array of strings using reduce().

// Example input: ['apple', 'banana', 'cherry', 'date']
// Expected output: 'banana' (because 'banana' is the longest word)

function longestWord(arr) {
  return arr.reduce((acc, cur) => {
    return cur.length > acc.length ? cur : acc;
  }, "");
}

console.log(longestWord(["apple", "banana", "cherry", "date"]));

//split each word into letters
//add up the letters
//return a value of letters
//join the word back together
