let set = new Set();

let john = {name: 'John', age: 32};
let mery = {name: 'Mary', age: 21};
let steve = {name: 'Steve', age: 55};
let andrew = {name: 'Andrey', age: 77};

set.add(john);
set.add(mery);
set.add(steve);
set.add(andrew);

console.log(set)

for (const setElement of set) {
    console.log(`${setElement.name} ==>  ${setElement.age}`);
}

set.forEach((value, set) => {
    console.log(value.age+3);
})

console.log(set.has(john));