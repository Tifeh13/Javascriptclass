// ============================================================
// 12. ES6 FEATURES: DESTRUCTURING, SPREAD & REST - BEGINNER LESSON
// ============================================================
//
// NOTE: Template literals and default parameters (also ES6
// features) were already covered in 17-strings.js and
// 03-functions.js - this file focuses on what's left:
// destructuring, and the spread/rest operators.
//
// HOW TO USE THIS FILE:
// Uncomment ONE block at a time, run it with: node 25-es6-features.js
// ============================================================


// ------------------------------------------------------------
// PART 1: ARRAY DESTRUCTURING (unpacking an array quickly)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let fruits = ["Apple", "Banana", "Mango"];
//
// let [first, second, third] = fruits;
// console.log(first);   // Apple
// console.log(second);  // Banana
// console.log(third);   // Mango
//
// // This is a shortcut for writing:
// // let first = fruits[0]; let second = fruits[1]; let third = fruits[2];
// // but in ONE clean line.


// ------------------------------------------------------------
// PART 2: SKIPPING ITEMS WHEN DESTRUCTURING
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let colors = ["Red", "Green", "Blue"];
//
// let [primary, , third] = colors;   // the extra comma SKIPS "Green"
// console.log(primary);   // Red
// console.log(third);     // Blue


// ------------------------------------------------------------
// PART 3: OBJECT DESTRUCTURING (unpacking an object quickly)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let student = { name: "Ade", age: 20, course: "JavaScript" };
//
// let { name, age } = student;
// console.log(name);   // Ade
// console.log(age);    // 20
//
// // IMPORTANT: for objects, the variable names MUST match the
// // property names exactly (unlike arrays, where position
// // decides everything).


// ------------------------------------------------------------
// PART 4: RENAMING WHILE DESTRUCTURING AN OBJECT
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let student = { name: "Ade", age: 20 };
//
// let { name: studentName, age: studentAge } = student;
// console.log(studentName);   // Ade
// console.log(studentAge);    // 20
//
// // "name: studentName" means: "pull out the 'name' property,
// // but store it in a variable called studentName instead."


// ------------------------------------------------------------
// PART 5: SPREAD OPERATOR (...) - UNPACKING INTO INDIVIDUAL ITEMS
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let nums1 = [1, 2, 3];
// let nums2 = [...nums1, 4, 5];
// console.log(nums2);   // [1, 2, 3, 4, 5]
//
// // "...nums1" spreads/unpacks each item of nums1 OUT of its
// // array, individually, before building the new array.
//
// let obj1 = { a: 1, b: 2 };
// let obj2 = { ...obj1, c: 3 };
// console.log(obj2);   // { a: 1, b: 2, c: 3 }
//
// // Same idea, but for objects - copies every property of obj1
// // into a brand-new object, then adds c: 3 on top.


// ------------------------------------------------------------
// PART 6: REST OPERATOR (...) - GATHERING LEFTOVER ITEMS
// ------------------------------------------------------------
//
// Rest LOOKS exactly like spread, but does the OPPOSITE job:
// instead of unpacking, it GATHERS multiple separate values
// INTO one array.
//
// UNCOMMENT BELOW AND RUN IT:

// function sum(...numbers) {
//   // "numbers" gathers EVERY argument passed in, no matter how
//   // many, into a single array
//   return numbers.reduce((total, n) => total + n, 0);
// }
//
// console.log(sum(1, 2, 3));        // 6
// console.log(sum(10, 20, 30, 40)); // 100
//
// // Rest is especially useful when you don't know in advance
// // how many values will be passed into a function.


// ------------------------------------------------------------
// PART 7: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Destructure an array of 3 colors into 3 separate variables.
// 2. Destructure an object with name/age/course into 3 variables,
//    renaming at least one of them.
// 3. Use the spread operator to combine two arrays of numbers
//    into one.
// 4. Write a function using the rest operator that returns the
//    LARGEST number out of any amount of arguments passed in.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. Destructuring unpacks arrays/objects into separate
//    variables in one clean line.
// 2. Array destructuring goes by POSITION; object destructuring
//    goes by MATCHING PROPERTY NAME (which can be renamed).
// 3. Spread (...) UNPACKS an array/object's items individually
//    into a new array/object.
// 4. Rest (...) GATHERS multiple separate values into one array
//    - commonly used in function parameters.
// ============================================================
