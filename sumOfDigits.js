// Write a function called sumOfDigits that given a positive integer,
// returns the sum of its digits. Assume all numbers will be positive. 
// Input Sample: 

// 23
// 496
// Output Sample: 

// 5
// 19
// This works using .forEach...
function sumOfDigits(num) {
  let sum = 0;
  num.toString().split('').forEach((i) => {
    sum += Number(i);
  });
  return sum;
}

console.log(sumOfDigits(23));
console.log(sumOfDigits(496));