#JavaScript Variables

##JavaScript Variables

JavaScript variables are containers for storing data values. In this example, x, y, and z, are variables:

```javascript
var x = 5;
var y = 6;
var z = x + y;
```

From the example above, you can expect:

* x stores the value 5
* y stores the value 6
* z stores the value 11

____________________________________________________________________________________________________________________________

##Much Like Algebra

In this example, price1, price2, and total, are variables:

```javascript
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
```

In programming, just like in algebra, we use variables (like price1) to hold values. In programming, just like in algebra, we use variables in expressions (total = price1 + price2). From the example above, you can calculate the total to be 11.

:exclamation: JavaScript variables are containers for storing data values.
____________________________________________________________________________________________________________________________

##JavaScript Identifiers

All JavaScript **variables** must be **identified** with **unique names**. These unique names are called **identifiers**. Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

* Names can contain letters, digits, underscores, and dollar signs.
* Names must begin with a letter
* Names can also begin with $ and _ (but we will not use it in this tutorial)
* Names are case sensitive (y and Y are different variables)
* Reserved words (like JavaScript keywords) cannot be used as names

:exclamation: JavaScript identifiers are case-sensitive.
____________________________________________________________________________________________________________________________

##The Assignment Operator

In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator. This is different from algebra. The following does not make sense in algebra:

```javascript
x = x + 5
```

In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x. (It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.)

:exclamation: The "equal to" operator is written like == in JavaScript.
____________________________________________________________________________________________________________________________

##JavaScript Data Types

JavaScript variables can hold numbers like 100 and text values like "John Doe". In programming, text values are called text strings. JavaScript can handle many types of data, but for now, just think of numbers and strings.

Strings are written inside double or single quotes. Numbers are written without quotes. If you put a number in quotes, it will be treated as a text string.

```javascript
var pi = 3.14;
var person = "John Doe";
var answer = 'Yes I am!';
```
____________________________________________________________________________________________________________________________

##Declaring (Creating) JavaScript Variables

Creating a variable in JavaScript is called "declaring" a variable. You declare a JavaScript variable with the **var** keyword:

```javascript
var carName;
```

After the declaration, the variable has no value. (Technically it has the value of **undefined**). To **assign** a value to the variable, use the equal sign:

```javascript
carName = "Volvo";
```

You can also assign a value to the variable when you declare it:

```javascript
var carName = "Volvo";
```

In the example below, we create a variable called carName and assign the value "Volvo" to it. Then we "output" the value inside an HTML paragraph with id="demo":

```html
<p id="demo"></p>

<script>
var carName = "Volvo";
document.getElementById("demo").innerHTML = carName; 
</script>
```

:exclamation: It's a good programming practice to declare all variables at the beginning of a script.
____________________________________________________________________________________________________________________________

##One Statement, Many Variables

You can declare many variables in one statement. Start the statement with **var** and separate the variables by **comma**:

```javascript
var person = "John Doe", carName = "Volvo", price = 200;
```

A declaration can span multiple lines:

```javascript
var person = "John Doe",
carName = "Volvo",
price = 200;
```
____________________________________________________________________________________________________________________________

##Value = undefined

In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input. A variable declared without a value will have the value **undefined**.

The variable carName will have the value undefined after the execution of this statement:

```javascript
var carName;
```
____________________________________________________________________________________________________________________________

##Re-Declaring JavaScript Variables

If you re-declare a JavaScript variable, it will not lose its value. The variable carName will still have the value "Volvo" after the execution of these statements:

```javascript
var carName = "Volvo";
var carName;
```
____________________________________________________________________________________________________________________________

##JavaScript Arithmetic

As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +:

```javascript
var x = 5 + 2 + 3;
```

You can also add strings, but strings will be concatenated:

```javascript
var x = "John" + " " + "Doe";
```

Also try this:

```javascript
var x = "5" + 2 + 3;
```

:exclamation: If you put a number in quotes, the number will be treated as string, and concatenated.
____________________________________________________________________________________________________________________________

##Test Yourself with Exercises!
