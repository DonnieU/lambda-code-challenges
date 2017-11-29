/* This attempt uses nested for loops which results in O(n^2) runtime :( */
/*
    function evenOccurrence(arr) {
    debugger;
    for (let i = 0; i < arr.length; i++) {
      let count = [];
      for (let j = 0; j < arr.length; j++) {
        if (arr[j]===arr[i]) { 
          count.push(arr[j]);
        }  
      }
      if (count.length && (count.length % 2 === 0)) {  return count[0]; }
     
    }

    return null;
  }
*/
/* This method iterates over the array once via Object notation.
    Then iterates over array again which results in O(2n) runtime. :)  */

  function evenOccurrence(arr) {
    const countObj = {};
    arr.forEach((num) => {
      if (!countObj[num]) {
        countObj[num] = 1;
        return;
      }
      countObj[num]++;
    });
    for (let i = 0; i < arr.length; i++) {
      if (countObj[arr[i]] % 2 === 0) { return arr[i]; }
    }
    return null;
  }

  const arr = [1, 7, 2, 4, 6, 6, 4, 9, 4, 5];
  //console.log(arr);
  const onlyEven = evenOccurrence(arr);
  console.log(onlyEven);  