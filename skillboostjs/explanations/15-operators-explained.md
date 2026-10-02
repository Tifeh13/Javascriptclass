# 15 - Operators (Explained)

Matching file: `code/15-operators.js`

---

## PART 1: What is an operator?

A symbol that DOES something with values — the math symbols you already know (`+ - * /`), plus comparison and true/false logic symbols JavaScript adds on top.

---

## PART 2: Arithmetic operators

```js
console.log(5 + 3);    // 8
console.log(5 - 3);    // 2
console.log(5 * 3);    // 15
console.log(5 / 3);    // 1.666...
console.log(5 % 3);    // 2
console.log(5 ** 2);   // 25
```

- `+ - * /` work exactly like regular math.
- `%` (modulus) gives the **remainder** after dividing — `5 ÷ 3 = 1` remainder `2`, so `5 % 3` is `2`. Very useful for checking even/odd numbers: `n % 2 === 0` means even.
- `**` is "power" — `5 ** 2` means `5 × 5`.

---

## PART 3: Comparison operators

```js
console.log(5 == "5");    // true
console.log(5 === "5");   // false
console.log(5 !== "5");   // true
console.log(5 > 3);        // true
console.log(5 < 3);        // false
console.log(5 >= 5);       // true
```

- `==` only checks the VALUE, and will convert types to try to match — `5 == "5"` is `true` even though one is a number and one is text.
- `===` checks VALUE **and** TYPE — `5 === "5"` is `false` because a number is never the same type as text.
- `!==` is "strictly not equal" — the opposite of `===`.
- **Golden rule to drill into students: always use `===` and `!==`**, never `==`/`!=`, unless there's a very specific reason. Loose equality is a common source of confusing bugs.

---

## PART 4: Logical operators

```js
console.log(true && false);   // false
console.log(true || false);   // true
console.log(!true);            // false

let age = 20;
console.log(age > 18 && age < 65);   // true
```

- `&&` (AND) — needs **both** sides to be true.
- `||` (OR) — needs **at least one** side to be true.
- `!` (NOT) — flips true to false, or false to true.
- `age > 18 && age < 65` checks TWO conditions at once — both must pass for the whole thing to be `true`.

---

## PART 5: Assignment shortcuts

```js
let x = 5;
x += 2;   // 7
x -= 1;   // 6
x *= 2;   // 12
```

- `x += 2` is shorthand for `x = x + 2`.
- `x -= 1` is shorthand for `x = x - 1`.
- `x *= 2` is shorthand for `x = x * 2`.
- Same idea works for `/=` too.

---

## PART 6: Try it yourself

Practice tasks — modulus, combined comparisons with `&&`, and assignment shortcuts. Students build and test these themselves.
