// ============================================================
// 11. ADVANCED JAVASCRIPT CONCEPTS - BEGINNER-FRIENDLY LESSON
// ============================================================
//
// HOW TO USE THIS FILE:
// Everything below is commented out in blocks.
// Uncomment ONE block at a time, run it with: node 24-advanced-concepts.js
// ============================================================


// ------------------------------------------------------------
// PART 1: CLOSURES (a function that "remembers" its surroundings)
// ------------------------------------------------------------
//
// Imagine a backpack. When a function is created INSIDE another
// function, it "packs" a backpack with access to the outer
// function's variables - and it keeps that backpack FOREVER,
// even after the outer function has already finished running.
//
// UNCOMMENT BELOW AND RUN IT:

// function makeCounter() {
//   let count = 0;         // this variable lives inside makeCounter
//
//   return function () {    // this inner function "packs" count in its backpack
//     count++;
//     console.log(count);
//   };
// }
//
// let counter = makeCounter();   // makeCounter() already finished running here
// counter();   // 1
// counter();   // 2
// counter();   // 3
//
// // Even though makeCounter() finished a long time ago, the
// // returned function STILL remembers "count" - that's a closure.


// ------------------------------------------------------------
// PART 2: HOISTING (JS "lifts" some declarations to the top)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// sayHi();   // this WORKS, even though it's called BEFORE it's defined below
//
// function sayHi() {
//   console.log("Hi!");
// }
//
// // Function DECLARATIONS (written like above) are "hoisted" -
// // JS moves their full definition to the top of the file
// // behind the scenes, so you can call them before they appear
// // in the code.
//
// // console.log(myVar);   // this would print "undefined", not an error
// // var myVar = 5;
// // "var" is hoisted too, but only the DECLARATION, not the
// // value - so it exists but is undefined until that line runs.
//
// // console.log(myLet);   // this would ERROR - let/const are
// // let myLet = 5;         // NOT accessible before their line runs


// ------------------------------------------------------------
// PART 3: IIFE (Immediately Invoked Function Expression)
// ------------------------------------------------------------
//
// A function that runs ITSELF immediately, the moment it's
// defined - used to keep variables private/contained.
//
// UNCOMMENT BELOW AND RUN IT:

// (function () {
//   let secret = "I'm private in here";
//   console.log(secret);
// })();
//
// // console.log(secret);   // ERROR - secret doesn't exist out here
//
// // The ( ) wrapping the function, followed by another ( ) at
// // the end, is what makes it run IMMEDIATELY, instead of
// // waiting to be called later by name.


// ------------------------------------------------------------
// PART 4: "this" - A DEEPER LOOK
// ------------------------------------------------------------
//
// We already know: inside a regular method, "this" means "the
// object currently calling this method." Arrow functions behave
// DIFFERENTLY - they do NOT get their own "this" at all; they
// borrow "this" from whatever surrounds them.
//
// UNCOMMENT BELOW AND RUN IT:

// let person = {
//   name: "Ade",
//   regularFunction: function () {
//     console.log("Regular: " + this.name);
//   },
//   arrowFunction: () => {
//     console.log("Arrow: " + this.name);
//   }
// };
//
// person.regularFunction();   // Regular: Ade  (this = person)
// person.arrowFunction();      // Arrow: undefined (this is NOT person here)
//
// // TAKEAWAY: avoid arrow functions for object methods that
// // need "this" - use a regular function instead.


// ------------------------------------------------------------
// PART 5: CALLBACK FUNCTIONS (a function passed INTO another function)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// function processOrder(orderName, callback) {
//   console.log("Processing: " + orderName);
//   callback();
// }
//
// function onComplete() {
//   console.log("Order is done!");
// }
//
// processOrder("Pizza", onComplete);
//
// // "onComplete" is passed IN as data (no brackets - we're not
// // calling it yet, just handing it over). processOrder decides
// // WHEN to actually run it, using callback().


// ------------------------------------------------------------
// PART 6: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Build your own closure: a function "makeGreeter(name)" that
//    returns a function which prints "Hello again, <name>!" every
//    time it's called.
// 2. Prove hoisting works by calling a function BEFORE its
//    declaration in your code.
// 3. Write a function that takes a callback and runs it only if
//    a number passed in is even.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. CLOSURE: an inner function remembers variables from its
//    outer function, even after the outer one has finished.
// 2. HOISTING: function declarations (and var, partially) are
//    lifted to the top of the file behind the scenes.
// 3. IIFE: a function that runs itself immediately, used to
//    keep variables private.
// 4. Regular functions get their OWN "this"; arrow functions
//    borrow "this" from their surroundings.
// 5. CALLBACK: a function passed into another function, to be
//    run later, on demand.
// ============================================================
