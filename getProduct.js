/* Write a function called getProduct that gets the product of all
the integers at the array EXCEPT the one at that index.

For example, given [1, 9, 6, 5, 2] your function should
return [540, 60, 90, 108,  270], because the calculation looks like this:

[9 * 6 * 5 * 2, 1 * 6 * 5 * 2, 1 * 9 * 5 * 2, 1 * 9 * 6 * 5].

Edge cases:
No division, as some arrays may include 0.
Target time: O(n) */
// This has O(n^2) run time...
function getProduct(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let prod = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j === i) {
        continue;
      } else {
        prod *= arr[j];
      }
    }
    res.push(prod);
  }
  return res;
}

// Model solution...
// function getProduct(arr) {
//   const ans = [];
//   let soFar = 1;
//   for (let i = 0; i < arr.length; i++) {
//     ans[i] = soFar;
//     soFar *= arr[i];
//   }
//   soFar = 1;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     ans[i] *= soFar;
//     soFar *= arr[i];
//   }
//  return ans;
//  }

console.log(getProduct([1, 9, 6, 5, 2]));