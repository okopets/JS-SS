// Task 1
/*1. Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
Наприклад для об’єкта
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};
Результат має бути 3.
propsCount(mentor);  // 3
*/
console.log('--- Task 1 ---');

const mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

function propsCount(currentObject) {
    const count = Object.keys(currentObject).length;
    console.log(count); 
}
propsCount(mentor);

// Task 2
/* 2. Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj), яка приймає даний об’єкт 
і виводить список його властивостей записаних в масив. Виведіть також масив значень властивостей об’єкта.
*/
console.log('--- Task 2 ---');

const employee = {
    firstName: "John",
    lastName: "Doe",
    position: "developer",
    age: 33,
    experience: 3
}
function showProps(obj) {
    return Object.keys(obj);
}
console.log(showProps(employee));
console.log(Object.values(employee));

// Task 3
/* 
3. Створіть клас Person, в якого конструктор приймає параметри name і surname,
 а також міститься метод showFullName(), який виводить ім’я і прізвище особи.
Від класу Person наслідується клас Student, конструктор якого крім name і surname, 
приймає параметр year (рік вступу до університету).
В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише 
ім’я, прізвище, але і по-батькові (midleName) студента.
Також в класі Student необхідно реалізувати метод showCourse(), 
який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як 
різниця поточного року (визначити самостійно) і року вступу до ВУЗу year.
	Приклад результату:
let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4
*/
console.log('--- Task 3 ---');

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    } 
    showFullName() {
        alert (this.name + ' ' + this.surname);
    }
}
class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
    showFullName(middleName) {
        this.middleName = middleName;
        const fullName = this.surname + ' ' + this.name + ' ' + this.middleName;
        alert(fullName);
        return fullName;
    }
    showCourse() {
        const date = new Date();
        const currentYear = date.getFullYear();
        const course = currentYear - this.year;
        return course;
    }
}
const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4

// Task 4
/* 
4*. Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: 
fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів).
    1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. 
    Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays.
    2) додати приватне поле experience і присвоїти йому значення 1.2 і 
    використовувати його як додатковий множник при визначенні зарплати
    – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
    3) додати гетери і сетери для поля experience. 
    Встановити значення experience = 1.5 і вивести його на екран.
	4) Вивести значення зарплати з новим experience.
    5) Створити кілька екземплярів класу (працівників) з різними зарплатами. 
    Посортувати зарплату працівників із найбільшим experience по зростанню і 
    вивести результат в форматі:   worker_fullName: salary_value ………..
*/
console.log('--- Task 4 ---');

class Worker {
    #experience = 1.2;
    get experience() {
        return this.#experience;
    }
    set experience(value) {
        this.#experience = value;
    }
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    calcSalary() {
        return this.dayRate * this.workingDays;
    }
    showSalary() {
        const salary = this.calcSalary();
        console.log(`${this.fullName} salary: ${salary}`);
    }
    calcSalaryWithExperience() {
        const salaryWithExperience = this.calcSalary() * this.#experience;
        return salaryWithExperience;
    }
    showSalaryWithExperience() {
        console.log(`${this.fullName} salary: ${this.calcSalaryWithExperience()}`)
    }
    static sortedSalaries(workers) {
        workers.sort(function(workerA, workerB) {
            return workerA.calcSalaryWithExperience() - workerB.calcSalaryWithExperience();
        })
        console.log('Sorted salaries:');
        for (let i = 0; i < workers.length; i++) {
            console.log(`${workers[i].fullName}: ${workers[i].calcSalaryWithExperience()}`)
        }
    }
}

const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.experience);
worker1.showSalaryWithExperience();
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
worker1.showSalaryWithExperience();

const worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.experience);
worker2.showSalaryWithExperience();
worker2.experience = 1.5;
console.log("New experience: " + worker2.experience);
worker2.showSalaryWithExperience();

const worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.experience);
worker3.showSalaryWithExperience();
worker3.experience = 1.5;
console.log("New experience: " + worker3.experience);
worker3.showSalaryWithExperience();

const workers = [worker1, worker2, worker3];
Worker.sortedSalaries(workers);
/*
Output example:
John Johnson
John Johnson salary: 460
New experience: 1.2
John Johnson salary: 552
New experience: 1.5
John Johnson salary: 690

Tom Tomson
Tom Tomson salary: 1056
……..

John Johnson: 690
Andy Ander: 1000.5
Tom Tomson: 1584
*/

//Task 5.
/* 
5. Створіть батьківський клас GeometricFigure, який має порожній метод для 
визначення площі getArea() та метод toString() для виведення назви класу.
Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу 
GeometricFigure. Кожен з дочірніх класів має свою реалізацію методу getArea(), 
для визначення площі фігури. В конструкторах дочірніх класів передбачити властивості 
необхідні для визначення площі фігури, наприклад для кола - радіус r.
Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив об’єктів
    дочірніх класів figures, перевірятиме чи об’єкт належить батьківському класу
    з урахуванням наслідування, виводитиме назву створеного об’єкту відповідної 
    фігури, розраховану площу фігури та сумарну площу всіх фігур. 
    Для реалізації функції можете використати метод reduce().
    
class GeometricFigure {
    getArea() {
return 0;
}
toString() {
     return Object.getPrototypeOf(this).constructor.name;
}
     }
		Your code . . .
	const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
    	console.log(handleFigures(figures));
Приклад результату:
	Geometric figure: Triangle - area: 10
Geometric figure: Square - area: 49
Geometric figure: Circle - area: 78.53981633974483
137.53981633974485 // total area
*/
console.log('--- Task 5 ---');

class GeometricFigures {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigures {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    getArea() {
        return (this.base * this.height) / 2;
    }
}

class Square extends GeometricFigures {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}

class Circle extends GeometricFigures {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
function handleFigures(figures) {
    let totalFigArea = 0;
    for (let i = 0; i < figures.length; i++) {
        const figure = figures[i];
        if (figure instanceof GeometricFigures) {
            console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
            totalFigArea += figure.getArea();
        }
    }
    return totalFigArea;
 }

const t = new Triangle(4,5);
const s = new Square(7);
const c = new Circle(5);

const figures = [t, s, c];
console.log(handleFigures(figures));
