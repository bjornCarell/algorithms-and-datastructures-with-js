const iterative = num => {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total += i;
  }
  return total;
}

console.log(iterative(7));

//

const recursionSum = num => 
                          num === 1 
                          ? 1 
                          : num + recursionSum(num - 1);

console.log(recursionSum(3));

// EXECUTION
// Each step is waiting to be told what recursionSum(x) will return
//  return 3 + recursionSum(2);
//                  return 2 + recursionSum(1);
//                                     return 1

// POPPED OF THE STACK
// And then it goes back up
//    recursionSum(1)   -->   return 1       -->     1 
//    recursionSum(2)   -->   return 2 + 1   -->     3
//    recursionSum(3)   -->   return 3 + 3   -->     6     

