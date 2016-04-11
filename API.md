<a name="is"></a>

## is : <code>object</code>
**Kind**: global namespace  
**Version**: 0.8.0  
**Author:** Santiago G. Marín <santiago@finaldevstudio.com>, Aras Atasaygin  
**License**: MIT  
**Copyright**: Final Development Studio 2016  

* [is](#is) : <code>object</code>
    * [.VERSION](#is.VERSION) : <code>string</code>
    * [.not](#is.not)
    * [.all](#is.all)
    * [.any](#is.any)
    * [.equal(a, b)](#is.equal) ⇒ <code>Boolean</code>
    * [.even(num)](#is.even) ⇒ <code>Boolean</code>
    * [.odd(num)](#is.odd) ⇒ <code>Boolean</code>
    * [.positive(num)](#is.positive) ⇒ <code>Boolean</code>
    * [.negative(num)](#is.negative) ⇒ <code>Boolean</code>
    * [.above(num, min)](#is.above) ⇒ <code>Boolean</code>
    * [.under(num, max)](#is.under) ⇒ <code>Boolean</code>
    * [.within(num, min, max)](#is.within) ⇒ <code>Boolean</code>
    * [.decimal(num)](#is.decimal) ⇒ <code>Boolean</code>
    * [.integer(num)](#is.integer) ⇒ <code>Boolean</code>
    * [.finite(num)](#is.finite) ⇒ <code>Boolean</code>
    * [.infinite(num)](#is.infinite) ⇒ <code>Boolean</code>
    * [.inArray(val, arr)](#is.inArray) ⇒ <code>Boolean</code>
    * [.sorted(arr)](#is.sorted) ⇒ <code>Boolean</code>
    * [.chrome()](#is.chrome) ⇒ <code>Boolean</code>
    * [.firefox()](#is.firefox) ⇒ <code>Boolean</code>
    * [.edge()](#is.edge) ⇒ <code>Boolean</code>
    * [.ie(ver)](#is.ie) ⇒ <code>Boolean</code>
    * [.opera()](#is.opera) ⇒ <code>Boolean</code>
    * [.safari()](#is.safari) ⇒ <code>Boolean</code>
    * [.vivaldi()](#is.vivaldi) ⇒ <code>Boolean</code>
    * [.ios()](#is.ios) ⇒ <code>Boolean</code>
    * [.iphone()](#is.iphone) ⇒ <code>Boolean</code>
    * [.ipad()](#is.ipad) ⇒ <code>Boolean</code>
    * [.ipod()](#is.ipod) ⇒ <code>Boolean</code>
    * [.android()](#is.android) ⇒ <code>Boolean</code>
    * [.androidPhone()](#is.androidPhone) ⇒ <code>Boolean</code>
    * [.androidTablet()](#is.androidTablet) ⇒ <code>Boolean</code>
    * [.blackberry()](#is.blackberry) ⇒ <code>Boolean</code>
    * [.desktop()](#is.desktop) ⇒ <code>Boolean</code>
    * [.linux()](#is.linux) ⇒ <code>Boolean</code>
    * [.osx()](#is.osx) ⇒ <code>Boolean</code>
    * [.mac()](#is.mac) ⇒ <code>Boolean</code>
    * [.windows()](#is.windows) ⇒ <code>Boolean</code>
    * [.windowsPhone()](#is.windowsPhone) ⇒ <code>Boolean</code>
    * [.windowsTablet()](#is.windowsTablet) ⇒ <code>Boolean</code>
    * [.mobile()](#is.mobile) ⇒ <code>Boolean</code>
    * [.tablet()](#is.tablet) ⇒ <code>Boolean</code>
    * [.online()](#is.online) ⇒ <code>Boolean</code>
    * [.offline()](#is.offline) ⇒ <code>Boolean</code>
    * [.touchDevice()](#is.touchDevice) ⇒ <code>Boolean</code>
    * [.nodejs()](#is.nodejs) ⇒ <code>Boolean</code>
    * [.setRegexp(reg, key)](#is.setRegexp)
    * [.setNamespace()](#is.setNamespace) ⇒ <code>Object</code>
    * [.propertyCount(obj, count)](#is.propertyCount) ⇒ <code>Boolean</code>
    * [.propertyDefined(obj, property)](#is.propertyDefined) ⇒ <code>Boolean</code>
    * [.windowObject(obj)](#is.windowObject) ⇒ <code>Boolean</code>
    * [.domNode(obj)](#is.domNode) ⇒ <code>Boolean</code>
    * [.empty(val)](#is.empty) ⇒ <code>Boolean</code>
    * [.existy(val)](#is.existy) ⇒ <code>Boolean</code>
    * [.truthy(val)](#is.truthy) ⇒ <code>Boolean</code>
    * [.falsy(val)](#is.falsy) ⇒ <code>Boolean</code>
    * [.space(val)](#is.space) ⇒ <code>Boolean</code>
    * [.include(str, val)](#is.include) ⇒ <code>Boolean</code>
    * [.upperCase(str)](#is.upperCase) ⇒ <code>Boolean</code>
    * [.lowerCase(str)](#is.lowerCase) ⇒ <code>Boolean</code>
    * [.startWith(str, val)](#is.startWith) ⇒ <code>Boolean</code>
    * [.endWith(str, val)](#is.endWith) ⇒ <code>Boolean</code>
    * [.capitalized(str)](#is.capitalized) ⇒ <code>Boolean</code>
    * [.palindrome(str)](#is.palindrome) ⇒ <code>Boolean</code>
    * [.today(date)](#is.today) ⇒ <code>Boolean</code>
    * [.yesterday(date)](#is.yesterday) ⇒ <code>Boolean</code>
    * [.tomorrow(date)](#is.tomorrow) ⇒ <code>Boolean</code>
    * [.past(date)](#is.past) ⇒ <code>Boolean</code>
    * [.future(date)](#is.future) ⇒ <code>Boolean</code>
    * [.day(date, day)](#is.day) ⇒ <code>Boolean</code>
    * [.month(date, month)](#is.month) ⇒ <code>Boolean</code>
    * [.year(date, year)](#is.year) ⇒ <code>Boolean</code>
    * [.leapYear(year)](#is.leapYear) ⇒ <code>Boolean</code>
    * [.weekend(date)](#is.weekend) ⇒ <code>Boolean</code>
    * [.weekday(date)](#is.weekday) ⇒ <code>Boolean</code>
    * [.inDateRange(date, start, end)](#is.inDateRange) ⇒ <code>Boolean</code>
    * [.inLastWeek(date)](#is.inLastWeek) ⇒ <code>Boolean</code>
    * [.inLastMonth(date)](#is.inLastMonth) ⇒ <code>Boolean</code>
    * [.inLastYear(date)](#is.inLastYear) ⇒ <code>Boolean</code>
    * [.inNextWeek(date)](#is.inNextWeek) ⇒ <code>Boolean</code>
    * [.inNextMonth(date)](#is.inNextMonth) ⇒ <code>Boolean</code>
    * [.inNextYear(date)](#is.inNextYear) ⇒ <code>Boolean</code>
    * [.quarterOfYear(date, quarter)](#is.quarterOfYear) ⇒ <code>Boolean</code>
    * [.dayLightSavingTime(date)](#is.dayLightSavingTime) ⇒ <code>Boolean</code>
    * [.arguments(val)](#is.arguments) ⇒ <code>Boolean</code>
    * [.array(val)](#is.array) ⇒ <code>Boolean</code>
    * [.boolean(val)](#is.boolean) ⇒ <code>Boolean</code>
    * [.date(val)](#is.date) ⇒ <code>Boolean</code>
    * [.error(val)](#is.error) ⇒ <code>Boolean</code>
    * [.function(val)](#is.function) ⇒ <code>Boolean</code>
    * [.nan(val)](#is.nan) ⇒ <code>Boolean</code>
    * [.null(val)](#is.null) ⇒ <code>Boolean</code>
    * [.number(val)](#is.number) ⇒ <code>Boolean</code>
    * [.object(val)](#is.object) ⇒ <code>Boolean</code>
    * [.json(val)](#is.json) ⇒ <code>Boolean</code>
    * [.regexp(val)](#is.regexp) ⇒ <code>Boolean</code>
    * [.sameType(val1, val2)](#is.sameType) ⇒ <code>Boolean</code>
    * [.string(val)](#is.string) ⇒ <code>Boolean</code>
    * [.char(val)](#is.char) ⇒ <code>Boolean</code>
    * [.undefined(val)](#is.undefined) ⇒ <code>Boolean</code>

<a name="is.VERSION"></a>

### is.VERSION : <code>string</code>
The library's current version.

**Kind**: static property of <code>[is](#is)</code>  
**Read only**: true  
**Example**  
```js
is.VERSION; // '1.0.0'
```
<a name="is.not"></a>

### is.not
Interface to invert the boolean result of the predicate function.

**Kind**: static property of <code>[is](#is)</code>  
**Example**  
```js
is.not.number(1); // false
is.not.number('not number'); // true
```
<a name="is.all"></a>

### is.all
Interface to check if all passed values to the predicate function are valid.

**Kind**: static property of <code>[is](#is)</code>  
**Example**  
```js
is.all.number(1, 2, 3, 4); // true
is.all.number([1, 2, 3, 4]); // true
is.all.number([1, 2, 3, 4, 'not number']); // false
```
<a name="is.any"></a>

### is.any
Interface to check if any of the passed values to the predicate function are
valid.

**Kind**: static property of <code>[is](#is)</code>  
**Example**  
```js
is.any.number(1, 2, 3, 4); // true
is.any.number([1, 2, false, 4]); // true
is.any.number([null, 'not number']); // false
```
<a name="is.equal"></a>

### is.equal(a, b) ⇒ <code>Boolean</code>
Checks if the given values are equal.

Important: Checking for object or array equality is a taxing proccess!

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the values are equal.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Mixed</code> | The first value. |
| b | <code>Mixed</code> | The other value. |

**Example**  
```js
is.equal(1, 1); // true
is.equal([1, 2, 3], [1, 2, 3]); // true
is.equal([1, 2], ''); // false
is.equal(1, 2); // false
```
<a name="is.even"></a>

### is.even(num) ⇒ <code>Boolean</code>
Checks if the given number is even.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the number is even.  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | The number to check. |

**Example**  
```js
is.even(2); // true
is.even(3); // false
```
<a name="is.odd"></a>

### is.odd(num) ⇒ <code>Boolean</code>
Checks if the given number is odd.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the number is odd.  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | The number to check. |

**Example**  
```js
is.odd(3); // true
is.odd(2); // false
```
<a name="is.positive"></a>

### is.positive(num) ⇒ <code>Boolean</code>
Checks if the given number is positive.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the number is positive.  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | The number to check. |

**Example**  
```js
is.positive(2); // true
is.positive(-3); // false
```
<a name="is.negative"></a>

### is.negative(num) ⇒ <code>Boolean</code>
Checks if the given number is negative.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the number is negative.  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | The number to check. |

**Example**  
```js
is.negative(-3); // true
is.negative(2); // false
```
<a name="is.above"></a>

### is.above(num, min) ⇒ <code>Boolean</code>
Checks if the given number is greater than the given minimum.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the number is greater than the minimum.  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | The number to check. |
| min | <code>Number</code> | The minimum value exclusive. |

**Example**  
```js
is.above(3, 2); // true
is.above(2, 3); // false
is.above(3, 3); // false
```
<a name="is.under"></a>

### is.under(num, max) ⇒ <code>Boolean</code>
Checks if the given number is less than the given maximum.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the number is less than the maximum.  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | The number to check. |
| max | <code>Number</code> | The maximum value exclusive. |

**Example**  
```js
is.under(3, 2); // true
is.under(2, 3); // false
is.under(3, 3); // false
```
<a name="is.within"></a>

### is.within(num, min, max) ⇒ <code>Boolean</code>
Checks if the given number is within the given minimum and maximum.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the number is within the minimum and maximum.  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | The number to check. |
| min | <code>Number</code> | The minimum value exclusive. |
| max | <code>Number</code> | The maximum value exclusive. |

**Example**  
```js
is.within(0, -2, 2); // true
is.within(1, -2, 2); // true
is.within(0, 1, 3); // false
is.within(1, 1, 2); // false
```
<a name="is.decimal"></a>

### is.decimal(num) ⇒ <code>Boolean</code>
Checks if the given number is a decimal.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the number is a decimal.  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | The number to check. |

**Example**  
```js
is.decimal(13.45); // true
is.decimal(13); // false
```
<a name="is.integer"></a>

### is.integer(num) ⇒ <code>Boolean</code>
Checks if the given number is an integer.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the number is an integer.  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | The number to check. |

**Example**  
```js
is.integer(13); // true
is.integer(13.5); // false
```
<a name="is.finite"></a>

### is.finite(num) ⇒ <code>Boolean</code>
Checks if the given number is finite using native 'isFinite' first.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the number is finite.  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | The number to check. |

**Example**  
```js
is.finite(13); // true
is.finite(Infinity); // false
```
<a name="is.infinite"></a>

### is.infinite(num) ⇒ <code>Boolean</code>
Checks if the given number is infinite.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the number is infinite.  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | The number to check. |

**Example**  
```js
is.infinite(Infinity); // true
is.infinite(13); // false
```
<a name="is.inArray"></a>

### is.inArray(val, arr) ⇒ <code>Boolean</code>
Checks if the given value is in the given array. This method does not
support 'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is in the array.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to search for. |
| arr | <code>Array</code> | The array to search into. |

**Example**  
```js
is.inArray(1, [1, 2, 3]); // true
is.inArray('wer', [1, 2, 3]); // false
```
<a name="is.sorted"></a>

### is.sorted(arr) ⇒ <code>Boolean</code>
Checks if the given array is sorted.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the array is sorted.  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | The array to check. |

**Example**  
```js
is.sorted([1, 2, 3]); // true
is.sorted([2, 1, 5, 3]); // false
```
<a name="is.chrome"></a>

### is.chrome() ⇒ <code>Boolean</code>
Checks if the current browser is Chrome or Chromium. This method does not
support 'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current browser is Chrome or Chromium.  
**Example**  
```js
is.chrome();
```
<a name="is.firefox"></a>

### is.firefox() ⇒ <code>Boolean</code>
Checks if the current browser is Firefox. This method does not support
'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current browser is Firefox.  
**Example**  
```js
is.firefox();
```
<a name="is.edge"></a>

### is.edge() ⇒ <code>Boolean</code>
Checks if the current browser is Edge. This method does not support 'all'
and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current browser is Edge.  
**Example**  
```js
is.firefox();
```
<a name="is.ie"></a>

### is.ie(ver) ⇒ <code>Boolean</code>
Checks if the current browser is Internet Explorer. This method does not
support 'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current browser is Internet Explorer.  

| Param | Type | Description |
| --- | --- | --- |
| ver | <code>Number</code> | The optional version number to check for. |

**Example**  
```js
is.ie();
is.ie(9);
is.ie(10);
```
<a name="is.opera"></a>

### is.opera() ⇒ <code>Boolean</code>
Checks if the current browser is Opera. This method does not support 'all'
and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current browser is Opera.  
**Example**  
```js
is.opera();
```
<a name="is.safari"></a>

### is.safari() ⇒ <code>Boolean</code>
Checks if the current browser is Safari. This method does not support 'all'
and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current browser is Safari.  
**Example**  
```js
is.safari();
```
<a name="is.vivaldi"></a>

### is.vivaldi() ⇒ <code>Boolean</code>
Checks if the current browser is Vivaldi. This method does not support
'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current browser is Vivaldi.  
**Example**  
```js
is.vivaldi();
```
<a name="is.ios"></a>

### is.ios() ⇒ <code>Boolean</code>
Checks if the current device is runnig iOS. This method does not support
'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device is runnig iOS.  
**Example**  
```js
is.ios();
```
<a name="is.iphone"></a>

### is.iphone() ⇒ <code>Boolean</code>
Checks if the current device is an iPhone. This method does not support
'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device is an iPhone.  
**Example**  
```js
is.iphone();
```
<a name="is.ipad"></a>

### is.ipad() ⇒ <code>Boolean</code>
Checks if the current device is an iPad. This method does not support 'all'
and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device is an iPad.  
**Example**  
```js
is.ipad();
```
<a name="is.ipod"></a>

### is.ipod() ⇒ <code>Boolean</code>
Checks if the current device is an iPod. This method does not support 'all'
and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device is an iPod.  
**Example**  
```js
is.ipod();
```
<a name="is.android"></a>

### is.android() ⇒ <code>Boolean</code>
Checks if the current device is an Android device. This method does not
support 'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device is an Android device.  
**Example**  
```js
is.android();
```
<a name="is.androidPhone"></a>

### is.androidPhone() ⇒ <code>Boolean</code>
Checks if the current device is an Android phone. This method does not
support 'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device is an Android phone.  
**Example**  
```js
is.androidPhone();
```
<a name="is.androidTablet"></a>

### is.androidTablet() ⇒ <code>Boolean</code>
Checks if the current device is an Android tablet. This method does not
support 'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device is an Android tablet.  
**Example**  
```js
is.androidTablet();
```
<a name="is.blackberry"></a>

### is.blackberry() ⇒ <code>Boolean</code>
Checks if the current device is a Blackberry device. This method does not
support 'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device is a Blackberry device.  
**Example**  
```js
is.blackberry();
```
<a name="is.desktop"></a>

### is.desktop() ⇒ <code>Boolean</code>
Checks if the current device is a desktop device. This method does not
support 'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device is a desktop device.  
**Example**  
```js
is.desktop();
```
<a name="is.linux"></a>

### is.linux() ⇒ <code>Boolean</code>
Checks if the current device running Linux (excluding Android). This method
does not support 'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device running Linux.  
**Example**  
```js
is.linux();
```
<a name="is.osx"></a>

### is.osx() ⇒ <code>Boolean</code>
Checks if the current device running OSX. This method does not support
'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device running OSX.  
**Example**  
```js
is.osx();
```
<a name="is.mac"></a>

### is.mac() ⇒ <code>Boolean</code>
Checks if the current device running OSX (Mac). This method does not
support 'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device running OSX.  
**Example**  
```js
is.mac();
```
<a name="is.windows"></a>

### is.windows() ⇒ <code>Boolean</code>
Checks if the current device running Windows. This method does not support
'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device running Windows.  
**Example**  
```js
is.windows();
```
<a name="is.windowsPhone"></a>

### is.windowsPhone() ⇒ <code>Boolean</code>
Checks if the current device is a Windows phone. This method does not
support 'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device is a Windows phone.  
**Example**  
```js
is.windowsPhone();
```
<a name="is.windowsTablet"></a>

### is.windowsTablet() ⇒ <code>Boolean</code>
Checks if the current device is a Windows tablet. This method does not
support 'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device is a Windows tablet.  
**Example**  
```js
is.windowsTablet();
```
<a name="is.mobile"></a>

### is.mobile() ⇒ <code>Boolean</code>
Checks if the current device is a mobile device. This method does not
support 'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device is a mobile device.  
**Example**  
```js
is.mobile();
```
<a name="is.tablet"></a>

### is.tablet() ⇒ <code>Boolean</code>
Checks if the current device is a tablet. This method does not support
'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device is a tablet.  
**Example**  
```js
is.tablet();
```
<a name="is.online"></a>

### is.online() ⇒ <code>Boolean</code>
Checks if the current device is on-line. This method does not support 'all'
and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device is on-line.  
**Example**  
```js
is.online();
```
<a name="is.offline"></a>

### is.offline() ⇒ <code>Boolean</code>
Checks if the current device is off-line. This method does not support
'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device is off-line.  
**Example**  
```js
is.offline();
```
<a name="is.touchDevice"></a>

### is.touchDevice() ⇒ <code>Boolean</code>
Checks if the current device is touch capable. This method does not support
'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current device is touch capable.  
**Example**  
```js
is.touchDevice();
```
<a name="is.nodejs"></a>

### is.nodejs() ⇒ <code>Boolean</code>
Checks if the current environment is Node.js. This method does not support
'all' and 'any' interfaces.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the current environment is Node.js.  
**Example**  
```js
is.nodejs();
```
<a name="is.setRegexp"></a>

### is.setRegexp(reg, key)
Sets a custom regexp value for any existant regexp name.

**Kind**: static method of <code>[is](#is)</code>  

| Param | Type | Description |
| --- | --- | --- |
| reg | <code>RegExp</code> | The regexp to use. |
| key | <code>String</code> | The regexp name to replace. |

<a name="is.setNamespace"></a>

### is.setNamespace() ⇒ <code>Object</code>
Changes the namespace of the library to prevent name collissions.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Object</code> - The 'is' object instance.  
<a name="is.propertyCount"></a>

### is.propertyCount(obj, count) ⇒ <code>Boolean</code>
Checks if the given object has the given number of properties.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the object has the number of properties.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The object to check. |
| count | <code>Number</code> | The number of properties to expect. |

<a name="is.propertyDefined"></a>

### is.propertyDefined(obj, property) ⇒ <code>Boolean</code>
Checks if the given object has the given property.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the object has the property.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The object to check. |
| property | <code>String</code> | The propery to search for. |

<a name="is.windowObject"></a>

### is.windowObject(obj) ⇒ <code>Boolean</code>
Checks if the given object is the window object.

Note: method 'setInterval' is only available for window object.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the object is the window object.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The object to check. |

<a name="is.domNode"></a>

### is.domNode(obj) ⇒ <code>Boolean</code>
Checks if the given object is a DOM node.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the object is a DOM node.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The object to check. |

<a name="is.empty"></a>

### is.empty(val) ⇒ <code>Boolean</code>
Checks if the given object is empty.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is empty.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

<a name="is.existy"></a>

### is.existy(val) ⇒ <code>Boolean</code>
Checks if the given object is not null or undefined.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is not null or undefined.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

<a name="is.truthy"></a>

### is.truthy(val) ⇒ <code>Boolean</code>
Checks if the given value is truthy.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is truthy.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

<a name="is.falsy"></a>

### is.falsy(val) ⇒ <code>Boolean</code>
Checks if the given value is falsy.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is falsy.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The object to check. |

<a name="is.space"></a>

### is.space(val) ⇒ <code>Boolean</code>
Checks if the given value is a space character. Checks for
horizantal tab (9), line feed (10), vertical tab (11), form feed (12),
carriage return (13) and space (32).

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is a space character.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

<a name="is.include"></a>

### is.include(str, val) ⇒ <code>Boolean</code>
Checks if the given string includes or contains the given value.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the string contains the given value.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string to search into. |
| val | <code>Mixed</code> | The value to search for. |

<a name="is.upperCase"></a>

### is.upperCase(str) ⇒ <code>Boolean</code>
Checks if the given string is all in uppercase.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the string is all in uppercase.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string to check. |

<a name="is.lowerCase"></a>

### is.lowerCase(str) ⇒ <code>Boolean</code>
Checks if the given string is all in lowercase.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the string is all in lowercase.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string to check. |

<a name="is.startWith"></a>

### is.startWith(str, val) ⇒ <code>Boolean</code>
Checks if the given string starts with the given value.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the string starts with the given value.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string to check into. |
| val | <code>String</code> | The value to check for. |

<a name="is.endWith"></a>

### is.endWith(str, val) ⇒ <code>Boolean</code>
Checks if the given string ends with the given value.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the string ends with the given value.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string to check into. |
| val | <code>String</code> | The value to check for. |

<a name="is.capitalized"></a>

### is.capitalized(str) ⇒ <code>Boolean</code>
Checks if the given string is sentence capitalized.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the string is sentence capitalized.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string to check. |

<a name="is.palindrome"></a>

### is.palindrome(str) ⇒ <code>Boolean</code>
Checks if the given string is a palindrome.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the string is a palindrome.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string to check. |

<a name="is.today"></a>

### is.today(date) ⇒ <code>Boolean</code>
Checks if the given date is for today.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is for today.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |

<a name="is.yesterday"></a>

### is.yesterday(date) ⇒ <code>Boolean</code>
Checks if the given date is for yesterday.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is for yesterday.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |

<a name="is.tomorrow"></a>

### is.tomorrow(date) ⇒ <code>Boolean</code>
Checks if the given date is for tomorrow.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is for tomorrow.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |

<a name="is.past"></a>

### is.past(date) ⇒ <code>Boolean</code>
Checks if the given date is for the past.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is for the past.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |

<a name="is.future"></a>

### is.future(date) ⇒ <code>Boolean</code>
Checks if the given date is for the future.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is for the future.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |

<a name="is.day"></a>

### is.day(date, day) ⇒ <code>Boolean</code>
Checks if the given date is for the given day of the week.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is for that day of the week.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |
| day | <code>String</code> | The day of the week to check for. |

<a name="is.month"></a>

### is.month(date, month) ⇒ <code>Boolean</code>
Checks if the given date is for the given month of the year.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is for that month of the year.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |
| month | <code>String</code> | The month of the year to check for. |

<a name="is.year"></a>

### is.year(date, year) ⇒ <code>Boolean</code>
Checks if the given date is for the given year.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is for that year.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |
| year | <code>Number</code> | The year to check for. |

<a name="is.leapYear"></a>

### is.leapYear(year) ⇒ <code>Boolean</code>
Checks if the given year is a leap year.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is a leap year.  

| Param | Type | Description |
| --- | --- | --- |
| year | <code>Number</code> | The year to check. |

<a name="is.weekend"></a>

### is.weekend(date) ⇒ <code>Boolean</code>
Checks if the given date is for a weekend day.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is for a weekend day.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |

<a name="is.weekday"></a>

### is.weekday(date) ⇒ <code>Boolean</code>
Checks if the given date is for a weekday.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is for a weekday.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |

<a name="is.inDateRange"></a>

### is.inDateRange(date, start, end) ⇒ <code>Boolean</code>
Checks if the given date is within the start and end range.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is within the range.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |
| start | <code>Date</code> | The starting date. |
| end | <code>Date</code> | The ending date. |

<a name="is.inLastWeek"></a>

### is.inLastWeek(date) ⇒ <code>Boolean</code>
Checks if the given date is within last week's range.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is within last week.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |

<a name="is.inLastMonth"></a>

### is.inLastMonth(date) ⇒ <code>Boolean</code>
Checks if the given date is within last month's range.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is within last month.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |

<a name="is.inLastYear"></a>

### is.inLastYear(date) ⇒ <code>Boolean</code>
Checks if the given date is within last year's range.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is within last year.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |

<a name="is.inNextWeek"></a>

### is.inNextWeek(date) ⇒ <code>Boolean</code>
Checks if the given date is within next week's range.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is within next week.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |

<a name="is.inNextMonth"></a>

### is.inNextMonth(date) ⇒ <code>Boolean</code>
Checks if the given date is within next month's range.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is within next month.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |

<a name="is.inNextYear"></a>

### is.inNextYear(date) ⇒ <code>Boolean</code>
Checks if the given date is within next year's range.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is within next year.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |

<a name="is.quarterOfYear"></a>

### is.quarterOfYear(date, quarter) ⇒ <code>Boolean</code>
Checks if the given date is within the given quarter.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is within the quarter.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |
| quarter | <code>Number</code> | The quarter to check for. |

<a name="is.dayLightSavingTime"></a>

### is.dayLightSavingTime(date) ⇒ <code>Boolean</code>
Checks if the given date is in daylight saving time.

TODO: Figure out a way to make it work in every timezone as now it works
only for some in the US.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the date is in daylight saving time.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to check. |

<a name="is.arguments"></a>

### is.arguments(val) ⇒ <code>Boolean</code>
Checks if the given value is of arguments type with a fallback check for
IE.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is of arguments type.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

**Example**  
```js
is.arguments('not arguments'); // false
```
<a name="is.array"></a>

### is.array(val) ⇒ <code>Boolean</code>
Checks if the given value is an array using native 'isArray' if available.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is an array.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

<a name="is.boolean"></a>

### is.boolean(val) ⇒ <code>Boolean</code>
Checks if the given value is a boolean.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is a boolean.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

<a name="is.date"></a>

### is.date(val) ⇒ <code>Boolean</code>
Checks if the given value is a date object.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is a date object.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

<a name="is.error"></a>

### is.error(val) ⇒ <code>Boolean</code>
Checks if the given value is an error object.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is an error object.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

<a name="is.function"></a>

### is.function(val) ⇒ <code>Boolean</code>
Checks if the given value is a function with a fallback check for IE.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is a function.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

<a name="is.nan"></a>

### is.nan(val) ⇒ <code>Boolean</code>
Checks if the given value is NaN.

Note: NaN is a number and it's the only value which doesn't equals itself.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is NaN.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

<a name="is.null"></a>

### is.null(val) ⇒ <code>Boolean</code>
Checks if the given value is null.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is null.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

<a name="is.number"></a>

### is.number(val) ⇒ <code>Boolean</code>
Checks if the given value is a number.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is a number.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

<a name="is.object"></a>

### is.object(val) ⇒ <code>Boolean</code>
Checks if the given value is an object.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is an object.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

<a name="is.json"></a>

### is.json(val) ⇒ <code>Boolean</code>
Checks if the given value is a pure JSON object.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is a pure JSON object.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

<a name="is.regexp"></a>

### is.regexp(val) ⇒ <code>Boolean</code>
Checks if the given value is a RegExp.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is a RegExp.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

<a name="is.sameType"></a>

### is.sameType(val1, val2) ⇒ <code>Boolean</code>
Checks if the given values are of same type preventing NaN and Number same
type check.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the values are of same type.  

| Param | Type | Description |
| --- | --- | --- |
| val1 | <code>Mixed</code> | The first value to check. |
| val2 | <code>Mixed</code> | The other value to check. |

<a name="is.string"></a>

### is.string(val) ⇒ <code>Boolean</code>
Checks if the given value is a string.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is a string.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

<a name="is.char"></a>

### is.char(val) ⇒ <code>Boolean</code>
Checks if the given value is a single char.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is a single char.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

<a name="is.undefined"></a>

### is.undefined(val) ⇒ <code>Boolean</code>
Checks if the given value is undefined.

**Kind**: static method of <code>[is](#is)</code>  
**Returns**: <code>Boolean</code> - Whether the value is undefined.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>Mixed</code> | The value to check. |

