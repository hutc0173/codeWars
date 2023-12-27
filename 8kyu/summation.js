const summation = function (num) {
  if (num > 0) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  } else {
    return 0;
  }
};

console.log(summation(5));
