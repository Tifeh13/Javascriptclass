# 06 - Arrays (Explained)

Matching file: `code/06-arrays.js`

---

## PART 1: What is an array?

```js
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
console.log(fruits[0]);   // Apple
console.log(fruits[2]);   // Mango
```

- `[` opens an array (square brackets, not curly braces like objects).
- Each item has a numbered position called an INDEX, starting from **0**, not 1.
- `"Apple"` sits at index 0, `"Banana"` at index 1, `"Mango"` at index 2.
- `fruits[0]` means "give me whatever is at position 0" → `Apple`.
- `fruits[2]` → the THIRD item → `Mango`.

**Output:**
```
[ 'Apple', 'Banana', 'Mango' ]
Apple
Mango
```

---

## PART 2: Changing a value

```js
let fruits = ["Apple", "Banana", "Mango"];
fruits[1] = "Orange";
console.log(fruits);
```

- `fruits[1] = "Orange"` replaces whatever's at index 1 (`"Banana"`) with `"Orange"`.

**Output:** `[ 'Apple', 'Orange', 'Mango' ]`

---

## PART 3: Array length

```js
console.log(fruits.length);
```

- `.length` (no brackets — it's a property, not a method) tells you how many items are in the array.

**Output:** `3`

---

## PART 4: Adding and removing items

```js
let fruits = ["Apple", "Banana"];

fruits.push("Mango");
console.log("After push:", fruits);

fruits.pop();
console.log("After pop:", fruits);

fruits.unshift("Pineapple");
console.log("After unshift:", fruits);

fruits.shift();
console.log("After shift:", fruits);
```

- `.push("Mango")` — adds to the END of the array.
- `.pop()` — removes from the END (always the last item, no need to specify which).
- `.unshift("Pineapple")` — adds to the START.
- `.shift()` — removes from the START.

**Output:**
```
After push: [ 'Apple', 'Banana', 'Mango' ]
After pop: [ 'Apple', 'Banana' ]
After unshift: [ 'Pineapple', 'Apple', 'Banana' ]
After shift: [ 'Apple', 'Banana' ]
```

---

## PART 5: Looping through an array

```js
let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(i + ": " + fruits[i]);
}
```

- `let i = 0` — a counter, starting to match the array's first index.
- `i < fruits.length` — keeps looping as long as `i` is smaller than 3 (the array's length). Once `i` reaches 3, the loop stops, because index 3 doesn't exist in a 3-item array.
- `i++` — increases `i` by 1 after each round.
- `fruits[i]` fetches whatever item is at the CURRENT value of `i`.

**Output:**
```
0: Apple
1: Banana
2: Mango
```

---

## PART 6: Useful array methods

```js
let numbers = [10, 5, 20, 1];

console.log(numbers.sort());
console.log(numbers.indexOf(20));
console.log(numbers.includes(5));
console.log(numbers.join(" - "));
console.log(Array.isArray(numbers));
```

- `.sort()` — rearranges items into order. **Careful:** by default it sorts as TEXT, so `10` can come before `5`. For true numeric sorting, use `numbers.sort((a, b) => a - b)`.
- `.indexOf(20)` — returns the position where `20` is found.
- `.includes(5)` — checks if `5` exists anywhere in the array, returns `true`/`false`.
- `.join(" - ")` — glues every item together into one string with `" - "` between each.
- `Array.isArray(numbers)` — checks if `numbers` is really an array (useful because `typeof` an array confusingly says `"object"`).

---

## PART 7: Try it yourself

Practice tasks — building an array of names, adding/removing items, looping, and correctly sorting numbers. Students build and test these themselves.
