class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function lowestCommonAncestor(root, p, q) {
  // 노드가 null이거나 p 또는 q와 일치하는 경우 해당 노드를 반환
  if (!root || root === p || root === q) {
    return root;
  }

  // 왼쪽 서브트리에서 p와 q의 공통 조상 찾기
  const left = lowestCommonAncestor(root.left, p, q);
  // 오른쪽 서브트리에서 p와 q의 공통 조상 찾기
  const right = lowestCommonAncestor(root.right, p, q);

  // 왼쪽과 오른쪽 서브트리에서 공통 조상을 찾았을 경우 현재 노드가 첫 번째 공통 조상임
  if (left && right) {
    return root;
  }

  // 왼쪽 또는 오른쪽 서브트리에서 공통 조상을 찾지 못했을 경우 해당 서브트리의 결과 반환
  return left ? left : right;
}

// 예시
/**
 *     3
 *    / \
 *   5   1
 *  / \ / \
 *  6 2 0 8
 *   / \
 *   7 4
 */
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

// 주어진 노드 생성
const p = root.left;
const q = root.right;

// 첫 번째 공통 조상 찾기
const ancestor = lowestCommonAncestor(root, p, q);
console.log(ancestor.value); // 3
