#



### lib/arithmetic.js


#### equal(a, b)

Checks if the given values are equal. This method doesn't support the `all`
or `any` interfaces.

Important: Checking for object or array equality is a taxing proccess!




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| a | `Mixed`  | The first value. | &nbsp; |
| b | `Mixed`  | The other value. | &nbsp; |




##### Examples

```javascript
is.equal(1, 1); // true
is.equal([1, 2, 3], [1, 2, 3]); // true
is.equal([1, 2], ''); // false
is.equal(1, 2); // false
```


##### Returns


- `Boolean`  Whether the values are equal.



#### even(num)

Checks if the given number is even.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| num | `Number`  | The number to check. | &nbsp; |




##### Examples

```javascript
is.even(2); // true
is.even(3); // false
```


##### Returns


- `Boolean`  Whether the number is even.



#### odd(num)

Checks if the given number is odd.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| num | `Number`  | The number to check. | &nbsp; |




##### Examples

```javascript
is.odd(3); // true
is.odd(2); // false
```


##### Returns


- `Boolean`  Whether the number is odd.



#### positive(num)

Checks if the given number is positive.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| num | `Number`  | The number to check. | &nbsp; |




##### Examples

```javascript
is.positive(2); // true
is.positive(-3); // false
```


##### Returns


- `Boolean`  Whether the number is positive.



#### negative(num)

Checks if the given number is negative.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| num | `Number`  | The number to check. | &nbsp; |




##### Examples

```javascript
is.negative(-3); // true
is.negative(2); // false
```


##### Returns


- `Boolean`  Whether the number is negative.



#### above(num, min)

Checks if the given number is greater than the given minimum. This method
doesn't support the `all` or `any` interfaces.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| num | `Number`  | The number to check. | &nbsp; |
| min | `Number`  | The minimum value exclusive. | &nbsp; |




##### Examples

```javascript
is.above(3, 2); // true
is.above(2, 3); // false
is.above(3, 3); // false
```


##### Returns


- `Boolean`  Whether the number is greater than the minimum.



#### under(num, max)

Checks if the given number is less than the given maximum. This method
doesn't support the `all` or `any` interfaces.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| num | `Number`  | The number to check. | &nbsp; |
| max | `Number`  | The maximum value exclusive. | &nbsp; |




##### Examples

```javascript
is.under(3, 2); // true
is.under(2, 3); // false
is.under(3, 3); // false
```


##### Returns


- `Boolean`  Whether the number is less than the maximum.



#### within(num, min, max)

Checks if the given number is within the given minimum and maximum. This
method doesn't support the `all` or `any` interfaces.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| num | `Number`  | The number to check. | &nbsp; |
| min | `Number`  | The minimum value exclusive. | &nbsp; |
| max | `Number`  | The maximum value exclusive. | &nbsp; |




##### Examples

```javascript
is.within(0, -2, 2); // true
is.within(1, -2, 2); // true
is.within(0, 1, 3); // false
is.within(1, 1, 2); // false
```


##### Returns


- `Boolean`  Whether the number is within the minimum and maximum.



#### between(num, min, max)

Checks if the given number is between the given minimum and maximum (inclusive). This
method doesn't support the `all` or `any` interfaces.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| num | `Number`  | The number to check. | &nbsp; |
| min | `Number`  | The minimum value exclusive. | &nbsp; |
| max | `Number`  | The maximum value exclusive. | &nbsp; |




##### Examples

```javascript
is.between(0, -2, 2); // true
is.between(1, -2, 2); // true
is.between(1, 1, 2); // true
is.between(0, 1, 3); // false
is.between(10, 30, 50); // false
```


##### Returns


- `Boolean`  Whether the number is between the minimum and maximum (inclusive).



#### decimal(num)

Checks if the given number is a decimal.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| num | `Number`  | The number to check. | &nbsp; |




##### Examples

```javascript
is.decimal(13.45); // true
is.decimal(13); // false
```


##### Returns


- `Boolean`  Whether the number is a decimal.



#### integer(num)

Checks if the given number is an integer.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| num | `Number`  | The number to check. | &nbsp; |




##### Examples

```javascript
is.integer(13); // true
is.integer(13.5); // false
```


##### Returns


- `Boolean`  Whether the number is an integer.



#### finite(num)

Checks if the given number is finite using native 'isFinite' first.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| num | `Number`  | The number to check. | &nbsp; |




##### Examples

```javascript
is.finite(13); // true
is.finite(Infinity); // false
```


##### Returns


- `Boolean`  Whether the number is finite.



#### infinite(num)

Checks if the given number is infinite.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| num | `Number`  | The number to check. | &nbsp; |




##### Examples

```javascript
is.infinite(Infinity); // true
is.infinite(13); // false
```


##### Returns


- `Boolean`  Whether the number is infinite.




### lib/array.js


#### inArray(val, arr)

Checks if the given value is in the given array. This method does not
support `all` and `any` interfaces.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to search for. | &nbsp; |
| arr | `Array`  | The array to search into. | &nbsp; |




##### Examples

```javascript
is.inArray(1, [1, 2, 3]); // true
is.inArray('wer', [1, 2, 3]); // false
```


##### Returns


- `Boolean`  Whether the value is in the array.



#### sorted(arr)

Checks if the given array is sorted.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| arr | `Array`  | The array to check. | &nbsp; |




##### Examples

```javascript
is.sorted([1, 2, 3]); // true
is.sorted([2, 1, 5, 3]); // false
```


##### Returns


- `Boolean`  Whether the array is sorted.




### lib/environment.js


#### browser()

Environment checks.






##### Returns


- `Void`



#### chrome()

Checks if the current browser is Chrome or Chromium. This method doesn't
support the `all` or `any` interfaces.






##### Examples

```javascript
is.chrome();
```


##### Returns


- `Boolean`  Whether the current browser is Chrome or Chromium.



#### firefox()

Checks if the current browser is Firefox. This method doesn't support the
`all` or `any` interfaces.






##### Examples

```javascript
is.firefox();
```


##### Returns


- `Boolean`  Whether the current browser is Firefox.



#### edge()

Checks if the current browser is Edge. This method doesn't support the
`all` or `any` interfaces.






##### Examples

```javascript
is.firefox();
```


##### Returns


- `Boolean`  Whether the current browser is Edge.



#### ie(ver)

Checks if the current browser is Internet Explorer. This method doesn't
support the `all` or `any` interfaces.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| ver | `Number`  | The optional version number to check for. | &nbsp; |




##### Examples

```javascript
is.ie();
is.ie(9);
is.ie(10);
```


##### Returns


- `Boolean`  Whether the current browser is Internet Explorer.



#### opera()

Checks if the current browser is Opera. This method doesn't support the
`all` or `any` interfaces.






##### Examples

```javascript
is.opera();
```


##### Returns


- `Boolean`  Whether the current browser is Opera.



#### safari()

Checks if the current browser is Safari. This method doesn't support the
`all` or `any` interfaces.






##### Examples

```javascript
is.safari();
```


##### Returns


- `Boolean`  Whether the current browser is Safari.



#### vivaldi()

Checks if the current browser is Vivaldi. This method doesn't support the
`all` or `any` interfaces.






##### Examples

```javascript
is.vivaldi();
```


##### Returns


- `Boolean`  Whether the current browser is Vivaldi.



#### twitter()

Checks if the current browser is Twitter's internal web view. This method
doesn't support the `all` or `any` interfaces.






##### Examples

```javascript
is.twitter();
```


##### Returns


- `Boolean`  Whether the current browser is Twitter's internal webview.



#### facebook()

Checks if the current browser is Facebook's internal web view. This method
doesn't support the `all` or `any` interfaces.






##### Examples

```javascript
is.facebook();
```


##### Returns


- `Boolean`  Whether the current browser is Facebook's internal webview.



#### ios()

Checks if the current device is runnig iOS. This method doesn't support the
`all` or `any` interfaces.






##### Examples

```javascript
is.ios();
```


##### Returns


- `Boolean`  Whether the current device is runnig iOS.



#### iphone()

Checks if the current device is an iPhone. This method doesn't support the
`all` or `any` interfaces.






##### Examples

```javascript
is.iphone();
```


##### Returns


- `Boolean`  Whether the current device is an iPhone.



#### ipad()

Checks if the current device is an iPad. This method doesn't support the
`all` or `any` interfaces.






##### Examples

```javascript
is.ipad();
```


##### Returns


- `Boolean`  Whether the current device is an iPad.



#### ipod()

Checks if the current device is an iPod. This method doesn't support the
`all` or `any` interfaces.






##### Examples

```javascript
is.ipod();
```


##### Returns


- `Boolean`  Whether the current device is an iPod.



#### android()

Checks if the current device is an Android device. This method doesn't
support the `all` or `any` interfaces.






##### Examples

```javascript
is.android();
```


##### Returns


- `Boolean`  Whether the current device is an Android device.



#### androidPhone()

Checks if the current device is an Android phone.This method doesn't
support the `all` or `any` interfaces.






##### Examples

```javascript
is.androidPhone();
```


##### Returns


- `Boolean`  Whether the current device is an Android phone.



#### androidTablet()

Checks if the current device is an Android tablet.This method doesn't
support the `all` or `any` interfaces.






##### Examples

```javascript
is.androidTablet();
```


##### Returns


- `Boolean`  Whether the current device is an Android tablet.



#### blackberry()

Checks if the current device is a Blackberry device. This method doesn't
support the `all` or `any` interfaces.






##### Examples

```javascript
is.blackberry();
```


##### Returns


- `Boolean`  Whether the current device is a Blackberry device.



#### desktop()

Checks if the current device is a desktop device.This method doesn't
support the `all` or `any` interfaces.






##### Examples

```javascript
is.desktop();
```


##### Returns


- `Boolean`  Whether the current device is a desktop device.



#### linux()

Checks if the current device running Linux (excluding Android). This method
doesn't support the `all` or `any` interfaces.






##### Examples

```javascript
is.linux();
```


##### Returns


- `Boolean`  Whether the current device running Linux.



#### osx()

Checks if the current device running OSX.This method doesn't support the
`all` or `any` interfaces.






##### Examples

```javascript
is.osx();
```


##### Returns


- `Boolean`  Whether the current device running OSX.



#### mac()

Checks if the current device running OSX (Mac).This method doesn't support
the `all` or `any` interfaces.






##### Examples

```javascript
is.mac();
```


##### Returns


- `Boolean`  Whether the current device running OSX.



#### windows()

Checks if the current device running Windows.This method doesn't support
the `all` or `any` interfaces.






##### Examples

```javascript
is.windows();
```


##### Returns


- `Boolean`  Whether the current device running Windows.



#### windowsPhone()

Checks if the current device is a Windows phone.This method doesn't support
the `all` or `any` interfaces.






##### Examples

```javascript
is.windowsPhone();
```


##### Returns


- `Boolean`  Whether the current device is a Windows phone.



#### windowsTablet()

Checks if the current device is a Windows tablet.This method doesn't
support the `all` or `any` interfaces.






##### Examples

```javascript
is.windowsTablet();
```


##### Returns


- `Boolean`  Whether the current device is a Windows tablet.



#### mobile()

Checks if the current device is a mobile device.This method doesn't support
the `all` or `any` interfaces.






##### Examples

```javascript
is.mobile();
```


##### Returns


- `Boolean`  Whether the current device is a mobile device.



#### tablet()

Checks if the current device is a tablet.This method doesn't support the
`all` or `any` interfaces.






##### Examples

```javascript
is.tablet();
```


##### Returns


- `Boolean`  Whether the current device is a tablet.



#### online()

Checks if the current device is on-line.This method doesn't support the
`all` or `any` interfaces.






##### Examples

```javascript
is.online();
```


##### Returns


- `Boolean`  Whether the current device is on-line.



#### offline()

Checks if the current device is off-line.This method doesn't support the
`all` or `any` interfaces.






##### Examples

```javascript
is.offline();
```


##### Returns


- `Boolean`  Whether the current device is off-line.



#### touchDevice()

Checks if the current device is touch capable.This method doesn't support
the `all` or `any` interfaces.






##### Examples

```javascript
is.touchDevice();
```


##### Returns


- `Boolean`  Whether the current device is touch capable.



#### nodejs()

Checks if the current environment is Node.js.This method doesn't support
the `all` or `any` interfaces.






##### Examples

```javascript
is.nodejs();
```


##### Returns


- `Boolean`  Whether the current environment is Node.js.




### lib/index.js


#### root()

Fi Is.






##### Returns


- `Void`



#### is()  *private method*

Define namespace.






##### Returns


- `Void`



#### all()

Interface to check if any of the given values passes the the predicate
function's check.






##### Examples

```javascript
is.any.number(1, 2, 3, 4, 'a string'); // true
is.any.string([1, 2, true, 4]); // false
is.any.truthy([null, false]); // false
```


##### Returns


- `Void`



#### any()

Interface to check if all the given values passes the predicate function's
check.






##### Examples

```javascript
is.all.number(1, 2, 3, 4); // true
is.all.string(['a string', 1, 2, 3, 4]); // false
is.all.number([1, 2, 3, 4, 'not number']); // false
```


##### Returns


- `Void`



#### not()

Interface to invert the predicate function's result.






##### Examples

```javascript
is.not.string(1234); // true
is.not.number(1); // false
is.not.string('not number'); // false
```


##### Returns


- `Void`



#### getArgsArray()

Gets all args as an array or first argument if it's an array.






##### Returns


- `Array`  args array.



#### setNamespace()

Changes the namespace of the library to prevent name collissions.






##### Returns


- `Object`  The 'is' object instance.




### lib/object.js


#### propertyCount(obj, count)

Checks if the given object has the given number of properties. This method
doesn't support the `all` or `any` interfaces.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  | The object to check. | &nbsp; |
| count | `Number`  | The number of properties to expect. | &nbsp; |




##### Examples

```javascript
is.propertyCount({wer: 'asd'}, 1); // true
is.propertyCount({}, 5); // false
```


##### Returns


- `Boolean`  Whether the object has the number of properties.



#### propertyDefined(obj, prop)

Checks if the given object has the given property. This method doesn't
support the `all` or `any` interfaces.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  | The object to check. | &nbsp; |
| prop | `String`  | The name of the propery to search for. | &nbsp; |




##### Examples

```javascript
is.propertyDefined({wer: 'asd'}, 'wer'); // true
is.propertyDefined({}, 'wer'); // false
```


##### Returns


- `Boolean`  Whether the object has the property.



#### windowObject(obj)

Checks if the given object is the window object.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  | The object to check. | &nbsp; |




##### Examples

```javascript
is.windowObject(window); // true
is.windowObject({}); // false
```


##### Returns


- `Boolean`  Whether the object is the window object.



#### domNode(obj)

Checks if the given object is a DOM node.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  | The object to check. | &nbsp; |




##### Examples

```javascript
is.domNode(document.body); // true
is.domNode(document); // false
is.domNode('not DOM node'); // false
is.domNode(0); // false
```


##### Returns


- `Boolean`  Whether the object is a DOM node.




### lib/presence.js


#### empty(val)

Checks if the given object is empty. Treats null and undefined as such.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
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


##### Returns


- `Boolean`  Whether the value is empty.



#### existy(val)

Checks if the given object is not null or undefined.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.existy(123); // true
is.existy(0); // true
is.existy(undefined); // false
is.existy(null); // false
```


##### Returns


- `Boolean`  Whether the value is not null or undefined.



#### truthy(val)

Checks if the given value is truthy.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.truthy(true); // true
is.truthy('a string'); // true
is.truthy(1); // true
is.truthy(0); // false
is.truthy(null); // false
is.truthy(undefined); // false
is.truthy(false); // false
is.truthy(NaN); // false
```


##### Returns


- `Boolean`  Whether the value is truthy.



#### falsy(val)

Checks if the given value is falsy.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The object to check. | &nbsp; |




##### Examples

```javascript
is.falsy(0); // true
is.falsy(null); // true
is.falsy(undefined); // true
is.falsy(NaN); // true
is.falsy(false); // true
is.falsy(true); // false
is.falsy('a string'); // false
is.falsy(1); // false
```


##### Returns


- `Boolean`  Whether the value is falsy.



#### space(val)

Checks if the given value is a space character. Checks for
horizantal tab (9), line feed (10), vertical tab (11), form feed (12),
carriage return (13) and space (32).




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.space(' '); // true
is.space('a'); // false
is.space(1); // false
```


##### Returns


- `Boolean`  Whether the value is a space character.




### lib/regexp.js


#### regexps()  *private method*

Regexps definition.

Steven Levithan, Jan Goyvaerts: Regular Expressions Cookbook.
Scott Gonzalez: Email address validation.






##### Returns


- `Void`



#### setRegexp(reg, key)

Sets a custom regexp value for any existant regexp name.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| reg | `RegExp`  | The regexp to use. | &nbsp; |
| key | `String`  | The regexp name to replace. | &nbsp; |




##### Returns


- `Void`



#### domain(val)

Checks for a valid domain name.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.domain('example.com'); // true
is.domain('subdomain.example.com'); // true
is.domain('sub.domain.example.website'); // true
is.domain('not_a_domain'); // false
is.domain(1234); // false
is.domain(true); // false
```


##### Returns


- `Boolean`  Whether the value is a valid domain name.



#### url(val)

Checks for a valid URL.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.url('http://example.com'); // true
is.url('http://not url dot com'); // false
is.url(true); // false
```


##### Returns


- `Boolean`  Whether the value is an URL.



#### email(val)

Checks for a valid email address.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.email('address@example.com'); // true
is.email('address@not email'); // false
is.email(true); // false
```


##### Returns


- `Boolean`  Whether the value is an email address.



#### creditCard(val)

Checks for a valid credit card number.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.creditCard(378282246310005); // true
is.creditCard(123); // false
is.creditCard(true); // false
```


##### Returns


- `Boolean`  Whether the value is a credit card number.



#### alphanumeric(val)

Checks for an alphanumeric string.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.alphaNumeric('abc123'); // true
is.alphaNumeric('*?'); // false
is.alphaNumeric(true); // false
```


##### Returns


- `Boolean`  Whether the value is an alphanumeric string.



#### timeString(val)

Checks for a valid time string.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.timeString('13:45:30'); // true
is.timeString('12:12:90'); // false
is.timeString(true); // false
```


##### Returns


- `Boolean`  Whether the value is a time string.



#### dateString(val)

Checks for a valid date string.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.dateString('11/11/2011'); // true
is.dateString('1/5'); // false
is.dateString(true); // false
```


##### Returns


- `Boolean`  Whether the value is a date string.



#### usZipCode(val)

Checks for a valid US ZIP code.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.usZipCode('02201-1020'); // true
is.usZipCode('1'); // false
is.usZipCode(true); // false
```


##### Returns


- `Boolean`  Whether the value is a US ZIP code.



#### caPostalCode(val)

Checks for a valid Canada postal code.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.caPostalCode('L8V3Y1'); // true
is.caPostalCode('L8V 3Y1'); // true
is.caPostalCode('1'); // false
is.caPostalCode(true); // false
```


##### Returns


- `Boolean`  Whether the value is a Canada postal code.



#### ukPostCode(val)

Checks for a valid UK post code.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.ukPostCode('B184BJ'); // true
is.ukPostCode('1'); // false
is.ukPostCode(true); // false
```


##### Returns


- `Boolean`  Whether the value is a UK post code.



#### nanpPhone(val)

Checks for a valid north american number plan formatted value.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.nanpPhone('609-555-0175'); // true
is.nanpPhone('1'); // false
is.nanpPhone(true); // false
```


##### Returns


- `Boolean`  Whether the value is in north american number plan format.



#### eppPhone(val)

Checks for a valid extensible provisioning protocol formatted value.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.eppPhone('+90.2322456789'); // true
is.eppPhone('1'); // false
is.eppPhone(true); // false
```


##### Returns


- `Boolean`  Whether the value is in extensible provisioning protocol format.



#### socialSecurityNumber(val)

Checks for a valid social security number.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.socialSecurityNumber('017-90-7890'); // true
is.socialSecurityNumber('1'); // false
is.socialSecurityNumber(true); // false
```


##### Returns


- `Boolean`  Whether the value is a social security number.



#### affirmative(val)

Checks for an affirmative value (case-insensitive).




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
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


##### Returns


- `Boolean`  Whether the value affirmative.



#### hexadecimal(val)

Checks for a valid hexadecimal value.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.hexadecimal('ff'); // true
is.hexadecimal('ffFF'); // true
is.hexadecimal('fF0'); // true
is.hexadecimal(0.287); // false
is.hexadecimal(true); // false
```


##### Returns


- `Boolean`  Whether the value is hexadecimal.



#### hexColor(val)

Checks for a valid hex color value.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.hexColor('#333'); // true
is.hexColor('#444444'); // true
is.hexColor('#abc123'); // true
is.hexColor(0.287); // false
is.hexColor(true); // false
```


##### Returns


- `Boolean`  Whether the value is hex color.



#### ip(val)

Checks for a valid IPv4 or IPv6 address.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.ip('2001:db8::ff00:42:8329'); // true
is.ip('127.0.0.1'); // true
is.ip('1.0.287.99'); // false
is.ip('2001::::42:8329'); // false
is.ip(true); // false
```


##### Returns


- `Boolean`  Whether the value is an IPv4 or IPv6 address.



#### ipv4(val)

Checks for a valid IPv4 address.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.ipv4('127.0.0.1'); // true
is.ipv4('2001:db8::ff00:42:8329'); // false
is.ipv4('5555.555.5.5'); // false
is.ipv4(true); // false
```


##### Returns


- `Boolean`  Whether the value is an IPv4 address.



#### ipv6(val)

Checks for a valid IPv6 address.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.ipv6('2001:db8::ff00:42:8329'); // true
is.ipv6('127.0.0.1'); // false
is.ipv6('2001::::42:8329'); // false
is.ipv6(true); // false
```


##### Returns


- `Boolean`  Whether the value is an IPv6 address.




### lib/string.js


#### include(str, val)

Checks if the given string includes or contains the given value. This
method doesn't support the `all` or `any` interfaces.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `String`  | The string to search into. | &nbsp; |
| val | `Mixed`  | The value to search for. | &nbsp; |




##### Examples

```javascript
is.include('foobar', 'foo'); // true
is.include('foobar', 'oob'); // true
is.include('foobar', 'bar'); // true
is.include('foobar', 'wer'); // false
is.include('foobar', {}); // false
```


##### Returns


- `Boolean`  Whether the string contains the given value.



#### upperCase(str)

Checks if the given string is all in uppercase.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `String`  | The string to check. | &nbsp; |




##### Examples

```javascript
is.upperCase('FOOBAR'); // true
is.upperCase('FooBaR'); // false
is.upperCase('foobar'); // false
```


##### Returns


- `Boolean`  Whether the string is all in uppercase.



#### lowerCase(str)

Checks if the given string is all in lowercase.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `String`  | The string to check. | &nbsp; |




##### Examples

```javascript
is.lowerCase('foobar'); // true
is.lowerCase('FooBaR'); // false
is.lowerCase('FOOBAR'); // false
```


##### Returns


- `Boolean`  Whether the string is all in lowercase.



#### startWith(str, val)

Checks if the given string starts with the given value. This method doesn't
support the `all` or `any` interfaces.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `String`  | The string to check into. | &nbsp; |
| val | `String`  | The value to check for. | &nbsp; |




##### Examples

```javascript
is.startWith('foobar', 'foo'); // true
is.startWith('foobar', 'oob'); // false
is.startWith('foobar', 'bar'); // false
```


##### Returns


- `Boolean`  Whether the string starts with the given value.



#### endWith(str, val)

Checks if the given string ends with the given value. This method doesn't
support the `all` or `any` interfaces.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `String`  | The string to check into. | &nbsp; |
| val | `String`  | The value to check for. | &nbsp; |




##### Examples

```javascript
is.endWith('foobar', 'bar'); // true
is.endWith('foobar', 'oob'); // false
is.endWith('foobar', 'foo'); // false
```


##### Returns


- `Boolean`  Whether the string ends with the given value.



#### capitalized(str)

Checks if the given string is word-capitalized.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `String`  | The string to check. | &nbsp; |




##### Examples

```javascript
is.capitalized('Foo'); // true
is.capitalized('Foo Bar Baz'); // true
is.capitalized('Foo bar baz'); // false
is.capitalized('foo'); // false
```


##### Returns


- `Boolean`  Whether the string is word-capitalized.



#### palindrome(str)

Checks if the given string is a palindrome.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `String`  | The string to check. | &nbsp; |




##### Examples

```javascript
is.palindrome('foobaraboof'); // true
is.palindrome('noon'); // true
is.palindrome('foobar'); // false
is.palindrome('bar'); // false
```


##### Returns


- `Boolean`  Whether the string is a palindrome.




### lib/time.js


#### days()

Time checks.






##### Returns


- `Void`



#### today(date)

Checks if the given date is for today.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |




##### Examples

```javascript
is.today(new Date()); // true
is.today(dateObjectForToday); // true
is.today(dateObjectNotForToday); // false
```


##### Returns


- `Boolean`  Whether the date is for today.



#### yesterday(date)

Checks if the given date is for yesterday.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |




##### Examples

```javascript
is.yesterday(dateObjectForYesterday); // true
is.yesterday(dateObjectNotForYesterday); // false
is.yesterday(new Date()); // false
```


##### Returns


- `Boolean`  Whether the date is for yesterday.



#### tomorrow(date)

Checks if the given date is for tomorrow.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |




##### Examples

```javascript
is.tomorrow(dateObjectForTomorrow); // true
is.tomorrow(dateObjectNotForTomorrow); // false
is.tomorrow(new Date()); // false
```


##### Returns


- `Boolean`  Whether the date is for tomorrow.



#### past(date)

Checks if the given date is for the past.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |




##### Examples

```javascript
is.past(dateObjectForTomorrow); // true
is.past(dateObjectNotForTomorrow); // false
is.past(new Date()); // false
```


##### Returns


- `Boolean`  Whether the date is for the past.



#### future(date)

Checks if the given date is for the future.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |




##### Examples

```javascript
is.future(dateObjectForTheFuture); // true
is.future(dateObjectNotForTheFuture); // false
is.future(new Date()); // false
```


##### Returns


- `Boolean`  Whether the date is for the future.



#### day(date, day)

Checks if the given date is for the given day of the week. This method
doesn't support the `all` or `any` interfaces.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |
| day | `String`  | The day of the week to check for. | &nbsp; |




##### Examples

```javascript
is.day(dateObjectForAnyMonday, 'monday'); // true
is.day(dateObjectForAnySaturday, 'monday'); // false
```


##### Returns


- `Boolean`  Whether the date is for that day of the week.



#### month(date, month)

Checks if the given date is for the given month of the year. This method
doesn't support the `all` or `any` interfaces.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |
| month | `String`  | The month of the year to check for. | &nbsp; |




##### Examples

```javascript
is.month(dateObjectForNovember, 'november'); // true
is.month(dateObjectForJanuary, 'november'); // false
```


##### Returns


- `Boolean`  Whether the date is for that month of the year.



#### year(date, year)

Checks if the given date is for the given year. This method doesn't support
the `all` or `any` interfaces.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |
| year | `Number`  | The year to check for. | &nbsp; |




##### Examples

```javascript
is.year(dateObjectFor2016, 2016); // true
is.year(dateObjectFor2012, 2016); // false
```


##### Returns


- `Boolean`  Whether the date is for that year.



#### leapYear(year)

Checks if the given year is a leap year.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| year | `Number`  | The year to check. | &nbsp; |




##### Examples

```javascript
is.leapYear(2016); // true
is.leapYear(2015); // false
```


##### Returns


- `Boolean`  Whether the date is a leap year.



#### weekend(date)

Checks if the given date is for a weekend day.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |




##### Examples

```javascript
is.weekend(dateObjectForSaturday); // true
is.weekend(dateObjectForSunday); // true
is.weekend(dateObjectForMonday); // false
is.weekend(dateObjectForFriday); // false
```


##### Returns


- `Boolean`  Whether the date is for a weekend day.



#### weekday(date)

Checks if the given date is for a weekday.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |




##### Examples

```javascript
is.weekday(dateObjectForMonday); // true
is.weekday(dateObjectForFriday); // true
is.weekday(dateObjectForSaturday); // false
is.weekday(dateObjectForSunday); // false
```


##### Returns


- `Boolean`  Whether the date is for a weekday.



#### inDateRange(date, start, end)

Checks if the given date is within the start and end range. This method
doesn't support the `all` or `any` interfaces.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |
| start | `Date`  | The starting date. | &nbsp; |
| end | `Date`  | The ending date. | &nbsp; |




##### Examples

```javascript
is.inDateRange(new Date(), past, future); // true
is.inDateRange(new Date(), new Date(), new Date()); // false
```


##### Returns


- `Boolean`  Whether the date is within the range.



#### inLastWeek(date)

Checks if the given date is within last week's range.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |




##### Examples

```javascript
is.inLastWeek(dateObjectForLastWeek); // true
is.inLastWeek(new Date()); // false
```


##### Returns


- `Boolean`  Whether the date is within last week.



#### inLastMonth(date)

Checks if the given date is within last month's range.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |




##### Examples

```javascript
is.inLastMonth(dateObjectForLastMonth); // true
is.inLastMonth(new Date()); // false
```


##### Returns


- `Boolean`  Whether the date is within last month.



#### inLastYear(date)

Checks if the given date is within last year's range.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |




##### Examples

```javascript
is.inLastYear(dateObjectForLastYear); // true
is.inLastYear(new Date()); // false
```


##### Returns


- `Boolean`  Whether the date is within last year.



#### inNextWeek(date)

Checks if the given date is within next week's range.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |




##### Examples

```javascript
is.inNextWeek(dateObjectForNextWeek); // true
is.inNextWeek(new Date()); // false
```


##### Returns


- `Boolean`  Whether the date is within next week.



#### inNextMonth(date)

Checks if the given date is within next month's range.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |




##### Examples

```javascript
is.inNextMonth(dateObjectForNextMonth); // true
is.inNextMonth(new Date()); // false
```


##### Returns


- `Boolean`  Whether the date is within next month.



#### inNextYear(date)

Checks if the given date is within next year's range.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |




##### Examples

```javascript
is.inNextYear(dateObjectForNextYear); // true
is.inNextYear(new Date()); // false
```


##### Returns


- `Boolean`  Whether the date is within next year.



#### quarterOfYear(date, quarter)

Checks if the given date is within the given quarter. This method doesn't
support the `all` or `any` interfaces.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |
| quarter | `Number`  | The quarter to check for. | &nbsp; |




##### Examples

```javascript
is.quarterOfYear(dateObjectForSecondQuarter, 2); // true
is.quarterOfYear(dateObjectForSecondQuarter, 1); // true
```


##### Returns


- `Boolean`  Whether the date is within the quarter.



#### dayLightSavingTime(date)

Checks if the given date is in daylight saving time.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| date | `Date`  | The date to check. | &nbsp; |




##### Examples

```javascript
is.dayLightSavingTime(dateObjectOnDST); // true
is.dayLightSavingTime(dateObjectNotOnDST); // true
```


##### Returns


- `Boolean`  Whether the date is in daylight saving time.




### lib/type.js


#### arguments(val)

Checks if the given value is of arguments type with a fallback check for
IE.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.arguments(arguments); // true
is.arguments('not arguments'); // false
```


##### Returns


- `Boolean`  Whether the value is of arguments type.



#### array(val)

Checks if the given value is an array using native `Array.isArray` if
available.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.array([]); // true
is.array('not array'); // false
```


##### Returns


- `Boolean`  Whether the value is an array.



#### boolean(val)

Checks if the given value is a boolean.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.boolean(true); // true
is.boolean(false); // true
is.boolean('not boolean'); // false
```


##### Returns


- `Boolean`  Whether the value is a boolean.



#### date(val)

Checks if the given value is a date object.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.date(new Date()); // true
is.date('not date'); // false
```


##### Returns


- `Boolean`  Whether the value is a date object.



#### error(val)

Checks if the given value is an error object.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.error(new Error()); // true
is.error('not error'); // false
```


##### Returns


- `Boolean`  Whether the value is an error object.



#### function(val)

Checks if the given value is a function with a fallback check for IE.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.function(function () {}); // true
is.function('not function'); // false
```


##### Returns


- `Boolean`  Whether the value is a function.



#### nan(val)

Checks if the given value is NaN. The difference with the native `isNaN`
function is that this will not return true for strings or other types and
only for the NaN value, the only value that doesn't equals itself.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.function(NaN); // true
is.function('not NaN'); // false
is.function(null); // false
```


##### Returns


- `Boolean`  Whether the value is NaN.



#### null(val)

Checks if the given value is null.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.null(null); // true
is.null(undefined); // false
is.null('not null'); // false
```


##### Returns


- `Boolean`  Whether the value is null.



#### number(val)

Checks if the given value is a number.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.number(0); // true
is.number(3.5); // true
is.number('not number'); // false
```


##### Returns


- `Boolean`  Whether the value is a number.



#### object(val)

Checks if the given value is an object.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.object({}); // true
is.object(function () {}); // false
is.object('not object'); // false
```


##### Returns


- `Boolean`  Whether the value is an object.



#### json(val)

Checks if the given value is a JSON string.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.json('{ "some": "value" }'); // true
is.json({}); // false
is.json('not json'); // false
```


##### Returns


- `Boolean`  Whether the value is a JSON string.



#### regexp(val)

Checks if the given value is a RegExp.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.regexp(/regexp/gi); // true
is.regexp(new RegExp('regexp' ,'gi')); // true
is.regexp({}); // false
is.regexp('not regexp'); // false
```


##### Returns


- `Boolean`  Whether the value is a RegExp.



#### sameType(a, b)

Checks if the given values are of same type preventing NaN and Number same
type check. This method doesn't support the `all` or `any` interfaces.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| a | `Mixed`  | The first value to check. | &nbsp; |
| b | `Mixed`  | The other value to check. | &nbsp; |




##### Examples

```javascript
is.sameType(true, false); // true
is.sameType(1, 3); // true
is.sameType({}, []); // false
is.sameType('', null); // false
```


##### Returns


- `Boolean`  Whether the values are of same type.



#### string(value)

Checks if the given value is a string.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.string('foo'); // true
is.string(''); // true
is.string({}); // false
is.string([]); // false
```


##### Returns


- `Boolean`  Whether the value is a string.



#### char(val)

Checks if the given value is a single char.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.char('a'); // true
is.char('foo'); // false
is.char(1); // false
is.char(null); // false
```


##### Returns


- `Boolean`  Whether the value is a single char.



#### undefined(val)

Checks if the given value is undefined.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `Mixed`  | The value to check. | &nbsp; |




##### Examples

```javascript
is.undefined(undefined); // true
is.undefined('not undefined'); // false
```


##### Returns


- `Boolean`  Whether the value is undefined.




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
