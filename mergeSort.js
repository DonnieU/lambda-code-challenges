// Reference https://en.wikipedia.org/wiki/Merge_sort for more detail about how this sorting algorithm works.

// Sort an array of integers using the merge sort algorithm.

// First divide the list into its smallest unit (arrays with a single item in them)
// Then compare each element with the adjacent list and combine them in the proper order.

// Repeat until the entire array is sorted.

// Example: 
// - Input: [1, 6, 3, 2, 4, 7]
// - Expected Output: [1, 2, 3, 4, 6, 7];

// [1, 6, 3, 2, 4, 7] -> [1, 2, 3, 4, 6, 7]
// [1, 6, 3][2, 4, 7]
// [1][6, 3][2][4, 7]
// [1][6][3][2][4][7]
// [1, 3][6][2][4][7]
// [1, 3][6][2, 4][7]
// [1, 3, 6][2, 4][7]
// [1, 3, 6][2, 4, 7]
// [1, 2, 3, 4, 6, 7]
function mergeSort(arr) {

  function conquer(l, m, r) {
    llen = m - l + 1;
    rlen = r - m;
    let L = [];
    let R = [];

    for (let i = 0; i < llen; i++) L[i] = arr[l + i];
    for (let j = 0; j < rlen; j++) R[j] = arr[m + 1 + j];
    console.log(L, R);

    let i = 0;
    let j = 0;
    let k = l;

    while (i < llen && j < rlen) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }
    console.log(i, j, k);
    // while (i < llen) {
    //   arr[k] = L[i];
    //   i++;
    //   k++;
    // }

    // while (j < rlen) {
    //   arr[k] = R[j];
    //   j++;
    //   k++;
    // }
  }

  function divide(l, r) {
    if (l < r) {
      m = Math.floor((l + r) / 2);
      console.log(m);
      divide(l, m);
      divide(m + 1, r);
      conquer(l, m, r);
    }
    console.log(arr);
  }

  let l = 0;
  let r = arr.length - 1;
  console.log(l, r);
  divide(l, r);
  console.log(arr);
  return arr;
}

console.log(mergeSort([12, 11, 13, 5, 6, 7]));