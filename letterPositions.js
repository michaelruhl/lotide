/*const assertArraysEqual = function(array1, array2)  {
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
}*/

let string = "lighthouse in the house!"
const letterPositions = (str) => {
  const countObj = {};
  const strLower = str.toLowerCase();
  for (i = 0; i < strLower.length; i++) {
    const letter = strLower[i]; 
    if (letter !== " ")  {
      if (!countObj[letter]) {
        countObj[letter] = `${i}`;
      } else {
        countObj[letter] += `, ${i}`
      }

    }
  }
  return countObj;
}
const result = letterPositions(string);
console.log(result)
//assertArraysEqual(letterPositions("hello").e, [1]);