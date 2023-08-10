/*
* У папці calculator дана верстка макета калькулятора. 
Потрібно зробити цей калькулятор робочим.
* При натисканні на клавіші з цифрами - набір введених цифр має бути показаний на табло калькулятора.
* При натисканні на знаки операторів (`*`, `/`, `+`, `-`) на табло нічого не відбувається - програма 
  чекає введення другого числа для виконання операції.
* Якщо користувач ввів одне число, вибрав оператор і ввів друге число, то при натисканні як 
кнопки `=`, так і будь-якого з операторів, в табло повинен з'явитися результат виконання попереднього виразу.
* При натисканні клавіш `M+` або `M-` у лівій частині табло необхідно показати маленьку 
букву `m` - це означає, що в пам'яті зберігається число. Натискання на MRC покаже число з пам'яті на екрані. 
Повторне натискання `MRC` має очищати пам'ять.
*/
/*plus.addEventListener("click", () => {
  buttonPlusCklicked = true;
  console.log("кнопка плюс була натиснута");
  if(operand1 === "") {
    operand1 = inputLine.value;
  }else {
    inputLine.value = "";
    operand2 = inputLine.value;
  }
  btnEqual.disabled = false;
});
*/


const inputLine = document.querySelector(".inputLine");
const digits = document.querySelectorAll(".digits");
const btnPink = document.querySelectorAll(".pink");
const btnClear = document.querySelector(".btnClear");
let operator = '', digit1 = '', digit2 = '';
let count = 0;
let isEqual = false;
//let buttonPlusCklicked = false;
const btnEqual = document.querySelector(".btnEqual");
let rez;
inputLine.value = 0;
btnEqual.disabled = false;

digits.forEach(el => {
  if( isEqual === false){
    el.addEventListener("click", () => {
        console.log(el.value);
        if(inputLine.value === "0") {
          
          inputLine.value = '';
        }
        console.log(digit1, digit2);  
        if(digit1 !== '' && digit2 === '') {
          digit2 = "true";

          inputLine.value = '';
        }
        inputLine.value += el.value;            
    })   
  } 
});

btnPink.forEach(el => {
  el.addEventListener("click", () => {
    isEqual = false;
    operator = el.value;
    console.log(operator);
    if(digit1 === '') {
      digit1 = inputLine.value;
    }else if(digit1 !== ''){
      if(count > 0){
        digit2 = inputLine.value; 
      }
    } 
    console.log(digit1, digit2); 
  })
})

btnEqual.addEventListener("click", () => {
  digit2 = inputLine.value;
  console.log(digit1, digit2);
  isEqual = true;
  if(digit1 !== '' && digit2 !== '') {
    if(operator === "+"){
      inputLine.value = parseFloat(digit1) + parseFloat(digit2);
    }else if(operator === "-") {
      inputLine.value = parseFloat(digit1) - parseFloat(digit2);  
    }else if(operator === "*") {
      inputLine.value = parseFloat(digit1) * parseFloat(digit2);  
    }else if(operator === "/") {
      if(parseFloat(digit2) === 0) {
        inputLine.value ="Error";
      }else{
        inputLine.value = parseFloat(digit1) / parseFloat(digit2);
      }    
    }

    digit1 = inputLine.value;
    digit2 = '';
  }
});

btnClear.addEventListener("click", () => {
    inputLine.value = 0;
    digit1 = '';
    digit2 = '';
    count = 0;
    isEqual = false;
});