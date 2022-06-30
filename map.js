const assertArraysEqual = function(array1, array2)  {
  if (array1.length != array2.length)  {
    console.log(`🚫🚫🚫Assertion Failed: ${array1} !== ${array2}`);
    return false; 
  } 
  for (i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i])  {
      console.log(`🚫🚫🚫Assertion Failed: ${array1} !== ${array2}`);
      return false;
    }
  }
  console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  return true;
}
const eqArrays = function(array1, array2)  {
  if (array1.length != array2.length)  {
    return false; 
  } 
  for (i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i])  {
      return false;
    }
  }
  return true;
}


/////////////////////////////////////////
const words = ["ground", "control", "to", "major", "tom"];



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
  
}
const results1 = map(words, word => word[-1]);
const results2 = map(words, word => word[0]);
const results3 = map(words, word => word[10]);
console.log(results1);
console.log(results2);
console.log(results3);
/////////////////////////////////////////

