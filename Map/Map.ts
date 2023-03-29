// A map is an unordered collection of key-values pairs. Both keys and values can be any data type.

const map = new Map([["a", 1], ["b", 2]]);
map.set('c', 3); // adding
map.delete('c') //removing
map.has("a") // true

map.size // 2

for(const [key, value] of map){
    console.log(`${key}: ${value}`);
}

map.clear() // []

// we can put everything as keys like objects, arrays and ect..