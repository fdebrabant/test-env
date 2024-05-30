import { describe, expect, test } from "@jest/globals";

function arrayDiff(array: number[], numbersToDelete: number[]): number[] | [] {
  return array.filter((number)=>!numbersToDelete.includes(number))
}

describe("arrayDiff", () => {
  test("should return something", () => {
    expect(arrayDiff([1, 0, 300], [])).toEqual([1, 0, 300]);
  });

  test("when all entries are same return empty array", () => {
    expect(arrayDiff([1], [1])).toEqual([]);
  });

  test("schould delete right entries", () => {
    expect(arrayDiff([1, 2, 3, 3, 2, 8], [1, 3])).toEqual([2, 2, 8]);
  });

  test("if array empty return empty", () => {
    expect(arrayDiff([], [1, 3])).toEqual([]);
  });
});
