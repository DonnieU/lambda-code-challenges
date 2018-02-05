// Instructions from your teacher:
// Write a function that, given two objects, returns whether or not the two 
// are deeply equivalent--meaning the contents of the two objects are equal for all keys and sub-keys. 

// Examples:    

// const johnA = {
//   name: 'John',
//   address: {
//     line1: '321 Anytown',
//     line2: 'Stoke-on-Trent'
//   }
// };

// const johnB = {
//   name: 'John',
//   address: {
//     line1: '321 Anytown',
//     line2: 'Stoke-on-Trent'
//   }
// };

// const johnC = {
//   name: 'John Charles',
//   address: {
//     line1: '321 Anytown',
//     line2: 'Stoke-on-Trent'
//   }
// };

// deepEquals(johnA, johnB); // true  
// deepEquals(johnA, johnC); // false;
function deepEquals(obj1, obj2) {
  // This works as long as the key order is the same between the 2 objects.
  // However, this isn't a *true* deepEquals.
  // See --> http://www.mattzeunert.com/2016/01/28/javascript-deep-equal.html
  // return JSON.stringify(obj1) === JSON.stringify(obj2);

  const str1 = JSON.stringify(obj1));
  console.log(str1.sort);
  // function checkVals(obj) {
  //   Object.values(obj).forEach((elem) => {
  //     // console.log(elem);
  //     if (typeof elem === 'object') {
  //       checkVals(elem);
  //     }
  //     else {
  //       console.log(elem);
  //       if (obj[elem] !== obj2[elem]) return false;
  //     }
  //   });
  //   return true;
  // }
  // for (elem in obj1) {
  //   console.log(obj1[elem], obj2[elem]);
  //   if (obj1[elem] !== obj2[elem]) return false;
  // }
  // return true;
  checkVals(obj1);
}

const johnA = {
  name: 'John',
  address: {
    line1: '321 Anytown',
    line2: 'Stoke-on-Trent'
  }
};

const johnB = {
  name: 'John',
  address: {
    line1: '321 Anytown',
    line2: 'Stoke-on-Trent'
  }
};

const johnC = {
  name: 'John Charles',
  address: {
    line1: '321 Anytown',
    line2: 'Stoke-on-Trent'
  }
};

console.log(deepEquals(johnA, johnB)); // true  
console.log(deepEquals(johnA, johnC)); // false;