const merge = require('./merge');

const mergeSort = arr => {
  // base case
  if (arr.length <= 1) {
    // console.log('BASE', arr);
    return arr;
  } 
  
  let mid = Math.floor(arr.length / 2);  
  // console.log('MID', mid)     
  let left = mergeSort(arr.slice(0, mid)); 
  // console.log('LEFT', left) 
  let right = mergeSort(arr.slice(mid));   
  // console.log('RIGHT', right)                           

  // console.log('MERGE', merge);
  return merge(left, right);                                          
}

const sorted = mergeSort([720,12,124,924]);
// console.log(sorted);


/* 

  1. mergeSort([720,12,124,924])
    arr.length is above 1 so we continue

      2. let left = mergeSort([720, 12])
      arr.length is above 1 so we continue
        2a. left = mergeSort([720])
        we hit the base case and assign [720] to the left variable
          2b. right = mergeSort([12]) 
          we hit the base case and assign [12] to the right variable
            2c. merge([720], [12]) ---> [12, 720]
      we merge the left and right and get the FINAL left variable [12, 720]
        
      3. let right = mergeSort([124, 924])
      arr.length is above 1 so we continue
        3a. left = mergeSort([124])
        we hit the base case and assign [124] to the left variable
          3b. right = mergeSort([924])
          we hit the base case and assign [924] to the right variable
            3c. merge([124], [924]) --> [124, 924]
      we merge the left and right and get the FINAL left variable [12, 720]

  return merge([12,720], [124, 924]) // FINAL return [12,124,720,924]

*/