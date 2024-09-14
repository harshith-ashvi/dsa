// recursion
function climbingStaircaseRecursion(n) {
  if (n < 4) return n;
  return climbingStaircaseRecursion(n - 1) + climbingStaircaseRecursion(n - 2);
}

console.log(climbingStaircaseRecursion(4)); // 5
console.log(climbingStaircaseRecursion(3)); // 3

// Big - O - O(2 ^ n);

// using loop
function climbingStaircase(n) {
  const numberOfWays = [1, 2];
  for (let i = 2; i < n; i++) {
    numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
  }
  return numberOfWays[n - 1];
}

console.log(climbingStaircase(1)); // 1
console.log(climbingStaircase(2)); // 2
console.log(climbingStaircase(3)); // 3
console.log(climbingStaircase(4)); // 5
console.log(climbingStaircase(5)); // 8
