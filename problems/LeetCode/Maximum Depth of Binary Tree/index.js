import { breadthFirstSearch } from "../../../algorithms/tree-traversal";

/**
 * @see https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */
var maxDepth = function(root) {
  return breadthFirstSearch(root).length;
};

export default maxDepth;
