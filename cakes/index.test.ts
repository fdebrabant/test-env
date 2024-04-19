import { describe, expect, test } from "@jest/globals";

function moveZeros(array: (number | boolean | string)[]) {
  return array.sort((a, b) => {
    if (a === 0 && b !== 0) {
      return 1; // Place les zéros à la fin
    } else if (a !== 0 && b === 0) {
      return -1; // Garde les non-zéros en premier
    } else {
      return 0; // Maintient l'ordre relatif des autres éléments
    }
  });
}

describe("moveZeros", () => {
  test("should move 0 to the end", () => {
    expect(moveZeros([1, 0, 300])).toEqual([1, 300, 0]);
  });

  test("should move 0 to the end even complex array", () => {
    expect(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])).toEqual([
      false,
      1,
      1,
      2,
      1,
      3,
      "a",
      0,
      0,
    ]);
  });
});
