// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers

function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}
