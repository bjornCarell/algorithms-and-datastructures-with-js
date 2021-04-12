const naiveSearch = (long, short) => {
  let matches = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i+j]) break;
      if (j === short.length - 1) matches++;
    };
  };
  console.log('MATCHES', matches);
  return matches;
};

naiveSearch('lorie loled', "lol");