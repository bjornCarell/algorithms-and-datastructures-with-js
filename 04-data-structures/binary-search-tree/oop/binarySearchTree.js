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
}

let bst = new BinarysearchTree();

bst.insert(9);
bst.insert(13); // root.right
bst.insert(11); // root.right.left
bst.insert(13); // root.right.left.left
bst.insert(5);  // root.left
bst.insert(2);  // root.left.right
bst.insert(7);  // root.left.left


console.log({
  is19: bst.find(19), // Not found
  is7: bst.find(7),   // Node
  is9: bst.find(9)    // Node
}); 