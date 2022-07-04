const map = require('../map')


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[-1]);
const results2 = map(words, word => word[0]);
const results3 = map(words, word => word[10]);
console.log(results1);
console.log(results2);
console.log(results3);
