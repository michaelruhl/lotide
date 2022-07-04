const tail = require('../tail')

const words1 = [];
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words1); // no need to capture the return value since we are not checking it
tail(words.length, 3); // original array should still have 3 elements!
console.log(words1);
console.log(words)