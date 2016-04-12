# is

Presence checks.



* * *

### is.empty(val) 

Checks if the given object is empty. Treats null and undefined as such.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is empty.

**Example**:
```js
is.empty({}); // true
is.empty(''); // true
is.empty([]); // true
is.empty(new Date('invalid date')); // true
is.empty(null); // true
is.empty(undefined); // true
is.empty(0); // false
is.empty(-1); // false
is.empty(1); // false
is.empty(true); // false
is.empty(false); // false
is.empty(new Date()); // false
is.empty({ not: 'empty' }); // false
is.empty(['not', 'empty']); // false
is.empty('not empty'); // false
```


### is.existy(val) 

Checks if the given object is not null or undefined.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is not null or undefined.

**Example**:
```js
is.existy(123); // true
is.existy(0); // true
is.existy(undefined); // false
is.existy(null); // false
```


### is.truthy(val) 

Checks if the given value is truthy.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is truthy.

**Example**:
```js
is.truthy(true); // true
is.truthy('a string'); // true
is.truthy(1); // true
is.truthy(0); // false
is.truthy(null); // false
is.truthy(undefined); // false
is.truthy(false); // false
is.truthy(NaN); // false
```


### is.falsy(val) 

Checks if the given value is falsy.

**Parameters**

**val**: `Mixed`, The object to check.

**Returns**: `Boolean`, Whether the value is falsy.

**Example**:
```js
is.falsy(0); // true
is.falsy(null); // true
is.falsy(undefined); // true
is.falsy(NaN); // true
is.falsy(false); // true
is.falsy(true); // false
is.falsy('a string'); // false
is.falsy(1); // false
```


### is.space(val) 

Checks if the given value is a space character. Checks for
horizantal tab (9), line feed (10), vertical tab (11), form feed (12),
carriage return (13) and space (32).

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is a space character.

**Example**:
```js
is.space(' '); // true
is.space('a'); // false
is.space(1); // false
```



* * *










