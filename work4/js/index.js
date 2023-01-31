function map (fn, array) {
    let array2 = [];
    for (let i = 0; i < array.length, i++;) {
        array2[i] = fn(array[i]);
    }
    return array2;
}

/*function checkAge (age) {
    if(age > 18) {
        return true
    }else{
        return confirm('Бaтьки дозволили?');
    }
}
*/
function checkAge (age) {
    return (age > 18)? true : confirm ("Батьки дозволили?");
}
let myAge = prompt('Введіть Ваш вік', '');
document.write(checkAge(myAge));
