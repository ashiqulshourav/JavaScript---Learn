/* Common Structure 

//==================== name <br>


//Ending Summary
// 1.

*/ //Common Structure end



//==================== Javascript Scopes <br>
/* 
var x = 23;

// Global Scopes er dunia


function myFunc() {

    // my Func/child er dunia
    var y = 10;

    console.log(`${x} from myFunc()`)
}

myFunc();

console.log(x)


//Ending Summary
// 1. parent share everything for child but child not share for parent.
// 2. child can change parent value.
*/






//==================== var/let/const <br>
/*
var varVariable = "This is var";
console.log(varVariable);

if (true) {
    var varVariable = 'This is var again';
}

console.log(varVariable);


if (true) {
    let letVariable = "This is let";
    // let letVariable = "This is let again"; // This is totally impossible redefine for let but can change value
    letVariable = "This is let again";
    console.log(letVariable)


    // const constVariable = "Hello World!";
    // const constVariable = "Hello World! again"; // This is totally impossible redefine for const but can change value
    // constVariable = "Hello World agian"; This is also totally impossible reassign const but can change property value.


    const constVariable = {
        name: 'javascript',
        age: '25 years'
    }

    console.log(constVariable)

    constVariable.name = "JS" // this is changed const property value.

    console.log(constVariable)
}

// console.log(letVariable);

//Ending Summary
// 1. var is a function scoped, let & const is a block scoped.
// 2. var can redefine & can change value.
// 3. let can't redefine & can change value.
// 4. const can't redefine, reassign but can change property value.
*/




//==================== Closures <br>
/*
var num1 = 2; // This is global object

var sum = function() {
    var num2 = 3; // This is closure
    return function() {
        return num1 + num2;
    };
};

var myFunc = sum();

console.dir(myFunc)

function bankAccount(initialBalance) {
    var balance = initialBalance;

    return function() {
        return balance;
    }
}

var account = bankAccount(100000);

console.dir(account)

var num11 = 2;
var sum22 = function() {
    var num33 = 3;
    return num11 + num33; // There is no closure cause everything is local scope.
}

console.dir(sum22)

(function() {
    var fName = "Ashiqul"; // This is closure for fullName function. cause this whole function is blocked scopes

    var fullName = function() {
        var lastName = "Islam";
        return fName + lastName;
    };

    console.dir(fullName)
})();

function stopWatch() {
    var startTime = Date.now();

    function getDelay() {
        console.log(Date.now() - startTime);
    }

    return getDelay;
}

var timer = stopWatch();

for (var i = 0; i < 100000000; i++) {
    var a = Math.random() * 10000000;
}

timer();
console.dir(timer)

//Here var timer = stopWatch(); run first then huge operation & then timer() function run. but how js remember the start time (Ans: its only for closure)

timer = null;
timer();

//performance optimization - After timer done then if i set timer = null then js automatically clean the timer garbage



function apiFunction(url) {
    fetch(url).then((res) => {
        console.log(res)
    })
}

apiFunction('https://jsonplaceholder.typicode.com/todos/1')

//Ending Summary
// 1. Function er vitore bahirer kono variable access korte hole parameter pathiye access korte hoy
// 2. closure didn't store all global element or immediate parent element only store needed element.
// 3. Closure store variable reference not direct variable value
*/



//==================== prototype <br>

// const personMethods = {
//     eat() {
//         console.log(`Person is eating`);
//     },
//     sleep() {
//         console.log(`Person is sleeping`);
//     },
//     play() {
//         console.log(`Person is playing`);
//     }
// }

// function Person(name, age) {
//     let person = {};

//     person.name = name;
//     person.age = age;

//     person.eat = personMethods.eat;
//     person.sleep = personMethods.sleep;
//     person.play = personMethods.play;

//     return person;
// }

// const Ashiqul = Person("Ashiqul", 26);
// const Sakib = Person('Sakib', 35);


// const captain = {
//     name: "Mashrafi",
//     age: 36,
//     country: "Bangladesh",
// };

// const player = Object.create(captain);

// console.log(player.name)

//Ending Summary
// 1.



//==================== Prototype Inheritance & ES6 class <br>

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype = {
//     eat: function() {
//         console.log(`${this.name} is eating`);
//     }
// }

// const sakib = new Person("Sakib", 35);



// var f = function Person() {}
// Object.prototype.shourav = function() { // this is the master object
//     console.log('I am shourav');
// }

// var p = {};
// p.shourav();


// function Person(name, age) { // parent class
//     this.name = name;
//     this.age = age;
// }


// function Cricketer(name, age, type, country) { //sub class
//     Person.call(this);
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;
// }

// Person.prototype = {
//     eat: function() {
//         console.log(`${this.name} is eating`);
//     },
// }

// Cricketer.prototype = Object.create(Person.prototype);
// Cricketer.prototype.constructor = Cricketer;
// Cricketer.prototype.play = function() {
//     console.log(`${this.name} is playing`);
// }

// let sakib = new Cricketer('Sakib', 35, 'All rounder', "Bangladesh");

// console.log(sakib.play())

// converted upper constructor class into ES6 class

// class Person { //parent class
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         console.log(`${this.name} is eat`)
//     }
// }

// class Cricketer extends Person { //sub class
//     constructor(name, age, type, country) {
//         super(name, age);
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.country = country;
//     }

//     play() {
//         console.log(`${this.name} is playing`);
//     }
// }

// let sakib = new Cricketer('Sakib', 35, 'All rounder', "Bangladesh");


// sakib.eat()



// How to set getter(get) & setter(set) method
// class Person {
//     constructor(name, age) {
//         this.name = name; //property
//         this.age = age;
//     }

//     eat() { //method
//         console.log(`${this.name} is eating`);
//     }

//     get SetName() { //getter
//         return this.name;
//     }

//     set setName(name) { //setter
//         this.name = name;
//     }
// }

// let sakib = new Person('Sakib', 35);
// //console.log(sakib.SetName)

// sakib.setName = "Tamim";

// console.log(sakib.name)




// How to set static 
// class Person {
//     constructor(name, age) {
//         this.name = name; //property
//         this.age = age;
//     }

//     eat() { //method
//         console.log(`${this.name} is eating`);
//     }

//     static isEqualAge(cricketer1, cricketer2) {
//         return cricketer1.age === cricketer2.age;
//     }
// }

// let sakib = new Person('Sakib', 35);
// let tamim = new Person('Tamim', 35);

// console.log(Person.isEqualAge(sakib, tamim));



// How to set Polymorphism
// class Person { // parent class
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     play() {
//         console.log(`${this.name} is playing`);
//     }
// }

// class Cricketer extends Person { //sub class
//     constructor(name, age, type, country) {
//         super(name, age);
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.country = country;
//     }
//     play() {
//         super.play()
//         console.log(`${this.name} is playing cricket`);
//     }
// }

// let sakib = new Cricketer('Sakib', 35, 'All rounder', "Bangladesh");
// sakib.play();

//Ending Summary
// 1. Master object create korle seta jekono jayga theke call kora jabe.
// 2. https://www.youtube.com/watch?v=93Styj1K9fY&list=PLHiZ4m8vCp9Nflbo9a0pZuLscG_Xc7DKq&index=8&t=63s



//==================== this keyword <br>
// 1. implicit binding
// 2. explicit binding
// 3. new binding
// 4. window binding


// *** 1. Implicit binding
// var sakib = {
//     name: "Sakib",
//     age: 35,
//     printPlayerName: function() {
//         console.log(this.name);
//     }
// }

// sakib.printPlayerName();

// var printPlayerNameFunction = function(obj) {
//     obj.printPlayerName = function() {
//         console.log(this.name)
//     }
// }

// var sakib = {
//     name: 'Sakib',
//     age: 35,
// }

// var tamim = {
//     name: 'Tamim',
//     age: 34,
// }


// var Person = function(name, age) {
//     return {
//         name: name,
//         age: age,
//         printName: function() {
//             console.log(this.name)
//         },
//     }
// }

// var sakib = Person('sakib', 35);
// sakib.printName();




// var Person = function(name, age) {
//     return {
//         name: name,
//         age: age,
//         printName: () => {
//             console.log(this.name)
//         },
//         father: {
//             name: "Mr. XXX",
//             printName: function() {
//                 console.log(this.name)
//             }
//         }
//     }
// }

// var sakib = Person('sakib', 35);
// sakib.printName();

// printPlayerNameFunction(sakib);
// printPlayerNameFunction(tamim);

// sakib.printPlayerName();
// tamim.printPlayerName();


// *** 2. explicit binding
// var printName = function(a, b, c) {
//     console.log(`${this.name} is ${a}, ${b}, ${c}`)
// }
// var sakib = {
//     name: "Sakib",
//     age: 35
// }

// var v1 = "Handsome";
// var v2 = "All -rounder";
// var v3 = "Best Player";

// var v = [v1, v2, v3];

// // printName.apply(sakib, v)
// var newFunc = printName.bind(sakib, v1, v2, v3);
// newFunc();

// *** 3. New binding

// function Person(name, age) {
//     // let this = Object.create(null)
//     this.name = name;
//     this.age = age;
//     console.log(`${name} is ${age} years old`);
//     // return this
// }


// var sakib = new Person('Sakib', 35);


// *** 3. window binding

// var PrintName = function() {
//     console.log(this.name)
// }

// var sakib = {
//     name: "Sakib"
// }

//Ending Summary
// 1. function.call() // take first parameter as a object & 2nd parameter as infinite variable.
// 2. function.apply() // take first parameter as a object & 2nd parameter as a array.
// 3. function.bind() // as well as call method, but its return function reference & must be store in a variable & call it.
// 4. new binding() creating this object with this name & return it(this)
// 5. window binding() call window object


//==================== Execution context <br>

// How execute our js code

//Ending Summary



//==================== Higher Order function <br>


//Ending Summary


// Something change