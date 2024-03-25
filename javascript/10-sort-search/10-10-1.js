/**
 * 랭킹 정보를 추적하고 조회하는 자료구조를 구현하는 클래스
 */
class RankTracker {
  constructor() {
    this.root = null; // 이진 검색 트리의 루트 노드
  }

  /**
   * 주어진 수를 추적하여 이진 검색 트리에 삽입하는 메서드
   * @param {number} x - 추적할 수
   */
  track(x) {
    this.root = this.insert(this.root, x);
  }

  /**
   * 주어진 수 이하의 수의 개수를 반환하는 메서드
   * @param {number} x - 기준 수
   * @returns {number} - x 이하의 수의 개수
   */
  getRankOfNumber(x) {
    return this.getRank(this.root, x);
  }

  /**
   * 이진 검색 트리에 새로운 노드를 삽입하는 메서드 (재귀적)
   * @param {TreeNode} node - 현재 노드
   * @param {number} x - 삽입할 수
   * @returns {TreeNode} - 삽입 후의 루트 노드
   */
  insert(node, x) {
    if (!node) {
      return new TreeNode(x); // 새로운 노드 생성
    }

    if (x <= node.val) {
      node.leftCount++; // 왼쪽 서브트리의 노드 개수 증가
      node.left = this.insert(node.left, x); // 왼쪽 자식 노드에 삽입
    } else {
      node.right = this.insert(node.right, x); // 오른쪽 자식 노드에 삽입
    }

    return node;
  }

  /**
   * 주어진 수 이하의 수의 개수를 반환하는 메서드 (재귀적)
   * @param {TreeNode} node - 현재 노드
   * @param {number} x - 기준 수
   * @returns {number} - x 이하의 수의 개수
   */
  getRank(node, x) {
    if (!node) {
      return 0; // 빈 트리이면 0 반환
    }

    if (x === node.val) {
      return node.leftCount; // x와 같은 값이면 왼쪽 서브트리의 노드 개수 반환
    } else if (x < node.val) {
      return this.getRank(node.left, x); // 왼쪽 서브트리에서 재귀적으로 탐색
    } else {
      // x보다 큰 경우 현재 노드와 왼쪽 서브트리의 노드 개수를 더하여 반환
      return node.leftCount + 1 + this.getRank(node.right, x);
    }
  }
}

/**
 * 이진 검색 트리의 노드를 나타내는 클래스
 */
class TreeNode {
  constructor(val) {
    this.val = val; // 노드의 값
    this.left = null; // 왼쪽 자식 노드
    this.right = null; // 오른쪽 자식 노드
    this.leftCount = 0; // 왼쪽 서브트리의 노드 개수
  }
}

/* TEST */
const tracker = new RankTracker(); // RankTracker 객체 생성

// 주어진 입력 스트림을 통해 랭킹 정보 추적
[5, 1, 4, 4, 5, 9, 7, 13, 3].forEach((num) => {
  tracker.track(num);
});

// 주어진 예제에 대한 랭킹 정보 출력
console.log('getRankOfNumber(1):', tracker.getRankOfNumber(1)); // 출력: 0
console.log('getRankOfNumber(3):', tracker.getRankOfNumber(3)); // 출력: 1
console.log('getRankOfNumber(4):', tracker.getRankOfNumber(4)); // 출력: 3
