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

  inOrder() {
    let values = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      values.push(node.value);
      if (node.right) traverse(node.right); 
    }

    traverse(this.root);

    return values;
  }
} 

const bst = new BinarysearchTree();
bst.insert(9);  // root
bst.insert(13); // root.right
bst.insert(11); // root.right.left
bst.insert(5);  // root.left
bst.insert(2);  // root.left.left
bst.insert(7);  // root.left.right

const traversed = bst.inOrder();
console.log(traversed); // [ 2, 5, 7, 9, 11, 13 ]