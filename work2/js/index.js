// 1. Якщо змінна a дорівнює 10, то виведіть 'Вірно', інакше виведіть 'Неправильно'.
// let a = parseInt(prompt("Напишіть число 10"));
// if (a === 10) {
//     document.write('Вірно')
// }else{
//     document.write('Невірно')
// }

//2.У змінній min лежить число від 0 до 59. Визначте, в яку чверть години потрапляє це число (У першу, другу, третю або четверту).

// for(let i = 0; i < 10; i++){
//     for(let j = i+1; j < 10; j++){
//      document.write('&nbsp')   
//     }
//     for(let y = 1+i; y > 0; y--){
//         document.write("*")
//     }
//     document.write("<br>")
    
// }


// for(let i = 0; i < 10; i++){
//     for(let j = i +1; j < 10; j++){
//         document.write("&nbsp")
//     }
//     for(let k = i+1; k > 0; k--){
//         document.write("*")
//     }
//     document.write("<br>")
// }


// const age = parseInt(prompt("Введіть Ваш вік", "0-60"));
// if(age > 0 && age < 18){
//     document.write()
// }


// let h = 5;
// for (let i = -h; i <= h; i++){

// }


// let h = 5;
// for (let i = -h; i <= h; i++) {
//   let line = '';
//   for (let j = -h; j <= h; j++) {
//     if (Math.abs(i) + Math.abs(j) == h) {
//       line += 'Ж';
//     } else {
//       line += '*';
//     }
//   }
//   document.write("<br>");
// }

// for(let i = 0; i < 10; i++){
//     for(let j = i + 1; j < 10; j++){
//         document.write("&nbsp;")
//     }
//     for(let y = 1+i; y > 0; y--){
//         document.write("*")
//     }
//     document.write("<br>")
// }
// for(let i = 0; i < 10; i++){
//     for(let y = 0; y < 10; y++){
//         document.write("*")
//     }
//     for(let j = 0 ; j < 10; j++){
//         document.write("&nbsp;")
//     }
//     document.write("<br>")
// }

// // Прямокутний трикутник
// for(let i = 0; i < 10; i++){
//     for(let y = 1+i; y > 0; y--){
//         document.write("*")
//     }
//     document.write("<br>")
// }
// for(let i = 0; i < 10; i++){
//     for(let y = 0; y < 5; y++){
//         document.write("*")
//     }
//     document.write("<br>") 
// }


for(let i = 0; i < 10; i++) {
    for(let j = i + 1; j < 10; j++){
        document.write("&nbsp")
    }
    for(let y = 1 + i; y > 0; y--) {
        document.write("*")
    }
    document.write("<br>")
}
document.write("<hr>")
for(let i = 0; i < 10; i++){
    for(let y = 1+i; y > 0; y--){
        document.write("*")
    }
    document.write("<br>")
}
document.write("<hr>")
for(let i = 0; i < 10; i++) {
    for(let j = i + 1; j < 10; j++){
        document.write("&nbsp")
    }
    for(let y = 1 + i; y > 0; y--) {
        document.write("*")
    }
    document.write("<br>")
}
for(let i = 0; i < 10; i++) {
    for(let y = i; y > 0; y--) {
        document.write("*")
    }
    document.write("<br>")
}
let x = 6;
let y = 14;
let z = 4;
result = x+=y-x++*z
document.write('x+=y-x++*z'+ ' Дорівнює ' + result)