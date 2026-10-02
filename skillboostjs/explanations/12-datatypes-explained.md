# 12 - Data Types (Explained)

Matching file: `code/12-datatypes.js`

---

## PART 1: What is a data type?

Every value in JavaScript belongs to a category — a data type — which tells JS how to treat that value.

---

## PART 2: The main data types

```js
let name = "Ade";              // String
let age = 20;                   // Number
let isStudent = true;           // Boolean
let car = { brand: "Toyota" };  // Object
let colors = ["Red", "Blue"];   // Object (an array is a special kind of object)
let nothingYet;                 // Undefined
let empty = null;               // Null

console.log(typeof name);        // string
console.log(typeof age);         // number
console.log(typeof isStudent);   // boolean
console.log(typeof car);         // object
console.log(typeof colors);      // object
console.log(typeof nothingYet);  // undefined
console.log(typeof empty);       // object
```

- `typeof` tells you the category of whatever comes right after it.
- Strings are text, always in quotes.
- Numbers cover everything numeric — JS doesn't separate whole numbers from decimals.
- Booleans are only ever `true` or `false`.
- Objects are collections of key/value pairs — and an array is technically a special kind of object, which is why `typeof colors` prints `object`, not `array`.
- `nothingYet` was created but never given a value, so JS automatically fills it as `undefined`.
- `empty` was deliberately set to `null` by us.
- **`typeof null` prints `"object"`** — this is a famous, well-known bug baked into JavaScript itself since 1995 that was never fixed (fixing it would break too much old code). Just memorize it as a special exception.

---

## PART 3: Primitive vs object types

- **Primitive** = a single, simple value on its own (string, number, boolean, undefined, null).
- **Object** = a collection that can hold MANY values at once (object, array, function).

This matters because primitives are copied as full independent copies, while objects are copied by reference (both variables point to the same thing in memory).

---

## PART 4: undefined vs null

```js
let a;
let b = null;

console.log(a);   // undefined
console.log(b);   // null
```

- `a` was never given a value — JS AUTOMATICALLY fills it as `undefined`. We didn't type that word ourselves.
- `b` was explicitly set to `null` BY US, on purpose, to say "this is intentionally empty."

---

## PART 5: Checking types with typeof

```js
console.log(typeof "hello");       // string
console.log(typeof 25);             // number
console.log(typeof 25.5);           // number
console.log(typeof true);           // boolean
console.log(typeof [1,2,3]);        // object
console.log(typeof function(){});   // function
```

- Note `25.5` still just reports `number` — no separate "float" type in JS.
- A function gets its own special case: `typeof` correctly reports `"function"`, separate from plain `"object"`.

---

## PART 6: Try it yourself

Practice tasks — creating one variable of each type, and explaining the undefined vs null difference in your own words. Students build and test these themselves.
