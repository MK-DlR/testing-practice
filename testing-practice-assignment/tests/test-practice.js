// test-practice.js

// exports
module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};

// capitalize function
function capitalize(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

// reverse function
function reverseString(val) {
  return (val && reverseString(val.slice(1)) + val[0]) || val;
}

// calculator function
function calculator(val1, val2) {
  return {
    add: val1 + val2,
    subtract: val1 - val2,
    multiply: val1 * val2,
    divide: val1 / val2,
  };
}

// caesar cipher function
function caesarCipher(val, shift) {
  if (shift > 26 || shift < -26) {
    return "Use a shift between -26 and 26";
  }
  if (typeof shift != "number") {
    return "shift must be a number";
  }
  if (typeof val != "string") {
    return "val must be string";
  }
  const n = shift > 0 ? shift : 26 + (shift % 26);
  return [...val]
    .map((l, i) => {
      const c = val.charCodeAt(i);
      if (c >= 65 && c <= 90)
        return String.fromCharCode(((c - 65 + n) % 26) + 65);
      if (c >= 97 && c <= 122)
        return String.fromCharCode(((c - 97 + n) % 26) + 97);
      return l;
    })
    .join("");
}

// analyze array function
function analyzeArray(array) {
  return {
    average: array.reduce((a, b) => a + b) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
