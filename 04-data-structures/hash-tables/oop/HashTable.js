class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31; 

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  // 1. accepts a key and a value
  set(key, value) {
    // 2. hash the key
    let hashIndex = this._hash(key);
    // 3. Seperate chaining, 

    // if there is no value,
    if (!this.keyMap[hashIndex]) {
      // create an array at hashIndex
      this.keyMap[hashIndex] = new Array();
      // push another array to it [key, value]
      this.keyMap[hashIndex].push([key, value]);
    // if there is a value
    } else if (Array.isArray(this.keyMap[hashIndex])) {
      //  push [key, value] to existing array
      this.keyMap[hashIndex].push([key, value]);
    }
  }

  // 1. Acceppts a key
  get(key) {
    // 2. Hash the key
    let hashIndex = this._hash(key);
    // 3. Loop through the nested array at the hashed index 
    for (const element in this.keyMap[hashIndex]) {
      if (this.keyMap[hashIndex][element].includes(key)) {
        return {
          [this.keyMap[hashIndex][element][0]]: this.keyMap[hashIndex][element][1]
        };
      /* 
        returns in form of an object: 
        {
          key: value
        }
      */
      } else {
        // 4. If value is not found, return undefined
        return undefined;
      }
    }
  }

  keys() {
    let keys = [];
    // loop over each index
    for (const index in this.keyMap) {
      // if there is a value at index
      if (this.keyMap[index]) {
        // map over the array of arrays at that index
        let arrayAtIndex = this.keyMap[index].map(arr => arr[0]);
        // and push the key to keys
        keys.push(arrayAtIndex);
      }
    }
    // return keys array as a 1 layer array 
    // ( if Array.prototype.flat() is supported you cane use that )
    // return keys.reduce((acc, val) => acc.concat(val),[]);
    // flaten the array and return just unique keys
    return new Set([...keys.reduce((acc, val) => acc.concat(val), )])
  }

  // values method does the same as keys
  // only for loops used instead
  values() {
    let values = [];
    for (const index in this.keyMap) {
      if (this.keyMap[index]) {
        for (const element in this.keyMap[index]) {
          if (!values.includes(this.keyMap[index][element][1])) {
            values.push(this.keyMap[index][element][1]);
          }
        }
      }
    }
    return values;
  }

}

const table = new HashTable();

table.set('pink', '#FFC0CB');
table.set('orange', '#FF7F50');
table.set('pink', '#FFC0CB');

console.log(table.values());