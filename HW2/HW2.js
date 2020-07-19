// Task1.1
let x = 1;
let y = 2;

let res1 = String(x) + y; 
// let res1 = " " + x + y; //another solution
console.log(res1); // "12"
console.log(typeof res1); // "string"

// Task 1.2
let res2 =  Boolean(x) + String(y); 
//let res2 = (!!(x)) + y + ""; //another solution
console.log(res2); // "true2"
console.log(typeof res2); // "string"

// Task 1.3
let res3 = Boolean(x + y);
// let res3 = !!(x + y); // another solution
console.log(res3); // true
console.log(typeof res3); // "boolean"

// Task 1.4
let res4 = parseInt(Boolean(x + y))
// let res4 = Math.sqrt(x-y) // another solution
// let res4 = (x+"abc")/y // another solution
// let res4 = parseFloat(Boolean(x)); // another solution
console.log(res4); // NaN
console.log(typeof res4); // "number"

// Task 2.a and 2.b
let num = prompt("Enter some even positive number or number divisible by 7.");
if ((num % 2 == 0) && (num % 7 == 0) && num > 0) {
    console.log(`${num} is even, positive and divisible by 7.`)
} else if ((num%2 == 0) && num > 0) {
    console.log(`${num} is even and positive.`)
} else if (num % 7 == 0 && num != 0) {
    console.log(`${num} is divisible by 7.`)
} else {
    console.log(`${num} is not an even positive number or number divisible by 7.`)
}

// Task 3. Array
let array1 = []; // an empty array created
// let array1 = new Array(); // another solution
array1[0] = 25; //add as a first element any number
array1[1] = "Lviv"; // any string
array1[2] = true; // any logical value
array1[3] = null; // null
console.log(array1.length); //length of array
array1[4] = prompt("Enter some value."); //value entered bu a user is added as 5th element
console.log(array1[4]);
array1.shift(); //first element is deleted
console.log(array1);

// Task 4. Joining together all elements of an array using "*"
let cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities.join("*"));  //"Rome*Lviv*Warsaw"

// Task 5.
let isAdult = prompt("Enter your age:");
if (isAdult >= 18) {
    alert("You are an adult.");
} else if (isAdult <= 10) {
    alert("You are too young.");
}

// Task 6. The area of a triangle, check if the sides are positive numbers, check if the triangle is right-angled
let side1 = parseInt(prompt("Enter a length of the first side of a triangle:"));
let side2 = parseInt(prompt("Enter a length of the second side of a triangle:"));
let side3 = parseInt(prompt("Enter a length of the third side of a triangle:"));
console.log(side1, side2, side3);

// check if the values are positive
if (side1 > 0 && side2 > 0 && side3 > 0) {
    //Check if the triangle is valid - The sum of two sides must be larger than the third
    //Test inputs: 7, 10, 5. Output: valid. Test inputs: 1, 10, 12. Output: invalid.
    if ((side1 + side2) > side3 && (side1 + side3) > side2 && (side2 + side3) > side1) {
        const perimeter = (side1 + side2 + side3) / 2;
        console.log(`The perimeter of the triangle is: ${perimeter}`);
        
        const triangleArea = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
        console.log(`The area of the triangle is: ${triangleArea.toFixed(3)}`);
        //check if triangle is right-angled (Pythagoras' theorem) 
        //Valid test inputs: 3,4,5; 5,12,13; Invalid test inputs: 5,6,8; 5,9,10. 
        if ((side1 * side1) + (side2 * side2) == (side3 * side3)) {
            console.log('This is a right-angled triangle.');
        } else {
            console.log('This is not a right-angled triangle.')
        }
    } else {
        console.log('Incorrect data. The sum of two sides must be larger than the third.')
    }
} else {
    console.log('Incorrect data.')
}

// Task 7. Provide a greeting message corresponding to the current time.
// get current time
let today = new Date();
// For testing:
// let today = new Date(2020, 06, 18, 23, 0, 0)
console.log(today)
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let h = today.getHours();
// conditional statements - solution1

if (h == 23 || h < 5) {
    console.log(time);
    alert("Good night!");
} else if (h >= 5 && h < 11) {
    console.log(time);
    alert("Good morning!");
} else if (h >= 11 && h < 17) {
    console.log(time);
    alert("Good afternoon!");
} else {
    console.log(time);
    alert("Good evening!");
}

// conditional statements - solution2
/*
switch (h) {
    case 23:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        console.log(time);
        alert("Good night!");
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log(time);
        alert("Good morning!");
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        console.log(time);
        alert("Good afternoon!");
        break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
        console.log(time);
        alert("Good evening!");
        break;
}
*/