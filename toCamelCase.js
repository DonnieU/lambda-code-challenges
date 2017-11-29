// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized.   

// toCamelCase("the-stealth-warrior")  
// // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") 
//  // returns "TheStealthWarrior"
function toCamelCase(str) {
  const arr = [];
  if (str.includes('_')) {
    arr.push(str.split('_'));
  } else {
    arr.push(str.split('-'));
  }
  // arr[0][0] = arr[0][0].toLowerCase();
  for (let i = 1; i < arr[0].length; i++) {
    if (arr[0][i].charCodeAt() > 0x5A) {
      arr[0][i] = arr[0][i].replace(/[a-z]/, (x) => { return x[0].toUpperCase(); });
    }
  }
  return arr[0].join('');
}


// Model soln....
// function toCamelCase(str){
//   const arr = str.split(/[-_]/);
//   for (let i = 1; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
//   }
//   return arr.join('');
// }

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
