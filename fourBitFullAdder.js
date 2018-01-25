// Construct a four bit full adder. You must use the provided NAND function to create
// any other logic gates you require to make a 4 bit full adder.
// x and y will come in array format where [true, true, true, true] === 1111 === 15.
// The expected return is an array with length 5.

// Each index in the array is just a wire that can be on or off.
// That will be represented by boolean true or false.
// I suggest writing a halfAdder first, then fullAdder, but you will only be tested on the fullAdder4.

// Check this resource for more information:
// http://www.electronics-tutorials.ws/combination/comb_7.html
function NAND(x, y) {
  return (!x || !y);
}

function NOT(n) {
  return NAND(n, n);
}

function AND(x, y) {
  return NAND(NAND(x, y), NAND(x, y));
}

function OR(x, y) {
  return NAND(NAND(x, x), NAND(y, y));
}

function XOR(x, y) {
  const res1 = NAND(y, NAND(x, x));
  const res2 = NAND(x, NAND(y, y));
  return NAND(res1, res2);
}

// Takes 2 elements, returns a 2 element array
function halfAdder(a, b) {
  let Cout = AND(a, b);
  let Sum = XOR(a, b);
  // return [AND(a, b), XOR(a, b)]; // [Cout, Sum]
  return [Cout, Sum];
}

function fullAdder(Cin, a, b) {
  let Sum, Cout1, Cout2, Cout
  [Cout1, Sum] = halfAdder(a, b);
  [Cout2, Sum] = halfAdder(Cin, Sum);
  Cout = OR(Cout1, Cout2);
  return [Cout, Sum];

}

// // Logic follows full-adder diagram found at: https://www.electronics-tutorials.ws/combination/comb_7.html
function fullAdder4(a, b) {
  let Cout, Sum;
  const res = [];
  for (let i = a.length - 1; i >= 0; i--) {
    [Cout, Sum] = fullAdder(Cout, a[i], b[i]);
    res.push(Sum);
  }
  res.push(Cout);
  return res.reverse();
  // return [1, 1, 1, 1, 1];
}

const a = [1, 1, 0, 1];
const b = [1, 1, 1, 1];
const x = [1, 0, 0, 0];
const y = [1, 0, 0, 1];
console.log(fullAdder4(a, b)); // should be: [tttff]
console.log(fullAdder4(x, y)); // should be: [tffft]
// console.log(halfAdder(1, 1));
// console.log(fullAdder(0, 1, 1));