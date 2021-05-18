const hash = (key='', length=0) => {
  if (!length) {
    throw Error('Second argument "length" is manditory');
  }

  let total = 0;
  // The prime number is used to avoid colision of values
  // https://www.quora.com/Why-are-prime-numbers-used-for-constructing-hash-functions
  let WEIRD_PRIME = 31; 

  // We make our time complexity constant by setting the 
  // longest length of chars we will loop over to 100
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % length;
  }

  return total;
}

console.log(hash('orange', 10));