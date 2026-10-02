// ============================================================
// JAVASCRIPT ARRAYS - BEGINNER LESSON
// ============================================================
//
// HOW TO USE THIS FILE:
// Everything below is commented out in blocks.
// Uncomment ONE block at a time, run it with: node 05-arrays.js
// Explain it to the students, then move to the next block.
//
// To uncomment: select the lines, then press Ctrl + / (Windows)
// or Cmd + / (Mac). Press it again to re-comment.
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS AN ARRAY? (in the simplest way possible)
// ------------------------------------------------------------
//
// Imagine an egg tray with numbered slots: slot 0, slot 1,
// slot 2... Each slot holds ONE egg, and the slots stay in
// order.
//
// An ARRAY is exactly like that egg tray - one container that
// holds many values, in order, where each value has a position
// (an INDEX) starting from 0, not 1.
//
// UNCOMMENT BELOW AND RUN IT:

// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits);
// console.log(fruits[0]);   // Apple
// console.log(fruits[2]);   // Mango


// ------------------------------------------------------------
// PART 2: CHANGING A VALUE IN AN ARRAY
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let fruits = ["Apple", "Banana", "Mango"];
// fruits[1] = "Orange";      // replace Banana with Orange
// console.log(fruits);


// ------------------------------------------------------------
// PART 3: ARRAY LENGTH
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.length);   // 3


// ------------------------------------------------------------
// PART 4: ADDING AND REMOVING ITEMS
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let fruits = ["Apple", "Banana"];
//
// fruits.push("Mango");        // add to the END
// console.log("After push:", fruits);
//
// fruits.pop();                 // remove from the END
// console.log("After pop:", fruits);
//
// fruits.unshift("Pineapple");  // add to the START
// console.log("After unshift:", fruits);
//
// fruits.shift();               // remove from the START
// console.log("After shift:", fruits);


// ------------------------------------------------------------
// PART 5: LOOPING THROUGH AN ARRAY
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let fruits = ["Apple", "Banana", "Mango"];
//
// for (let i = 0; i < fruits.length; i++) {
//   console.log(i + ": " + fruits[i]);
// }


// ------------------------------------------------------------
// PART 6: USEFUL ARRAY METHODS
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let numbers = [10, 5, 20, 1];
//
// console.log(numbers.sort());              // sorts them
// console.log(numbers.indexOf(20));         // finds position of 20
// console.log(numbers.includes(5));         // true/false, is 5 in the array?
// console.log(numbers.join(" - "));          // turns array into a string
// console.log(Array.isArray(numbers));       // true - checks if it's an array


// ------------------------------------------------------------
// PART 7: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Create an array of 5 students' names. Print the 3rd one.
// 2. Add a new student to the end, then remove the first student.
// 3. Loop through the array and print each name with its position.
// 4. Sort an array of numbers and print the result.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. Arrays hold many values in ORDER, starting at index 0.
// 2. push/pop add/remove from the end.
// 3. unshift/shift add/remove from the start.
// 4. Use a for loop (or .length) to go through every item.
// 5. sort(), indexOf(), includes(), join() are common helper methods.
// ============================================================
