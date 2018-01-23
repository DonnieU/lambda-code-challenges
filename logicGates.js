// For this coding challenge you will be recreating low level logic gates.
// You will first create the NAND function and then you will create
// NOT, OR, AND, and XOR all using the NAND function that you created.
// Implement NAND however you would like and then use NAND to implement the
// other logic gates.

// See the link below for the truth tables for these logic gates.
//   https://en.wikipedia.org/wiki/NAND_logic#NAND
//   All functions should return a 1 for true and a 0 for false.

function NAND(x, y) {
  // You can use whatever JS operators that you would like: &&, ||, !
  const res = !(x && y);
  if (res) return 1;
  return 0;
}

function NOT(n) {
  // Do not use !
  return NAND(n, n);
}

function AND(x, y) {
  // Do not use &&, ||, or !
  // You can use any of the functions that you have already written
  // let res = NAND(x, y);
  // if (res) return 0;
  // return 1;
  return NAND(NAND(x, y), NAND(x, y));
}

function OR(x, y) {
  // Do not use ||, &&, or !
  // You can use any of the functions that you have already written
  // if (x) return 1;
  // if (y) return 1;
  // return 0;
  return NAND(NAND(x, x), NAND(y, y));
}

function XOR(x, y) {
  // Do not use ||, &&, or !
  // You can use any of the functions that you have already written
  //return NAND((NAND(y, NAND(x, x)), (NAND(x, NAND(y, y)))));
  // console.log(NAND(x, x));
  // console.log(NAND(1, 0));
  const res1 = NAND(y, NAND(x, x));
  const res2 = NAND(x, NAND(y, y));
  return NAND(res1, res2);
  // return NAND(NAND(y, NAND(x, x))), (NAND(x, NAND(y, y)));
}

console.log(NAND(0, 1));
console.log(AND(0, 1));
console.log(NOT(1, 1));
console.log(OR(1, 0));
console.log(XOR(1, 1));
console.log(0b1111);