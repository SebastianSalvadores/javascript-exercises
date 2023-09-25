const convertToCelsius = function(farenheit) {
  let celsius = Math.round((farenheit - 32) * (5/9) * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let farenheit = Math.round((celsius * 9 / 5 + 32) * 10) / 10;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
