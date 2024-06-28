const sumAll = function(arg1, arg2) {
  if (!Number.isInteger(arg1) || !Number.isInteger(arg2)) {
    return "ERROR";
  }
  else if (arg1 < 1 || arg2 < 1) {
    return "ERROR";
  }
  else {
    if (arg1 < arg2) {
      let sum = 0;
      for (let i = arg1; i <= arg2; i++) {
        sum += i;
      }
      return sum;
    }
    else {
      let sum = 0;
      for (let i = arg1; i >= arg2; i--) {
        sum += i;
      }
      return sum;
    }
  }
};

// Do not edit below this line
module.exports = sumAll;
