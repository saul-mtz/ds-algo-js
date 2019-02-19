import hasPathSum from ".";
import BinaryTree from "../../../data-structures/BinaryTree";

test("main", () => {
  expect(
    hasPathSum(new BinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22)
  ).toStrictEqual(true);

  expect(hasPathSum(new BinaryTree([1]), 1)).toStrictEqual(true);
  expect(hasPathSum(new BinaryTree([1, 2]), 2)).toStrictEqual(false);
});
