function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const centerIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[centerIndex] === target) return centerIndex;

    if (arr[centerIndex] < target) {
      leftIndex = centerIndex + 1;
    } else {
      rightIndex = centerIndex - 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 6, 8, 10], 6)); // 2
console.log(binarySearch([-5, 2, 6, 8, 10], 8)); // 3
console.log(binarySearch([-5, 2, 6, 8, 10], -5)); // 0
console.log(binarySearch([-5, 2, 6, 8, 10], 12)); // -1

// Big-O - O(logn)
