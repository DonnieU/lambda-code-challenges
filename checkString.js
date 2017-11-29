// Given three strings, str1, str2, str3. 
// str3 is said to be a shuffle of str1 and str2 if it can be formed
// by interleaving the characters of str1 and str2 in such a manner
// that it maintains left to right ordering from each string.
// Given str1 = 'abc' and str2 = 'def', str3 = 'dabecf' is a valid shuffle
// since it preserves the character ordering of the two strings. 

// So, given these three strings, write a function that detects
// whether str3 is a valid shuffle of str1 and str2.

// #1 Get testChar to test from str3
// #2 Find testChar in either str1 or str2
// #3 If !testChar, return false
// #4 Establish index reference of index 0 from str1 & str2 in relation to char index in str3
// #5 Use index reference as base to check against next letter
// #6 Set index reference to letter just checked or return false if result is < index reference
function checkString(str1, str2, str3) {
  const valid = true;
  let indexChar1 = str3.indexOf(str1[0]);
  let indexChar2 = str3.indexOf(str2[0]);

  if ((indexChar1 < 0) && (indexChar2 < 0)) return false;
 
  let baseCase = 0;
  for (let i = 0; i < str1.length; i++) {
    let testCase = str3.indexOf(str1[i]);
    let result = testCase - baseCase;
    if (result < 0) return false;
    baseCase = testCase;
  }

  baseCase = 0;
  for (let i = 0; i < str1.length; i++) {
    let testCase = str3.indexOf(str1[i]);
    let result = testCase - baseCase;
    if (result < 0) return false;
    baseCase = testCase;
  }
  return valid;
}

/* Instructor solution... */
function checkString(str1, str2, str3) {
  // if ever str1.length + str2.length !== str3.length, that means
  // there are too many characters, and therefore str3 cannot be comprised
  // of str1 and str2.
  if (str1.length + str2.length !== str3.length) return false;
  // after this first if statement, if str3.length === 0,
  // there is no more string to work with, and we can return true
  if (str3.length === 0) return true;
  // lazy programmer types once when possible
  const newStr3 = str3.substr(1);
  // we check if first letter in str1 === first letter in str3
  if (str1[0] === str3[0]) {
    // we check if first letter in str2 === first letter in str3
    if (str2[0] === str3[0]) {
      // if both first letters match first letter str3, we run both, and return
      // true if either are true
      return checkString(str1.substr(1), str2, newStr3) || checkString(str1, str2.substr(1), newStr3);
    }
    // first letter str2 does not match first letter str3, so we know we can
    // shorten first str and call checkString again
    return checkString(str1.substr(1), str2, newStr3);
  }
  if (str2[0] === str3[0]) {
    return checkString(str1, str2.substr(1), newStr3);
  }
  return false;
}

str1 = 'abc';
str2 = 'def';
str3 = 'dabecf';

console.log(checkString(str1, str2, str3));