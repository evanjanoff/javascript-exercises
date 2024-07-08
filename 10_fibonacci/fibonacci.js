const fibonacci = function(fibonacciNum) {
  let x = Number(fibonacciNum);
  if (x < 0)
    return "OOPS";
  else if (x == 0)
    return 0;
  else if (x == 1 || x == 2)
    return 1;
  else {
    let y = 1;
    let z = 0; 
    for (let i = 2; i <= x; i++) {
      let temp = y + z;
      z = y;
      y = temp;
    }
    return y;
  }
};

// Do not edit below this line
module.exports = fibonacci;
