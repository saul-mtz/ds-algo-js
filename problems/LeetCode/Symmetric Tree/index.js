/**
 * @see https://leetcode.com/problems/symmetric-tree/
 */

import Queue from '../../../data-structures/Queue';

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const queue = new Queue(root);

  while (!queue.isEmpty()) {
    const values = [];
    const length = queue.size();

    for (let i = 0; i < length; i++) {
      const node = queue.dequeue();
      if (node) {
        values.push(node.val);
        queue.enqueue(node.left);
        queue.enqueue(node.right);
      } else {
        values.push(null);
      }
    }

    let j = 0;
    let k = values.length - 1;
    while (j < k) {
      if (values[j] !== values[k]) {
        return false;
      }

      j ++;
      k --;
    }
  }

  return true;
};

export default isSymmetric;
