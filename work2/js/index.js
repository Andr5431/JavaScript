// Звичайний трикутник
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
// Прямокутний трикутникr
for(let i = 0; i < 10; i++){
    for(let y = 1+i; y > 0; y--){
        document.write("*")
    }
    document.write("<br>")
}
document.write("<hr>")

// Пустий прямокутний трикутник
for(let i = 0; i < 1; i++) {
    for(let y = 0; y < 10; y++) {
        document.write("*")
    }
    document.write("<br>")
}
for(let x = 0; x < 8; x++) {
    for(let j = 0; j < 1; j++) {
         document.write("*")
    }
    for(let k = 1; k < 15; k++) {
       document.write("&nbsp") 
    }
    for(let m = 9; m < 10; m++){
       document.write("*") 
    }
    document.write("<br>")
}
for(let i = 0; i < 1; i++) {
    for(let y = 0; y < 10; y++) {
        document.write("*")
    }
    document.write("<br>")
}
document.write("<hr>")
// Ромб
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
    for(let j = 1 + i; j < 10; j++){
        document.write("*")
    }
    for(let y = i + 1; y > 0; y--) {
        document.write("&nbsp")
    }
    document.write("<br>")
}
