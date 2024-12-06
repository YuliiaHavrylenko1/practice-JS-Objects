// Ось кілька задач для практики роботи з колекцією значень властивостей об’єктів для початківців:

// Задача 1 (легка)

// Напишіть функцію getAllNames, яка приймає масив об’єктів users і повертає масив усіх імен користувачів, зібраних із властивості name кожного об’єкта.

//  function getAllNames(users) {
// return  users.map(user => user.name); за доп методу map
// //     let getAll = []; за доп циклу for...of
// //     for (const user of users) {
// //         getAll.push(user.name);
// //     }
// //     return getAll;
//  }




// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 }
// ];

// console.log(getAllNames(users)); // ["Alice", "Bob", "Charlie"]

// Задача 2 (легка)

// Створіть функцію getAllPrices, яка приймає масив об’єктів products і повертає масив цін усіх продуктів, зібраних із властивості price кожного об’єкта.

// function getAllPrices(products) {
//     let getAll = [];
//     for (const product of products) {
//         getAll.push(product.price);
//     }
//     return getAll;
// }

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 }
// ];

// console.log(getAllPrices(products)); // [1000, 500, 300]

// function getAllPrices(products) {
//     return products.map(product => product.price);
// }

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 }
// ];

// console.log(getAllPrices(products)); // [1000, 500, 300]

// Задача 3 (середня)

// Напишіть функцію getAgesAbove, яка приймає масив об’єктів people і число ageLimit. Функція повинна повертати масив віків, які більші за ageLimit, зібраних із властивості age кожного об’єкта.

// function getAgesAbove(people, ageLimit) {
//     let getAges = [];

//     for (const elem of people) {
//         if (elem.age > ageLimit) {
//             getAges.push(elem.age);
//         }
//     }
//     return getAges;
// }

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 20 },
//   { name: "David", age: 40 }
// ];

// console.log(getAgesAbove(people, 25)); // [30, 40]

// Задача 4 (середня)

// Створіть функцію getTitlesByAuthor, яка приймає масив об’єктів books і рядок author. Функція повинна повертати масив назв книг, зібраних із властивості title, які були написані вказаним автором.

// function getTitlesByAuthor(books, author) {
//     let getTitle = [];

//     for (const elem of books) {
//         if (elem.title <= author) {
//             getTitle.push(elem.title);
//         }
//     }
//     return getTitle;
// }

// const books = [
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//   { title: "1984", author: "George Orwell" },
//   { title: "To Kill a Mockingbird", author: "Harper Lee" },
//   { title: "Animal Farm", author: "George Orwell" }
// ];

// console.log(getTitlesByAuthor(books, "George Orwell")); // ["1984", "Animal Farm"]

// Задача 5 (складна)

// Напишіть функцію getUniqueCategories, яка приймає масив об’єктів products, де кожен об’єкт містить властивість category. Функція повинна повертати масив унікальних категорій без повторень.

// function getUniqueCategories(products) {
//     let getUnique = [];
//     for (const product of products) {
//         if (!getUnique.includes(product.category)) {
//             getUnique.push(product.category);
//         }
//     }
//     return getUnique;
// }

// const products = [
//   { name: "Laptop", category: "Electronics" },
//   { name: "Phone", category: "Electronics" },
//   { name: "Banana", category: "Food" },
//   { name: "Apple", category: "Food" }
// ];

// console.log(getUniqueCategories(products)); // ["Electronics", "Food"]

// Задача 6 (складна)

// Створіть функцію sumPropertyValues, яка приймає масив об’єктів items і рядок property. Функція повинна повертати суму всіх значень властивості property, які є числами. Якщо значення властивості не є числом, ігноруйте його.

// function sumPropertyValues(items, property) {
//     let total = 0;
//     for (const item of items) {
//         if (typeof item[property] === "number")
//             total += item[property];

//     }
//     return total;
// };

// const items = [
//   { name: "Apple", price: 2, quantity: 10 },
//   { name: "Banana", price: 1, quantity: 5 },
//   { name: "Orange", price: 1.5, quantity: 8 }
// ];

// console.log(sumPropertyValues(items, "price")); // 4.5
// console.log(sumPropertyValues(items, "quantity")); // 23

// Ці задачі допоможуть вам розібратися з роботою із колекціями значень властивостей у масиві об’єктів і навчать обробляти масиви даних для різних завдань.