// const assertEqual = function(actual, expected) {
 
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const tail = function(array) {
  let emptyArr = [];
  for (let i = 0; i < array.length; i++)  {
    if (i === 0)  {
      i++; 
    }
    emptyArr.push(array[i])
  }
 
 // console.log(emptyArr)  
  return emptyArr;
  
};
//tail([])
module.exports = tail;
//console.log(array.tail)
//array1 = ["Yo Yo", "Lighthouse", "Labs"];

 
// const words = [];
// tail(words); // no need to capture the return value since we are not checking it
// tail(words.length, 3); // original array should still have 3 elements!
