const swap = require('../swap/swap');

const bubbleSort = arr => {
  // noSwaps keep track of when sorting is done
  // so that we do not need to keep iterate over
  // the array even though we are already sorted
  let noSwaps; 
  
  for (let i = arr.length; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j +1]) {
        // out swap function in use
        swap(arr, j, j+1);
        // we still need to keep sorting
        noSwaps = false;    
      }
    };
    // when no more sorting is needed we break out of the iteration
    if (noSwaps) break;     
  };
  return arr;
};

let sort = arr => bubbleSort(arr);

console.log(sort([1,4,52,6,2,-6,2])); // [ -6, 1, 2, 2, 4, 6, 52 ]