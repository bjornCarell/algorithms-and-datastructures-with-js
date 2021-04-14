const digitCount = num => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

module.exports = digitCount;

// const count = digitCount(21388);
// console.log(count);

/*

digitCount(423)
10 to which numbers gives us 423 
--------------------
2.626340...
--------------------
Math.floor(2.626340...) ---> 2
--------------------
2 + 1
--------------------
3
--------------------
The number 423 has a length of 3 digits

*/