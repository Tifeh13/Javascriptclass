// ============================================================
// JAVASCRIPT OPERATORS - BEGINNER LESSON
// ============================================================
//
// HOW TO USE THIS FILE:
// Everything below is commented out in blocks.
// Uncomment ONE block at a time, run it with: node 15-operators.js
// Explain it to the students, then move to the next block.
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS AN OPERATOR? (in the simplest way possible)
// ------------------------------------------------------------
//
// An operator is a symbol that DOES something with values, like
// + - * / in normal math class. JavaScript also has operators
// for COMPARING things and for TRUE/FALSE logic.


// ------------------------------------------------------------
// PART 2: ARITHMETIC OPERATORS (math)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// console.log(5 + 3);    // 8  (addition)
// console.log(5 - 3);    // 2  (subtraction)
// console.log(5 * 3);    // 15 (multiplication)
// console.log(5 / 3);    // 1.666... (division)
// console.log(5 % 3);    // 2  (remainder/modulus - what's LEFT OVER after dividing)
// console.log(5 ** 2);   // 25 (power - 5 to the power of 2)


// ------------------------------------------------------------
// PART 3: COMPARISON OPERATORS
// ------------------------------------------------------------
//
// These always give back TRUE or FALSE.
//
// UNCOMMENT BELOW AND RUN IT:

// console.log(5 == "5");    // true  - only checks the VALUE, ignores type
// console.log(5 === "5");   // false - checks VALUE AND TYPE (5 is a number, "5" is text)
// console.log(5 !== "5");   // true  - "not strictly equal"
// console.log(5 > 3);        // true
// console.log(5 < 3);        // false
// console.log(5 >= 5);       // true (greater than OR equal to)
//
// // RULE TO REMEMBER: always use === and !== in real code, not
// // == and !=. Loose equality (==) causes confusing bugs.


// ------------------------------------------------------------
// PART 4: LOGICAL OPERATORS (true/false logic)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// console.log(true && false);   // false - AND: BOTH sides must be true
// console.log(true || false);   // true  - OR: AT LEAST ONE side must be true
// console.log(!true);            // false - NOT: flips true to false (or false to true)
//
// let age = 20;
// console.log(age > 18 && age < 65);   // true - checks BOTH conditions


// ------------------------------------------------------------
// PART 5: ASSIGNMENT SHORTCUTS
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let x = 5;
// x += 2;   // same as writing: x = x + 2
// console.log(x);   // 7
//
// x -= 1;   // same as: x = x - 1
// console.log(x);   // 6
//
// x *= 2;   // same as: x = x * 2
// console.log(x);   // 12


// ------------------------------------------------------------
// PART 6: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Calculate the remainder of 17 divided by 5 using %.
// 2. Write a comparison that checks if 10 is both greater than 5
//    AND less than 20, using &&.
// 3. Start with a variable set to 10, then use += and -= to
//    change it, printing it after each change.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. Arithmetic operators: + - * / % **
// 2. % gives the remainder after dividing.
// 3. Comparison operators give back true/false: == === != !== > < >= <=
// 4. ALWAYS prefer === and !== over == and !=.
// 5. Logical operators: && (AND), || (OR), ! (NOT).
// 6. Shortcuts: += -= *= /= update a variable in place.
// ============================================================
