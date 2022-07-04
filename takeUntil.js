const takeUntil = function (array, callback) {
  let array1 = [];
  for (val of array) {
    if (callback(val)) {
      return array1;
    }
    array1.push(val)
  }
  // console.log(array)
  // console.log(callback)
}
module.exports = takeUntil;
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);


// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);


// expected output
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]




////////////////////////////////////////////////////////

// const assertArraysEqual = function(array1, array2)  {
//   if (array1.length != array2.length)  {
//     console.log(`🚫🚫🚫Assertion Failed: ${array1} !== ${array2}`);
//     return false; 
//   } 
//   for (i = 0; i < array1.length; i++) {
//     if (array1[i] != array2[i])  {
//       console.log(`🚫🚫🚫Assertion Failed: ${array1} !== ${array2}`);
//       return false;
//     }
//   }
//   console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
//   return true;
// }
// const eqArrays = function(array1, array2)  {
//   if (array1.length != array2.length)  {
//     return false; 
//   } 
//   for (i = 0; i < array1.length; i++) {
//     if (array1[i] != array2[i])  {
//       return false;
//     }
//   }
//   return true;
// }

