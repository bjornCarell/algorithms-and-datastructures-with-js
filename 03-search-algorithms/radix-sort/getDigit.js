const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

module.exports = getDigit;

// const digit = getDigit(7324,2); 
// console.log(digit) // 3

/* 
  Math.abs is used so we can work with negative numbers

  How does getDigit work? 
 
    Example: getDigit(7439,2)
       We are looking for the 2nd positioned number from the right
       That numbers is 4
       The 4 by itself is four, but in the context of the whole
       number the 4 also represents the hundred number. So what we 
       do is to take the whole number and divide it by 100
 
       Math.abs(7324) ---> 7324
       Math.pow(10, 2) ---> 100
       -----------------------------------
       Math.floor(7324 / 100)
       -----------------------------------
       73
       ___________________________________
       73 % 10
       ___________________________________
       3


    Math.floor(7324 / 100) % 10 

*/