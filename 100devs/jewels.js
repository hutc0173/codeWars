// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// ​
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
// ​
// Example 1:
// ​
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:
// ​
// Input: jewels = "z", stones = "ZZ"
// Output: 0

// constraints
// 1<= jewels.length, stones.length <=50
// all characters of jewels are unique

//PREP
//Parameters
// one string is a list of jewels
// one string is a list of stones that i have

//RETURN
// How many of my stones are jewels -> ie rock, diamond, rock, emerald

//example

function findJewels(jewels, stones) {
  const map = {};
  let count = 0;
  // loop to confirm all the jewels

  for (const jewel of jewels) {
    map[jewel] = true;
  }

  // loop to compare all of my stones to see if jewels
  for (const stone of stones) {
    if (map[stone]) {
      count++;
    }
  }
  return count;
}

console.log(findJewels("aA", "aAAbbbb"), "3");
