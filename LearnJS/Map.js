//creating Map
let map = new Map();
//add key and values
map.set('Igor', 450)
    .set('Irina', 500)
    .set('Andrei', 200)
    .set('Dmitri', 900);
//iterations
//KEYS
for (const mapElement of map.keys()) {
    console.log(mapElement);
}
//VALUES
for (const mapElement of map.values()) {
    console.log(mapElement);
}
//Entries
for (const mapElement of map) {
    console.log(mapElement);
}
//For each
map.forEach((value,key) => {
    console.log(`${key} : ${value}`);
})
// console.log(map);

//SIZE
console.log(map.size);