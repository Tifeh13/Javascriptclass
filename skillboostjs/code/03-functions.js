// ============================================================
// JAVASCRIPT FUNCTIONS - BEGINNER LESSON (REVIEW)
// ============================================================
//
// HOW TO USE THIS FILE:
// Everything below is commented out in blocks.
// Uncomment ONE block at a time, run it with: node 03-functions.js
// Explain it to the students, then move to the next block.
//
// To uncomment: select the lines, then press Ctrl + / (Windows)
// or Cmd + / (Mac). Press it again to re-comment.
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS A FUNCTION? (in the simplest way possible)
// ------------------------------------------------------------
//
// Imagine a toaster. You put bread IN, you press the button,
// and toast comes OUT. You don't need to know how the toaster
// works inside - you just use it.
//
// A FUNCTION is exactly like that toaster - a reusable block of
// instructions that you can "feed" information into, and it
// does a job and can hand something back.
//
// UNCOMMENT BELOW AND RUN IT:

// function sayHello() {
//   console.log("Hello!");
// }
//
// sayHello();   // calling/running the function


// ------------------------------------------------------------
// PART 2: FUNCTIONS WITH PARAMETERS (feeding info IN)
// ------------------------------------------------------------
//
// A parameter is an empty placeholder box that gets filled with
// real information whenever the function is used.
//
// UNCOMMENT BELOW AND RUN IT:

// function greet(name) {
//   console.log("Hello, " + name + "!");
// }
//
// greet("Ade");     // "Ade" fills the "name" placeholder
// greet("Chidi");   // now "Chidi" fills it instead


// ------------------------------------------------------------
// PART 3: RETURN VALUES (getting info OUT)
// ------------------------------------------------------------
//
// "return" is how a function HANDS BACK a result, so we can
// store it or use it elsewhere, instead of just printing it.
//
// UNCOMMENT BELOW AND RUN IT:

// function add(a, b) {
//   return a + b;
// }
//
// let result = add(3, 4);
// console.log(result);   // 7
//
// // Notice: add() did NOT print anything itself - it just
// // handed back a value, which we stored in "result".


// ------------------------------------------------------------
// PART 4: FUNCTION EXPRESSIONS (a function stored in a variable)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// const multiply = function (a, b) {
//   return a * b;
// };
//
// console.log(multiply(3, 4));   // 12


// ------------------------------------------------------------
// PART 5: ARROW FUNCTIONS (a shorter way to write functions)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// const subtract = (a, b) => {
//   return a - b;
// };
//
// console.log(subtract(10, 4));   // 6
//
// // If the function is just ONE line, you can make it even
// // shorter by removing { } and "return":
// const square = (n) => n * n;
// console.log(square(5));   // 25


// ------------------------------------------------------------
// PART 6: DEFAULT PARAMETERS
// ------------------------------------------------------------
//
// You can give a parameter a default value, used only if
// nothing is passed in for it.
//
// UNCOMMENT BELOW AND RUN IT:

// function greetUser(name = "Guest") {
//   console.log("Welcome, " + name + "!");
// }
//
// greetUser("Ade");   // Welcome, Ade!
// greetUser();         // Welcome, Guest!  (no name was given)


// ------------------------------------------------------------
// PART 7: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Write a function called "isEven" that takes a number and
//    returns true if it's even, false if it's odd.
// 2. Write an arrow function called "greetTime" that takes a
//    name and a time of day and logs "Good <time>, <name>!"
// 3. Write a function with a default parameter "course" set to
//    "JavaScript", and test it by calling it with and without
//    a course argument.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. A FUNCTION is a reusable block of instructions.
// 2. PARAMETERS let you feed information INTO a function.
// 3. RETURN hands a result back OUT of a function.
// 4. A function can be stored in a variable (function expression).
// 5. Arrow functions ( => ) are a shorter way to write functions.
// 6. A parameter can have a DEFAULT value if nothing is passed.
// ============================================================
