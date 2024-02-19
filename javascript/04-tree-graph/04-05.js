class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isValidBST(root) {
  // 유효성을 검사하는 재귀 함수
  function isValid(node, min, max) {
    if (!node) {
      return true; // 노드가 없으면 유효
    }

    // 현재 노드의 값이 최소값과 최대값 사이에 있는지 확인
    if (
      (min !== null && node.value <= min) ||
      (max !== null && node.value >= max)
    ) {
      return false; // 범위를 벗어나면 유효하지 않음
    }

    // 왼쪽 서브트리와 오른쪽 서브트리의 유효성 확인
    return (
      isValid(node.left, min, node.value) &&
      isValid(node.right, node.value, max)
    );
  }

  return isValid(root, null, null);
}

// 예시
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(7);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(8);

console.log(isValidBST(root)); // true
