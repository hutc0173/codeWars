// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {
  let percent;

  if (rating.toLowerCase() === "terrible") {
    percent = 0;
  } else if (rating.toLowerCase() === "poor") {
    percent = 5;
  } else if (rating.toLowerCase() === "good") {
    percent = 10;
  } else if (rating.toLowerCase() === "great") {
    percent = 15;
  } else if (rating.toLowerCase() === "excellent") {
    percent = 20;
  } else {
    return "Rating not recognised";
  }
  let tip = (amount / 100) * percent;
  return Math.ceil(tip);
}

let tipAmount = calculateTip(100, "poor");
console.log("Tip amount:", tipAmount);
