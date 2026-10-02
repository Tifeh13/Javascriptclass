// ============================================================
// JAVASCRIPT ERRORS - BEGINNER LESSON
// ============================================================
//
// HOW TO USE THIS FILE:
// Everything below is commented out in blocks.
// Uncomment ONE block at a time, run it with: node 13-errors.js
// Explain it to the students, then move to the next block.
//
// To uncomment: select the lines, then press Ctrl + / (Windows)
// or Cmd + / (Mac). Press it again to re-comment.
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS AN ERROR? (in the simplest way possible)
// ------------------------------------------------------------
//
// Imagine you're baking, and the recipe says "add sugar" but
// there's no sugar in the kitchen. You can't just continue -
// something has gone wrong, and you need to stop and handle it.
//
// An ERROR in JavaScript is exactly that - something went wrong
// while the code was running, and unless you HANDLE it, your
// whole program crashes and stops.


// ------------------------------------------------------------
// PART 2: A NORMAL ERROR CRASHING THE PROGRAM
// ------------------------------------------------------------
//
// (uncomment this block ALONE to see a crash on purpose)

// console.log("Before the error");
// console.log(undefinedVariable);   // this variable doesn't exist - CRASH
// console.log("After the error");   // this line never runs


// ------------------------------------------------------------
// PART 3: try...catch (handling the error so it doesn't crash)
// ------------------------------------------------------------
//
// "try" = attempt to run this code
// "catch" = if it fails, do THIS instead of crashing
//
// UNCOMMENT BELOW AND RUN IT:

// try {
//   console.log("Before the error");
//   console.log(undefinedVariable);   // this will fail
//   console.log("This line is skipped");
// } catch (error) {
//   console.log("Something went wrong: " + error.message);
// }
//
// console.log("The program continues normally after catch!");


// ------------------------------------------------------------
// PART 4: finally (runs NO MATTER WHAT - error or not)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// try {
//   console.log("Trying...");
//   console.log(missingThing);
// } catch (error) {
//   console.log("Caught an error: " + error.message);
// } finally {
//   console.log("This ALWAYS runs, error or not.");
// }


// ------------------------------------------------------------
// PART 5: throw (creating your OWN custom error)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// function checkAge(age) {
//   if (age < 18) {
//     throw "You must be 18 or older!";
//   }
//   return "Access granted";
// }
//
// try {
//   console.log(checkAge(15));
// } catch (error) {
//   console.log("Error: " + error);
// }


// ------------------------------------------------------------
// PART 6: COMMON ERROR TYPES YOU WILL SEE
// ------------------------------------------------------------
//
// ReferenceError -> using a variable that doesn't exist
// TypeError      -> using a value in the wrong way (e.g calling
//                    something that's not a function)
// SyntaxError    -> the code itself is written wrong (missing
//                    bracket, missing comma, etc.)


// ------------------------------------------------------------
// PART 7: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Write code that causes a ReferenceError on purpose, wrap
//    it in try...catch, and print a friendly message instead
//    of letting it crash.
// 2. Add a finally block that always prints "Done checking".
// 3. Write a function that throws a custom error if a number
//    passed in is negative.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. An error stops your program unless you handle it.
// 2. try = attempt the code.
// 3. catch(error) = runs if something fails, error.message tells you why.
// 4. finally = always runs, error or not.
// 5. throw = create your own custom error.
// 6. ReferenceError, TypeError, SyntaxError are common error types.
// ============================================================
