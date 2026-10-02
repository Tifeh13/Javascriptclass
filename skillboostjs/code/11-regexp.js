// ============================================================
// JAVASCRIPT REGEXP (REGULAR EXPRESSIONS) - BEGINNER LESSON
// ============================================================
//
// HOW TO USE THIS FILE:
// Everything below is commented out in blocks.
// Uncomment ONE block at a time, run it with: node 11-regexp.js
// Explain it to the students, then move to the next block.
//
// To uncomment: select the lines, then press Ctrl + / (Windows)
// or Cmd + / (Mac). Press it again to re-comment.
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS A REGULAR EXPRESSION? (in the simplest way possible)
// ------------------------------------------------------------
//
// Imagine you are a security guard checking IDs, and your ONLY
// job is to check "does this ID start with 2 letters and then
// have 6 numbers?" You're not reading the whole ID for meaning,
// just checking if it MATCHES A PATTERN.
//
// A Regular Expression (RegExp) is a PATTERN used to search,
// match, or test text. A regex is written between two forward
// slashes: /pattern/


// ------------------------------------------------------------
// PART 2: TESTING IF TEXT MATCHES A PATTERN
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let pattern = /apple/;   // looking for the word "apple"
// let text = "I ate an apple today";
//
// console.log(pattern.test(text));   // true - "apple" was found


// ------------------------------------------------------------
// PART 3: CASE-INSENSITIVE SEARCH (the "i" flag)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let pattern = /apple/i;   // "i" means ignore uppercase/lowercase
//
// console.log(pattern.test("I ate an APPLE"));   // true


// ------------------------------------------------------------
// PART 4: FINDING AND REPLACING TEXT
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let text = "I love Python";
// let result = text.replace(/Python/, "JavaScript");
//
// console.log(result);   // I love JavaScript


// ------------------------------------------------------------
// PART 5: COMMON PATTERN SYMBOLS
// ------------------------------------------------------------
//
// \d  -> any digit (0-9)
// \w  -> any letter, number, or underscore
// +   -> one or more of the thing before it
// *   -> zero or more of the thing before it
// ^   -> must start with this
// $   -> must end with this
//
// UNCOMMENT BELOW AND RUN IT:

// let hasNumber = /\d/;   // checks if there is ANY digit
//
// console.log(hasNumber.test("Room 12"));   // true
// console.log(hasNumber.test("No numbers here"));  // false


// ------------------------------------------------------------
// PART 6: REAL EXAMPLE - CHECKING A SIMPLE PHONE NUMBER PATTERN
// ------------------------------------------------------------
//
// This checks: does the text contain ONLY digits, 11 of them?
//
// UNCOMMENT BELOW AND RUN IT:

// let phonePattern = /^\d{11}$/;
//
// console.log(phonePattern.test("08012345678"));   // true (11 digits)
// console.log(phonePattern.test("0801234"));        // false (too short)


// ------------------------------------------------------------
// PART 7: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Write a pattern that checks if a sentence contains the
//    word "JavaScript" (case-insensitive).
// 2. Replace a word in a sentence using .replace() and a regex.
// 3. Write a pattern using \d that checks if a string has at
//    least one number in it.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. RegExp = a pattern used to test/search/replace text.
// 2. Written like: /pattern/flags
// 3. .test(text) -> true/false, does it match?
// 4. text.replace(pattern, newText) -> replaces the matched part.
// 5. \d = digit, \w = word character, + = one or more, i flag = ignore case.
// ============================================================
