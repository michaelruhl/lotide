const assert = require('chai').assert;
const middle   = require('../middle');




describe("#head", () => {
  it("empty array", () => {
    assert.deepEqual(middle([1]),[]);
  });
  it("aray still empty", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });
  it("array is 2", () => {
    assert.deepEqual(middle([1, 2, 3]), 2); 
  });
  it("aray is 3", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), 3); 
  });
  it("aray is 2, 3", () => {
    assert.deepEqual(middle([1, 2, 3, 4]),[2, 3]); 
  });
  it("aray is 3, 4", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });
});

// middle([1]) // => []
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]