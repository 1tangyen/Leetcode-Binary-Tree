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

// Recursive DFS Solution
var inorderTraversal = function(root) {
	let result = [];
	inorder(root, result);
	return result;
};

const inorder = (node, result) => {
	if (!node) return null;
	inorder(node.left, result);
	result.push(node.val);
	inorder(node.right, result);
};

//************************************************** */
