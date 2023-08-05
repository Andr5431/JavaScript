const phoneInput = document.createElement("input");
phoneInput.id = "phoneInput";
phoneInput.type = "text";
phoneInput.placeholder = "0XX-XXX-XX-XX";
document.body.append(phoneInput);

const saveButton = document.createElement("button");
saveButton.value = "Зберегти";
saveButton.innerText = "Зберегти";
document.body.append(saveButton);

const pattern = /0\d\d-\d\d\d-\d\d-\d\d/;

saveButton.addEventListener("click", () => {
    let phoneInputValue = phoneInput.value;
    if(pattern.test(phoneInputValue)) {
        phoneInput.classList.add("green");
        setTimeout(() => {
        document.location.href = "https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg";
        }, 3000);
    }else{
        const divError = document.createElement("div");
        divError.innerText = `Помилка!
        Ваш формат номеру телефону ${phoneInputValue} введено невірною`;
        document.body.prepend(divError);
    };
});