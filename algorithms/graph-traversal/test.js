import BinaryTree from "../../data-structures/BinaryTree";
import { inOrder, postOrder, preOrder } from ".";

const testTree1 = new BinaryTree();
const testTree2 = new BinaryTree([3, 9, 20, null, null, 15, 7]);
const testTree3 = new BinaryTree([
  "F",
  "B",
  "G",
  "A",
  "D",
  null,
  "I",
  null,
  null,
  "C",
  "E",
  null,
  null,
  "H",
  null
]);

test("Pre-order (NLR)", () => {
  expect(preOrder(testTree1)).toStrictEqual([]);
  expect(preOrder(testTree2)).toStrictEqual([3, 9, 20, 15, 7]);
  expect(preOrder(testTree3)).toStrictEqual([
    "F",
    "B",
    "A",
    "D",
    "C",
    "E",
    "G",
    "I",
    "H"
  ]);
});

test("In-order (LNR)", () => {
  expect(inOrder(testTree1)).toStrictEqual([]);
  expect(inOrder(testTree2)).toStrictEqual([9, 3, 15, 20, 7]);
  expect(inOrder(testTree3)).toStrictEqual([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I"
  ]);
});

test("Post-order (LRN)", () => {
  expect(preOrder(testTree1)).toStrictEqual([]);
  expect(postOrder(testTree2)).toStrictEqual([9, 15, 7, 20, 3]);
  expect(postOrder(testTree3)).toStrictEqual([
    "A",
    "C",
    "E",
    "D",
    "B",
    "H",
    "I",
    "G",
    "F"
  ]);
});
