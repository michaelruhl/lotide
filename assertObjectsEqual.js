const assertEqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length)  {
    console.log(`🚫🚫🚫Assertion Failed: ${object1} !== ${object2}`);
    return false; 
  } 
  for (let i in object1) {
    if (object1[i] !== object2[i])  {
      console.log(`🚫🚫🚫Assertion Failed: ${object1} !== ${object2}`);
      return false;
    }
  }
  console.log(`✅✅✅Assertion Passed: ${object1} === ${object2}`);
  return true;
};
module.exports = assertEqObjects