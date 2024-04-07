import { describe, expect, test } from "@jest/globals";

function tribonacci(signature: number[], n: number) {
  const tribonacciArray: number[] = [];

  for (let i = 0; tribonacciArray.length < n; i++) {
    if (i < 3) {
      tribonacciArray.push(signature[i]);
    } else {
      const newSuiteNumber =
        tribonacciArray[i - 1] +
        tribonacciArray[i - 2] +
        tribonacciArray[i - 3];

      tribonacciArray.push(newSuiteNumber);
    }
  }

  return tribonacciArray;
}

describe("tribanacci", () => {
  test("when n is more of 3 then, add 3 previous number", () => {
    expect(tribonacci([1, 2, 3], 5)).toEqual([1, 2, 3, 6, 11]);
  });
  test("should return empty array when n is 0", () => {
    expect(tribonacci([200, 300, 400], 0)).toEqual([]);
  });

  test("should return first array's element when n is 1", () => {
    expect(tribonacci([200, 300, 400], 1)).toEqual([200]);
  });

  test("should return two array's elements when n is 2", () => {
    expect(tribonacci([200, 300, 400], 2)).toEqual([200, 300]);
  });

  test("should return two array's elements when n is 2", () => {
    expect(tribonacci([3, 2, 1], 10)).toEqual([
      3, 2, 1, 6, 9, 16, 31, 56, 103, 190,
    ]);
  });
});
