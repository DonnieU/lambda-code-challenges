// A twin prime is a prime number that differs from another prime number by two.
// Write a function called isTwinPrime which takes an integer
// and returns true if it is a twin prime, or false if it is not.

// Example:

// 5 is a prime, and 5 + 2 = 7, which is also a prime, so returns true.
// 9 is not a prime, and so does not need checking, so it returns false.
// 7 is a prime, but 7 + 2 = 9, which is not a prime. However, 7 - 2 = 5, which is a prime, so it returns true.
// 23 is a prime, but 23 + 2 = 25, which is not a prime, and 23 - 2 = 21, which is not a prime, so it returns false.

// fails on random tests -- 20171016
function isTwinPrime(n) {
  if (n === 1 || n === 2 || n === 3) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    console.log(n%i);
    if (n % i === 0) return false;
  }
  // checks lower bound for prime
  const lowerBound = n - 2;
  let lowerIsPrime = true;
  for (let i = 2; i < Math.sqrt(lowerBound); i++) {
    if (lowerBound % i === 0)  lowerIsPrime = false;
  }
  // we only need to check from lower bound to upper bound now...
  const upperBound = n + 2;
  let upperIsPrime = true;
  for (let i = lowerBound; i < Math.sqrt(upperBound); i++) {
    if (n === i) continue;
    if (upperBound % i === 0) upperIsPrime = false;
  }
  console.log(lowerIsPrime, upperIsPrime);
  if (!(lowerIsPrime || upperIsPrime)) return false;
  console.log(lowerIsPrime, upperIsPrime);
  return true;
}

// instructor solution...
// look up Sieve of Eratosthenes: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
// function isTwinPrime(n) {

//   function isPrime(n) {
//     if (n < 2) return false;
//     for (let i = 2; i < Math.sqrt(n); i++) {
//       if (n % i === 0) return false;
//     }
//     return true;
//   }
//   return isPrime(n) && isPrime(n - 2) || isPrime(n + 2);
// }

console.log(isTwinPrime(21));