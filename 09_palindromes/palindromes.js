const palindromes = function (string) {
  let inputString = string.toLowerCase();
  let strippedString = [];
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString.charAt(i);
    if (char >= "a" && char <= "z" ||  char >= "0" && char <= "9")
      strippedString.push(char);
  }
  for (i = 0; i < strippedString.length; i++){
    if (strippedString[i] != strippedString[strippedString.length - 1 - i])
      return false;
    else 
      continue;
  }
  return true;
}

// Do not edit below this line
module.exports = palindromes;
