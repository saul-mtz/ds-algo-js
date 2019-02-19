import BinaryTree from "../../data-structures/BinaryTree";
import { inOrder, postOrder, preOrder } from ".";

const testTree1 = new BinaryTree([3, 9, 20, null, null, 15, 7]);
const testTree2 = new BinaryTree([
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
  expect(preOrder(testTree2)).toStrictEqual([
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
  expect(preOrder(testTree1)).toStrictEqual([3, 9, 20, 15, 7]);
});

test("In-order (LNR)", () => {
  expect(inOrder(testTree2)).toStrictEqual([
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
  expect(inOrder(testTree1)).toStrictEqual([9, 3, 15, 20, 7]);
});

test("Post-order (LRN)", () => {
  expect(postOrder(testTree2)).toStrictEqual([
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
  expect(postOrder(testTree1)).toStrictEqual([9, 15, 7, 20, 3]);
});
