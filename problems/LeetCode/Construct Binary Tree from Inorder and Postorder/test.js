import buildTree from ".";

import { inOrder as inOrderTraversal, postOrder as postOrderTraversal } from "../../../algorithms/tree-traversal";

const singleTest = (inOrder, postOrder) => {
  const inOrderCopy = [...inOrder];
  const postOrderCopy = [...postOrder];
  const tree = buildTree(inOrder, postOrder);

  expect(inOrderTraversal(tree)).toStrictEqual(inOrderCopy);
  expect(postOrderTraversal(tree)).toStrictEqual(postOrderCopy);
};

test("main", () => {
  singleTest([], []);
  singleTest([1], [1]);
  singleTest([1, 2, 3], [1, 3, 2]);
  singleTest([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
  singleTest([1, 2, 3], [1, 2, 3]);
  singleTest([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
  singleTest([3, 2, 1], [1, 2, 3]);
  singleTest([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]);
  singleTest([2, 3, 1], [3, 2, 1]);
  singleTest([1, 3, 2], [3, 2, 1]);
  //singleTest([1, 2, 3, 4], [3, 4, 2, 1]);
});
