// Write a function that accepts a number and returns it in a string as it's expanded form.

// Example: Given the number 562 your function should return '500 + 60 + 2'.

function expandedNums(num) {
  const arr = num.toString().split('');
  const res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const tmp = [];
    tmp[0] = arr.shift();
    console.log(tmp[0]);
    if (tmp[0] === '0') {
      continue;
    } else {
      for (let j = 0; j < i; j++) {
        tmp.push(0);
      }
      res.push(tmp.join(''));
    }
  }

  return res.join(' + ');
}

// Model solution...
// function expandedNums (num) {
//   return num.toString().split('').reduce(function (currentVal, nextVal, index, array) {
//     if (array[index] === '0') {
//       return currentVal + nextVal;
//     }
//   return currentVal + '0'.repeat(array.length - index) + ' + ' + nextVal;
//   });
// }

console.log(expandedNums(70802));