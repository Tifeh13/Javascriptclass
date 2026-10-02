# 16 - Conditionals (Explained)

Matching file: `code/16-conditionals.js`

---

## PART 1: What is a conditional?

Like a traffic light: IF it's green, go. ELSE IF yellow, slow down. ELSE (must be red), stop. A conditional lets code make decisions.

---

## PART 2: if / else if / else

```js
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teen");
} else {
  console.log("Child");
}
```

- JS checks each condition top to bottom.
- `age >= 18` → `20 >= 18` is `true`, so `"Adult"` prints, and the rest (`else if`, `else`) are **skipped entirely** — only one branch ever runs.

**Output:** `Adult`

---

## PART 3: The ternary operator

```js
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);
```

- Format: `condition ? valueIfTrue : valueIfFalse`
- This is a one-line shortcut for a simple if/else, when you just need to **pick one of two values** to store or use.

**Output:** `Adult`

---

## PART 4: switch

```js
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Some other day");
}
```

- `switch(day)` checks `day` against each `case` in order.
- `case 3:` matches, so `"Wednesday"` prints.
- `break;` stops the switch from continuing — **without it**, JS keeps running the NEXT case too, even though it doesn't match (called "fall-through," usually a bug).
- `default:` only runs if NOTHING else matched.

**Output:** `Wednesday`

---

## PART 5: Truthy and falsy values

```js
if (0) {
  console.log("This will NOT print");
}

if ("hello") {
  console.log("This WILL print");
}
```

- Some values act like `false` even though they aren't the literal word — these are **falsy**: `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`.
- **Everything else is truthy** (acts like `true`), including `"0"` (as text) and empty objects/arrays — a common trap for beginners.
- `if (0)` never runs because `0` is falsy. `if ("hello")` runs because any non-empty string is truthy.

**Output:** `This WILL print`

---

## PART 6: Try it yourself

Practice tasks — pass/fail logic with if/else, the same thing rewritten with a ternary, and a switch statement for different fruits. Students build and test these themselves.
