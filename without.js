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


const without = function(source, itemRemove)  {
  let withItem = [];
  for (let i = 0; i < source.length; i++) {
  if (source[i]!== itemRemove[i]) {
    withItem.push(source[i]);
  }
}
console.log(withItem);
return withItem;
}
module.exports = without;
// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]