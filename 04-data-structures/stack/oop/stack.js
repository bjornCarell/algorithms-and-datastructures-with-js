class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    }

    if(this.first) {
      let currentFirst = this.first;
      this.first = newNode;
      this.first.next = currentFirst;
    }

    return this.length++;
  }

  pop() {
    if (!this.first) return undefined;
    let itemToRemove = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }

    if(this.length > 1) {
      this.first = this.first.next;
    }

    this.length--;
    return itemToRemove;
  }
}

let stack = new Stack();
stack.push('Hey');
stack.push('Yo');
console.log(stack.pop());
