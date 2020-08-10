// Task 1
/*
Напишіть функцію, яка перевірятиме чи перший символ в рядку
 написаний в верхньому регістрі, чи ні.
	Приклад роботи:
upperCase('regexp');
upperCase('RegExp');
String's not starts with uppercase character
String's starts with uppercase character
*/
console.log('--This is Task 1--');
function upperCase(text) {
    regExp = /^[A-Z]/;
    if (regExp.test(text)) {
        console.log('String\'starts with uppercase character')
    } else {
        console.log('String\'s not starts with uppercase character')
    }
}
upperCase('regexp');
upperCase('RegExp');

// Task 2
/*
2. Напишіть функцію, яка приймає рядкові дані і виконує перевірку
 на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
	Приклад роботи:
checkEmail("Qmail2@gmail.com");
true
*/     
console.log('--This is Task 2--');                        
function checkMail(text) {
    regExp = /^\w+@\w+\.\w+$/;
    return regExp.test(text);
}

console.log(checkMail("Qmail2@gmail.com"));

// Task 3
/*
3. Напишіть регулярний вираз, який знаходитиме в тексті одну літеру d, 
за якою йде одна чи більше b, за якими одна d.Запам’ятати знайдені b і 
наступну за ними d.Враховувати верхній і нижній регістр.
Приклад роботи:
Для стрінги "cdbBdbsbz" результат["dbBd", "bB", "d"]
*/
console.log('--This is Task 3--');
function checkLetters(text) {
    let lettersDB = /d(b+)(d)/gi.exec(text);
    console.log(lettersDB.slice());
}
checkLetters('cdbBdbsbz');

// Task 4
/*
4. Напишіть регулярний вираз, який в рядковому тексті 
2 підстрічки буде міняти місцями.
Приклад роботи:
Вхідний рядок    "Java Script"
Вихід    “Script, Java”
*/
console.log('--This is Task 4--'); 
function changePlaces(str) {
    let regExp = /(\w+)\s(\w+)/;
    let matchedWords = regExp.exec(str);
    let newStr = `${matchedWords[2]}, ${matchedWords[1]}`
    console.log(newStr);
}
changePlaces('Java Script');

// Task 5
/*
5. Напишіть функцію, яка виконуватиме валідацію номера банківської карти 
(9999-9999-9999-9999).
*/
console.log('--This is Task 5--');
function checkCard(str) {
    let regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return regExp.test(str);
}
let card = '9999-9999-9999-9999';
console.log(`The card ${card} is valid: ${checkCard(card)}`);

// Task 6
/* 
6. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
	Вимоги:
•  Цифри (0-9).
•  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
•  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
 •  Символ “-” не може повторюватися.

checkEmail('my_mail@gmail.com');
Email is correct!
checkEmail('#my_mail@gmail.com');
Email is not correct!
*/
console.log('--This is Task 6--'); 
function checkEmail(str) {
    let regExp = /^[a-zA-Z0-9]\w+-{0,1}\w+@[a-zA-Z]+\.[a-zA-Z]+$/;
    let result = regExp.test(str);
    if (result) {
        console.log('Email is correct!');
    } else {
        console.log('Email is not correct!');
    }
}
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');

// Task 7
/* 7. Напишіть функцію, яка перевіряє правильність логіна.Правильний логін - рядок від 2 до 10 символів, що містить лише букви та цифри, номер не може бути першим.Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою(наприклад, 3.4).
Приклад роботи:
checkLogin('ee1.1ret3');
true
1.1, 3

checkLogin('ee1*1ret3');
false
1, 1, 3
*/
console.log('--This is Task 7--') 
function checkLogin(str) {
    let regExp = /^[a-zA-Z][a-zA-Z0-9\.]{1,9}$/;
    let result = regExp.test(str);
    console.log(result);
    let regExpNumbers = /(\d+\.\d+)|(\d+)/g;
    let matched = str.match(regExpNumbers)
    console.log(matched.join(', '));
}
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');