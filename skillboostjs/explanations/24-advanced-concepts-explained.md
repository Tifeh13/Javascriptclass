# 24 - Advanced JavaScript Concepts (Explained)

Matching file: `code/24-advanced-concepts.js`

---

## PART 1: Closures

```js
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

let counter = makeCounter();
counter();   // 1
counter();   // 2
counter();   // 3
```

- `makeCounter()` creates a local variable `count`, and returns a brand-new function.
- That inner function "packs a backpack" with access to `count` from its surroundings — this backpack is called a **closure**.
- `let counter = makeCounter();` runs `makeCounter()` ONCE — it already finished executing at this point.
- But each time we call `counter()`, the inner function STILL remembers `count`, because it kept that backpack. It keeps increasing from where it left off — 1, then 2, then 3.

**Output:**
```
1
2
3
```

---

## PART 2: Hoisting

```js
sayHi();

function sayHi() {
  console.log("Hi!");
}
```

- This works even though `sayHi()` is called BEFORE its definition appears below it.
- JavaScript "hoists" (lifts) function **declarations** to the top of the file behind the scenes, so they're available everywhere in that scope, even before the line they're written on.
- `var` variables are also hoisted, but only the *declaration*, not the value — `console.log(myVar)` before `var myVar = 5` prints `undefined`, not an error.
- `let`/`const` are NOT accessible before their line runs — trying to use them early throws a `ReferenceError`.

---

## PART 3: IIFE (Immediately Invoked Function Expression)

```js
(function () {
  let secret = "I'm private in here";
  console.log(secret);
})();
```

- Wrapping a function in `( )`, then adding another `( )` right after, makes it run **immediately** — no need to call it later by name.
- `secret` only exists inside this function — trying to read it outside throws an error, since it was never exposed to the rest of the file.
- Used to keep variables private/contained, without polluting the global scope.

---

## PART 4: "this" — a deeper look

```js
let person = {
  name: "Ade",
  regularFunction: function () {
    console.log("Regular: " + this.name);
  },
  arrowFunction: () => {
    console.log("Arrow: " + this.name);
  }
};

person.regularFunction();   // Regular: Ade
person.arrowFunction();      // Arrow: undefined
```

- A **regular function** used as a method gets its own `this`, which is the object calling it — so `this.name` correctly becomes `"Ade"`.
- An **arrow function** does NOT get its own `this` at all — it borrows `this` from whatever surrounds it (here, that's not `person`, so `this.name` is `undefined`).
- **Takeaway:** avoid arrow functions for object methods that need `this` — use a regular function instead.

---

## PART 5: Callback functions

```js
function processOrder(orderName, callback) {
  console.log("Processing: " + orderName);
  callback();
}

function onComplete() {
  console.log("Order is done!");
}

processOrder("Pizza", onComplete);
```

- `onComplete` is passed in as `callback` — notice NO brackets here, we're handing over the function itself as data, not running it yet.
- `processOrder` decides WHEN to actually run it, by calling `callback()` inside its own code.
- This pattern (passing a function to be run later) is the foundation for how Promises and `.then()` work in the next lessons.

**Output:**
```
Processing: Pizza
Order is done!
```

---

## Summary

1. Closure: an inner function remembers variables from its outer function, even after the outer one has finished.
2. Hoisting: function declarations (and `var`, partially) are lifted to the top behind the scenes.
3. IIFE: a function that runs itself immediately, used to keep variables private.
4. Regular functions get their OWN `this`; arrow functions borrow `this` from their surroundings.
5. Callback: a function passed into another function, to be run later, on demand.
