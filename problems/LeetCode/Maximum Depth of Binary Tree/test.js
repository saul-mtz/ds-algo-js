import maxDepth from ".";
import BinaryTree from "../../../data-structures/BinaryTree";

test("test cases", () => {
  return expect(
    maxDepth(new BinaryTree([3, 9, 20, null, null, 15, 7]))
  ).toStrictEqual(3);
  return expect(maxDepth(new BinaryTree([1]))).toStrictEqual(1);
  return expect(maxDepth(new BinaryTree([]))).toStrictEqual(0);
  return expect(maxDepth(null)).toStrictEqual(0);
  return expect(maxDepth()).toStrictEqual(0);
});
