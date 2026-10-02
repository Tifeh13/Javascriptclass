// ============================================================
// JAVASCRIPT CONDITIONALS - BEGINNER LESSON
// ============================================================
//
// HOW TO USE THIS FILE:
// Everything below is commented out in blocks.
// Uncomment ONE block at a time, run it with: node 16-conditionals.js
// Explain it to the students, then move to the next block.
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS A CONDITIONAL? (in the simplest way possible)
// ------------------------------------------------------------
//
// Imagine a traffic light. IF it's green, you go. ELSE IF it's
// yellow, you slow down. ELSE (it must be red), you stop.
//
// A conditional lets your code make DECISIONS - run different
// code depending on whether something is true or false.


// ------------------------------------------------------------
// PART 2: if / else if / else
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let age = 20;
//
// if (age >= 18) {
//   console.log("Adult");
// } else if (age >= 13) {
//   console.log("Teen");
// } else {
//   console.log("Child");
// }
//
// // JS checks each condition IN ORDER, top to bottom. The
// // moment one is true, it runs that block and SKIPS the rest.


// ------------------------------------------------------------
// PART 3: THE TERNARY OPERATOR (a shortcut for simple if/else)
// ------------------------------------------------------------
//
// Format: condition ? valueIfTrue : valueIfFalse
//
// UNCOMMENT BELOW AND RUN IT:

// let age = 20;
// let status = age >= 18 ? "Adult" : "Minor";
// console.log(status);
//
// // This single line does the same job as a full if/else, but
// // only when you just need to PICK one of two values.


// ------------------------------------------------------------
// PART 4: switch (for checking ONE value against MANY options)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let day = 3;
//
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Some other day");
// }
//
// // "break" is IMPORTANT - without it, JS keeps running the
// // NEXT case too, even if it doesn't match. "default" runs
// // only if NOTHING else matched.


// ------------------------------------------------------------
// PART 5: TRUTHY AND FALSY VALUES
// ------------------------------------------------------------
//
// Some values act like "false" even though they aren't the
// literal word false. These are called FALSY values:
// false, 0, "", null, undefined, NaN
//
// EVERYTHING else is TRUTHY (acts like true), including "0"
// (as text) and empty objects/arrays.
//
// UNCOMMENT BELOW AND RUN IT:

// if (0) {
//   console.log("This will NOT print - 0 is falsy");
// }
//
// if ("hello") {
//   console.log("This WILL print - any non-empty string is truthy");
// }


// ------------------------------------------------------------
// PART 6: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Write an if/else chain that prints "Pass" if a score is 50
//    or above, otherwise "Fail".
// 2. Rewrite task 1 using the ternary operator instead.
// 3. Write a switch statement for a variable "fruit" that prints
//    a different message for "apple", "banana", and "mango",
//    plus a default message for anything else.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. if / else if / else makes decisions based on conditions.
// 2. condition ? valueIfTrue : valueIfFalse is the ternary shortcut.
// 3. switch checks ONE value against MANY possible cases - don't
//    forget "break" after each case.
// 4. Falsy values: false, 0, "", null, undefined, NaN.
//    Everything else is truthy.
// ============================================================
