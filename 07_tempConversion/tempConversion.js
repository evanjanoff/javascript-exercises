const convertToCelsius = function(x) {
  let y = 5 / 9 * (x - 32);
  return parseFloat(y.toFixed(1));
};

const convertToFahrenheit = function(x) {
  let y = 9 / 5 * x + 32;
  return parseFloat(y.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
