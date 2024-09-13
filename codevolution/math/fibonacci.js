function fibonacci(n) {
  const result = [0];
  if (n === 0) {
    return result;
  } else {
    result.push(1);
    for (let i = 2; i < n; i++) {
      result.push(result[i - 2] + result[i - 1]);
    }
    return result;
  }
}

console.log(fibonacci(0)); // [0]
console.log(fibonacci(1)); // [1]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

// Big-0 - O(n)
