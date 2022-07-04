const eqArrays = require ('../eqArrays');

eqArrays(([1, 2, 3], [1, 2, 3]), true);
eqArrays(([1, 2, 3], [1, 2, 4]), false);
eqArrays(("string", 587), false);