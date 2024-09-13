function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;
  const centerIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (arr[centerIndex] === target) return centerIndex;
  if (arr[centerIndex] < target) {
    return search(arr, target, centerIndex + 1, rightIndex);
  } else {
    return search(arr, target, leftIndex, centerIndex - 1);
  }
}

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

console.log(recursiveBinarySearch([-5, 2, 6, 8, 10], 6)); // 2
console.log(recursiveBinarySearch([-5, 2, 6, 8, 10], 8)); // 3
console.log(recursiveBinarySearch([-5, 2, 6, 8, 10], -5)); // 0
console.log(recursiveBinarySearch([-5, 2, 6, 8, 10], 12)); // -1

// Big-O - O(logn)
