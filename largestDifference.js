/*
Define a function largestDifference that takes an array,
and returns the highest gain from left to right.

For example, [10, 7, 5, 8, 11, 9] the largestDifference is 6, from 5 to 11.

Given an array of numbers that don't return a positive number,
such as [100, 90, 80, 50, 10] return 0. 
*/
function largestDifference(arr) {
  let min = arr[0];
  let maxDiff = arr[1] - min;

  for (let i = 0; i < arr.length; i++) {
    let newVal = arr[i] - min;
    min = Math.min(arr[i], min);
    maxDiff = Math.max(newVal, maxDiff);
  }
  return maxDiff;
}

function getMaxProfit(stockPrices) {
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - minPrice;

  for (let i = 0; i < stockPrices.length; i++) {
    let currentPrice = stockPrices[i];
    let potentialProfit = currentPrice - minPrice;
    minPrice = Math.min(currentPrice, minPrice);
    maxProfit = Math.max(potentialProfit, maxProfit);
  }
  return maxProfit;
}

// for (let i = 0; i < 50; i++) {
//   const arr = []
//   for (let j = 0; j < 15; j++) {
//     arr.push(Math.floor(Math.random() * 2000));
//   }
//   if (largestDifference(arr) !== getMaxProfit(arr)) {
//     console.log(arr);
//     console.log(largestDifference(arr), getMaxProfit(arr));
//   }
//   // expect(largestDifference(arr)).toEqual(getMaxProfit(arr));
//   // console.log(largestDifference(arr), getMaxProfit(arr));
// }
console.log(largestDifference([695,
  1631,
  638,
  684,
  1658,
  1226,
  1943,
  1578,
  1410,
  282,
  599,
  387,
  1660,
  474,
  1449]
));
console.log(getMaxProfit([695,
  1631,
  638,
  684,
  1658,
  1226,
  1943,
  1578,
  1410,
  282,
  599,
  387,
  1660,
  474,
  1449]
));

// console.log(largestDifference([10, 7, 5, 8, 11, 9]));
// console.log(largestDifference([100, 90, 80, 50, 10]));
// console.log(largestDifference([180, 323, 24, 210, 1200, 2300, 324, 1230, 3245013, 312094, 11, 320, 203043, 230, 8, 230, 33,]));