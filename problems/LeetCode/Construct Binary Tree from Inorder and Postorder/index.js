import TreeNode from "../../../data-structures/TreeNode";
import Stack from "../../../data-structures/Stack";

const isParent = (child, parent, inOrderValues) => {
  if (!child) {
    return false;
  }
  const childIndex = inOrderValues.indexOf(child.val);
  const parentIndex = inOrderValues.indexOf(parent.val);
  if (parentIndex - childIndex === 1) {
    console.error("here", { child, parent, inOrderValues });
  }
  return Math.abs(parentIndex - childIndex) === 1;
};

const isRightChild = (child, parent, inOrderValues) => {
  return inOrderValues.indexOf(child.val) > inOrderValues.indexOf(parent.val);
};

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0) {
    return null;
  }

  const stack = new Stack();
  for (let i = 0; i < postorder.length; i++) {
    let node = new TreeNode(postorder[i]);
    while (isParent(stack.peek(), node, inorder)) {
      const child = stack.pop();
      if (isRightChild(child, node, inorder)) {
        node.right = child;
      } else {
        node.left = child;
      }
    }
    stack.push(node);
  }

  let root = stack.pop();
  console.log("before", { root, stack: stack.elements, inorder, postorder });
  if (stack.size() > 1) {
    root.right = stack.pop();
    root.left = stack.pop();
  } else if (stack.size() === 1) {
    const child = stack.pop();
    if (isRightChild(child, root, inorder)) {
      root.right = child;
    } else {
      root.left = child;
    }
  }

  console.log("after", { root, stack: stack.elements });
  return root;
};

export default buildTree;
