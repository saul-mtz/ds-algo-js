import BinaryTree from ".";

test("build from Array", () => {
  expect(new BinaryTree([3, 9, 20, null, null, 15, 7]).val).toEqual(3);
});
