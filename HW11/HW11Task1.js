// Task 1
const os = require('os');
const path = require('path');
const http = require("http");
http.createServer(function (request, response) {
    // Send the HTTP header with HTTP Status: 200=OK, Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<h1>System information</h1>\n');
    response.write("<p>Current user name: " + os.userInfo().username + "</p>");
    response.write("<p> OS type: " + os.type() + "</p>");
    response.write("<p> System work time: " + (os.uptime()/60).toFixed(2).toString() + " minutes </p>");
    response.write("<p> Current work directory: " + __dirname + "</p>");
    response.write("<p> Server file name: " + path.basename(__filename) + "</p>");
}).listen(5000);

/*
1. Створити Node.js http-сервер, який слухатиме запити на порт 5000 
на локальній  машині. Сервер повинен повертати сторінку, що містить
ім’я поточного користувача операційної системи, тип операційної системи,
час роботи системи в хвилинах (використати модуль OS), 
поточну робочу директорію і назву файлу сервера (використати модуль path).
*/