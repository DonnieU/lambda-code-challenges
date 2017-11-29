// Write a function called checkMatchingLeaves that takes in an object,
// and return true if every property on the object is the same,
// otherwise, return false.
function checkMatchingLeaves(obj) {
  const arr = [];

  function checkVals(obj) {
    Object.values(obj).forEach((elem) => {
      //console.log(elem);
      if (typeof elem === 'object') {
        console.log(typeof elem);
        checkVals(elem);
      }
      if (typeof elem !== 'object') arr.push(elem);
      console.log(arr);
    });
  }
  checkVals(obj);
  console.log(arr);
  return arr.every(elem => elem === arr[0]);
}



const tree3 = {
  x: 1,
  y: 1,
  z: 1,
};

const tree1 = {
  x: 1,
  y: 1,
  z: 1,
  xa: {
    xx: 1,
    xy: 1,
    xz: 1,
    zz: {
      a: {
        b: {
          z: 1,
          y: 1,
        },
      },
    },
  },
};
const tree2 = {
  x: 1,
  y: 1,
  z: 1,
  xa: {
    xx: 1,
    xy: 1,
    xz: 1,
    zz: {
      a: {
        b: {
          z: 1,
          d: {
            e: 1,
            g: {
              h: 1,
            },
          },
        },
      },
    },
  },
  r: 1,
}

// Object.values(tree1).forEach((value) => {
//   console.log(value);
// })
//console.log(Object.is(tree1., tree2));
// Object.keys(tree1).forEach((key) => {
//   console.log(key);
// });

// const values = Object.values(tree1);
// console.log(checkMatchingLeaves(tree2));
console.log(checkMatchingLeaves(tree2));

// instructor solution...
// function checkMatchingLeaves(obj) {
//   // a way to track a leaf value
//   // a flag to determine whether everything is the same
//   // an innerRecusive function to check everything
//   let val;
//   let allMatch = true;
//   function checkLeaves(obj) {
//     Object.keys(obj).forEach((key) => {
//       if (val === undefined && typeof obj[key] !== 'object') {
//         val = obj[key];
//         return;
//       }
//       if (typeof obj[key] === 'object') return checkLeaves(obj[key]);
//       if (obj[key] !== val) {
//         allMatch = false;
//         return;
//       }
//       return;
//     });
//   }
//   checkLeaves(obj);
//   return allMatch;
// }

// const obj1 = {
//   a: 1,
//   b: 1,
//   c: 2,
// }; // false

// const obj2 = {
//   a: 1,
//   b: 1,
//   c: 1,
// }; // true

// const obj3 = {
//   a: {
//     b: 1,
//     c: 1,
//     d: 1,
//   },
//   b: 1,
//   c: 1,
//   d: 2,
// }; // false

// const obj4 = {
//   a: 1,
//   b: {
//     b: 1,
//     c: 1,
//     d: 1,
//   },
//   c: 1,
//   d: 1,
// }; // true


// console.log(checkMatchingLeaves(obj1));
// console.log(checkMatchingLeaves(obj2));
// console.log(checkMatchingLeaves(obj3));
// console.log(checkMatchingLeaves(obj4));