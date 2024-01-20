import {
  capitalize,
  reverseString,
  calculator,
  caesarChiper,
  analyzeArray,
} from "./test-pass.js";

test("capitalize first character of string", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("very good yow")).toBe("Very Good Yow");
  expect(capitalize("AGOFihaiosdhf123889")).toBe(null);
});

test("reverse letter of string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("very good yow")).toBe("woy doog yrev");
  expect(reverseString("AGOFihaiosdhf123889")).toBe(null);
});

test("basic calculator function", () => {
  expect(calculator().add(10, 10)).toBe(20);
  expect(calculator().subtract(10, 10)).toBe(0);
  expect(calculator().divide(10, 10)).toBe(1);
  expect(calculator().multiply(10, 10)).toBe(100);
});

test("caesar cipher function", () => {
  expect(caesarChiper("mynameisziggy", 5)).toBe("R3SFRJNX4NLL3");
  expect(caesarChiper("THIS IS CRYPTID MESSAGE", 3)).toBe(
    "WKLV?LV?FU1SWLG?PHVVDJH"
  );
  expect(caesarChiper("THIS IS CRYPTID MESSAGE", 3)).toBe(
    "WKLV?LV?FU1SWLG?PHVVDJH"
  );
  expect(caesarChiper("hHahHa123990", 2)).toBe("JJCJJC345..2");
});

test("caesar cipher function", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
