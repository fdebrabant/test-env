import { describe, expect, test } from "@jest/globals";

function dirReduc(arr: string[]): string[] | [] {
  const oppositeDirections: {
    NORTH: string;
    SOUTH: string;
    EAST: string;
    WEST: string;
  } = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  const reducedPath: string[] = [];

  for (const direction of arr) {
    // Vérifier si la direction actuelle est l'opposé de la dernière direction dans reducedPath
    if (
      reducedPath.length > 0 &&
      reducedPath[reducedPath.length - 1] === oppositeDirections[direction]
    ) {
      // Si c'est le cas, supprimer la dernière direction de reducedPath
      reducedPath.pop();
    } else {
      // Sinon, ajouter la direction à reducedPath
      reducedPath.push(direction);
    }
  }

  return reducedPath;
}
describe("dirReduc", () => {
  test("should return empty array when south and north", () => {
    expect(dirReduc(["NORTH", "SOUTH"])).toEqual([]);
  });

  test("should return empty array when north and south", () => {
    expect(dirReduc(["SOUTH", "NORTH"])).toEqual([]);
  });

  test("should return empty array when north and south", () => {
    expect(dirReduc(["SOUTH", "NORTH", "SOUTH", "NORTH"])).toEqual([]);
  });
});
