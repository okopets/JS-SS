// Task 1.
console.log("--Task 1--");
let num = [2,3,4,5];
let mult = 1;

for (n = 0; n < num.length; n++) {
    mult *= num[n];
}
console.log(mult);

// while
while (n < num.length) {
    mult *= num[n];
}
console.log(mult);

// Task 2. CHeck if the numbers from 0 to 15 are even or odd numbers.
console.log("--Task 2--");
for (i = 0; i <= 15; i++) {
    if (i %2 == 0) {
        console.log(`${i} is even.`);
    }
    else {
        console.log(`${i} is odd.`)
    }
}

// Task 3. Function for generating a random integer numbers in range 1-500.
console.log("--Task 3--");
function randArray(k) {
    result = [];
    for (i = 0; i < k; i++) {
        min = 1;
        max = 500; 
        result.push(Math.floor(Math.random() * (max-min +1)) + min);
    }
    console.log(result)
}
randArray(5)

// Task 4. Function for raising integer numbers to a degree.
console.log("--Task 4--");
let a = parseFloat(prompt("Enter an integer number:"));
let b = parseFloat(prompt("Enter the degree to which number should be raised:"));

function raiseToDegree(a, b) {
    if (Number.isInteger(a) && (Number.isInteger(b))) {
        result = Math.pow(a, b);
        //result = a ** b; // another solution
        alert(`${a} to degree of ${b} is: ${result}`);
    } else {
        alert('Not a valid input');
    }
}

raiseToDegree(a, b);

// Task 5. Function with any number of argument for returning the min value.
console.log("--Task 5--");
function findMin( ...args) {
    return Math.min(...args)
} 

/*
//another solution
function findMin(){
    let min = +Infinity;
    for (let n = 0; n < arguments.length; n++) {
        if (arguments[n] < min) {
            min = arguments[n]
        }
    } 
    return min;
 }
 */
console.log(findMin(12, 14, 4, -4, 0.2));

// Taks 6. Function for checking the unique elements in the array.
console.log("--Task 6--");
function findUnique(arr) {
    let mySet = new Set(arr);
    if (mySet.size == arr.length) {
        console.log(true);
    } else {
        console.log(false);
    }
    console.log(mySet);
    console.log(arr);
}

findUnique([1, 2, 3, 5, 3]);
findUnique([1, 2, 3, 5, 11]);

// Task 7. Function for returning the last elements of the array.
console.log("--Task 7--");
function lastElem (array, num) {
    if (num == 0 || num == 1 || num == undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(array.length - num)
    }
}
console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5], 2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]

// Task 8. Function for capitalizing the first letter of every word in the string
console.log("--Task 8--");
function capitalStr (str) {
    let words = str.split(" ")
    function capitalizeWord (word) {
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    }
    for (let i=0; i < words.length; i++) {
        words[i] = capitalizeWord (words[i])
    } 
    return words.join(" ");
}
console.log(capitalStr('i love java script'))