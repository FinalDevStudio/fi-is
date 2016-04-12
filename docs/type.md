# is

Type checks.



* * *

### is.arguments(val) 

Checks if the given value is of arguments type with a fallback check for
IE.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is of arguments type.

**Example**:
```js
is.arguments(arguments); // true
is.arguments('not arguments'); // false
```


### is.array(val) 

Checks if the given value is an array using native `Array.isArray` if
available.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is an array.

**Example**:
```js
is.array([]); // true
is.array('not array'); // false
```


### is.boolean(val) 

Checks if the given value is a boolean.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is a boolean.

**Example**:
```js
is.boolean(true); // true
is.boolean(false); // true
is.boolean('not boolean'); // false
```


### is.date(val) 

Checks if the given value is a date object.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is a date object.

**Example**:
```js
is.date(new Date()); // true
is.date('not date'); // false
```


### is.error(val) 

Checks if the given value is an error object.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is an error object.

**Example**:
```js
is.error(new Error()); // true
is.error('not error'); // false
```


### is.function(val) 

Checks if the given value is a function with a fallback check for IE.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is a function.

**Example**:
```js
is.function(function () {}); // true
is.function('not function'); // false
```


### is.nan(val) 

Checks if the given value is NaN. The difference with the native `isNaN`
function is that this will not return true for strings or other types and
only for the NaN value, the only value that doesn't equals itself.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is NaN.

**Example**:
```js
is.function(NaN); // true
is.function('not NaN'); // false
is.function(null); // false
```


### is.null(val) 

Checks if the given value is null.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is null.

**Example**:
```js
is.null(null); // true
is.null(undefined); // false
is.null('not null'); // false
```


### is.number(val) 

Checks if the given value is a number.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is a number.

**Example**:
```js
is.number(0); // true
is.number(3.5); // true
is.number('not number'); // false
```


### is.object(val) 

Checks if the given value is an object.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is an object.

**Example**:
```js
is.object({}); // true
is.object(function () {}); // false
is.object('not object'); // false
```


### is.json(val) 

Checks if the given value is a JSON string.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is a JSON string.

**Example**:
```js
is.json('{ "some": "value" }'); // true
is.json({}); // false
is.json('not json'); // false
```


### is.regexp(val) 

Checks if the given value is a RegExp.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is a RegExp.

**Example**:
```js
is.regexp(/regexp/gi); // true
is.regexp(new RegExp('regexp' ,'gi')); // true
is.regexp({}); // false
is.regexp('not regexp'); // false
```


### is.sameType(val1, val2) 

Checks if the given values are of same type preventing NaN and Number same
type check. This method doesn't support the `all` or `any` interfaces.

**Parameters**

**val1**: `Mixed`, The first value to check.

**val2**: `Mixed`, The other value to check.

**Returns**: `Boolean`, Whether the values are of same type.

**Example**:
```js
is.sameType(true, false); // true
is.sameType(1, 3); // true
is.sameType({}, []); // false
is.sameType('', null); // false
```


### is.string(val) 

Checks if the given value is a string.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is a string.

**Example**:
```js
is.string('foo'); // true
is.string(''); // true
is.string({}); // false
is.string([]); // false
```


### is.char(val) 

Checks if the given value is a single char.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is a single char.

**Example**:
```js
is.char('a'); // true
is.char('foo'); // false
is.char(1); // false
is.char(null); // false
```


### is.undefined(val) 

Checks if the given value is undefined.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is undefined.

**Example**:
```js
is.undefined(undefined); // true
is.undefined('not undefined'); // false
```



* * *










