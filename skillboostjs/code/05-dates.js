// ============================================================
// JAVASCRIPT DATES - BEGINNER LESSON
// ============================================================
//
// HOW TO USE THIS FILE:
// Everything below is commented out in blocks.
// Uncomment ONE block at a time, run it with: node 04-dates.js
// Explain it to the students, then move to the next block.
//
// To uncomment: select the lines, then press Ctrl + / (Windows)
// or Cmd + / (Mac). Press it again to re-comment.
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS A DATE OBJECT? (in the simplest way possible)
// ------------------------------------------------------------
//
// Think of a wall clock and a calendar merged into one object.
// A JS Date holds the day, month, year, hour, minute, and
// second, all in one package.
//
// We create a date using: new Date()


// ------------------------------------------------------------
// PART 2: TODAY'S DATE
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let now = new Date();
// console.log(now);   // shows today's exact date and time


// ------------------------------------------------------------
// PART 3: CREATING A SPECIFIC DATE
// ------------------------------------------------------------
//
// Format: new Date(year, monthIndex, day)
// IMPORTANT: month starts counting from 0! (0 = January)
//
// UNCOMMENT BELOW AND RUN IT:

// let birthday = new Date(2000, 0, 15);   // Jan 15, 2000
// console.log(birthday);


// ------------------------------------------------------------
// PART 4: GETTING PARTS OF A DATE
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let today = new Date();
//
// console.log("Year:", today.getFullYear());
// console.log("Month (0-11):", today.getMonth());
// console.log("Day of month:", today.getDate());
// console.log("Day of week (0=Sun):", today.getDay());
// console.log("Hour:", today.getHours());
// console.log("Minutes:", today.getMinutes());


// ------------------------------------------------------------
// PART 5: CHANGING PARTS OF A DATE
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let event = new Date();
// console.log("Before:", event);
//
// event.setFullYear(2030);
// console.log("After:", event);


// ------------------------------------------------------------
// PART 6: COMPARING DATES
// ------------------------------------------------------------
//
// You can compare dates like numbers because JS turns them into
// a timestamp behind the scenes.
//
// UNCOMMENT BELOW AND RUN IT:

// let date1 = new Date(2025, 0, 1);
// let date2 = new Date(2026, 0, 1);
//
// if (date1 < date2) {
//   console.log("date1 is earlier than date2");
// }


// ------------------------------------------------------------
// PART 7: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Print today's date fully.
// 2. Create a date for your own birthday and print the year,
//    month and day separately using the get methods.
// 3. Create two dates and write an if-statement that checks
//    which one comes first.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. new Date() gives today's date and time.
// 2. new Date(year, month, day) creates a specific date (month
//    starts at 0).
// 3. getFullYear(), getMonth(), getDate(), getDay(), getHours()
//    read parts of a date.
// 4. setFullYear() and similar "set" methods change parts.
// 5. Dates can be compared with <, >, ==.
// ============================================================
