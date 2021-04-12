const linearSearch = (search, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) return i;
  }
  
  return -1;
}

console.log(linearSearch(1, [234,3,5,671,2]));