const reverseString = function(inputString) {
  let tempArray = [];
  let reversedString = "";
  for (let char of inputString) {
    tempArray.push(char);
  }
  for (let i = tempArray.length - 1; i >= 0; i--) {
    reversedString += tempArray[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
