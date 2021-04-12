const swap = (arr, index1, index2) => {
  return [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

const swaped = swap([1,2], 0, 1) 
// console.log(swaped) // --> [2,1]

module.exports = swap;