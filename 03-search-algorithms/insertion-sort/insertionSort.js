// const insertionSort = arr => {
//   for (var i = 1; i < arr.length; i++) {

//     var currentVal = arr[i];
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j+1] = arr[j];
//     }
//     arr[j+1] = currentVal;
//     console.log(arr);
//   }
//   return arr;
// };

//

const insertionSort = arr => {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    let currentVal = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }
  return arr;
}

insertionSort([76,5,98,9]); // [ 5, 9, 76, 98 ]

// #########

const insertionSort2 = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    let tmp = arr[i]

    while (j >= 0 && arr[j] > tmp) {
      arr[j + 1] = arr[j]
      j--
    }

    arr[j+1] = tmp
  }
  return arr
}

insertionSort2([76,5,98,9]); // [ 5, 9, 76, 98 ]