// Task 4
function removeName() {
    let selectedName = document.getElementById("names")
    selectedName.remove(selectedName.selectedIndex);
}
Btn.addEventListener("click", removeName);

// Task 5
function pressBtn(event) {
    let message = document.createElement("p");
    if (event.type == "click") {
        message.innerHTML = "I was pressed";
    } else if (event.type == "mouseover") {
        message.innerHTML = "Mouse on me!";
    } else if (event.type == "mouseout") {
        message.innerHTML = "Mouse is not on me!"
} 
let messages = document.getElementById("messages")
messages.appendChild(message)
}
liveBtn.addEventListener("click", pressBtn)
liveBtn.addEventListener("mouseover", pressBtn)
liveBtn.addEventListener("mouseout", pressBtn)

// Task 6
function pageWidthHeight() {
    let text = "";
    text += "<p>Width: " + window.innerWidth + "</p>";
    text += "<p>Height: " + window.innerHeight + "</p>";
    document.getElementById("widthHeight").innerHTML = text;
}

window.addEventListener("resize", pageWidthHeight)
window.addEventListener("load", pageWidthHeight)

// Task 7
const CITIES = {
    "usa": ["New York", "Washington", "Boston", "Chicago"],
    "ger": ["Berlin", "Munich"],
    "ukr": ["Lviv", "Kyiv", "Ternopil"]
}

function addCities() {
    let cityElement = document.getElementById("cities")
    let countryElement = document.getElementById("country");
    let cities = CITIES[countryElement.value]
    cityElement.innerHTML = "";
    for (let i=0; i<cities.length; i++) {
        let option = document.createElement("option");
        option.text = cities[i];
        cityElement.add(option);
    }
}
function displaySelection() {
    let cityElement = document.getElementById("cities")
    let countryElement = document.getElementById("country");
    let textCountry = countryElement.options[countryElement.selectedIndex].text;
    let textCity = cityElement.options[cityElement.selectedIndex].text;
    let output = document.getElementById("countryCity");
    output.innerText = `${textCountry}, ${textCity}`;
}

country.addEventListener("change", addCities);
cities.addEventListener("change", displaySelection);
country.addEventListener("change", displaySelection);

