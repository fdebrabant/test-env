import { describe, expect, test } from "@jest/globals";

function isTriangle(a: number, b: number, c: number) {
  if (a + b <= c || b + c <= a || c + a <= b) {
    return false;
  } else {
    return true;
  }
}

describe("isTriangle", () => {
  test("should return true when sum of two side is greater of third", () => {
    expect(isTriangle(1, 2, 2)).toEqual(true);
  });

  test("should return false when sum of two side isn't greater of third ", () => {
    expect(isTriangle(-5, 1, 3)).toEqual(false);
  });
});
