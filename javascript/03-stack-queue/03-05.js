class SortedStack {
  constructor() {
    this.mainStack = [];
    this.tempStack = [];
  }

  push(value) {
    // 주 스택(mainStack)이 비거나, 새로운 값이 주 스택의 최상위 값보다 작을 때까지 값을 보조 스택(tempStack)으로 이동
    while (!this.isEmpty() && value > this.peek()) {
      this.tempStack.push(this.pop());
    }

    // 새로운 값 push
    this.mainStack.push(value);

    // 보조 스택의 값들을 다시 주 스택으로 이동
    while (this.tempStack.length > 0) {
      this.mainStack.push(this.tempStack.pop());
    }
  }

  pop() {
    if (this.isEmpty()) {
      console.log('Stack is empty.');
      return null;
    }

    return this.mainStack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      console.log('Stack is empty.');
      return null;
    }

    return this.mainStack[this.mainStack.length - 1];
  }

  isEmpty() {
    return this.mainStack.length === 0;
  }
}

// example
const sortedStack = new SortedStack();

sortedStack.push(5);
sortedStack.push(2);
sortedStack.push(3);
sortedStack.push(4);

console.log(sortedStack.pop()); // 2
console.log(sortedStack.pop()); // 3
console.log(sortedStack.pop()); // 4
console.log(sortedStack.pop()); // 5
