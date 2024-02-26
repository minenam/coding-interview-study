class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function generateBSTSequences(root) {
  if (!root) {
    return [[]]; // 빈 트리인 경우 빈 배열 반환
  }
  if (!root.left && !root.right) {
    return [[root.value]]; // 리프 노드인 경우 현재 노드 값만 포함하는 배열 반환
  }

  // 왼쪽 서브트리와 오른쪽 서브트리에서 가능한 순열을 생성
  const leftSequences = generateBSTSequences(root.left);
  const rightSequences = generateBSTSequences(root.right);

  // 결과를 저장할 배열 초기화
  const result = [];

  // 가능한 모든 순열을 조합하여 결과 생성
  for (const leftSeq of leftSequences) {
    for (const rightSeq of rightSequences) {
      const merged = mergeSequences([root.value], leftSeq, rightSeq);
      result.push(...merged);
    }
  }

  return result;
}

// 두 배열의 가능한 모든 조합을 생성하는 함수
function mergeSequences(prefix, left, right) {
  if (!left.length || !right.length) {
    return [prefix.concat(left, right)];
  }

  const result = [];
  result.push(...mergeSequences(prefix.concat(left[0]), left.slice(1), right));
  result.push(...mergeSequences(prefix.concat(right[0]), left, right.slice(1)));

  return result;
}

// 예시
/**
 *    2
 *   / \
 *  1   3
 */
const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

// 가능한 이진 탐색 트리 배열 생성
const sequences = generateBSTSequences(root);
console.log(sequences); // [[2, 1, 3], [2, 3, 1]]
