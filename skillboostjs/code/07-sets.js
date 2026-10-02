// ============================================================
// JAVASCRIPT SETS - BEGINNER LESSON
// ============================================================
//
// HOW TO USE THIS FILE:
// Everything below is commented out in blocks.
// Uncomment ONE block at a time, run it with: node 06-sets.js
// Explain it to the students, then move to the next block.
//
// To uncomment: select the lines, then press Ctrl + / (Windows)
// or Cmd + / (Mac). Press it again to re-comment.
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS A SET? (in the simplest way possible)
// ------------------------------------------------------------
//
// Imagine a guest list where NO NAME is allowed to appear twice.
// If you try to add "Ade" a second time, the list just ignores
// it because Ade is already on the list.
//
// A SET is a collection of values where EVERY VALUE MUST BE
// UNIQUE. No duplicates allowed - ever.
//
// UNCOMMENT BELOW AND RUN IT:

// let names = new Set();
// names.add("Ade");
// names.add("Chidi");
// names.add("Ade");   // this is ignored - Ade is already there
//
// console.log(names);          // Set(2) {'Ade', 'Chidi'}
// console.log(names.size);     // 2 (not 3!)


// ------------------------------------------------------------
// PART 2: CREATING A SET FROM AN ARRAY (removes duplicates!)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let numbers = [1, 2, 2, 3, 4, 4, 5];
// let uniqueNumbers = new Set(numbers);
//
// console.log(uniqueNumbers);   // Set(5) {1, 2, 3, 4, 5}


// ------------------------------------------------------------
// PART 3: CHECKING AND REMOVING VALUES
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let colors = new Set(["Red", "Green", "Blue"]);
//
// console.log(colors.has("Red"));    // true
// console.log(colors.has("Purple")); // false
//
// colors.delete("Green");
// console.log(colors);


// ------------------------------------------------------------
// PART 4: LOOPING THROUGH A SET
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let fruits = new Set(["Apple", "Banana", "Mango"]);
//
// for (let fruit of fruits) {
//   console.log(fruit);
// }


// ------------------------------------------------------------
// PART 5: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Create a Set of your 3 best friends' names, then try adding
//    one of them again and prove it doesn't get duplicated.
// 2. Take an array with repeated numbers and turn it into a Set
//    to remove the duplicates.
// 3. Check if a value exists in a Set using .has()
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. A Set only stores UNIQUE values (no duplicates).
// 2. new Set() creates an empty set; new Set(array) creates it
//    from an array.
// 3. .add(), .delete(), .has(), .size are the main tools.
// 4. for...of loops through a Set.
// ============================================================
