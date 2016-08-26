#JavaScript Strings

JavaScript strings are used for storing and manipulating text.

##JavaScript Strings

A JavaScript string simply stores a series of characters like "John Doe".

A string can be any text inside quotes. You can use single or double quotes:

```javascript
var carname = "Volvo XC60";
var carname = 'Volvo XC60';
```

You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

```javascript
var answer = "It's alright";
var answer = "He is called 'Johnny'";
var answer = 'He is called "Johnny"';
```
____________________________________________________________________________________________________________________________

##String Length

The length of a string is found in the built in property **length**:

```javascript
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
```
____________________________________________________________________________________________________________________________

##Special Characters

Because strings must be written within quotes, JavaScript will misunderstand this string:

```javascript
var y = "We are the so-called "Vikings" from the north."
```

The string will be chopped to "We are the so-called ". The solution to avoid this problem, is to use the **\ escape character**.

The backslash escape character turns special characters into string characters:

```javascript
var x = 'It\'s alright';
var y = "We are the so-called \"Vikings\" from the north."
```

The escape character `(\)` can also be used to insert other special characters in a string.

This is the list of special characters that can be added to a text string with the backslash sign:

Code | Outputs
---- | -------
\' | single quote
\" | double quote
`\\` | backslash
\n | new line
\r | carriage return
\t | tab
\b | backspace
\f | form feed

____________________________________________________________________________________________________________________________

##Breaking Long Code Lines

For best readability, programmers often like to avoid code lines longer than 80 characters.

If a JavaScript statement does not fit on one line, the best place to break it is after an operator:

```javascript
document.getElementById("demo").innerHTML =
"Hello Dolly.";
```

You can also break up a code line **within a text string** with a single backslash:

```javascript
document.getElementById("demo").innerHTML = "Hello \
Dolly!";
```

:exclamation: The \ method is not a ECMAScript (JavaScript) standard.

:exclamation: Some browsers do not allow spaces behind the \ character.

The safest (but a little slower) way to break a long string is to use string addition:

```javascript
document.getElementById("demo").innerHTML = "Hello" + 
"Dolly!";
```

You cannot break up a code line with a backslash:

```javascript
document.getElementById("demo").innerHTML = \ 
"Hello Dolly!";
```
____________________________________________________________________________________________________________________________

##Strings Can be Objects

Normally, JavaScript strings are primitive values, created from literals: **var firstName = "John"**

But strings can also be defined as objects with the keyword new: **var firstName = new String("John")**

```javascript
var x = "John";
var y = new String("John");

// typeof x will return string
// typeof y will return object
```

:exclamation: Don't create strings as objects. It slows down execution speed.

:exclamation: The **new** keyword complicates the code. This can produce some unexpected results: 

When using the == equality operator, equal strings looks equal:

```javascript
var x = "John";             
var y = new String("John");

// (x == y) is true because x and y have equal values
```

When using the === equality operator, equal strings are not equal, because the === operator expects equality in both type and value.

```javascript
var x = "John";             
var y = new String("John");

// (x === y) is false because x and y have different types (string and object)
```

Or even worse. Objects cannot be compared:

```javascript
var x = new String("John");             
var y = new String("John");

// (x == y) is false because x and y are different objects
// (x == x) is true because both are the same object
```

:exclamation: JavaScript objects cannot be compared.
____________________________________________________________________________________________________________________________

##Test Yourself with Exercises!