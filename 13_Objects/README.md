#JavaScript Objects

##Real Life Objects, Properties, and Methods

In real life, a car is an **object**.

A car has **properties** like weight and color, and **methods** like start and stop:

**OBJECT**

![car_fiat](img/car_fiat.gif)

Properties | Methods
---------- | -------
car.name = Fiat | car.start()
car.model = 500 | car.drive()
car.weight = 850kg | car.brake()
car.color = white | car.stop(

All cars have the same **properties**, but the property values differ from car to car.

All cars have the same **methods**, but the methods are performed at different times.
____________________________________________________________________________________________________________________________

##JavaScript Objects

You have already learned that JavaScript variables are containers for data values.

This code assigns a **simple value** (Fiat) to a **variable** named car:

```javascript
var car = "Fiat";
```

Objects are variables too. But objects can contain many values.

This code assigns **many values** (Fiat, 500, white) to a **variable** named car:

```javascript
var car = {type:"Fiat", model:"500", color:"white"};
```

The values are written as **name:value** pairs (name and value separated by a colon).

:exclamation: JavaScript objects are containers for named values.
____________________________________________________________________________________________________________________________

##Object Properties

The name:values pairs (in JavaScript objects) are called **properties**.

```javascript
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

Property | Property Value
-------- | --------------
firstName | John
lastName |Doe
age | 50
eyeColor | blue

____________________________________________________________________________________________________________________________

##Object Methods

Methods are **actions** that can be performed on objects.

Methods are stored in properties as **function definitions**.

Property | Property Value
-------- | --------------
firstName | John
lastName | Doe
age | 50
eyeColor | blue
fullName | function() {return this.firstName + " " + this.lastName;}

:exclamation: JavaScript objects are containers for named values called properties or methods.
____________________________________________________________________________________________________________________________

##Object Definition

You define (and create) a JavaScript object with an object literal:

```javascript
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

Spaces and line breaks are not important. An object definition can span multiple lines:

```javascript
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
```
____________________________________________________________________________________________________________________________

##Accessing Object Properties

You can access object properties in two ways:

```javascript
objectName.propertyName
```

or

```javascript
objectName["propertyName"]
```

Examples:

```javascript
person.lastName;    // Example 1

person["lastName"]; // Example 2
```
____________________________________________________________________________________________________________________________

##Accessing Object Methods

You access an object method with the following syntax:

```javascript
objectName.methodName()
```

Example:

```javascript
name = person.fullName();
```

If you access the fullName **method**, without (), it will return the **function definition**:

```javascript
name = person.fullName;
```

:exclamation: A method is actually a function definition stored as a property value.
____________________________________________________________________________________________________________________________

##Do Not Declare Strings, Numbers, and Booleans as Objects!

When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

```javascript
var x = new String();        // Declares x as a String object
var y = new Number();        // Declares y as a Number object
var z = new Boolean();       //	Declares z as a Boolean object
```

Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.

:exclamation: You will learn more about objects later in this tutorial.
____________________________________________________________________________________________________________________________

##Test Yourself with Exercises!