# 28 - Fetch API (Explained)

Matching file: `code/28-fetch-api.js`

**Note:** needs an internet connection — calls real public test APIs.

---

## PART 1: What is fetch?

Like sending a letter asking a library for a book, then waiting for them to mail it back. `fetch()` sends a request out over the internet to another server, and waits for that server to send data back. `fetch()` always returns a **Promise**, so everything from the Promises/async-await lessons applies here directly.

---

## PART 2: A basic fetch request

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(function (response) {
    console.log(response);
  });
```

- The `.then()` here gives us a **response object** — but that's NOT the actual data yet! It's more like an envelope that CONTAINS the data, which still needs to be opened.

---

## PART 3: Reading the response as JSON

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
```

- `response.json()` "opens the envelope" — turns the raw response into actual usable JavaScript data.
- `response.json()` ALSO returns a Promise (reading/parsing takes a moment too), which is why we chain **another** `.then()` after it to finally get the real data.

---

## PART 4: The same thing, using async/await

```js
async function getUser() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let data = await response.json();
  console.log(data);
}

getUser();
```

- Same 2 steps as before (fetch, then `.json()`), but written top-to-bottom instead of chained `.then()` calls — much easier to read.

---

## PART 5: Using just one piece of the data

```js
async function getUserName() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let data = await response.json();
  console.log("Name:", data.name);
  console.log("Email:", data.email);
}

getUserName();
```

- Once `data` is a normal JS object, reading from it works exactly like any object we've already learned — plain dot notation.

---

## PART 6: Handling errors

```js
async function getUser() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch failed: " + error.message);
  }
}

getUser();
```

- Wrapping `fetch` in `try/catch` protects the program if the internet drops, the server is down, or the URL is wrong — instead of crashing, it prints a friendly message.

---

## Summary

1. `fetch(url)` sends a request to a server and returns a Promise.
2. The first `.then()` gives you a RESPONSE object, not the data itself.
3. `response.json()` "opens the envelope" and returns ANOTHER Promise with the actual usable data.
4. async/await makes fetch calls read top-to-bottom, cleanly.
5. Always wrap fetch in try/catch to handle network/server failures gracefully.
