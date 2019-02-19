import { removeChar } from "./string";

test("removeChar", () => {
  expect(removeChar("saul", -1)).toStrictEqual("saul");
  expect(removeChar("saul", 0)).toStrictEqual("aul");
  expect(removeChar("saul", 1)).toStrictEqual("sul");
  expect(removeChar("saul", 2)).toStrictEqual("sal");
  expect(removeChar("saul", 3)).toStrictEqual("sau");
  expect(removeChar("saul", 4)).toStrictEqual("saul");
});
