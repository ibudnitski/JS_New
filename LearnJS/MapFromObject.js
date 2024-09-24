let user = {
    name: 'John',
    age: 23,
    email: 'john@gmail.com',
    jobTitle: 'Project manager',
}

let map2 = new Map([
    ['Igor', 23],
    ['Irina', 22],
    ['Andrei', 32],
])

console.log(user);

let map = new Map(Object.entries(user));
console.log(map);

let list = Object.fromEntries(map2);
console.log(list);
