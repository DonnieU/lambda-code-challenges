// Implement three functions called multiply, divide, and modulo.
// These functions should multiply, divide, or return the remainder of two arguments.
// Now for the tricky part: you can only use + and - to implement these functions.
function multiply(x, y) {
  let res = 0;
  let pos = 1;
  if (x === 0 || y === 0) return 0;
  if (x < 0) {
    x = -x;
    pos = -pos;
  }
  if (y < 0) {
    y = -y;
    pos = -pos;
  }

  for (let i = 0; i < y; i++) {
    res += x;
  }

  if (pos > 0) return res;
  return -res;
}

function divide(x, y) {
  let res = 0;
  let pos = 1;
  if (x === 0 || y === 0) return 0;
  if (x < 0) {
    x = -x;
    pos = -pos;
  }
  if (y < 0) {
    y = -y;
    pos = -pos;
  }

  while (x > 0) {
    x = x - y;
    res++;
  }

  if (pos > 0) return res;
  return -res;
}

function modulo(x, y) {
  let res = x;
  let pos = 1;
  if (x === 0 || y === 0) return 0;
  if (x < 0) {
    x = -x;
    pos = -pos;
  }
  if (y < 0) {
    y = -y;
    pos = -pos;
  }

  while (res >= y) {
    res = res - y;
  }

  if (pos > 0) return res;
  return -res;

}

console.log(multiply(4, -3));
console.log(divide(-27, 9));
console.log(modulo(26, 3));