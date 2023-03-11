/*Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище),
rate (ставка за день роботи), days (кількість відпрацьованих днів).
Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days.
let name = prompt("Введіть ім'я Вашого працівника");
*/
        let surname = prompt("Введіть прізвище Вашого працівника");
        let rate = prompt("Введіть ставку на день працівника");
        let days = prompt("Введіть кількість відпрацьованих днів працівника");
        class Worker {
            constructor(name, surname, rate, days) {
                this.name = name;
                this.surname = surname;
                this.rate = rate;
                this.days = days;
            }
            getSalary(rate, days) {
                let salary = this.rate * this.days;
                return document.write(`${this.name} ${this.surname} отримує зарплату в розмірі: ${salary}.` );
            }
        }
        let worker1 = new Worker(name, surname, rate, days);
        worker1.getSalary();
        
        /*Реалізуйте клас MyString, який матиме такі методи: метод reverse(),
        який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),
        який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
        та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.
        */
class MyString {
    //Перший варіант
    reverse(string) {
        let newString = string.split("").reverse().join("");
        return console.log(newString);
    }
    //Другий варіант
    reverse(string) {
        let newString = "";
        for (let i = string.lenght-1; i >= 0; i--) {
            newString += string[i];
        }
        return newString;
    }
    ucFirst(str) {
        let newStr = str[0].toUpperCase() + str.slice(1);
        return console.log(newStr);

    }
    ucWords(str1) {
        let newStr1 = str1.split(" ");
        for (let i = 0; i < newStr1.lenght; i++) {
            newStr1[i] = newStr1[i].charAt(0).toUpperCase() + newStr1[i].slice(1);
            
        }
        return console.log(newStr1.join(" "));
    }
}

/*Створіть клас Phone, який містить змінні number, model і weight.
Створіть три екземпляри цього класу.
Виведіть на консоль значення їх змінних.
Додати в клас Phone методи: receiveCall, має один параметр - ім'я. Виводить на консоль повідомлення "Телефонує {name}". Метод getNumber повертає номер телефону. Викликати ці методи кожного з об'єктів.
*/
class Phone {
    constructor(number, model, weight) {
        this.number = number;
        this.model = model;
        this.weight = weight;
    }
    receiveCall(name) {
        console.log(`Телефонує ${name}`);
    }
    getNumber() {
        return this.number;
    }
}
const phone1 = new Phone("0931234567", "iPhone 6s", "0.25" );
const phone2 = new Phone("0932345678", "iPhone Xs max", "0.32");
const phone3 = new Phone("0931232783", "Samsung galaxy", "0.3");

console.log(phone1.number, phone1.model, phone1.weight);
console.log(phone2.number, phone2.model, phone2.weight);
console.log(phone3.number, phone3.model, phone3.weight);

phone1.receiveCall("Andrew");
console.log(phone1.getNumber());

phone2.receiveCall("Stepan");
console.log(phone2.getNumber());

phone3.receiveCall("Valentyn");
console.log(phone3.getNumber());

/*Створити клас Car , Engine та Driver.
Клас Driver містить поля - ПІБ, стаж водіння.
Клас Engine містить поля – потужність, виробник.
Клас Car містить поля – марка автомобіля, клас автомобіля,
 вага, водій типу Driver, мотор типу Engine. Методи start(),
  stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали", 
  "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч". А також 
  метод toString(), який виводить повну інформацію про автомобіль, її водія і двигуна.
  Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.
  */
class Car {
    constructor(brand, carClass, weight, driver, engine) {
        this.brand = brand;
        this.carClass = carClass;
        this.weight = weight;
        this.driver = driver;
        this.engine = engine;

    }
    start() {
        console.log("Поїхали");
    }
    stop() {
        console.log("Зупиняємося");
    }
    turnRight() {
        console.log("Поворот праворуч");
    }
    turnLeft() {
        console.log("Поворот ліворуч");
    }
    toString() {
        return `Марка автомобіля: ${this.brand};
        Клас автомобіля: ${this.carClass};
        Вага автомобіля: ${this.weight};
        Водій: ${this.driver.fullName}, стаж водіння:${this.driver.drivingExperience};
        Двигун: потужність ${this.engine.power} к.с., виробник ${this.engine.manufacturer};`
    }
}

class Engine {
    constructor(power, manufacturer) {
        this.power = power;
        this.manufacturer = manufacturer;
    }
}

class Driver {
    constructor(fullName, drivingExperience) {
        this.fullName = fullName;
        this.drivingExperience = drivingExperience;
    }

}
class Lorry extends Car {
    constructor(brand, carClass, weight, driver, engine, carryingCapacity) {
        super(brand, carClass, weight, driver, engine);
        this.carryingCapacity = carryingCapacity;
    }
}
class SportCar extends Car {
    constructor(brand, carClass, weight, driver, engine, speedLimit) {
        super(brand, carClass, weight, driver, engine);
        this.speedLimit = speedLimit;
    }
}


/*Створити клас Animal та розширюючі його класи Dog, Cat, Horse.
Клас Animal містить змінні food, location і методи makeNoise, eat, sleep. Метод makeNoise, наприклад, може виводити на консоль "Така тварина спить".
Dog, Cat, Horse перевизначають методи makeNoise, eat.
Додайте змінні до класів Dog, Cat, Horse, що характеризують лише цих тварин.
Створіть клас Ветеринар, у якому визначте метод void treatAnimal(Animal animal). Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. У циклі надсилайте їх на прийом до ветеринара.
*/

class Animal {
    constructor(food, location) {
        this.food = food;
        this.location = location;
    }
    makeNoise() {
        console.log("Така тварина спить.")
    }
    eat() {
        console.log(`Тварина їсть ${this.food}`)
    }
    sleep() {
        console.log("Тварина спить.")
    }
}
class Dog extends Animal {
    constructor(food, location, breed) {
        super(food, location);
        this.breed = breed;
    }
    makeNoise() {
        console.log("Гав-гав")
    }
    eat() {
        console.log(`Собака їсть ${this.food}`);
    }
}
class Cat extends Animal {
    constructor(food, location, color) {
        super(food, location);
        this.color = color;

    }
    makeNoise() {
        console.log("Мяу")
    }
    eat() {
        console.log(`Котик їсть ${this.food}`);
    }
}
class Horse extends Animal {
    constructor(food, location, breed) {
        super(food, location);
        this.breed = breed; 
    }
    makeNoise() {
        console.log("Іга-га")
    }
    eat() {
        console.log(`Кінь їсть ${this.food}`);

    }
}
class Vet {
    treatAnimal(animal) {
        console.log(`Тварина їсть ${animal.food} і знаходиться і ${animal.location}`);
    }
}


