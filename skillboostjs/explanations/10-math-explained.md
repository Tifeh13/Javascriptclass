# 10 - Math (Explained)

Matching file: `code/10-math.js`

---

## PART 1: What is the Math object?

Math is a built-in toolbox that comes free with JavaScript. You never write `new Math()` — you use it directly: `Math.something()`.

---

## PART 2: Rounding numbers

```js
console.log(Math.round(4.5));   // 5
console.log(Math.ceil(4.1));    // 5
console.log(Math.floor(4.9));   // 4
```

- `Math.round()` — rounds to the NEAREST whole number. `4.5` is exactly halfway, and JS rounds `.5` up.
- `Math.ceil()` — ALWAYS rounds UP, no matter how small the decimal is. Even `4.1` becomes `5`.
- `Math.floor()` — ALWAYS rounds DOWN, no matter how close to the next number. Even `4.9` becomes `4`.

---

## PART 3: Biggest / smallest

```js
console.log(Math.max(3, 7, 2, 9));   // 9
console.log(Math.min(3, 7, 2, 9));   // 2
```

- `Math.max()` takes any number of values and returns the biggest.
- `Math.min()` returns the smallest.

---

## PART 4: Power and square root

```js
console.log(Math.pow(2, 3));    // 8
console.log(Math.sqrt(16));     // 4
```

- `Math.pow(base, exponent)` multiplies `base` by itself `exponent` times: `2 × 2 × 2 = 8`.
- `Math.sqrt()` finds the square root — the number that, multiplied by itself, gives the input: `4 × 4 = 16`.

---

## PART 5: Random numbers

```js
console.log(Math.random());

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);
```

- `Math.random()` gives a random decimal, always `0` or higher, but always LESS than `1`.
- Building a random WHOLE number from 1 to 10, step by step:
  1. `Math.random()` → something like `0.3728...`
  2. `* 10` → `3.728...`
  3. `Math.floor(...)` → rounds down to `3`
  4. `+ 1` → shifts the range from (0–9) up to (1–10)

Without the `+1`, you could get `0`, which we usually don't want when counting from 1.

---

## PART 6: Other useful ones

```js
console.log(Math.abs(-7));      // 7
console.log(Math.PI);           // 3.14159...
```

- `Math.abs()` removes the negative sign — the "absolute value."
- `Math.PI` is NOT a function (no brackets!) — it's a fixed, pre-built value, useful for circle-related calculations.

---

## PART 7: Try it yourself

Practice tasks — rounding, max/min, random numbers, power and square roots. Students build and test these themselves.
