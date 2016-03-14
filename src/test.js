var sum = function(numOne, numTwo) {
  numOne = numOne || 0;
  numTwo = numTwo || 0;
  return numOne + numTwo
}

var reverse = function(s) {
  if (typeof s !== "string") {
    throw {
        message: "must be a string!"
    }
  }
  return s.split("").reverse().join("");
}
