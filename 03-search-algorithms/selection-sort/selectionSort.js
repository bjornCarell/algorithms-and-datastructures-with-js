const swap = require("../swap/swap");

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }

    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
};

selectionSort([3,2,45,6,85,9]); // [ 2, 3, 6, 9, 45, 85 ]
