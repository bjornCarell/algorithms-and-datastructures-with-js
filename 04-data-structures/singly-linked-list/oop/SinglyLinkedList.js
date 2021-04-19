class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if(!this.head){
        this.head = newNode;
        this.tail = this.head;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if(!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while(current.next){
        newTail = current;
        current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }

    return current;
  }

  shift() {
    if(!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if(this.length === 0){
        this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if(!this.head) {
        this.head = newNode;
        this.tail = this.head;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(num) {
    if (num < 0 || num >= this.length) return undefined;
    let count = 0;
    let current = this.head;

    while (count != num) {
      current = current.next;
      count++;
    }

    return current;
  }

  set(num, val) {
    let node = this.get(num);

    if(node) {
      node.val = val;
      return true;
    }

    return false;
  }

  insert(num, val) {
    let priorNode = this.get(num -1)
    let currentNode = this.get(num);
    let newNode = new Node(val);

    if (priorNode && currentNode) {
      newNode.next = currentNode;
      priorNode.next = newNode;
      this.length++
      return true;
    } else if (!priorNode && currentNode) {
      newNode.next = currentNode;
      this.head = newNode;
      this.length++
      return true
    } else {
      return false;
    }
    // if (num < 0 || num > this.length) return false;
    // if (num === this.length) return !!this.push(val);
    // if (num === 0) return !!this.unshift(val);

    // let newNode = new Node(val);
    // let prev = this.get(num -1);
    // let temp = prev.next;
    // prev.next = newNode;
    // newNode.next = temp;
    // this.length++
    // return true;
  }
  remove(num) {
    if (num < 0 || num >= this.length) return undefined;
    if (num === this.length - 1) return this.pop();
    if (num === 0) return this.shift();

    let previousNode = this.get(num - 1);
    let nodeToRemove = previousNode.next;
    previousNode.next = nodeToRemove.next;
    this.length--;
    return nodeToRemove;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    } 
    // for (let i = 0; i < this.length; i++) {
    //   next = node.next;
    //   node.next = prev;
    //   prev = node;
    //   node = next;
    // }

    return this;
  }
}

let list = new SinglyLinkedList();
list.push('Hi');
list.push('Bye');
list.push(999);

console.log(list.reverse());
