import { describe, expect, test } from "@jest/globals";

function snail(snailArray: [number[]]): number[] {
  const arrayResult: number[] = [];

  while (snailArray.length > 0) {
    // Ajoute la première rangée (de gauche à droite)
    arrayResult.push(...snailArray.shift() || []);

    // Ajoute la dernière colonne (de haut en bas)
    for (const row of snailArray) {
      arrayResult.push(row.pop() || 0); // Si la colonne est vide, ajoute 0
    }

    // Ajoute la dernière rangée (de droite à gauche)
    arrayResult.push(...(snailArray.pop() || []).reverse());

    // Ajoute la première colonne (de bas en haut)
    for (let i = snailArray.length - 1; i >= 0; i--) {
      arrayResult.push(snailArray[i].shift() || 0); // Si la colonne est vide, ajoute 0
    }
  }

  return arrayResult;
}

describe("snail", () => {
  test("should return first element", () => {
    expect(snail([[1]])).toEqual([1]);
  });

  test("should return elements of first array", () => {
    expect(snail([[1, 2, 3]])).toEqual([1, 2, 3]);
  });
});
