class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.size = 1; // 해당 노드를 루트로 하는 서브트리의 크기
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // 노드 삽입 구현
  insert(value) {
    this.root = this._insertNode(this.root, value);
  }

  _insertNode(node, value) {
    if (!node) {
      return new TreeNode(value);
    }
    if (value <= node.value) {
      node.left = this._insertNode(node.left, value);
    } else {
      node.right = this._insertNode(node.right, value);
    }
    node.size++; // 서브트리 크기 갱신
    return node;
  }

  // 노드 검색 구현
  search(value) {
    return this._searchNode(this.root, value);
  }

  _searchNode(node, value) {
    if (!node) {
      return false;
    }

    if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this._searchNode(node.left, value);
    } else {
      return this._searchNode(node.right, value);
    }
  }

  // 노드 삭제 구현
  delete(value) {
    this.root = this._deleteNode(this.root, value);
  }

  _deleteNode(node, value) {
    if (!node) {
      return null;
    }

    if (value === node.value) {
      // 노드 삭제
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        // 두 자식 노드가 모두 있는 경우
        const minRightNode = this._findMinNode(node.right);
        node.value = minRightNode.value;
        node.right = this._deleteNode(node.right, minRightNode.value);
      }
    } else if (value < node.value) {
      node.left = this._deleteNode(node.left, value);
    } else {
      node.right = this._deleteNode(node.right, value);
    }

    node.size--; // 서브트리 크기 갱신
    return node;
  }

  _findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  getRandomNode() {
    // 중위 순회를 사용하여 임의의 노드를 반환
    if (!this.root) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * this.root.size) + 1;
    return this.getNodeAtIndex(randomIndex, this.root);
  }

  getNodeAtIndex(index, node) {
    const leftSize = node.left ? node.left.size : 0;
    if (index === leftSize + 1) {
      return node;
    } else if (index <= leftSize) {
      return this.getNodeAtIndex(index, node.left);
    } else {
      return this.getNodeAtIndex(index - leftSize - 1, node.right);
    }
  }
}
