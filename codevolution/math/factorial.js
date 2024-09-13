function factorialOfNumber(n) {
  let result = 1;
  for (i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorialOfNumber(0)); // 1
console.log(factorialOfNumber(1)); // 1
console.log(factorialOfNumber(4)); // 24
console.log(factorialOfNumber(5)); // 120

// Big-O - O(n)
