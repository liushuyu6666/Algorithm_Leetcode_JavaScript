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

## Map

```javascript
const map = new Map();
map.get();
map.set(c, newCode);
map.delete(c); // delete the whole entry
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

## Math
1. to make `/` works
    ```javascript
    d = Math.floor(d / 2);
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

## Syntax
```javascript
for(let i = 0; i < a && r < n; i++) {
    buf[r++] = buf4[i];
}
```