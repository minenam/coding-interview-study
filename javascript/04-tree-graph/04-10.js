class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isSubtree(t1, t2) {
  // t1에서 t2와 같은 구조를 가진 부분을 찾는 함수
  function findMatchingSubtree(node) {
    if (!node) {
      return false; // 현재 노드가 null이면 false 반환
    }
    if (isIdentical(node, t2)) {
      return true; // 현재 노드부터 시작하는 트리가 t2와 동일한 경우
    }

    // 왼쪽 서브트리와 오른쪽 서브트리에서 재귀적으로 확인
    return findMatchingSubtree(node.left) || findMatchingSubtree(node.right);
  }

  // t1에서 t2와 같은 구조를 가진 부분을 찾아 하위 트리인지를 확인
  return findMatchingSubtree(t1);
}

// 두 트리가 동일한지를 확인하는 함수
function isIdentical(t1, t2) {
  // 두 트리가 모두 비어있으면 동일한 것으로 간주
  if (!t1 && !t2) {
    return true;
  }
  // 두 트리 중 하나만 비어있으면 동일하지 않음
  if (!t1 || !t2) {
    return false;
  }
  // 두 트리의 루트 값이 다르면 동일하지 않음
  if (t1.value !== t2.value) {
    return false;
  }

  // 왼쪽 서브트리와 오른쪽 서브트리가 모두 동일한지 확인
  return isIdentical(t1.left, t2.left) && isIdentical(t1.right, t2.right);
}

// 예시
/**
 *     3
 *   / \
 *  4   5
 * / \
 * 1 2
 */
const t1 = new TreeNode(3);
t1.left = new TreeNode(4);
t1.right = new TreeNode(5);
t1.left.left = new TreeNode(1);
t1.left.right = new TreeNode(2);

/**
 *  4
 * / \
 * 1 2
 */
const t2 = new TreeNode(4);
t2.left = new TreeNode(1);
t2.right = new TreeNode(2);

// T2가 T1의 하위 트리인지 확인
console.log(isSubtree(t1, t2)); // true
