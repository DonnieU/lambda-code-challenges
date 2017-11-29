// function bubbleSort(arr) {
//   let sorting = true;
//   while (sorting) {
//     sorting = false;
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < arr[i - 1]) {
//         let tmp = arr[i];
//         arr[i] = arr[i - 1];
//         arr[i - 1] = tmp;
//         sorting = true;
//       }
//     }
//     console.log(arr);
//   }
//   return arr;
// }

// Runtime complexity is O(n^2).
// It can be improved by realizing that all elements after the last swap
// are sorted and don't need to be checked again, thus reducing the number
// of elements to check in each pass. This would result in at most a 50% speed-up.

// Perry Ahern's solution...
function bubbleSort(arr) {
  let index = 0;
  let sortedArray = arr;
  let resorting = true;
  let bubble = ((toSort, index) => {
    resorting = false;
    for (let i = 0; i <= toSort.length - index; i++) {
      if (toSort[i] > toSort[i + 1]) {
        let temp = toSort[i + 1];
        toSort[i + 1] = toSort[i];
        toSort[i] = temp;
        resorting = true;
      }
    }
    return toSort;
  });

  while (resorting) {
    sortedArray = bubble(sortedArray, index);
    index++;
  }
  return sortedArray;
}

test = [6, 2, 11, 3, 5, 17, 9, 7, 1, 4];
console.log(bubbleSort(test));
