const map = new Map([["a", 1]]);
map.set("b", 2);
map.set("c", 3);
map.set("d", 4);
console.log(map.has("a"));
console.log(map.size);
console.log(map.get("d"));
map.delete("c");
// map.clear();
console.log(map.keys());
console.log(map.values());

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
