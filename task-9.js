// Ось кілька задач для практики роботи з масивом об’єктів за допомогою циклу for...of для початківців:

// Задача 1 (легка)

// Напишіть функцію printNames, яка приймає масив об’єктів users, де кожен об’єкт містить властивість name. Функція повинна вивести всі імена користувачів в консолі. Використайте цикл for...of.

// function printNames(users) {
//     for (const user of users) {
//         console.log(user.name);
//   }
// }

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 }
// ];

// printNames(users);
// // Вивід:
// // Alice
// // Bob
// // Charlie

// Задача 2 (легка)

// Створіть функцію sumPrices, яка приймає масив об’єктів products, де кожен об’єкт містить властивість price. Функція повинна повертати загальну суму цін усіх продуктів. Використайте цикл for...of.

// function sumPrices(products) {
//     let price = 0;
//     for (const product of products) {
//         price += product.price;
//     }
//     return price;
// }

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 }
// ];

// console.log(sumPrices(products)); // 1800

// Задача 3 (середня)

// Напишіть функцію findUserByName, яка приймає масив об’єктів users і рядок name. Функція повинна повертати об’єкт користувача з відповідним ім’ям або null, якщо користувач не знайдений. Використайте цикл for...of.

// function findUserByName(users, name) {
//     for (const user of users) {
//         if (user.name === name) {
//             return user;
//       }
//     }
//     return null;
// }

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 }
// ];

// console.log(findUserByName(users, "Bob")); // { name: "Bob", age: 30 }
// console.log(findUserByName(users, "Eve")); // null

// Задача 4 (середня)

// Створіть функцію getAdults, яка приймає масив об’єктів users, де кожен об’єкт містить властивості name і age. Функція повинна повертати масив об’єктів користувачів, яким 18 років або більше. Використайте цикл for...of.

// function getAdults(users) {
//     let adults = [];
//     for (const user of users) {
//         if (user.age >= 18) {
//             adults.push(user);
//       }
//     }
//     return adults;
// }

// const users = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 15 },
//   { name: "David", age: 19 }
// ];

// console.log(getAdults(users)); 
// // [{ name: "Bob", age: 22 }, { name: "David", age: 19 }]

// Задача 5 (складна)

// Напишіть функцію countByCategory, яка приймає масив об’єктів products, де кожен об’єкт містить властивості name і category. Функція повинна повертати об’єкт, який містить кількість продуктів у кожній категорії. Використайте цикл for...of.

// function countByCategory(products) {
//     let countOfProducts = {};
//     for (let product of products) {
//         if (countOfProducts[product.category]) {
//             countOfProducts[product.category]++; 
//         } else {
//             countOfProducts[product.category] = 1;
//       }
//     }
//     return countOfProducts;
// }

// const products = [
//   { name: "Laptop", category: "Electronics" },
//   { name: "Phone", category: "Electronics" },
//   { name: "Banana", category: "Food" },
//   { name: "Apple", category: "Food" }
// ];

// console.log(countByCategory(products)); 
// // { Electronics: 2, Food: 2 }

// Задача 6 (складна)

// Створіть функцію getTotalWeight, яка приймає масив об’єктів items, де кожен об’єкт містить властивості name, weight і quantity. Функція повинна повертати загальну вагу всіх елементів у масиві, враховуючи їх кількість. Використайте цикл for...of.

// function getTotalWeight(items) {
//     let total = 0;
//     for (const item of items) {
//         total += item.weight * item.quantity;
//     }
//     return total;
// }

// const items = [
//   { name: "Apple", weight: 0.2, quantity: 10 },
//   { name: "Banana", weight: 0.15, quantity: 8 },
//   { name: "Orange", weight: 0.3, quantity: 5 }
// ];

// console.log(getTotalWeight(items)); // 4.4 (0.2*10 + 0.15*8 + 0.3*5)

// Ці задачі допоможуть вам практикуватися з використанням циклу for...of для роботи з масивом об’єктів, а також навчитися обробляти дані та виконувати різні обчислення.