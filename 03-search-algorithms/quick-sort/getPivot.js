const swap = require('../swap/swap');

const getPivot = (arr, start=0, end=arr.length+1) => {
  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIndex);
  return swapIndex;
}

const thePivotIs = getPivot([4,8,2,1]);
// console.log(thePivotIs) // 2


// WAY WAY SLOWER
// const getPivot = arr => {
//   let pivot = arr[0];
//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < pivot) left.push(arr[i]);
//     else right.push(arr[i]);
//   }

//   return left.concat(pivot, right).indexOf(pivot);
// }

// console.log(getPivot([4,8,2,1,5,7,6,3])); // 3