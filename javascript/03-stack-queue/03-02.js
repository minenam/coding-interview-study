class StackWithMin {
  constructor() {
    this.stack = [];
    this.minStack = []; // 최솟값을 추적하는 스택
  }

  push(value) {
    this.stack.push(value);

    // 최솟값 스택 업데이트
    if (
      this.minStack.length === 0 ||
      value <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(value);
    }
  }

  pop() {
    if (this.stack.length === 0) {
      console.log('Stack is empty.');
      return null;
    }

    const poppedValue = this.stack.pop();

    // 최솟값 스택 업데이트
    if (poppedValue === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    return poppedValue;
  }

  min() {
    if (this.minStack.length === 0) {
      console.log('Stack is empty.');
      return null;
    }

    return this.minStack[this.minStack.length - 1];
  }
}

// example
const stackWithMin = new StackWithMin();

stackWithMin.push(3);
stackWithMin.push(5);
stackWithMin.push(8);

console.log(stackWithMin.min()); // 3

stackWithMin.pop();

console.log(stackWithMin.min()); // 3
