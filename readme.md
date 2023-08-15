# Cheat Sheet
## Set
1. Initialization:
    ```javascript
    const set = new Set();
    ```
2. length:
    ```javascript
    set.size;
    ```
3. add:
    ```javascript
    set.add(ele);
    ```
4. delete:
    ```javascript
    set.delete(ele);
    ```
5. check validation of a certain element
    ```javascript
    set.has(ele);
    ```
6. Caveat: don't initialize a set with a string in this way:
    ```javascript
    const set = new Set("hello"); // get set(['h', 'e', 'l', 'l', 'o'])
    ```

## Map

```javascript
const map = new Map();
map.get();
map.set(c, newCode);
map.delete(c); // delete the whole entry
map.delete(c); // no error if the element does not exist.
for(const val of map.values()) {
    // traverse values
}
```


## String
1. for a character buffer, or a dynamic string:
    ```javascript
    let buf = [];
    buf.length;
    ```
2. Initialize a string:
    ```javascript
    let str = "";
    str += "new part";
    ```
3. To achieve this method: `char letter = 'a' + 1;`, we need:
    ```javascript
    const letter = String.fromCharCode('a'.charCodeAt(0) + 1);
    ```
4. Compare:
    ```javascript
    str1.localeCompare(str2) === 0;
    ```
5. Convert integer to character:
    ```javascript
    String.fromCharCode(integer);
    ```
6. Find all matched substring, For example, I would like to find all lowercase letters or uppercase letters in a string
    ```javascript
    const allLower = (str.match(/[a-z]+/g) || []).join('');
    const allUpper = (str.match(/[A-Z]+/g) || []).join('');
    ```
7. For matching couple substring, we can use `|` in regex:
    ```javascript
    list = s.match(/(0+)|(1+)/g); // 11001100 => [11, 00, 11, 00]
    ```

## Math
1. to make `/` works
    ```javascript
    d = Math.floor(d / 2);
    ```
2. 
    ```javascript
    const num = parseInt('1');
    ```

## Array
1. Array:
    ```javascript
    const arr = new Array(n);
    arr.fill(2);
    arr[idx]++;
    ```
2. []
    ```javascript
    const arr = [];
    arr.length;
    ```
3. Remove the first element:
    ```javascript
    arr.shift();
    ```
4. Remove the last element:
    ```javascript
    arr.pop();
    ```

## Stack
```javascript
const stack = [];
stack.push(c);
stack.pop();
if(stack.length === 0) {
    console.log("stack is empty.");
}
stack[stack.length - 1];
```

## Regex
[Regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
    - [Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
    - [Character classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes): distinguish kinds of characters
    - [Groups and backreferences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences): group multiple patterns as a whole
    - [Quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers): numbers of characters or expressions to match.
    - [flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp#parameters).

2. Use `RegExp`:
    ```javascript
    const jewel = jewels.shift();
    const pattern = `${jewel}`;

    const regex = new RegExp(pattern, 'g');
    const matches = stones.match(regex);
    ```

## Syntax
```javascript
for(let i = 0; i < a && r < n; i++) {
    buf[r++] = buf4[i];
}
```