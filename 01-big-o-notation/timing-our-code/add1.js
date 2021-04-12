const {performance} = require('perf_hooks');

const addUpTo = n => {
  let total = 0;

  for (let i = 1; i < n; i++) {
    total += i;
  }

  return total;
}

let t1 = performance.now();
addUpTo(10000000);
let t2 = performance.now();
console.log(`Time performance: ${(t2 - t1) / 1000} seconds`);

/* 

  Number of operations grow with n

  Big O notation: O(n)

*/