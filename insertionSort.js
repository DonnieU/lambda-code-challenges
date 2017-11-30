// Insertion sort is a basic sorting algorithm. Insertion sort
// iterates over an array, growing a sorted array behind the current location.
// It takes each element from the input and finds the spot, up to the current point,
// where that element belongs. It does this until it gets to the end of the array.
// https://en.wikipedia.org/wiki/Insertion_sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let x = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > x; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = x;
  }
  return arr;
}

console.log(insertionSort([3, 7, 4, 9, 5, 2, 6, 1]));