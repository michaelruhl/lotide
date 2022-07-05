const assert = require('chai').assert;
const tail   = require('../tail');
describe("#tail", () => {
  it("empty array", () => {
    assert.deepEqual(tail([]),([]));
  });
  it("array is now 2, 3", () => {
    assert.deepEqual(tail([1, 2, 3]),([2, 3])); 
  });
});






// const words1 = [];
// const words = ["Yo Yo", "Lighthouse", "Labs"];
//console.log(words.length)
// tail(words1); // no need to capture the return value since we are not checking it
// tail(words.length, 3); // original array should still have 3 elements!
// console.log(words1);
// console.log(words)


