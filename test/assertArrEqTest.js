const assertArraysEqual = require ('../assertArraysEqual');

assertArraysEqual(([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(([1, 2, 3], [1, 2, 4]), false);
assertArraysEqual(("string", 587), false);