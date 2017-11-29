// Given an array comprised of 0s and 1s, write a function in 
// linear time that will sort the array.  Ex:

// [0, 1, 0, 1, 0, 1, 0, 1] => [0, 0, 0, 0, 1, 1, 1, 1].

// Time requirement: O(n)
// function binarySort(arr) {
//   const zeros = [];
//   const ones = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) zeros.push(0);
//     else ones.push(1);
//   }
//   return zeros.concat(ones);
// }

// in-line sorting...sortof
function binarySort(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] === 1) {
      arr.splice(i, 1);
      arr.push(1);
      length--;
    }
  }
  return arr;
}
// Model solution...
// function binarySort(arr) {
//   let zeroes = 0; //count our zeroes
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) zeroes++; //loop over array, add to zeroes
//   }
//   let j = 0; //start j at 0
//   while (zeroes-- > 0) arr[j++] = 0; //while zeroes minus 1 is gr than 0, the array item at index j+1 = 0
//   while (j < arr.length) arr[j++] = 1; //while j is less than the array length, add ones to fill it
//   return arr;
// }

console.log(binarySort([0, 1, 0, 1, 0, 1, 0, 1]));