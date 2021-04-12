const {performance} = require('perf_hooks');

const addUpTo = n => {
  let total = 0;
  let index = 1;

  while(index < n) {
    total += index;
    index++;
  }
  return total;
}

let t1 = performance.now();
addUpTo(10000000);
let t2 = performance.now();
console.log(`Time performance: ${(t2 - t1) / 1000} seconds`);