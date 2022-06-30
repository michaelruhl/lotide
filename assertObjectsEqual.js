const assertEqObjects = function(actual, expected) {
  if (Object.keys(object1).length !== Object.keys(object2).length)  {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
    return false; 
  } 
  for (let i in object1) {
    if (object1[i] !== object2[i])  {
      console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
      return false;
    }
  }
  console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  return true;
};
