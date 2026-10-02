// ============================================================
// JAVASCRIPT DATA TYPES - BEGINNER LESSON
// ============================================================
//
// HOW TO USE THIS FILE:
// Everything below is commented out in blocks.
// Uncomment ONE block at a time, run it with: node 12-datatypes.js
// Explain it to the students, then move to the next block.
//
// To uncomment: select the lines, then press Ctrl + / (Windows)
// or Cmd + / (Mac). Press it again to re-comment.
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS A DATA TYPE? (in the simplest way possible)
// ------------------------------------------------------------
//
// Imagine sorting a bag of mixed items: some are fruits, some
// are toys, some are clothes. Each item belongs to a CATEGORY.
//
// In JavaScript, every value also belongs to a category - called
// a DATA TYPE - which tells JS how to treat that value.


// ------------------------------------------------------------
// PART 2: THE MAIN DATA TYPES
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let name = "Ade";           // String   -> text, in quotes
// let age = 20;                // Number   -> any number, with or without decimals
// let isStudent = true;        // Boolean  -> true or false only
// let car = { brand: "Toyota" }; // Object -> a collection of properties
// let colors = ["Red", "Blue"];  // Object (Array is a special object)
// let nothingYet;               // Undefined -> a variable with no value yet
// let empty = null;             // Null     -> "intentionally nothing"
//
// console.log(typeof name);        // string
// console.log(typeof age);         // number
// console.log(typeof isStudent);   // boolean
// console.log(typeof car);         // object
// console.log(typeof colors);      // object (arrays are objects!)
// console.log(typeof nothingYet);  // undefined
// console.log(typeof empty);       // object (this is a famous JS quirk!)


// ------------------------------------------------------------
// PART 3: PRIMITIVE VS OBJECT TYPES (in simple terms)
// ------------------------------------------------------------
//
// PRIMITIVE = a single, simple value (string, number, boolean,
//             undefined, null)
// OBJECT    = a collection that can hold many values (object,
//             array, function)


// ------------------------------------------------------------
// PART 4: undefined VS null (the classic confusion)
// ------------------------------------------------------------
//
// undefined = "nobody has given this a value yet" (JS did this
//             automatically)
// null      = "this is EMPTY on purpose" (a person did this on
//             purpose)
//
// UNCOMMENT BELOW AND RUN IT:

// let a;              // undefined - JS gave it no value automatically
// let b = null;        // null - WE chose to say it's empty
//
// console.log(a);   // undefined
// console.log(b);   // null


// ------------------------------------------------------------
// PART 5: CHECKING TYPES WITH typeof
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// console.log(typeof "hello");     // string
// console.log(typeof 25);           // number
// console.log(typeof 25.5);         // number (JS doesn't separate int/float)
// console.log(typeof true);         // boolean
// console.log(typeof [1,2,3]);      // object
// console.log(typeof function(){}); // function


// ------------------------------------------------------------
// PART 6: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Create one variable for each data type (string, number,
//    boolean, array, object, undefined, null) and print the
//    typeof each one.
// 2. Explain in your own words the difference between undefined
//    and null.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. String: text in quotes.
// 2. Number: any number.
// 3. Boolean: true or false.
// 4. Object: a collection of properties (arrays are objects too).
// 5. Undefined: JS auto-gave "no value".
// 6. Null: a person INTENTIONALLY set it as empty.
// 7. typeof tells you the data type of any value.
// ============================================================
