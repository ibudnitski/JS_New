/*Фильтрация уникальных элементов массива*/
/*Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных,
не повторяющихся значений массива arr.*/

function unique(arr) {
    return Array.from(new Set(arr));
}

let names = ['Igor', 'Andrey', 'Irina', 'Igor', 'Andrey'];

console.log(unique(names));

/*Отфильтруйте анаграммы*/
/*Анаграммы – это слова, у которых те же буквы в том же количестве,
но они располагаются в другом порядке.
Напишите функцию aclean(arr), которая возвращает массив слов,
очищенный от анаграмм.*/
let arr2 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// let str = arr2[0].toLowerCase().split('').sort().join('');
// let str2 = arr2[3].toLowerCase().split('').sort().join('');


function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        // разбиваем слово на буквы, сортируем и объединяем снова в строку
        let sorted = word.toLowerCase().split("").sort().join(""); // (*)
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

console.log(aclean(arr2));
