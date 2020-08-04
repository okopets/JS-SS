// Task 1
let newWindow = window.open("", "", "width=300, height = 300");
function resizeWin() {
    newWindow.resizeTo(500, 500);
}

function moveWin() {
    newWindow.moveTo(200, 200);
}

function closeWin() {
    newWindow.close();
}

setTimeout(resizeWin, 2000);
setTimeout(moveWin, 4000);
setTimeout(closeWin, 6000);

// Task 2
function changeCSS() {
    document.getElementById("text").style.color = "orange";
    document.getElementById("text").style.fontFamily = "Comic Sans MS";
    document.getElementById("text").style.fontSize = "20-large";
}
myBtn.addEventListener("click", changeCSS);

// Task 3
function changeColor(event) {
    let color = document.body.style.backgroundColor

    if (event.type == "click" && event.target.id == "Btn1") {
        color = "blue";
    } else if (event.type == "dblclick" && event.target.id == "Btn2") {
        color = "pink";
    } else if (event.type == "mousedown" && event.target.id == "Btn3") {
        color = "brown";
    } else if (event.type == "mouseup" && event.target.id == "Btn3") {
        color = "white";
    } else if (event.type == "mouseover" && event.target.id == "myLink") {
        color = "yellow";
    } else if (event.type == "mouseout" && event.target.id == "myLink") {
        color = "white";
    }
    document.body.style.backgroundColor = color;
}
Btn1.addEventListener("click", changeColor);
Btn2.addEventListener("dblclick", changeColor);
Btn3.addEventListener("mousedown", changeColor);
Btn3.addEventListener("mouseup", changeColor);
myLink.addEventListener("mouseover", changeColor);
myLink.addEventListener("mouseout", changeColor);
