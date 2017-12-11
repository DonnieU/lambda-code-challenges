// Implement a method to perform basic string compression using the counts of repeated characters.

// For example, the string  'aabcccccaaa' would become a2b1c5a3.

// If the "compressed" string would not become smaller than the original string, your method should return the original string.

// You can assume the string has only uppercase and lowercase letters (a - z). 
function stringCompression(str) {
  const arr = str.split('');
  const tmp = [];
  let count = 1;
  let compressed = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    }
    else {
      tmp.push(arr[i] + count);
      if (count > 1) compressed = true;
      console.log(tmp);
      count = 1;
    }
  }

  let newStr = '';
  if (compressed) {
    newStr = tmp.join('');
    console.log(newStr);
  }
  if (newStr && (newStr.length < str.length)) return newStr;
  else return str;
}

// Model solution...
// function stringCompression(string) {
//   let currentChar = null;
//   let compressedStr = '';
//   let charCount = 1;
//   for (let i = 0; i <= string.length; i++) {
//     if (string[i] === currentChar) charCount++;
//     if (currentChar === null) currentChar = string[i];
//     if (string[i] !== currentChar || string[i] === undefined) {
//       compressedStr += currentChar;
//       compressedStr += charCount;
//       charCount = 1;
//       currentChar = string[i];
//     }
//   }
//   return compressedStr.length < string.length? compressedStr : string;
// }

console.log(stringCompression('abcd'));
console.log(stringCompression('aabcccccaaa'));
console.log(stringCompression('aaaaqqqqqqqqqwertyuiop'));