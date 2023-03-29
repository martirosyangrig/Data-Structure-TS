// A set is a data structure that can hold a collection of values. The values however must be unique

const set = new Set([1, 2, 3]);
set.add(4);
set.add(4) // it will ignore as metioned that values must be unique

set.has(8) // false

set.delete(2) // 1, 3 4

set.size // 3

for(const item of set) {
    console.log(item)
}

set.clear() // []