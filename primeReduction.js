// Consider the prime number 23. 

// If we sum the square of its digits we get: 2^2 + 3^2 = 13,
// then for 13: 1^2 + 3^2 = 10, and finally for 10: 1^2 + 0^2 = 1.

// Similarly, if we start with prime number 7,
// the sequence is: 7-> 49-> 97-> 130-> 10-> 1.

// Given a (inclusive) range, how many primes within that range have this property? 
function isPrime(n) {
  if (n <= 3) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function primeReduction(a, b) {
  let totalCount = 0;
  for (let i = a; i < b; i++) {
    let prime = isPrime(i);
    if (prime) {
      let count = 0;
      let res = 2;
      let curr = i.toString().split('');
      // console.log(curr);
      while (res !== 1 && count < 50) {
        res = curr.reduce((acc, currVal) => {
          return acc + currVal * currVal;
        }, 0);
        if (res === 1) {
          totalCount++;
          break;
        }
        curr = res.toString().split('');
        count++;
        // console.log(res);
      }
      // if (res === 1) totalCount++;
    }
  }
  return totalCount;
}

console.log(primeReduction(0, 1009));