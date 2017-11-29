// You are given an array of strings called arr and an integer k.
// Your task is to return the longest string consisting of k consecutive strings from the array.
// Example: 

// longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta" 
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "". 
function longestConsecutive(arr, k) {
  if (k <= 0) return "";
  let longestIdx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > arr[longestIdx].length) longestIdx = i;
  }
  console.log(longestIdx);
  lengthLeft = 0;
  lengthRight = 0;
  const arrLeft = [];
  const arrRight = [];
  let res = [];
  if (longestIdx === 0) {
    arrLeft.push(arr[longestIdx]);
    lengthLeft = arr[longestIdx].length;
  } else {
    let idx = longestIdx - k;
    if (idx < 0) idx = 0;
    console.log(idx);
    for (let i = longestIdx; i > idx; i--) {
      lengthLeft += arr[i].length;
      arrLeft.push(arr[i]);
    }
  }

  if (longestIdx === (arr.length - 1)) {
    arrRight.push(arr[longestIdx]);
    lengthRight = arr[longestIdx].length;
  } else {
    let idx = longestIdx + k;
    if (idx > (arr.length - 1)) idx = arr.length - 1;

    for (let i = longestIdx; i < idx; i++) {
      lengthRight += arr[i].length;
      arrRight.push(arr[i]);
    }
  }
  if (lengthLeft > lengthRight) res = arrLeft;
  else if (lengthRight > lengthLeft) res = arrRight;
  else res = arrLeft;

  if ((res.length === 0) || (k > res.length)) return "";
  else return res.join('');
}

console.log(longestConsecutive(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));
console.log(longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
console.log(longestConsecutive(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2));