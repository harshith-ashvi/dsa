function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
  //   return [].concat(quickSort(left)).concat([pivot]).concat(quickSort(right));
}

console.log(quickSort([8, 20, -2, 4, -6]));

// Worst Case - Big-O - O(n^2)
// Average Case - Big-O - O(nlogn)
