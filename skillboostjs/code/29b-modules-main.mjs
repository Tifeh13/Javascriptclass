// ============================================================
// 29b. JAVASCRIPT MODULES - BEGINNER LESSON (main file)
// ============================================================
//
// HOW TO USE THIS FILE:
// Run it with:  node 29b-modules-main.mjs
// (notice the ".mjs" extension - this is required for Node to
// understand import/export syntax)
//
// This file works ALONGSIDE 29a-modules-mathHelpers.mjs, which
// must be in the SAME FOLDER.
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS A MODULE? (in the simplest way possible)
// ------------------------------------------------------------
//
// Imagine splitting one huge textbook into separate chapters.
// Each chapter can be read on its own, but they can also
// reference each other. A MODULE is one JS file that can share
// (export) pieces of itself with other files, and use (import)
// pieces from other files.
//
// This keeps big projects organized - instead of one giant
// messy file, you split code into focused, reusable files.


// ------------------------------------------------------------
// PART 2: IMPORTING NAMED EXPORTS
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// import { add, subtract, PI } from "./29a-modules-mathHelpers.mjs";
//
// console.log(add(5, 3));        // 8
// console.log(subtract(5, 3));   // 2
// console.log(PI);                // 3.14159
//
// // The { } here must match the EXACT names that were exported
// // in the other file (export function add, export function
// // subtract, export const PI).


// ------------------------------------------------------------
// PART 3: IMPORTING A DEFAULT EXPORT
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// import multiply from "./29a-modules-mathHelpers.mjs";
//
// console.log(multiply(4, 5));   // 20
//
// // No { } for a default import - and you can name it ANYTHING
// // you like on this side, it doesn't have to match the
// // original name.


// ------------------------------------------------------------
// PART 4: IMPORTING BOTH NAMED AND DEFAULT TOGETHER
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// import multiply, { add, subtract, PI } from "./29a-modules-mathHelpers.mjs";
//
// console.log(multiply(2, 3));   // 6
// console.log(add(2, 3));         // 5


// ------------------------------------------------------------
// PART 5: RENAMING AN IMPORT WITH "as"
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// import { add as sum } from "./29a-modules-mathHelpers.mjs";
//
// console.log(sum(10, 5));   // 15
//
// // Useful when the imported name clashes with something you
// // already have, or just to make it clearer in your own file.


// ------------------------------------------------------------
// PART 6: NAMED VS DEFAULT EXPORTS - WHEN TO USE WHICH
// ------------------------------------------------------------
//
// - Use NAMED exports when a file shares SEVERAL related things
//   (like a toolbox of several functions).
// - Use a DEFAULT export when a file's WHOLE PURPOSE is to
//   provide ONE main thing (like one main function or class).
// - A file can have BOTH, like mathHelpers.mjs does here.


// ------------------------------------------------------------
// PART 7: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Open 29a-modules-mathHelpers.mjs and add a new named export
//    function called "divide(a, b)".
// 2. Import and use your new "divide" function here.
// 3. Import the default export (multiply) but rename it to
//    "times" using "as", and use it.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. A module is one JS file that can export pieces of itself
//    for other files to import and use.
// 2. "export function name() {}" or "export const x = ..." are
//    NAMED exports - import them with matching names in { }.
// 3. "export default ..." is ONE main export per file - import
//    it WITHOUT { }, and you can rename it freely.
// 4. "import { x as y }" lets you rename an import.
// 5. Node requires the .mjs extension (or package.json
//    "type": "module") to use import/export syntax.
// ============================================================
