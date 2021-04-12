const {performance} = require('perf_hooks');

const addUpTo = n => n * (n + 1) / 2;

let t1 = performance.now();
addUpTo(10000000);
let t2 = performance.now();
console.log(`Time performance: ${(t2 - t1) / 1000} seconds`);

/* 

  Always 3 operations 

  Big O notation: O(1)

*/