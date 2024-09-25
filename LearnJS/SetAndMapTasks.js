/*Фильтрация уникальных элементов массива*/
/*Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.*/

function unique(arr) {
    return Array.from(new Set(arr));
}

let names = ['Igor', 'Andrey', 'Irina', 'Igor', 'Andrey'];

console.log(unique(names));