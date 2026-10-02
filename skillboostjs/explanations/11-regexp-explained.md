# 11 - RegExp (Explained)

Matching file: `code/11-regexp.js`

---

## PART 1: What is a regular expression?

A RegExp is a PATTERN used to search, test, or replace text — it checks if text follows certain RULES, rather than matching one fixed word.

---

## PART 2: Testing if text matches a pattern

```js
let pattern = /apple/;
let text = "I ate an apple today";

console.log(pattern.test(text));
```

- A pattern is written BETWEEN two forward slashes.
- `/apple/` simply looks for the exact text `"apple"` anywhere inside the given text.
- `.test(text)` checks and returns `true` if a match is found, `false` if not.

**Output:** `true`

---

## PART 3: Case-insensitive search (the "i" flag)

```js
let pattern = /apple/i;

console.log(pattern.test("I ate an APPLE"));
```

- The `i` placed right after the closing slash is a FLAG. It means "ignore uppercase/lowercase while matching."
- Without it, `"APPLE"` would NOT match `/apple/`. With it, case no longer matters.

**Output:** `true`

---

## PART 4: Finding and replacing text

```js
let text = "I love Python";
let result = text.replace(/Python/, "JavaScript");

console.log(result);
```

- `.replace(pattern, newText)` searches `text` for whatever matches the pattern and swaps it out for `"JavaScript"`.
- The result is stored in a NEW variable, `result` — the original `text` is unchanged.

**Output:** `I love JavaScript`

---

## PART 5: Common pattern symbols

- `\d` — matches any single digit (0–9)
- `\w` — matches any single letter, number, or underscore
- `+` — "one or more" of whatever comes right before it
- `*` — "zero or more" of whatever comes right before it
- `^` — the text must START with what follows
- `$` — the text must END with what came before

```js
let hasNumber = /\d/;

console.log(hasNumber.test("Room 12"));          // true
console.log(hasNumber.test("No numbers here"));  // false
```

- `/\d/` matches if there is AT LEAST ONE digit anywhere in the text.
- `"Room 12"` contains digits → `true`. `"No numbers here"` has none → `false`.

---

## PART 6: Real example — checking a phone number pattern

```js
let phonePattern = /^\d{11}$/;

console.log(phonePattern.test("08012345678"));   // true
console.log(phonePattern.test("0801234"));        // false
```

- `^` — must start here
- `\d` — a digit
- `{11}` — exactly 11 times in a row
- `$` — must end here
- Together: the ENTIRE text must be exactly 11 digits, nothing more, nothing less.
- `"08012345678"` has exactly 11 digits → `true`. `"0801234"` only has 7 → `false`.

---

## PART 7: Try it yourself

Practice tasks — matching "JavaScript" case-insensitively, replacing a word, and adjusting the digit pattern. Students build and test these themselves.
