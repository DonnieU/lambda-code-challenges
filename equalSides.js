// Write a function that returns the index of the given array at which
// the sums of the numbers on either side of it are equal to each other.
// Example:  

// equalSides([1, 2, 3, 4, 3, 2, 1]);

// should return 3 because the sums of the numbers on either side of arr[3]
// are both equal to 6. (1+2+3 (4) 3+2+1)

// The length of the sides do not have to be equal, only the sums of their values.

// equalSides([1, 1, 1, 4, 2, 1]);

// should also return 3 (arr[3] = 4), because 1+1+1 is 3, and 2+1 is 3.
// If the array can't be split into equal sides, return -1.
function equalSides(arr) {
  let lsum = arr[0];
  let rsum = arr[arr.length - 1];
  let lidx = 0;
  let ridx = arr.length - 1;
  while (ridx - lidx > 1) {
    if (lsum > rsum) {
      ridx--;
      rsum += arr[ridx];
    } else if (rsum > lsum) {
      lidx++;
      lsum += arr[lidx];
    } else {
      ridx--;
      rsum += arr[ridx];
      lidx++;
      lsum += arr[lidx];
    }
    if ((lsum === rsum) && (ridx - lidx === 2)) return lidx + 1;
    //console.log(lsum, rsum);
  }
  return -1;
}

// Model solution...
// function equalSides (arr) {
//   function reduceSides(side) {
//     return side.reduce(function(result, currentNum, index, side) {
//       return result + currentNum;
//     }, 0);
//   }
//   for (var i = 1; i < arr.length; i++) {
//     var a = arr.slice(0, i); 
//     var b = arr.slice(i+1, arr.length);
//     if (reduceSides(a) === reduceSides(b)) {
//       return i
//     }
//   }
//   return -1;
//  }

console.log(equalSides([1, 2, 3, 4, 3, 2, 1]));
console.log(equalSides([1, 1, 1, 0, 1, 1, 1, 2, 2, 1, 4, 3, 4, 1, 2, 1]));
console.log(equalSides([1, 1, 1, 4, 2, 1]));
