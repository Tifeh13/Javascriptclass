# 26 - Promises (Explained)

Matching file: `code/26-promises.js`

---

## PART 1: What is a Promise?

Like ordering food at a restaurant — the waiter doesn't hand you food instantly, they give you a PROMISE: "it's coming." Eventually either the food arrives (promise **kept**/"resolved"), or something goes wrong, like being out of stock (promise **broken**/"rejected"). A JS Promise represents a value that isn't ready yet, but will be — usually because it's waiting on something slow, like data loading from the internet.

---

## PART 2: Creating a Promise

```js
let orderFood = new Promise(function (resolve, reject) {
  let foodIsAvailable = true;

  if (foodIsAvailable) {
    resolve("Here is your food!");
  } else {
    reject("Sorry, we're out of stock.");
  }
});

console.log(orderFood);
```

- `new Promise((resolve, reject) => {...})` builds a Promise. `resolve` and `reject` are two special functions JS gives us automatically inside the Promise.
- Calling `resolve(...)` means "success, here's the result."
- Calling `reject(...)` means "failure, here's the reason why."
- `console.log(orderFood)` just shows the Promise object itself at this point — not the resolved value directly.

---

## PART 3: Using a Promise — .then() and .catch()

```js
orderFood
  .then(function (result) {
    console.log("Success: " + result);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
```

- `.then()` runs ONLY if the Promise was resolved (success) — `result` is whatever value was passed to `resolve(...)`.
- `.catch()` runs ONLY if the Promise was rejected (failure) — `error` is whatever value was passed to `reject(...)`.
- Since `foodIsAvailable` is `true` above, this prints the `.then()` branch.

**Output:** `Success: Here is your food!`

---

## PART 4: A more realistic example — waiting for time to pass

```js
let waitTwoSeconds = new Promise(function (resolve) {
  console.log("Waiting...");
  setTimeout(function () {
    resolve("2 seconds have passed!");
  }, 2000);
});

waitTwoSeconds.then(function (result) {
  console.log(result);
});

console.log("This line prints IMMEDIATELY, before the wait finishes!");
```

- `setTimeout(fn, 2000)` runs `fn` after 2000 milliseconds (2 seconds).
- Here's the key lesson: **"This line prints IMMEDIATELY..."** actually prints BEFORE `"2 seconds have passed!"` does.
- This proves Promises are **asynchronous** — JS doesn't freeze and wait. It keeps running the rest of the code, and only comes back to run `.then()` once the Promise is genuinely resolved.

**Output (in this exact order):**
```
Waiting...
This line prints IMMEDIATELY, before the wait finishes!
2 seconds have passed!
```

---

## PART 5: Chaining Promises

```js
step1
  .then(function (result) {
    console.log("Step 1 result:", result);
    return result * 2;
  })
  .then(function (result) {
    console.log("Step 2 result:", result);
    return result + 1;
  })
  .then(function (result) {
    console.log("Step 3 result:", result);
  });
```

- Each `.then()` can `return` a value, which gets handed to the **next** `.then()` in the chain.
- Starting with `step1` resolving to `5`: Step 1 logs `5`, returns `10`. Step 2 logs `10`, returns `11`. Step 3 logs `11`.
- This builds a pipeline of steps that happen one after another, each depending on the last.

**Output:**
```
Step 1 result: 5
Step 2 result: 10
Step 3 result: 11
```

---

## Summary

1. A Promise represents a value that isn't ready yet, but will be, eventually.
2. `new Promise((resolve, reject) => {...})` — call `resolve()` on success, `reject()` on failure.
3. `.then()` runs on success; `.catch()` runs on failure.
4. Promises are ASYNCHRONOUS — the rest of your code keeps running while a Promise is still pending.
5. `.then()` calls can be CHAINED, each one passing its result to the next.
