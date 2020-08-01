// Homework 6
// Task 7
/*
Напишіть скріпт, який за допомогою засобів DOM створить для 
порожньої HTML - сторінки таку структуру з тегів і їх атрибутів.

	< body >
	<main class="mainClass check item">
		<div id="myDiv">
			<p>First paragraph</p>
		</div>
	</main> 
	</body >
*/

let main = document.createElement("main");
main.className = "mainClass check item";
document.body.appendChild(main);

let div = document.createElement("div");
div.id = "myDiv";
main.appendChild(div);

let p = document.createElement("p");
p.innerHTML = "First paragraph";
div.appendChild(p)
console.log(p.innerHTML)
