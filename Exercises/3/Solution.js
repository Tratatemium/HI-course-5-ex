function printArray(arr) {
    console.log('==========================\n');

    if (!Array.isArray(arr)) {
        console.log('Not an array');
        return;
    }

    const isArrayOfObjects = arr.every(
        item => typeof item === 'object' && item !== null && !Array.isArray(item),
    );

    if (isArrayOfObjects) {
        const result = arr
            .map(obj => '  ' + JSON.stringify(obj).replace(/:/g, ': ').replace(/,/g, ', '))
            .join(',\n');

        console.log(`[\n${result}\n]\n`);
    } else {
        console.log(arr);
        console.log();
    }
}

// Exercise: Double the Numbers
// Given an array of numbers, use `map()` to create a new array where each number is doubled.

let numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
printArray(doubledNumbers);

// Exercise: Extract Property Values
// Given an array of user objects, use `map()` to create an array of just their names.

let users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
];
const names = users.map(user => user.name);
printArray(names);

// Exercise: Transform Objects
// Given an array of products, use `map()` to create an array of strings in the format "Product: $Price".

let products = [
    { name: 'Laptop', price: 999 },
    { name: 'Phone', price: 699 },
    { name: 'Tablet', price: 499 },
];
const pricelist = products.map(product => `${product.name}: ${product.price}`);
printArray(pricelist);

// Exercise: Filter Even Numbers
// Given an array of numbers, use `filter()` to create a new array containing only the even numbers.

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = numbers.filter(num => num % 2 === 0);
printArray(even);

// Filter by Property
// Given an array of products, use `filter()` to get only the products that are in stock.

products = [
    { name: 'Laptop', price: 999, inStock: true },
    { name: 'Phone', price: 699, inStock: false },
    { name: 'Tablet', price: 499, inStock: true },
    { name: 'Watch', price: 299, inStock: false },
];
const inStock = products.filter(product => product.inStock);
printArray(inStock);

// Filter with Multiple Conditions
// Given an array of users, use `filter()` to get users who are:
// - Over 18 years old AND
// - Have an active account

users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 17, active: true },
    { name: 'Charlie', age: 30, active: false },
    { name: 'Diana', age: 22, active: true },
];
const filtered = users.filter(user => user.age >= 18 && user.active);
printArray(filtered);

// Сheck Membership
// Given an array of allowed roles, check if a user's role is allowed.

const allowedRoles = ['admin', 'moderator', 'editor'];
const userRole = 'moderator';
const isUserAllowed = allowedRoles.includes(userRole);
console.log('==========================\n');
console.log(`${userRole} ${isUserAllowed ? 'allowed' : 'not allowed'}\n`);

// Position
// Given an array of colors, find the position of 'blue'.

const colors = ['red', 'green', 'blue', 'yellow'];
const colorOfInterest = 'blue';
const position = colors.indexOf(colorOfInterest);
const output =
    position > 0 ? `${colorOfInterest} position is ${position}\n` : `there is no color ${colorOfInterest}\n`;
console.log('==========================\n');
console.log(output);

// Sum of Numbers
// Given an array of numbers, use `reduce()` to calculate the sum.

numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((sum, num) => sum + num, 0);
console.log('==========================\n');
console.log(`array sum = ${sum}\n`);

// Find Maximum Value
// Given an array of numbers, use `reduce()` to find the maximum value.

numbers = [23, 45, 12, 67, 34, 89, 21];
const max = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
console.log('==========================\n');
console.log(`array max = ${max}\n`);

// Count Occurrences
// Given an array of strings, use `reduce()` to count how many times each string appears.

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const freq = fruits.reduce((count, fruit) => {
    count[fruit] = (count[fruit] || 0) + 1;
    return count;
}, {});
console.log('==========================\n');
console.log(JSON.stringify(freq).replace(/:/g, ': ').replace(/,/g, ', ') + '\n');

// Group by Property
// Given an array of people, use `reduce()` to group them by their city.

const people = [
    { name: 'Alice', city: 'New York' },
    { name: 'Bob', city: 'London' },
    { name: 'Charlie', city: 'New York' },
    { name: 'Diana', city: 'London' },
];

const peopleGroupedByCity = people.reduce((group, person) => {
    group[person.city] = group[person.city] || [];
    group[person.city].push(person.name);
    return group;
}, {});
console.log('==========================\n');
console.log(JSON.stringify(peopleGroupedByCity).replace(/:/g, ': ').replace(/,/g, ', ') + '\n');

// Get Last N Elements
// Write a function that returns the last n elements of an array using `slice()`.

function getLastN(arr, n) {
    return arr.slice(-n);
}

console.log('==========================\n');
console.log(getLastN([1, 2, 3, 4, 5], 3)); // [3, 4, 5]
console.log(getLastN([1, 2, 3, 4, 5], 2)); // [4, 5]
console.log();

// Remove and Insert
// Use `splice()` to remove 2 elements starting at index 1 and replace them with 'x' and 'y'.

const letters = ['a', 'b', 'c', 'd', 'e'];
letters.splice(1, 2, 'x', 'y');
printArray(letters);


// Chain filter and map
// Given an array of numbers, get the squares of all even numbers.

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squareOfEven = numbers.filter(num => num % 2 === 0).map(num => num * num);
printArray(squareOfEven);


// Complete Data Pipeline
// Given an array of orders, calculate the total revenue from completed orders only.

// Requirements:
// 1. Filter to only completed orders
// 2. Extract the total price from each order
// 3. Sum up all the prices

const orders = [
    { id: 1, status: 'completed', total: 100 },
    { id: 2, status: 'pending', total: 200 },
    { id: 3, status: 'completed', total: 150 },
    { id: 4, status: 'cancelled', total: 75 },
    { id: 5, status: 'completed', total: 300 },
];
const revenue = orders
    .filter(order => order.status === 'completed')
    .map(order => order.total)
    .reduce((sum, total) => sum + total, 0);
console.log('==========================\n');
console.log(`daily revenue = ${revenue}\n`);

// Expected output: 550