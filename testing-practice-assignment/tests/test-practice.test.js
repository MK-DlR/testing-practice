// test-practice.test.js

// imports
const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./test-practice");

// capitalize test
test("takes and returns a string with the first character capitalized", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

// reverse test
test("takes and returns a string reversed", () => {
  expect(reverseString("majima")).toBe("amijam");
});

// calculator test
test("takes 2 numbers and returns the correct calculation (+, -, *, /)", () => {
  const result = calculator(6, 3);
  expect(result.add).toBe(9);
  expect(result.subtract).toBe(3);
  expect(result.multiply).toBe(18);
  expect(result.divide).toBe(2);
});

// caesar cipher test
test("takes a string and a shift factor and returns it with each character shifted", () => {
  expect(caesarCipher("majima", 3)).toBe("pdmlpd");
  expect(caesarCipher("xyz", 3)).toBe("abc"); // wrapping
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr"); // case preservation
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!"); // punctuation and spaces
});

// analyze array test
test("takes an array of numbers and returns an object with average, min, max, and length", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object.average).toBe(4);
  expect(object.min).toBe(1);
  expect(object.max).toBe(8);
  expect(object.length).toBe(6);
});
