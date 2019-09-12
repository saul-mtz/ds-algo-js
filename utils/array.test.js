import { removeElement } from "./array";

test("array", () => {
  expect(removeElement([1, 2, 3], 4)).toStrictEqual([1, 2, 3]);
  expect(removeElement([1, 2, 3], 2)).toStrictEqual([1, 3]);
  expect(removeElement([1, 2], 2)).toStrictEqual([1]);
  expect(removeElement(["a", "b", "c", "d"], "a")).toStrictEqual(["b", "c", "d"]);
  expect(removeElement(["a", "b", "c", "d"], "d")).toStrictEqual(["a", "b", "c"]);
});
