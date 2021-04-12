const collectedValues = arr => {
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  newArr = newArr.concat(collectedValues(arr.slice(1)));
  return newArr;
}

let test = collectedValues([1,2,3,4,5,6,7,8,9]);

console.log(test);