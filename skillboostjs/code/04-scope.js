// ============================================================
// JAVASCRIPT SCOPE - BEGINNER LESSON
// ============================================================
//
// HOW TO USE THIS FILE:
// Everything below is commented out in blocks.
// Uncomment ONE block at a time, run it with: node 03-scope.js
// Explain it to the students, then move to the next block.
//
// To uncomment: select the lines, then press Ctrl + / (Windows)
// or Cmd + / (Mac). Press it again to re-comment.
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS SCOPE? (in the simplest way possible)
// ------------------------------------------------------------
//
// Imagine a house with a living room and a locked bedroom.
// Anyone in the house can sit in the living room. But only the
// person INSIDE the bedroom can use what's inside that bedroom.
//
// SCOPE is exactly that idea in code: it decides WHERE a
// variable can be seen and used.
//
// There are 3 kinds of scope:
//   1. Global Scope   - the living room, everyone can reach it
//   2. Function Scope  - the locked bedroom, only that function can reach it
//   3. Block Scope     - a drawer inside a room (works with let/const)


// ------------------------------------------------------------
// PART 2: GLOBAL SCOPE
// ------------------------------------------------------------
//
// A variable created OUTSIDE any function can be used ANYWHERE
// in the file.
//
// UNCOMMENT BELOW AND RUN IT:

// let country = "Nigeria";
//
// function printCountry() {
//   console.log("We are in: " + country);
// }
//
// printCountry();
// console.log(country);


// ------------------------------------------------------------
// PART 3: FUNCTION SCOPE
// ------------------------------------------------------------
//
// A variable created INSIDE a function only exists inside that
// function. Nobody outside can reach it.
//
// UNCOMMENT BELOW AND RUN IT:

// function greet() {
//   let message = "Hello!";
//   console.log(message);
// }
//
// greet();
// // console.log(message);  // ERROR! message doesn't exist out here


// ------------------------------------------------------------
// PART 4: BLOCK SCOPE (let and const only)
// ------------------------------------------------------------
//
// A block is anything inside { }, like an if-statement or a
// loop. Variables made with let/const only live inside that
// block.
//
// UNCOMMENT BELOW AND RUN IT:

// if (true) {
//   let secret = "Only visible inside this if-block";
//   console.log(secret);
// }
// // console.log(secret);  // ERROR! secret does not exist here


// ------------------------------------------------------------
// PART 5: var VS let (WHY WE PREFER let TODAY)
// ------------------------------------------------------------
//
// "var" does NOT respect block scope - it leaks out. "let" and
// "const" DO respect block scope. That's why modern JS prefers
// let/const over var.
//
// UNCOMMENT BELOW AND RUN IT:

// if (true) {
//   var leaked = "I escaped the block!";
// }
// console.log(leaked);  // this actually WORKS with var (bad practice)


// ------------------------------------------------------------
// PART 6: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Create a global variable "schoolName" and print it both
//    inside and outside a function.
// 2. Create a function with a local variable "score" that only
//    exists inside it, and prove it can't be read outside.
// 3. Create an if-block with a let variable inside it and prove
//    it cannot be accessed outside the block.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. SCOPE decides WHERE a variable can be seen and used.
// 2. Global scope: created outside everything, visible everywhere.
// 3. Function scope: created inside a function, only visible there.
// 4. Block scope (let/const): created inside { }, only visible there.
// 5. var ignores block scope and leaks out - avoid it.
// ============================================================
