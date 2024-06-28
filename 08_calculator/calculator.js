const add = function(x, y) {
	let z = x + y;
  return z;
};

const subtract = function(x, y) {
	let z = x - y;
  return z;
};

const sum = function(array) {
	let z = 0;
  array.forEach((number) => z += number);
  return z;
};

const multiply = function(array) {
  let z = 1;
  array.forEach((number) => z *= number);
  return z;
};

const power = function(x, y) {
	let z = x ** y;
  return z;
};

const factorial = function(x) {
  let y = 1;
	if (x > 1) {
    for (let i = y; i <= x; i++)
      y *= i;
  }
  return y;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
