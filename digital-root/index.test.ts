import { describe, expect, test } from "@jest/globals";

function digitalRoot(number: number): number {
  while (number >= 10) {
    let sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    number = sum;
  }

  return number;
}

describe("digitalRoot", () => {
  test("should return a digit when digit is given", () => {
    expect(digitalRoot(1)).toEqual(1);
  });

  test("should return a digit when number of 2 is given", () => {
    expect(digitalRoot(12)).toEqual(3);
  });

  test("should return a digit when number of 3 is given", () => {
    expect(digitalRoot(287)).toEqual(8);
  });
});
