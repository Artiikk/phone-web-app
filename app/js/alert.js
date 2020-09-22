'use strict';


// function User(name, surname) {
//   this.name = name;
//   this.surname = surname;
// }
//
// let UserProxy = new Proxy(User, {
//   // передаст вызов new User, предварительно сообщив о нём
//   construct: function(target, argumentsList) {
//     alert(`Запуск new с аргументами: ${argumentsList}`);
//     return new target(...argumentsList); //вместо массива передает отдельный список
//   }
// });
//
// let user = new UserProxy("Ilya", "Kantor");
//
// alert( user.name ); // Ilya


// function sum(a, b) {
//   return a + b;
// }
//
// let proxy = new Proxy(sum, {
//   // передаст вызов в target, предварительно сообщив о нём
//   apply: function(target, thisArg, argumentsList) {
//     alert(`Буду вычислять сумму: ${argumentsList}`);
//     return target.apply(thisArg, argumentsList);
//   }
// });
//
// // Выведет сначала сообщение из прокси,
// // а затем уже сумму
// alert( proxy(1, 2) );


// let dictionary = {
//   'Hello': 'Привет'
// };
//
// let proxy = new Proxy(dictionary, {
//   deleteProperty(target, phrase) {
//     return true; // ничего не делаем, но возвращает true
//   }
// });
//
// // не удалит свойство
// delete proxy['Hello'];
//
// alert("Hello" in dictionary); // true
//
// // будет то же самое, что и выше
// // так как нет ловушки has, операция in сработает на исходном объекте
// alert("Hello" in proxy); // true


// //Вот так dictionary будет всегда возвращать true для любой in-проверки:
// let dictionary = {
//   'Hello': 'Привет'
// };
//
// dictionary = new Proxy(dictionary, {
//   has(target, phrase) {
//     return true;
//   }
// });
//
// alert("BlaBlaBla" in dictionary); // true


// let dictionary = {
//   'Hello': 'Привет',
//   'Bye': 'Пока'
// };
//
// dictionary = new Proxy(dictionary, {
//   get(target, phrase) {
//     if (phrase in target) {
//       return target[phrase];
//     } else {
//       console.log(`No phrase: ${phrase}`);
//       return phrase;
//     }
//   }
// })
//
// // Обращаемся к произвольным свойствам словаря!
// alert( dictionary['Hello'] ); // Привет
// alert( dictionary['Welcome'] ); // Welcome (без перевода)
//
// console.log( 'Hello' in dictionary ); // true
// console.log( 'Welcome' in dictionary ); // false, нет такого свойства


// let user = {};
//
// let proxy = new Proxy(user, {
//   get(target, prop) {
//     alert(`Чтение ${prop}`);
//     return target[prop];
//   },
//   set(target, prop, value) {
//     alert(`Запись ${prop} ${value}`);
//     target[prop] = value;
//     return true;
//   }
// });
//
// proxy.firstName = "Ilya"; // запись
//
// proxy.firstName; // чтение
//
// alert(user.firstName); // Ilya


// const test = msg => {
//   console.log(msg);
// }
//
// export default test;

// function *infiniteNumbers() {
//     var n = 1;
//     while (true) {
//         yield n++;
//     }
// }
//
// var numbers = infiniteNumbers(); // возвращает перебираемый объект
//
// console.log(numbers.next()); // { value: 1, done: false }
// console.log(numbers.next()); // { value: 2, done: false }
// console.log(numbers.next()); // { value: 3, done: false }


// let nicknames = ['di', 'boo', 'punkeye'];
// // nicknames.size = 3;
// for (let nickname of nicknames) {
//     console.log(nickname);
// }


// async function getUser(id) {
//   let responce = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   let data = await responce.json();
//
//   return data;
//
// }
//
// async function main() {
//   let user = await getUser(2);
//   console.log(user);
// }
//
// main();


// // генератор для получения и показа аватара
// // он yield'ит промисы
// function* showUserAvatar() {
//
//   let userFetch = yield fetch('/article/generator/user.json');
//   let userInfo = yield userFetch.json();
//
//   let githubFetch = yield fetch(`https://api.github.com/users/${userInfo.name}`);
//   let githubUserInfo = yield githubFetch.json();
//
//   let img = new Image();
//   img.src = githubUserInfo.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.appendChild(img);
//
//   yield new Promise(resolve => setTimeout(resolve, 3000));
//
//   img.remove();
//
//   return img.src;
// }
//
// // вспомогательная функция-чернорабочий
// // для выполнения промисов из generator
// function execute(generator, yieldValue) {
//
//   let next = generator.next(yieldValue);
//
//   if (!next.done) {
//     next.value.then(
//       result => execute(generator, result),
//       err => generator.throw(err)
//     );
//   } else {
//     // обработаем результат return из генератора
//     // обычно здесь вызов callback или что-то в этом духе
//     alert(next.value);
//   }
//
// }
//
// execute( showUserAvatar() );


// function* gen() {
//   let ask1 = yield "2 + 2?";
//
//   alert(ask1); // 4
//
//   let ask2 = yield "3 * 3?"
//
//   alert(ask2); // 9
// }
//
// let generator = gen();
//
// alert( generator.next().value ); // "2 + 2?"
//
// alert( generator.next(4).value ); // "3 * 3?"
//
// alert( generator.next(9).done ); // true


// function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) yield i;
// }
//
// function* generateAlphaNum() {
//
//   // 0..9
//   yield* generateSequence(48, 57);
//
//   // A..Z
//   yield* generateSequence(65, 90);
//
//   // a..z
//   yield* generateSequence(97, 122);
//
// }
//
// let str = '';
//
// for(let code of generateAlphaNum()) {
//   str += String.fromCharCode(code);
// }
//
// alert(str); // 0..9A..Za..z


// let chain = Promise.resolve();
//
// let results = [];
//
// // в цикле добавляем задачи в цепочку
// urls.forEach(function(url) {
//   chain = chain
//     .then(() => httpGet(url))
//     .then((result) => {
//       results.push(result);
//     });
// });
//
// // в конце — выводим результаты
// chain.then(() => {
//   alert(results);
// });


// let delay = (ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// }
//
// delay(1000)
//   .then(() => alert("Hello!"));


// // Создаётся объект promise
// let promise = new Promise((resolve, reject) => {
//
// 	setTimeout(() => {
// 		// переведёт промис в состояние fulfilled с результатом "result"
// 		resolve("result");
// 	}, 1000);
//
// });
//
// // promise.then навешивает обработчики на успешный результат или ошибку
// promise
// 	.then(
// 		result => {
// 			// первая функция-обработчик - запустится при вызове resolve
// 			alert("Fulfilled: " + result); // result - аргумент resolve
// 		},
// 		error => {
// 			// вторая функция - запустится при вызове reject
// 			alert("Rejected: " + error); // error - аргумент reject
// 		}
// 	);


// function unique(arr) {
//   return Array.from(new Set(arr));
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// alert( unique(values) ); // Hare, Krishna, :-O


// function aclean(arr) {
//   let map = new Map();
//
//   for (let word of arr) {
//     // split the word by letters, sort them and join back
//     let sorted = word.toLowerCase().split('').sort().join(''); // (*)
//     map.set(sorted, word);
//   }
//
//   return Array.from(map.values());
// }
//
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"


// let map = new Map();
//
// map.set("name", "John");
//
// let keys = Array.from(map.keys());
//
// keys.push("more");
//
// alert(keys); // name, more


// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ];
//
// let readMessages = new WeakSet();
//
// // two messages have been read
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// // readMessages has 2 elements
//
// // ...let's read the first message again!
// readMessages.add(messages[0]);
// // readMessages still has 2 unique elements
//
// // answer: was the message[0] read?
// alert("Read message 0: " + readMessages.has(messages[0])); // true
//
// messages.shift();
// // now readMessages has 1 element (technically memory may be cleaned later)


// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ];
//
// let readMap = new WeakMap();
//
// readMap.set(messages[0], new Date(2017, 1, 1));
// console.log(readMap.get(messages[0]));


////////////Array.from(obj[, mapFn, thisArg])/////////////
// let arrayLike = {
//   0: "Hello",
//   1: "World",
//   2: 1,
//   length: 3
// };
//
// let arr = Array.from(arrayLike); // (*)
// console.log(arr);
//Array.from(obj[, mapFn, thisArg]) makes a real Array of an iterable or
//array-like obj, and we can then use array methods on it. T
//he optional arguments mapFn and thisArg allow us to apply a function to each item.


// // текущие активные пользователи
// let activeUsers = [
//   {name: "Вася"},
//   {name: "Петя"},
//   {name: "Маша"}
// ];
//
// // вспомогательная информация о них,
// // которая напрямую не входит в объект юзера,
// // и потому хранится отдельно
// let weakMap = new WeakMap();
//
// weakMap.set(activeUsers[0], 1);
// weakMap.set(activeUsers[1], 2);
// weakMap.set(activeUsers[2], 3);
// weakMap.set('Katya', 4); //Будет ошибка TypeError: "Katya" is not a non-null object
//
// alert( weakMap.get(activeUsers[0]) ); // 1
//
// activeUsers.splice(0, 1); // Вася более не активный пользователь
//
// // weakMap теперь содержит только 2 элемента
//
// activeUsers.splice(0, 1); // Петя более не активный пользователь
//
// // weakMap теперь содержит только 1 элемент



// let set = new Set(["апельсины", "яблоки", "бананы"]);
//
// // то же, что: for(let value of set)
// // for (let value of set) {
// //   console.log(value);
// // }
//
// // set.forEach((value, valueAgain, set) => {
// //   alert(value); // апельсины, затем яблоки, затем бананы
// // });


// let set = new Set();
//
// let vasya = {name: "Вася"};
// let petya = {name: "Петя"};
// let dasha = {name: "Даша"};
//
// // посещения, некоторые пользователи заходят много раз
// set.add(vasya);
// set.add(petya);
// set.add(dasha);
// set.add(vasya);
// set.add(petya);
//
// // set сохраняет только уникальные значения
// alert( set.size ); // 3
//
// set.forEach( user => alert(user.name ) ); // Вася, Петя, Даша


// let recipeMap = new Map([
//   ['огурцов',   '500 гр'],
//   ['помидоров', '350 гр'],
//   ['сметаны',   '50 гр']
// ]);
//
// // цикл по ключам
// for(let fruit of recipeMap.keys()) {
//   alert(fruit); // огурцов, помидоров, сметаны
// }
//
// // цикл по значениям
// for(let amount of recipeMap.values()) {
//   alert(amount); // 500 гр, 350 гр, 50 гр
// }
//
// // цикл по записям [ключ,значение]
// for(let entry of recipeMap) { // то же что и recipeMap.entries()
//   alert(entry); // огурцов,500 гр , и т.д., массивы по 2 значения
// }


// let isAdmin = Symbol("isAdmin");
//
// let user = {
//   name: "Вася",
//   [isAdmin]: true,
//   isAdmin: false
// };
//
// alert(user[isAdmin]); // true
// alert(user.isAdmin); // false


// let range = {
//   from: 1,
//   to: 10
// }
//
// // сделаем объект range итерируемым
// range[Symbol.iterator] = function() {
//
//   let current = this.from;
//   let last = this.to;
//
//   // метод должен вернуть объект с методом next()
//   return {
//     next() {
//       if (current <= last) {
//         return {
//           done: false,
//           value: current++
//         };
//       } else {
//         return {
//           done: true
//         };
//       }
//     }
//   }
// };
//
// for (let num of range) {
//   console.log(num); // 1, затем 2, 3, 4, 5
// }
// console.log( Math.max(...range) );


// function showMenu({title="Заголовок", width:w=100, height:h=200} = {}) {
//   alert(title + ' ' + w + ' ' + h);
// }
//
// showMenu(); // Заголовок 100 200


// //////////SPREAD FOR OBJECTS//////////
// let options = {
//   title: "Меню",
//   width: 100,
//   height: 200
// };
//
// let {title, ...size} = options;
//
// console.log(size);
// size = { width: 100, height: 200} (остаток)


// var eventMixin = {
//
//   /**
//    * Подписка на событие
//    * Использование:
//    *  menu.on('select', function(item) { ... }
//    */
//   on: function(eventName, handler) {
//     if (!this._eventHandlers) this._eventHandlers = {};
//     if (!this._eventHandlers[eventName]) {
//       this._eventHandlers[eventName] = [];
//     }
//     this._eventHandlers[eventName].push(handler);
//   },
//
//   /**
//    * Прекращение подписки
//    *  menu.off('select',  handler)
//    */
//   off: function(eventName, handler) {
//     var handlers = this._eventHandlers && this._eventHandlers[eventName];
//     if (!handlers) return;
//     for(var i=0; i<handlers.length; i++) {
//       if (handlers[i] == handler) {
//         handlers.splice(i--, 1);
//       }
//     }
//   },
//
//   /**
//    * Генерация события с передачей данных
//    *  this.trigger('select', item);
//    */
//   trigger: function(eventName /*, ... */) {
//
//     if (!this._eventHandlers || !this._eventHandlers[eventName]) {
//       return; // обработчиков для события нет
//     }
//
//     // вызвать обработчики
//     var handlers = this._eventHandlers[eventName];
//     for (var i = 0; i < handlers.length; i++) {
//       handlers[i].apply(this, [].slice.call(arguments, 1));
//     }
//
//   }
// };
//
// // Класс Menu с примесью eventMixin
// function Menu() {
//   // ...
// }
//
// for(var key in eventMixin) {
//   Menu.prototype[key] = eventMixin[key];
// }
//
// // Генерирует событие select при выборе значения
// Menu.prototype.choose = function(value) {
//   this.trigger("select", value);
// }
//
// // Создадим меню
// var menu = new Menu();
//
// // При наступлении события select вызвать эту функцию
// menu.on("select", function(value) {
//   alert("Выбрано значение " + value);
// });
//
// // Запускаем выбор (событие select вызовет обработчики)
// menu.choose("123");



// function makeTimer(wait) {
//   let counter = 0;
//   setInterval(timeIt, wait);
//   function timeIt() {
//     console.log(counter++);
//   }
// }
//
// makeTimer(1000);


// // примесь
// var sayHiMixin = {
//   sayHi: function() {
//     alert("Привет " + this.name);
//   },
//   sayBye: function() {
//     alert("Пока " + this.name);
//   }
// };
//
// // использование:
// function User(name) {
//   this.name = name;
// }
//
// // передать методы примеси
// for(var key in sayHiMixin) User.prototype[key] = sayHiMixin[key];
//
// // User "умеет" sayHi
// new User("Вася").sayHi(); // Привет Вася
// new User("Вася").sayBye(); // Пока Вася


// function FormatError(message) {
//   this.name = "FormatError";
//
//   this.message = message;
//
//   if (Error.captureStackTrace) {
//     Error.captureStackTrace(this, this.constructor);
//   } else {
//     this.stack = (new Error()).stack;
//   }
//
// }
//
// FormatError.prototype = Object.create(SyntaxError.prototype);
// FormatError.prototype.constructor = FormatError;
//
// // Использование
//
// var err = new FormatError("ошибка форматирования");
//
// alert( err.message ); // ошибка форматирования
// alert( err.name ); // FormatError
// alert( err.stack ); // стек на момент генерации ошибки
//
// alert( err instanceof SyntaxError ); // true


// function Animal(name) {
//   this.name = name;
// }
//
// Animal.prototype.walk = function() {
//   alert( "ходит " + this.name );
// };
//
// function Rabbit(name) {
//   this.name = name;
// }
//
// Rabbit.prototype = Object.create(Animal.prototype);
// // Rabbit.prototype = Animal; ??????????????????????????????????
//
// Rabbit.prototype.walk = function() {
//   alert( "прыгает! и ходит: " + this.name );
// };
//
// let animal = new Animal('Krol');
// animal.walk();


// function A() {}
//
// function B() {}
//
// A.prototype = B.prototype;
//
// var b = new B();
// var a = new A();
//
// alert( a instanceof B ); // true


// Rabbit.prototype = Object.create(Animal.prototype);
//Rabbit.prototype указывает на новый объект с прототипом (Animal.prototype)
//rabbit.__proto__ = object(Animal.prototype)
//


// function Hamster() {}
//
// Hamster.prototype.food = []; // пустой "живот"
//
// Hamster.prototype.found = function(something) {
//   this.food.push(something);
// };
//
// // Создаём двух хомяков и кормим первого
// var speedy = new Hamster();
// var lazy = new Hamster();
//
// speedy.found("яблоко");
// speedy.found("орех");
//
// alert( speedy.food.length ); // 2
// alert( lazy.food.length ); // 2 (!??)
//
// // 1)Интерпретатор ищет свойство found в speedy. Но speedy – пустой объект, т.к.
// // new Hamster ничего не делает с this.
// // 2)Интерпретатор идёт по ссылке speedy.__proto__ (==Hamster.prototype) и
// //находят там метод found, запускает его.
// // 3)Значение this устанавливается в объект перед точкой, т.е. в speedy.
// // 4)Для выполнения this.food.push() нужно найти свойство this.food.
// //Оно отсутствует в speedy, но есть в speedy.__proto__.
// // 5)Значение "яблоко" добавляется в speedy.__proto__.food.
// //свойство food изменяется в прототипе, который является общим для всех объектов-хомяков.
// ////////////////////////FIX////////////////////////
// function Hamster() {
//   this.food = [];
// }
//
// Hamster.prototype.found = function(something) {
//   this.food.push(something);
// };
//
// var speedy = new Hamster();
// var lazy = new Hamster();
//
// speedy.found("яблоко");
// speedy.found("орех");
//
// alert(speedy.food.length) // 2
// alert(lazy.food.length) // 0(!)
// //Для исправления проблемы нужно дать каждому хомяку свой живот.
// //Это можно сделать, присвоив его в конструкторе.


// function CoffeeMachine(power) {
//   this._power = power;
//   this._waterAmount = 0;
// }
//
// CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;
//
// CoffeeMachine.prototype._getTimeToBoil = function() {
//   return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
// }
//
// CoffeeMachine.prototype.run = function() {
//   setTimeout(function() {
//     alert( 'Кофе готов!' );
//   }, this._getTimeToBoil());
// };
//
// CoffeeMachine.prototype.setWaterAmount = function(amount) {
//   this._waterAmount = amount;
// };
//
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.setWaterAmount(50);
// coffeeMachine.run();


// конструктор
// function Animal(name) {
//   this.name = name;
//   this.speed = 0;
// }
//
// // методы в прототипе
// Animal.prototype.run = function(speed) {
//   this.speed += speed;
//   alert( this.name + ' бежит, скорость ' + this.speed );
// };
//
// Animal.prototype.stop = function() {
//   this.speed = 0;
//   alert( this.name + ' стоит' );
// };
//
// var animal = new Animal('Зверь');
//
// alert( animal.speed ); // 0, свойство взято из прототипа
// animal.run(5); // Зверь бежит, скорость 5
// animal.run(5); // Зверь бежит, скорость 10
// animal.stop(); // Зверь стоит


// class Rabbit {
//   constructor(name) {
//     this.name = name;
//   }
//
//   sayHi() {
//     alert(this.name);
//   }
// }
//
// let rabbit = new Rabbit("Rabbit");
//
// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi();


// function Machine(power) {
//   this._power = power;
//   this._enabled = false;
//
//   var self = this;
//
//   this.enable = function() {
//     self._enabled = true;
//   };
//
//   this.disable = function() {
//     self._enabled = false;
//   };
// }
//
// function Fridge(power) {
//   // унаследовать
//   Machine.apply(this, arguments);
//
//   var food = []; // приватное свойство food
//
//   this.addFood = function() {
//     if (!this._enabled) {
//       throw new Error("Холодильник выключен");
//     }
//     if (food.length + arguments.length >= this._power / 100) {
//       throw new Error("Нельзя добавить, не хватает мощности");
//     }
//     for (var i = 0; i < arguments.length; i++) {
//       food.push(arguments[i]); // добавить всё из arguments
//     }
//
//   };
//
//   this.getFood = function() {
//     // копируем еду в новый массив, чтобы манипуляции с ним не меняли food
//     return food.slice();
//   };
//
//   this.filterFood = function(filter) {
//     return food.filter(filter);
//   }
//
//   this.removeFood = function(item) {
//     var idx = food.indexOf(item);
//     if (idx != -1) food.splice(idx, 1);
//   };
// }
//
// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood({
//   title: "котлета",
//   calories: 100
// });
// fridge.addFood({
//   title: "сок",
//   calories: 30
// });
// fridge.addFood({
//   title: "зелень",
//   calories: 10
// });
// fridge.addFood({
//   title: "варенье",
//   calories: 150
// });
//
//  let dietItems = fridge.filterFood(function(item) {
//    return item.calories < 50;
//  });
//
// fridge.removeFood("нет такой еды"); // без эффекта
// alert( fridge.getFood().length ); // 4
//
// dietItems.forEach(function(item) {
//   alert( item.title ); // сок, зелень
//   fridge.removeFood(item);
// });
//
// alert( fridge.getFood().length ); // 2


// function Machine() {
//   this._enabled = false; // вместо var enabled
//
//   this.enable = function() {
//     this._enabled = true;
//   };
//
//   this.disable = function() {
//     this._enabled = false;
//   };
// }
//
// function CoffeeMachine(power) {
//   Machine.call(this); // отнаследовать
//
//   var waterAmount = 0;
//
//   this.setWaterAmount = function(amount) {
//     waterAmount = amount;
//   };
//
//   this.run = () => {
//     if (!this._enabled) throw new Error('кофеварка выключена');
//   }
//
// }
//
//
// var coffeeMachine = new CoffeeMachine(10000);
//
// coffeeMachine.enable();
// coffeeMachine.run();


// function CoffeeMachine(power, capacity) {
//   var waterAmount = 0;
//
//   var WATER_HEAT_CAPACITY = 4200;
//
//   var timerId;
//
//   this.isRunning = function() {
//     return !!timerId;
//   };
//
//   function getTimeToBoil() {
//     return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//   }
//
//   this.setWaterAmount = function(amount) {
//     // ... проверки пропущены для краткости
//     waterAmount = amount;
//   };
//
//   this.getWaterAmount = function(amount) {
//     return waterAmount;
//   };
//
//   function onReady() {
//     alert( 'Кофе готов!' );
//   }
//
//   this.setOnReady = function(newOnReady) {
//     onReady = newOnReady;
//   };
//
//   this.run = function() {
//     timerId = setTimeout(function() {
//       timerId = null;
//       onReady();
//     }, getTimeToBoil());
//   };
//
// }
//
// var coffeeMachine = new CoffeeMachine(20000, 500);
// coffeeMachine.setWaterAmount(100);
//
// alert( 'До: ' + coffeeMachine.isRunning() ); // До: false
//
// coffeeMachine.run();
// alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true
//
// coffeeMachine.setOnReady(function() {
//   alert( "После: " + coffeeMachine.isRunning() ); // После: false
// });

// function CoffeeMachine(power, capacity) {
//   var waterAmount = 0;
//
//   var WATER_HEAT_CAPACITY = 4200;
//
//   function getTimeToBoil() {
//     return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//   }
//
//   this.setWaterAmount = function(amount) {
//     // ... проверки пропущены для краткости
//     waterAmount = amount;
//   };
//
//   this.getWaterAmount = function(amount) {
//     return waterAmount;
//   };
//
//   function onReady() {
//     alert( 'Кофе готов!' );
//   }
//
//   this.setOnReady = (newOnReady) => onReady = newOnReady;
//
//   this.run = function() {
//    setTimeout(function() {
//      onReady();
//    }, getTimeToBoil());
//  };
//  //благодаря анонимной функции, onReady() начнет искать свое положение и найдет
//  //последние изменения setOnReady(), без этого просто вызовется дефолтный onReady()
//
// }
//
// var coffeeMachine = new CoffeeMachine(20000, 500);
// coffeeMachine.setWaterAmount(150);
//
// coffeeMachine.run();
//
// coffeeMachine.setOnReady(function() {
//   var amount = coffeeMachine.getWaterAmount();
//   alert( 'Готов кофе: ' + amount + 'мл' ); // Готов кофе: 150 мл
// });



// function CoffeeMachine(power, capacity) {
//   //...
//   this.setWaterAmount = function(amount) {
//     if (amount < 0) {
//       throw new Error("Значение должно быть положительным");
//     }
//     if (amount > capacity) {
//       throw new Error("Нельзя залить воды больше, чем " + capacity);
//     }
//
//     waterAmount = amount;
//   };
//
//   this.getWaterAmount = function() {
//     return waterAmount;
//   };
//
//   this.getPowerAmount = () => power;
// }
//
// let coffeeMachine = new CoffeeMachine(1000, 200);
// console.log( coffeeMachine.getPowerAmount() );


// function User() {
//
//   let firstName, surname;
//
//   this.setFirstName = (newFirstName) => firstName = newFirstName;
//   this.setSurname = (newLastName) => surname = newLastName;
//
//   this.getFullName = () => `${firstName} ${surname}`;
// }
//
// var user = new User();
// user.setFirstName("Петя");
// user.setSurname("Иванов");
//
// alert( user.getFullName() ); // Петя Иванов


// function CoffeeMachine(power, capacity) {
//   var waterAmount = 0;
//
//   this.waterAmount = function(amount) {
//     // вызов без параметра, значит режим геттера, возвращаем свойство
//     if (!arguments.length) return waterAmount;
//
//     // иначе режим сеттера
//     if (amount < 0) {
//       throw new Error("Значение должно быть положительным");
//     }
//     if (amount > capacity) {
//       throw new Error("Нельзя залить воды больше, чем " + capacity);
//     }
//
//     waterAmount = amount;
//   };
//
// }
//
// var coffeeMachine = new CoffeeMachine(1000,500);
//
// // пример использования
// coffeeMachine.waterAmount(450);
// alert( coffeeMachine.waterAmount() ); // 450


// function CoffeeMachine(power, capacity) { // capacity - ёмкость кофеварки
//   var waterAmount = 0;
//
//   const WATER_HEAT_CAPACITY = 4200;
//
//   const getTimeToBoil = () => waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//
//   // "умная" установка свойства
//   this.setWaterAmount = (amount) => {
//     if (amount < 0) {
//       throw new Error("Значение должно быть положительным");
//     }
//     if (amount > capacity) {
//       throw new Error("Нельзя залить воды больше, чем " + capacity);
//     }
//
//     waterAmount = amount;
//   };
//
//   //Для того, чтобы дать возможность внешнему коду узнать его значение,
//   // создадим специальную функцию – «геттер» (getter method).
//   this.getWaterAmount = () => console.log(waterAmount);
//
//   const onReady = () => alert( 'Кофе готов!' );
//
//   this.run = () => setTimeout(onReady, getTimeToBoil());
// }
//
// var coffeeMachine = new CoffeeMachine(1000, 500);
// coffeeMachine.setWaterAmount(50); // упс, ошибка!
// coffeeMachine.getWaterAmount();


// function CoffeeMachine(power) {
// 	this.waterAmount = 0;
// 	const WATER_HEAT_CAPACITY = 4200;
// 	let timerId;
//
// 	const getBoilTime = () => this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//
// 	const onReady = () => alert('Кофе готово!');
//
// 	this.run = () => timerId = setTimeout(onReady, getBoilTime());
// 	//Функция setTimeout возвращает числовой идентификатор таймера
// 	// timerId, который можно использовать для отмены действия
//
// 	this.stop = () => clearTimeout(timerId);
// }
//
// var coffeeMachine = new CoffeeMachine(50000);
// coffeeMachine.waterAmount = 200;
//
// coffeeMachine.run();
// coffeeMachine.stop(); // кофе приготовлен не будет


// function CoffeeMachine(power) {
//
//   this.waterAmount = 0;
//
//   // физическая константа - удельная теплоёмкость воды для getBoilTime
//   var WATER_HEAT_CAPACITY = 4200;
//
//   let self = this; //доступ к объекту из внутреннего метода
//   // расчёт времени для кипячения
//   function getBoilTime() {
//     return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power; // ошибка!
//   }
//
//   // что делать по окончании процесса
//   function onReady() {
//     alert( 'Кофе готов!' );
//   }
//
//   this.run = function() {
//     setTimeout(onReady, getBoilTime());
//   };
//
// }
//
// var coffeeMachine = new CoffeeMachine(100000);
// coffeeMachine.waterAmount = 200;
//
// coffeeMachine.run();


// var expr, res;
//
// while (true) {
//   expr = prompt("Введите выражение?", '2-');
//   if (expr == null) break;
//
//   try {
//     res = eval(expr);
//     if (isNaN(res)) {
//       throw new Error("Результат неопределён");
//     }
//
//     break;
//   } catch (e) {
//     alert( "Ошибка: " + e.message + ", повторите ввод" );
//   }
// }
//
// alert( res );


// var data = '{ "name": "Вася", "age": 30 }'; // данные корректны
//
// try {
//
//   var user = JSON.parse(data);
//
//   if (!user.name) {
//     throw new SyntaxError("Ошибка в данных");
//   }
//
//   blabla(); // произошла непредусмотренная ошибка
//
//   alert( user.name );
//
// } catch (e) {
//
//   if (e.name == "SyntaxError") {
//     alert( "Извините, в данных ошибка" );
//   } else {
//     throw e;
//   }
//
// }


// function throttle(func, ms) {
//
//   var isThrottled = false,
//     savedArgs,
//     savedThis;
//
//   return function wrapper() {
//
//     if (isThrottled) { // (2)
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     }
//
//     func.apply(this, arguments); // (1)
//
//     isThrottled = true;
//
//     setTimeout(function() {
//       isThrottled = false; // (3)
//       if (savedArgs) {
//         wrapper.apply(savedThis, savedArgs);
//         savedArgs = savedThis = null;
//       }
//     }, ms);
//   }
// }
//
//
// var f = function(a) {
//   console.log(a)
// };
//
// // затормозить функцию до одного раза в 1000 мс
// var f1000 = throttle(f, 1000);
//
// f1000(1); // выведет 1
// f1000(2); // (тормозим, не прошло 1000 мс)
// f1000(3); // (тормозим, не прошло 1000 мс)
// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется


// function debounce(f, ms) {
//   let timer = null;
//
//   return function (...args) {
//     const onComplete = () => {
//       f.apply(this, args);
//       timer = null;
//     }
//
//     if (timer) {
//       clearTimeout(timer);
//     }
//
//     timer = setTimeout(onComplete, ms);
//   };
// }
//
// function f(x) { alert(x) }
// f = debounce(f, 1000);
//
// f(1); // вызов отложен на 1000 мс
// f(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс
//
// // через 1 секунду будет выполнен вызов f(1)
//
// setTimeout( function() { f(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
// setTimeout( function() { f(4) }, 1200); // игнорируем вызов (3)
// через 2200 мс от начала выполнения будет выполнен вызов f(4)


// function delay(f, ms) {
//   return function() {
//     setTimeout(() => {
//       return f.apply(this, arguments);
//     }, ms);
//   }
// }
//
// function f(x) {
//   alert( x );
// }
//
// var f1000 = delay(f, 1000);
// var f1500 = delay(f, 1500);
//
// f1000("тест"); // выведет "тест" через 1000 миллисекунд
// f1500("тест2"); // выведет "тест2" через 1500 миллисекунд


// function printNumbersInterval() {
//   var i = 1;
//   setTimeout(function iterator() {
//     console.log(i);
//     if (i < 20) setTimeout(iterator, 100);
//     i++;
//   }, 100);
// }
//
// printNumbersInterval();


// function printNumbersInterval() {
//   var i = 1;
//   var timerId = setInterval(function() {
//     console.log(i);
//     if (i == 20) clearInterval(timerId);
//     i++;
//   }, 100);
// }
// printNumbersInterval();


// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 	}
//
// 	walk() {
// 		alert("I walk: " + this.name);
//
// 	}
// }
//
// class Rabbit extends Animal {
// 	walk() {
// 		super.walk();
// 		alert("...and jump!");
//
// 	}
// }
//
// new Rabbit("Вася").walk();
//
// console.log(Rabbit.prototype.__proto__ == Animal.prototype);
//__proto__ свойство, не найденное в одном объекте, автоматически ищется в другом.
//в prototype записываются методы классов
//prototype у Rabbit ссылается на Animal prototype
//при создании объекта через 'new' установи __proto__ Rabbit.prototype на Animal.prototype

//Чтобы новым объектам автоматически ставить прототип, конструктору ставится свойство prototype.
//При создании объекта через new, в его прототип __proto__ записывается ссылка из prototype функции-конструктора.



//константа в классе
// class Menu {
//   static get elemClass() {
//     return "menu"
//   }
// }
//
// alert( Menu.elemClass ); // menu


// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//
//   // геттер
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//
//   // сеттер
//   set fullName(newValue) {
//     [this.firstName, this.lastName] = newValue.split(' ');
//   }
//
//   // [rand]() {
//   //   alert("PASSED!");
//   // }
//
//   // вычисляемое название метода
//   ["test".toUpperCase()]() {
//     alert("PASSED!");
//   }
// };
//
// let user = new User("Вася", "Пупков");
// alert( user.fullName ); // Вася Пупков
// user.fullName = "Иван Петров";
// alert( user.fullName ); // Иван Петров
// user.TEST(); // PASSED!


// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     alert(this.name);
//   }
// }
//
// let allModels = {};
//
// function createModel(Model, ...args) {
//   let model = new Model(...args);
//
//   model._id = Math.random().toString(36).slice(2);
//   allModels[model._id] = model;
//
//   return model;
// }
//
//
//
// let user = createModel(User, "Вася");
//
// user.sayHi(); // Вася
//
// alert( allModels[user._id].name );



// let animal = {
//   walk() {
//     alert("I'm walking");
//   }
// };
// let rabbit = {
//   __proto__: animal,
//   walk() {    //При обращении через super используется [[HomeObject]] текущего метода,
//               //и от него берётся __proto__. Поэтому super работает только внутри методов.
//     alert(super.walk); // walk() { … }
//     super.walk(); // I'm walking
//   }
// };
//
// rabbit.walk();



// let messages = {
//   "Hello, {0}!": "Привет, {0}!"
// };
//
// function i18n(strings, ...values) {
//   // По форме строки получим шаблон для поиска в messages
//   // На месте каждого из значений будет его номер: {0}, {1}, …
//   let pattern = "";
//   for(let i=0; i<values.length; i++) {
//     pattern += strings[i] + '{' + i + '}';
//   }
//   pattern += strings[strings.length-1];
//   // Теперь pattern = "Hello, {0}!"
//
//   let translated = messages[pattern]; // "Привет, {0}!"
//
//   // Заменит в "Привет, {0}" цифры вида {num} на values[num]
//   return translated.replace(/\{(\d)\}/g, (s, num) => values[num]);
// }
//
// // Пример использования
// let name = "Вася";
//
// // Перевести строку
// alert( i18n`Hello, ${name}!` ); // Привет, Вася!


// function defer(f, ms) {
//   return function() {
//     setTimeout(() => f.apply(this, arguments), ms)
//     //стрелка берет arguments из внешней функции
//вызов функции должен как-то "добраться" до функции внутри setTimeout
//   }
// }
//
// function sayHi(who) {
//   alert('Привет, ' + who);
// }
//
// let sayHiDeferred = defer(sayHi, 2000);
// sayHiDeferred("Вася"); // Привет, Вася через 2 секунды


// let group = {
//   title: "Наш курс",
//   students: ["Вася", "Петя", "Даша"],
//
//   showList: function() {
//     this.students.forEach(
//       student => alert(this.title + ': ' + student)
//     //стрелка берет this из внешнего окружения
//     )
//   }
// }
//
// group.showList();
// // Наш курс: Вася
// // Наш курс: Петя
// // Наш курс: Дашаа


// Функции-стрелки очень удобны в качестве коллбеков, например:
// let arr = [5, 8, 3];
//
// let sorted = arr.sort( (a,b) => a - b );
//
// alert(sorted); // 3, 5, 8


// let getTime = () => {
//   let date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   return hours + ':' + minutes;
// };
//
// alert( getTime() ); // текущее время
// //Заметим, что как только тело функции оборачивается в {…}, то её результат уже
// //не возвращается автоматически. Такая функция должна делать явный return, как
// //в примере выше, если конечно хочет что-либо возвратить.


// let sum = (a,b) => a + b;
//
// // аналог с function
// // let sum = function(a, b) { return a + b; };
//
// alert( sum(1, 2) ); // 3
//
// // вызов getTime() будет возвращать текущее время
// let getTime = () => new Date().getHours() + ':' + new Date().getMinutes();
//
// alert( getTime() ); // текущее время


// function sum({ a = 1, b = 1, c = 1 } = { a: 1, b: 0, c: 1 }) {
//   console.log(a + b + c);
// }
//
// sum(); //вызов без аргументов вызовет второй объект (дефолтный)
// sum({});
// sum({ a: 1 });
// sum({ b: 1 });
// sum({ c: 1 });
// sum({ a: 1, c: 1 });
// sum({ a: 1, b: 1, c: 1 });


// const obj = {
//   nestedObj: {
//     key: 'value',
//     keys: [1, 2, 3],
//     anotherArray: [4, 5, /* here default value 6 */],
//     obj: {
//       dude: 'lorem',
//       value: [7,8,9] // save as array
//     },
//     // default value for the height = 100, width = 200, keys = [1, 2, 3]
//   },
//   arr: [1,2,3],
//   dude: [
//     [1],
//     [2],
//     [3]
//   ],
//   func: function() {
//     alert(2);
//   }
// }
//
// let {
//   nestedObj: {
//     key,
//     keys: [key1, key2, key3],
//     anotherArray: [arr1, arr2, arr3 = 6],
//     obj: {
//       dude,
//       value,
//     },
//     height = 100, width = 200,
//   },
//   arr: [arrr1, arrr2, arrr3],
//   dude: [dude1, dude2, dude3],
//   func,
// } = obj;
//
// alert(arr3);



// let options = {
//   title: "Меню",
//   width: 100,
//   height: 200
// };
//
// let {title, width, height} = options;
//
// //let title = options.title;
// //let width = options.width;
// //let height = options.height;
//
// alert(title);  // Меню
// alert(width);  // 100
// alert(height); // 200


// var head = {
//   glasses: 1
// };
//
// var table = {
//   pen: 3,
//   __proto__: head
// };
//
// var bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table
// };
//
// var pockets = {
//   money: 2000,
//   __proto__: bed
// };
//
// console.log(pockets.pen);


// var leader = {
//   name: "Василий Иванович",
//   age: 35
// };
//
// var str = JSON.stringify(leader);
// console.log(str);
//
// leader = JSON.parse(str);
// console.log(leader);


// var user = {
//   name: "Вася",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true
//   }
// };
//
// var str = JSON.stringify(user, "", 4);
//
// alert( str );
/* Результат -- красиво сериализованный объект:
{
    "name": "Вася",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/


// дата в строке - в формате UTC
// var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';
//
// var event = JSON.parse(str, (key, value) => {
//   if (key == 'date') return new Date(value);
//   return value;
// });
//
// alert( event.date.getDate() ); // теперь сработает!

//Дело в том, что значением event.date является строка, а отнюдь не объект Date.
//Откуда методу JSON.parse знать, что нужно превратить строку именно в дату?
//Для интеллектуального восстановления из строки у JSON.parse(str, reviver) есть
// второй параметр reviver, который является функцией function(key, value).
//Если она указана, то в процессе чтения объекта из строки JSON.parse передаёт
//ей по очереди все создаваемые пары ключ-значение и может возвратить либо преобразованное
// значение, либо undefined, если его нужно пропустить.


// function formatDate(date) {
//   var type = {}.toString.call(date).slice(8, -1);
//   var result;
//   switch (type) {
//     case "String":
//       result = new Date(date);
//       break;
//     case "Number":
//       result = new Date(date * 1000); // считаем в миллисекундах
//       break;
//     case "Array":
//       result = new Date(date[0], date[1], date[2]);
//       break;
//     default:
//       result = date;
//   }
//   return result.toLocaleString("ru", {
//     day: '2-digit',
//     month: '2-digit',
//     year: '2-digit'
//   });
// }
//
// console.log( formatDate('2011-10-02') ); // 02.10.11
// console.log( formatDate(1234567890) ); // 14.02.09 //принимаем в секундах
// console.log( formatDate([2014, 0, 1]) ); // 01.01.14
// console.log( formatDate(new Date(2014, 0, 1)) ); // 01.01.14


// function sayHi(who) {
//
//   if (Array.isArray(who)) {
//     who.forEach(sayHi);
//   } else {
//     alert( 'Привет, ' + who );
//   }
// }
//
// // Вызов с примитивным аргументом
// sayHi("Вася"); // Привет, Вася
//
// // Вызов с массивом
// sayHi(["Саша", "Петя"]); // Привет, Саша... Петя
//
// // Вызов с вложенными массивами - тоже работает!
// sayHi(["Саша", "Петя", ["Маша", "Юля"]]); // Привет Саша..Петя..Маша..Юля


// function getClass(obj) {
//   return {}.toString.call(obj).slice(8, -1);
// }
//
// alert( getClass(new Date) ); // Date
// alert( getClass([1, 2, 3]) ); // Array


// var toString = {}.toString;
//
// var arr = [1, 2];
// alert( toString.call(arr) ); // [object Array]
//
// var date = new Date;
// alert( toString.call(date) ); // [object Date]
//
// var user = { name: "Вася" };
// alert( toString.call(user) ); // [object Object]


// function f(x) {
//   return Math.random()*x;
// }
//
// function makeCaching(f) {
//   var cache = {};
//
//   return function(x) {
//     if (!(x in cache)) {
//       cache[x] = f.call(this, x);
//     }
//     return cache[x];
//   };
//
// }
//
// f = makeCaching(f);
//
// var a = f(1);
// var b = f(1);
// alert( a == b ); // true (значение закешировано)
//
// b = f(2);
// alert( a == b ); // false, другой аргумент => другое значение


// function work(a, b) {
//   return a + b;
// }
//
// function makeLogging(f, log) {
//
//   return function wrapper() {
//     log.push([].slice.call(arguments));
//     f.apply(this, arguments);
//   }
// }
//
// var log = [];
// work = makeLogging(work, log);
//
// work(1, 2); // 3
// work(4, 5); // 9
//
// for (var i = 0; i < log.length; i++) {
//   alert( 'Лог: ' + log[i] ); // "Лог: 1,2", "Лог: 4,5"
// }


//Декоратор для проверки типа
// вспомогательная функция для проверки на число
// function checkNumber(value) {
//   return typeof value == 'number';
// }
//
// // декоратор, проверяющий типы для f
// // второй аргумент checks - массив с функциями для проверки
// function typeCheck(f, checks) {
//   return function() {
//     for (var i = 0; i < arguments.length; i++) {
//       if (!checks[i](arguments[i])) {
//         alert( "Некорректный тип аргумента: '" + arguments[i] + "', аргумент должен содержать только цифры." );
//         return;
//       }
//     }
//     return f.apply(this, arguments);
//   }
// }
//
// function sum(a, b) {
//   return a + b;
// }
//
// // обернём декоратор для проверки
// sum = typeCheck(sum, [checkNumber, checkNumber]); // оба аргумента - числа
//
// // пользуемся функцией как обычно
// alert( sum(1, 2) ); // 3, все хорошо
//
// // а вот так - будет ошибка
// sum(true, null); // некорректный аргумент номер 0
// sum(1, ["array", "in", "sum?!?"]); // некорректный аргумент номер 1


// var timers = {};
//
// // прибавит время выполнения f к таймеру timers[timer]
// function timingDecorator(fib, timer) {
//   return function() {
//     var start = performance.now();
//
//     var result = fib.apply(this, arguments); // (*)
//
//     //Обратим внимание на строку (*) внутри декоратора, которая и осуществляет передачу вызова:
//     // Этот приём называется «форвардинг вызова» (от англ. forwarding):
//     // текущий контекст и аргументы через apply передаются в функцию f,
//     // так что изнутри f всё выглядит так, как была вызвана она напрямую, а не декоратор.
//
//     if (!timers[timer]) timers[timer] = 0;
//     timers[timer] += performance.now() - start;
//
//     return result;
//   }
// }
//
// // функция может быть произвольной, например такой:
// var fibonacci = function f(n) {
//   return (n > 2) ? f(n - 1) + f(n - 2) : 1;
// }
//
// // использование: завернём fibonacci в декоратор
// fibonacci = timingDecorator(fibonacci, "fibo");
//
// // неоднократные вызовы...
// alert( fibonacci(10) ); // 55
// alert( fibonacci(20) ); // 6765
//
// // в любой момент можно получить общее количество времени на вызовы
// alert( timers.fibo + 'мс' );


// var user = {
//   name: 'Василий',
//
//   sayHi: function() {
//     alert( this.name );
//   }
// };
//
// var admin = user;
// // user = null;
// // delete user; //удаляет свойства объекта
//
// admin.sayHi();
// // при обнулении user все равно будет вывод
// // потому что на объект осталась ссылка "adminPointer"


//ask получает только функцию, без объекта-контекста (без bind)
//Используем bind, чтобы передать в ask функцию с уже привязанным контекстом
// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');
//   if (result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }
//
// var user = {
//   login: 'Василий',
//   password: '12345',
//
//   // метод для вызова из ask
//   loginDone: function(result) {
//     alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
//   },
//
//   checkPassword: function() {
//     ask("Ваш пароль?", this.password, this.loginDone.bind(this, true), this.loginDone.bind(this, false));
//   }
// };
//
// var vasya = user;
// user = null;
// vasya.checkPassword();





// //логин через замыкание
// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');
//   if (result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }
//
// var user = {
//   login: 'Василий',
//   password: '12345',
//
//   // метод для вызова из ask
//   loginDone: function(result) {
//     alert( this.login + (result ? ' вошёл на сайт' : ' ошибка входа') );
//   },
//
//   checkPassword: function() {
//     var self = this;
//     ask("Ваш пароль?", this.password,
//       function() {
//         self.loginDone(true);
//       },
//       function() {
//         self.loginDone(false);
//       }
//     );
//   }
// };
//
// var vasya = user;
// user = null;
// vasya.checkPassword();


// function sum(a, b) {
//   if (b) {
//     return a * b;
//   } else {
//       return function(b) {
//        return a * b;
//     }
//   }
// }
//
// console.log(sum(2)(3));
// console.log(sum(2, 3));


// function mul(a, b) {
//   return a * b;
// };
//
// // function () { //(*)
// //     return mul.apply(null, 2); //первым аргументом передаем 2;
// // }
//
// // double умножает только на два (*)
// var double = mul.bind(null, 2); // контекст фиксируем null, он не используется
//
// alert( double(3) ); // = mul(2, 3) = 6
// alert( double(4) ); // = mul(2, 4) = 8
// alert( double(5) ); // = mul(2, 5) = 10


// var user = {
//   firstName: "Вася",
//   sayHi: function() {
//     alert( this.firstName );
//   }
// };
//
// function binding() { // (*)
//   return user.sayHi.apply(user, arguments);
// };
//
// // setTimeout( bind(user.sayHi, user), 1000 );
// setTimeout(binding, 1000);
// //setTimeout(user.sayHi.bind(user), 1000); // аналог через встроенный метод, до вызова значение --> (*)
//bind не вызывает функцию. Он только возвращает «обёртку»,
//которую мы можем вызвать позже, и которая передаст вызов в исходную функцию, с привязанным контекстом.


// function sum() {
//   return [].reduce.call(arguments, function(a, b) {
//     return a + b;
//   });
// }
//
// function mul() {
//   return [].reduce.call(arguments, function(a, b) {
//     return a * b;
//   });
// }
//
// function applyAll(func) {
//     return func.apply(this, [].slice.call(arguments, 1));
// }
//
// alert( applyAll(sum, 1, 2, 3) ); // 6  //func выполняется в контексте sum с аргументами [].slice.call(arguments, 1);
// alert( applyAll(mul, 2, 3, 4) ); // 24
// alert( applyAll(Math.max, 2, -2, 3) ); // 3
// alert( applyAll(Math.min, 2, -2, 3) ); // -2


// function sumArgs() {
//   var args = [].slice.call(arguments);
//
//   return args.reduce(function(a, b) {
//     return a + b;
//   });
// }
//
// alert( sumArgs(1, 2, 3) ); // 6 (=1+2+3)

// function sumArgs() { //копируем метод из массива (просто вернем код функции reduce(внутренний))
//   // запустим reduce из массива напрямую ---> [].reduce => reduce( { Native code } )
//   return [].reduce.call(arguments, function(a, b) { //пиздим reduce у массива и вызываем в контексте arguments = [4,5,6];
//     return a + b;
//   });
// }
//
// alert( sumArgs(4, 5, 6) ); // 15


// // делаем из arguments полноценный массив!!!
// function printArgs() {
//   // вызов arr.slice() скопирует все элементы из this в новый массив
//   var args = [].slice.call(arguments);
//   alert( args.join(', ') ); // args - полноценный массив из аргументов
// }
//
// printArgs('Привет', 'мой', 'мир'); // Привет, мой, мир


// function printArgs() {
//   var join = [].join; // скопируем ссылку на функцию в переменную
//
//   // вызовем join с this=arguments,
//   // этот вызов эквивалентен arguments.join(':') из примера выше
//   var argStr = join.call(arguments, ':');
//
//   alert( argStr ); // сработает и выведет 1:2:3
// }
//
// printArgs(1, 2, 3);


//копируем метод join у массива
// function printArgs() {
//   arguments.join = [].join; // одолжили метод (1)
//
//   var argStr = arguments.join(':'); // (2)
//
//   alert( argStr ); // сработает и выведет 1:2:3
// }
//
// printArgs(1, 2, 3);


//Подсчёт общего количества созданных объектов.
//Запоминание даты последнего созданного объекта.
// function Article() {
//   this.created = new Date(); //this - это новый объект при конструировании через new Article();
//
//   Article.count++;
//   Article.last = this.created;
//   //Создаем статическое свойство. Это свойство не передается в новый объект,
//   //созданный через наш конструктор. Оно фиксируется в самой функции для запоминания даты нового объекта.
//   //Смысл в том, что статические методы не участвуют в формировании нового объекта через конструктор, а
//   //применяются для всех, типизированных через конструктор объектов.
//
//   //Мы просто переопределяем свойство "this.created" в "this.last".
//   //Оно передается в новый объект, но использовать, как статический метод мы его не можем.
// }
//
// Article.count = 0;
//
// Article.showStats = function() {
//   alert( 'Всего: ' + this.count + ', Последняя: ' + this.last );
// };
//
// new Article();
// new Article();
//
// Article.showStats(); // Всего: 2, Последняя: (дата)
//
// new Article();
//
// Article.showStats(); // Всего: 3, Последняя: (дата)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//свойство count относится к самой функции-конструктору Article, т.е фактически является свойством Article,
//а вот свойство created относится к какому-либо объекту, созданному с помощью new Article().
//Например после выполнения кода

//var someArticle = new Article();

//в someArticle будет свойство created, а в самой функции Article будет свойство count(функции это разновидность объектов(но не наоборот)).

//То чему равен this зависит от того где он используется

//this.created используется в коде функции-конструктора Article, поэтому this в нём - это ссылка на создаваемый с помощью этого конструктора объект.
//А если тут же использовать this.count, то функция будет искать это свойство в создаваемом объекте, что бессмысленно.
//А вот в коде метода Article.showStats() this является ссылкой на сам Article;
//this.count этот код найдёт, а вот this.created - нет, ведь в Article нет свойства created.

//Если подытожить, то данный код не работает, т.к. count и created являются свойствами разных объектов
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function User(userData) {
//   if (userData) { // если указаны данные -- одна ветка if
//     this.name = userData.name;
//     this.age = userData.age;
//   } else { // если не указаны -- другая
//     this.name = 'Аноним';
//   }
//
//   this.sayHi = function() {
//     alert(this.name)
//   };
//   // ...
// }
//
// // Использование
//
// var guest = new User();
// guest.sayHi(); // Аноним
//
// var knownUser = new User({
//   name: 'Вася',
//   age: 25
// });
// knownUser.sayHi(); // Вася


// //"Фабричный статический метод"
// //Так называется статический метод, который служит для создания новых объектов (поэтому и называется «фабричным»).
// function User() {
//   this.sayHi = function() {
//     alert(this.name)
//   };
// }
//
// User.createAnonymous = function() {
//   var user = new User;
//   user.name = 'Аноним';
//   return user;
// }
//
// User.createFromData = function(userData) {
//   var user = new User;
//   user.name = userData.name;
//   user.age = userData.age;
//   return user;
// }
//
// // Использование
//
// var guest = User.createAnonymous();
// guest.sayHi(); // Аноним
//
// var knownUser = User.createFromData({
//   name: 'Вася',
//   age: 25
// });
// knownUser.sayHi(); // Вася


// //поиск самого позднего журнала из массива
// function Journal(date) {
//   this.date = date;
//
//   this.formatDate = function(date) {
//     return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
//   };
//
//   this.getTitle = function() {
//     return "Выпуск от " + this.formatDate(this.date);
//   };
//
// }
//
// Journal.compare = function(journalA, journalB) {
//   return journalA.date - journalB.date;
// };
//
// // использование:
// var journals = [
//   new Journal(new Date(2013, 1, 1)),
//   new Journal(new Date(2012, 1, 1)),
//   new Journal(new Date(2011, 0, 1)),
//   new Journal(new Date(2009, 0, 1)),
//   new Journal(new Date(2018, 0, 1)),
//   new Journal(new Date(2014, 0, 1))
// ];
//
//
// function findMax(journals) {
//   var max = 0;
//   for (var i = 0; i < journals.length; i++) {
//     // используем статический метод
//     if (Journal.compare(journals[i], journals[max]) > 0) max = i;
//   }
//   return journals[max];
// }
//
// alert( findMin(journals).getTitle() );


// function User(fullName) {
//   this.fullName = fullName;
//
//   Object.defineProperties(this, {
//     firstName: {
//
//       get: function() {
//         return this.fullName.split(' ')[0];
//       },
//
//       set: function(newFirstName) {
//         this.fullName = newFirstName + ' ' + this.lastName;
//       }
//
//     },
//
//     lastName: {
//
//       get: function() {
//         return this.fullName.split(' ')[1];
//       },
//
//       set: function(newLastName) {
//         this.fullName = this.firstName + ' ' + newLastName;
//       }
//
//     }
//
//   });
// }
//
// var vasya = new User("Василий Попкин");
//
// // чтение firstName/lastName
// alert( vasya.firstName ); // Василий
// alert( vasya.lastName ); // Попкин
//
// // запись в lastName
// vasya.lastName = 'Сидоров';
//
// alert( vasya.fullName ); // Василий Сидоров


// function Calculator( str ) {
// // Создаем объект в локальной области видимости
// // Его можно использовать в функции, но от внешнего доступа он скрыт
//  var methods = {
//    '+': function( a, b ) {
// // В свойстве объекта - метод, т.е, функция. Имя метода - оператор ( пока только + и - )
// // '+' и '-' - обычные названия метода, такие же, как, например name
//      return a + b;
//    },
//    '-': function ( a, b ) {
//      return a - b;
//    }
//  };
//  this.calculate = function( str ) {
// // Здесь - метод через this, он будет выходить в глобальную область
//    var split = str.split( ' ' );
//    // Функция использует строку "2 ** 3" для преобразования в массив: split = [ '2', '**', '3' ]
//    var a = +split[0];
// // Первый элемент массива. Знак плюс - преобразование к числу
//    var op = split[1];
// // Второй элемент без преобразования к числу. Как есть: '**'
//    var b = +split[2];
// // Аналогично первому.
// // Теперь a = 2, op = '**', b = 3
//
//    if ( !methods[op] || isNaN( a ) || isNaN( b ) ) {
// // Проверка на ошибки
// // !methods[op] - если второй элемент отсутствует
// // или первый или третий проходят проверку на NaN c результатом true...
//      return NaN;
// // вернуть NaN, если условие выше выполняется
//    }
//
//    return methods[op]( a, b );
//    // Возвращаем метод methods[op]. В нашем случае это methods['**']
//    // При обращении к нему, он запускает функцию function(2, 3) {
//    // return Math.pow(2, 3);
//    //});
//    // Фактически, мы обращаемся к методу объекта methods['**'],
//    // а имя метода - это второй элемент (split[1]) массива split.
//
// // Означает возврат метода нашего локального объекта с именем '+' или '-'
// // и аргументами a и b
//  };
//  // Создаем метод в контексте того объекта, в котором он будет вызван
//  this.addMethod = function( name, func ) {
// // Здесь мы добавляем метод,
// // Аргумент name добавляется, как свойство метода methods и присваивается в него функция func (второй аргумент)
//    methods[name] = func;
//    // в качестве аргумента name мы добавили новый оператор "**" и
//    // указали функцию, которую нужно с ним использовать.
// // теперь все аналогично методам '+' и '-', т.е, описание нового метода
// // сюда можно будет добавить свой оператор и функцию, описывающую, что делать с этим оператором
//  };
//
// }
//
// var calc = new Calculator;
//
// calc.addMethod("*", function(a, b) {
//   return a * b;
// });
// calc.addMethod("/", function(a, b) {
//   return a / b;
// });
// calc.addMethod("**", function(a, b) {
//   return Math.pow(a, b);
// });
//
// var result = calc.calculate("2 ** 3");
// alert( result ); // 8


// function Accumulator(startingValue) {
//
//   this.value = startingValue;
//
//   this.read = function() {
//     this.value += +prompt('Введите число для добавления: ', 0);
//   }
//
// }
//
// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator.value ); // выведет текущее значение


// function Calculator() {
//
//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
//
//   this.sum = function() {
//     return this.a + this.b;
//   }
//
//   this.mul = function() {
//     return this.a * this.b;
//   }
//
// }
//
//
// var calculator = new Calculator();
// calculator.read();
//
// alert( "Сумма=" + calculator.sum() );
// alert( "Произведение=" + calculator.mul() );


// function Animal(name) {
//   this.name = name;
//   this.canWalk = true;
//
//   this.HiTelling = function() {
//     alert("Меня зовут: " + this.name);
//   }
// }
//
// var animal = new Animal("ёжик");
// ///////////////////////////////////////
// // function Animal(name) {
// //   this = { // <-- создается пустой объект this и наполняется свойствами и методами
// //     name: 'ёжик',
// //     canWalk: true
// //   }
// //   return this;
// //   //управление передается в область вызова функции --> animal = this (animal присваивается значение this)
// // }
// ///////////////////////////////////////
// alert(animal.name);


//Функция, которая возвращается sum, должна накапливать значение при каждом вызове.
//Удобнее всего хранить его в замыкании, в переменной currentSum. Каждый вызов прибавляет к ней очередное значение:
// function sumX(a) {
//     var currentSum = a;
//
//     function f(b) {
//       currentSum += b;
//       return f;  // <-- не вызывает сама себя, а возвращает ссылку на себя
//     }
//
//   f.toString = function() {
//     return currentSum;
//   };
//
// //Функция sum срабатывает только один раз. Она возвращает функцию f.
// //Затем, при каждом запуске функция f добавляет параметр к сумме currentSum,
// //хранящейся в замыкании, и возвращает сама себя.
//
//     return f;
//   }
//
//   // function sum() {
//   //   return Number(String(sumX(arguments)));
//   // }
//
//   alert( sum(1)(2) ); // 3
//   alert( sum(1)(2) ); // 3
//   alert( sum(5)(-1)(2) ); // 6


// var foo = {
//   toString: function() {
//     return 'foo';
//   },
//   valueOf: function() {
//     return 2;
//   }
// };
//
// alert( foo );
// alert( foo + 1 );
// alert( foo + "3" );
//only difference is that valueOf is called when object must be converted to  Number
//object is converted to number when used with operators like: +, * and -.
//Also  valueOf is used when objects are compared using > or >= operators.

// var name = "";
//
// var user = {
//   name: "Василий",
//
//   export: function() {
//     return {
//       value: this
//     };
//   }
//
// };
//
// alert( user.export().value == user ); // true



// var ladder = {
//   step: 0,
//   up: function() { // вверх по лестнице
//     this.step++;
//     return this;
//   },
//   down: function() { // вниз по лестнице
//     this.step--;
//     return this;
//   },
//   showStep: function() { // вывести текущую ступеньку
//     alert( this.step );
//     return this;
//   }
// };
//
// ladder.up().down().showStep(); //0


// var calculator = {
//
//   read: function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   },
//
//   sum: function() {
//     return this.a + this.b;
//   },
//
//   mul: function() {
//     return this.a * this.b;
//   }
//
// }
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// var name = "";
//
// var user = {
//   name: "Василий",
//
//   export: function() {
//     return {
//       value: this
//     };
//   }
//
// };
//
// alert( user.export().value.name );
//
// // Во время выполнения user.export() значение this = user.
// // При создании объекта { value: this }, в свойство value копируется ссылка на текущий контекст, то есть на user.
// // Получается что user.export().value == user.

//
// var user = { firstName: 'Вася', f: func };
// var admin = { firstName: 'Админ', g: func };
//
// function func() {
//   alert(this.firstName);
// }
//
// // this равен объекту перед точкой
//
// user.f(); // Вася
// admin.g(); // Админ
// admin['g'](); // Админ - (все равно на запись)



// Когда мы вызываем метод через точку или квадратные скобки, то считать текущим объект,
// которому принадлежит метод, в остальных случаях считать, что объект был всего лишь хранилищем метода(функции)
// и про объект, из которого метод вызван, можно забыть.





// var user = {
//   name: 'Василий',
//
//   sayHi: function() {
//     showName(this); // передать текущий объект в showName
//   }
// };
//
// function showName(namedObj) {  //showName = {name: 'Василий', sayHi: f}
//   alert( namedObj.name );
// }
//
// user.sayHi(); // Василий


// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;
//
//   return {
//     father: man,
//     mother: woman
//   }
// }
//
// var family = marry({
//   name: "Василий"
// }, {
//   name: "Мария"
// });


// function factorial(n) {
//   return n ? n * factorial(n - 1) : 1;
// }
//
// alert( factorial(5) ); // 120


///RECURSION///
// function sumTo(n) {
//   if (n == 1) return 1;
//   ////execution contexts////
//   //n = 100
//   //n = 99
//   //...
//   //n = 5,
//   //n = 4,
//   //n = 3,
//   //n = 2,
//   //
//   //n = 1, n = 2 -> return 3, n = 3 -> return 6, n = 4 -> return 10, n = 5 -> return 15
//   return n + sumTo(n - 1);
//   //return 1 + 2 -> 3;
//   //return 3 + 3 -> 6;
//   //return 6 + 4 -> 10;
//   //return 10 + 5 -> 15;
// }
//
// alert( sumTo(100) );




// function makeArmy() {
//
//   var shooters = []; // добавление пустого массива
//
//   for (var i = 0; i < 10; i++) { // 10 итераций
//
//     var oneMan = (function(x) {  // отдельному стрелку присваивается значение вызова функции
//
//        // LexicalEnvironment = { function: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
//
//       return function() {  // [[Scope]] -> LexicalEnvironment
//         alert( x );
//       };
//
//       //Функция 'oneMan' создана как результат вызова промежуточного функционального выражения function(x),
//       //которое объявляется – и тут же выполняется, получая x = i.
//
//       //Так как function(x) тут же завершается, то значение x больше не меняется.
//       //Оно и будет использовано в возвращаемой функции-стрелке.
//
//     })(i); // вызов функции "function(x)" с текущим значением i, (создали функцию "function(x)" и сразу же ее вызвали.)
//     // таким образом, номер стрелка хранится внутри функции function(x)
//     // которая выступает в качестве лексического окружения для анонимной функции внутри себя.
//
//     shooters.push(oneMan);
//   }
//
//   return shooters;
// }
//
// var army = makeArmy(); //Новый вызов функции = новая область выполнения. Создание новой локальной области выполнения.
//
// army[0](); // 0
// army[1](); // 1


// function filter(arr, func) {
// 	var result = [];
//
// 	for (var i = 0; i < arr.length; i++) {
// 		var value = arr[i];
// 		if (func(value)) {
// 			result.push(value);
// 		}
// 	}
// 	return result;
// }
//
// function inBetween(a, b) {
// 	return function(x) {
// 		return x >= a && x <= b;
// 	}
// }
//
// function inArray(array) {
//   return function(x) {
//     return array.indexOf(x) != -1;
//   }
// }
//
// var arr = [1, 2, 3, 4, 5, 6, 7];
//
// alert(filter(arr, function(a) {
// 	return a % 2 == 0
// })); // 2,4,6
//
// alert(filter(arr, inBetween(3, 6))); // 3,4,5,6
//
// alert(filter(arr, inArray([1, 2, 10]))); // 1,2


// var users = [{
//   name: 'Вася',
//   surname: 'Иванов',
//   age: 20
// }, {
//   name: 'Петя',
//   surname: 'Чапаев',
//   age: 25
// }, {
//   name: 'Маша',
//   surname: 'Медведева',
//   age: 18
// }];
//
// function byField(field) {
//   return function(a, b) {
//     return a[field] > b[field] ? 1 : -1;
//   }
// }
//
// users.sort(byField('name'));
// users.forEach(function(user) {
//   alert( user.name );
// });
//
// users.sort(byField('age'));
// users.forEach(function(user) {
//   alert( user.name );
// });


// function makeBuffer() {
//   var text = '';
//
//   function buffer(textValue) {
//     if (arguments.length === 0) {
//       return text;
//     }
//     text += textValue;
//   };
//
//   buffer.clear = function() {
//     text = '';
//   }
//
//   return buffer;
//
// };
//
// var buffer = makeBuffer();
//
// // добавить значения к буферу
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!')
//
// alert(buffer());
//
// buffer.clear();
// alert(buffer());


///sum(a)(b) = a+b///
// function sum(a) {
//
//   return function(b) {
//     return a + b;
//   };
//
// }
//
// alert(sum(2)(3));


///Счетчик через объект + функцию///
// function makeCounter() {
//   var currentCount = 1;
//
//   // возвращаемся к функции
//   function counter() {
//     return currentCount++;
//   }
//
//   // ...и добавляем ей методы!
//   counter.set = function(value) {
//     currentCount = value;
//   };
//
//   counter.reset = function() {
//     currentCount = 1;
//   };
//
//   return counter;
// }
//
// var counter = makeCounter();
//
// alert( counter() ); // 1
// alert( counter() ); // 2
//
// counter.set(5);
// alert( counter() ); // 5


///Счетчик через объект///
// function makeCounter() {
//   var currentCount = 1;
//
//   return { // возвратим объект вместо функции
//     getNext: function() {
//       return currentCount++;
//     },
//
//     set: function(value) {
//       currentCount = value;
//     },
//
//     reset: function() {
//       currentCount = 1;
//     }
//   };
// }
//
// var counter = makeCounter();
//
// alert( counter.getNext() ); // 1
// alert( counter.getNext() ); // 2
//
// counter.set(5);
// alert( counter.getNext() ); // 5

// var a = 1;
//
// function getFunc() {
//   var a = 2;
//
//   var func = new Function('alert(a)');
//
//   return func;
// }
//
// getFunc()(); // 1, из window


////////////////ЗАМЫКАНИЯ////////////////
// function makeCounter() {
//   function counter() {
//     return counter.currentCount++;
//   };
//   counter.currentCount = 1;
//
//   return counter;
// }
//
// var counter = makeCounter();
//
// alert( counter() ); // 1
// alert( counter() ); // 2


// function makeCounter() {
//   var currentCount = 1;
//
//   return function() {
//     return currentCount++;
//   };
// }
//
// var counter = makeCounter(); // [[Scope]] -> {currentCount: 1}
//
// alert( counter() ); // 1, [[Scope]] -> {currentCount: 1}
// alert( counter() ); // 2, [[Scope]] -> {currentCount: 2}
// alert( counter() ); // 3, [[Scope]] -> {currentCount: 3}


// function formatDate(date) {
//   var diff = new Date() - date;
//
//   if (diff <= 1000) {
//     return 'только что';
//   }
//
//   var sec = Math.floor(diff / 1000);
//   if (sec < 60) {
//     return sec + ' сек. назад';
//   }
//
//   var min = Math.floor(diff / 60000);
//   if (min < 60) {
//     return min + ' мин. назад';
//   }
//
//   var d = date;
//
//   d = [
//     '0' + d.getDate(),
//     '0' + (d.getMonth() + 1),
//     '' + d.getFullYear(),
//     '0' + d.getHours(),
//     '0' + d.getMinutes()
//   ];
//
//   for (var i = 0; i < d.length; i++) {
//     d[i] = d[i].slice(-2);
//   }
//
//   return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
// }
//
// alert( formatDate(new Date(new Date - 1)) ); // "только что"
//
// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
//
// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
//
// alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"


// function formatDate(date) {
//
//   var dd = date.getDate();
//   if (dd < 10) dd = '0' + dd;
//
//   var mm = date.getMonth() + 1;
//   if (mm < 10) mm = '0' + mm;
//
//   var yy = date.getFullYear() % 100;
//   if (yy < 10) yy = '0' + yy;
//
//   return dd + '.' + mm  + '.' + yy;
//
// }
//
// var d = new Date(2014, 0, 30);
//
// alert( formatDate(d) );


// function getSecondsToTomorrow() {
//   var now = new Date();
//
//   var tomorrow = new Date( now.getFullYear(), now.getMonth(), now.getDate() + 1 );
//
//   var diff = tomorrow - now;
//
//   return Math.floor(diff / 10000);   //3600000 в часы
//
// }
//
// alert(getSecondsToTomorrow());


// function getSecondsToday() {
//   var now = new Date();
//
//   var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//
//    var diff = now - today;
//
//    return Math.floor(diff / 1000);
// }
//
// alert(getSecondsToday());


// function getLastDayOfMonth(year, month) {
//   var date = new Date(year, month + 1, 0);
//   return date.getDate();
// }
//
// alert( getLastDayOfMonth(2012, 0) ); // 31
// alert( getLastDayOfMonth(2012, 1) ); // 29
// alert( getLastDayOfMonth(2013, 1) ); // 28


// function getDateAgo(date, days) {
//   date.setDate(date.getDate() - days);
//   return date.getDate();
// }

// function getDateAgo(date, days) {
//   var dateCopy = new Date(date); //copy object
//
//   dateCopy.setDate(date.getDate() - days);
//   return dateCopy.getDate();
// }
//
// var date = new Date(2015, 0, 2);
//
// alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 января 2014)


///день с понедельника///
// function getLocalDay(date) {
// 	var day = date.getDay();
//
// 	if (day == 0) {
// 		day = 7;
// 	}
//
// 	return day;
// }
//
// var date = new Date(2012, 0, 3);
//
// alert(getLocalDay( date ));


//Получить день недели
// function getWeekDay(date) {
//   var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//
//   return days[date.getDay()];
// }
// var date = new Date(2019, 9, 3);
// alert(getWeekDay(date));
//
// var date = new Date(2019, 9, 3); // 3 января 2014
// alert( date.toLocaleString('ru', {weekday: 'long'}) ); // 'Пт'


//возвращает дату сразу в виде миллисекунд, он аналогичен вызову +new Date()
//но в отличие от него не создаёт промежуточный объект даты, а поэтому – во много раз быстрее.
//alert(Date.now());

// var msUTC = Date.parse('2012-01-26T13:51:50.417Z'); // зона UTC
// alert( msUTC ); // 1327571510417 (число миллисекунд)


// интернационализация///
// var date = new Date(2014, 11, 31, 12, 30, 0);
//
// var options = {
//   era: 'long',
//   year: 'numeric',
//   month: 'short',
//   day: 'numeric',
//   weekday: 'long',
//   timezone: 'UTC',
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric'
// };
//
// alert( date.toLocaleString("ru", options) ); // среда, 31 декабря 2014 г. н.э. 12:30:00
// alert( date.toLocaleString("en-US", options) ); // Wednesday, December 31, 2014 Anno Domini 12:30:00 PM


///console.time///
// var arr = [];
// for (var i = 0; i < 1000; i++) arr[i] = 0;
//
// function walkIn(arr) {
//   for (var key in arr) arr[key]++;
// }
//
// function walkLength(arr) {
//   for (var i = 0; i < arr.length; i++) arr[i]++;
// }
//
// function bench(f) {
//   for (var i = 0; i < 10000; i++) f(arr);
// }
//
// console.time("All Benchmarks");
//
// console.time("walkIn");
// bench(walkIn);
// console.timeEnd("walkIn");
//
// console.time("walkLength");
// bench(walkLength);
// console.timeEnd("walkLength");
//
// console.timeEnd("All Benchmarks");


///Benchmarking///
// var arr = [];
// for (var i = 0; i < 1000; i++) arr[i] = 0;
//
// function walkIn(arr) {
//   for (var key in arr) arr[key]++;
// }
//
// function walkLength(arr) {
//   for (var i = 0; i < arr.length; i++) arr[i]++;
// }
//
// function bench(f) {
//   var date = new Date();
//   for (var i = 0; i < 1000; i++) f(arr);
//   return new Date() - date;
// }
//
// // bench для каждого теста запустим много раз, чередуя
// var timeIn = 0,
//   timeLength = 0;
// for (var i = 0; i < 100; i++) {
//   timeIn += bench(walkIn);
//   timeLength += bench(walkLength);
// }
//
// alert( 'Время walkIn: ' + timeIn + 'мс' );
// alert( 'Время walkLength: ' + timeLength + 'мс' );


///Benchmarking///
// var arr = [];
// for (var i = 0; i < 1000; i++) arr[i] = 0;
//
// function walkIn(arr) {
//   for (var key in arr) arr[key]++;
// }
//
// function walkLength(arr) {
//   for (var i = 0; i < arr.length; i++) arr[i]++;
// }
//
// function bench(f) {
//   var date = new Date();
//   for (var i = 0; i < 10000; i++) f(arr);
//   return new Date() - date;
// }
//
// alert( 'Время walkIn: ' + bench(walkIn) + 'мс' );
// alert( 'Время walkLength: ' + bench(walkLength) + 'мс' );


// var start = new Date; // засекли время
//
// // что-то сделать
// for (var i = 0; i < 10000; i++) {
//   var doSomething = i * i * i;
// }
//
// var end = new Date; // конец измерения
//
// alert( "Цикл занял " + (end - start) + " ms" );

// var date = new Date(2011, 0, 1, 2, 3, 4, 567);
// alert( date.getMonth() ); // 1.01.2011, 02:03:04.567


// var Jan02_1970 = new Date(3600 * 24 * 1000);
// alert( Jan02_1970 );


// ///Cумма всех аргументов///
// function sum(x) {
//
//   var result = 0;
//
//   for (var i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//
//   return result;
// }
//
// alert( sum() ); // 0
// alert( sum(1) ); // 1
// alert( sum(1, 2) ); // 3
// alert( sum(1, 2, 3) ); // 6
// alert( sum(1, 2, 3, 4) ); // 10

////1, если первый аргумент есть, и 0 - если нет///
// function f(x) {
//   alert(arguments.length ? 1 : 0);
// }
//
// f();


///fu bar///
// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//
// arr.forEach(function(item, i){
// 	if((item % 3 === 0 && item % 5 === 0)) {
// 		alert(item + ": fu, bar");
// 	} else if ((item % 3) === 0) {
// 		alert(item + ": fu");
// 	} else if ((item % 5) === 0) {
// 		alert(item + ": bar");
// 	} else {
// 		alert (item);
// 	}
// });

//fu bar - for///
// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//
// for (var i = 0; i < arr.length; i++) {
// 	var item = arr[i];
// 	if (item % 3 === 0 && item % 5 === 0) {
// 		alert(item + " : fu, bar");
// 	} else if (item % 3 === 0) {
// 		alert(item + " : fu");
// 	} else if (arr[i] % 5 === 0) {
// 		alert(item + " : bar");
// 	} else {
// 		alert(item);
// 	}
// }


// var arr = [ 1, 2, 3, 4, 5 ]
//
// function getSums(arr) {
//   var result = [];
//   if (!arr.length) return result;
//
//   var totalSum = arr.reduce(function(sum, item) {
//     result.push(sum);
//     return sum + item;
//   });
//   result.push(totalSum);
//
//   return result;
// }
//
// alert(getSums([1, 2, 3, 4, 5]));


///Выбор уникального объекта (медленно)///
// function unique(arr) {
//   var result = [];
//
//   nextInput:
//     for (var i = 0; i < arr.length; i++) {
//       var str = arr[i]; // для каждого элемента
//       for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
//         if (result[j] == str) continue nextInput; // если да, то следующий
//       }
//       result.push(str);
//     }
//
//   return result;
// }
//
// var strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", "8-()"
// ];
//
// alert( unique(strings) ); // кришна, харе, 8-()


// ///Выбор уникального объекта (быстро)///
// function unique(arr) {
//   var obj = {};
//
//   for (var i = 0; i < arr.length; i++) {
//     var str = arr[i];
//     obj[str] = true;
//   }
//
//   return Object.keys(obj);
// }
//
// var strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", "8-()"
// ];
//
// alert( unique(strings) );


// function aclean(arr) {
//
//   var obj = {};
//
//   for (var i = 0; i < arr.length; i++) {
//     var sorted = arr[i].toLowerCase().split('').sort().join('');
//
//     obj[sorted] = arr[i];
//   }
//
//   var result = [];
//
//   for (var key in obj) result.push(obj[key]);
//
//   return result;
// }
//
// var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
//
// alert( aclean(arr) );


// var list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
//
// function printReverseList(list) {
//   var arr = [];
//   var tmp = list;
//
//   while (tmp) {
//     arr.push(tmp.value);
//     tmp = tmp.next;
//   }
//
//   for (var i = arr.length - 1; i >= 0; i--) {
//     alert( arr[i] );
//   }
// }
//
// printReverseList(list);


// var list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
//
// function printReverseList(list) {
//
//   if (list.next) {
//     printReverseList(list.next);
//   }
//
//   alert( list.value );
// }
//
// printReverseList(list);



// var list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
//
// function printList(list) {
//
//   alert(list.value);
//
//   if (list.next) {
//     printList(list.next);
//   }
//
// }
//
// printList(list);


// var list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
//
// function printList(list) {
//   var tmp = list;
//
//   while (tmp) {
//     alert ( tmp.value );
//     tmp = tmp.next;
//   }
//
// }
//
// printList(list);

// function sortByAge(personA, personB) {
//   return personA.age - personB.age;
// }
//
// var vasya = {name: 'Вася', age: 23 };
// var masha = {name: 'Маша', age: 18 };
// var vovochka = {name: 'Вовочка', age: 6 };
//
// var people = [vasya, masha, vovochka];
//
// people.sort(sortByAge);
//
//
// for (var i = 0; i < people.length; i++) {
//   alert(people[i].name);
// }

///Рандом значений в массиве///
// var arr = [1, 2, 3, 4, 5];
//
// function random(a, b) {
//   return Math.random();
// }
//
// arr.sort(random);
//
// alert(arr);


///Сортировка///
// var arr = ['HTML', 'JavaScript', 'CSS'];
//
// var arrSorted = arr.slice().sort();
//
//
// alert(arrSorted);
// alert(arr);


///Сравнение по порядку///
// var arr = [5, 2, 1, -10, 8];
//
// function compare(a, b) {
//   return a - b;
// }
//
// alert(arr.sort(compare));


// function filterRangeInPlace (arr, a, b) {
//
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < a || arr[i] > b) {
//       arr.splice(i--, 1);
//     }
//   }
// }
//
// var arr = [5, 3, 8, 1];
//
// filterRangeInPlace(arr, 1, 4);
// alert( arr ); // [3, 1]


///Удалить класс///
// function removeClass(obj, cls) {
//
//   var remove = obj.className ? obj.className.split(' ') : [];
//
//   for (var i = 0; i < remove.length; i++) {
//     if (remove[i] == cls) {
//       remove.splice(i, 1);
//       i--;
//     }
//   }
//   obj.className = remove.join(' ');
//
// }
//
// var obj = {
//   className: 'open menu menu'
// }
//
// removeClass(obj, 'blabla');
// removeClass(obj, 'menu');
// alert(obj.className);


///Удаление дефисов////
// function camelize(str) {
//
//   var minus = str.split('-');
//
//   for (var i = 1; i < minus.length; i++) {
//     //первый символ после сплита с большой буквы
//     minus[i] = minus[i].charAt(0).toUpperCase() + minus[i].slice(1);
//   }
//
//   return minus.join('');
//
// }
//
// alert ( camelize ("background-color") );
// alert ( camelize ("list-style-image") );
// alert ( camelize ("-webkit-transition") );


// function addClass(obj, cls) {
//
//   var classes = [];
//
//   if (obj.className) {
//     classes = obj.className.split(' ');
//   }
//
//   // var classes = obj.className ? obj.className.split(' ') : [];
//
// for (var i = 0; i < classes.length; i++) {
//   if (classes[i] == cls) return;
// }
//
// classes.push(cls);
//
// obj.className = classes.join(' ');
//
// }
//
// var obj = {
//   className: 'open menu'
// };
//
// addClass(obj, 'new');
// addClass(obj, 'open');
// addClass(obj, 'me');
// alert(obj.className) // open menu new me


// function addClass(obj, cls) {
//   var classes = obj.className ? obj.className.split(' ') : [];
//
//   for (var i = 0; i < classes.length; i++) {
//     if (classes[i] == cls) return;
//   }
//
//   classes.push(cls);
//
//   obj.className = classes.join(' ');
// }
//
// var obj = {
//   className: 'open menu'
// };
//
// addClass(obj, 'new');
// addClass(obj, 'open');
// addClass(obj, 'me');
//
// alert(obj.className);



///Массив наибольшей группы (O(n)) ///
// function getMaxSubSum(arr) {
//   var maxSum = 0,
//     partialSum = 0;
//
//     for (var i = 0; i < arr.length; i++) {
//       partialSum += arr[i];
//       maxSum = Math.max(maxSum, partialSum);
//       if (partialSum < 0) partialSum = 0;
//     }
//     return maxSum;
// }
//
// alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
// alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
// alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
// alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
// alert( getMaxSubSum([1, 2, 3]) ); // 6
// alert( getMaxSubSum([-1, -2, -3]) ); // 0


///массив наибольшей группы (O(n^2))///
// function getMaxSubSum(arr) {
//   var maxSum = 0;
//
//   for (var i = 0; i < arr.length; i++) {
//     var sumFixedStart = 0;
//     for (var j = i; j < arr.length; j++) {
//       sumFixedStart += arr[j];
//       maxSum = Math.max(maxSum, sumFixedStart);
//     }
//   }
//   return maxSum;
// }
//
// alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
// alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
// alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
// alert( getMaxSubSum([1, 2, 3]) ); // 6
// alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100


//Решето Эратосфена - (все простые числа от 2 до 100)
// шаг 1 - список последовательных чисел от 2 до 100
// var arr = [];
//
// for (var i = 2; i < 100; i++) {
//   arr[i] = true;
// }
//
// // шаг 2 - первое простое число
// var p = 2;
//
// do {
//   // шаг 3 - зачеркиваем все последущие числа с разницей в p - (4,6,8)
//   for (i = 2 * p; i < 100; i += p) {
//     arr[i] = false;
//   }
//
//   // шаг 4
//   for (i = p + 1; i < 100; i++) {
//     if (arr[i]) break;
//   }
//
//   p = i; // (3, 5, 7)
// } while (p * p < 100); // шаг 5
//
// // шаг 6 (готово)
// // посчитать сумму
// var sum = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i]) {
//     sum += i;
//   }
// }
//
// alert( sum );


// function filteredRange (arr, a, b) {
//   var result = [];
//
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] >= a && arr[i] <= b) {
//         result.push(arr[i]);
//       }
//     }
//
//     return result;
// }
//
// var array = [5, 4, 3 ,8 ,0];
//
// var filtered = filteredRange(array, 3, 5);
// alert( filtered );


///поиск в массиве///
// создаем пустой массив и проверяем поддерживается ли indexOf
// if ([].indexOf) {
//
//   var find = function(array, value) {
//     return array.indexOf(value);
//   }
//
// } else {
//   var find = function(array, value) {
//     for (var i = 0; i < array.length; i++) {
//       if (array[i] === value) return i;
//     }
//
//     return -1;
//   }
//
// }
//
// var arr = ['a', -1, 2, 'b'];
//
// var index = find(arr, 2);
//
// alert (index);


///Калькулятор///
// var numbers = [];
//
// while (true) {
//
//   var value = prompt('Введите число:', 0);
//
//   if (value === null || value === '' || isNaN(value)) break;
//
//   numbers.push(+value);
//
// }
//
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
//
// alert ( sum );


// Рандом значения///
// var arr = ['Яблоко', 'Апельсин', 'Груша', 'Лимон'];
//
// var rand = Math.floor(Math.random() * arr.length);
//
// alert( arr[rand] );
