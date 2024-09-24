// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut(string) {
  let newString = string.replace(/[aeiou]/g, "");
  return newString;
}

console.log(shortcut("hello world"));

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);
console.log(numbers);

const fruits = ["apple", "banana", "cherry"];
const UpperC = fruits.map((fruit) => fruit.toUpperCase());
console.log(UpperC);

const nums = [5, 10, 15, 20];
const newArr = nums.map((num) => num + 10);
console.log(newArr);

const animals = ["dog", "cat", "bird"];
const firstLet = animals.map((letter) => letter[0]);
console.log(firstLet);

const numbs = [100, 200, 300];
const conString = numbs.map((n) => n.toString());
console.log(conString);
