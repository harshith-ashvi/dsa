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

  // O(1)
  prepend(value) {
    const node = new Node(value);
    if (!this.isEmpty()) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }

  // O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  remove(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    removedNode.next = null;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return removedNode.value;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) return -1;
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
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

const list = new LinkedList();
console.log("is list empty", list.isEmpty());
console.log("list size", list.getSize());
list.print();

// list.prepend(10);
// list.print();
// list.prepend(20);
// list.prepend(30);
// list.print();

list.append(10);
list.print();
list.append(20);
list.append(30);
list.print();

// list.insert(10, 0);
// list.print();
// list.insert(20, 0);
// list.insert(30, 1);
// list.print();
// list.insert(40, 2);
// list.print();

// list.remove(0);
// list.print();

// list.remove(1);
// list.print();

// console.log(list.removeValue(40));
// list.print();
// console.log(list.removeValue(10));
// list.print();
// console.log(list.removeValue(30));
// list.print();

// console.log(list.search(10));
// console.log(list.search(20));
// console.log(list.search(30));
// console.log(list.search(40));
list.reverse();
list.print();
