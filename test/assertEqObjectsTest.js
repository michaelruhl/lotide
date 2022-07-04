const assertEqObjects = require('../assertObjectsEqual');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqObjects(ab, abc)); // => false
//console.log(Object.keys(object1).length)