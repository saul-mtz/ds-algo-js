import Queue from "../../data-structures/Queue";
import Stack from "../../data-structures/Stack";

export const preOrderTraversal = node => {
  if (node) {
    return [node.val].concat(
      preOrderTraversal(node.left),
      preOrderTraversal(node.right)
    );
  }
  return [];
};

export const inOrderTraversal = node => {
  if (node) {
    return inOrderTraversal(node.left).concat(node.val, inOrderTraversal(node.right));
  }
  return [];
};

export const postOrderTraversal = node => {
  if (node) {
    return postOrderTraversal(node.left).concat(
      postOrderTraversal(node.right),
      node.val
    );
  }
  return [];
};

/**
 * @see https://en.wikipedia.org/wiki/Breadth-first_search
 */
export const breadthFirstSearch = root => {
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
  const process =
    typeof processFn === "function" ? processFn : node => console.log(node.val);

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
