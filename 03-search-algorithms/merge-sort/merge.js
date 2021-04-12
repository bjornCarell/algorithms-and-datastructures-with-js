// Merge two sorted arrays
const merge = (firstArr, secondArr) => {
  let result = [];
  let i = 0;
  let j = 0;

  // The below holds true as long as there are items
  // left to check in the array, when all items
  // of either firsArr or secondArr has been 
  // iterated over it no longer holds true and 

  while (
    i < firstArr.length && 
    j < secondArr.length
    ) {
      if(firstArr[i] < secondArr[j]) {
        result.push(firstArr[i]);
        i++;
      } else {
        result.push(secondArr[j]);
        j++;
      }
    }

  // When the above loop stops running we might
  // still have items left in one of the arrays.
  // We will not know which one though.
  // To tackle this we do a while loop of each
  // array to see if any items are left to iterate
  // in either firstArr or secondArr


  // If there are items left in in the first array
  while (i < firstArr.length)  {
    result.push(firstArr[i]);
    i++;
  }

   // If there are items left in the second array
  while (j < secondArr.length) {
    result.push(secondArr[j]);
    j++;
  }

  return result;
}

module.exports = merge;