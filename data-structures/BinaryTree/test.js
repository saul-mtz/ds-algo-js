import BinaryTree from './BinaryTree';

var maxDepth = function(treeInitialValues) {
	const binaryTree = new BinaryTree(treeInitialValues);
	console.log('test', binaryTree.breadthFirstSearch());
	return binaryTree.breadthFirstSearch().length;
};
test('maxDepth', () => {
	return expect(maxDepth([3,9,20,null,null,15,7])).toEqual(3);
});
