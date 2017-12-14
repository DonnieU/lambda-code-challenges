// Given an image represented by an NxN matrix, where each pixel in the image is an
// integer from 0 - 9, write a method to rotate the image by 90 degrees counterclockwise.
// Can you do this in place? Ex:  

// rotateImage([ [1, 2],
//               [3, 4]]);
// should return  
// [ [2, 4],
//   [1, 3]].
// Likewise, 
// rotateImage([
//   [1, 1, 5, 9, 9],
//   [2, 2, 6, 0, 0],
//   [3, 3, 7, 1, 1],
//   [4, 4, 8, 2, 2],
//   [5, 5, 9, 3, 3]
//   ]);
// should return

// [ [ 9, 0, 1, 2, 3 ],
//   [ 9, 0, 1, 2, 3 ],
//   [ 5, 6, 7, 8, 9 ],
//   [ 1, 2, 3, 4, 5 ],
//   [ 1, 2, 3, 4, 5 ] ]
function rotateImage(matrix) {
  console.log(matrix.length);
  const res = [];

  for (let row = 0; row < matrix.length; row++) {
    matrix[row] = matrix[row].reverse();
  }
  console.log(matrix);


  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < row; col++) {
      let tmp = matrix[row][col];
      console.log(tmp);
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = tmp;
      console.log(matrix);
    }
  }
  return matrix;
}

// Model solution...
// function rotateImage(arr) {
//   const len = arr.length;
//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     for (let j = i; j < len - i - 1; j++) {
//       let bucket = arr[i][j];
//       arr[i][j] = arr[j][len - i - 1];
//       arr[j][len - i - 1] = arr[len - i - 1][len - j - 1];
//       arr[len - i - 1][len - j - 1] = arr[len - j - 1][i];
//       arr[len - j - 1][i] = bucket;
//     }
//   }
//   return arr;
// }


console.log(rotateImage([
  [1, 2],
  [3, 4]]));

console.log(rotateImage([
  [1, 1, 5, 9, 9],
  [2, 2, 6, 0, 0],
  [3, 3, 7, 1, 1],
  [4, 4, 8, 2, 2],
  [5, 5, 9, 3, 3]
]));