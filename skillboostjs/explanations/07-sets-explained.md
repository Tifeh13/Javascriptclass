# 07 - Sets (Explained)

Matching file: `code/07-sets.js`

---

## PART 1: What is a Set?

```js
let names = new Set();
names.add("Ade");
names.add("Chidi");
names.add("Ade");

console.log(names);
console.log(names.size);
```

- `new Set()` creates an empty set, stored in `names`.
- `.add("Ade")` puts a value in. Now it contains: Ade.
- `.add("Chidi")` — now: Ade, Chidi.
- `.add("Ade")` again — nothing happens! Ade is already there, so a Set silently ignores the duplicate.
- `.size` tells you how many UNIQUE items are inside — even though we called `.add()` 3 times, size is only 2.

**Output:**
```
Set(2) { 'Ade', 'Chidi' }
2
```

---

## PART 2: Removing duplicates from an array

```js
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers);
```

- Passing an array directly into `new Set()` builds a set from it, and the "no duplicates" rule instantly strips out the repeats.
- This is one of the most common real-world uses of Sets: quickly cleaning duplicates out of an array.

**Output:** `Set(5) { 1, 2, 3, 4, 5 }`

---

## PART 3: Checking and removing values

```js
let colors = new Set(["Red", "Green", "Blue"]);

console.log(colors.has("Red"));
console.log(colors.has("Purple"));

colors.delete("Green");
console.log(colors);
```

- `.has("Red")` checks: is this exact value inside the set? → `true`
- `.has("Purple")` → was never added → `false`
- `.delete("Green")` removes that one value.

**Output:**
```
true
false
Set(2) { 'Red', 'Blue' }
```

---

## PART 4: Looping through a Set

```js
let fruits = new Set(["Apple", "Banana", "Mango"]);

for (let fruit of fruits) {
  console.log(fruit);
}
```

- `for (let fruit of fruits)` visits every value in the set, one at a time, storing the current one in `fruit`.

**Output:**
```
Apple
Banana
Mango
```

---

## PART 5: Try it yourself

Practice tasks — building a set of friends, deduplicating an array, checking with `.has()`. Students build and test these themselves.
