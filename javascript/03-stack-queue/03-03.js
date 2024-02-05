class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
    this.stacks = [[]];
  }

  push(value) {
    if (this.stacks[this.stacks.length - 1].length >= this.capacity) {
      this.stacks.push([]);
    }
    this.stacks[this.stacks.length - 1].push(value);
  }

  pop() {
    if (this.stacks.length === 0) {
      console.log('SetOfStacks is empty.');
      return null;
    }

    const poppedValue = this.stacks[this.stacks.length - 1].pop();

    // 현재 스택이 비었을 경우 마지막 스택 제거
    if (this.stacks[this.stacks.length - 1].length === 0) {
      this.stacks.pop();
    }

    return poppedValue;
  }

  popAt(index) {
    if (index < 0 || index >= this.stacks.length) {
      console.log('Invalid stack index.');
      return null;
    }

    if (this.stacks[index].length === 0) {
      console.log(`Stack ${index + 1} is empty.`);
      return null;
    }

    const poppedValue = this.stacks[index].pop();

    // 현재 스택이 비었을 경우 빈 스택 제거
    if (this.stacks[index].length === 0) {
      this.stacks.splice(index, 1);
    }

    return poppedValue;
  }
}

// example
const setOfStacks = new SetOfStacks(3);

setOfStacks.push(1);
setOfStacks.push(2);
setOfStacks.push(3);

setOfStacks.push(4);
setOfStacks.push(5);
setOfStacks.push(6);

console.log(setOfStacks.pop()); // 6
console.log(setOfStacks.popAt(0)); // 3
console.log(setOfStacks.pop()); // 5
