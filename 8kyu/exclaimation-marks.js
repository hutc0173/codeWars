// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

function remove(string) {
  while (string.endsWith("")) {
    string = string.slice(0, -1);
  }
  return string;
}

console.log(remove("hello!!"));
