# is

Object checks.



* * *

### is.propertyCount(obj, count) 

Checks if the given object has the given number of properties. This method
doesn't support the `all` or `any` interfaces.

**Parameters**

**obj**: `Object`, The object to check.

**count**: `Number`, The number of properties to expect.

**Returns**: `Boolean`, Whether the object has the number of properties.

**Example**:
```js
is.propertyCount({wer: 'asd'}, 1); // true
is.propertyCount({}, 5); // false
```


### is.propertyDefined(obj, prop) 

Checks if the given object has the given property. This method doesn't
support the `all` or `any` interfaces.

**Parameters**

**obj**: `Object`, The object to check.

**prop**: `String`, The name of the propery to search for.

**Returns**: `Boolean`, Whether the object has the property.

**Example**:
```js
is.propertyDefined({wer: 'asd'}, 'wer'); // true
is.propertyDefined({}, 'wer'); // false
```


### is.windowObject(obj) 

Checks if the given object is the window object.

**Parameters**

**obj**: `Object`, The object to check.

**Returns**: `Boolean`, Whether the object is the window object.

**Example**:
```js
is.windowObject(window); // true
is.windowObject({}); // false
```


### is.domNode(obj) 

Checks if the given object is a DOM node.

**Parameters**

**obj**: `Object`, The object to check.

**Returns**: `Boolean`, Whether the object is a DOM node.

**Example**:
```js
is.domNode(document.body); // true
is.domNode(document); // false
is.domNode('not DOM node'); // false
is.domNode(0); // false
```



* * *










