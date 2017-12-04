// Given a sum and a product, find two integers x and y, where x + y === sum,
// and x * y === product. You will return this in an array.

// For example, calling sumAndProduct(6, 9) should return [3, 3]
// because 3 + 3 === 6, and 3 * 3 === 9.

// Please make sure to return your array such that x <= y in the format [x, y].
function sumAndProduct(sum, product) {
  let x = 0, y = 0;
  const vals = [];
  for (let i = 0; i < sum; i++) {
    vals.push([i, (sum - i)]);
  }
  console.log(vals);
  for (let i = 0; i < vals.length; i++) {
    if (vals[i][0] * vals[i][1] === product) {
      x = vals[i][0];
      y = vals[i][1];
      if (x > y) {
        return [y, x];
      }
      return [x, y];
    }
  }
  return null;
}

// model solution...
// function sumAndProduct(sum, product) {
//   for (let i = 0; i <= sum / 2; i++) {
//     if (i * (sum - i) === product) return [i, (sum - i)];
//   }
//   return null;
// }

console.log(sumAndProduct(6, 9));