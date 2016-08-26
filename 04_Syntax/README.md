#JavaScript Syntax

JavaScript **syntax** is the set of rules, how JavaScript programs are constructed.

##JavaScript Programs

A **computer program** is a list of "instructions" to be "executed" by the computer. In a programming language, these program instructions are called **statements**. JavaScript is a **programming language**. JavaScript statements are separated by **semicolons**.

Example:

```javascript
var x = 5;
var y = 6;
var z = x + y;
```

:exclamation: In HTML, JavaScript programs can be executed by the web browser.
____________________________________________________________________________________________________________________________

##JavaScript Statements

JavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments.
____________________________________________________________________________________________________________________________

##JavaScript Values

The JavaScript syntax defines two types of values: Fixed values and variable values. Fixed values are called **literals**. Variable values are called **variables**.
____________________________________________________________________________________________________________________________

##JavaScript Literals

The most important rules for writing fixed values are: **Numbers** are written with or without decimals:

```javascript
10.50

1001
```

**Strings** are text, written within double or single quotes:

```javascript
"John Doe"

'John Doe'
```
____________________________________________________________________________________________________________________________

##JavaScript Variables

In a programming language, **variables** are used to **store** data values. JavaScript uses the **var** keyword to **declare** variables. An **equal** sign is used to **assign** values to variables.

In this example, x is defined as a variable. Then, x is assigned (given) the value 6:

```javascript
var x;

x = 6;
```
____________________________________________________________________________________________________________________________

##JavaScript Operators

JavaScript uses an **assignment operator** ( = ) to **assign** values to variables:

```javascript
var x = 5;
var y = 6;
```

JavaScript uses **arithmetic operators** ( + - *  / ) to **compute** values:

```javascript
(5 + 6) * 10
```
____________________________________________________________________________________________________________________________

##JavaScript Expressions

An expression is a combination of values, variables, and operators, which computes to a value. The computation is called an evaluation. For example, 5 * 10 evaluates to 50:

```javascript
5 * 10
```

Expressions can also contain variable values:

```javascript
x * 10
```

The values can be of various types, such as numbers and strings. For example, "John" + " " + "Doe", evaluates to "John Doe":

```javascript
"John" + " " + "Doe"
```
____________________________________________________________________________________________________________________________

##JavaScript Keywords

JavaScript **keywords** are used to identify actions to be performed. The **var** keyword tells the browser to create a new variable:

```javascript
var x = 5 + 6;
var y = x * 10;
```
____________________________________________________________________________________________________________________________

##JavaScript Comments

Not all JavaScript statements are "executed". Code after double slashes // or between /* and */ is treated as a comment.

Comments are ignored, and will not be executed:

```javascript
var x = 5;   // I will be executed

// var x = 6;   I will NOT be executed
```
____________________________________________________________________________________________________________________________

##JavaScript Identifiers

Identifiers are names. In JavaScript, identifiers are used to name variables (and keywords, and functions, and labels). The rules for legal names are much the same in most programming languages.

In JavaScript, the first character must be a letter, an underscore (_), or a dollar sign ($). Subsequent characters may be letters, digits, underscores, or dollar signs.

:exclamation: Numbers are not allowed as the first character.

:exclamation: This way JavaScript can easily distinguish identifiers from numbers.
____________________________________________________________________________________________________________________________

##JavaScript is Case Sensitive

All JavaScript identifiers are **case sensitive**. The variables **lastName** and **lastname**, are two different variables.

```javascript
lastName = "Doe";
lastname = "Peterson";
```

JavaScript does not interpret **VAR** or **Var** as the keyword **var**.
____________________________________________________________________________________________________________________________

##JavaScript and Camel Case

Historically, programmers have used three ways of joining multiple words into one variable name:

**Hyphens:** first-name, last-name, master-card, inter-city.

**Underscore:** first_name, last_name, master_card, inter_city.

**Camel Case:** FirstName, LastName, MasterCard, InterCity.

![CamelCase](img/pic_camelcase.jpg)

In programming languages, especially in JavaScript, camel case often starts with a lowercase letter: firstName, lastName, masterCard, interCity.

:exclamation: Hyphens are not allowed in JavaScript. It is reserved for subtractions.
____________________________________________________________________________________________________________________________

##JavaScript Character Set

JavaScript uses the **Unicode** character set. Unicode covers (almost) all the characters, punctuations, and symbols in the world.