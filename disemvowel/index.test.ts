import { describe, expect, test } from "@jest/globals";

function disemvowel(comment: string) {
  return comment.replace(/[aeiou]/gi, "")
}

describe("disemvowel", () => {
  test("should return a comment without vowels", () => {
    expect(disemvowel("Troll comment")).toEqual("Trll cmmnt");
  });

  test("should return a comment without uppercase and lowercase vowels ", () => {
    expect(disemvowel("No offense but,\nYour writing is among the worst I've ever read")).toEqual("N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
  });
});
