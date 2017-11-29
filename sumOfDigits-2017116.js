/*
Write a function called sumOfDigits that given a positive integer,
returns the sum of its digits.Assume all numbers will be positive. 

Input Sample: 
23
496

Output Sample: 
5
19

sumOfDigits(23) => 5 because 2 + 3 = 5.
*/
function sumOfDigits(n) {
  const tmp = n.toString().split('');
  return tmp.reduce((sum, val) => {
    return sum + Number(val);
    console.log(elem, i);
  }, 0);
}

console.log(sumOfDigits(23));
console.log(sumOfDigits(496));
console.log(sumOfDigits(65535));