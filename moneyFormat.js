// Given a positive float number, write a function
// called moneyFormat that formats the float into a string.

// Example:
// moneyFormat(2310000.159897); should return '2 310 000.16'
function moneyFormat(float) {
  if (typeof float === 'string') return float;
  float = float.toFixed(2).split('');
  const len = float.length;
  console.log(len);
  let count = 0;
  for (let i = len - 4; i >= 0; i--) {
    console.log(float[i]);
    count++;
    if (count % 3 === 0) float.splice(i, 0, ' ');
  }
  console.log(float.length);
  return float.join('');
}

// console.log(moneyFormat(2310000.159897));
console.log(moneyFormat(474528368.17));