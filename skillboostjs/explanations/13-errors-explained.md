# 13 - Errors (Explained)

Matching file: `code/13-errors.js`

---

## PART 1: What is an error?

An error is something that goes wrong WHILE your code is running. Unless you handle it, the whole program stops right at that point, and nothing after it runs.

---

## PART 2: A normal error crashing the program

```js
console.log("Before the error");
console.log(undefinedVariable);
console.log("After the error");
```

- Line 1 runs fine.
- `undefinedVariable` was never created anywhere — JS can't find it, so it throws an error right here, and the WHOLE program stops immediately.
- Line 3 never gets a chance to run, because the crash already happened one line above.

---

## PART 3: try...catch (preventing the crash)

```js
try {
  console.log("Before the error");
  console.log(undefinedVariable);
  console.log("This line is skipped");
} catch (error) {
  console.log("Something went wrong: " + error.message);
}

console.log("The program continues normally after catch!");
```

- `try {` — attempt to run everything inside.
- `"Before the error"` prints fine.
- `undefinedVariable` fails — but this time JS does NOT crash the whole program. Instead, it immediately jumps OUT of `try` and INTO `catch`.
- `"This line is skipped"` never runs — we already jumped out the moment the error happened, one line above it.
- `catch (error) {` — this block only runs if something inside `try` failed. The error details get packed into the variable we named `error`.
- `error.message` is a short, readable description of what went wrong.
- Because `try/catch` handled the error instead of letting it crash the program, the line after the whole block still runs normally.

**Output:**
```
Before the error
Something went wrong: undefinedVariable is not defined
The program continues normally after catch!
```

---

## PART 4: finally (always runs)

```js
try {
  console.log("Trying...");
  console.log(missingThing);
} catch (error) {
  console.log("Caught an error: " + error.message);
} finally {
  console.log("This ALWAYS runs, error or not.");
}
```

- `finally {` runs EVERY SINGLE TIME — whether an error happened or not, and whether it was caught or not.
- Often used for "cleanup" tasks that must always happen (like hiding a loading spinner).

**Output:**
```
Trying...
Caught an error: missingThing is not defined
This ALWAYS runs, error or not.
```

---

## PART 5: throw (creating your own error)

```js
function checkAge(age) {
  if (age < 18) {
    throw "You must be 18 or older!";
  }
  return "Access granted";
}

try {
  console.log(checkAge(15));
} catch (error) {
  console.log("Error: " + error);
}
```

- `throw "..."` MANUALLY creates our own error, using our own custom message. This immediately stops the function and hands the message off to whoever called it.
- `return "Access granted"` is only reached if `age` was NOT less than 18 (so the `throw` never happened).
- We call `checkAge(15)` INSIDE a `try` block, because we know this function might throw, and we want to handle it gracefully.
- Since 15 < 18, it throws — the `catch` block grabs the message into `error` and prints it.

**Output:** `Error: You must be 18 or older!`

---

## PART 6: Common error types

- **ReferenceError** — using a variable that doesn't exist.
- **TypeError** — using a value the wrong way, e.g. calling something that isn't actually a function.
- **SyntaxError** — the code itself is written incorrectly (missing bracket, missing comma, etc.), and it happens BEFORE the code even runs.

---

## PART 7: Try it yourself

Practice tasks — catching a ReferenceError, adding a `finally` block, and writing a function that throws a custom error for negative numbers. Students build and test these themselves.
