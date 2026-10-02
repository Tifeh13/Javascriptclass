// ============================================================
// JAVASCRIPT VARIABLES - BEGINNER LESSON
// ============================================================
//
// HOW TO USE THIS FILE:
// Everything below is commented out in blocks.
// Uncomment ONE block at a time, run it with: node 14-variables.js
// Explain it to the students, then move to the next block.
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS A VARIABLE? (in the simplest way possible)
// ------------------------------------------------------------
//
// Think of a variable like a labelled bucket. You put something
// inside it, and later you can look inside that same bucket to
// get the thing back, or swap it for something else.
//
// UNCOMMENT BELOW AND RUN IT:

// let age = 20;
// console.log(age);


// ------------------------------------------------------------
// PART 2: let VS const (which bucket to use)
// ------------------------------------------------------------
//
// "let" = a bucket whose contents you CAN change later.
// "const" = a bucket that is SEALED once you put something in -
//   you cannot put a different thing in it afterward.
//
// UNCOMMENT BELOW AND RUN IT:

// let age = 20;
// age = 21;            // allowed - let can be changed
// console.log(age);
//
// const name = "Ade";
// // name = "Chidi";   // ERROR! can't reassign a const


// ------------------------------------------------------------
// PART 3: const DOES NOT MEAN "FROZEN"
// ------------------------------------------------------------
//
// const only locks the VARIABLE itself from being reassigned.
// If the bucket holds an object or array, you CAN still change
// what's INSIDE it.
//
// UNCOMMENT BELOW AND RUN IT:

// const user = { name: "Ade" };
// user.name = "Chidi";   // this is ALLOWED
// console.log(user);
//
// // user = { name: "Tolu" };   // this would ERROR - can't replace the whole bucket


// ------------------------------------------------------------
// PART 4: var (the OLD way - why we avoid it)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// var old = "I still work, but I'm outdated";
// console.log(old);
//
// // var does not respect block scope the way let/const do -
// // this can cause confusing bugs in bigger programs. Always
// // prefer let/const in modern JavaScript.


// ------------------------------------------------------------
// PART 5: NAMING RULES FOR VARIABLES
// ------------------------------------------------------------
//
// - Names can have letters, numbers, _ and $
// - Names CANNOT start with a number
// - Names ARE case-sensitive (age and Age are different variables)
// - Use "camelCase" by convention: studentName, not student_name
//
// UNCOMMENT BELOW AND RUN IT:

// let studentName = "Ade";
// let studentAge = 20;
// console.log(studentName, studentAge);
//
// // let 1name = "bad";   // ERROR - can't start with a number


// ------------------------------------------------------------
// PART 6: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Create a let variable for your age, print it, then change
//    it and print it again.
// 2. Create a const variable for your name and try to reassign
//    it - read the exact error message.
// 3. Create a const object with 2 properties, then successfully
//    change ONE of those properties without errors.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. A variable is a labelled bucket that stores a value.
// 2. let = can be changed later. const = cannot be reassigned.
// 3. const does NOT freeze objects/arrays - their contents can
//    still change.
// 4. var is the old way - avoid it in modern JS.
// 5. Variable names: letters/numbers/_/$ only, can't start with
//    a number, case-sensitive, use camelCase.
// ============================================================
