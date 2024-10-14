class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    let removedNode;
    if (this.isEmpty()) {
      return null;
    } else if (this.size === 1) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      removedNode = this.head;
      this.head = removedNode.next;
      removedNode.next = null;
    }
    this.size--;
    return removedNode.value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    let removedNode = null;
    if (this.size === 1) {
      removedNode = this.tail;
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      removedNode = this.tail;
      this.tail = prev;
      this.tail.next = null;
    }
    this.size--;
    return removedNode.value;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let current = this.head;
      let listValue = "";
      while (current) {
        listValue += `${current.value} `;
        current = current.next;
      }
      console.log(listValue);
    }
  }
}

module.exports = LinkedList;

// const list = new LinkedList();
// console.log("is list empty", list.isEmpty());
// console.log("list size", list.getSize());
// list.print();

// list.append(10);
// list.append(20);
// list.append(30);
// list.prepend(0);
// list.print();
// console.log(list.getSize());

// list.removeFromFront();
// list.print();

// list.removeFromEnd();
// list.print();
