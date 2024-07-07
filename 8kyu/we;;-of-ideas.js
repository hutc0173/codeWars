// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x) {
  const goodCount = x.filter((idea) => idea === "good").length;

  if (goodCount === 0) {
    return "Fail!";
  } else if (goodCount <= 2) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
}

// check array for good - loop
