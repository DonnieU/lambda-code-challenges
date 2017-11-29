/*
Given a positive (or 0) number, return a string of 1's and 0's
representing it's binary value: 

toBinaryString(6) should return "110" (no leading 0).   

Use of the native method number.toString(2);  is disallowed.
*/
function toBinaryString(number) {
  const result = [];
  let rem = 0;
  while (number > 0) {
    rem = number % 2;
    // number = number / 2 | 0; // this works but i like the bitwise operator better...
    number = number >> 1;
    result.push(rem);
  }
  return result.reverse().join('') || "0";
}


// Model solution...
// function toBinaryString(number) {
//   let r = "";
//   while(number > 0) {
//     r = number % 2 + r;
//     number >>= 1;
//   }
//   return r || "0";
// }

console.log(toBinaryString(7));