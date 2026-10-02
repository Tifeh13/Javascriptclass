# 25 - ES6 Features: Destructuring, Spread & Rest (Explained)

Matching file: `code/25-es6-features.js`

---

## PART 1: Array destructuring

```js
let fruits = ["Apple", "Banana", "Mango"];

let [first, second, third] = fruits;
console.log(first);   // Apple
console.log(second);  // Banana
console.log(third);   // Mango
```

- This is a shortcut for writing `let first = fruits[0]; let second = fruits[1];` etc., but in ONE clean line.
- The variables grab values **by position** — `first` always gets index 0, `second` gets index 1, and so on.

---

## PART 2: Skipping items when destructuring

```js
let colors = ["Red", "Green", "Blue"];

let [primary, , third] = colors;
console.log(primary);   // Red
console.log(third);     // Blue
```

- Leaving an empty gap (just a comma with nothing between) skips over that position — here, `"Green"` is deliberately left out.

---

## PART 3: Object destructuring

```js
let student = { name: "Ade", age: 20, course: "JavaScript" };

let { name, age } = student;
console.log(name);   // Ade
console.log(age);    // 20
```

- Same idea, but for objects — and this time it works **by matching property name**, not position.
- The variable names (`name`, `age`) must exactly match the object's property names to pull out the right values.

---

## PART 4: Renaming while destructuring an object

```js
let student = { name: "Ade", age: 20 };

let { name: studentName, age: studentAge } = student;
console.log(studentName);   // Ade
console.log(studentAge);    // 20
```

- `name: studentName` means: "pull out the `name` property, but store it in a variable called `studentName` instead."
- Useful when the property name would clash with something else you already have.

---

## PART 5: Spread operator (...)

```js
let nums1 = [1, 2, 3];
let nums2 = [...nums1, 4, 5];
console.log(nums2);   // [1, 2, 3, 4, 5]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2);   // { a: 1, b: 2, c: 3 }
```

- `...nums1` **unpacks** every item of `nums1`, individually, before building the new array — so `nums2` ends up with all of `nums1`'s items PLUS `4` and `5`.
- Same idea for objects: `...obj1` copies every property of `obj1` into a brand-new object, then `c: 3` is added on top.
- This is a clean way to copy or combine arrays/objects without mutating the originals.

---

## PART 6: Rest operator (...)

```js
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(10, 20, 30, 40)); // 100
```

- Rest **looks** exactly like spread, but does the OPPOSITE job: instead of unpacking, it **gathers** multiple separate arguments into ONE array.
- `...numbers` collects every argument passed into `sum(...)`, no matter how many, into a single array called `numbers`.
- `.reduce()` then adds them all up (covered more in the full Arrays lesson).
- Especially useful when you don't know in advance how many values will be passed in.

---

## Summary

1. Destructuring unpacks arrays/objects into separate variables in one clean line.
2. Array destructuring goes by POSITION; object destructuring goes by MATCHING PROPERTY NAME (which can be renamed).
3. Spread (`...`) UNPACKS an array/object's items individually into a new array/object.
4. Rest (`...`) GATHERS multiple separate values into one array — commonly used in function parameters.
