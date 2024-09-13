// Method 1
function isPrimeNumber(n) {
  if (n < 2 || n % 2 === 0) return false;
  for (let i = 3; i < n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrimeNumber(1)); // false
console.log(isPrimeNumber(4)); // false
console.log(isPrimeNumber(5)); // true
console.log(isPrimeNumber(9)); // false

// Big-O O(logn)

// Method  - 2 - More Optimal
function isPrime(n) {
  if (n < 2 || n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(9)); // false

// Big-O O(sqrt(n))
