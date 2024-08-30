// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

// Task
// Create a function that takes in a list of button inputs and returns the final state.

function likeOrDislike(buttons) {
  let state = "Nothing";

  for (let button of buttons) {
    if (button === state) {
      state = "Nothing";
    } else {
      state = button;
    }
  }
  return state;
}

// return Like || Dislike || Nothing;
