#JavaScript Arithmetic

A typical thing to do with numbers is arithmetic.

##JavaScript Arithmetic Operators

Arithmetic operators perform arithmetic on numbers (literals or variables).


Operator | Description
-------- | -----------
+ | Addition
- | Subtraction
* | Multiplication
/ | Division
% | Modulus
++ | Increment
-- | Decrement

______________________________________________________________________________________________________________________________

##Arithmetic Operations

A typical arithmetic operation operates on two numbers.

The two numbers can be literals:

```javascript
var x = 100 + 50;
```

or variables:

```javascript
var x = a + b;
```

or expressions:

```javascript
var x = (100 + 50) * a;
```
______________________________________________________________________________________________________________________________

##Operators and Operands

The numbers (in an arithmetic operation) are called **operands**. The operation (to be performed between the two operands) is defined by an **operator**.


Operand | Operator | Operand
------- | -------- | -------
100 | + | 50

The **addition** operator (+) adds numbers:

```javascript
var x = 5;
var y = 2;
var z = x + y;
```

The **subtraction** operator (-) subtracts numbers.

```javascript
var x = 5;
var y = 2;
var z = x - y;
```

The **multiplication** operator (*) multiplies numbers.

```javascript
var x = 5;
var y = 2;
var z = x * y;
```

The **division** operator (/) divides numbers.

```javascript
var x = 5;
var y = 2;
var z = x / y;
```

The **modular** operator (%) returns the division remainder.

```javascript
var x = 5;
var y = 2;
var z = x % y;
```

The **increment** operator (++) increments numbers.

```javascript
var x = 5;
x++;
var z = x;
```

The decrement operator (--) decrements numbers.

```javascript
var x = 5;
x--;
var z = x;
```
______________________________________________________________________________________________________________________________

##Operator Precedence

Operator precedence describes the order in which operations are performed in an arithmetic expression.

```javascript
var x = 100 + 50 * 3;
```

Is the result of example above the same as 150 * 3, or is it the same as 100 + 150?

Is the addition or the multiplication done first?

As in traditional school mathematics, the multiplication is done first.

Multiplication (*) and division (/) have higher **precedence** than addition (+) and subtraction (-).

And (as in school mathematics) the precedence can be changed by using parentheses:

```javascript
var x = (100 + 50) * 3;
```

When using parentheses, the operations inside the parentheses are computed first.

When many operations have the same precedence (like addition and subtraction), they are computed from left to right:

```javascript
var x = 100 + 50 - 3;
```
______________________________________________________________________________________________________________________________

##JavaScript Operator Precedence Values

Value | Operator | Description | Example
----- | -------- | ----------- | -------
19 | ( ) | Expression grouping | (3 + 4)
18 | . | Member | person.name
18 | [] | Member | person["name"]
17 | () | Function call | myFunction()
17 | new | Create | new Date()
16 | ++ | Postfix Increment | i++
16 | -- | Postfix Decrement | i--
15 | ++ | Prefix Increment | ++i
15 | -- | Prefix Decrement | --i
15 | ! | Logical not | !(x==y)
15 | typeof | Type |typeof x
14 | * | Multiplication | 10 * 5
14 | / | Division | 10 / 5
14 | % | Modulo division | 10 % 5
:warning: 14 | ** | Exponentiation | 10 ** 2
13 | + | Addition | 10 + 5
13 | - | Subtraction | 10 - 5
12 | << | Shift left | x << 2
12 | >> | Shift right | x >> 2
11 | < | Less than | x < y 
11 | <= | Less than or equal | x <= y
11 | > | Greater than | x > y
11 | >= | Greater than or equal | x >= y
10 | == | Equal | x == y
10 | === | Strict equal | x === y
10 | != | Unequal | x != y
10 | !== | Strict unequal | x !== y
6 | && | And | x && y
5 | || | Or | x || y
3 | = | Assignment | x = y
3 | += | Assignment | x += y
3 | -= | Assignment | x -= y
3 | *= | Assignment | x *= y
3 | /= | Assignment | x /= y

:warning: Warning symbol indicates experimental or proposed technology (ECMASScript 2016 or ES7)

:exclamation: Expressions in parentheses are fully computed before the value is used in the rest of the expression.
______________________________________________________________________________________________________________________________

##Test Yourself with Exercises!