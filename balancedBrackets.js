/* Write a function balancedBrackets that accepts a string and returns true
if the parentheses are balanced and false otherwise.
Example:

balancedBrackets('(');  // false
  balancedBrackets('()'); // true
  balancedBrackets(')(');  // false
  balancedBrackets('(())');  // true

Step 2:  make the solution work for all types of brackets  Example:

balancedBrackets('[](){}'); // true
 balancedBrackets('[({})]');   // true
 balancedBrackets('[(]{)}'); // false

Step 3: ignore other characters

balancedBrackets(' const obj  = { x: someFunction() }'); // true */
function balancedBrackets(str) {
  const stack = [];
  const tmp = str.split('');
  if (tmp.length <= 1) return false;
  console.log(tmp);
  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i] === '(' || tmp[i] === '[' || tmp[i] === '{') {
      stack.push(tmp[i]);
    }
    if (tmp[i] === ')') {
      const res = stack.pop();
      if (res !== '(') {
        return false;
      }
    }
    if (tmp[i] === ']') {
      const res = stack.pop();
      if (res !== '[') {
        return false;
      }
    }
    if (tmp[i] === '}') {
      const res = stack.pop();
      if (res !== '{') {
        return false;
      }
    }
  }
  return true;
}

// model solution...
// function balancedBrackets(str) {
//   let line = str.split('');
//   const stack = [];
//   let ans = true;
//   const open = {'(': ')', '{': '}', '[': ']'};
//   const close = {')': true, '}': true, ']': true};
//   line.forEach((item) => {
//     if (open[item]) {
//       stack.push(item);
//     } else if (close[item]) {
//       if (open[stack.pop()] !== item) ans = false;
//     }
//   });
//   return ans && stack.length === 0;
// }

console.log(balancedBrackets('('));  // false
console.log(balancedBrackets('()')); // true
console.log(balancedBrackets(')('));  // false
console.log(balancedBrackets('(())'));  // true

console.log(balancedBrackets('[](){}')); // true
console.log(balancedBrackets('[({})]'));   // true
console.log(balancedBrackets('[(]{)}')); // false