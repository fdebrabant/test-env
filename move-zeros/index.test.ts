import { describe, expect, test } from "@jest/globals";

interface NumberObject {
  [key: string]: number;
}

function cakes(recipe: NumberObject, availableIngredients: NumberObject): number {
  let portionsArray = [];

  for (const ingredient in recipe) {
    if (availableIngredients[ingredient] !== undefined) {
      portionsArray.push(
        Math.floor(availableIngredients[ingredient] / recipe[ingredient])
      );
    } else {
      return 0;
    }
  }

  return Math.min(...portionsArray);
}

describe("cakes", () => {
  test("should return 2", () => {
    let recipe = { flour: 500, sugar: 200, eggs: 1 };
    let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
    expect(cakes(recipe, available)).toEqual(2);
  });

  test("should return 0", () => {
    let recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
    let available = { sugar: 500, flour: 2000, milk: 2000 };
    expect(cakes(recipe, available)).toEqual(0);
  });
});
