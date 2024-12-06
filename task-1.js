// Ось кілька задач для практики роботи з вкладеними властивостями в об’єктах для початківців:

// Задача 1 (легка)

// Уявіть, що у вас є об’єкт user, який містить ім’я користувача та адресу. Напишіть функцію getCity, яка приймає об’єкт user і повертає назву міста, де живе користувач. Якщо властивості city немає, поверніть "Unknown".

// const user = {
//   name: "Alice",
//   address: {
//     city: "Kyiv",
//     country: "Ukraine"
//   }
// };

// const userWithoutCity = {
//   name: "Bob",
//   address: {}
// };

// function getCity(user) {
//     return user.address && user.address.city ? user.address.city : "Unknown";
// }

// console.log(getCity(user)); // "Kyiv"
// console.log(getCity(userWithoutCity)); // "Unknown"

// Задача 2 (легка)

// Створіть функцію getFullName, яка приймає об’єкт user з властивостями firstName і lastName, які знаходяться всередині вкладеної властивості name, і повертає повне ім’я користувача. Якщо будь-яке з імен відсутнє, поверніть "Incomplete Name".

// const user1 = {
//   name: {
//     firstName: "John",
//     lastName: "Doe"
//   }
// };

// const user2 = {
//   name: {
//     firstName: "Jane"
//   }
// };

// function getFullName(user) {
//     if (user.name && user.name.firstName && user.name.lastName) {
//         return `${user.name.firstName} ${user.name.lastName}`;
//     } else {
//         return "Incomplete Name";
//    }
// }

// console.log(getFullName(user1)); // "John Doe"
// console.log(getFullName(user2)); // "Incomplete Name"

// Задача 3 (середня)

// Напишіть функцію getProductPrice, яка приймає об’єкт product і повертає ціну товару. Ціна товару знаходиться у вкладеній властивості price, яка знаходиться у вкладеному об’єкті details. Якщо ціна відсутня, поверніть "Price not available".

// const productWithPrice = {
//   name: "Laptop",
//   details: {
//     price: 1000,
//     currency: "USD"
//   }
// };

// const productWithoutPrice = {
//   name: "Phone",
//   details: {}
// };

// function getProductPrice(product) {
//     if (product.details && product.details.price != undefined) {
//         return product.details.price;
//     } else {
//         return "Price not available";
//   }
// }

// console.log(getProductPrice(productWithPrice)); // 1000
// console.log(getProductPrice(productWithoutPrice)); // "Price not available"

// Задача 4 (середня)

// Створіть функцію getCourseInstructor, яка приймає об’єкт course і повертає ім’я інструктора, якщо він вказаний у вкладеній властивості instructor у об’єкті info. Якщо інструктор відсутній, поверніть "Instructor not assigned".

// const courseWithInstructor = {
//   title: "JavaScript Basics",
//   info: {
//     instructor: "Mr. Smith",
//     duration: "4 weeks"
//   }
// };

// const courseWithoutInstructor = {
//   title: "Python Basics",
//   info: {
//     duration: "6 weeks"
//   }
// };

// function getCourseInstructor(course) {
//     if (course.info && course.info.instructor != undefined) {
//         return course.info.instructor;
//     } else {
//         return "Instructor not assigned";
//   }
// }

// console.log(getCourseInstructor(courseWithInstructor)); // "Mr. Smith"
// console.log(getCourseInstructor(courseWithoutInstructor)); // "Instructor not assigned"

// Задача 5 (складна)

// Напишіть функцію getNestedProperty, яка приймає об’єкт obj і масив keys, де keys - масив з ключами для вкладених властивостей. Функція повинна повернути значення за вказаними ключами або "Property not found", якщо будь-яка з вкладених властивостей відсутня.

// const data = {
//   user: {
//     profile: {
//       name: "Alice",
//       contact: {
//         email: "alice@example.com"
//       }
//     }
//   }
// };

// function getNestedProperty(obj, keys) {
//     for (const key of keys) {
//         if (obj[key] !=undefined) {
//             obj = obj[key];
//         }else {
//         return "Property not Found";
//     } 
//     }
//     return obj;
// }

// console.log(getNestedProperty(data, ["user", "profile", "name"])); // "Alice"
// console.log(getNestedProperty(data, ["user", "profile", "contact", "email"])); // "alice@example.com"
// console.log(getNestedProperty(data, ["user", "profile", "contact", "phone"])); // "Property not found"

// Задача 6 (складна)

// Створіть функцію updateNestedProperty, яка приймає об’єкт obj, масив ключів keys і нове значення value. Функція повинна оновити вкладену властивість у об’єкті obj за вказаними ключами на нове значення value. Якщо будь-яка з вкладених властивостей відсутня, поверніть "Cannot update property".

const user = {
  profile: {
    settings: {
      theme: "light"
    }
  }
};

function updateNestedProperty(obj, keys, value) {
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (current[key] !== undefined) {
            current = current[key];
        } else {
            return "Cannot update property";
        }
    }
    const lastKey = keys[keys.length - 1];
    if (current[lastKey] !== undefined) {
        current[lastKey] = value;
        return value;
    } else {
        return "Cannot update propeerty";
    }
}

console.log(updateNestedProperty(user, ["profile", "settings", "theme"], "dark")); // "dark"
console.log(user.profile.settings.theme); // "dark"

console.log(updateNestedProperty(user, ["profile", "settings", "language"], "en")); // "Cannot update property"