// Initial working solution but O(n^2). meh
// function vowelCount(str) {
//   testArr = ['a','e','i','o','u','y'];
//   str = str.toLowerCase();
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < testArr.length; j++) {
//       if (testArr[j] === str[i]) count++;
//     }
//   }
//   return count;
// }

// 2nd solution w/ runtime of O(n). Much better!
// function vowelCount(str) {
//   str = str.toLowerCase();
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     switch (str[i]) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//       case 'y':
//         count++;
//         break;
//     }
//   }
//   return count;
// }

// Instructor's solution using regex:
// .match is much faster than .replace according to jsperf.com
function vowelCount(str) {
  //return str.replace(/[^a|e|i|o|u]/gi, '').length;
  // the || [] handles null results and instead returns 0
  return ((str.match(/[aeiou]/gi)) || []).length;
}

console.log(vowelCount('Fick y4hz!'));