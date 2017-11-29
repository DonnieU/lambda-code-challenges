function reverseNumber(num) {
  return Number(num.toString().split('').reverse().join(''));
}
const test = 12345
console.log(reverseNumber(test));
console.log(typeof (reverseNumber(test)));