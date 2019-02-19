import BinaryTree from "../../../data-structures/BinaryTree";
import isSymmetric from ".";

test("main", () => {
  expect(isSymmetric(new BinaryTree([1, 2, 2, 3, 4, 4, 3]))).toStrictEqual(
    true
  );
  expect(
    isSymmetric(new BinaryTree([1, 2, 2, null, 3, null, 3]))
  ).toStrictEqual(false);
});
