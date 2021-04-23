const stack = (...items) => ({
  push: item => stack(...items, item),
  pop: () => {
    // create a item list
    const newItems = [...items];

    //remove the last item from the list and
    // assign it to a variable
    const [item] = newItems.slice(-1);

    // return the pair
    return [item, stack(...newItems)];
  },
  stack: () => `stack(${items.join(',')})`
});

const pushToStack = (item, stack) => stack.push(item);
const popOfStack = stack => stack.pop();

const stack1 = stack('hey', 'you', 'bye');
const stack2 = pushToStack('Yay', stack1)
const stack3 = popOfStack(stack2);

console.log(stack2.stack());
console.log(stack3[1].stack())

