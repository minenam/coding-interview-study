class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null; // 부모 노드를 가리키는 링크
  }
}

function inorderSuccessor(node) {
  if (!node) return null;

  // 오른쪽 서브트리가 존재하는 경우, 오른쪽 서브트리에서 가장 작은 값을 찾음
  if (node.right) {
    node = node.right;
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  // 오른쪽 서브트리가 없는 경우, 부모 노드를 따라 올라가며 현재 노드가 부모의 왼쪽 자식인지 확인
  // 만약 부모의 왼쪽 자식이라면 해당 부모가 후속자이므로 반환
  while (node.parent && node === node.parent.right) {
    node = node.parent;
  }
  return node.parent;
}

// 예시
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(7);
root.left.parent = root;
root.right.parent = root;
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.parent = root.left;
root.left.right.parent = root.left;

const node = root.left.left; // 예시로 2의 중위 후속자를 찾음
const successor = inorderSuccessor(node);
console.log(successor ? successor.value : null); // 3
