# is

Array checks.



* * *

### is.inArray(val, arr) 

Checks if the given value is in the given array. This method does not
support `all` and `any` interfaces.

**Parameters**

**val**: `Mixed`, The value to search for.

**arr**: `Array`, The array to search into.

**Returns**: `Boolean`, Whether the value is in the array.

**Example**:
```js
is.inArray(1, [1, 2, 3]); // true
is.inArray('wer', [1, 2, 3]); // false
```


### is.sorted(arr) 

Checks if the given array is sorted.

**Parameters**

**arr**: `Array`, The array to check.

**Returns**: `Boolean`, Whether the array is sorted.

**Example**:
```js
is.sorted([1, 2, 3]); // true
is.sorted([2, 1, 5, 3]); // false
```



* * *










