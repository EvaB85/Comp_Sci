let insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    let tempIndex = array[i];
    for (let j = i - 1; j >= 0 && array[j] > tempIndex; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = tempIndex;
  }
  return array;
}


// reference:
// https://repl.it/@EvaB/JSInsertionSortcode
