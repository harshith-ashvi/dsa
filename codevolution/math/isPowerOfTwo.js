function isPowerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(8)); // true

// Big-O - O(logn)

// Method 2 - BitWise
function isPowerOfTwoBitWise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(5)); // false
console.log(isPowerOfTwoBitWise(8)); // true

// Big-O - O(1)

// Explaination
// Here's an Example with breakdown for people who are not clear with bitwise operation

// Number: 4 (binary: 0100) - This is the binary representation of the number 4. In binary, it has only one bit set to 1, which is the leftmost bit (the most significant bit).

// Subtracting 1 from 4: When we subtract 1 from the number 4, we get 3. Here's how it works in binary:

// Number 4 (binary: 0100)
// Subtract 1: 4 - 1 = 3 (binary: 0011)
// Subtracting 1 from 4 changes the leftmost 1 to 0 but leaves the other bits unchanged.

// Bitwise AND Operation (4 & 3): Now, let's perform a bitwise AND operation between the original number 4 and the result of subtracting 1 (which is 3).

// Number 4 (binary: 0100)
// Number 3 (binary: 0011)
// When we perform a bitwise AND operation between these two binary numbers, we compare each bit position:

// At the first bit position: 0 & 0 = 0
// At the second bit position: 1 & 0 = 0
// At the third bit position: 0 & 1 = 0
// At the fourth bit position: 0 & 0 = 0
// The result of the AND operation is 0000 in binary, which is equal to 0 in decimal.

// Result: 4 & 3 = 0: The result of the bitwise AND operation between 4 and 3 is 0. This means that the binary representation of the result has only zeroes, indicating that 4 is indeed a power of two.

// And

// Number: 3 (binary: 0011) - This is the binary representation of the number 3. In binary, it has two bits set to 1. These are the rightmost bit and the second rightmost bit.

// Subtracting 1 from 3: When we subtract 1 from the number 3, we get 2. Here's how it works in binary:

// Number 3 (binary: 0011)
// Subtract 1: 3 - 1 = 2 (binary: 0010)
// Notice that subtracting 1 from 3 sets the rightmost bit (the least significant bit) to 0 and leaves the other bits unchanged.

// Bitwise AND Operation (3 & 2): Now, let's perform a bitwise AND operation between the original number 3 and the result of subtracting 1 (which is 2).

// Number 3 (binary: 0011)
// Number 2 (binary: 0010)
// When we perform a bitwise AND operation between these two binary numbers, we compare each bit position:

// At the first bit position: 0 & 0 = 0
// At the second bit position: 0 & 1 = 0
// At the third bit position: 1 & 1 = 1
// At the fourth bit position: 1 & 0 = 0
// The result of the AND operation is 0010 in binary, which is equal to 2 in decimal.

// Result: 3 & 2 = 2: The result of the bitwise AND operation between 3 and 2 is 2. This means that the binary representation of the result has one bit set to 1, which is the second rightmost bit.
