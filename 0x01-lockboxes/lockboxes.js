/**
 * A module for working with lockboxes.
 */

function canUnlockAll(boxes) {
  /**
   * Checks if all the boxes in a list of boxes containing the keys
   * (indices) to other boxes can be unlocked given that the first
   * box is unlocked.
   */
  const n = boxes.length;
  const seenBoxes = new Set([0]);
  let unseenBoxes = new Set(boxes[0].filter(boxIdx => boxIdx !== 0));

  while (unseenBoxes.size > 0) {
    const boxIdx = Array.from(unseenBoxes).pop();
    if (!boxIdx || boxIdx >= n || boxIdx < 0) {
      continue;
    }
    if (!seenBoxes.has(boxIdx)) {
      unseenBoxes = new Set([...unseenBoxes, ...boxes[boxIdx]]);
      seenBoxes.add(boxIdx);
    }
  }

  return n === seenBoxes.size;
}

// Example usage:
const exampleBoxes = [[1], [2], [3], []];
console.log(canUnlockAll(exampleBoxes)); // Output: true

