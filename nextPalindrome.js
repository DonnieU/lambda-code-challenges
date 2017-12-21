// Given a number, find the next smallest palindrome number larger than the number.
// If the number is 125. the next palindrome is 131. 
function nextPalindrome(n) {
  while (true) {
    n++;
    let tmp = n.toString().split('').reverse().join('');
    // console.log(n, Number(tmp));
    if (Number(tmp) === n) return n;
  }
}

// Model solution...
// function nextPalindrome(n) {
//   let search = true;
//   let m = n + 1;
//   while (search) {
//     if ((m + '') === (m + '').split('').reverse().join('')) return m;
//     m++;
//   }
// }

console.log(nextPalindrome(125));