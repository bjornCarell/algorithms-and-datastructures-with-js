const stack = (...elements) => [...elements];

const push = (item, stack) => stack.concat([item]);

const pop = stack => {
  const newStack = stack.slice(0);
  const item = newStack.pop();
  return [item, newStack];
};

const theStack = stack('oh', 'my', 'god');

console.log(theStack);
console.log(push('!', theStack));
console.log(stack(pop(theStack)));
console.log(stack(pop(theStack)));