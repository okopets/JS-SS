//JS-Homework1

//Task 1. An inline script inside the <script> element in Html document (See index.html)

//Task 2. An external script using <script> element with my surname in the console.
console.log('-- This is Task 2. --');
console.log('Oksana Kopets');

//Task 3. Declaring two variables and copying values to the first variable.
console.log('-- This is Task 3. --');
let var1 = 25;
let var2 = 100;
console.log('The value of var1 is ' + var1);
console.log('The value of var2 is ' + var2);
var2 = var1;
console.log('The new value of var1 is ' + var1);
console.log('The new value of var2 is ' + var2);

//Task 4. Creating an object with 5 properties (with different data types).
console.log('-- This is Task 4. --');
let user = {
    'name': 'John Doe',
    'age': 30,
    'isActive': true,
    'email': null
}
user.country;
console.log(user);
console.log(typeof country);

//Task 5. Using confirm() method to verify that user is an adult.
console.log('-- This is Task 5: confirm() method. --');
let isAdult = confirm('Are you an adult?');
console.log(isAdult);

//Task 6. Declare variables with different data types.
console.log('-- This is Task 6. --');
let myName = 'Oksana';
let mySurname = 'Kopets';
let group = 'JS';
let year = 1985;
let isMarried = true;
console.log(`This is a ${typeof year} variable type: ${year}`);
console.log(`This is a ${typeof isMarried} variable type: ${isMarried}`);
console.log(`This is a ${typeof myName} variable type: '${myName}'`);
console.log(`This is a ${typeof mySurname} variable type: '${mySurname}'`);
console.log(`This is a ${typeof group} variable type: '${group}'`);

let nullVariable = null;
let undefVariable;
console.log(typeof nullVariable);
console.log(typeof undefVariable);

//Task 7. Using prompt() method ask a user about login, email and password and display a dialog with the corresponding messages.
console.log('-- This is Task 7: prompt() method. --');
let login = prompt("What's your login?", "User");
let email = prompt("What's your email?", "useremail@gmail.com");
let password = prompt("What's your password?", "qwerty");
alert(`Dear ${login}, your email is: ${email}, your password is: ${password}.`);

//Task 8. Number of seconds in hour, day and month.
console.log('-- This is Task 8. --');
let minute = 60;
let hour = minute * 60;
let day = hour * 24;
let month30 = day * 30;
let month31 = day * 31;
let monthFeb = day * 28;
let monthFebLeap = day * 29;
console.log(`An hour has ${hour} seconds.`);
console.log(`A day has ${day} seconds.`);
console.log(`A month with 30 days has ${month30} seconds.`);
console.log(`A month with 31 days has ${month31} seconds.`);
console.log(`A February has ${monthFeb} seconds.`);
console.log(`A February of a leap year has ${month30} seconds.`);