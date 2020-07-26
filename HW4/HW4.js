// Task 1.
/*1. Напишіть функцію testThrow(), яка прийматиме параметр помилка exception 
і перевірятиме роботу оператора throw, зокрема той факт, що як об’єкт помилки 
можна передати значення будь - якого типу.
Приклад результату:
> testThrow(5);
Caught: 5
    > testThrow('Test');
Caught: Test
    > testThrow(new Error('An error happened'));
Caught: Error: An error happened
*/
console.log('--- Task 1 ---')

function testThrow(exception){
    try {
        throw exception;
    } catch (error) {
        console.log('Caught: ' + error)
    }
}
testThrow(5);

// Task 2.
/* 2. Реалізуйте функцію calcRectangleArea(), яка приймає 2 параметри 
ширина прямокутника width і висота прямокутника height і обраховує його площу.
Передбачити припинення виконання програми і генерацію винятку у випадку, 
якщо функції передано не числові параметри. Напишіть код, який використовує цю функцію 
та обробляє можливі виняткові ситуації.
*/
console.log('--- Task 2 ---');

function calcRectangleArea(width, height) {
    let RectArea = width * height
    if (isNaN(width) || isNaN(height)) {
        throw 'Parameter is not a Number.';
    }
    console.log(RectArea);  
}
try {
    calcRectangleArea(5, 'a');
} catch (exception) {
    console.error(exception);
}

// Task 3.
/*
3. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік 
і генерувати в модальному вікні помилки у випадку, коли:
- юзер ввів порожню стрічку
(наприклад “The field is empty! Please enter your age”),
- нечислове значення
- вік юзера менше 14 років.
В іншому разі юзер отримує доступ до перегляду фільму.
В блокові catch передбачити виведення назви і опису помилки.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
*/
console.log('--- Task 3 ---');

function checkAge() {
    let age = prompt("Please enter your age.");
   
    if (age == "") {
        throw new Error ("The field is empty! Please enter your age.");
    } else if (isNaN(age)) {
        throw new Error ("Please enter a number.");
    } else if (age < 14) {
        throw new Error ("You are too young.");
    } else {
        alert ("You are allowed to watch a movie.")
    }
    return age;
} 
try {
    let result = checkAge();
    console.log(result);
} catch (exception) {
    alert(exception.message);
    console.log(exception.stack);
}

// Task 4.
/* 4. Створіть клас MonthException, конструктор якого приймає параметр message 
і ініціалізує поле name значенням 'MonthException'.
Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер 
місяця в році.Функція повертає назву місяця відповідно до введеного номера місяця.
У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException
з повідомленням 'Incorrect month number'.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
Приклад роботи програми:
> console.log(showMonthName(5));
May
> console.log(showMonthName(14));
MonthException Incorrect month number
*/
console.log('--- Task 4 ---');

class MonthException {
    constructor(message) {
        this.message = message;
        this.name = 'MonthException';
    }
}
function showMonthName(month) {
    switch (month) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
        default:
            throw new MonthException("Incorrect month number")
    } 
}

// test with valid months
console.log(showMonthName(1));
console.log(showMonthName(4));
console.log(showMonthName(9));
console.log(showMonthName(12));

function checkMonthName(month) {
    let monthName;
    try {
        monthName = showMonthName(month);
    } catch (e) {
        if (e instanceof MonthException) {
            console.log(e.name + ': ' + e.message)
        }
    } 
    return monthName;
}

let monthToCheck = parseInt(prompt('Month number:'));
console.log(checkMonthName(monthToCheck));

// Task 5.
/* 5. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id 
і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку 
у разі якщо введено від’ємне id.
Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, 
перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність,
в разі виключної ситуації виводить повідомлення про помилку.
Функція showUsers(ids) повертає масив об’єктів де значеннями ключів є коректні елементи ids.

Приклад роботи програми:
showUsers([7, -12, 44, 22])
Error: ID must not be negative: -12
[ {id: 7}, {id: 44}, {id: 22} ]
*/
console.log('--- Task 5 ---');

let num = parseInt(prompt("Enter your id:"));

function showUser(id) {
    let user = {'id': id};
    if (id < 0) {
        throw new Error ("ID must not be negative: " + id);
    }
    return user;
}
showUser(num);

function showUsers(ids) {
    let usersValid = [];
    for (let i = 0; i < ids.length; i++) {
        try {
            let userValid = showUser(ids[i]);
            usersValid.push(userValid);
        } catch (e) {
            console.log(e);
        }
    }
    console.log(usersValid);
    return usersValid;
}
showUsers([7, -12, 44, 22]);