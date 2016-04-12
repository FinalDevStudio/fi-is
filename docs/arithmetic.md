# is

Arithmetic checks.



* * *

### is.equal(a, b) 

Checks if the given values are equal. This method doesn't support the `all`
or `any` interfaces.

Important: Checking for object or array equality is a taxing proccess!

**Parameters**

**a**: `Mixed`, The first value.

**b**: `Mixed`, The other value.

**Returns**: `Boolean`, Whether the values are equal.

**Example**:
```js
is.equal(1, 1); // true
is.equal([1, 2, 3], [1, 2, 3]); // true
is.equal([1, 2], ''); // false
is.equal(1, 2); // false
```


### is.even(num) 

Checks if the given number is even.

**Parameters**

**num**: `Number`, The number to check.

**Returns**: `Boolean`, Whether the number is even.

**Example**:
```js
is.even(2); // true
is.even(3); // false
```


### is.odd(num) 

Checks if the given number is odd.

**Parameters**

**num**: `Number`, The number to check.

**Returns**: `Boolean`, Whether the number is odd.

**Example**:
```js
is.odd(3); // true
is.odd(2); // false
```


### is.positive(num) 

Checks if the given number is positive.

**Parameters**

**num**: `Number`, The number to check.

**Returns**: `Boolean`, Whether the number is positive.

**Example**:
```js
is.positive(2); // true
is.positive(-3); // false
```


### is.negative(num) 

Checks if the given number is negative.

**Parameters**

**num**: `Number`, The number to check.

**Returns**: `Boolean`, Whether the number is negative.

**Example**:
```js
is.negative(-3); // true
is.negative(2); // false
```


### is.above(num, min) 

Checks if the given number is greater than the given minimum. This method
doesn't support the `all` or `any` interfaces.

**Parameters**

**num**: `Number`, The number to check.

**min**: `Number`, The minimum value exclusive.

**Returns**: `Boolean`, Whether the number is greater than the minimum.

**Example**:
```js
is.above(3, 2); // true
is.above(2, 3); // false
is.above(3, 3); // false
```


### is.under(num, max) 

Checks if the given number is less than the given maximum. This method
doesn't support the `all` or `any` interfaces.

**Parameters**

**num**: `Number`, The number to check.

**max**: `Number`, The maximum value exclusive.

**Returns**: `Boolean`, Whether the number is less than the maximum.

**Example**:
```js
is.under(3, 2); // true
is.under(2, 3); // false
is.under(3, 3); // false
```


### is.within(num, min, max) 

Checks if the given number is within the given minimum and maximum. This
method doesn't support the `all` or `any` interfaces.

**Parameters**

**num**: `Number`, The number to check.

**min**: `Number`, The minimum value exclusive.

**max**: `Number`, The maximum value exclusive.

**Returns**: `Boolean`, Whether the number is within the minimum and maximum.

**Example**:
```js
is.within(0, -2, 2); // true
is.within(1, -2, 2); // true
is.within(0, 1, 3); // false
is.within(1, 1, 2); // false
```


### is.decimal(num) 

Checks if the given number is a decimal.

**Parameters**

**num**: `Number`, The number to check.

**Returns**: `Boolean`, Whether the number is a decimal.

**Example**:
```js
is.decimal(13.45); // true
is.decimal(13); // false
```


### is.integer(num) 

Checks if the given number is an integer.

**Parameters**

**num**: `Number`, The number to check.

**Returns**: `Boolean`, Whether the number is an integer.

**Example**:
```js
is.integer(13); // true
is.integer(13.5); // false
```


### is.finite(num) 

Checks if the given number is finite using native 'isFinite' first.

**Parameters**

**num**: `Number`, The number to check.

**Returns**: `Boolean`, Whether the number is finite.

**Example**:
```js
is.finite(13); // true
is.finite(Infinity); // false
```


### is.infinite(num) 

Checks if the given number is infinite.

**Parameters**

**num**: `Number`, The number to check.

**Returns**: `Boolean`, Whether the number is infinite.

**Example**:
```js
is.infinite(Infinity); // true
is.infinite(13); // false
```



* * *










