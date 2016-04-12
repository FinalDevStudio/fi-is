# is

Regexp checks.



* * *

### is.url(val) 

Checks for a valid URL.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is an URL.

**Example**:
```js
is.url('http://example.com'); // true
is.url('http://not url dot com'); // false
is.url(true); // false
```


### is.email(val) 

Checks for a valid email address.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is an email address.

**Example**:
```js
is.email('address@example.com'); // true
is.email('address@not email'); // false
is.email(true); // false
```


### is.creditCard(val) 

Checks for a valid credit card number.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is a credit card number.

**Example**:
```js
is.creditCard(378282246310005); // true
is.creditCard(123); // false
is.creditCard(true); // false
```


### is.alphaNumeric(val) 

Checks for an alphanumeric string.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is an alphanumeric string.

**Example**:
```js
is.alphaNumeric('abc123'); // true
is.alphaNumeric('*?'); // false
is.alphaNumeric(true); // false
```


### is.timeString(val) 

Checks for a valid time string.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is a time string.

**Example**:
```js
is.timeString('13:45:30'); // true
is.timeString('12:12:90'); // false
is.timeString(true); // false
```


### is.dateString(val) 

Checks for a valid date string.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is a date string.

**Example**:
```js
is.dateString('11/11/2011'); // true
is.dateString('1/5'); // false
is.dateString(true); // false
```


### is.usZipCode(val) 

Checks for a valid US ZIP code.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is a US ZIP code.

**Example**:
```js
is.usZipCode('02201-1020'); // true
is.usZipCode('1'); // false
is.usZipCode(true); // false
```


### is.caPostalCode(val) 

Checks for a valid Canada postal code.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is a Canada postal code.

**Example**:
```js
is.caPostalCode('L8V3Y1'); // true
is.caPostalCode('L8V 3Y1'); // true
is.caPostalCode('1'); // false
is.caPostalCode(true); // false
```


### is.ukPostCode(val) 

Checks for a valid UK post code.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is a UK post code.

**Example**:
```js
is.ukPostCode('B184BJ'); // true
is.ukPostCode('1'); // false
is.ukPostCode(true); // false
```


### is.nanpPhone(val) 

Checks for a valid north american number plan formatted value.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is in north american number
plan format.

**Example**:
```js
is.nanpPhone('609-555-0175'); // true
is.nanpPhone('1'); // false
is.nanpPhone(true); // false
```


### is.eppPhone(val) 

Checks for a valid extensible provisioning protocol formatted value.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is in extensible provisioning protocol
format.

**Example**:
```js
is.eppPhone('+90.2322456789'); // true
is.eppPhone('1'); // false
is.eppPhone(true); // false
```


### is.socialSecurityNumber(val) 

Checks for a valid social security number.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is a social security number.

**Example**:
```js
is.socialSecurityNumber('017-90-7890'); // true
is.socialSecurityNumber('1'); // false
is.socialSecurityNumber(true); // false
```


### is.affirmative(val) 

Checks for an affirmative value (case-insensitive).

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value affirmative.

**Example**:
```js
is.affirmative('yes'); // true
is.affirmative('true'); // true
is.affirmative('y'); // true
is.affirmative('1'); // true
is.affirmative('ok'); // true
is.affirmative('okay'); // true
is.affirmative(1); // true
is.affirmative(true); // true
is.affirmative('no'); // false
is.affirmative('N'); // false
is.affirmative(0); // false
is.affirmative(false); // false
is.affirmative({}); // false
is.affirmative(null); // false
```


### is.hexadecimal(val) 

Checks for a valid hexadecimal value.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is hexadecimal.

**Example**:
```js
is.hexadecimal('ff'); // true
is.hexadecimal('ffFF'); // true
is.hexadecimal('fF0'); // true
is.hexadecimal(0.287); // false
is.hexadecimal(true); // false
```


### is.hexColor(val) 

Checks for a valid hex color value.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is hex color.

**Example**:
```js
is.hexColor('#333'); // true
is.hexColor('#444444'); // true
is.hexColor('#abc123'); // true
is.hexColor(0.287); // false
is.hexColor(true); // false
```


### is.ip(val) 

Checks for a valid IPv4 or IPv6 address.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is an IPv4 or IPv6 address.

**Example**:
```js
is.ip('2001:db8::ff00:42:8329'); // true
is.ip('127.0.0.1'); // true
is.ip('1.0.287.99'); // false
is.ip('2001::::42:8329'); // false
is.ip(true); // false
```


### is.ipv4(val) 

Checks for a valid IPv4 address.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is an IPv4 address.

**Example**:
```js
is.ipv4('127.0.0.1'); // true
is.ipv4('2001:db8::ff00:42:8329'); // false
is.ipv4('5555.555.5.5'); // false
is.ipv4(true); // false
```


### is.ipv6(val) 

Checks for a valid IPv6 address.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is an IPv6 address.

**Example**:
```js
is.ipv6('2001:db8::ff00:42:8329'); // true
is.ipv6('127.0.0.1'); // false
is.ipv6('2001::::42:8329'); // false
is.ipv6(true); // false
```


### is.ipv6(val) 

Checks for a valid IPv6 address.

**Parameters**

**val**: `Mixed`, The value to check.

**Returns**: `Boolean`, Whether the value is an IPv6 address.

**Example**:
```js
is.ipv6('2001:db8::ff00:42:8329'); // true
is.ipv6('127.0.0.1'); // false
is.ipv6('2001::::42:8329'); // false
is.ipv6(true); // false
```



* * *










