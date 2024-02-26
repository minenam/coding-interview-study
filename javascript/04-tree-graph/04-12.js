class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countPathsWithSum(root, targetSum) {
  if (!root) return 0;

  // 현재 노드를 포함하는 경로와 포함하지 않는 경로를 따로 계산
  const pathsFromNode = countPathsWithSumFromNode(root, targetSum, 0);
  const pathsOnLeft = countPathsWithSum(root.left, targetSum);
  const pathsOnRight = countPathsWithSum(root.right, targetSum);

  // 현재 노드를 포함하는 경로와 왼쪽, 오른쪽 서브트리에서 계산한 경로를 합산하여 반환
  return pathsFromNode + pathsOnLeft + pathsOnRight;
}

function countPathsWithSumFromNode(node, targetSum, currentSum) {
  if (!node) return 0;

  currentSum += node.value;
  let totalCount = 0;

  // 현재 노드부터 시작하는 경로의 합이 목표 합과 같은지 확인
  if (currentSum === targetSum) {
    totalCount++;
  }

  // 왼쪽 자식과 오른쪽 자식에서 다시 재귀적으로 호출하여 탐색
  totalCount += countPathsWithSumFromNode(node.left, targetSum, currentSum);
  totalCount += countPathsWithSumFromNode(node.right, targetSum, currentSum);

  return totalCount;
}

// 예시
/**
 *      10
 *    /  \
 *  5   -3
 * / \    \
 * 3  2   11
 * / \ \
 * 3 -2 1
 */
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(-3);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(2);
root.left.right.right = new TreeNode(1);
root.left.left.left = new TreeNode(3);
root.left.left.right = new TreeNode(-2);
root.right.right = new TreeNode(11);

const targetSum = 8;
console.log(countPathsWithSum(root, targetSum)); // 출력: 3 (합이 8이 되는 경로의 개수)
