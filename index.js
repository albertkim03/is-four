'use strict';

function is(x) {
  var fourRepresentations = [
    0b100,          // Binary representation of 4
    "four",         // The English word for 4
    "cuatro",       // The Spanish word for 4
    "quatre",       // The French word for 4
    "vier",         // The German word for 4
    "IV",           // Roman numeral for 4
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Vier.jpg/120px-Vier.jpg" // Google it
  ];

  // Convert to 4 if x matches any representation
  if (fourRepresentations.indexOf(x) > -1) {
    x = 4;
  }

  return {
    four: function () {
      return x === 4;
    },
    roughly: {
      four: function () {
        return x > 3.5 && x < 4.5;
      }
    },
    within: function (y) {
      return {
        of: {
          four: function () {
            return x > (4 - y) && x < (4 + y);
          }
        }
      };
    }
  };
}

module.exports = is;
