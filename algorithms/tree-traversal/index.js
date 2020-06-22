import Queue from "../../data-structures/Queue";
import Stack from "../../data-structures/Stack";

/**
 * Pre-order (NLR)
 * @see https://en.wikipedia.org/wiki/Tree_traversal#Pre-order_(NLR)
 * @param {TreeNode} node
 */
export const preOrder = (node) => {
  if (node && node.val) {
    return [node.val].concat(preOrder(node.left), preOrder(node.right));
  }
  return [];
};

/**
 * In-order (LNR)
 * @see https://en.wikipedia.org/wiki/Tree_traversal#In-order_(LNR)
 * @param {TreeNode} node
 */
export const inOrder = (node) => {
  if (node && node.val) {
    return inOrder(node.left).concat(node.val, inOrder(node.right));
  }
  return [];
};

/**
 * Post-order (LRN)
 * @see https://en.wikipedia.org/wiki/Tree_traversal#Post-order_(LRN)
 * @param {TreeNode} node
 */
export const postOrder = (node) => {
  if (node && node.val) {
    return postOrder(node.left).concat(postOrder(node.right), node.val);
  }
  return [];
};

/**
 * @see https://en.wikipedia.org/wiki/Breadth-first_search
 */
export const breadthFirstSearch = (root) => {
  const queue = new Queue(root);
  const nodesPerLevel = [];

  while (!queue.isEmpty()) {
    const levelValues = [];
    const length = queue.size();

    for (let i = 0; i < length; i++) {
      const node = queue.dequeue();
      levelValues.push(node.val);

      if (node.left) {
        queue.enqueue(node.left);
      }

      if (node.right) {
        queue.enqueue(node.right);
      }
    }
    nodesPerLevel.push(levelValues);
  }

  return nodesPerLevel;
};

/**
 * @see https://en.wikipedia.org/wiki/Depth-first_search
 */
export const depthFirstSearch = (root, processFn) => {
  const stack = new Stack(root);
  const process = typeof processFn === "function" ? processFn : (node) => console.log(node.val);

  while (!stack.isEmpty()) {
    const head = stack.pop();
    if (!process(head)) {
      return;
    }

    if (head.left) {
      stack.push(head.left);
    }

    if (head.right) {
      stack.push(head.right);
    }
  }
};
