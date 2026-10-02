# 27 - Async/Await (Explained)

Matching file: `code/27-async-await.js`

**Note:** async/await is just a cleaner-looking way to work with the SAME Promises from the previous lesson — make sure that's taught first.

---

## PART 1: Why async/await?

Compare these two ways of doing the same thing:

```js
// WITH .then()
getData().then(result => console.log(result));

// WITH async/await
let result = await getData();
console.log(result);
```

- async/await lets asynchronous code (code that waits for something) **look like normal, top-to-bottom code**, instead of nested `.then()` chains — easier to read, especially once there are many steps.

---

## PART 2: The "async" keyword

```js
async function sayHello() {
  return "Hello!";
}

sayHello().then(function (result) {
  console.log(result);
});
```

- Putting `async` in front of a function makes it **automatically return a Promise**, even if you just `return` a plain value like normal.
- That's why we can still use `.then()` on it, even though `sayHello` doesn't mention Promises anywhere in its own code.

**Output:** `Hello!`

---

## PART 3: The "await" keyword

```js
function waitTwoSeconds() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("2 seconds have passed!");
    }, 2000);
  });
}

async function run() {
  console.log("Waiting...");
  let result = await waitTwoSeconds();
  console.log(result);
  console.log("This prints AFTER the wait, unlike with plain Promises!");
}

run();
```

- `await` can ONLY be used **inside** an `async` function.
- It PAUSES that function until the Promise finishes, then gives you the resolved value directly — no `.then()` needed.
- Notice the difference from the plain-Promise example in the previous lesson: here, nothing after `await` runs until the wait is actually done — the whole function reads top-to-bottom, in order.

**Output (in this exact order, 2 seconds apart):**
```
Waiting...
2 seconds have passed!
This prints AFTER the wait, unlike with plain Promises!
```

---

## PART 4: Error handling with try/catch

```js
async function run() {
  try {
    let result = await riskyTask();
    console.log(result);
  } catch (error) {
    console.log("Caught an error: " + error);
  }
}

run();
```

- Instead of `.catch()`, async/await uses the SAME `try/catch` already learned in the Errors lesson.
- If `riskyTask()` rejects, execution jumps straight into the `catch` block, exactly like a thrown error.

---

## PART 5: Multiple steps, one after another

```js
async function run() {
  let step1 = await double(5);
  console.log("Step 1:", step1);    // 10

  let step2 = await double(step1);
  console.log("Step 2:", step2);    // 20

  let step3 = await double(step2);
  console.log("Step 3:", step3);    // 40
}

run();
```

- Each `await` waits for its own Promise before moving to the next line.
- Compare this to the Promise-chaining example from the last lesson — same result, but reads like ordinary step-by-step code instead of nested `.then()` calls.

**Output:**
```
Step 1: 10
Step 2: 20
Step 3: 40
```

---

## Summary

1. async/await is a cleaner way to work with the SAME Promises.
2. `async` in front of a function makes it return a Promise.
3. `await` pauses an async function until a Promise finishes, and gives back the resolved value directly.
4. Error handling uses regular try/catch, not `.catch()`.
5. async/await lets asynchronous steps read top-to-bottom, like normal code.
