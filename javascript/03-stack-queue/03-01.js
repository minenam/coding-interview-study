class TripleStack {
  constructor(stackSize) {
    this.stackSize = stackSize;
    this.stackPointers = [0, 0, 0]; // 각 스택 초기화
    this.stackArray = new Array(stackSize * 3); // 전체 배열 초기화
  }

  push(stackNum, value) {
    if (this.stackPointers[stackNum] + 1 >= this.stackSize) {
      console.log(`Stack ${stackNum + 1} is full.`);
      return;
    }

    this.stackPointers[stackNum]++;
    this.stackArray[this.topIndex(stackNum)] = value;
  }

  pop(stackNum) {
    if (this.isEmpty(stackNum)) {
      console.log(`Stack ${stackNum + 1} is empty.`);
      return null;
    }

    const value = this.stackArray[this.topIndex(stackNum)];
    this.stackPointers[stackNum]--;
    return value;
  }

  peek(stackNum) {
    if (this.isEmpty(stackNum)) {
      console.log(`Stack ${stackNum + 1} is empty.`);
      return null;
    }

    return this.stackArray[this.topIndex(stackNum)];
  }

  isEmpty(stackNum) {
    return this.stackPointers[stackNum] === 0;
  }

  topIndex(stackNum) {
    return stackNum * this.stackSize + this.stackPointers[stackNum];
  }
}

// example
const tripleStack = new TripleStack(3);

tripleStack.push(0, 1);
tripleStack.push(1, 2);
tripleStack.push(2, 3);

console.log(tripleStack.peek(0)); // 1
console.log(tripleStack.peek(1)); // 2
console.log(tripleStack.peek(2)); // 3

console.log(tripleStack.pop(0)); // 10
console.log(tripleStack.pop(1)); // 20
console.log(tripleStack.pop(2)); // 30

console.log(tripleStack.isEmpty(0)); // true
console.log(tripleStack.isEmpty(1)); // true
console.log(tripleStack.isEmpty(2)); // true
