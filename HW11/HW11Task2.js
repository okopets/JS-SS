// Task 2
const os = require('os');
const personalmodule = require('./personalmodule');
const http = require("http");
http.createServer(function (request, response) {
    let name = os.userInfo().username;
    let date = new Date();
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write("<p> Date of request: " + date + "</p>");
    response.write("<p>" + personalmodule.greetUser(name, date) + "</p>");
}).listen(8000);

/*
2. Необхідно створити власний модуль personalmodule.js, 
який містить функцію, що приймає ім’я системного юзера і 
працює з поточним часом та на основі пори доби виводить 
повідомлення із привітанням юзера. Щоб експортувати змінні 
чи функції модуля на зовні можна використати об’єкт module.exports.
Створіть Node.js сервер, який з використанням функціоналу 
розробленого модуля повертатиме наступну сторінку:
*/
