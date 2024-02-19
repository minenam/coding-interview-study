class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findSortedArrayToBST(nums) {
  if (!nums.length) {
    return null; // 빈 배열인 경우 null
  }

  // 중앙 원소를 루트로 설정
  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  // 루트의 왼쪽 부분을 왼쪽 서브트리로
  root.left = findSortedArrayToBST(nums.slice(0, mid));
  // 루트 오른쪽 부분은 오른쪽 서브트리로
  root.right = findSortedArrayToBST(nums.slice(mid + 1));

  return root;
}

// 예시
const nums = [1, 2, 3, 4, 5, 6, 7];
console.log(findSortedArrayToBST([1, 2, 3, 4, 5, 6, 7]));

/**
 * TreeNode {
  value: 4,
  left: TreeNode {
    value: 2,
    left: TreeNode { value: 1, left: null, right: null },
    right: TreeNode { value: 3, left: null, right: null }
  },
  right: TreeNode {
    value: 6,
    left: TreeNode { value: 5, left: null, right: null },
    right: TreeNode { value: 7, left: null, right: null }
  }
}
*/
