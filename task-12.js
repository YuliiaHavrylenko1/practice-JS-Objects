// Ось кілька задач для практики роботи з об’єктами та «моделями» даних для початківців:

// Задача 1 (легка)

// Створіть функцію createUser, яка приймає ім’я користувача name та вік age і повертає об’єкт користувача. Об’єкт має містити такі властивості: name, age, і додаткову властивість isAdult, яка буде true, якщо вік користувача більше або дорівнює 18, і false, якщо менше.

// function createUser(name, age) {
//     const user = {
//         name,
//         age,
//         isAdult: age >= 18,
//     };
//     return user;
// }

// console.log(createUser("Alice", 20)); 
// // { name: "Alice", age: 20, isAdult: true }

// console.log(createUser("Bob", 16)); 
// // { name: "Bob", age: 16, isAdult: false }

// Задача 2 (легка)

// Напишіть функцію createProduct, яка приймає три параметри: name, price, та category. Функція повинна повертати об’єкт продукту з цими властивостями, а також додаткову властивість discountedPrice, яка є 10% знижкою від початкової ціни price.

// function createProduct(name, price, category) {

//     const product = {
//         name,
//         price,
//         category,
//         discountedPrice: price - (price * 0.1),
//     };
   
//     return product;
// }

// console.log(createProduct("Laptop", 1000, "Electronics"));
// // { name: "Laptop", price: 1000, category: "Electronics", discountedPrice: 900 }

// Задача 3 (середня)

// Створіть функцію createBook, яка приймає параметри title, author, year, та pages. Функція повинна повертати об’єкт книги, який має ці властивості, а також метод getSummary, який повертає рядок зі зведеною інформацією про книгу у форматі: "title" by author, published in year.

// function createBook(title, author, year, pages) {
//     const book = {
//         title,
//         author,
//         year,
//         pages,
//         getSummary: function () {
//             return `${this.title} by ${this.author} published in ${this.year}`;
//         }
//     };
//     return book;
// }

// const book = createBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, 180);
// console.log(book.getSummary());
// // "The Great Gatsby by F. Scott Fitzgerald, published in 1925"

// Задача 4 (середня)

// Напишіть функцію createStudent, яка приймає параметри name, grades (масив чисел) та course. Функція повинна повертати об’єкт студента з цими властивостями і методом calculateAverage, який обчислює середню оцінку студента.

// function createStudent(name, grades, course) {
//     const isStudent = {
//         name,
//         grades,
//         course,
//         calculateAverage: function () {
//             const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
//             return sum / this.grades.length;
//         }
        
//     };
//     return isStudent;
// }

// const student = createStudent("Alice", [90, 80, 85, 70], "Mathematics");
// console.log(student.calculateAverage()); // 81.25

// Задача 5 (складна)

// Створіть функцію createEmployee, яка приймає параметри name, position, salary, і yearsWorked. Функція повинна повертати об’єкт співробітника, який має ці властивості, а також метод getAnnualBonus, який повертає річний бонус співробітника, обчислений як 5% від зарплати, помноженої на кількість років роботи.

// function createEmployee(name, position, salary, yearsWorked) {
//     const employee = {
//         name,
//         position,
//         salary,
//         yearsWorked,
//         getAnnualBonus: function () {
//             return salary * 0.05 * yearsWorked;
//         }
//     };
//     return employee;
// }

// const employee = createEmployee("Bob", "Developer", 50000, 3);
// console.log(employee.getAnnualBonus()); // 7500

// Задача 6 (складна)

// Напишіть функцію createCourse, яка приймає параметри title, students (масив об’єктів студентів) та maxStudents. Функція повинна повертати об’єкт курсу, який має ці властивості, а також методи addStudent (додає студента до курсу, якщо не перевищено maxStudents) і getStudentCount, який повертає поточну кількість студентів у курсі.

// function createCourse(title, students, maxStudents) {
//     const course = {
//         title,
//         students,
//         maxStudents,
//         addStudent: function (student) {
//             if (this.students.length < this.maxStudents) {
//                 this.students.push(student);
//             } else {
//                 console.log(" Максимальна кількість студентів досягнута");
//             }
//         },
//         getStudentCount: function () {
//             return this.students.length;
            
//         }
//     };
//     return course;
// }

// const course = createCourse("JavaScript Basics", [], 2);
// course.addStudent({ name: "Alice", age: 22 });
// course.addStudent({ name: "Bob", age: 24 });
// console.log(course.getStudentCount()); // 2
// course.addStudent({ name: "Charlie", age: 23 }); // Максимальна кількість студентів досягнута
// console.log(course.getStudentCount()); // 2

// Ці задачі допоможуть вам освоїти базову роботу з об’єктами та «моделями» даних, навчать створювати методи об’єктів та опрацьовувати значення властивостей для різних цілей.