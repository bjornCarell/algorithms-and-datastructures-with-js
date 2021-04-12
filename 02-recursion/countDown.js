const iterative = num => {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('All done');
};

const log = it => console.log(it);

const recursive = num => {
  if (num === 0) {
    log('All done');
    return;
  }
  
  log(num);
  num--;
  recursive(num);
};

recursive(6);