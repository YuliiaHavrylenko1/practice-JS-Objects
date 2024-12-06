// // Ось кілька задач для практики з використанням методу Object.values() для початківців без рішень:

// // Задача 1 (легка)

// // Напишіть функцію getValues, яка приймає об’єкт obj і повертає масив всіх значень цього об’єкта, використовуючи Object.values.

// // function getValues(obj) {
// //     return Object.values(obj);
// // }

// // const user = { name: "Alice", age: 25, city: "Kyiv" };
// // console.log(getValues(user)); // ["Alice", 25, "Kyiv"]

// // Задача 2 (легка)

// // Створіть функцію countNumberValues, яка приймає об’єкт obj і повертає кількість значень, які є числами. Використайте Object.values() для отримання масиву значень, а потім перевірте тип кожного елемента.

// // function countNumberValues(obj) {
// //     let count = 0;
// //     const values = Object.values(obj);

// //     for (const value of values) {
// //         if (typeof value === "number") {
// //             count++;
// //         }
// //     }
// //     return count;
// // }

// // const data = { name: "Alice", age: 25, height: 170, isStudent: false };
// // console.log(countNumberValues(data)); // 2 (age і height)

// // Задача 3 (середня)

// // Напишіть функцію sumNumericValues, яка приймає об’єкт obj і повертає суму всіх числових значень у цьому об’єкті. Використайте Object.values() для отримання масиву значень і обчисліть суму чисел.

// // function sumNumericValues(obj) {
// //     let total = 0;
// //     const values = Object.values(obj);
// //     for (const value of values) {
// //         if (typeof value === "number") {
// //             total += value;
// //         }
        
// //     }
// //     return total;
// // }

// // const stats = { apples: 10, bananas: 5, oranges: 20, city: "Kyiv" };
// // console.log(sumNumericValues(stats)); // 35

// // Задача 4 (середня)

// // Створіть функцію getStringValues, яка приймає об’єкт obj і повертає масив, що містить лише ті значення, які є рядками. Використайте Object.values() для отримання значень і filter для вибірки рядків.

// // function getStringValues(obj) {
// //     // let stringValues = [];
// //     // const values = Object.values(obj);

// //     // for (const value of values) {
// //     //     if (typeof value === "string") {
// //     //         stringValues.push(value);
// //     //     }
// //     // }
// //     // return stringValues;
// //     const values = Object.values(obj);
// //     return values.filter(value => typeof value === "string");
// // }

// // const person = { name: "Alice", age: 25, city: "Kyiv", occupation: "developer" };
// // console.log(getStringValues(person)); // ["Alice", "Kyiv", "developer"]

// // Задача 5 (складна)

// // Напишіть функцію capitalizeStringValues, яка приймає об’єкт obj і повертає новий об’єкт, де всі значення, які є рядками, перетворені у верхній регістр. Використайте Object.keys() для отримання ключів та Object.values() для роботи зі значеннями.

// function capitalizeStringValues(obj) {
//     const keys = Object.keys(obj);
//     for (key of keys) {
//         if (typeof obj[key] === "string") {
//             obj[key] = obj[key].toUpperCase();
//         }
//     }
//     return obj;
// }

// const user = { name: "Alice", age: 25, city: "Kyiv" };
// console.log(capitalizeStringValues(user)); 
// // { name: "ALICE", age: 25, city: "KYIV" }

// // Задача 6 (складна)

// // Створіть функцію countOccurrences, яка приймає об’єкт obj і значення value. Функція повинна повертати кількість разів, коли це значення зустрічається в об’єкті. Використайте Object.values() для отримання значень та метод filter для підрахунку.

// function countOccurrences(obj, value) {
//     const values = Object.values(obj);
//     return values.filter(values => values === value).length;
// }

// const inventory = { apples: 10, bananas: 5, oranges: 10, grapes: 5 };
// console.log(countOccurrences(inventory, 10)); // 2
// console.log(countOccurrences(inventory, 5)); // 2

// // Ці задачі допоможуть вам освоїти метод Object.values() і зрозуміти, як використовувати його для різних операцій з даними всередині об’єктів.