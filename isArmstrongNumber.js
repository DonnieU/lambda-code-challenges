// An Armstrong number is an n-digit number that is equal to the sum of the n'th powers of its digits.
// Determine if the input numbers are Armstrong numbers.  Return either true or false .

// For example with the number 153 there are 3 digits so you would add together the cubed values
// of all the digits like this: 1^3 + 5^3 + 3^3 === 153.

// Another example is the number 6, where 6 ^ 1 === 6.

// isArmstrongNumber(15) returns false because 1 ^ 2 + 5 ^ 2 = 26 which does not equal 15.

// Input Sample:
// 6
// 153
// 351

// Output Sample:
// true
// true
// false
function isArmstrongNumber(n) {
  const arr = n.toString().split('');
  const len = arr.length;
  let sum = 0;
  arr.forEach(i => sum += Math.pow(Number(i), len));
  return n === sum;
}

console.log(isArmstrongNumber(6));
console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(351));
