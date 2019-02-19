import maxDepth from ".";
import BinaryTree from "../../../data-structures/BinaryTree";

test("test cases", () => {
  expect(maxDepth(new BinaryTree([3, 9, 20, null, null, 15, 7]))).toStrictEqual(3);
  expect(maxDepth(new BinaryTree([1]))).toStrictEqual(1);
  expect(maxDepth(null)).toStrictEqual(0);
  expect(maxDepth()).toStrictEqual(0);
});
