const getPivot = require('./getPivot');

const quickSort = (arr, left=0, right=arr.length-1)=> {
  // base case 
  // if left is NOT less than right we 
  // skip the if statement and return the arr

  if (left < right) {
    let pivotIndex = getPivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right)
  }
  
  return arr;
}