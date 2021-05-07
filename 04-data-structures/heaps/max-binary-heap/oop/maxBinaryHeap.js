class Heap {
  constructor() {
    this.values = [55, 9, 41, 18, 27, 12, 33];
  }

  insert(element){
      this.values.push(element);
      this.bubbleUp();
  }
  bubbleUp(){
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while(idx > 0){
          let parentIdx = Math.floor((idx - 1)/2);
          let parent = this.values[parentIdx];
          if(element <= parent) break;
          this.values[parentIdx] = element;
          this.values[idx] = parent;
          idx = parentIdx;
      }
  }

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();

    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    } 
  }
}

const newHeap = new Heap();
// newHeap.insert(55);
// newHeap.insert(1);
// newHeap.insert(45);
// newHeap.insert(199);

newHeap.extractMax();
console.log(newHeap);