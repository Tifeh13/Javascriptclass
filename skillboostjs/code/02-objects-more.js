// ============================================================
// JAVASCRIPT OBJECTS - FULL LESSON (SUPER SIMPLE VERSION)
// Covers: Object Path, Object Properties, Object Methods,
//         Object this, Object Display, Object Constructors
// ============================================================
//
// HOW TO USE:
// Every block below is commented out.
// Uncomment ONE block (select it, press Ctrl + /), run:
//     node js-objects-full-lesson.js
// Explain it out loud, then move to the next block.
//
// TEACHING STYLE NOTE:
// Every topic starts with a super simple, real-life picture of
// the idea before moving into the real JavaScript explanation
// and examples.
// ============================================================


// ############################################################
// TOPIC 1: OBJECT PATH
// ############################################################
//
// Imagine a house. Inside the house there is a room.
// Inside that room there is a box. Inside that box there is a toy.
//
// To reach the toy, you don't just shout "toy!" — you have to
// walk a PATH: house -> room -> box -> toy.
//
// That "walking route" is exactly what an OBJECT PATH is in JS.
// It's the chain of dots (.) you follow to reach a value that is
// buried INSIDE an object, which is inside another object.
//
// Objects can contain other objects. To get a deeply buried value,
// you chain the dots together, following the "path" down to it.
//
// UNCOMMENT AND RUN:

// let person = {
//   name: "Ade",
//   address: {
//     city: "Ibadan",
//     home: {
//       street: "Oke-Ado",
//       houseNumber: 12
//     }
//   }
// };
//
// // The "path" to reach houseNumber is: person -> address -> home -> houseNumber
// console.log(person.address.home.houseNumber);  // 12
// console.log(person.address.city);               // Ibadan


// ------------------------------------------------------------
// MORE OBJECT PATH EXAMPLES
// ------------------------------------------------------------

// let school = {
//   name: "SkillBoost",
//   class: {
//     level: "Beginner",
//     teacher: {
//       fullName: "Mr. Afola",
//       subject: "JavaScript"
//     }
//   }
// };
//
// // path: school -> class -> teacher -> fullName
// console.log(school.class.teacher.fullName);  // Mr. Afola
// console.log(school.class.level);              // Beginner


// ############################################################
// TOPIC 2: OBJECT PROPERTIES
// ############################################################
//
// A baby has things that describe him/her: a name, an age, an
// eye color, a favorite toy. Each of those describing "labels"
// is a PROPERTY of the baby.
//
// Properties are the values attached to an object, written as
// key:value pairs. An object is just a collection of properties.
// Properties can be CHANGED, ADDED, and DELETED.
//
// There are 3 ways to access a property:
//   1. Dot notation      -> object.property
//   2. Bracket notation   -> object["property"]
//   3. Bracket + variable -> object[aVariable]
//
// UNCOMMENT AND RUN:

// let person = {
//   firstName: "Ade",
//   lastName: "Bello",
//   age: 20
// };
//
// // 1. Dot notation
// console.log(person.firstName + " is " + person.age + " years old.");
//
// // 2. Bracket notation
// console.log(person["lastName"]);
//
// // 3. Bracket notation with a variable
// let key = "age";
// console.log(person[key]);


// ------------------------------------------------------------
// WHY DO WE NEED BRACKET NOTATION? (2 real reasons)
// ------------------------------------------------------------
//
// REASON 1: When the property name is stored inside a variable
// (you saw that above with "key").
//
// REASON 2: When the property name is NOT a normal word
// (it has a space or a dash in it).
//
// UNCOMMENT AND RUN:

// let car = {
//   "car-brand": "Toyota"   // this name has a dash, dot notation can't read it
// };
//
// console.log(car["car-brand"]);   // works
// // console.log(car.car-brand);   // this would break/error


// ------------------------------------------------------------
// CHANGING, ADDING, DELETING PROPERTIES
// ------------------------------------------------------------

// let phone = {
//   brand: "Samsung",
//   price: 150000
// };
//
// console.log("BEFORE:", phone);
//
// phone.price = 140000;     // CHANGE a property
// phone.color = "Black";    // ADD a new property
// delete phone.brand;       // DELETE a property
//
// console.log("AFTER:", phone);


// ############################################################
// TOPIC 3: OBJECT METHODS
// ############################################################
//
// A baby doesn't just HAVE things (name, age) — a baby can also
// DO things: cry, laugh, crawl. Those "doing" actions are METHODS.
//
// A method is a property whose value is a FUNCTION.
// Properties = things the object HAS.
// Methods    = things the object can DO.
//
// Syntax: methodName: function () { ... }
// To RUN (call) a method, you must add brackets: object.methodName()
//
// UNCOMMENT AND RUN:

// let person = {
//   firstName: "Ade",
//   lastName: "Bello",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// };
//
// console.log(person.fullName());   // calling the method (with brackets)
// console.log(person.fullName);     // NOT calling it - this just shows the function code


// ------------------------------------------------------------
// MORE METHOD EXAMPLES
// ------------------------------------------------------------

// let calculator = {
//   num1: 10,
//   num2: 5,
//   add: function () {
//     return this.num1 + this.num2;
//   },
//   subtract: function () {
//     return this.num1 - this.num2;
//   }
// };
//
// console.log("Addition:", calculator.add());
// console.log("Subtraction:", calculator.subtract());


// ############################################################
// TOPIC 4: OBJECT "this" KEYWORD
// ############################################################
//
// If you point at your own chest and say "ME", you are talking
// about YOURSELF, not your friend, not your neighbor - YOU.
//
// In JavaScript, "this" is exactly that. Inside an object, "this"
// means "ME - this exact object I am sitting inside of right now".
//
// "this" refers to the object that is currently "owning"/running
// the code. It lets a method reach the OTHER properties that
// belong to the SAME object, without hardcoding the object's name.
//
// UNCOMMENT AND RUN:

// let student = {
//   name: "Ade",
//   course: "JavaScript",
//   introduce: function () {
//     // "this" = student (because student is the one calling introduce)
//     console.log("My name is " + this.name + " and I am learning " + this.course);
//   }
// };
//
// student.introduce();


// ------------------------------------------------------------
// PROOF THAT "this" CHANGES DEPENDING ON WHO IS CALLING
// ------------------------------------------------------------

// let studentA = {
//   name: "Ade",
//   sayName: function () {
//     console.log("I am " + this.name);
//   }
// };
//
// let studentB = {
//   name: "Chidi",
//   sayName: studentA.sayName   // borrowing the SAME method
// };
//
// studentA.sayName();  // I am Ade   (because "this" = studentA here)
// studentB.sayName();  // I am Chidi (because "this" = studentB here)


// ############################################################
// TOPIC 5: OBJECT DISPLAY
// ############################################################
//
// If you show a whole toy box to someone, they can't just SEE
// what's inside by looking at the closed box. You need to either
// open it and show each toy, or take a photo of everything inside.
//
// Same with objects - you can't just print an object directly as
// plain text; JS needs a special way to "show" what's inside.
//
// console.log(object) DOES work and shows the object nicely in
// the terminal/console. But if you try to combine an object
// directly into a string, you get "[object Object]" - not useful.
//
// To properly DISPLAY an object as readable text, we use:
//   JSON.stringify(object)
//
// UNCOMMENT AND RUN:

// let person = {
//   name: "Ade",
//   age: 20
// };
//
// console.log(person);                     // shows the object directly (fine in console)
// console.log("Person: " + person);        // BAD - shows [object Object]
// console.log(JSON.stringify(person));     // GOOD - shows it as readable text


// ------------------------------------------------------------
// LOOPING THROUGH AN OBJECT TO DISPLAY EVERYTHING INSIDE IT
// ------------------------------------------------------------
//
// Imagine opening a toy box and picking out each toy ONE BY ONE
// to show them, instead of showing the whole closed box at once.
// That's what looping through an object does.

// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2020
// };
//
// for (let key in car) {
//   console.log(key + ": " + car[key]);
// }
// // Output:
// // brand: Toyota
// // model: Corolla
// // year: 2020


// ############################################################
// TOPIC 6: OBJECT CONSTRUCTORS
// ############################################################
//
// Imagine a toy factory that makes teddy bears. Instead of
// sewing every single teddy bear by hand one at a time, the
// factory uses ONE MACHINE (a mold/blueprint) that quickly
// creates MANY teddy bears that all look and work the same way.
//
// A CONSTRUCTOR is that machine/blueprint - it creates many
// objects that follow the same pattern, without you retyping
// the whole object every time.
//
// A constructor is a function used as a "template" to create
// multiple objects of the same kind, using the "new" keyword.
//
// Rules:
//   1. Constructor function names usually start with a CAPITAL letter
//   2. Use "this" to set each property
//   3. Use "new" when creating an object from it
//
// UNCOMMENT AND RUN:

// function Student(name, age, course) {
//   this.name = name;
//   this.age = age;
//   this.course = course;
//   this.introduce = function () {
//     console.log(this.name + " (" + this.age + ") is learning " + this.course);
//   };
// }
//
// // Now we can create MANY students easily using the SAME blueprint:
// let student1 = new Student("Ade", 20, "JavaScript");
// let student2 = new Student("Chidi", 22, "Python");
// let student3 = new Student("Tolu", 19, "HTML & CSS");
//
// student1.introduce();
// student2.introduce();
// student3.introduce();


// ------------------------------------------------------------
// ANOTHER CONSTRUCTOR EXAMPLE - CAR FACTORY
// ------------------------------------------------------------

// function Car(brand, color) {
//   this.brand = brand;
//   this.color = color;
//   this.start = function () {
//     console.log(this.brand + " (" + this.color + ") has started. Vroom!");
//   };
// }
//
// let car1 = new Car("Toyota", "Black");
// let car2 = new Car("Honda", "Red");
//
// car1.start();
// car2.start();


// ============================================================
// WORK TO BE DONE (give this to students as homework/practice)
// ============================================================
//
// TASK 1 (Object Path):
// Create an object called "company" with a nested "ceo" object
// inside it that has a "name" property. Print the CEO's name
// using the correct path.
//
// TASK 2 (Object Properties):
// Create an object called "book" with title, author, and price.
// Print the title using dot notation and the price using
// bracket notation. Then change the price and add a new
// property called "inStock" (true or false).
//
// TASK 3 (Object Methods):
// Create an object called "microwave" with a method called
// "heat" that logs "Food is heating... beep beep!".
//
// TASK 4 (this keyword):
// Create an object called "dog" with a "name" property and a
// method "bark" that logs: "<name> says Woof!" using this.name.
//
// TASK 5 (Object Display):
// Take the "book" object from Task 2 and loop through it using
// for...in to print every property and its value.
//
// TASK 6 (Object Constructors):
// Create a constructor function called "Animal" that takes
// "type" and "sound" as parameters, and has a method "makeSound"
// that logs "<type> says <sound>". Create 3 different animals
// using "new".
//
// Write your answers below this line:



// ============================================================
// QUICK SUMMARY (read this out loud at the end of class)
// ============================================================
//
// 1. OBJECT PATH: the dot-by-dot route you follow to reach a
//    value buried inside nested objects.
//
// 2. OBJECT PROPERTIES: the key:value pairs an object HAS.
//    Access with . or [].
//
// 3. OBJECT METHODS: the functions inside an object - things
//    the object can DO. Call them with brackets: object.method()
//
// 4. this: means "ME, this exact object right now".
//
// 5. OBJECT DISPLAY: use console.log() to view an object, or
//    JSON.stringify() to turn it into readable text, or a
//    for...in loop to show each property one by one.
//
// 6. OBJECT CONSTRUCTORS: a blueprint function (with "new") used
//    to quickly create many similar objects.
// ============================================================
