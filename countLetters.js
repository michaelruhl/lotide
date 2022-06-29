const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

/////////////////////////////
let string = "lighthouse in the house!"
const countLetters = (str) => {
  const countObj = {};
  const strLower = str.toLowerCase();
  for (let val of strLower) {
    if (!countObj[val]) {
      countObj[val] = 1;
    } else {
        countObj[val]++;
    }
  }
  return countObj;
}
const result = countLetters(string);
console.log(result)