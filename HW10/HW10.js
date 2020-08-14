// Task 1
/* Допишіть код використовуючи деструктурування, щоб в 
консолі браузера з'явилися рядки, які написані в коментарях.
*/
console.log("---This is Task 1---");

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

// Task 2
/* Допишіть код використовуючи деструктурування, щоб в консолі браузера 
з'явилися рядки, які написані в коментарях.
*/
console.log("---This is Task 2---");

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let {names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4]} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// Task 3
/*
Напишіть функцію mul(), яка приймає будь-яку кількість параметрів
 різного типу і повертає добуток параметрів типу Number.
	Якщо параметри типу Number відсутні, повертає число 0.
function mul() {
   // Ваш код
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, " str", false, true)); // 0
Не можна використовувати властивість arguments, але в функцію 
mul() можна додати один параметр.
*/
console.log("---This is Task 3---");

function mul(...args) {
    let nums = args.filter(arg => typeof arg == "number")
    if (nums.length == 0) {
        return 0;
    }
    let multResult = 1;
    for (let i = 0; i < nums.length; i++) {
        multResult *= nums[i];
    }
    return multResult;
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, " str", false, true)); // 0

// Task 4
//Змініть код використовуючи стрілочні функції, щоб в коді не 
//використовувалися методи bind().
console.log("---This is Task 4---")

let server = {
    data: 0,
    convertToString: function (callback) {
        callback(() => this.data + "")
    }
};
let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {
        return (callback => {
            this.result = callback()
        })
    }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

// Task 5
/*
5. Напишіть функцію mapBuilder (keysArray, valuesArrays), 
яка приймає два масиви однакової довжини. Використовуючи ці 
масиви, функція повинна створювати об'єкт типу Map, 
ключами якого є значення з першого масиву, а значеннями 
Map - значення з другого масиву. Після цього функція 
повертає даний об'єкт Map.
Приклади використання функції:
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
	console.log(map.get(2)); // "span"
*/
console.log("---This is Task 5---");

function mapBuilder (keysArray, valuesArray) {
    let newMap = new Map()
    for (let i = 0; i < keysArray.length; i++) {
        newMap.set(keysArray[i], valuesArray[i])
    }
    return newMap;
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"