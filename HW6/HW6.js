// Task 1
/* Потрібно змінити вміст елемента із First на Last. 
Доступіться до елемента div хоча б 2 способами. */

document.getElementById("test").innerHTML = "Last";
//document.querySelector("#test").innerHTML="Last";
//document.body.firstElementChild.innerHTML="Last";;


// Task 2
/* Потрібно змінити зображення dog.jpg на cat.jpg.
Виведіть в модальному вікні вміст тегу img з новим зображенням. */
let image = document.querySelector(".image");
image.src = "cat.jpg";
alert(image.outerHTML);


// Task 3.
/* На вказаній HTML-сторінці необхідно отримати всі елементи всередині 
тега div по селектору (використати метод document.querySelectorAll). 
І вивести їх вміст із вказанням номеру абзацу в такому форматі:
Selector text 0: First paragraph
Selector text 1: Second paragraph
Selector text 2: Third paragraph
*/
let paragraphs = document.querySelectorAll("div > p");
console.log(paragraphs)

for (let i = 0; i < paragraphs.length; i++) {
    console.log(`Selector text ${i}: ${paragraphs[i].innerHTML}`);
}
// Task 4
/* 4. На HTML-сторінці є ненумерований список з id="list", який складається
 із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
	1) першого елемента списку
	2) останнього елемента списку
	3) другого елемента списку
	4) четвертого елемента списку
	5) третього елемента списку
Зробіть завдання 2 різними способами.
Приклад:
•	1
•	2
•	3
•	4
•	5
Результат виводу: 1, 5, 2, 4, 3
*/
/*
let listElems = document.getElementById("list");
let elemFirst = listElems.children[0].textContent;
let lastFirst = listElems.children[children.length-1].textContent;
let elem2 = listElems.children[1].textContent;
let elem4 = listElems.children[3].textContent;
let elem3 = listElems.children[2].textContent;
console.log(elemFirst, elemLast, elem2, elem4, elem3)
alert(elemFirst);
alert(elemLast);
alert(elem2);
alert(elem4);
alert(elem4);
*/
let listElems = document.querySelector("#list");
let elemFirst = listElems.firstElementChild;
let elemLast = listElems.lastElementChild;
let elem2 = elemFirst.nextElementSibling;
let elem3 = elem2.nextElementSibling;
let elem4 = elemLast.previousElementSibling; 
console.log(elemFirst.innerHTML, elemLast.innerHTML, elem2.innerHTML, elem4.innerHTML, elem3.innerHTML);
alert(elemFirst.innerHTML);
alert(elemLast.innerHTML);
alert(elem2.innerHTML);
alert(elem4.innerHTML);
alert(elem3.innerHTML);







