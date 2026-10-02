// ============================================================
// JAVASCRIPT STRINGS - BEGINNER LESSON
// ============================================================
//
// HOW TO USE THIS FILE:
// Everything below is commented out in blocks.
// Uncomment ONE block at a time, run it with: node 17-strings.js
// Explain it to the students, then move to the next block.
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS A STRING? (in the simplest way possible)
// ------------------------------------------------------------
//
// A string is just TEXT - any group of characters wrapped in
// quotes. Single quotes, double quotes, and backticks all work,
// but backticks have a special superpower (see PART 2).
//
// UNCOMMENT BELOW AND RUN IT:

// let a = 'Hello';
// let b = "Hello";
// let c = `Hello`;
// console.log(a, b, c);


// ------------------------------------------------------------
// PART 2: TEMPLATE LITERALS (backticks) - THE MODERN WAY
// ------------------------------------------------------------
//
// With backticks, you can drop a variable directly INSIDE the
// text using ${ } - no more messy "+" gluing.
//
// UNCOMMENT BELOW AND RUN IT:

// let name = "Ade";
// let age = 20;
//
// // OLD WAY (still works, but messy):
// console.log("My name is " + name + " and I am " + age + " years old.");
//
// // MODERN WAY (template literal):
// console.log(`My name is ${name} and I am ${age} years old.`);


// ------------------------------------------------------------
// PART 3: COMMON STRING PROPERTIES AND METHODS
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let text = "Hello World";
//
// console.log(text.length);            // 11 - how many characters
// console.log(text.toUpperCase());     // HELLO WORLD
// console.log(text.toLowerCase());     // hello world
// console.log(text.includes("World")); // true - is "World" inside it?
// console.log(text.slice(0, 5));       // Hello - cuts from index 0 up to (not including) 5
// console.log(text.replace("World", "JS"));  // Hello JS


// ------------------------------------------------------------
// PART 4: TRIMMING AND SPLITTING
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let messy = "   hi there   ";
// console.log(messy.trim());    // "hi there" - removes extra spaces at both ends
//
// let csv = "Ade,Chidi,Tolu";
// let names = csv.split(",");   // turns text into an array, splitting at each comma
// console.log(names);            // [ 'Ade', 'Chidi', 'Tolu' ]


// ------------------------------------------------------------
// PART 5: READING INDIVIDUAL CHARACTERS
// ------------------------------------------------------------
//
// A string behaves a bit like an array of characters - each
// character has an index, starting from 0.
//
// UNCOMMENT BELOW AND RUN IT:

// let word = "JavaScript";
// console.log(word[0]);   // J
// console.log(word[4]);   // S


// ------------------------------------------------------------
// PART 6: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Create a variable for your full name, print its length,
//    and print it in all uppercase.
// 2. Use a template literal to build a sentence that includes
//    your name and your favorite subject.
// 3. Take the sentence "red,green,blue" and split it into an
//    array of 3 colors.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. A string is text, wrapped in quotes (single, double, or backtick).
// 2. Template literals (backticks) let you drop variables in
//    directly with ${ }.
// 3. .length, .toUpperCase(), .toLowerCase(), .includes(),
//    .slice(), .replace() are common string tools.
// 4. .trim() removes extra spaces; .split() turns text into an array.
// 5. Characters inside a string can be read by index, like an array.
// ============================================================
