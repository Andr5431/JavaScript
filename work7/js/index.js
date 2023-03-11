/*Написати функцію `filterBy()`, яка прийматиме 2 аргументи. Перший аргумент - масив, 
який міститиме будь-які дані, другий аргумент - тип даних. - Функція повинна повернути 
новий масив, який міститиме всі дані, які були передані в аргумент, за винятком тих, 
тип яких був переданий другим аргументом. Тобто якщо передати 
масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string', то 
функція поверне масив [23, null]. Задача 2 Переписати гру шибениця з книги на новий синтасис.*/


function filterBy(arr, dataType) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== dataType) {
            newArray.push(arr[i]);
        }
    }
    return newArray
}
let arr = ['hello', 'world', 23, '23', null ];
let newArray = filterBy(arr, 'string');
console.log(newArray);