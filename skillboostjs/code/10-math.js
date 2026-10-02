// ============================================================
// JAVASCRIPT MATH - BEGINNER LESSON
// ============================================================
//
// HOW TO USE THIS FILE:
// Everything below is commented out in blocks.
// Uncomment ONE block at a time, run it with: node 10-math.js
// Explain it to the students, then move to the next block.
//
// To uncomment: select the lines, then press Ctrl + / (Windows)
// or Cmd + / (Mac). Press it again to re-comment.
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS THE Math OBJECT? (in the simplest way possible)
// ------------------------------------------------------------
//
// Imagine a calculator that came built into JavaScript for
// free. You never have to build round(), or random(), or power()
// yourself - JS already has a toolbox called "Math" full of
// ready-made number tools.
//
// You don't create a Math object with "new" - you just use it
// directly: Math.something()


// ------------------------------------------------------------
// PART 2: ROUNDING NUMBERS
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// console.log(Math.round(4.5));   // 5  (rounds to nearest whole number)
// console.log(Math.ceil(4.1));    // 5  (always rounds UP)
// console.log(Math.floor(4.9));   // 4  (always rounds DOWN)


// ------------------------------------------------------------
// PART 3: BIGGEST / SMALLEST
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// console.log(Math.max(3, 7, 2, 9));   // 9 - the biggest
// console.log(Math.min(3, 7, 2, 9));   // 2 - the smallest


// ------------------------------------------------------------
// PART 4: POWER AND SQUARE ROOT
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// console.log(Math.pow(2, 3));    // 8   (2 to the power of 3)
// console.log(Math.sqrt(16));     // 4   (square root of 16)


// ------------------------------------------------------------
// PART 5: RANDOM NUMBERS
// ------------------------------------------------------------
//
// Math.random() gives a random decimal between 0 and 1 (never 1).
//
// UNCOMMENT BELOW AND RUN IT:

// console.log(Math.random());
//
// // To get a random WHOLE number between 1 and 10:
// let randomNum = Math.floor(Math.random() * 10) + 1;
// console.log(randomNum);


// ------------------------------------------------------------
// PART 6: OTHER USEFUL ONES
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// console.log(Math.abs(-7));      // 7   (removes the negative sign)
// console.log(Math.PI);           // 3.14159...


// ------------------------------------------------------------
// PART 7: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Round 7.6 up, down, and to the nearest whole number.
// 2. Find the max and min of 5 numbers you choose.
// 3. Generate a random whole number between 1 and 100.
// 4. Calculate the square root of 81 and 2 raised to the power of 5.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. Math is a built-in toolbox, no "new" needed.
// 2. round(), ceil(), floor() -> rounding.
// 3. max(), min() -> biggest/smallest.
// 4. pow(), sqrt() -> power and square root.
// 5. random() -> random decimal between 0 and 1.
// 6. abs() -> removes negative sign.
// ============================================================
