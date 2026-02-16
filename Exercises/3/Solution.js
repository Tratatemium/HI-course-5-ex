function printArray(arr) {
    console.log('==========================\n');

    if (!Array.isArray(arr)) {
        console.log("Not an array");
        return;
    }

    const isArrayOfObjects = arr.every(
        item => typeof item === "object" && item !== null && !Array.isArray(item)
    );

    if (isArrayOfObjects) {
        const result = arr
            .map(obj => "  " + JSON.stringify(obj).replace(/:/g, ": ").replace(/,/g, ", "))
            .join(",\n");

        console.log(`[\n${result}\n]`);
    } else {
        console.log(`[ ${arr.join(", ")} ]`);
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

// Your code here
// Expected output: [{ name: 'Alice', ... }, { name: 'Diana', ... }]
