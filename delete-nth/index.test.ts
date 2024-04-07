import { describe, expect, test } from "@jest/globals";

function deleteNth(arr: number[], n: number): number[] {
  return arr.reduce((arrayFiltered: number[], element: number) => {
    
    const nbElementInArray = arrayFiltered.reduce(
      (total, e) => (e === element ? total + 1 : total),
      0
    );
    
    if (nbElementInArray < n) {
      arrayFiltered.push(element);
    }
    return arrayFiltered;
  }, []);
}

describe("deleteNth", () => {
  test("should return empty array when array is empty", () => {
    expect(deleteNth([], 0)).toEqual([]);
  });

  test("should return array when no repeats", () => {
    expect(deleteNth([1, 2, 3], 1)).toEqual([1, 2, 3]);
  });

  test("When there is one repeat remove it", () => {
    expect(deleteNth([2, 1, 2, 3], 1)).toEqual([2, 1, 3]);
  });

  test("when there is more than two repeats remove it", () => {
    expect(deleteNth([2, 1, 2, 2, 3], 2)).toEqual([2, 1, 2, 3]);
  });

  test("when there is more than three repeats remove it", () => {
    expect(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)).toEqual([
      1, 1, 3, 3, 7, 2, 2, 2,
    ]);
  });
});
