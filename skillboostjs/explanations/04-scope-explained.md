# 04 - Scope (Explained)

Matching file: `code/04-scope.js`

---

## PART 1: What is scope?

Scope is just the rule for WHERE a variable can be seen and used. There are 3 kinds: global, function, and block.

---

## PART 2: Global scope

```js
let country = "Nigeria";

function printCountry() {
  console.log("We are in: " + country);
}

printCountry();
console.log(country);
```

- `country` is created OUTSIDE any function — that makes it **global**.
- Global variables can be read from ANYWHERE in the file, including from inside `printCountry`, even though `country` wasn't created inside it.
- `printCountry()` runs the function → prints `We are in: Nigeria`.
- `console.log(country)` also works fine directly, outside the function.

**Output:**
```
We are in: Nigeria
Nigeria
```

---

## PART 3: Function scope

```js
function greet() {
  let message = "Hello!";
  console.log(message);
}

greet();
// console.log(message);  // ERROR!
```

- `message` is created WITH `let`, INSIDE `greet()`. That means it only exists while this function is running, and only code inside this same function can see it.
- `greet()` runs fine and prints `Hello!`.
- If you uncomment `console.log(message)` outside the function, JS throws an error: `message is not defined` — because outside the function, `message` simply doesn't exist.

---

## PART 4: Block scope (let/const only)

```js
if (true) {
  let secret = "Only visible inside this if-block";
  console.log(secret);
}
// console.log(secret);  // ERROR!
```

- A "block" is anything wrapped in `{ }` — here, the if-statement.
- `secret` is created with `let` INSIDE that block, so it's trapped there.
- Trying to read `secret` outside the `{ }` throws an error, because it no longer exists out there.

---

## PART 5: var vs let

```js
if (true) {
  var leaked = "I escaped the block!";
}
console.log(leaked);
```

- `var` does NOT respect block scope — it "leaks" out of the `{ }` it was created in.
- So even though `leaked` was created INSIDE the if-block, this line OUTSIDE the block still works and prints fine.
- This leaking behavior is exactly why modern JavaScript teaching recommends `let`/`const` instead of `var` — it can cause confusing bugs in bigger programs.

**Output:** `I escaped the block!`

---

## PART 6: Try it yourself

Practice tasks on global, function, and block scope — students build and test these themselves, comparing `let` vs `var` behavior.
