// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

function checkExam(array1, array2) {
  let score = 0;

  for (let i = 0; i < array1.length; i++) {
    const correctAnswer = array1[i];
    const studentAnswer = array2[i];

    if (studentAnswer === "") {
      continue;
    } else if (studentAnswer === correctAnswer) {
      score += 4;
    } else {
      score -= 1;
    }
  }

  return Math.max(score, 0);
}

const array1 = ["a", "b", "a", "d"];
const array2 = ["a", "b", "a", "d"];

const finalScore = checkExam(array1, array2);
console.log(`final score': ${finalScore}`);
