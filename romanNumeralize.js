// Define a function that takes in a positive integer,
// and returns the Roman Numeral representation of that number.  

// Symbol    Value
//  I          1
//  V          5
//  X          10
//  L          50
//  C          100
//  D          500
//  M          1,000 

// Example: romanNumeralize(1990) should return 'MCMXC'.  

function romanNumeralize(number) {
  const res = [];
  while (number) {
    console.log(number, res.join(''));
    if (number >= 1000) {
      res.push('M');
      number -= 1000;
    } else if ((number >= 900) && (number < 1000)) {
      res.push('CM');
      number -= 900;
    } else if ((number >= 500) && (number < 900)) {
      res.push('D');
      number -= 500;
    } else if ((number >= 400) && (number < 500)) {
      res.push('CD');
      number -= 400;
    } else if ((number >= 100) && (number < 400)) {
      res.push('C');
      number -= 100;
    } else if ((number >= 90) && (number < 100)) {
      res.push('XC');
      number -= 90;
    } else if ((number >= 50) && (number < 90)) {
      res.push('L');
      number -= 50;
    } else if ((number >= 40) && (number < 50)) {
      res.push('XL');
      number -= 40;
    } else if ((number >= 10) && (number < 40)) {
      res.push('X');
      number -= 10;
    } else if (number === 9) {
      res.push('IX');
      number -= 9;
    } else if ((number >= 5) && (number < 9)) {
      res.push('V');
      number -= 5;
    } else if ((number >= 1) && (number < 5)) {
      res.push('I');
      number -= 1;
    }
  }
  return res.join('');
}

console.log(romanNumeralize(1000));

// for (let i = 10; i < 2009; i++) {
//   console.log(i, romanNumeralize(1000));
// } 