// #1
// 'HelloWorld' -> 'hELLOwORLD'
// 'asdf' -> 'ASDF'
// '' -> ''
// 'ASDF' -> 'asdf'

//  #2
// string -> array of characters
// iterate over array of chars
  // check case for char and flip it
// join array of chars into string
// return string

/* My solution... */
/*
function reverseCase(str) {
  let arr = [];
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      let res = str.charCodeAt(i);
      res += 32;
      let char = String.fromCharCode(res);
      arr.push(char);
    } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
        let res = str.charCodeAt(i);
        res -= 32;
        let char = String.fromCharCode(res);
        arr.push(char);
      } else {
        arr.push(str.charAt(i));
      }
      
    }
  const newStr = arr.join('');
  return newStr;
}
*/

/* Instructor's solution 1... */
/* Notice the use of Method chaining */
/*
function reverseCase(str) {
  return str.split('').map((newStr) => {
      if (newStr.toLowerCase() === newStr) {
        return newStr.toUpperCase();
      } else {
        return newStr.toLowerCase();
      }
  }).join('');
}
*/

/* Instructor's 2nd solution... */
/*
function reverseCase(str) {
  const chars = str.split('');
  const flippedChars = chars.map((char) => {
    if (char.toLowerCase() === char) {
      return char.toUpperCase();
    }
    return char.toLowerCase();
  });
  return flippedChars.join('');
}
*/

/* Instructor's 3rd solution using Ternary operators */
function reverseCase(str) {
  return str.split('').map((char) => {
    return char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}

let str = 'Hello World!';
console.log(reverseCase(str));