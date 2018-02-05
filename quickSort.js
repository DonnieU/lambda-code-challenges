// Expected function: quickSort

// Implement the quick sort sorting algorithm. Assume the input is an array of integers.

// https://en.wikipedia.org/wiki/Quicksort

// https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort 
function quickSort(nums) {

  let partition = function(arr, lo, hi) {
    let swap = function(arr, p, r) {
      let tmp = arr[p];
      arr[p] = arr[r];
      arr[r] = tmp;
    }

    let i = lo;
    for (let j = lo; j < hi; j++) {
      if (arr[j] <= arr[hi]) {
        swap(arr, j, i);
        i++;
      }
    }
    // if (arr[hi] <= arr[i]) {
    swap(arr, hi, i);
    return i;
  }

  let qs = function(arr, lo, hi) {
    if (lo < hi) {
      let p = partition(arr, lo, hi);
      qs(arr, lo, p - 1);
      qs(arr, p + 1, hi);
    }
  }

  qs(nums, 0, nums.length - 1);
  return nums;
}

const test = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
console.log(quickSort(test));