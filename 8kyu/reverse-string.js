// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str) {
//   console.log("origianl str", str);
//   let newStr = str.split("");
//   newStr.reverse();
//   console.log("reverse str", newStr);
//   return newStr.join();
// }

function solution(str) {
  return str.split("").reverse().join("");
}

console.log(solution("hello"));
