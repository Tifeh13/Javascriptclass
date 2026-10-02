// ============================================================
// JAVASCRIPT OBJECTS - BEGINNER LESSON
// Topic: Object Intro
// ============================================================
//
// HOW TO USE THIS FILE:
// Everything below is commented out in blocks.
// Uncomment ONE block at a time, run it with: node js-objects-lesson.js
// Explain it to the students, then move to the next block.
//
// To uncomment: select the lines, then press Ctrl + / (Windows)
// or Cmd + / (Mac). Press it again to re-comment.
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS AN OBJECT? (in the simplest way possible)
// ------------------------------------------------------------
//
// Think of an object as a BOX that holds information about ONE thing.
//
// That "thing" could be a person, a car, a phone, a student — anything.
//
// Instead of using many separate variables like this:
//
// let studentName = "Ade";
// let studentAge = 20;
// let studentCourse = "JavaScript";
//
// ...we put all of that INSIDE ONE BOX (object), like this:
//
// let student = {
//   name: "Ade",
//   age: 20,
//   course: "JavaScript"
// };
//
// Now everything about "student" is in ONE place. That's an object.


// ------------------------------------------------------------
// PART 2: KEY : VALUE PAIRS (the heart of objects)
// ------------------------------------------------------------
//
// Inside an object, information is stored as KEY : VALUE pairs.
//
// KEY   = the name/label (like a question)
// VALUE = the answer to that label
//
// Example:
//   name: "Ade"       -> key is "name", value is "Ade"
//   age: 20           -> key is "age", value is 20
//
// These key:value pairs are called PROPERTIES.
//
// UNCOMMENT BELOW AND RUN IT:

// let student = {
//   name: "Ade",
//   age: 20,
//   course: "JavaScript"
// };
//
// console.log(student);


// ------------------------------------------------------------
// PART 3: READING A VALUE FROM AN OBJECT (DOT NOTATION)
// ------------------------------------------------------------
//
// To get ONE piece of info out of the box, we use a DOT (.)
// followed by the key name.
//
// objectName.keyName
//
// UNCOMMENT BELOW AND RUN IT:

// let student = {
//   name: "Ade",
//   age: 20,
//   course: "JavaScript"
// };
//
// console.log(student.name);    // Ade
// console.log(student.age);     // 20
// console.log(student.course);  // JavaScript


// ------------------------------------------------------------
// PART 4: READING A VALUE (BRACKET NOTATION - ALTERNATIVE WAY)
// ------------------------------------------------------------
//
// There is a second way to read a value, using SQUARE BRACKETS
// and the key name IN QUOTES.
//
// objectName["keyName"]
//
// Both dot notation and bracket notation give the SAME result.
// Dot notation is used more often because it's shorter.
//
// UNCOMMENT BELOW AND RUN IT:

// let student = {
//   name: "Ade",
//   age: 20,
//   course: "JavaScript"
// };
//
// console.log(student["name"]);   // Ade
// console.log(student["age"]);    // 20


// ------------------------------------------------------------
// PART 5: CHANGING (UPDATING) A VALUE
// ------------------------------------------------------------
//
// Objects are not "locked" - you can change the value of a
// key any time, just like updating info in a form.
//
// UNCOMMENT BELOW AND RUN IT:

// let student = {
//   name: "Ade",
//   age: 20,
//   course: "JavaScript"
// };
//
// console.log("Before:", student.age);
//
// student.age = 21;   // we changed 20 to 21
//
// console.log("After:", student.age);


// ------------------------------------------------------------
// PART 6: ADDING A NEW PROPERTY TO AN OBJECT
// ------------------------------------------------------------
//
// You can also ADD a brand new key:value pair to an object
// that never had it before.
//
// UNCOMMENT BELOW AND RUN IT:

// let student = {
//   name: "Ade",
//   age: 20
// };
//
// console.log("Before:", student);
//
// student.course = "JavaScript"; // adding a new property
//
// console.log("After:", student);


// ------------------------------------------------------------
// PART 7: DELETING A PROPERTY FROM AN OBJECT
// ------------------------------------------------------------
//
// You can remove a key:value pair completely using "delete".
//
// UNCOMMENT BELOW AND RUN IT:

// let student = {
//   name: "Ade",
//   age: 20,
//   course: "JavaScript"
// };
//
// console.log("Before:", student);
//
// delete student.course;
//
// console.log("After:", student);


// ------------------------------------------------------------
// PART 8: FUNCTIONS INSIDE AN OBJECT = METHODS
// ------------------------------------------------------------
//
// We already know: values stored as key:value pairs = PROPERTIES.
//
// Now: when the VALUE is a FUNCTION instead of plain data,
// we call that key:function() pair a METHOD.
//
// In simple English: a METHOD is something the object can DO.
// A PROPERTY is something the object HAS.
//
// Example:
//   name: "Ade"        -> property (something the object HAS)
//   greet: function(){} -> method   (something the object CAN DO)
//
// UNCOMMENT BELOW AND RUN IT:

// let student = {
//   name: "Ade",
//   age: 20,
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   }
// };
//
// student.greet();   // calling/running the method (note the brackets)


// ------------------------------------------------------------
// PART 9: WHAT IS "this" DOING IN THE METHOD ABOVE?
// ------------------------------------------------------------
//
// "this" simply means "THIS SAME OBJECT I am currently inside".
//
// So this.name inside the student object means:
// "go and get the 'name' property of THIS student object"
//
// It's like a student pointing to themselves and saying "my name is..."
// instead of saying someone else's name.
//
// UNCOMMENT BELOW AND RUN IT:

// let student = {
//   name: "Ade",
//   sayCourse: function () {
//     console.log(this.name + " is learning JavaScript");
//   }
// };
//
// student.sayCourse();


// ------------------------------------------------------------
// PART 10: REAL LIFE COMPARISON - A CAR AS AN OBJECT
// ------------------------------------------------------------
//
// In real life, we describe things using properties naturally.
// A car HAS a color, brand, and model. A car CAN start and stop.
//
// UNCOMMENT BELOW AND RUN IT:

// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   color: "Black",
//   start: function () {
//     console.log(this.brand + " has started. Vroom!");
//   },
//   stop: function () {
//     console.log(this.brand + " has stopped.");
//   }
// };
//
// console.log(car.brand);   // property
// console.log(car.color);   // property
// car.start();               // method
// car.stop();                // method


// ------------------------------------------------------------
// PART 11: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// Create an object called "phone" with:
//   - brand (e.g "Samsung")
//   - price (e.g 150000)
//   - ring (a method that logs "Ring ring! I am a phone")
//
// Then:
//   1. Print the brand using dot notation
//   2. Print the price using bracket notation
//   3. Call the ring method
//
// Write your answer below this line:

// let phone = {
//
// };


// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. An OBJECT is a box that holds info about ONE thing.
// 2. Info is stored as KEY : VALUE pairs.
// 3. A key:value pair storing plain data = PROPERTY
// 4. A key:value pair storing a function = METHOD
// 5. Use DOT (.) or BRACKET ([]) notation to read a property.
// 6. "this" means "this same object".
// ============================================================
