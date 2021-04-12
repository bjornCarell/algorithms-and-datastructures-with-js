const binarySearch = (search, arr) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((end + start) / 2);

  if (search > end || search < start) {
    return 'item outside of array scope';
  } 

  while(arr[middle] !== search && start <= end) {
    if (search < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((end + start) / 2);
  }

  return search === arr[middle] ? middle : -1;
}