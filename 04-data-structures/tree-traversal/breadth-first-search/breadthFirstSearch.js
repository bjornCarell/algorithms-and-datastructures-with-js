class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarysearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } 

    let current = this.root;
    
    while (true) {
      if (value === current.value) return undefined;

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }

      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;
  
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
          current = current.left
      } else if (value > current.value) {
          current = current.right;
      } else {
        found = true;
      }
    }
    return current ? current : 'Not found';
  }

  breadthFirstSearch() {
    let firstNode = this.root
    let queue = []; // First In First Out - FIFO
    let visited = [];

    queue.push(firstNode);

    while (queue.length) {
      firstNode = queue.shift();
      visited.push(firstNode);

      if (firstNode.left) {
        queue.push(firstNode.left);
      }

      if (firstNode.right) {
        queue.push(firstNode.right);
      }
    }

    return visited;
  }
}

let bst = new BinarysearchTree();
bst.insert(9);  // root
bst.insert(13); // root.right
bst.insert(11); // root.right.left
bst.insert(5);  // root.left
bst.insert(2);  // root.left.left
bst.insert(7);  // root.left.right

console.log({
  allNodeValues: bst.breadthFirstSearch().map(node => node.value)
});

