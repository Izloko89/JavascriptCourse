#JavaScript Data Types

String, Number, Boolean, Array, Object.

##JavaScript Data Types

JavaScript variables can hold many **data types**: numbers, strings, arrays, objects and more:

```javascript
var length = 16;                               // Number
var lastName = "Johnson";                      // String
var cars = ["Saab", "Volvo", "BMW"];           // Array
var x = {firstName:"John", lastName:"Doe"};    // Object
```
____________________________________________________________________________________________________________________________

##The Concept of Data Types

In programming, data types is an important concept. To be able to operate on variables, it is important to know something about the type.

Without data types, a computer cannot safely solve this:

```javascript
var x = 16 + "Volvo";
```

Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?

JavaScript will treat the example above as:

```javascript
var x = "16" + "Volvo";
```

:exclamation: When adding a number and a string, JavaScript will treat the number as a string.

Example:

```javascript
var x = 16 + "Volvo";
```

```javascript
var x = "Volvo" + 16;
```

JavaScript evaluates expressions from left to right. Different sequences can produce different results:

```javascript
var x = 16 + 4 + "Volvo";
```

Result:

	20Volvo

```javascript
var x = 16 + 4 + "Volvo";
```

Result:

	Volvo164

In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".

In the second example, since the first operand is a string, all operands are treated as strings.
____________________________________________________________________________________________________________________________

##JavaScript Has Dynamic Types

JavaScript has dynamic types. This means that the same variable can be used as different types:

```javascript
var x;               // Now x is undefined
var x = 5;           // Now x is a Number
var x = "John";      // Now x is a String
```
____________________________________________________________________________________________________________________________

##JavaScript Strings

A string (or a text string) is a series of characters like "John Doe". Strings are written with quotes. You can use single or double quotes:

```javascript
var carName = "Volvo XC60";   // Using double quotes
var carName = 'Volvo XC60';   // Using single quotes
```

You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

```javascript
var answer = "It's alright";             // Single quote inside double quotes
var answer = "He is called 'Johnny'";    // Single quotes inside double quotes
var answer = 'He is called "Johnny"';    // Double quotes inside single quotes
```

You will learn more about strings later in this tutorial.
____________________________________________________________________________________________________________________________

##JavaScript Numbers

JavaScript has only one type of numbers. Numbers can be written with, or without decimals:

```javascript
var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals
```

Extra large or extra small numbers can be written with scientific (exponential) notation:

```javascript
var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123
```

You will learn more about numbers later in this tutorial.
____________________________________________________________________________________________________________________________

##JavaScript Booleans

Booleans can only have two values: true or false.

```javascript
var x = true;
var y = false;
```

Booleans are often used in conditional testing.

You will learn more about conditional testing later in this tutorial.
____________________________________________________________________________________________________________________________

##JavaScript Arrays

JavaScript arrays are written with square brackets. Array items are separated by commas.

The following code declares (creates) an array called cars, containing three items (car names):

```javascript
var cars = ["Saab", "Volvo", "BMW"];
```

Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

You will learn more about arrays later in this tutorial.
____________________________________________________________________________________________________________________________

##JavaScript Objects

JavaScript objects are written with curly braces. Object properties are written as name:value pairs, separated by commas.

```javascript
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

You will learn more about objects later in this tutorial.
____________________________________________________________________________________________________________________________

##The typeof Operator

You can use the JavaScript **typeof** operator to find the type of a JavaScript variable:

```javascript
typeof "John"                // Returns "string" 
typeof 3.14                  // Returns "number"
typeof false                 // Returns "boolean"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof {name:'John', age:34} // Returns "object"
```

:exclamation: The typeof operator returns "object" for arrays because in JavaScript arrays are objects.
____________________________________________________________________________________________________________________________

##Undefined

In JavaScript, a variable without a value, has the value **undefined**. The typeof is also **undefined**.

```javascript
var person;                  // Value is undefined, type is undefined
```

Any variable can be emptied, by setting the value to **undefined**. The type will also be **undefined**.

```javascript
person = undefined;          // Value is undefined, type is undefined
```
____________________________________________________________________________________________________________________________

##Empty Values

An empty value has nothing to do with undefined. An empty string variable has both a value and a type.

```javascript
var car = "";                // The value is "", the typeof is "string"
```
____________________________________________________________________________________________________________________________

##Null

In JavaScript null is "nothing". It is supposed to be something that doesn't exist. Unfortunately, in JavaScript, the data type of null is an object.

:exclamation: You can consider it a bug in JavaScript that typeof null is an object. It should be null.

You can empty an object by setting it to null:

```javascript
var person = null;           // Value is null, but type is still an object
```

You can also empty an object by setting it to undefined:

```javascript
var person = undefined;     // Value is undefined, type is undefined
```
____________________________________________________________________________________________________________________________

##Difference Between Undefined and Null

```javascript
typeof undefined             // undefined
typeof null                  // object
null === undefined           // false
null == undefined            // true
```