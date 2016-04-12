# is

String checks.



* * *

### is.include(str, val) 

Checks if the given string includes or contains the given value. This
method doesn't support the `all` or `any` interfaces.

**Parameters**

**str**: `String`, The string to search into.

**val**: `Mixed`, The value to search for.

**Returns**: `Boolean`, Whether the string contains the given value.

**Example**:
```js
is.include('foobar', 'foo'); // true
is.include('foobar', 'oob'); // true
is.include('foobar', 'bar'); // true
is.include('foobar', 'wer'); // false
is.include('foobar', {}); // false
```


### is.upperCase(str) 

Checks if the given string is all in uppercase.

**Parameters**

**str**: `String`, The string to check.

**Returns**: `Boolean`, Whether the string is all in uppercase.

**Example**:
```js
is.upperCase('FOOBAR'); // true
is.upperCase('FooBaR'); // false
is.upperCase('foobar'); // false
```


### is.lowerCase(str) 

Checks if the given string is all in lowercase.

**Parameters**

**str**: `String`, The string to check.

**Returns**: `Boolean`, Whether the string is all in lowercase.

**Example**:
```js
is.lowerCase('foobar'); // true
is.lowerCase('FooBaR'); // false
is.lowerCase('FOOBAR'); // false
```


### is.startWith(str, val) 

Checks if the given string starts with the given value. This method doesn't
support the `all` or `any` interfaces.

**Parameters**

**str**: `String`, The string to check into.

**val**: `String`, The value to check for.

**Returns**: `Boolean`, Whether the string starts with the given value.

**Example**:
```js
is.startWith('foobar', 'foo'); // true
is.startWith('foobar', 'oob'); // false
is.startWith('foobar', 'bar'); // false
```


### is.endWith(str, val) 

Checks if the given string ends with the given value. This method doesn't
support the `all` or `any` interfaces.

**Parameters**

**str**: `String`, The string to check into.

**val**: `String`, The value to check for.

**Returns**: `Boolean`, Whether the string ends with the given value.

**Example**:
```js
is.endWith('foobar', 'bar'); // true
is.endWith('foobar', 'oob'); // false
is.endWith('foobar', 'foo'); // false
```


### is.capitalized(str) 

Checks if the given string is word-capitalized.

**Parameters**

**str**: `String`, The string to check.

**Returns**: `Boolean`, Whether the string is word-capitalized.

**Example**:
```js
is.capitalized('Foo'); // true
is.capitalized('Foo Bar Baz'); // true
is.capitalized('Foo bar baz'); // false
is.capitalized('foo'); // false
```


### is.palindrome(str) 

Checks if the given string is a palindrome.

**Parameters**

**str**: `String`, The string to check.

**Returns**: `Boolean`, Whether the string is a palindrome.

**Example**:
```js
is.palindrome('foobaraboof'); // true
is.palindrome('noon'); // true
is.palindrome('foobar'); // false
is.palindrome('bar'); // false
```



* * *










