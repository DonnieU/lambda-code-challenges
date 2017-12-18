// Using a function rand7 that generates a random number from 1 to 7,
// how would you write a function that generates a number with equal
// probability from 1 to 5?  

// Clarification: Your rand5 function must use the rand7 function.
function rand7() {
  return 1 + Math.floor(Math.random() * 7);
}

function rand5() {
  let res = 0;
  while (!res) {
    let tmp = rand7();
    if (tmp > 0 && tmp <= 5) {
      res = tmp;
    }
  }
  return res;
}

// model solution...
// function rand5() {
//   let x;
//   while (!x) {
//     const num = rand7();
//     if (num <= 5) x = num;
//   }
//   return x;
// }

console.log(rand5());