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

// function hello() {
//     return function() {
//         console.log(`Hello World!`)
//     }
// }

// hello()();

// example 1 without higher order function
// var numbers = [1, 2, 3];

// var result = [];

// for (let i = 0; i < numbers.length; i++) {
//     result.push(numbers[i] * 2)
// }

// console.log(result)


// example 1 with higher order function
// var numbers = [1, 2, 3];

// var result = numbers.map(function(item) {
//     return item * 2;
// })

// var result = numbers.map(item => item * 2) //This is so simpler than upper higher order function.


// console.log(result)



// example 2 without higher order function
// var players = [{
//         name: "Sakib",
//         avg: 38.23
//     },
//     {
//         name: "Tamim",
//         avg: 36.74
//     },
//     {
//         name: "Mushfiq",
//         avg: 36.78
//     },
//     {
//         name: "Mahmudullah",
//         avg: 37.12
//     }
// ]
// var playersWithAvgThirtySeven = [];
// for (let i = 0; i < players.length; i++) {

//     if (players[i].avg >= 37) {
//         playersWithAvgThirtySeven.push(players[i])
//     }
// }

// console.log(playersWithAvgThirtySeven)

// example 2 with higher order function
// var players = [{
//         name: "Sakib",
//         avg: 38.23
//     },
//     {
//         name: "Tamim",
//         avg: 36.74
//     },
//     {
//         name: "Mushfiq",
//         avg: 36.78
//     },
//     {
//         name: "Mahmudullah",
//         avg: 37.12
//     }
// ]

// var playersWithAvgThirtySeven = players.filter((player) => {
//     return player.avg >= 37;
// })

// console.log(playersWithAvgThirtySeven)


// example 3 with higher order function
// const languages = ["JavaScript", "Python", "PHP", "C"];

// function mapSumit(arr, fn) {
//     const newArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         newArray.push(fn(arr[i]))
//     }
//     return newArray;
// }

// const myArray = mapSumit(languages, (language) => {
//     return language.length
// });

// console.log(myArray)


//Ending Summary 
/* 
1. jodi parameter hisebe kono function pass kori or kono function k return kore tokon sei function ta higher order function.
*/


//==================== Asynchronous javaScript callbacks, promises and  async-await<br>


// synchronous behavior
// const processOrder = (customer) => {
//     console.log(`Processing order for customer 1`);

//     // var currentTime = new Date().getTime();
//     // while (currentTime + 3000 >= new Date().getTime());

//     setTimeout(() => {
//         console.log("Hello")
//     }, 3000)

//     console.log(`Order processed for customer 1`);
// }

// console.log(`Take order for customer 1`);

// processOrder();

// console.log(`completed order for customer 1`);


// asynchronous behavior

// const takeOrder = (customer, callback) => {
//     console.log(`Take order for ${customer}`)
//     callback(customer)
// }

// const processOrder = (customer, callback) => {
//     console.log(`Processing order for ${customer}`)

//     setTimeout(() => {
//         console.log(`Cooking completed`)
//         console.log(`Order processed for ${customer}`)

//         callback(customer)
//     }, 3000)
// }

// const orderCompleted = (customer) => {
//     console.log(`completed order for ${customer}`)
// }

// takeOrder("Customer 1", (customer) => {
//     processOrder(customer, (customer) => {
//         orderCompleted(customer)
//     })
// });


// promises
// const hasMeeting = false;
// const meeting = new Promise((res, rej) => {
//     if (!hasMeeting) {
//         const meetingDetails = {
//             name: "Technical Meeting",
//             location: "Google Meet",
//             time: "10:00 PM",
//         }
//         res(meetingDetails)
//     } else {
//         rej(new Error("meeting already scheduled!"));
//     }
// })

// const addToCalender = (meetingDetails) => {
//     return new Promise((res, rej) => {
//         const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//         res(calender);
//     })
// }

// simplify the upper addToCalender function
// const addToCalender = (meetingDetails) => {
//     const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//     return Promise.resolve(calender);

// }

// meeting
//     .then(addToCalender)
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err.message)
//     });

// console.log("Hello")


// How to handle all promise result at same time
// const promise1 = Promise.resolve(`Promise 1 resolved!`);
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`Promise 2 resolved!`)
//     }, 2000)
// });

// promise1.then((res) => console.log(res))
// promise2.then((res) => console.log(res))

// Promise.all([promise1, promise2]).then((res) => {
//     console.log(res) // this resolved data show at same time also starting time same
// })

// Promise.race([promise1, promise2]).then((res) => {
//     console.log(res) // first jeta resolve hobe setar data prothome asbe r baki gulu asbe na.
// })


// async-await
// async function friendlyFunction() {
//     return `hello`;
// }

// console.log(friendlyFunction())


// const hasMeeting = true;
// const meeting = new Promise((res, rej) => {
//     if (!hasMeeting) {
//         const meetingDetails = {
//             name: "Technical Meeting",
//             location: "Google Meet",
//             time: "10:00 PM",
//         }
//         res(meetingDetails)
//     } else {
//         rej(new Error("meeting already scheduled!"));
//     }
// })

// const addToCalender = (meetingDetails) => {
//     const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//     return Promise.resolve(calender);
// }

// async function myMeeting() {
//     try {
//         const meetingDetails = await meeting;
//         const calender = await addToCalender(meetingDetails)
//         console.log(calender)
//     } catch {
//         console.log(`Something wrong happened!`)
//     }
// }

// myMeeting()
// console.log("Hello")



//Ending Summary 
/* 
1. synchronous way te puro browser block hoye thake r asynchronous way te porer line er kaj korte pare.
2. .then hocce resolve & catch hocce error. sobgulu then er error ekta catch diye pawa jay.
3. barbar then use na korar cheye async-await use kora best & human readable
*/



//==================== Recursion in javascript<br>
// 1 + 2 + 3 + ....... + n

// let total = 0;
// let n = 3;

// for (let i = 0; i <= n; i++) {
//     total += i
// }

// console.log(total)


// function sum(n) {
//     if (n === 0) {
//         return 0;
//     } else {
//         return sum(n - 1) + n;
//     }
// }

// console.log(sum(10))


// var n = 10009900000;
// console.log(n * (n + 1) / 2)

//Ending Summary 
/* 
1. Programmers should not use recursion recommend by sumit
*/


//==================== Event loops & It's function<br>
// function process(num) {
//     console.log(num)
// }

// [1, 2, 3, 4, 5].forEach((i) => {
//     process(i)
// });

//Ending Summary 
/* 
1. set time out k web api/c++ api te patiye dey, okhan theke callback queue te erpor time shesh howar por abar call stack (main thread) e jay. 
2. Promise ka web api/c++ api te patiye dey, okhan theke microtask queue te erpor time shesh howar por abar call stack (main thread) e jay. 
*/




//==================== Primitive vs Reference<br>


//Ending Summary 
/* 
1. https://www.youtube.com/watch?v=vK8fnE_-NI0&list=PLHiZ4m8vCp9Nflbo9a0pZuLscG_Xc7DKq&index=14
*/


//==================== Best practices of JavaScript - Part 1<br>

// // Variable এর meaningful নাম দিন

// // Bad Practice
// let daysll = 10;
// let ok;

// if(daysll < 30){
//     ok = true;
// }


// // Good Practice
// const MAX_ALLOWED_LOGIN_EXPIRATION_DAYS = 30;
// let daysSinceLastLogin = 10;

// const isUserLoggedIn = daysSinceLastLogin < MAX_ALLOWED_LOGIN_EXPIRATION_DAYS;


// // Variable name এ extra word avoid করুন

// // Bad Practice
// let nameValue;
// let theProduct;


// // Good Practice
// let value;
// let product;


// এমন ভাবে variable এর নাম দিন যেন purpose মনে রাখতে না হয়

// // Bad Practice
// const products = ["T-Shirt", "Shoes", "Watches", "Bags"];

// products.forEach((p)=>{
//     doSomething();
//     // What does "p" stand for?
//     doSomethingElse(p)
// })

// // Bad Practice
// const products = ["T-Shirt", "Shoes", "Watches", "Bags"];

// products.forEach((product)=>{
//     doSomething();
//     // What does "p" stand for?
//     doSomethingElse(product)
// })

// unnecessary context add করার ও প্রয়োজন নাই

//Bad Practice

// const product = {
//     productId: 1,
//     productName: "T-Shirt",
//     productPrice: 8.99,
//     productUnits: 12,
// }

// const product = {
//     id: 1,
//     name: "T-Shirt",
//     price: 8.99,
//     units: 12,
// }

// function এর নাম long and descriptive দেয়ার চেষ্টা করুন

// //Bad Practice
// function email(user){
//     //implementation
// }

// //Good Practice
// function sendEmailToUser(email){
//     //implementation
// }

// অনেক arguments avoid করুন

// // Bad Practice
// function getProducts(fields, fromDate, toDate) {
//     //implementation
// }

// // Good Practice
// function getProducts({ fields, fromDate, toDate }) {
//     //implementation
// }

// default argumets use করুন, conditionals না

// // Bad Practice
// function createShape(type){
//     const shapeType = type || "circle";
// }

// // Good Practice
// function createShape(type = "circle"){
//     //do something
// }


// parameter হিসেবে flag পাঠানোর প্রয়োজন নাই

// // Bad Practice
// function createFile(name, isPublic) {
//     if (isPublic) {
//         fs.create(`./public/${name}`);
//     } else {
//         fs.create(name)
//     }
// }

// // Good Practice

// function createFile(name) {
//     fs.create(name)
// }

// function createPublicFile(name) {
//     createFile(`./public/${name}`);
// }

// একটা function এর মধ্যে multiple কাজ না করাই ভালো।

//Bad Practice
function notifyUsers(users) {
    users.forEach((user) => {
        const userRecord = database.lookup(user);
        if (userRecord.isVerified()) {
            notify(user);
        }
    })
}

// Good
function notifyVerifiedUsers(users) {
    users.filter(isUserVerified).forEach(notify);
}


function isUserVerified(user) {
    const userRecord = database.lookup(user);
    return userRecord.isVerified();
}

//Ending Summary 
/* 
1. 
*/