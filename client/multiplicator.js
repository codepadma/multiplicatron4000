var multiply = function() {
  var numbers = [...arguments];
  return numbers.reduce((a, b) => a * b);
}

module.exports = multiply;