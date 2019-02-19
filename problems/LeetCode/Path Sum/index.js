import { depthFirstSearch } from "../../../algorithms/tree-traversal";
import { isLeaf } from "../../../data-structures/BinaryTree";

/**
 * @see https://leetcode.com/problems/path-sum/
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  let result = false;
  const parent = new Map();

  const pathSum = node => {
    // tree with just one node
    if (!parent.has(node)) {
      return node.val;
    }

    let currentSum = 0;
    let n = node;
    do {
      //console.log({ n });
      currentSum += n.val;
      n = parent.get(n);
    } while (parent.has(n));

    //console.log({ currentSum });
    return currentSum + n.val;
  };

  const processFunction = node => {
    if (isLeaf(node)) {
      if (pathSum(node) === sum) {
        result = true;
        return false;
      }
    } else {
      if (node.left) {
        parent.set(node.left, node);
      }

      if (node.right) {
        parent.set(node.right, node);
      }
    }
    return true;
  };

  depthFirstSearch(root, processFunction);
  return result;
};

export default hasPathSum;
