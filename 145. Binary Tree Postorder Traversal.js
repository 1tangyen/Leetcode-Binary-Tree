/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// Recursive Solution
var postorderTraversal = function(root) {
	let result = [];
	inorder(root, result);
	return result;
};

function inorder(node, result) {
	if (!node) {
		return null;
	}
	inorder(node.left, result);
	inorder(node.right, result);
	result.push(node.val);
}

//************************************** */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
	let result = [];
	let stack = [];
	let curr = root;

	while (curr !== null || stack.length > 0) {
		while (curr !== null) {
			stack.push(curr);
			result.push(curr.val);
			curr = curr.right;
		}
		curr = stack.pop();
		curr = curr.left;
	}

	return result.reverse();
};
