const removeFromArray = function(inputArray, ...theArgs) {
  return inputArray.filter(val => !theArgs.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
