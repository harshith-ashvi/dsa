function insersionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    const numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

const arr1 = [8, 20, -2, -4, -6];
insersionSort(arr1);
console.log(arr1);

// Big-O - O(n^2)
