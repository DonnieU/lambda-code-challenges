// Write a function called sortString that returns a passed string with letters in alphabetical order.  Expected Input:  

// 'dcba'
// 'zycxbwa'

// Expected Output:  

// 'abcd'
// 'abcwxyz'
function sortString(str) {
  return str.split('').sort().join('');
}

console.log(sortString('zycxbwa'));