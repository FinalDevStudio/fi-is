# is

Time checks.



* * *

### is.today(date) 

Checks if the given date is for today.

**Parameters**

**date**: `Date`, The date to check.

**Returns**: `Boolean`, Whether the date is for today.

**Example**:
```js
is.today(new Date()); // true
is.today(dateObjectForToday); // true
is.today(dateObjectNotForToday); // false
```


### is.yesterday(date) 

Checks if the given date is for yesterday.

**Parameters**

**date**: `Date`, The date to check.

**Returns**: `Boolean`, Whether the date is for yesterday.

**Example**:
```js
is.yesterday(dateObjectForYesterday); // true
is.yesterday(dateObjectNotForYesterday); // false
is.yesterday(new Date()); // false
```


### is.tomorrow(date) 

Checks if the given date is for tomorrow.

**Parameters**

**date**: `Date`, The date to check.

**Returns**: `Boolean`, Whether the date is for tomorrow.

**Example**:
```js
is.tomorrow(dateObjectForTomorrow); // true
is.tomorrow(dateObjectNotForTomorrow); // false
is.tomorrow(new Date()); // false
```


### is.past(date) 

Checks if the given date is for the past.

**Parameters**

**date**: `Date`, The date to check.

**Returns**: `Boolean`, Whether the date is for the past.

**Example**:
```js
is.past(dateObjectForTomorrow); // true
is.past(dateObjectNotForTomorrow); // false
is.past(new Date()); // false
```


### is.future(date) 

Checks if the given date is for the future.

**Parameters**

**date**: `Date`, The date to check.

**Returns**: `Boolean`, Whether the date is for the future.

**Example**:
```js
is.future(dateObjectForTheFuture); // true
is.future(dateObjectNotForTheFuture); // false
is.future(new Date()); // false
```


### is.day(date, day) 

Checks if the given date is for the given day of the week. This method
doesn't support the `all` or `any` interfaces.

**Parameters**

**date**: `Date`, The date to check.

**day**: `String`, The day of the week to check for.

**Returns**: `Boolean`, Whether the date is for that day of the week.

**Example**:
```js
is.day(dateObjectForAnyMonday, 'monday'); // true
is.day(dateObjectForAnySaturday, 'monday'); // false
```


### is.month(date, month) 

Checks if the given date is for the given month of the year. This method
doesn't support the `all` or `any` interfaces.

**Parameters**

**date**: `Date`, The date to check.

**month**: `String`, The month of the year to check for.

**Returns**: `Boolean`, Whether the date is for that month of the year.

**Example**:
```js
is.month(dateObjectForNovember, 'november'); // true
is.month(dateObjectForJanuary, 'november'); // false
```


### is.year(date, year) 

Checks if the given date is for the given year. This method doesn't support
the `all` or `any` interfaces.

**Parameters**

**date**: `Date`, The date to check.

**year**: `Number`, The year to check for.

**Returns**: `Boolean`, Whether the date is for that year.

**Example**:
```js
is.year(dateObjectFor2016, 2016); // true
is.year(dateObjectFor2012, 2016); // false
```


### is.leapYear(year) 

Checks if the given year is a leap year.

**Parameters**

**year**: `Number`, The year to check.

**Returns**: `Boolean`, Whether the date is a leap year.

**Example**:
```js
is.leapYear(2016); // true
is.leapYear(2015); // false
```


### is.weekend(date) 

Checks if the given date is for a weekend day.

**Parameters**

**date**: `Date`, The date to check.

**Returns**: `Boolean`, Whether the date is for a weekend day.

**Example**:
```js
is.weekend(dateObjectForSaturday); // true
is.weekend(dateObjectForSunday); // true
is.weekend(dateObjectForMonday); // false
is.weekend(dateObjectForFriday); // false
```


### is.weekday(date) 

Checks if the given date is for a weekday.

**Parameters**

**date**: `Date`, The date to check.

**Returns**: `Boolean`, Whether the date is for a weekday.

**Example**:
```js
is.weekday(dateObjectForMonday); // true
is.weekday(dateObjectForFriday); // true
is.weekday(dateObjectForSaturday); // false
is.weekday(dateObjectForSunday); // false
```


### is.inDateRange(date, start, end) 

Checks if the given date is within the start and end range. This method
doesn't support the `all` or `any` interfaces.

**Parameters**

**date**: `Date`, The date to check.

**start**: `Date`, The starting date.

**end**: `Date`, The ending date.

**Returns**: `Boolean`, Whether the date is within the range.

**Example**:
```js
is.inDateRange(new Date(), past, future); // true
is.inDateRange(new Date(), new Date(), new Date()); // false
```


### is.inLastWeek(date) 

Checks if the given date is within last week's range.

**Parameters**

**date**: `Date`, The date to check.

**Returns**: `Boolean`, Whether the date is within last week.

**Example**:
```js
is.inLastWeek(dateObjectForLastWeek); // true
is.inLastWeek(new Date()); // false
```


### is.inLastMonth(date) 

Checks if the given date is within last month's range.

**Parameters**

**date**: `Date`, The date to check.

**Returns**: `Boolean`, Whether the date is within last month.

**Example**:
```js
is.inLastMonth(dateObjectForLastMonth); // true
is.inLastMonth(new Date()); // false
```


### is.inLastYear(date) 

Checks if the given date is within last year's range.

**Parameters**

**date**: `Date`, The date to check.

**Returns**: `Boolean`, Whether the date is within last year.

**Example**:
```js
is.inLastYear(dateObjectForLastYear); // true
is.inLastYear(new Date()); // false
```


### is.inNextWeek(date) 

Checks if the given date is within next week's range.

**Parameters**

**date**: `Date`, The date to check.

**Returns**: `Boolean`, Whether the date is within next week.

**Example**:
```js
is.inNextWeek(dateObjectForNextWeek); // true
is.inNextWeek(new Date()); // false
```


### is.inNextMonth(date) 

Checks if the given date is within next month's range.

**Parameters**

**date**: `Date`, The date to check.

**Returns**: `Boolean`, Whether the date is within next month.

**Example**:
```js
is.inNextMonth(dateObjectForNextMonth); // true
is.inNextMonth(new Date()); // false
```


### is.inNextYear(date) 

Checks if the given date is within next year's range.

**Parameters**

**date**: `Date`, The date to check.

**Returns**: `Boolean`, Whether the date is within next year.

**Example**:
```js
is.inNextYear(dateObjectForNextYear); // true
is.inNextYear(new Date()); // false
```


### is.quarterOfYear(date, quarter) 

Checks if the given date is within the given quarter. This method doesn't
support the `all` or `any` interfaces.

**Parameters**

**date**: `Date`, The date to check.

**quarter**: `Number`, The quarter to check for.

**Returns**: `Boolean`, Whether the date is within the quarter.

**Example**:
```js
is.quarterOfYear(dateObjectForSecondQuarter, 2); // true
is.quarterOfYear(dateObjectForSecondQuarter, 1); // true
```


### is.dayLightSavingTime(date) 

Checks if the given date is in daylight saving time.

TODO: Figure out a way to make it work in every timezone as now it works
only for some in the US.

**Parameters**

**date**: `Date`, The date to check.

**Returns**: `Boolean`, Whether the date is in daylight saving time.

**Example**:
```js
is.dayLightSavingTime(dateObjectOnDST); // true
is.dayLightSavingTime(dateObjectNotOnDST); // true
```



* * *










