# 05 - Dates (Explained)

Matching file: `code/05-dates.js`

---

## PART 1: What is a Date object?

A Date object bundles the day, month, year, hour, minute, and second all in one package. We build one using `new Date()`.

---

## PART 2: Today's date

```js
let now = new Date();
console.log(now);
```

- `new Date()` builds a Date object filled with the EXACT current date and time, taken from the computer's clock.
- `console.log(now)` prints it all out.

**Output (example):** `2026-09-27T10:15:00.000Z` (will always match the moment you actually run it)

---

## PART 3: Creating a specific date

```js
let birthday = new Date(2000, 0, 15);
console.log(birthday);
```

- Format: `new Date(year, monthIndex, day)`
- `2000` = year
- `0` = month — and this is the big trap: JS counts months starting from **0**, so `0` means **January**, not "month zero doesn't exist."
- `15` = day of the month
- So this builds: **January 15, 2000**.

---

## PART 4: Reading parts of a date

```js
let today = new Date();

console.log("Year:", today.getFullYear());
console.log("Month (0-11):", today.getMonth());
console.log("Day of month:", today.getDate());
console.log("Day of week (0=Sun):", today.getDay());
console.log("Hour:", today.getHours());
console.log("Minutes:", today.getMinutes());
```

- `.getFullYear()` — pulls out just the year, e.g. `2026`.
- `.getMonth()` — pulls out the month, but remember: counts from 0. September would print `8`, not `9`.
- `.getDate()` — pulls out the day of the month, e.g. `27`.
- `.getDay()` — pulls out the day of the WEEK, `0` = Sunday, `1` = Monday, up to `6` = Saturday.
- `.getHours()` — current hour, 0–23 (24-hour format).
- `.getMinutes()` — current minute, 0–59.

---

## PART 5: Changing parts of a date

```js
let event = new Date();
console.log("Before:", event);

event.setFullYear(2030);
console.log("After:", event);
```

- `.setFullYear(2030)` REPLACES just the year inside `event` with 2030 — everything else (month, day, time) stays exactly the same.

---

## PART 6: Comparing dates

```js
let date1 = new Date(2025, 0, 1);
let date2 = new Date(2026, 0, 1);

if (date1 < date2) {
  console.log("date1 is earlier than date2");
}
```

- Dates can be compared with `<`, `>`, `==` just like numbers, because JS quietly converts each date into one big number (a timestamp) to compare them.
- Since Jan 2025 comes before Jan 2026, `date1 < date2` is `true`.

**Output:** `date1 is earlier than date2`

---

## PART 7: Try it yourself

Practice tasks — printing today's date, building a birthday date, comparing two dates. Students build and test these themselves.
