export default function taskBlock(trueOrFalse) {
  let task = false; // Changed var to let
  let task2 = true; // Changed var to let

  if (trueOrFalse) {
    task = false; // No need to re-declare with let or const
    task2 = true; // No need to re-declare with let or const
  }

  return [task, task2];
}

