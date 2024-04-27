// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  const totalSeconds = h * 3600 + m * 60 + s;

  return totalSeconds * 1000;
}
