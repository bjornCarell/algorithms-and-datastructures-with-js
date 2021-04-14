const getDigit = require('./getDigit');
const mostDigits = require('./mostDigits');

const radixSort = nums => {
  // create a copy of input to not mutate array input
  let copy = nums;
  // get the count of the longest number
  let maxNumberCount = mostDigits(copy);
  
  // iterate as many times as the longest number
  for (let k = 0; k < maxNumberCount; k++) {
    // create an array with 10 empty arrays
    let numberBuckets = Array.from({length: 10}, () => []);

    // iterate over all numbers in the input array
    for (let i = 0; i < copy.length; i++) {
      // get the position of each digit
      let digit = getDigit(copy[i],k);
      // use that position to push the 
      // number to the corresponding bucket
      numberBuckets[digit].push(copy[i]);
    }
    // flaten the array of arrays
    copy = [].concat(...numberBuckets);
  }

  return copy;
}

radixSort([12,4564,2,98,5683]);


/* 
console.log('----------------------------------------')
console.log(numberBuckets);
copy = [].concat(...numberBuckets);
console.log('----------------------------------------')
console.log(copy);

----------------------------------------
[ [], [], [ 12, 2 ], [ 5683 ], [ 4564 ], [], [], [], [ 98 ], [] ]
----------------------------------------
[ 12, 2, 5683, 4564, 98 ]
----------------------------------------
[ [ 2 ], [ 12 ], [], [], [], [], [ 4564 ], [], [ 5683 ], [ 98 ] ]
----------------------------------------
[ 2, 12, 4564, 5683, 98 ]
----------------------------------------
[ [ 2, 12, 98 ], [], [], [], [], [ 4564 ], [ 5683 ], [], [], [] ]
----------------------------------------
[ 2, 12, 98, 4564, 5683 ]
----------------------------------------
[ [ 2, 12, 98 ], [], [], [], [ 4564 ], [ 5683 ], [], [], [], [] ]
----------------------------------------
[ 2, 12, 98, 4564, 5683 ]

*/

