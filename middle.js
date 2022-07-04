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

const middle = (array) => {
  if (array.length <= 2)  {
    array = [];
    console.log(array);
    return array;
  }
  if (array.length % 2 !== 0) {
    let chop = ((array.length) / 2) + .5;
    console.log(array[chop - 1]);  
    return array[chop - 1]; 
  } 
  else {
    let chop = (array.length / 2);
    console.log(array[chop - 1], array[chop]);  
    return array[chop - 1], array[chop]; 
  }
}
module.exports = middle;
// middle([1]) // => []
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
