import { describe, expect, test } from "@jest/globals";

function squareDigits(number: number) {
  const squareNumber = [];
  const arrayNumber = number.toString().split("");

  for (const element of arrayNumber) {
    const digit = parseInt(element, 10);
    squareNumber.push(digit * digit);
  }

  return parseInt(squareNumber.join(""), 10);
}

describe("squareDigits", () => {
  test("should return number * number", () => {
    expect(squareDigits(2)).toEqual(4);
  });

  test("should return number * number and concat them", () => {
    expect(squareDigits(2319)).toEqual(49181);
  });
});
