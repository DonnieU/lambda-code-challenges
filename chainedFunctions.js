// CURRIED FUNCTIONS and CURRYING FUNCTIONS
// Your function should pass the given argument through the array (chain)
// of functions and return the result. Example:  
// function one(x){ return x+x; }
// function two(x){ return x*2; }
// chainedFunctions([one,two])(3);
// should return 12. 
function one(x) { return x + x; }
function two(x) { return x * 2; }

function a(x) { return x + "!" }
function b(x) { return x + "?" }
function c(x) { return "Hello " + x }
function d(x) { return x + " ¯\\_(ツ)_/¯" }

function chainedFunctions(arr) {
  console.log(arr[0](3));

  return (arg) => {
    arr.forEach((func) => {
      arg = func(arg);
    });
    return arg;
  }
}




console.log(chainedFunctions([one, two])(3)); // output: 12
console.log(chainedFunctions([c, a, a, d, b])('Ryan')); //output: Hello Ryan! ¯\_(ツ)_/¯