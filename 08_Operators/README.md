#JavaScript Operators

Example:

```javascript
var x = 5;         // assign the value 5 to x
var y = 2;         // assign the value 2 to y
var z = x + y;     // assign the value 7 to z (x + y)
```
____________________________________________________________________________________________________________________________

##JavaScript Arithmetic Operators

Arithmetic operators are used to perform arithmetic on numbers (literals or variables).

Operator | Description
-------- | -----------
+ | Addition
- | Subtraction
* | Multiplication
/ | Division
% | Modulus
++ | Increment
-- | Decrement

The **addition** operator (+) adds numbers:

```javascript
var x = 5;
var y = 2;
var z = x + y;
```
The multiplication operator (*) multiplies numbers.

```javascript
var x = 5;
var y = 2;
var z = x * y;
```

:exclamation: You will learn more about JavaScript operators in the next chapters.
____________________________________________________________________________________________________________________________

##JavaScript Assignment Operators

Assignment operators assign values to JavaScript variables.

Operator | Example | Same As
-------- | ------- | -------
= | x = y | x = y
+= | x += y | x = x + y
-= | x -= y | x = x - y
*= | x *= y | x = x * y
/= | x /= y | x = x / y
%= | x %= y | x = x % y

The **assignment** operator (=) assigns a value to a variable.

```javascript
var x = 10;
```

The **addition assignment** operator (+=) adds a value to a variable.

```javascript
var x = 10;
x += 5;
```
____________________________________________________________________________________________________________________________

##JavaScript String Operators

The + operator can also be used to add (concatenate) strings.

:exclamation: When used on strings, the + operator is called the concatenation operator.

```javascript
txt1 = "John";
txt2 = "Doe";
txt3 = txt1 + " " + txt2;
```

The result of **txt3** will be: 
	John Doe

The += assignment operator can also be used to add (concatenate) strings:

```javascript
txt1 = "What a very ";
txt1 += "nice day";
```

The result of **txt1** will be:
	What a very nice day

____________________________________________________________________________________________________________________________

##Adding Strings and Numbers

Adding two numbers, will return the sum, but adding a number and a string will return a string:

```javascript
x = 5 + 5;
y = "5" + 5;
z = "Hello" + 5;
```

The result of x, y and z will be:
	10
	55
	Hello5

The rule is: **If you add a number and a string, the result will be a string!**
____________________________________________________________________________________________________________________________

##JavaScript Comparison and Logical Operators


Operator | Description
-------- | -----------
== | equal to
=== | equal value and equal type
!= | not equal
!== | not equal value or not equal type
> | greater than
< | less than
>= | greater than or equal to
<= | less than or equal to
? | ternary operator

:exclamation: Comparison and logical operators are described in the **JS Comparisons** chapter.
____________________________________________________________________________________________________________________________

JavaScript Type Operators


Operator | Description
-------- | -----------
typeof | Returns the type of a variable
instanceof | Returns true if an object is an instance of an object type

:exclamation: Type operators are described in the **JS Type Conversion** chapter.