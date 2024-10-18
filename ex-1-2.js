function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

const array1 = [1, 2, 3, 4, 5, 6, 2];
console.log(hasDuplicates(array1)); // true

const array2 = [1, 2, 3, 4, 5, 6, 7];
console.log(hasDuplicates(array2)); // false
