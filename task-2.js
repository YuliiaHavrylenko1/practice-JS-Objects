// Ось кілька задач для практики з методами та властивостями об’єктів для початківців:

// Задача 1 (легка)

// Напишіть функцію getProperty, яка приймає об’єкт obj і назву властивості propName. Функція повинна повернути значення цієї властивості. Якщо властивість не знайдена, поверніть "Property not found".

// const user = {
//   name: "Alice",
//   age: 25
// };

// function getProperty(obj, propName) {
//     if (propName in obj) {
//         return obj[propName];
//     } else {
//         return "Property not found";
//     }
// }

// console.log(getProperty(user, "name")); // "Alice"
// console.log(getProperty(user, "age")); // 25
// console.log(getProperty(user, "email")); // "Property not found"

console.log("\n");

// Задача 2 (легка)

// Створіть функцію hasProperty, яка приймає об’єкт obj і назву властивості propName. Функція повинна повертати true, якщо властивість є в об’єкті, інакше false. Використайте оператор in.

const car = {
  make: "Toyota",
  model: "Corolla"
};

function hasProperty(obj, propName) {
    if (propName in obj) {
        return true;
    } else {
        return false;
  }
}

console.log(hasProperty(car, "make")); // true
console.log(hasProperty(car, "year")); // false

console.log("\n");

// Задача 3 (середня)

// Напишіть функцію listKeys, яка приймає об’єкт obj і повертає масив ключів цього об’єкта. Використайте метод Object.keys.

const product = {
  id: 1,
  name: "Laptop",
  price: 1000
};

function listKeys(obj) {
    return Object.keys(obj);
}

console.log(listKeys(product)); // ["id", "name", "price"]

console.log("\n");

// Задача 4 (середня)

// Створіть функцію mergeObjects, яка приймає два об’єкти obj1 та obj2 і повертає новий об’єкт, який містить властивості обох об’єктів. Якщо є однакові ключі, повинні використовуватись значення з obj2. Використайте метод Object.assign.

const obj1 = { name: "Alice", age: 25 };
const obj2 = { age: 30, city: "Kyiv" };

function mergeObjects(obj1, obj2) {
    return Object.assign(obj1, obj2);
}

console.log(mergeObjects(obj1, obj2)); // { name: "Alice", age: 30, city: "Kyiv" }

console.log("\n");

// Задача 5 (складна)

// Напишіть функцію invertObject, яка приймає об’єкт obj і повертає новий об’єкт, де ключі та значення обміняні місцями. Використайте метод Object.entries для отримання пар ключ-значення.

const user = {
  name: "Alice",
  age: "25"
};

function invertObject(obj) {
    const inverted = {};
    for (const [key, value] of Object.entries(obj)) {
        inverted[value] = key;
    }
    return inverted;
}

console.log(invertObject(user)); // { "Alice": "name", "25": "age" }

console.log("\n");

// Задача 6 (складна)

// Створіть функцію countProperties, яка приймає об’єкт obj і повертає кількість властивостей, які має об’єкт, включаючи тільки ті, значення яких є строками. Використайте метод Object.values та перевірку типу значення.

const person = {
  name: "John",
  age: 30,
  occupation: "developer",
  isStudent: false
};

function countProperties(obj) {
    let count = 0;
    const values = Object.values(obj);

    for (const value of values) {
        if (typeof value === "string") {
            count++;
        }
    }
    return count;
}

console.log(countProperties(person)); // 2 (name і occupation)

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам освоїти основи роботи з методами та властивостями об’єктів, а також маніпуляцію з ключами та значеннями об’єкта.