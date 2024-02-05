class MyQueue {
  constructor() {
    this.enStack = [];
    this.deStack = [];
  }

  enqueue(value) {
    this.enStack.push(value);
  }

  dequeue() {
    if (this.deStack.length === 0) {
      while (this.enStack.length > 0) {
        this.deStack.push(this.enStack.pop());
      }
    }

    if (this.deStack.length === 0) {
      console.log('Queue is empty.');
      return null;
    }

    return this.deStack.pop();
  }

  peek() {
    if (this.deStack.length === 0) {
      return this.enStack[0];
    }

    return this.deStack[this.deStack.length - 1];
  }

  isEmpty() {
    return this.enStack.length === 0 && this.deStack.length === 0;
  }
}

// example
const myQueue = new MyQueue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.peek()); // 1
console.log(myQueue.dequeue()); // 1
console.log(myQueue.dequeue()); // 2
console.log(myQueue.isEmpty()); // false
console.log(myQueue.dequeue()); // 3
console.log(myQueue.isEmpty()); // true
