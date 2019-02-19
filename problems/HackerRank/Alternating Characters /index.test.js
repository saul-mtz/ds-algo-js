import solution from ".";

test("problem", () => {
  expect(solution("AAAA")).toStrictEqual(3);
  expect(solution("BBBBB")).toStrictEqual(4);
  expect(solution("ABABABAB")).toStrictEqual(0);
  expect(solution("BABABA")).toStrictEqual(0);
  expect(solution("AAABBB")).toStrictEqual(4);
});
