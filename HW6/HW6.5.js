// Homework 6
// Task 5

let h = document.getElementsByTagName("h1")[0];
h.style.backgroundColor = "green";

let p1 = document.getElementsByTagName("p")[0];
p1.style.fontWeight = "bold";
let p2 = document.getElementsByTagName("p")[1];
p2.style.color = "red";
let p3 = document.getElementsByTagName("p")[2];
p3.style.textDecoration = "underline";
let p4 = document.getElementsByTagName("p")[3];
p4.style.fontStyle = "italic";

let list = document.getElementById("myList");
let listElems = list.children;
for (let i = 0; i <listElems.length; i++) {
    listElems[i].style.display = "inline"
}

document.querySelector("span").style.visibility = "hidden";

// Task 6.
let message1 = prompt("Enter your message 1:")
let message2 = prompt("Enter your message 2");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2")
if (message1 != null) {
    input1.value = message1;
}
if (message2 != null) {
    input2.value = message2;
}
let newInput1 = input2.value;
let newInput2 = input1.value;
input2.value = newInput2;
input1.value = newInput1;