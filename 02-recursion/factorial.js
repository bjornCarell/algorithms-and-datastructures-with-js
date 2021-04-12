const iterative = num => {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
console.log(iterative(5));

const recursive1 = num => {
  if (num === 1) return 1;
  else return num * recursive1(num - 1);
}

// recursive1(1)    --> return 1
// recursive1(2)   --> return 2 * recursive(1) 1
// recursive1(3)  --> return 3 * recursive(2) 2

console.log(recursive1(5));

//
const recursive = num => num === 1 ? 1 : num * recursive(num - 1);

console.log(recursive(3));

// EXECUTION
// recursive(3)
//      return 3 * recursive(2)  --> "I'm wating for the value of recursive(2) so I can return the final result"
//                      return 2 * recursive(1)   --> I'm wating for the value of recursive(1) so I can pass it on, down the call stack"
//                                       return 1 --> "Aha I now have a value to work with, to pass down the call stack" (the base case)

// EXECUTION SIMPLIFIED
// recursive(3)                                 (6)     final result
//        return 3 * 2                          
//            recursive(2)                      (2)
//                return 2 * 1          
//                    recursive(1)              (1)     base case
//                           return 1     

// THE CALL STACK 
// recursive(1)   "I'm the first function with a known value being returned, I will pass it down the stack"
// recursive(2)   "I will use the value from above (1) and return 2 * 1, and pass it down the stack"
// recursive(3)   "I'm the last function to get called, I will use the value from above (2) and return the final result 6 (3 * 2)"

// First when we hit the base case is JavaScript able
// to start popping of functions from the call stack 

// If no base case, we will just keep adding functions 
// to the call stack, no function will ever get popped 
// off the stack ---> Stack Overflow

// 