const set = new Set([1, 2, 3]);

set.add(4); // add element
console.log(set.has(4)); // has specific element
set.delete(3);
console.log(set.size);
set.clear();

for (const ele of set) {
  console.log(ele);
}
