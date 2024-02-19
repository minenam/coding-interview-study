class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function createLevelLinkedList(root) {
  const result = [];
  if (!root) {
    return result;
  }

  let current = [];
  current.push(root);

  while (current.length > 0) {
    result.push(current.map((node) => new ListNode(node.value)));
    const parents = current;
    current = [];
    for (const parent of parents) {
      if (parent.left) {
        current.push(parent.left);
      }
      if (parent.right) {
        current.push(parent.right);
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length - 1; j++) {
      result[i][j].next = result[i][j + 1];
    }
  }

  return result.map((list) => list[0]);
}

// 예시
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(createLevelLinkedList(root));

/**
 * [
  ListNode { value: 1, next: null },
  ListNode { value: 2, next: ListNode { value: 3, next: null } },
  ListNode { value: 4, next: ListNode { value: 5, next: [ListNode] } }
] */
