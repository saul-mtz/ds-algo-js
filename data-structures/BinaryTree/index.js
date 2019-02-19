import Queue from "../Queue";
import Node from "../TreeNode";

const buildFromArray = (values, index) => {
  if (index < 0 || index >= values.length) {
    return null;
  }

  const value = values[index];
  // option to explicity set leaf nodes
  if (null === value) {
    return null;
  }

  const node = new Node(value);
  node.left = buildFromArray(values, index * 2 + 1);
  node.right = buildFromArray(values, index * 2 + 2);

  return node;
};

function BinaryTree(initialValues) {
  if (Array.isArray(initialValues) && initialValues.length > 0) {
    return buildFromArray(initialValues, 0);
  } else {
    return new Node();
  }
}

export default BinaryTree;
