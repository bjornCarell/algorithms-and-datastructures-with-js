class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    let popped = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }

    this.length--;
    return popped;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;

    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(num) {
    if (num < 0 || num >= this.length) return undefined;

    let mid = this.length / 2;
    let node;
    let count;

    if (num <= mid) {
      count = 0;
      node = this.head;

      while (count !== num) {
        node = node.next;
        count++;
      }
    } else {
      count = this.length - 1;
      node = this.tail;

      while (count !== num) {
        node = node.prev;
        count--;
      }
    }

    return node;
  }

  set(num, val) {
    if (!this.get(num)) return false;

    this.get(num).val = val;
    return true;
  }

  insert(num, val) {
    if (num < 0 || num >= this.length) return false;
    if (num === 0) return this.unshift(val);
    if (num === this.length) return this.push(val);

    let newNode = new Node(val);
    let current = this.get(num);
    // Set the next and prev prop of new node
    newNode.next = current;
    newNode.prev = this.get(num -1);
    // set the next and prev prop of the current node
    current.prev = newNode;
    current.next = this.get(num + 1) || null;
    return true;
  }

  remove (num) {
    if (num < 0 || num >= this.length) return undefined;
    if (num === 0) return this.shift();
    if (num === this.length - 1) return this.pop();

    let nodeToRemove = this.get(num);
    // Set the next and prev prop to remove nodeToremove
    nodeToRemove.prev.next = nodeToRemove.next;
    nodeToRemove.next.prev = nodeToRemove.prev;
    // Cut all ties between nodeToRemove and list
    nodeToRemove.next = null;
    nodeToRemove.prev = null;

    this.length--;
    return nodeToRemove;
  }
}

let list = new DoublyLinkedList();


