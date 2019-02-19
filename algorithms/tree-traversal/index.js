import Queue from '../../data-structures/Queue';

export const preOrderTraversal = (node) => {
  if (node) {
    return [node.val].concat(
      preOrderTraversal(node.left),
      preOrderTraversal(node.right)
    );
  }
  return [];
};

export const inOrderTraversal = (node) => {
  if (node) {
    return inOrderTraversal(node.left).concat(
      node.val,
      inOrderTraversal(node.right)
    );
  }
  return [];
};

export const postOrderTraversal = (node) => {
  if (node) {
    return postOrderTraversal(node.left).concat(
      postOrderTraversal(node.right),
      node.val
    );
  }
  return [];
};

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
}
