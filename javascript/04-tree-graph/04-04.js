class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function checkBalanced(root) {
  if (!root) {
    return true;
  }

  // 각 서브트리의 높이를 계산
  function getHeight(node) {
    if (!node) {
      return 0;
    }
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    // 왼쪽 서브트리와 오른쪽 서브트리의 높이 차이가 1 이상이면 false 반환
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    // 왼쪽 서브트리와 오른쪽 서브트리 중 높은 값에 1을 더하여 현재 노드의 높이 반환
    return Math.max(leftHeight, rightHeight) + 1;
  }

  return getHeight(root) !== -1; // 루트 노드를 기준으로 균형 여부 확인
}

// 예시
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.right.left = new TreeNode(7);

console.log(checkBalanced(root)); // false
