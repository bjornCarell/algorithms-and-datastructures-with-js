class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add to the end
  enqueue(val) {
    let newNode = new Node(val);

    if(!this.last) {
      this.last = newNode;
      this.first = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  // remove from the beginning
  dequeue() {
    if (this.size === 0) return undefined;

    let currentFirst = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size = 0;
    } else {
      this.first = this.first.next;
      this.size--;
    }

    return currentFirst;
  }
}

let myQueue = new Queue();

