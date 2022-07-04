const findKeyByValue = require("../findKeybyValue")

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log((bestTVShowsByGenre, "The Wire"), "drama")
console.log((bestTVShowsByGenre, "That '70s Show"), undefined)
findKeyByValue((bestTVShowsByGenre, "The Wire"), "drama");
findKeyByValue((bestTVShowsByGenre, "That '70s Show"), undefined);