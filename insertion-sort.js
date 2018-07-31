let insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    let tempValue = array[i];
    for (var j = i - 1; j >= 0 && array[j] > tempValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = tempValue;
  }
  return array;
}

console.log(insertionSort([2, 1, 22, -5, -1, -5, 50, 2, 13, -3]));

// make it an while loop rather than another for loop, local/global variable, changed let to var line 4
