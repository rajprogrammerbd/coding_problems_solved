# **JavaScript Documentation**

* **What are the possible ways to create object in JavaScript?** There are plenty of ways we can create objects in JavaScript.

> Object constructor

```
    var object = new Object();
```

> Object literal syntax

```
    var object = {};
```

> Object create method

```
    var object = Object.create(null);
```

> Function constructor

```
    function Person() {
        this.name = "Raj";
        this.age = 26;
    }

    var object = new Person();
```

> Function with properties

```
    function Person() {
        this.name = "Raj";
    }

    Person.prototype.age = 26;

    var object = new Person();
```

> ES6 class syntax

```
    class Person {
        constructor() {
            this.name = "Raj";
            this.age = 26;
        }
    }

    var object = new Person();
```

> Singleton pattern

```
    var object = new (function() {
        this.name = "Raj";
        this.age = 26;
    })();
```

* **What is prototype chain?** Prototype chain is to build new types of object using the existing onces. It's similar to inheritance in object based language. We can get the constructor object by using ```Object.getPrototypeOf(obj)```.

* **What is the difference between call, bind, and apply method?** The difference showed down below,

> **Call:** The call() method invokes a function with a given this value and arguments provided one by one.

> **Apply:** Invokes the function with a given this value and allows you to pass in arguments as an array.

> **bind:** returns a new function, allowing you to pass any number of arguments.

* **What is JSON?** JSON is a text-based data format following JavaScript object syntax.

* **What is the purpose of the array slice method?** The ```slice()``` methods give us the flexibility of making a slice out of an array. It will start from the given first parameter index and till to the last optional parameter index, if not pass the last parameter so then it will return all the value till the end and it always returns as a new array object.

* **What is Singleton pattern?** A singleton pattern basically means, it create a single instance of a problem or code that can be shared thoughout the whole application.

* **What are the 4 pillars of OOP?**

```text
* Encapsulation
* Abstraction
* Inheritance
* Polymorphism
```

* **What is Encapsulation in OOP?** Encapsulation is a fundamental concept in object-oriented programming (OOP) that involves bundling data and the methods that operate on that data within a single unit, known as a class. This concept helps to protect the data and methods from outside interference, as it restricts direct access to them.

* **What is Abstraction in OOP?** Abstraction is about keeping the process simply by hidding unnecessary details from a user.

* **What is Inheritance in OOP?** It is a mechanism where you can to derive a class from another class for a hierarchy of classes that share a set of attributes and methods. in JavaScript, it is possible to create an object that inherits the methods and properties of another object.

* **What is Polymorphism?** Polymorphism is one of the core concepts of object-oriented programming (OOP) and describes situations in which something occurs in several different forms. In OOP, polymorphism can be implemented with inheritance. The methods of the child class will have the same name as those of the parent class. The child class method overrides the method inherited from the parent class, when called with the child class object. This kind of implementation is called method overriding.

* **What is Closures in JavaScript?** A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
