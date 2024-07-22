// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;

  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }

  let count = classPoints.length;
  let average = sum / count;
  console.log("Average:", average);

  if (yourPoints > average) {
    return true;
  } else {
    return false;
  }
}

let classPoints = [1, 2, 3, 4, 5];
let yourPoints = 4;
let result = betterThanAverage(classPoints, yourPoints);
console.log(result);

// create array with class scores
// create my score
// find average of class score
// compare scores
// return true or false
