const LinkedList = require("./linkedListWithTail");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    this.list.print();
  }
}

const stack = new LinkedListStack();

console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
console.log(stack.getSize());
console.log(stack.peek());
console.log(stack.pop());
stack.print();
