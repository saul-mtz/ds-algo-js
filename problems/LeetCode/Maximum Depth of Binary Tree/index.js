import { breadthFirstSearch } from '../../../algorithms/tree-traversal';

/**
 * @see https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */
var maxDepth = function(root) {
	if (root) {
		return breadthFirstSearch(root).length;
	}
	return 0;
};

export default maxDepth;
