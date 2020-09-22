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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhbGVydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cblxuLy8gZnVuY3Rpb24gVXNlcihuYW1lLCBzdXJuYW1lKSB7XG4vLyAgIHRoaXMubmFtZSA9IG5hbWU7XG4vLyAgIHRoaXMuc3VybmFtZSA9IHN1cm5hbWU7XG4vLyB9XG4vL1xuLy8gbGV0IFVzZXJQcm94eSA9IG5ldyBQcm94eShVc2VyLCB7XG4vLyAgIC8vINC/0LXRgNC10LTQsNGB0YIg0LLRi9C30L7QsiBuZXcgVXNlciwg0L/RgNC10LTQstCw0YDQuNGC0LXQu9GM0L3QviDRgdC+0L7QsdGJ0LjQsiDQviDQvdGR0Lxcbi8vICAgY29uc3RydWN0OiBmdW5jdGlvbih0YXJnZXQsIGFyZ3VtZW50c0xpc3QpIHtcbi8vICAgICBhbGVydChg0JfQsNC/0YPRgdC6IG5ldyDRgSDQsNGA0LPRg9C80LXQvdGC0LDQvNC4OiAke2FyZ3VtZW50c0xpc3R9YCk7XG4vLyAgICAgcmV0dXJuIG5ldyB0YXJnZXQoLi4uYXJndW1lbnRzTGlzdCk7IC8v0LLQvNC10YHRgtC+INC80LDRgdGB0LjQstCwINC/0LXRgNC10LTQsNC10YIg0L7RgtC00LXQu9GM0L3Ri9C5INGB0L/QuNGB0L7QulxuLy8gICB9XG4vLyB9KTtcbi8vXG4vLyBsZXQgdXNlciA9IG5ldyBVc2VyUHJveHkoXCJJbHlhXCIsIFwiS2FudG9yXCIpO1xuLy9cbi8vIGFsZXJ0KCB1c2VyLm5hbWUgKTsgLy8gSWx5YVxuXG5cbi8vIGZ1bmN0aW9uIHN1bShhLCBiKSB7XG4vLyAgIHJldHVybiBhICsgYjtcbi8vIH1cbi8vXG4vLyBsZXQgcHJveHkgPSBuZXcgUHJveHkoc3VtLCB7XG4vLyAgIC8vINC/0LXRgNC10LTQsNGB0YIg0LLRi9C30L7QsiDQsiB0YXJnZXQsINC/0YDQtdC00LLQsNGA0LjRgtC10LvRjNC90L4g0YHQvtC+0LHRidC40LIg0L4g0L3RkdC8XG4vLyAgIGFwcGx5OiBmdW5jdGlvbih0YXJnZXQsIHRoaXNBcmcsIGFyZ3VtZW50c0xpc3QpIHtcbi8vICAgICBhbGVydChg0JHRg9C00YMg0LLRi9GH0LjRgdC70Y/RgtGMINGB0YPQvNC80YM6ICR7YXJndW1lbnRzTGlzdH1gKTtcbi8vICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50c0xpc3QpO1xuLy8gICB9XG4vLyB9KTtcbi8vXG4vLyAvLyDQktGL0LLQtdC00LXRgiDRgdC90LDRh9Cw0LvQsCDRgdC+0L7QsdGJ0LXQvdC40LUg0LjQtyDQv9GA0L7QutGB0LgsXG4vLyAvLyDQsCDQt9Cw0YLQtdC8INGD0LbQtSDRgdGD0LzQvNGDXG4vLyBhbGVydCggcHJveHkoMSwgMikgKTtcblxuXG4vLyBsZXQgZGljdGlvbmFyeSA9IHtcbi8vICAgJ0hlbGxvJzogJ9Cf0YDQuNCy0LXRgidcbi8vIH07XG4vL1xuLy8gbGV0IHByb3h5ID0gbmV3IFByb3h5KGRpY3Rpb25hcnksIHtcbi8vICAgZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwaHJhc2UpIHtcbi8vICAgICByZXR1cm4gdHJ1ZTsgLy8g0L3QuNGH0LXQs9C+INC90LUg0LTQtdC70LDQtdC8LCDQvdC+INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCIHRydWVcbi8vICAgfVxuLy8gfSk7XG4vL1xuLy8gLy8g0L3QtSDRg9C00LDQu9C40YIg0YHQstC+0LnRgdGC0LLQvlxuLy8gZGVsZXRlIHByb3h5WydIZWxsbyddO1xuLy9cbi8vIGFsZXJ0KFwiSGVsbG9cIiBpbiBkaWN0aW9uYXJ5KTsgLy8gdHJ1ZVxuLy9cbi8vIC8vINCx0YPQtNC10YIg0YLQviDQttC1INGB0LDQvNC+0LUsINGH0YLQviDQuCDQstGL0YjQtVxuLy8gLy8g0YLQsNC6INC60LDQuiDQvdC10YIg0LvQvtCy0YPRiNC60LggaGFzLCDQvtC/0LXRgNCw0YbQuNGPIGluINGB0YDQsNCx0L7RgtCw0LXRgiDQvdCwINC40YHRhdC+0LTQvdC+0Lwg0L7QsdGK0LXQutGC0LVcbi8vIGFsZXJ0KFwiSGVsbG9cIiBpbiBwcm94eSk7IC8vIHRydWVcblxuXG4vLyAvL9CS0L7RgiDRgtCw0LogZGljdGlvbmFyeSDQsdGD0LTQtdGCINCy0YHQtdCz0LTQsCDQstC+0LfQstGA0LDRidCw0YLRjCB0cnVlINC00LvRjyDQu9GO0LHQvtC5IGluLdC/0YDQvtCy0LXRgNC60Lg6XG4vLyBsZXQgZGljdGlvbmFyeSA9IHtcbi8vICAgJ0hlbGxvJzogJ9Cf0YDQuNCy0LXRgidcbi8vIH07XG4vL1xuLy8gZGljdGlvbmFyeSA9IG5ldyBQcm94eShkaWN0aW9uYXJ5LCB7XG4vLyAgIGhhcyh0YXJnZXQsIHBocmFzZSkge1xuLy8gICAgIHJldHVybiB0cnVlO1xuLy8gICB9XG4vLyB9KTtcbi8vXG4vLyBhbGVydChcIkJsYUJsYUJsYVwiIGluIGRpY3Rpb25hcnkpOyAvLyB0cnVlXG5cblxuLy8gbGV0IGRpY3Rpb25hcnkgPSB7XG4vLyAgICdIZWxsbyc6ICfQn9GA0LjQstC10YInLFxuLy8gICAnQnllJzogJ9Cf0L7QutCwJ1xuLy8gfTtcbi8vXG4vLyBkaWN0aW9uYXJ5ID0gbmV3IFByb3h5KGRpY3Rpb25hcnksIHtcbi8vICAgZ2V0KHRhcmdldCwgcGhyYXNlKSB7XG4vLyAgICAgaWYgKHBocmFzZSBpbiB0YXJnZXQpIHtcbi8vICAgICAgIHJldHVybiB0YXJnZXRbcGhyYXNlXTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgY29uc29sZS5sb2coYE5vIHBocmFzZTogJHtwaHJhc2V9YCk7XG4vLyAgICAgICByZXR1cm4gcGhyYXNlO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfSlcbi8vXG4vLyAvLyDQntCx0YDQsNGJ0LDQtdC80YHRjyDQuiDQv9GA0L7QuNC30LLQvtC70YzQvdGL0Lwg0YHQstC+0LnRgdGC0LLQsNC8INGB0LvQvtCy0LDRgNGPIVxuLy8gYWxlcnQoIGRpY3Rpb25hcnlbJ0hlbGxvJ10gKTsgLy8g0J/RgNC40LLQtdGCXG4vLyBhbGVydCggZGljdGlvbmFyeVsnV2VsY29tZSddICk7IC8vIFdlbGNvbWUgKNCx0LXQtyDQv9C10YDQtdCy0L7QtNCwKVxuLy9cbi8vIGNvbnNvbGUubG9nKCAnSGVsbG8nIGluIGRpY3Rpb25hcnkgKTsgLy8gdHJ1ZVxuLy8gY29uc29sZS5sb2coICdXZWxjb21lJyBpbiBkaWN0aW9uYXJ5ICk7IC8vIGZhbHNlLCDQvdC10YIg0YLQsNC60L7Qs9C+INGB0LLQvtC50YHRgtCy0LBcblxuXG4vLyBsZXQgdXNlciA9IHt9O1xuLy9cbi8vIGxldCBwcm94eSA9IG5ldyBQcm94eSh1c2VyLCB7XG4vLyAgIGdldCh0YXJnZXQsIHByb3ApIHtcbi8vICAgICBhbGVydChg0KfRgtC10L3QuNC1ICR7cHJvcH1gKTtcbi8vICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuLy8gICB9LFxuLy8gICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuLy8gICAgIGFsZXJ0KGDQl9Cw0L/QuNGB0YwgJHtwcm9wfSAke3ZhbHVlfWApO1xuLy8gICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuLy8gICAgIHJldHVybiB0cnVlO1xuLy8gICB9XG4vLyB9KTtcbi8vXG4vLyBwcm94eS5maXJzdE5hbWUgPSBcIklseWFcIjsgLy8g0LfQsNC/0LjRgdGMXG4vL1xuLy8gcHJveHkuZmlyc3ROYW1lOyAvLyDRh9GC0LXQvdC40LVcbi8vXG4vLyBhbGVydCh1c2VyLmZpcnN0TmFtZSk7IC8vIElseWFcblxuXG4vLyBjb25zdCB0ZXN0ID0gbXNnID0+IHtcbi8vICAgY29uc29sZS5sb2cobXNnKTtcbi8vIH1cbi8vXG4vLyBleHBvcnQgZGVmYXVsdCB0ZXN0O1xuXG4vLyBmdW5jdGlvbiAqaW5maW5pdGVOdW1iZXJzKCkge1xuLy8gICAgIHZhciBuID0gMTtcbi8vICAgICB3aGlsZSAodHJ1ZSkge1xuLy8gICAgICAgICB5aWVsZCBuKys7XG4vLyAgICAgfVxuLy8gfVxuLy9cbi8vIHZhciBudW1iZXJzID0gaW5maW5pdGVOdW1iZXJzKCk7IC8vINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC/0LXRgNC10LHQuNGA0LDQtdC80YvQuSDQvtCx0YrQtdC60YJcbi8vXG4vLyBjb25zb2xlLmxvZyhudW1iZXJzLm5leHQoKSk7IC8vIHsgdmFsdWU6IDEsIGRvbmU6IGZhbHNlIH1cbi8vIGNvbnNvbGUubG9nKG51bWJlcnMubmV4dCgpKTsgLy8geyB2YWx1ZTogMiwgZG9uZTogZmFsc2UgfVxuLy8gY29uc29sZS5sb2cobnVtYmVycy5uZXh0KCkpOyAvLyB7IHZhbHVlOiAzLCBkb25lOiBmYWxzZSB9XG5cblxuLy8gbGV0IG5pY2tuYW1lcyA9IFsnZGknLCAnYm9vJywgJ3B1bmtleWUnXTtcbi8vIC8vIG5pY2tuYW1lcy5zaXplID0gMztcbi8vIGZvciAobGV0IG5pY2tuYW1lIG9mIG5pY2tuYW1lcykge1xuLy8gICAgIGNvbnNvbGUubG9nKG5pY2tuYW1lKTtcbi8vIH1cblxuXG4vLyBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKGlkKSB7XG4vLyAgIGxldCByZXNwb25jZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtpZH1gKTtcbi8vICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25jZS5qc29uKCk7XG4vL1xuLy8gICByZXR1cm4gZGF0YTtcbi8vXG4vLyB9XG4vL1xuLy8gYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcbi8vICAgbGV0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKDIpO1xuLy8gICBjb25zb2xlLmxvZyh1c2VyKTtcbi8vIH1cbi8vXG4vLyBtYWluKCk7XG5cblxuLy8gLy8g0LPQtdC90LXRgNCw0YLQvtGAINC00LvRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0Lgg0L/QvtC60LDQt9CwINCw0LLQsNGC0LDRgNCwXG4vLyAvLyDQvtC9IHlpZWxkJ9C40YIg0L/RgNC+0LzQuNGB0Ytcbi8vIGZ1bmN0aW9uKiBzaG93VXNlckF2YXRhcigpIHtcbi8vXG4vLyAgIGxldCB1c2VyRmV0Y2ggPSB5aWVsZCBmZXRjaCgnL2FydGljbGUvZ2VuZXJhdG9yL3VzZXIuanNvbicpO1xuLy8gICBsZXQgdXNlckluZm8gPSB5aWVsZCB1c2VyRmV0Y2guanNvbigpO1xuLy9cbi8vICAgbGV0IGdpdGh1YkZldGNoID0geWllbGQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VySW5mby5uYW1lfWApO1xuLy8gICBsZXQgZ2l0aHViVXNlckluZm8gPSB5aWVsZCBnaXRodWJGZXRjaC5qc29uKCk7XG4vL1xuLy8gICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4vLyAgIGltZy5zcmMgPSBnaXRodWJVc2VySW5mby5hdmF0YXJfdXJsO1xuLy8gICBpbWcuY2xhc3NOYW1lID0gXCJwcm9taXNlLWF2YXRhci1leGFtcGxlXCI7XG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKTtcbi8vXG4vLyAgIHlpZWxkIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMDAwKSk7XG4vL1xuLy8gICBpbWcucmVtb3ZlKCk7XG4vL1xuLy8gICByZXR1cm4gaW1nLnNyYztcbi8vIH1cbi8vXG4vLyAvLyDQstGB0L/QvtC80L7Qs9Cw0YLQtdC70YzQvdCw0Y8g0YTRg9C90LrRhtC40Y8t0YfQtdGA0L3QvtGA0LDQsdC+0YfQuNC5XG4vLyAvLyDQtNC70Y8g0LLRi9C/0L7Qu9C90LXQvdC40Y8g0L/RgNC+0LzQuNGB0L7QsiDQuNC3IGdlbmVyYXRvclxuLy8gZnVuY3Rpb24gZXhlY3V0ZShnZW5lcmF0b3IsIHlpZWxkVmFsdWUpIHtcbi8vXG4vLyAgIGxldCBuZXh0ID0gZ2VuZXJhdG9yLm5leHQoeWllbGRWYWx1ZSk7XG4vL1xuLy8gICBpZiAoIW5leHQuZG9uZSkge1xuLy8gICAgIG5leHQudmFsdWUudGhlbihcbi8vICAgICAgIHJlc3VsdCA9PiBleGVjdXRlKGdlbmVyYXRvciwgcmVzdWx0KSxcbi8vICAgICAgIGVyciA9PiBnZW5lcmF0b3IudGhyb3coZXJyKVxuLy8gICAgICk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgLy8g0L7QsdGA0LDQsdC+0YLQsNC10Lwg0YDQtdC30YPQu9GM0YLQsNGCIHJldHVybiDQuNC3INCz0LXQvdC10YDQsNGC0L7RgNCwXG4vLyAgICAgLy8g0L7QsdGL0YfQvdC+INC30LTQtdGB0Ywg0LLRi9C30L7QsiBjYWxsYmFjayDQuNC70Lgg0YfRgtC+LdGC0L4g0LIg0Y3RgtC+0Lwg0LTRg9GF0LVcbi8vICAgICBhbGVydChuZXh0LnZhbHVlKTtcbi8vICAgfVxuLy9cbi8vIH1cbi8vXG4vLyBleGVjdXRlKCBzaG93VXNlckF2YXRhcigpICk7XG5cblxuLy8gZnVuY3Rpb24qIGdlbigpIHtcbi8vICAgbGV0IGFzazEgPSB5aWVsZCBcIjIgKyAyP1wiO1xuLy9cbi8vICAgYWxlcnQoYXNrMSk7IC8vIDRcbi8vXG4vLyAgIGxldCBhc2syID0geWllbGQgXCIzICogMz9cIlxuLy9cbi8vICAgYWxlcnQoYXNrMik7IC8vIDlcbi8vIH1cbi8vXG4vLyBsZXQgZ2VuZXJhdG9yID0gZ2VuKCk7XG4vL1xuLy8gYWxlcnQoIGdlbmVyYXRvci5uZXh0KCkudmFsdWUgKTsgLy8gXCIyICsgMj9cIlxuLy9cbi8vIGFsZXJ0KCBnZW5lcmF0b3IubmV4dCg0KS52YWx1ZSApOyAvLyBcIjMgKiAzP1wiXG4vL1xuLy8gYWxlcnQoIGdlbmVyYXRvci5uZXh0KDkpLmRvbmUgKTsgLy8gdHJ1ZVxuXG5cbi8vIGZ1bmN0aW9uKiBnZW5lcmF0ZVNlcXVlbmNlKHN0YXJ0LCBlbmQpIHtcbi8vICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB5aWVsZCBpO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uKiBnZW5lcmF0ZUFscGhhTnVtKCkge1xuLy9cbi8vICAgLy8gMC4uOVxuLy8gICB5aWVsZCogZ2VuZXJhdGVTZXF1ZW5jZSg0OCwgNTcpO1xuLy9cbi8vICAgLy8gQS4uWlxuLy8gICB5aWVsZCogZ2VuZXJhdGVTZXF1ZW5jZSg2NSwgOTApO1xuLy9cbi8vICAgLy8gYS4uelxuLy8gICB5aWVsZCogZ2VuZXJhdGVTZXF1ZW5jZSg5NywgMTIyKTtcbi8vXG4vLyB9XG4vL1xuLy8gbGV0IHN0ciA9ICcnO1xuLy9cbi8vIGZvcihsZXQgY29kZSBvZiBnZW5lcmF0ZUFscGhhTnVtKCkpIHtcbi8vICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4vLyB9XG4vL1xuLy8gYWxlcnQoc3RyKTsgLy8gMC4uOUEuLlphLi56XG5cblxuLy8gbGV0IGNoYWluID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4vL1xuLy8gbGV0IHJlc3VsdHMgPSBbXTtcbi8vXG4vLyAvLyDQsiDRhtC40LrQu9C1INC00L7QsdCw0LLQu9GP0LXQvCDQt9Cw0LTQsNGH0Lgg0LIg0YbQtdC/0L7Rh9C60YNcbi8vIHVybHMuZm9yRWFjaChmdW5jdGlvbih1cmwpIHtcbi8vICAgY2hhaW4gPSBjaGFpblxuLy8gICAgIC50aGVuKCgpID0+IGh0dHBHZXQodXJsKSlcbi8vICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4vLyAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbi8vICAgICB9KTtcbi8vIH0pO1xuLy9cbi8vIC8vINCyINC60L7QvdGG0LUg4oCUINCy0YvQstC+0LTQuNC8INGA0LXQt9GD0LvRjNGC0LDRgtGLXG4vLyBjaGFpbi50aGVuKCgpID0+IHtcbi8vICAgYWxlcnQocmVzdWx0cyk7XG4vLyB9KTtcblxuXG4vLyBsZXQgZGVsYXkgPSAobXMpID0+IHtcbi8vICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbi8vICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcbi8vICAgfSk7XG4vLyB9XG4vL1xuLy8gZGVsYXkoMTAwMClcbi8vICAgLnRoZW4oKCkgPT4gYWxlcnQoXCJIZWxsbyFcIikpO1xuXG5cbi8vIC8vINCh0L7Qt9C00LDRkdGC0YHRjyDQvtCx0YrQtdC60YIgcHJvbWlzZVxuLy8gbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vL1xuLy8gXHRzZXRUaW1lb3V0KCgpID0+IHtcbi8vIFx0XHQvLyDQv9C10YDQtdCy0LXQtNGR0YIg0L/RgNC+0LzQuNGBINCyINGB0L7RgdGC0L7Rj9C90LjQtSBmdWxmaWxsZWQg0YEg0YDQtdC30YPQu9GM0YLQsNGC0L7QvCBcInJlc3VsdFwiXG4vLyBcdFx0cmVzb2x2ZShcInJlc3VsdFwiKTtcbi8vIFx0fSwgMTAwMCk7XG4vL1xuLy8gfSk7XG4vL1xuLy8gLy8gcHJvbWlzZS50aGVuINC90LDQstC10YjQuNCy0LDQtdGCINC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0L3QsCDRg9GB0L/QtdGI0L3Ri9C5INGA0LXQt9GD0LvRjNGC0LDRgiDQuNC70Lgg0L7RiNC40LHQutGDXG4vLyBwcm9taXNlXG4vLyBcdC50aGVuKFxuLy8gXHRcdHJlc3VsdCA9PiB7XG4vLyBcdFx0XHQvLyDQv9C10YDQstCw0Y8g0YTRg9C90LrRhtC40Y8t0L7QsdGA0LDQsdC+0YLRh9C40LogLSDQt9Cw0L/Rg9GB0YLQuNGC0YHRjyDQv9GA0Lgg0LLRi9C30L7QstC1IHJlc29sdmVcbi8vIFx0XHRcdGFsZXJ0KFwiRnVsZmlsbGVkOiBcIiArIHJlc3VsdCk7IC8vIHJlc3VsdCAtINCw0YDQs9GD0LzQtdC90YIgcmVzb2x2ZVxuLy8gXHRcdH0sXG4vLyBcdFx0ZXJyb3IgPT4ge1xuLy8gXHRcdFx0Ly8g0LLRgtC+0YDQsNGPINGE0YPQvdC60YbQuNGPIC0g0LfQsNC/0YPRgdGC0LjRgtGB0Y8g0L/RgNC4INCy0YvQt9C+0LLQtSByZWplY3Rcbi8vIFx0XHRcdGFsZXJ0KFwiUmVqZWN0ZWQ6IFwiICsgZXJyb3IpOyAvLyBlcnJvciAtINCw0YDQs9GD0LzQtdC90YIgcmVqZWN0XG4vLyBcdFx0fVxuLy8gXHQpO1xuXG5cbi8vIGZ1bmN0aW9uIHVuaXF1ZShhcnIpIHtcbi8vICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnIpKTtcbi8vIH1cbi8vXG4vLyBsZXQgdmFsdWVzID0gW1wiSGFyZVwiLCBcIktyaXNobmFcIiwgXCJIYXJlXCIsIFwiS3Jpc2huYVwiLFxuLy8gICBcIktyaXNobmFcIiwgXCJLcmlzaG5hXCIsIFwiSGFyZVwiLCBcIkhhcmVcIiwgXCI6LU9cIlxuLy8gXTtcbi8vXG4vLyBhbGVydCggdW5pcXVlKHZhbHVlcykgKTsgLy8gSGFyZSwgS3Jpc2huYSwgOi1PXG5cblxuLy8gZnVuY3Rpb24gYWNsZWFuKGFycikge1xuLy8gICBsZXQgbWFwID0gbmV3IE1hcCgpO1xuLy9cbi8vICAgZm9yIChsZXQgd29yZCBvZiBhcnIpIHtcbi8vICAgICAvLyBzcGxpdCB0aGUgd29yZCBieSBsZXR0ZXJzLCBzb3J0IHRoZW0gYW5kIGpvaW4gYmFja1xuLy8gICAgIGxldCBzb3J0ZWQgPSB3b3JkLnRvTG93ZXJDYXNlKCkuc3BsaXQoJycpLnNvcnQoKS5qb2luKCcnKTsgLy8gKCopXG4vLyAgICAgbWFwLnNldChzb3J0ZWQsIHdvcmQpO1xuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gQXJyYXkuZnJvbShtYXAudmFsdWVzKCkpO1xuLy8gfVxuLy9cbi8vXG4vLyBsZXQgYXJyID0gW1wibmFwXCIsIFwidGVhY2hlcnNcIiwgXCJjaGVhdGVyc1wiLCBcIlBBTlwiLCBcImVhclwiLCBcImVyYVwiLCBcImhlY3RhcmVzXCJdO1xuLy9cbi8vIGFsZXJ0KCBhY2xlYW4oYXJyKSApOyAvLyBcIm5hcCx0ZWFjaGVycyxlYXJcIiBvciBcIlBBTixjaGVhdGVycyxlcmFcIlxuXG5cbi8vIGxldCBtYXAgPSBuZXcgTWFwKCk7XG4vL1xuLy8gbWFwLnNldChcIm5hbWVcIiwgXCJKb2huXCIpO1xuLy9cbi8vIGxldCBrZXlzID0gQXJyYXkuZnJvbShtYXAua2V5cygpKTtcbi8vXG4vLyBrZXlzLnB1c2goXCJtb3JlXCIpO1xuLy9cbi8vIGFsZXJ0KGtleXMpOyAvLyBuYW1lLCBtb3JlXG5cblxuLy8gbGV0IG1lc3NhZ2VzID0gW1xuLy8gICAgIHt0ZXh0OiBcIkhlbGxvXCIsIGZyb206IFwiSm9oblwifSxcbi8vICAgICB7dGV4dDogXCJIb3cgZ29lcz9cIiwgZnJvbTogXCJKb2huXCJ9LFxuLy8gICAgIHt0ZXh0OiBcIlNlZSB5b3Ugc29vblwiLCBmcm9tOiBcIkFsaWNlXCJ9XG4vLyBdO1xuLy9cbi8vIGxldCByZWFkTWVzc2FnZXMgPSBuZXcgV2Vha1NldCgpO1xuLy9cbi8vIC8vIHR3byBtZXNzYWdlcyBoYXZlIGJlZW4gcmVhZFxuLy8gcmVhZE1lc3NhZ2VzLmFkZChtZXNzYWdlc1swXSk7XG4vLyByZWFkTWVzc2FnZXMuYWRkKG1lc3NhZ2VzWzFdKTtcbi8vIC8vIHJlYWRNZXNzYWdlcyBoYXMgMiBlbGVtZW50c1xuLy9cbi8vIC8vIC4uLmxldCdzIHJlYWQgdGhlIGZpcnN0IG1lc3NhZ2UgYWdhaW4hXG4vLyByZWFkTWVzc2FnZXMuYWRkKG1lc3NhZ2VzWzBdKTtcbi8vIC8vIHJlYWRNZXNzYWdlcyBzdGlsbCBoYXMgMiB1bmlxdWUgZWxlbWVudHNcbi8vXG4vLyAvLyBhbnN3ZXI6IHdhcyB0aGUgbWVzc2FnZVswXSByZWFkP1xuLy8gYWxlcnQoXCJSZWFkIG1lc3NhZ2UgMDogXCIgKyByZWFkTWVzc2FnZXMuaGFzKG1lc3NhZ2VzWzBdKSk7IC8vIHRydWVcbi8vXG4vLyBtZXNzYWdlcy5zaGlmdCgpO1xuLy8gLy8gbm93IHJlYWRNZXNzYWdlcyBoYXMgMSBlbGVtZW50ICh0ZWNobmljYWxseSBtZW1vcnkgbWF5IGJlIGNsZWFuZWQgbGF0ZXIpXG5cblxuLy8gbGV0IG1lc3NhZ2VzID0gW1xuLy8gICAgIHt0ZXh0OiBcIkhlbGxvXCIsIGZyb206IFwiSm9oblwifSxcbi8vICAgICB7dGV4dDogXCJIb3cgZ29lcz9cIiwgZnJvbTogXCJKb2huXCJ9LFxuLy8gICAgIHt0ZXh0OiBcIlNlZSB5b3Ugc29vblwiLCBmcm9tOiBcIkFsaWNlXCJ9XG4vLyBdO1xuLy9cbi8vIGxldCByZWFkTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8vXG4vLyByZWFkTWFwLnNldChtZXNzYWdlc1swXSwgbmV3IERhdGUoMjAxNywgMSwgMSkpO1xuLy8gY29uc29sZS5sb2cocmVhZE1hcC5nZXQobWVzc2FnZXNbMF0pKTtcblxuXG4vLy8vLy8vLy8vLy9BcnJheS5mcm9tKG9ialssIG1hcEZuLCB0aGlzQXJnXSkvLy8vLy8vLy8vLy8vXG4vLyBsZXQgYXJyYXlMaWtlID0ge1xuLy8gICAwOiBcIkhlbGxvXCIsXG4vLyAgIDE6IFwiV29ybGRcIixcbi8vICAgMjogMSxcbi8vICAgbGVuZ3RoOiAzXG4vLyB9O1xuLy9cbi8vIGxldCBhcnIgPSBBcnJheS5mcm9tKGFycmF5TGlrZSk7IC8vICgqKVxuLy8gY29uc29sZS5sb2coYXJyKTtcbi8vQXJyYXkuZnJvbShvYmpbLCBtYXBGbiwgdGhpc0FyZ10pIG1ha2VzIGEgcmVhbCBBcnJheSBvZiBhbiBpdGVyYWJsZSBvclxuLy9hcnJheS1saWtlIG9iaiwgYW5kIHdlIGNhbiB0aGVuIHVzZSBhcnJheSBtZXRob2RzIG9uIGl0LiBUXG4vL2hlIG9wdGlvbmFsIGFyZ3VtZW50cyBtYXBGbiBhbmQgdGhpc0FyZyBhbGxvdyB1cyB0byBhcHBseSBhIGZ1bmN0aW9uIHRvIGVhY2ggaXRlbS5cblxuXG4vLyAvLyDRgtC10LrRg9GJ0LjQtSDQsNC60YLQuNCy0L3Ri9C1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQuFxuLy8gbGV0IGFjdGl2ZVVzZXJzID0gW1xuLy8gICB7bmFtZTogXCLQktCw0YHRj1wifSxcbi8vICAge25hbWU6IFwi0J/QtdGC0Y9cIn0sXG4vLyAgIHtuYW1lOiBcItCc0LDRiNCwXCJ9XG4vLyBdO1xuLy9cbi8vIC8vINCy0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90LDRjyDQuNC90YTQvtGA0LzQsNGG0LjRjyDQviDQvdC40YUsXG4vLyAvLyDQutC+0YLQvtGA0LDRjyDQvdCw0L/RgNGP0LzRg9GOINC90LUg0LLRhdC+0LTQuNGCINCyINC+0LHRitC10LrRgiDRjtC30LXRgNCwLFxuLy8gLy8g0Lgg0L/QvtGC0L7QvNGDINGF0YDQsNC90LjRgtGB0Y8g0L7RgtC00LXQu9GM0L3QvlxuLy8gbGV0IHdlYWtNYXAgPSBuZXcgV2Vha01hcCgpO1xuLy9cbi8vIHdlYWtNYXAuc2V0KGFjdGl2ZVVzZXJzWzBdLCAxKTtcbi8vIHdlYWtNYXAuc2V0KGFjdGl2ZVVzZXJzWzFdLCAyKTtcbi8vIHdlYWtNYXAuc2V0KGFjdGl2ZVVzZXJzWzJdLCAzKTtcbi8vIHdlYWtNYXAuc2V0KCdLYXR5YScsIDQpOyAvL9CR0YPQtNC10YIg0L7RiNC40LHQutCwIFR5cGVFcnJvcjogXCJLYXR5YVwiIGlzIG5vdCBhIG5vbi1udWxsIG9iamVjdFxuLy9cbi8vIGFsZXJ0KCB3ZWFrTWFwLmdldChhY3RpdmVVc2Vyc1swXSkgKTsgLy8gMVxuLy9cbi8vIGFjdGl2ZVVzZXJzLnNwbGljZSgwLCAxKTsgLy8g0JLQsNGB0Y8g0LHQvtC70LXQtSDQvdC1INCw0LrRgtC40LLQvdGL0Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMXG4vL1xuLy8gLy8gd2Vha01hcCDRgtC10L/QtdGA0Ywg0YHQvtC00LXRgNC20LjRgiDRgtC+0LvRjNC60L4gMiDRjdC70LXQvNC10L3RgtCwXG4vL1xuLy8gYWN0aXZlVXNlcnMuc3BsaWNlKDAsIDEpOyAvLyDQn9C10YLRjyDQsdC+0LvQtdC1INC90LUg0LDQutGC0LjQstC90YvQuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Yxcbi8vXG4vLyAvLyB3ZWFrTWFwINGC0LXQv9C10YDRjCDRgdC+0LTQtdGA0LbQuNGCINGC0L7Qu9GM0LrQviAxINGN0LvQtdC80LXQvdGCXG5cblxuXG4vLyBsZXQgc2V0ID0gbmV3IFNldChbXCLQsNC/0LXQu9GM0YHQuNC90YtcIiwgXCLRj9Cx0LvQvtC60LhcIiwgXCLQsdCw0L3QsNC90YtcIl0pO1xuLy9cbi8vIC8vINGC0L4g0LbQtSwg0YfRgtC+OiBmb3IobGV0IHZhbHVlIG9mIHNldClcbi8vIC8vIGZvciAobGV0IHZhbHVlIG9mIHNldCkge1xuLy8gLy8gICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4vLyAvLyB9XG4vL1xuLy8gLy8gc2V0LmZvckVhY2goKHZhbHVlLCB2YWx1ZUFnYWluLCBzZXQpID0+IHtcbi8vIC8vICAgYWxlcnQodmFsdWUpOyAvLyDQsNC/0LXQu9GM0YHQuNC90YssINC30LDRgtC10Lwg0Y/QsdC70L7QutC4LCDQt9Cw0YLQtdC8INCx0LDQvdCw0L3Ri1xuLy8gLy8gfSk7XG5cblxuLy8gbGV0IHNldCA9IG5ldyBTZXQoKTtcbi8vXG4vLyBsZXQgdmFzeWEgPSB7bmFtZTogXCLQktCw0YHRj1wifTtcbi8vIGxldCBwZXR5YSA9IHtuYW1lOiBcItCf0LXRgtGPXCJ9O1xuLy8gbGV0IGRhc2hhID0ge25hbWU6IFwi0JTQsNGI0LBcIn07XG4vL1xuLy8gLy8g0L/QvtGB0LXRidC10L3QuNGPLCDQvdC10LrQvtGC0L7RgNGL0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C4INC30LDRhdC+0LTRj9GCINC80L3QvtCz0L4g0YDQsNC3XG4vLyBzZXQuYWRkKHZhc3lhKTtcbi8vIHNldC5hZGQocGV0eWEpO1xuLy8gc2V0LmFkZChkYXNoYSk7XG4vLyBzZXQuYWRkKHZhc3lhKTtcbi8vIHNldC5hZGQocGV0eWEpO1xuLy9cbi8vIC8vIHNldCDRgdC+0YXRgNCw0L3Rj9C10YIg0YLQvtC70YzQutC+INGD0L3QuNC60LDQu9GM0L3Ri9C1INC30L3QsNGH0LXQvdC40Y9cbi8vIGFsZXJ0KCBzZXQuc2l6ZSApOyAvLyAzXG4vL1xuLy8gc2V0LmZvckVhY2goIHVzZXIgPT4gYWxlcnQodXNlci5uYW1lICkgKTsgLy8g0JLQsNGB0Y8sINCf0LXRgtGPLCDQlNCw0YjQsFxuXG5cbi8vIGxldCByZWNpcGVNYXAgPSBuZXcgTWFwKFtcbi8vICAgWyfQvtCz0YPRgNGG0L7QsicsICAgJzUwMCDQs9GAJ10sXG4vLyAgIFsn0L/QvtC80LjQtNC+0YDQvtCyJywgJzM1MCDQs9GAJ10sXG4vLyAgIFsn0YHQvNC10YLQsNC90YsnLCAgICc1MCDQs9GAJ11cbi8vIF0pO1xuLy9cbi8vIC8vINGG0LjQutC7INC/0L4g0LrQu9GO0YfQsNC8XG4vLyBmb3IobGV0IGZydWl0IG9mIHJlY2lwZU1hcC5rZXlzKCkpIHtcbi8vICAgYWxlcnQoZnJ1aXQpOyAvLyDQvtCz0YPRgNGG0L7Qsiwg0L/QvtC80LjQtNC+0YDQvtCyLCDRgdC80LXRgtCw0L3Ri1xuLy8gfVxuLy9cbi8vIC8vINGG0LjQutC7INC/0L4g0LfQvdCw0YfQtdC90LjRj9C8XG4vLyBmb3IobGV0IGFtb3VudCBvZiByZWNpcGVNYXAudmFsdWVzKCkpIHtcbi8vICAgYWxlcnQoYW1vdW50KTsgLy8gNTAwINCz0YAsIDM1MCDQs9GALCA1MCDQs9GAXG4vLyB9XG4vL1xuLy8gLy8g0YbQuNC60Lsg0L/QviDQt9Cw0L/QuNGB0Y/QvCBb0LrQu9GO0Ycs0LfQvdCw0YfQtdC90LjQtV1cbi8vIGZvcihsZXQgZW50cnkgb2YgcmVjaXBlTWFwKSB7IC8vINGC0L4g0LbQtSDRh9GC0L4g0LggcmVjaXBlTWFwLmVudHJpZXMoKVxuLy8gICBhbGVydChlbnRyeSk7IC8vINC+0LPRg9GA0YbQvtCyLDUwMCDQs9GAICwg0Lgg0YIu0LQuLCDQvNCw0YHRgdC40LLRiyDQv9C+IDIg0LfQvdCw0YfQtdC90LjRj1xuLy8gfVxuXG5cbi8vIGxldCBpc0FkbWluID0gU3ltYm9sKFwiaXNBZG1pblwiKTtcbi8vXG4vLyBsZXQgdXNlciA9IHtcbi8vICAgbmFtZTogXCLQktCw0YHRj1wiLFxuLy8gICBbaXNBZG1pbl06IHRydWUsXG4vLyAgIGlzQWRtaW46IGZhbHNlXG4vLyB9O1xuLy9cbi8vIGFsZXJ0KHVzZXJbaXNBZG1pbl0pOyAvLyB0cnVlXG4vLyBhbGVydCh1c2VyLmlzQWRtaW4pOyAvLyBmYWxzZVxuXG5cbi8vIGxldCByYW5nZSA9IHtcbi8vICAgZnJvbTogMSxcbi8vICAgdG86IDEwXG4vLyB9XG4vL1xuLy8gLy8g0YHQtNC10LvQsNC10Lwg0L7QsdGK0LXQutGCIHJhbmdlINC40YLQtdGA0LjRgNGD0LXQvNGL0Lxcbi8vIHJhbmdlW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbi8vXG4vLyAgIGxldCBjdXJyZW50ID0gdGhpcy5mcm9tO1xuLy8gICBsZXQgbGFzdCA9IHRoaXMudG87XG4vL1xuLy8gICAvLyDQvNC10YLQvtC0INC00L7Qu9C20LXQvSDQstC10YDQvdGD0YLRjCDQvtCx0YrQtdC60YIg0YEg0LzQtdGC0L7QtNC+0LwgbmV4dCgpXG4vLyAgIHJldHVybiB7XG4vLyAgICAgbmV4dCgpIHtcbi8vICAgICAgIGlmIChjdXJyZW50IDw9IGxhc3QpIHtcbi8vICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICBkb25lOiBmYWxzZSxcbi8vICAgICAgICAgICB2YWx1ZTogY3VycmVudCsrXG4vLyAgICAgICAgIH07XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgIGRvbmU6IHRydWVcbi8vICAgICAgICAgfTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH07XG4vL1xuLy8gZm9yIChsZXQgbnVtIG9mIHJhbmdlKSB7XG4vLyAgIGNvbnNvbGUubG9nKG51bSk7IC8vIDEsINC30LDRgtC10LwgMiwgMywgNCwgNVxuLy8gfVxuLy8gY29uc29sZS5sb2coIE1hdGgubWF4KC4uLnJhbmdlKSApO1xuXG5cbi8vIGZ1bmN0aW9uIHNob3dNZW51KHt0aXRsZT1cItCX0LDQs9C+0LvQvtCy0L7QulwiLCB3aWR0aDp3PTEwMCwgaGVpZ2h0Omg9MjAwfSA9IHt9KSB7XG4vLyAgIGFsZXJ0KHRpdGxlICsgJyAnICsgdyArICcgJyArIGgpO1xuLy8gfVxuLy9cbi8vIHNob3dNZW51KCk7IC8vINCX0LDQs9C+0LvQvtCy0L7QuiAxMDAgMjAwXG5cblxuLy8gLy8vLy8vLy8vL1NQUkVBRCBGT1IgT0JKRUNUUy8vLy8vLy8vLy9cbi8vIGxldCBvcHRpb25zID0ge1xuLy8gICB0aXRsZTogXCLQnNC10L3RjlwiLFxuLy8gICB3aWR0aDogMTAwLFxuLy8gICBoZWlnaHQ6IDIwMFxuLy8gfTtcbi8vXG4vLyBsZXQge3RpdGxlLCAuLi5zaXplfSA9IG9wdGlvbnM7XG4vL1xuLy8gY29uc29sZS5sb2coc2l6ZSk7XG4vLyBzaXplID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDIwMH0gKNC+0YHRgtCw0YLQvtC6KVxuXG5cbi8vIHZhciBldmVudE1peGluID0ge1xuLy9cbi8vICAgLyoqXG4vLyAgICAqINCf0L7QtNC/0LjRgdC60LAg0L3QsCDRgdC+0LHRi9GC0LjQtVxuLy8gICAgKiDQmNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtTpcbi8vICAgICogIG1lbnUub24oJ3NlbGVjdCcsIGZ1bmN0aW9uKGl0ZW0pIHsgLi4uIH1cbi8vICAgICovXG4vLyAgIG9uOiBmdW5jdGlvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcbi8vICAgICBpZiAoIXRoaXMuX2V2ZW50SGFuZGxlcnMpIHRoaXMuX2V2ZW50SGFuZGxlcnMgPSB7fTtcbi8vICAgICBpZiAoIXRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSkge1xuLy8gICAgICAgdGhpcy5fZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdID0gW107XG4vLyAgICAgfVxuLy8gICAgIHRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXS5wdXNoKGhhbmRsZXIpO1xuLy8gICB9LFxuLy9cbi8vICAgLyoqXG4vLyAgICAqINCf0YDQtdC60YDQsNGJ0LXQvdC40LUg0L/QvtC00L/QuNGB0LrQuFxuLy8gICAgKiAgbWVudS5vZmYoJ3NlbGVjdCcsICBoYW5kbGVyKVxuLy8gICAgKi9cbi8vICAgb2ZmOiBmdW5jdGlvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcbi8vICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLl9ldmVudEhhbmRsZXJzICYmIHRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXTtcbi8vICAgICBpZiAoIWhhbmRsZXJzKSByZXR1cm47XG4vLyAgICAgZm9yKHZhciBpPTA7IGk8aGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIGlmIChoYW5kbGVyc1tpXSA9PSBoYW5kbGVyKSB7XG4vLyAgICAgICAgIGhhbmRsZXJzLnNwbGljZShpLS0sIDEpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfSxcbi8vXG4vLyAgIC8qKlxuLy8gICAgKiDQk9C10L3QtdGA0LDRhtC40Y8g0YHQvtCx0YvRgtC40Y8g0YEg0L/QtdGA0LXQtNCw0YfQtdC5INC00LDQvdC90YvRhVxuLy8gICAgKiAgdGhpcy50cmlnZ2VyKCdzZWxlY3QnLCBpdGVtKTtcbi8vICAgICovXG4vLyAgIHRyaWdnZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSAvKiwgLi4uICovKSB7XG4vL1xuLy8gICAgIGlmICghdGhpcy5fZXZlbnRIYW5kbGVycyB8fCAhdGhpcy5fZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdKSB7XG4vLyAgICAgICByZXR1cm47IC8vINC+0LHRgNCw0LHQvtGC0YfQuNC60L7QsiDQtNC70Y8g0YHQvtCx0YvRgtC40Y8g0L3QtdGCXG4vLyAgICAgfVxuLy9cbi8vICAgICAvLyDQstGL0LfQstCw0YLRjCDQvtCx0YDQsNCx0L7RgtGH0LjQutC4XG4vLyAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5fZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdO1xuLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIGhhbmRsZXJzW2ldLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4vLyAgICAgfVxuLy9cbi8vICAgfVxuLy8gfTtcbi8vXG4vLyAvLyDQmtC70LDRgdGBIE1lbnUg0YEg0L/RgNC40LzQtdGB0YzRjiBldmVudE1peGluXG4vLyBmdW5jdGlvbiBNZW51KCkge1xuLy8gICAvLyAuLi5cbi8vIH1cbi8vXG4vLyBmb3IodmFyIGtleSBpbiBldmVudE1peGluKSB7XG4vLyAgIE1lbnUucHJvdG90eXBlW2tleV0gPSBldmVudE1peGluW2tleV07XG4vLyB9XG4vL1xuLy8gLy8g0JPQtdC90LXRgNC40YDRg9C10YIg0YHQvtCx0YvRgtC40LUgc2VsZWN0INC/0YDQuCDQstGL0LHQvtGA0LUg0LfQvdCw0YfQtdC90LjRj1xuLy8gTWVudS5wcm90b3R5cGUuY2hvb3NlID0gZnVuY3Rpb24odmFsdWUpIHtcbi8vICAgdGhpcy50cmlnZ2VyKFwic2VsZWN0XCIsIHZhbHVlKTtcbi8vIH1cbi8vXG4vLyAvLyDQodC+0LfQtNCw0LTQuNC8INC80LXQvdGOXG4vLyB2YXIgbWVudSA9IG5ldyBNZW51KCk7XG4vL1xuLy8gLy8g0J/RgNC4INC90LDRgdGC0YPQv9C70LXQvdC40Lgg0YHQvtCx0YvRgtC40Y8gc2VsZWN0INCy0YvQt9Cy0LDRgtGMINGN0YLRgyDRhNGD0L3QutGG0LjRjlxuLy8gbWVudS5vbihcInNlbGVjdFwiLCBmdW5jdGlvbih2YWx1ZSkge1xuLy8gICBhbGVydChcItCS0YvQsdGA0LDQvdC+INC30L3QsNGH0LXQvdC40LUgXCIgKyB2YWx1ZSk7XG4vLyB9KTtcbi8vXG4vLyAvLyDQl9Cw0L/Rg9GB0LrQsNC10Lwg0LLRi9Cx0L7RgCAo0YHQvtCx0YvRgtC40LUgc2VsZWN0INCy0YvQt9C+0LLQtdGCINC+0LHRgNCw0LHQvtGC0YfQuNC60LgpXG4vLyBtZW51LmNob29zZShcIjEyM1wiKTtcblxuXG5cbi8vIGZ1bmN0aW9uIG1ha2VUaW1lcih3YWl0KSB7XG4vLyAgIGxldCBjb3VudGVyID0gMDtcbi8vICAgc2V0SW50ZXJ2YWwodGltZUl0LCB3YWl0KTtcbi8vICAgZnVuY3Rpb24gdGltZUl0KCkge1xuLy8gICAgIGNvbnNvbGUubG9nKGNvdW50ZXIrKyk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBtYWtlVGltZXIoMTAwMCk7XG5cblxuLy8gLy8g0L/RgNC40LzQtdGB0Yxcbi8vIHZhciBzYXlIaU1peGluID0ge1xuLy8gICBzYXlIaTogZnVuY3Rpb24oKSB7XG4vLyAgICAgYWxlcnQoXCLQn9GA0LjQstC10YIgXCIgKyB0aGlzLm5hbWUpO1xuLy8gICB9LFxuLy8gICBzYXlCeWU6IGZ1bmN0aW9uKCkge1xuLy8gICAgIGFsZXJ0KFwi0J/QvtC60LAgXCIgKyB0aGlzLm5hbWUpO1xuLy8gICB9XG4vLyB9O1xuLy9cbi8vIC8vINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC1OlxuLy8gZnVuY3Rpb24gVXNlcihuYW1lKSB7XG4vLyAgIHRoaXMubmFtZSA9IG5hbWU7XG4vLyB9XG4vL1xuLy8gLy8g0L/QtdGA0LXQtNCw0YLRjCDQvNC10YLQvtC00Ysg0L/RgNC40LzQtdGB0Lhcbi8vIGZvcih2YXIga2V5IGluIHNheUhpTWl4aW4pIFVzZXIucHJvdG90eXBlW2tleV0gPSBzYXlIaU1peGluW2tleV07XG4vL1xuLy8gLy8gVXNlciBcItGD0LzQtdC10YJcIiBzYXlIaVxuLy8gbmV3IFVzZXIoXCLQktCw0YHRj1wiKS5zYXlIaSgpOyAvLyDQn9GA0LjQstC10YIg0JLQsNGB0Y9cbi8vIG5ldyBVc2VyKFwi0JLQsNGB0Y9cIikuc2F5QnllKCk7IC8vINCf0L7QutCwINCS0LDRgdGPXG5cblxuLy8gZnVuY3Rpb24gRm9ybWF0RXJyb3IobWVzc2FnZSkge1xuLy8gICB0aGlzLm5hbWUgPSBcIkZvcm1hdEVycm9yXCI7XG4vL1xuLy8gICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuLy9cbi8vICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4vLyAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgdGhpcy5zdGFjayA9IChuZXcgRXJyb3IoKSkuc3RhY2s7XG4vLyAgIH1cbi8vXG4vLyB9XG4vL1xuLy8gRm9ybWF0RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTeW50YXhFcnJvci5wcm90b3R5cGUpO1xuLy8gRm9ybWF0RXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRm9ybWF0RXJyb3I7XG4vL1xuLy8gLy8g0JjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LVcbi8vXG4vLyB2YXIgZXJyID0gbmV3IEZvcm1hdEVycm9yKFwi0L7RiNC40LHQutCwINGE0L7RgNC80LDRgtC40YDQvtCy0LDQvdC40Y9cIik7XG4vL1xuLy8gYWxlcnQoIGVyci5tZXNzYWdlICk7IC8vINC+0YjQuNCx0LrQsCDRhNC+0YDQvNCw0YLQuNGA0L7QstCw0L3QuNGPXG4vLyBhbGVydCggZXJyLm5hbWUgKTsgLy8gRm9ybWF0RXJyb3Jcbi8vIGFsZXJ0KCBlcnIuc3RhY2sgKTsgLy8g0YHRgtC10Log0L3QsCDQvNC+0LzQtdC90YIg0LPQtdC90LXRgNCw0YbQuNC4INC+0YjQuNCx0LrQuFxuLy9cbi8vIGFsZXJ0KCBlcnIgaW5zdGFuY2VvZiBTeW50YXhFcnJvciApOyAvLyB0cnVlXG5cblxuLy8gZnVuY3Rpb24gQW5pbWFsKG5hbWUpIHtcbi8vICAgdGhpcy5uYW1lID0gbmFtZTtcbi8vIH1cbi8vXG4vLyBBbmltYWwucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbigpIHtcbi8vICAgYWxlcnQoIFwi0YXQvtC00LjRgiBcIiArIHRoaXMubmFtZSApO1xuLy8gfTtcbi8vXG4vLyBmdW5jdGlvbiBSYWJiaXQobmFtZSkge1xuLy8gICB0aGlzLm5hbWUgPSBuYW1lO1xuLy8gfVxuLy9cbi8vIFJhYmJpdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFuaW1hbC5wcm90b3R5cGUpO1xuLy8gLy8gUmFiYml0LnByb3RvdHlwZSA9IEFuaW1hbDsgPz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/P1xuLy9cbi8vIFJhYmJpdC5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uKCkge1xuLy8gICBhbGVydCggXCLQv9GA0YvQs9Cw0LXRgiEg0Lgg0YXQvtC00LjRgjogXCIgKyB0aGlzLm5hbWUgKTtcbi8vIH07XG4vL1xuLy8gbGV0IGFuaW1hbCA9IG5ldyBBbmltYWwoJ0tyb2wnKTtcbi8vIGFuaW1hbC53YWxrKCk7XG5cblxuLy8gZnVuY3Rpb24gQSgpIHt9XG4vL1xuLy8gZnVuY3Rpb24gQigpIHt9XG4vL1xuLy8gQS5wcm90b3R5cGUgPSBCLnByb3RvdHlwZTtcbi8vXG4vLyB2YXIgYiA9IG5ldyBCKCk7XG4vLyB2YXIgYSA9IG5ldyBBKCk7XG4vL1xuLy8gYWxlcnQoIGEgaW5zdGFuY2VvZiBCICk7IC8vIHRydWVcblxuXG4vLyBSYWJiaXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBbmltYWwucHJvdG90eXBlKTtcbi8vUmFiYml0LnByb3RvdHlwZSDRg9C60LDQt9GL0LLQsNC10YIg0L3QsCDQvdC+0LLRi9C5INC+0LHRitC10LrRgiDRgSDQv9GA0L7RgtC+0YLQuNC/0L7QvCAoQW5pbWFsLnByb3RvdHlwZSlcbi8vcmFiYml0Ll9fcHJvdG9fXyA9IG9iamVjdChBbmltYWwucHJvdG90eXBlKVxuLy9cblxuXG4vLyBmdW5jdGlvbiBIYW1zdGVyKCkge31cbi8vXG4vLyBIYW1zdGVyLnByb3RvdHlwZS5mb29kID0gW107IC8vINC/0YPRgdGC0L7QuSBcItC20LjQstC+0YJcIlxuLy9cbi8vIEhhbXN0ZXIucHJvdG90eXBlLmZvdW5kID0gZnVuY3Rpb24oc29tZXRoaW5nKSB7XG4vLyAgIHRoaXMuZm9vZC5wdXNoKHNvbWV0aGluZyk7XG4vLyB9O1xuLy9cbi8vIC8vINCh0L7Qt9C00LDRkdC8INC00LLRg9GFINGF0L7QvNGP0LrQvtCyINC4INC60L7RgNC80LjQvCDQv9C10YDQstC+0LPQvlxuLy8gdmFyIHNwZWVkeSA9IG5ldyBIYW1zdGVyKCk7XG4vLyB2YXIgbGF6eSA9IG5ldyBIYW1zdGVyKCk7XG4vL1xuLy8gc3BlZWR5LmZvdW5kKFwi0Y/QsdC70L7QutC+XCIpO1xuLy8gc3BlZWR5LmZvdW5kKFwi0L7RgNC10YVcIik7XG4vL1xuLy8gYWxlcnQoIHNwZWVkeS5mb29kLmxlbmd0aCApOyAvLyAyXG4vLyBhbGVydCggbGF6eS5mb29kLmxlbmd0aCApOyAvLyAyICghPz8pXG4vL1xuLy8gLy8gMSnQmNC90YLQtdGA0L/RgNC10YLQsNGC0L7RgCDQuNGJ0LXRgiDRgdCy0L7QudGB0YLQstC+IGZvdW5kINCyIHNwZWVkeS4g0J3QviBzcGVlZHkg4oCTINC/0YPRgdGC0L7QuSDQvtCx0YrQtdC60YIsINGCLtC6LlxuLy8gLy8gbmV3IEhhbXN0ZXIg0L3QuNGH0LXQs9C+INC90LUg0LTQtdC70LDQtdGCINGBIHRoaXMuXG4vLyAvLyAyKdCY0L3RgtC10YDQv9GA0LXRgtCw0YLQvtGAINC40LTRkdGCINC/0L4g0YHRgdGL0LvQutC1IHNwZWVkeS5fX3Byb3RvX18gKD09SGFtc3Rlci5wcm90b3R5cGUpINC4XG4vLyAvL9C90LDRhdC+0LTRj9GCINGC0LDQvCDQvNC10YLQvtC0IGZvdW5kLCDQt9Cw0L/Rg9GB0LrQsNC10YIg0LXQs9C+LlxuLy8gLy8gMynQl9C90LDRh9C10L3QuNC1IHRoaXMg0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YLRgdGPINCyINC+0LHRitC10LrRgiDQv9C10YDQtdC0INGC0L7Rh9C60L7QuSwg0YIu0LUuINCyIHNwZWVkeS5cbi8vIC8vIDQp0JTQu9GPINCy0YvQv9C+0LvQvdC10L3QuNGPIHRoaXMuZm9vZC5wdXNoKCkg0L3Rg9C20L3QviDQvdCw0LnRgtC4INGB0LLQvtC50YHRgtCy0L4gdGhpcy5mb29kLlxuLy8gLy/QntC90L4g0L7RgtGB0YPRgtGB0YLQstGD0LXRgiDQsiBzcGVlZHksINC90L4g0LXRgdGC0Ywg0LIgc3BlZWR5Ll9fcHJvdG9fXy5cbi8vIC8vIDUp0JfQvdCw0YfQtdC90LjQtSBcItGP0LHQu9C+0LrQvlwiINC00L7QsdCw0LLQu9GP0LXRgtGB0Y8g0LIgc3BlZWR5Ll9fcHJvdG9fXy5mb29kLlxuLy8gLy/RgdCy0L7QudGB0YLQstC+IGZvb2Qg0LjQt9C80LXQvdGP0LXRgtGB0Y8g0LIg0L/RgNC+0YLQvtGC0LjQv9C1LCDQutC+0YLQvtGA0YvQuSDRj9Cy0LvRj9C10YLRgdGPINC+0LHRidC40Lwg0LTQu9GPINCy0YHQtdGFINC+0LHRitC10LrRgtC+0LIt0YXQvtC80Y/QutC+0LIuXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9GSVgvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIGZ1bmN0aW9uIEhhbXN0ZXIoKSB7XG4vLyAgIHRoaXMuZm9vZCA9IFtdO1xuLy8gfVxuLy9cbi8vIEhhbXN0ZXIucHJvdG90eXBlLmZvdW5kID0gZnVuY3Rpb24oc29tZXRoaW5nKSB7XG4vLyAgIHRoaXMuZm9vZC5wdXNoKHNvbWV0aGluZyk7XG4vLyB9O1xuLy9cbi8vIHZhciBzcGVlZHkgPSBuZXcgSGFtc3RlcigpO1xuLy8gdmFyIGxhenkgPSBuZXcgSGFtc3RlcigpO1xuLy9cbi8vIHNwZWVkeS5mb3VuZChcItGP0LHQu9C+0LrQvlwiKTtcbi8vIHNwZWVkeS5mb3VuZChcItC+0YDQtdGFXCIpO1xuLy9cbi8vIGFsZXJ0KHNwZWVkeS5mb29kLmxlbmd0aCkgLy8gMlxuLy8gYWxlcnQobGF6eS5mb29kLmxlbmd0aCkgLy8gMCghKVxuLy8gLy/QlNC70Y8g0LjRgdC/0YDQsNCy0LvQtdC90LjRjyDQv9GA0L7QsdC70LXQvNGLINC90YPQttC90L4g0LTQsNGC0Ywg0LrQsNC20LTQvtC80YMg0YXQvtC80Y/QutGDINGB0LLQvtC5INC20LjQstC+0YIuXG4vLyAvL9Ct0YLQviDQvNC+0LbQvdC+INGB0LTQtdC70LDRgtGMLCDQv9GA0LjRgdCy0L7QuNCyINC10LPQviDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LUuXG5cblxuLy8gZnVuY3Rpb24gQ29mZmVlTWFjaGluZShwb3dlcikge1xuLy8gICB0aGlzLl9wb3dlciA9IHBvd2VyO1xuLy8gICB0aGlzLl93YXRlckFtb3VudCA9IDA7XG4vLyB9XG4vL1xuLy8gQ29mZmVlTWFjaGluZS5wcm90b3R5cGUuV0FURVJfSEVBVF9DQVBBQ0lUWSA9IDQyMDA7XG4vL1xuLy8gQ29mZmVlTWFjaGluZS5wcm90b3R5cGUuX2dldFRpbWVUb0JvaWwgPSBmdW5jdGlvbigpIHtcbi8vICAgcmV0dXJuIHRoaXMuX3dhdGVyQW1vdW50ICogdGhpcy5XQVRFUl9IRUFUX0NBUEFDSVRZICogODAgLyB0aGlzLl9wb3dlcjtcbi8vIH1cbi8vXG4vLyBDb2ZmZWVNYWNoaW5lLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbigpIHtcbi8vICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbi8vICAgICBhbGVydCggJ9Ca0L7RhNC1INCz0L7RgtC+0LIhJyApO1xuLy8gICB9LCB0aGlzLl9nZXRUaW1lVG9Cb2lsKCkpO1xuLy8gfTtcbi8vXG4vLyBDb2ZmZWVNYWNoaW5lLnByb3RvdHlwZS5zZXRXYXRlckFtb3VudCA9IGZ1bmN0aW9uKGFtb3VudCkge1xuLy8gICB0aGlzLl93YXRlckFtb3VudCA9IGFtb3VudDtcbi8vIH07XG4vL1xuLy8gdmFyIGNvZmZlZU1hY2hpbmUgPSBuZXcgQ29mZmVlTWFjaGluZSgxMDAwMCk7XG4vLyBjb2ZmZWVNYWNoaW5lLnNldFdhdGVyQW1vdW50KDUwKTtcbi8vIGNvZmZlZU1hY2hpbmUucnVuKCk7XG5cblxuLy8g0LrQvtC90YHRgtGA0YPQutGC0L7RgFxuLy8gZnVuY3Rpb24gQW5pbWFsKG5hbWUpIHtcbi8vICAgdGhpcy5uYW1lID0gbmFtZTtcbi8vICAgdGhpcy5zcGVlZCA9IDA7XG4vLyB9XG4vL1xuLy8gLy8g0LzQtdGC0L7QtNGLINCyINC/0YDQvtGC0L7RgtC40L/QtVxuLy8gQW5pbWFsLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbihzcGVlZCkge1xuLy8gICB0aGlzLnNwZWVkICs9IHNwZWVkO1xuLy8gICBhbGVydCggdGhpcy5uYW1lICsgJyDQsdC10LbQuNGCLCDRgdC60L7RgNC+0YHRgtGMICcgKyB0aGlzLnNwZWVkICk7XG4vLyB9O1xuLy9cbi8vIEFuaW1hbC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuLy8gICB0aGlzLnNwZWVkID0gMDtcbi8vICAgYWxlcnQoIHRoaXMubmFtZSArICcg0YHRgtC+0LjRgicgKTtcbi8vIH07XG4vL1xuLy8gdmFyIGFuaW1hbCA9IG5ldyBBbmltYWwoJ9CX0LLQtdGA0YwnKTtcbi8vXG4vLyBhbGVydCggYW5pbWFsLnNwZWVkICk7IC8vIDAsINGB0LLQvtC50YHRgtCy0L4g0LLQt9GP0YLQviDQuNC3INC/0YDQvtGC0L7RgtC40L/QsFxuLy8gYW5pbWFsLnJ1big1KTsgLy8g0JfQstC10YDRjCDQsdC10LbQuNGCLCDRgdC60L7RgNC+0YHRgtGMIDVcbi8vIGFuaW1hbC5ydW4oNSk7IC8vINCX0LLQtdGA0Ywg0LHQtdC20LjRgiwg0YHQutC+0YDQvtGB0YLRjCAxMFxuLy8gYW5pbWFsLnN0b3AoKTsgLy8g0JfQstC10YDRjCDRgdGC0L7QuNGCXG5cblxuLy8gY2xhc3MgUmFiYml0IHtcbi8vICAgY29uc3RydWN0b3IobmFtZSkge1xuLy8gICAgIHRoaXMubmFtZSA9IG5hbWU7XG4vLyAgIH1cbi8vXG4vLyAgIHNheUhpKCkge1xuLy8gICAgIGFsZXJ0KHRoaXMubmFtZSk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBsZXQgcmFiYml0ID0gbmV3IFJhYmJpdChcIlJhYmJpdFwiKTtcbi8vXG4vLyByYWJiaXQuc2F5SGkoKTtcbi8vIFJhYmJpdC5wcm90b3R5cGUuc2F5SGkoKTtcbi8vIE9iamVjdC5nZXRQcm90b3R5cGVPZihyYWJiaXQpLnNheUhpKCk7XG4vLyByYWJiaXQuX19wcm90b19fLnNheUhpKCk7XG5cblxuLy8gZnVuY3Rpb24gTWFjaGluZShwb3dlcikge1xuLy8gICB0aGlzLl9wb3dlciA9IHBvd2VyO1xuLy8gICB0aGlzLl9lbmFibGVkID0gZmFsc2U7XG4vL1xuLy8gICB2YXIgc2VsZiA9IHRoaXM7XG4vL1xuLy8gICB0aGlzLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIHNlbGYuX2VuYWJsZWQgPSB0cnVlO1xuLy8gICB9O1xuLy9cbi8vICAgdGhpcy5kaXNhYmxlID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgc2VsZi5fZW5hYmxlZCA9IGZhbHNlO1xuLy8gICB9O1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIEZyaWRnZShwb3dlcikge1xuLy8gICAvLyDRg9C90LDRgdC70LXQtNC+0LLQsNGC0Yxcbi8vICAgTWFjaGluZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuLy9cbi8vICAgdmFyIGZvb2QgPSBbXTsgLy8g0L/RgNC40LLQsNGC0L3QvtC1INGB0LLQvtC50YHRgtCy0L4gZm9vZFxuLy9cbi8vICAgdGhpcy5hZGRGb29kID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgaWYgKCF0aGlzLl9lbmFibGVkKSB7XG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQpdC+0LvQvtC00LjQu9GM0L3QuNC6INCy0YvQutC70Y7Rh9C10L1cIik7XG4vLyAgICAgfVxuLy8gICAgIGlmIChmb29kLmxlbmd0aCArIGFyZ3VtZW50cy5sZW5ndGggPj0gdGhpcy5fcG93ZXIgLyAxMDApIHtcbi8vICAgICAgIHRocm93IG5ldyBFcnJvcihcItCd0LXQu9GM0LfRjyDQtNC+0LHQsNCy0LjRgtGMLCDQvdC1INGF0LLQsNGC0LDQtdGCINC80L7RidC90L7RgdGC0LhcIik7XG4vLyAgICAgfVxuLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICBmb29kLnB1c2goYXJndW1lbnRzW2ldKTsgLy8g0LTQvtCx0LDQstC40YLRjCDQstGB0ZEg0LjQtyBhcmd1bWVudHNcbi8vICAgICB9XG4vL1xuLy8gICB9O1xuLy9cbi8vICAgdGhpcy5nZXRGb29kID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgLy8g0LrQvtC/0LjRgNGD0LXQvCDQtdC00YMg0LIg0L3QvtCy0YvQuSDQvNCw0YHRgdC40LIsINGH0YLQvtCx0Ysg0LzQsNC90LjQv9GD0LvRj9GG0LjQuCDRgSDQvdC40Lwg0L3QtSDQvNC10L3Rj9C70LggZm9vZFxuLy8gICAgIHJldHVybiBmb29kLnNsaWNlKCk7XG4vLyAgIH07XG4vL1xuLy8gICB0aGlzLmZpbHRlckZvb2QgPSBmdW5jdGlvbihmaWx0ZXIpIHtcbi8vICAgICByZXR1cm4gZm9vZC5maWx0ZXIoZmlsdGVyKTtcbi8vICAgfVxuLy9cbi8vICAgdGhpcy5yZW1vdmVGb29kID0gZnVuY3Rpb24oaXRlbSkge1xuLy8gICAgIHZhciBpZHggPSBmb29kLmluZGV4T2YoaXRlbSk7XG4vLyAgICAgaWYgKGlkeCAhPSAtMSkgZm9vZC5zcGxpY2UoaWR4LCAxKTtcbi8vICAgfTtcbi8vIH1cbi8vXG4vLyB2YXIgZnJpZGdlID0gbmV3IEZyaWRnZSg1MDApO1xuLy8gZnJpZGdlLmVuYWJsZSgpO1xuLy8gZnJpZGdlLmFkZEZvb2Qoe1xuLy8gICB0aXRsZTogXCLQutC+0YLQu9C10YLQsFwiLFxuLy8gICBjYWxvcmllczogMTAwXG4vLyB9KTtcbi8vIGZyaWRnZS5hZGRGb29kKHtcbi8vICAgdGl0bGU6IFwi0YHQvtC6XCIsXG4vLyAgIGNhbG9yaWVzOiAzMFxuLy8gfSk7XG4vLyBmcmlkZ2UuYWRkRm9vZCh7XG4vLyAgIHRpdGxlOiBcItC30LXQu9C10L3RjFwiLFxuLy8gICBjYWxvcmllczogMTBcbi8vIH0pO1xuLy8gZnJpZGdlLmFkZEZvb2Qoe1xuLy8gICB0aXRsZTogXCLQstCw0YDQtdC90YzQtVwiLFxuLy8gICBjYWxvcmllczogMTUwXG4vLyB9KTtcbi8vXG4vLyAgbGV0IGRpZXRJdGVtcyA9IGZyaWRnZS5maWx0ZXJGb29kKGZ1bmN0aW9uKGl0ZW0pIHtcbi8vICAgIHJldHVybiBpdGVtLmNhbG9yaWVzIDwgNTA7XG4vLyAgfSk7XG4vL1xuLy8gZnJpZGdlLnJlbW92ZUZvb2QoXCLQvdC10YIg0YLQsNC60L7QuSDQtdC00YtcIik7IC8vINCx0LXQtyDRjdGE0YTQtdC60YLQsFxuLy8gYWxlcnQoIGZyaWRnZS5nZXRGb29kKCkubGVuZ3RoICk7IC8vIDRcbi8vXG4vLyBkaWV0SXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4vLyAgIGFsZXJ0KCBpdGVtLnRpdGxlICk7IC8vINGB0L7Quiwg0LfQtdC70LXQvdGMXG4vLyAgIGZyaWRnZS5yZW1vdmVGb29kKGl0ZW0pO1xuLy8gfSk7XG4vL1xuLy8gYWxlcnQoIGZyaWRnZS5nZXRGb29kKCkubGVuZ3RoICk7IC8vIDJcblxuXG4vLyBmdW5jdGlvbiBNYWNoaW5lKCkge1xuLy8gICB0aGlzLl9lbmFibGVkID0gZmFsc2U7IC8vINCy0LzQtdGB0YLQviB2YXIgZW5hYmxlZFxuLy9cbi8vICAgdGhpcy5lbmFibGUgPSBmdW5jdGlvbigpIHtcbi8vICAgICB0aGlzLl9lbmFibGVkID0gdHJ1ZTtcbi8vICAgfTtcbi8vXG4vLyAgIHRoaXMuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIHRoaXMuX2VuYWJsZWQgPSBmYWxzZTtcbi8vICAgfTtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBDb2ZmZWVNYWNoaW5lKHBvd2VyKSB7XG4vLyAgIE1hY2hpbmUuY2FsbCh0aGlzKTsgLy8g0L7RgtC90LDRgdC70LXQtNC+0LLQsNGC0Yxcbi8vXG4vLyAgIHZhciB3YXRlckFtb3VudCA9IDA7XG4vL1xuLy8gICB0aGlzLnNldFdhdGVyQW1vdW50ID0gZnVuY3Rpb24oYW1vdW50KSB7XG4vLyAgICAgd2F0ZXJBbW91bnQgPSBhbW91bnQ7XG4vLyAgIH07XG4vL1xuLy8gICB0aGlzLnJ1biA9ICgpID0+IHtcbi8vICAgICBpZiAoIXRoaXMuX2VuYWJsZWQpIHRocm93IG5ldyBFcnJvcign0LrQvtGE0LXQstCw0YDQutCwINCy0YvQutC70Y7Rh9C10L3QsCcpO1xuLy8gICB9XG4vL1xuLy8gfVxuLy9cbi8vXG4vLyB2YXIgY29mZmVlTWFjaGluZSA9IG5ldyBDb2ZmZWVNYWNoaW5lKDEwMDAwKTtcbi8vXG4vLyBjb2ZmZWVNYWNoaW5lLmVuYWJsZSgpO1xuLy8gY29mZmVlTWFjaGluZS5ydW4oKTtcblxuXG4vLyBmdW5jdGlvbiBDb2ZmZWVNYWNoaW5lKHBvd2VyLCBjYXBhY2l0eSkge1xuLy8gICB2YXIgd2F0ZXJBbW91bnQgPSAwO1xuLy9cbi8vICAgdmFyIFdBVEVSX0hFQVRfQ0FQQUNJVFkgPSA0MjAwO1xuLy9cbi8vICAgdmFyIHRpbWVySWQ7XG4vL1xuLy8gICB0aGlzLmlzUnVubmluZyA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiAhIXRpbWVySWQ7XG4vLyAgIH07XG4vL1xuLy8gICBmdW5jdGlvbiBnZXRUaW1lVG9Cb2lsKCkge1xuLy8gICAgIHJldHVybiB3YXRlckFtb3VudCAqIFdBVEVSX0hFQVRfQ0FQQUNJVFkgKiA4MCAvIHBvd2VyO1xuLy8gICB9XG4vL1xuLy8gICB0aGlzLnNldFdhdGVyQW1vdW50ID0gZnVuY3Rpb24oYW1vdW50KSB7XG4vLyAgICAgLy8gLi4uINC/0YDQvtCy0LXRgNC60Lgg0L/RgNC+0L/Rg9GJ0LXQvdGLINC00LvRjyDQutGA0LDRgtC60L7RgdGC0Lhcbi8vICAgICB3YXRlckFtb3VudCA9IGFtb3VudDtcbi8vICAgfTtcbi8vXG4vLyAgIHRoaXMuZ2V0V2F0ZXJBbW91bnQgPSBmdW5jdGlvbihhbW91bnQpIHtcbi8vICAgICByZXR1cm4gd2F0ZXJBbW91bnQ7XG4vLyAgIH07XG4vL1xuLy8gICBmdW5jdGlvbiBvblJlYWR5KCkge1xuLy8gICAgIGFsZXJ0KCAn0JrQvtGE0LUg0LPQvtGC0L7QsiEnICk7XG4vLyAgIH1cbi8vXG4vLyAgIHRoaXMuc2V0T25SZWFkeSA9IGZ1bmN0aW9uKG5ld09uUmVhZHkpIHtcbi8vICAgICBvblJlYWR5ID0gbmV3T25SZWFkeTtcbi8vICAgfTtcbi8vXG4vLyAgIHRoaXMucnVuID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4vLyAgICAgICB0aW1lcklkID0gbnVsbDtcbi8vICAgICAgIG9uUmVhZHkoKTtcbi8vICAgICB9LCBnZXRUaW1lVG9Cb2lsKCkpO1xuLy8gICB9O1xuLy9cbi8vIH1cbi8vXG4vLyB2YXIgY29mZmVlTWFjaGluZSA9IG5ldyBDb2ZmZWVNYWNoaW5lKDIwMDAwLCA1MDApO1xuLy8gY29mZmVlTWFjaGluZS5zZXRXYXRlckFtb3VudCgxMDApO1xuLy9cbi8vIGFsZXJ0KCAn0JTQvjogJyArIGNvZmZlZU1hY2hpbmUuaXNSdW5uaW5nKCkgKTsgLy8g0JTQvjogZmFsc2Vcbi8vXG4vLyBjb2ZmZWVNYWNoaW5lLnJ1bigpO1xuLy8gYWxlcnQoICfQkiDQv9GA0L7RhtC10YHRgdC1OiAnICsgY29mZmVlTWFjaGluZS5pc1J1bm5pbmcoKSApOyAvLyDQkiDQv9GA0L7RhtC10YHRgdC1OiB0cnVlXG4vL1xuLy8gY29mZmVlTWFjaGluZS5zZXRPblJlYWR5KGZ1bmN0aW9uKCkge1xuLy8gICBhbGVydCggXCLQn9C+0YHQu9C1OiBcIiArIGNvZmZlZU1hY2hpbmUuaXNSdW5uaW5nKCkgKTsgLy8g0J/QvtGB0LvQtTogZmFsc2Vcbi8vIH0pO1xuXG4vLyBmdW5jdGlvbiBDb2ZmZWVNYWNoaW5lKHBvd2VyLCBjYXBhY2l0eSkge1xuLy8gICB2YXIgd2F0ZXJBbW91bnQgPSAwO1xuLy9cbi8vICAgdmFyIFdBVEVSX0hFQVRfQ0FQQUNJVFkgPSA0MjAwO1xuLy9cbi8vICAgZnVuY3Rpb24gZ2V0VGltZVRvQm9pbCgpIHtcbi8vICAgICByZXR1cm4gd2F0ZXJBbW91bnQgKiBXQVRFUl9IRUFUX0NBUEFDSVRZICogODAgLyBwb3dlcjtcbi8vICAgfVxuLy9cbi8vICAgdGhpcy5zZXRXYXRlckFtb3VudCA9IGZ1bmN0aW9uKGFtb3VudCkge1xuLy8gICAgIC8vIC4uLiDQv9GA0L7QstC10YDQutC4INC/0YDQvtC/0YPRidC10L3RiyDQtNC70Y8g0LrRgNCw0YLQutC+0YHRgtC4XG4vLyAgICAgd2F0ZXJBbW91bnQgPSBhbW91bnQ7XG4vLyAgIH07XG4vL1xuLy8gICB0aGlzLmdldFdhdGVyQW1vdW50ID0gZnVuY3Rpb24oYW1vdW50KSB7XG4vLyAgICAgcmV0dXJuIHdhdGVyQW1vdW50O1xuLy8gICB9O1xuLy9cbi8vICAgZnVuY3Rpb24gb25SZWFkeSgpIHtcbi8vICAgICBhbGVydCggJ9Ca0L7RhNC1INCz0L7RgtC+0LIhJyApO1xuLy8gICB9XG4vL1xuLy8gICB0aGlzLnNldE9uUmVhZHkgPSAobmV3T25SZWFkeSkgPT4gb25SZWFkeSA9IG5ld09uUmVhZHk7XG4vL1xuLy8gICB0aGlzLnJ1biA9IGZ1bmN0aW9uKCkge1xuLy8gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbi8vICAgICAgb25SZWFkeSgpO1xuLy8gICAgfSwgZ2V0VGltZVRvQm9pbCgpKTtcbi8vICB9O1xuLy8gIC8v0LHQu9Cw0LPQvtC00LDRgNGPINCw0L3QvtC90LjQvNC90L7QuSDRhNGD0L3QutGG0LjQuCwgb25SZWFkeSgpINC90LDRh9C90LXRgiDQuNGB0LrQsNGC0Ywg0YHQstC+0LUg0L/QvtC70L7QttC10L3QuNC1INC4INC90LDQudC00LXRglxuLy8gIC8v0L/QvtGB0LvQtdC00L3QuNC1INC40LfQvNC10L3QtdC90LjRjyBzZXRPblJlYWR5KCksINCx0LXQtyDRjdGC0L7Qs9C+INC/0YDQvtGB0YLQviDQstGL0LfQvtCy0LXRgtGB0Y8g0LTQtdGE0L7Qu9GC0L3Ri9C5IG9uUmVhZHkoKVxuLy9cbi8vIH1cbi8vXG4vLyB2YXIgY29mZmVlTWFjaGluZSA9IG5ldyBDb2ZmZWVNYWNoaW5lKDIwMDAwLCA1MDApO1xuLy8gY29mZmVlTWFjaGluZS5zZXRXYXRlckFtb3VudCgxNTApO1xuLy9cbi8vIGNvZmZlZU1hY2hpbmUucnVuKCk7XG4vL1xuLy8gY29mZmVlTWFjaGluZS5zZXRPblJlYWR5KGZ1bmN0aW9uKCkge1xuLy8gICB2YXIgYW1vdW50ID0gY29mZmVlTWFjaGluZS5nZXRXYXRlckFtb3VudCgpO1xuLy8gICBhbGVydCggJ9CT0L7RgtC+0LIg0LrQvtGE0LU6ICcgKyBhbW91bnQgKyAn0LzQuycgKTsgLy8g0JPQvtGC0L7QsiDQutC+0YTQtTogMTUwINC80Ltcbi8vIH0pO1xuXG5cblxuLy8gZnVuY3Rpb24gQ29mZmVlTWFjaGluZShwb3dlciwgY2FwYWNpdHkpIHtcbi8vICAgLy8uLi5cbi8vICAgdGhpcy5zZXRXYXRlckFtb3VudCA9IGZ1bmN0aW9uKGFtb3VudCkge1xuLy8gICAgIGlmIChhbW91bnQgPCAwKSB7XG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQl9C90LDRh9C10L3QuNC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQv9C+0LvQvtC20LjRgtC10LvRjNC90YvQvFwiKTtcbi8vICAgICB9XG4vLyAgICAgaWYgKGFtb3VudCA+IGNhcGFjaXR5KSB7XG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQndC10LvRjNC30Y8g0LfQsNC70LjRgtGMINCy0L7QtNGLINCx0L7Qu9GM0YjQtSwg0YfQtdC8IFwiICsgY2FwYWNpdHkpO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgd2F0ZXJBbW91bnQgPSBhbW91bnQ7XG4vLyAgIH07XG4vL1xuLy8gICB0aGlzLmdldFdhdGVyQW1vdW50ID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuIHdhdGVyQW1vdW50O1xuLy8gICB9O1xuLy9cbi8vICAgdGhpcy5nZXRQb3dlckFtb3VudCA9ICgpID0+IHBvd2VyO1xuLy8gfVxuLy9cbi8vIGxldCBjb2ZmZWVNYWNoaW5lID0gbmV3IENvZmZlZU1hY2hpbmUoMTAwMCwgMjAwKTtcbi8vIGNvbnNvbGUubG9nKCBjb2ZmZWVNYWNoaW5lLmdldFBvd2VyQW1vdW50KCkgKTtcblxuXG4vLyBmdW5jdGlvbiBVc2VyKCkge1xuLy9cbi8vICAgbGV0IGZpcnN0TmFtZSwgc3VybmFtZTtcbi8vXG4vLyAgIHRoaXMuc2V0Rmlyc3ROYW1lID0gKG5ld0ZpcnN0TmFtZSkgPT4gZmlyc3ROYW1lID0gbmV3Rmlyc3ROYW1lO1xuLy8gICB0aGlzLnNldFN1cm5hbWUgPSAobmV3TGFzdE5hbWUpID0+IHN1cm5hbWUgPSBuZXdMYXN0TmFtZTtcbi8vXG4vLyAgIHRoaXMuZ2V0RnVsbE5hbWUgPSAoKSA9PiBgJHtmaXJzdE5hbWV9ICR7c3VybmFtZX1gO1xuLy8gfVxuLy9cbi8vIHZhciB1c2VyID0gbmV3IFVzZXIoKTtcbi8vIHVzZXIuc2V0Rmlyc3ROYW1lKFwi0J/QtdGC0Y9cIik7XG4vLyB1c2VyLnNldFN1cm5hbWUoXCLQmNCy0LDQvdC+0LJcIik7XG4vL1xuLy8gYWxlcnQoIHVzZXIuZ2V0RnVsbE5hbWUoKSApOyAvLyDQn9C10YLRjyDQmNCy0LDQvdC+0LJcblxuXG4vLyBmdW5jdGlvbiBDb2ZmZWVNYWNoaW5lKHBvd2VyLCBjYXBhY2l0eSkge1xuLy8gICB2YXIgd2F0ZXJBbW91bnQgPSAwO1xuLy9cbi8vICAgdGhpcy53YXRlckFtb3VudCA9IGZ1bmN0aW9uKGFtb3VudCkge1xuLy8gICAgIC8vINCy0YvQt9C+0LIg0LHQtdC3INC/0LDRgNCw0LzQtdGC0YDQsCwg0LfQvdCw0YfQuNGCINGA0LXQttC40Lwg0LPQtdGC0YLQtdGA0LAsINCy0L7Qt9Cy0YDQsNGJ0LDQtdC8INGB0LLQvtC50YHRgtCy0L5cbi8vICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB3YXRlckFtb3VudDtcbi8vXG4vLyAgICAgLy8g0LjQvdCw0YfQtSDRgNC10LbQuNC8INGB0LXRgtGC0LXRgNCwXG4vLyAgICAgaWYgKGFtb3VudCA8IDApIHtcbi8vICAgICAgIHRocm93IG5ldyBFcnJvcihcItCX0L3QsNGH0LXQvdC40LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC/0L7Qu9C+0LbQuNGC0LXQu9GM0L3Ri9C8XCIpO1xuLy8gICAgIH1cbi8vICAgICBpZiAoYW1vdW50ID4gY2FwYWNpdHkpIHtcbi8vICAgICAgIHRocm93IG5ldyBFcnJvcihcItCd0LXQu9GM0LfRjyDQt9Cw0LvQuNGC0Ywg0LLQvtC00Ysg0LHQvtC70YzRiNC1LCDRh9C10LwgXCIgKyBjYXBhY2l0eSk7XG4vLyAgICAgfVxuLy9cbi8vICAgICB3YXRlckFtb3VudCA9IGFtb3VudDtcbi8vICAgfTtcbi8vXG4vLyB9XG4vL1xuLy8gdmFyIGNvZmZlZU1hY2hpbmUgPSBuZXcgQ29mZmVlTWFjaGluZSgxMDAwLDUwMCk7XG4vL1xuLy8gLy8g0L/RgNC40LzQtdGAINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPXG4vLyBjb2ZmZWVNYWNoaW5lLndhdGVyQW1vdW50KDQ1MCk7XG4vLyBhbGVydCggY29mZmVlTWFjaGluZS53YXRlckFtb3VudCgpICk7IC8vIDQ1MFxuXG5cbi8vIGZ1bmN0aW9uIENvZmZlZU1hY2hpbmUocG93ZXIsIGNhcGFjaXR5KSB7IC8vIGNhcGFjaXR5IC0g0ZHQvNC60L7RgdGC0Ywg0LrQvtGE0LXQstCw0YDQutC4XG4vLyAgIHZhciB3YXRlckFtb3VudCA9IDA7XG4vL1xuLy8gICBjb25zdCBXQVRFUl9IRUFUX0NBUEFDSVRZID0gNDIwMDtcbi8vXG4vLyAgIGNvbnN0IGdldFRpbWVUb0JvaWwgPSAoKSA9PiB3YXRlckFtb3VudCAqIFdBVEVSX0hFQVRfQ0FQQUNJVFkgKiA4MCAvIHBvd2VyO1xuLy9cbi8vICAgLy8gXCLRg9C80L3QsNGPXCIg0YPRgdGC0LDQvdC+0LLQutCwINGB0LLQvtC50YHRgtCy0LBcbi8vICAgdGhpcy5zZXRXYXRlckFtb3VudCA9IChhbW91bnQpID0+IHtcbi8vICAgICBpZiAoYW1vdW50IDwgMCkge1xuLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0JfQvdCw0YfQtdC90LjQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0L/QvtC70L7QttC40YLQtdC70YzQvdGL0LxcIik7XG4vLyAgICAgfVxuLy8gICAgIGlmIChhbW91bnQgPiBjYXBhY2l0eSkge1xuLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0J3QtdC70YzQt9GPINC30LDQu9C40YLRjCDQstC+0LTRiyDQsdC+0LvRjNGI0LUsINGH0LXQvCBcIiArIGNhcGFjaXR5KTtcbi8vICAgICB9XG4vL1xuLy8gICAgIHdhdGVyQW1vdW50ID0gYW1vdW50O1xuLy8gICB9O1xuLy9cbi8vICAgLy/QlNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0LTQsNGC0Ywg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQstC90LXRiNC90LXQvNGDINC60L7QtNGDINGD0LfQvdCw0YLRjCDQtdCz0L4g0LfQvdCw0YfQtdC90LjQtSxcbi8vICAgLy8g0YHQvtC30LTQsNC00LjQvCDRgdC/0LXRhtC40LDQu9GM0L3Rg9GOINGE0YPQvdC60YbQuNGOIOKAkyDCq9Cz0LXRgtGC0LXRgMK7IChnZXR0ZXIgbWV0aG9kKS5cbi8vICAgdGhpcy5nZXRXYXRlckFtb3VudCA9ICgpID0+IGNvbnNvbGUubG9nKHdhdGVyQW1vdW50KTtcbi8vXG4vLyAgIGNvbnN0IG9uUmVhZHkgPSAoKSA9PiBhbGVydCggJ9Ca0L7RhNC1INCz0L7RgtC+0LIhJyApO1xuLy9cbi8vICAgdGhpcy5ydW4gPSAoKSA9PiBzZXRUaW1lb3V0KG9uUmVhZHksIGdldFRpbWVUb0JvaWwoKSk7XG4vLyB9XG4vL1xuLy8gdmFyIGNvZmZlZU1hY2hpbmUgPSBuZXcgQ29mZmVlTWFjaGluZSgxMDAwLCA1MDApO1xuLy8gY29mZmVlTWFjaGluZS5zZXRXYXRlckFtb3VudCg1MCk7IC8vINGD0L/RgSwg0L7RiNC40LHQutCwIVxuLy8gY29mZmVlTWFjaGluZS5nZXRXYXRlckFtb3VudCgpO1xuXG5cbi8vIGZ1bmN0aW9uIENvZmZlZU1hY2hpbmUocG93ZXIpIHtcbi8vIFx0dGhpcy53YXRlckFtb3VudCA9IDA7XG4vLyBcdGNvbnN0IFdBVEVSX0hFQVRfQ0FQQUNJVFkgPSA0MjAwO1xuLy8gXHRsZXQgdGltZXJJZDtcbi8vXG4vLyBcdGNvbnN0IGdldEJvaWxUaW1lID0gKCkgPT4gdGhpcy53YXRlckFtb3VudCAqIFdBVEVSX0hFQVRfQ0FQQUNJVFkgKiA4MCAvIHBvd2VyO1xuLy9cbi8vIFx0Y29uc3Qgb25SZWFkeSA9ICgpID0+IGFsZXJ0KCfQmtC+0YTQtSDQs9C+0YLQvtCy0L4hJyk7XG4vL1xuLy8gXHR0aGlzLnJ1biA9ICgpID0+IHRpbWVySWQgPSBzZXRUaW1lb3V0KG9uUmVhZHksIGdldEJvaWxUaW1lKCkpO1xuLy8gXHQvL9Ck0YPQvdC60YbQuNGPIHNldFRpbWVvdXQg0LLQvtC30LLRgNCw0YnQsNC10YIg0YfQuNGB0LvQvtCy0L7QuSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDRgtCw0LnQvNC10YDQsFxuLy8gXHQvLyB0aW1lcklkLCDQutC+0YLQvtGA0YvQuSDQvNC+0LbQvdC+INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQtNC70Y8g0L7RgtC80LXQvdGLINC00LXQudGB0YLQstC40Y9cbi8vXG4vLyBcdHRoaXMuc3RvcCA9ICgpID0+IGNsZWFyVGltZW91dCh0aW1lcklkKTtcbi8vIH1cbi8vXG4vLyB2YXIgY29mZmVlTWFjaGluZSA9IG5ldyBDb2ZmZWVNYWNoaW5lKDUwMDAwKTtcbi8vIGNvZmZlZU1hY2hpbmUud2F0ZXJBbW91bnQgPSAyMDA7XG4vL1xuLy8gY29mZmVlTWFjaGluZS5ydW4oKTtcbi8vIGNvZmZlZU1hY2hpbmUuc3RvcCgpOyAvLyDQutC+0YTQtSDQv9GA0LjQs9C+0YLQvtCy0LvQtdC9INC90LUg0LHRg9C00LXRglxuXG5cbi8vIGZ1bmN0aW9uIENvZmZlZU1hY2hpbmUocG93ZXIpIHtcbi8vXG4vLyAgIHRoaXMud2F0ZXJBbW91bnQgPSAwO1xuLy9cbi8vICAgLy8g0YTQuNC30LjRh9C10YHQutCw0Y8g0LrQvtC90YHRgtCw0L3RgtCwIC0g0YPQtNC10LvRjNC90LDRjyDRgtC10L/Qu9C+0ZHQvNC60L7RgdGC0Ywg0LLQvtC00Ysg0LTQu9GPIGdldEJvaWxUaW1lXG4vLyAgIHZhciBXQVRFUl9IRUFUX0NBUEFDSVRZID0gNDIwMDtcbi8vXG4vLyAgIGxldCBzZWxmID0gdGhpczsgLy/QtNC+0YHRgtGD0L8g0Log0L7QsdGK0LXQutGC0YMg0LjQtyDQstC90YPRgtGA0LXQvdC90LXQs9C+INC80LXRgtC+0LTQsFxuLy8gICAvLyDRgNCw0YHRh9GR0YIg0LLRgNC10LzQtdC90Lgg0LTQu9GPINC60LjQv9GP0YfQtdC90LjRj1xuLy8gICBmdW5jdGlvbiBnZXRCb2lsVGltZSgpIHtcbi8vICAgICByZXR1cm4gc2VsZi53YXRlckFtb3VudCAqIFdBVEVSX0hFQVRfQ0FQQUNJVFkgKiA4MCAvIHBvd2VyOyAvLyDQvtGI0LjQsdC60LAhXG4vLyAgIH1cbi8vXG4vLyAgIC8vINGH0YLQviDQtNC10LvQsNGC0Ywg0L/QviDQvtC60L7QvdGH0LDQvdC40Lgg0L/RgNC+0YbQtdGB0YHQsFxuLy8gICBmdW5jdGlvbiBvblJlYWR5KCkge1xuLy8gICAgIGFsZXJ0KCAn0JrQvtGE0LUg0LPQvtGC0L7QsiEnICk7XG4vLyAgIH1cbi8vXG4vLyAgIHRoaXMucnVuID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgc2V0VGltZW91dChvblJlYWR5LCBnZXRCb2lsVGltZSgpKTtcbi8vICAgfTtcbi8vXG4vLyB9XG4vL1xuLy8gdmFyIGNvZmZlZU1hY2hpbmUgPSBuZXcgQ29mZmVlTWFjaGluZSgxMDAwMDApO1xuLy8gY29mZmVlTWFjaGluZS53YXRlckFtb3VudCA9IDIwMDtcbi8vXG4vLyBjb2ZmZWVNYWNoaW5lLnJ1bigpO1xuXG5cbi8vIHZhciBleHByLCByZXM7XG4vL1xuLy8gd2hpbGUgKHRydWUpIHtcbi8vICAgZXhwciA9IHByb21wdChcItCS0LLQtdC00LjRgtC1INCy0YvRgNCw0LbQtdC90LjQtT9cIiwgJzItJyk7XG4vLyAgIGlmIChleHByID09IG51bGwpIGJyZWFrO1xuLy9cbi8vICAgdHJ5IHtcbi8vICAgICByZXMgPSBldmFsKGV4cHIpO1xuLy8gICAgIGlmIChpc05hTihyZXMpKSB7XG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQoNC10LfRg9C70YzRgtCw0YIg0L3QtdC+0L/RgNC10LTQtdC70ZHQvVwiKTtcbi8vICAgICB9XG4vL1xuLy8gICAgIGJyZWFrO1xuLy8gICB9IGNhdGNoIChlKSB7XG4vLyAgICAgYWxlcnQoIFwi0J7RiNC40LHQutCwOiBcIiArIGUubWVzc2FnZSArIFwiLCDQv9C+0LLRgtC+0YDQuNGC0LUg0LLQstC+0LRcIiApO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gYWxlcnQoIHJlcyApO1xuXG5cbi8vIHZhciBkYXRhID0gJ3sgXCJuYW1lXCI6IFwi0JLQsNGB0Y9cIiwgXCJhZ2VcIjogMzAgfSc7IC8vINC00LDQvdC90YvQtSDQutC+0YDRgNC10LrRgtC90Ytcbi8vXG4vLyB0cnkge1xuLy9cbi8vICAgdmFyIHVzZXIgPSBKU09OLnBhcnNlKGRhdGEpO1xuLy9cbi8vICAgaWYgKCF1c2VyLm5hbWUpIHtcbi8vICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCLQntGI0LjQsdC60LAg0LIg0LTQsNC90L3Ri9GFXCIpO1xuLy8gICB9XG4vL1xuLy8gICBibGFibGEoKTsgLy8g0L/RgNC+0LjQt9C+0YjQu9CwINC90LXQv9GA0LXQtNGD0YHQvNC+0YLRgNC10L3QvdCw0Y8g0L7RiNC40LHQutCwXG4vL1xuLy8gICBhbGVydCggdXNlci5uYW1lICk7XG4vL1xuLy8gfSBjYXRjaCAoZSkge1xuLy9cbi8vICAgaWYgKGUubmFtZSA9PSBcIlN5bnRheEVycm9yXCIpIHtcbi8vICAgICBhbGVydCggXCLQmNC30LLQuNC90LjRgtC1LCDQsiDQtNCw0L3QvdGL0YUg0L7RiNC40LHQutCwXCIgKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICB0aHJvdyBlO1xuLy8gICB9XG4vL1xuLy8gfVxuXG5cbi8vIGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIG1zKSB7XG4vL1xuLy8gICB2YXIgaXNUaHJvdHRsZWQgPSBmYWxzZSxcbi8vICAgICBzYXZlZEFyZ3MsXG4vLyAgICAgc2F2ZWRUaGlzO1xuLy9cbi8vICAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4vL1xuLy8gICAgIGlmIChpc1Rocm90dGxlZCkgeyAvLyAoMilcbi8vICAgICAgIHNhdmVkQXJncyA9IGFyZ3VtZW50cztcbi8vICAgICAgIHNhdmVkVGhpcyA9IHRoaXM7XG4vLyAgICAgICByZXR1cm47XG4vLyAgICAgfVxuLy9cbi8vICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vICgxKVxuLy9cbi8vICAgICBpc1Rocm90dGxlZCA9IHRydWU7XG4vL1xuLy8gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4vLyAgICAgICBpc1Rocm90dGxlZCA9IGZhbHNlOyAvLyAoMylcbi8vICAgICAgIGlmIChzYXZlZEFyZ3MpIHtcbi8vICAgICAgICAgd3JhcHBlci5hcHBseShzYXZlZFRoaXMsIHNhdmVkQXJncyk7XG4vLyAgICAgICAgIHNhdmVkQXJncyA9IHNhdmVkVGhpcyA9IG51bGw7XG4vLyAgICAgICB9XG4vLyAgICAgfSwgbXMpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy9cbi8vIHZhciBmID0gZnVuY3Rpb24oYSkge1xuLy8gICBjb25zb2xlLmxvZyhhKVxuLy8gfTtcbi8vXG4vLyAvLyDQt9Cw0YLQvtGA0LzQvtC30LjRgtGMINGE0YPQvdC60YbQuNGOINC00L4g0L7QtNC90L7Qs9C+INGA0LDQt9CwINCyIDEwMDAg0LzRgVxuLy8gdmFyIGYxMDAwID0gdGhyb3R0bGUoZiwgMTAwMCk7XG4vL1xuLy8gZjEwMDAoMSk7IC8vINCy0YvQstC10LTQtdGCIDFcbi8vIGYxMDAwKDIpOyAvLyAo0YLQvtGA0LzQvtC30LjQvCwg0L3QtSDQv9GA0L7RiNC70L4gMTAwMCDQvNGBKVxuLy8gZjEwMDAoMyk7IC8vICjRgtC+0YDQvNC+0LfQuNC8LCDQvdC1INC/0YDQvtGI0LvQviAxMDAwINC80YEpXG4vLyDQutC+0LPQtNCwINC/0YDQvtC50LTRkdGCIDEwMDAg0LzRgS4uLlxuLy8g0LLRi9Cy0LXQtNC10YIgMywg0L/RgNC+0LzQtdC20YPRgtC+0YfQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSAyINC40LPQvdC+0YDQuNGA0YPQtdGC0YHRj1xuXG5cbi8vIGZ1bmN0aW9uIGRlYm91bmNlKGYsIG1zKSB7XG4vLyAgIGxldCB0aW1lciA9IG51bGw7XG4vL1xuLy8gICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbi8vICAgICBjb25zdCBvbkNvbXBsZXRlID0gKCkgPT4ge1xuLy8gICAgICAgZi5hcHBseSh0aGlzLCBhcmdzKTtcbi8vICAgICAgIHRpbWVyID0gbnVsbDtcbi8vICAgICB9XG4vL1xuLy8gICAgIGlmICh0aW1lcikge1xuLy8gICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbi8vICAgICB9XG4vL1xuLy8gICAgIHRpbWVyID0gc2V0VGltZW91dChvbkNvbXBsZXRlLCBtcyk7XG4vLyAgIH07XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gZih4KSB7IGFsZXJ0KHgpIH1cbi8vIGYgPSBkZWJvdW5jZShmLCAxMDAwKTtcbi8vXG4vLyBmKDEpOyAvLyDQstGL0LfQvtCyINC+0YLQu9C+0LbQtdC9INC90LAgMTAwMCDQvNGBXG4vLyBmKDIpOyAvLyDQv9GA0LXQtNGL0LTRg9GJ0LjQuSDQvtGC0LvQvtC20LXQvdC90YvQuSDQstGL0LfQvtCyINC40LPQvdC+0YDQuNGA0YPQtdGC0YHRjywg0YLQtdC60YPRidC40LkgKDIpINC+0YLQutC70LDQtNGL0LLQsNC10YLRgdGPINC90LAgMTAwMCDQvNGBXG4vL1xuLy8gLy8g0YfQtdGA0LXQtyAxINGB0LXQutGD0L3QtNGDINCx0YPQtNC10YIg0LLRi9C/0L7Qu9C90LXQvSDQstGL0LfQvtCyIGYoMSlcbi8vXG4vLyBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHsgZigzKSB9LCAxMTAwKTsgLy8g0YfQtdGA0LXQtyAxMTAwINC80YEg0L7RgtC70L7QttC40Lwg0LLRi9C30L7QsiDQtdGJ0LUg0L3QsCAxMDAwINC80YFcbi8vIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkgeyBmKDQpIH0sIDEyMDApOyAvLyDQuNCz0L3QvtGA0LjRgNGD0LXQvCDQstGL0LfQvtCyICgzKVxuLy8g0YfQtdGA0LXQtyAyMjAwINC80YEg0L7RgiDQvdCw0YfQsNC70LAg0LLRi9C/0L7Qu9C90LXQvdC40Y8g0LHRg9C00LXRgiDQstGL0L/QvtC70L3QtdC9INCy0YvQt9C+0LIgZig0KVxuXG5cbi8vIGZ1bmN0aW9uIGRlbGF5KGYsIG1zKSB7XG4vLyAgIHJldHVybiBmdW5jdGlvbigpIHtcbi8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgIHJldHVybiBmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4vLyAgICAgfSwgbXMpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gZih4KSB7XG4vLyAgIGFsZXJ0KCB4ICk7XG4vLyB9XG4vL1xuLy8gdmFyIGYxMDAwID0gZGVsYXkoZiwgMTAwMCk7XG4vLyB2YXIgZjE1MDAgPSBkZWxheShmLCAxNTAwKTtcbi8vXG4vLyBmMTAwMChcItGC0LXRgdGCXCIpOyAvLyDQstGL0LLQtdC00LXRgiBcItGC0LXRgdGCXCIg0YfQtdGA0LXQtyAxMDAwINC80LjQu9C70LjRgdC10LrRg9C90LRcbi8vIGYxNTAwKFwi0YLQtdGB0YIyXCIpOyAvLyDQstGL0LLQtdC00LXRgiBcItGC0LXRgdGCMlwiINGH0LXRgNC10LcgMTUwMCDQvNC40LvQu9C40YHQtdC60YPQvdC0XG5cblxuLy8gZnVuY3Rpb24gcHJpbnROdW1iZXJzSW50ZXJ2YWwoKSB7XG4vLyAgIHZhciBpID0gMTtcbi8vICAgc2V0VGltZW91dChmdW5jdGlvbiBpdGVyYXRvcigpIHtcbi8vICAgICBjb25zb2xlLmxvZyhpKTtcbi8vICAgICBpZiAoaSA8IDIwKSBzZXRUaW1lb3V0KGl0ZXJhdG9yLCAxMDApO1xuLy8gICAgIGkrKztcbi8vICAgfSwgMTAwKTtcbi8vIH1cbi8vXG4vLyBwcmludE51bWJlcnNJbnRlcnZhbCgpO1xuXG5cbi8vIGZ1bmN0aW9uIHByaW50TnVtYmVyc0ludGVydmFsKCkge1xuLy8gICB2YXIgaSA9IDE7XG4vLyAgIHZhciB0aW1lcklkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4vLyAgICAgY29uc29sZS5sb2coaSk7XG4vLyAgICAgaWYgKGkgPT0gMjApIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XG4vLyAgICAgaSsrO1xuLy8gICB9LCAxMDApO1xuLy8gfVxuLy8gcHJpbnROdW1iZXJzSW50ZXJ2YWwoKTtcblxuXG4vLyBjbGFzcyBBbmltYWwge1xuLy8gXHRjb25zdHJ1Y3RvcihuYW1lKSB7XG4vLyBcdFx0dGhpcy5uYW1lID0gbmFtZTtcbi8vIFx0fVxuLy9cbi8vIFx0d2FsaygpIHtcbi8vIFx0XHRhbGVydChcIkkgd2FsazogXCIgKyB0aGlzLm5hbWUpO1xuLy9cbi8vIFx0fVxuLy8gfVxuLy9cbi8vIGNsYXNzIFJhYmJpdCBleHRlbmRzIEFuaW1hbCB7XG4vLyBcdHdhbGsoKSB7XG4vLyBcdFx0c3VwZXIud2FsaygpO1xuLy8gXHRcdGFsZXJ0KFwiLi4uYW5kIGp1bXAhXCIpO1xuLy9cbi8vIFx0fVxuLy8gfVxuLy9cbi8vIG5ldyBSYWJiaXQoXCLQktCw0YHRj1wiKS53YWxrKCk7XG4vL1xuLy8gY29uc29sZS5sb2coUmFiYml0LnByb3RvdHlwZS5fX3Byb3RvX18gPT0gQW5pbWFsLnByb3RvdHlwZSk7XG4vL19fcHJvdG9fXyDRgdCy0L7QudGB0YLQstC+LCDQvdC1INC90LDQudC00LXQvdC90L7QtSDQsiDQvtC00L3QvtC8INC+0LHRitC10LrRgtC1LCDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQuNGJ0LXRgtGB0Y8g0LIg0LTRgNGD0LPQvtC8LlxuLy/QsiBwcm90b3R5cGUg0LfQsNC/0LjRgdGL0LLQsNGO0YLRgdGPINC80LXRgtC+0LTRiyDQutC70LDRgdGB0L7QslxuLy9wcm90b3R5cGUg0YMgUmFiYml0INGB0YHRi9C70LDQtdGC0YHRjyDQvdCwIEFuaW1hbCBwcm90b3R5cGVcbi8v0L/RgNC4INGB0L7Qt9C00LDQvdC40Lgg0L7QsdGK0LXQutGC0LAg0YfQtdGA0LXQtyAnbmV3JyDRg9GB0YLQsNC90L7QstC4IF9fcHJvdG9fXyBSYWJiaXQucHJvdG90eXBlINC90LAgQW5pbWFsLnByb3RvdHlwZVxuXG4vL9Cn0YLQvtCx0Ysg0L3QvtCy0YvQvCDQvtCx0YrQtdC60YLQsNC8INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INGB0YLQsNCy0LjRgtGMINC/0YDQvtGC0L7RgtC40L8sINC60L7QvdGB0YLRgNGD0LrRgtC+0YDRgyDRgdGC0LDQstC40YLRgdGPINGB0LLQvtC50YHRgtCy0L4gcHJvdG90eXBlLlxuLy/Qn9GA0Lgg0YHQvtC30LTQsNC90LjQuCDQvtCx0YrQtdC60YLQsCDRh9C10YDQtdC3IG5ldywg0LIg0LXQs9C+INC/0YDQvtGC0L7RgtC40L8gX19wcm90b19fINC30LDQv9C40YHRi9Cy0LDQtdGC0YHRjyDRgdGB0YvQu9C60LAg0LjQtyBwcm90b3R5cGUg0YTRg9C90LrRhtC40Lgt0LrQvtC90YHRgtGA0YPQutGC0L7RgNCwLlxuXG5cblxuLy/QutC+0L3RgdGC0LDQvdGC0LAg0LIg0LrQu9Cw0YHRgdC1XG4vLyBjbGFzcyBNZW51IHtcbi8vICAgc3RhdGljIGdldCBlbGVtQ2xhc3MoKSB7XG4vLyAgICAgcmV0dXJuIFwibWVudVwiXG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBhbGVydCggTWVudS5lbGVtQ2xhc3MgKTsgLy8gbWVudVxuXG5cbi8vIGNsYXNzIFVzZXIge1xuLy8gICBjb25zdHJ1Y3RvcihmaXJzdE5hbWUsIGxhc3ROYW1lKSB7XG4vLyAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4vLyAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuLy8gICB9XG4vL1xuLy8gICAvLyDQs9C10YLRgtC10YBcbi8vICAgZ2V0IGZ1bGxOYW1lKCkge1xuLy8gICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWA7XG4vLyAgIH1cbi8vXG4vLyAgIC8vINGB0LXRgtGC0LXRgFxuLy8gICBzZXQgZnVsbE5hbWUobmV3VmFsdWUpIHtcbi8vICAgICBbdGhpcy5maXJzdE5hbWUsIHRoaXMubGFzdE5hbWVdID0gbmV3VmFsdWUuc3BsaXQoJyAnKTtcbi8vICAgfVxuLy9cbi8vICAgLy8gW3JhbmRdKCkge1xuLy8gICAvLyAgIGFsZXJ0KFwiUEFTU0VEIVwiKTtcbi8vICAgLy8gfVxuLy9cbi8vICAgLy8g0LLRi9GH0LjRgdC70Y/QtdC80L7QtSDQvdCw0LfQstCw0L3QuNC1INC80LXRgtC+0LTQsFxuLy8gICBbXCJ0ZXN0XCIudG9VcHBlckNhc2UoKV0oKSB7XG4vLyAgICAgYWxlcnQoXCJQQVNTRUQhXCIpO1xuLy8gICB9XG4vLyB9O1xuLy9cbi8vIGxldCB1c2VyID0gbmV3IFVzZXIoXCLQktCw0YHRj1wiLCBcItCf0YPQv9C60L7QslwiKTtcbi8vIGFsZXJ0KCB1c2VyLmZ1bGxOYW1lICk7IC8vINCS0LDRgdGPINCf0YPQv9C60L7QslxuLy8gdXNlci5mdWxsTmFtZSA9IFwi0JjQstCw0L0g0J/QtdGC0YDQvtCyXCI7XG4vLyBhbGVydCggdXNlci5mdWxsTmFtZSApOyAvLyDQmNCy0LDQvSDQn9C10YLRgNC+0LJcbi8vIHVzZXIuVEVTVCgpOyAvLyBQQVNTRUQhXG5cblxuLy8gY2xhc3MgVXNlciB7XG4vLyAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbi8vICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuLy8gICB9XG4vLyAgIHNheUhpKCkge1xuLy8gICAgIGFsZXJ0KHRoaXMubmFtZSk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBsZXQgYWxsTW9kZWxzID0ge307XG4vL1xuLy8gZnVuY3Rpb24gY3JlYXRlTW9kZWwoTW9kZWwsIC4uLmFyZ3MpIHtcbi8vICAgbGV0IG1vZGVsID0gbmV3IE1vZGVsKC4uLmFyZ3MpO1xuLy9cbi8vICAgbW9kZWwuX2lkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7XG4vLyAgIGFsbE1vZGVsc1ttb2RlbC5faWRdID0gbW9kZWw7XG4vL1xuLy8gICByZXR1cm4gbW9kZWw7XG4vLyB9XG4vL1xuLy9cbi8vXG4vLyBsZXQgdXNlciA9IGNyZWF0ZU1vZGVsKFVzZXIsIFwi0JLQsNGB0Y9cIik7XG4vL1xuLy8gdXNlci5zYXlIaSgpOyAvLyDQktCw0YHRj1xuLy9cbi8vIGFsZXJ0KCBhbGxNb2RlbHNbdXNlci5faWRdLm5hbWUgKTtcblxuXG5cbi8vIGxldCBhbmltYWwgPSB7XG4vLyAgIHdhbGsoKSB7XG4vLyAgICAgYWxlcnQoXCJJJ20gd2Fsa2luZ1wiKTtcbi8vICAgfVxuLy8gfTtcbi8vIGxldCByYWJiaXQgPSB7XG4vLyAgIF9fcHJvdG9fXzogYW5pbWFsLFxuLy8gICB3YWxrKCkgeyAgICAvL9Cf0YDQuCDQvtCx0YDQsNGJ0LXQvdC40Lgg0YfQtdGA0LXQtyBzdXBlciDQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y8gW1tIb21lT2JqZWN0XV0g0YLQtdC60YPRidC10LPQviDQvNC10YLQvtC00LAsXG4vLyAgICAgICAgICAgICAgIC8v0Lgg0L7RgiDQvdC10LPQviDQsdC10YDRkdGC0YHRjyBfX3Byb3RvX18uINCf0L7RjdGC0L7QvNGDIHN1cGVyINGA0LDQsdC+0YLQsNC10YIg0YLQvtC70YzQutC+INCy0L3Rg9GC0YDQuCDQvNC10YLQvtC00L7Qsi5cbi8vICAgICBhbGVydChzdXBlci53YWxrKTsgLy8gd2FsaygpIHsg4oCmIH1cbi8vICAgICBzdXBlci53YWxrKCk7IC8vIEknbSB3YWxraW5nXG4vLyAgIH1cbi8vIH07XG4vL1xuLy8gcmFiYml0LndhbGsoKTtcblxuXG5cbi8vIGxldCBtZXNzYWdlcyA9IHtcbi8vICAgXCJIZWxsbywgezB9IVwiOiBcItCf0YDQuNCy0LXRgiwgezB9IVwiXG4vLyB9O1xuLy9cbi8vIGZ1bmN0aW9uIGkxOG4oc3RyaW5ncywgLi4udmFsdWVzKSB7XG4vLyAgIC8vINCf0L4g0YTQvtGA0LzQtSDRgdGC0YDQvtC60Lgg0L/QvtC70YPRh9C40Lwg0YjQsNCx0LvQvtC9INC00LvRjyDQv9C+0LjRgdC60LAg0LIgbWVzc2FnZXNcbi8vICAgLy8g0J3QsCDQvNC10YHRgtC1INC60LDQttC00L7Qs9C+INC40Lcg0LfQvdCw0YfQtdC90LjQuSDQsdGD0LTQtdGCINC10LPQviDQvdC+0LzQtdGAOiB7MH0sIHsxfSwg4oCmXG4vLyAgIGxldCBwYXR0ZXJuID0gXCJcIjtcbi8vICAgZm9yKGxldCBpPTA7IGk8dmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgcGF0dGVybiArPSBzdHJpbmdzW2ldICsgJ3snICsgaSArICd9Jztcbi8vICAgfVxuLy8gICBwYXR0ZXJuICs9IHN0cmluZ3Nbc3RyaW5ncy5sZW5ndGgtMV07XG4vLyAgIC8vINCi0LXQv9C10YDRjCBwYXR0ZXJuID0gXCJIZWxsbywgezB9IVwiXG4vL1xuLy8gICBsZXQgdHJhbnNsYXRlZCA9IG1lc3NhZ2VzW3BhdHRlcm5dOyAvLyBcItCf0YDQuNCy0LXRgiwgezB9IVwiXG4vL1xuLy8gICAvLyDQl9Cw0LzQtdC90LjRgiDQsiBcItCf0YDQuNCy0LXRgiwgezB9XCIg0YbQuNGE0YDRiyDQstC40LTQsCB7bnVtfSDQvdCwIHZhbHVlc1tudW1dXG4vLyAgIHJldHVybiB0cmFuc2xhdGVkLnJlcGxhY2UoL1xceyhcXGQpXFx9L2csIChzLCBudW0pID0+IHZhbHVlc1tudW1dKTtcbi8vIH1cbi8vXG4vLyAvLyDQn9GA0LjQvNC10YAg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y9cbi8vIGxldCBuYW1lID0gXCLQktCw0YHRj1wiO1xuLy9cbi8vIC8vINCf0LXRgNC10LLQtdGB0YLQuCDRgdGC0YDQvtC60YNcbi8vIGFsZXJ0KCBpMThuYEhlbGxvLCAke25hbWV9IWAgKTsgLy8g0J/RgNC40LLQtdGCLCDQktCw0YHRjyFcblxuXG4vLyBmdW5jdGlvbiBkZWZlcihmLCBtcykge1xuLy8gICByZXR1cm4gZnVuY3Rpb24oKSB7XG4vLyAgICAgc2V0VGltZW91dCgoKSA9PiBmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIG1zKVxuLy8gICAgIC8v0YHRgtGA0LXQu9C60LAg0LHQtdGA0LXRgiBhcmd1bWVudHMg0LjQtyDQstC90LXRiNC90LXQuSDRhNGD0L3QutGG0LjQuFxuLy/QstGL0LfQvtCyINGE0YPQvdC60YbQuNC4INC00L7Qu9C20LXQvSDQutCw0Lot0YLQviBcItC00L7QsdGA0LDRgtGM0YHRj1wiINC00L4g0YTRg9C90LrRhtC40Lgg0LLQvdGD0YLRgNC4IHNldFRpbWVvdXRcbi8vICAgfVxuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIHNheUhpKHdobykge1xuLy8gICBhbGVydCgn0J/RgNC40LLQtdGCLCAnICsgd2hvKTtcbi8vIH1cbi8vXG4vLyBsZXQgc2F5SGlEZWZlcnJlZCA9IGRlZmVyKHNheUhpLCAyMDAwKTtcbi8vIHNheUhpRGVmZXJyZWQoXCLQktCw0YHRj1wiKTsgLy8g0J/RgNC40LLQtdGCLCDQktCw0YHRjyDRh9C10YDQtdC3IDIg0YHQtdC60YPQvdC00YtcblxuXG4vLyBsZXQgZ3JvdXAgPSB7XG4vLyAgIHRpdGxlOiBcItCd0LDRiCDQutGD0YDRgVwiLFxuLy8gICBzdHVkZW50czogW1wi0JLQsNGB0Y9cIiwgXCLQn9C10YLRj1wiLCBcItCU0LDRiNCwXCJdLFxuLy9cbi8vICAgc2hvd0xpc3Q6IGZ1bmN0aW9uKCkge1xuLy8gICAgIHRoaXMuc3R1ZGVudHMuZm9yRWFjaChcbi8vICAgICAgIHN0dWRlbnQgPT4gYWxlcnQodGhpcy50aXRsZSArICc6ICcgKyBzdHVkZW50KVxuLy8gICAgIC8v0YHRgtGA0LXQu9C60LAg0LHQtdGA0LXRgiB0aGlzINC40Lcg0LLQvdC10YjQvdC10LPQviDQvtC60YDRg9C20LXQvdC40Y9cbi8vICAgICApXG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBncm91cC5zaG93TGlzdCgpO1xuLy8gLy8g0J3QsNGIINC60YPRgNGBOiDQktCw0YHRj1xuLy8gLy8g0J3QsNGIINC60YPRgNGBOiDQn9C10YLRj1xuLy8gLy8g0J3QsNGIINC60YPRgNGBOiDQlNCw0YjQsNCwXG5cblxuLy8g0KTRg9C90LrRhtC40Lgt0YHRgtGA0LXQu9C60Lgg0L7Rh9C10L3RjCDRg9C00L7QsdC90Ysg0LIg0LrQsNGH0LXRgdGC0LLQtSDQutC+0LvQu9Cx0LXQutC+0LIsINC90LDQv9GA0LjQvNC10YA6XG4vLyBsZXQgYXJyID0gWzUsIDgsIDNdO1xuLy9cbi8vIGxldCBzb3J0ZWQgPSBhcnIuc29ydCggKGEsYikgPT4gYSAtIGIgKTtcbi8vXG4vLyBhbGVydChzb3J0ZWQpOyAvLyAzLCA1LCA4XG5cblxuLy8gbGV0IGdldFRpbWUgPSAoKSA9PiB7XG4vLyAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbi8vICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuLy8gICBsZXQgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuLy8gICByZXR1cm4gaG91cnMgKyAnOicgKyBtaW51dGVzO1xuLy8gfTtcbi8vXG4vLyBhbGVydCggZ2V0VGltZSgpICk7IC8vINGC0LXQutGD0YnQtdC1INCy0YDQtdC80Y9cbi8vIC8v0JfQsNC80LXRgtC40LwsINGH0YLQviDQutCw0Log0YLQvtC70YzQutC+INGC0LXQu9C+INGE0YPQvdC60YbQuNC4INC+0LHQvtGA0LDRh9C40LLQsNC10YLRgdGPINCyIHvigKZ9LCDRgtC+INC10ZEg0YDQtdC30YPQu9GM0YLQsNGCINGD0LbQtVxuLy8gLy/QvdC1INCy0L7Qt9Cy0YDQsNGJ0LDQtdGC0YHRjyDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuC4g0KLQsNC60LDRjyDRhNGD0L3QutGG0LjRjyDQtNC+0LvQttC90LAg0LTQtdC70LDRgtGMINGP0LLQvdGL0LkgcmV0dXJuLCDQutCw0Lpcbi8vIC8v0LIg0L/RgNC40LzQtdGA0LUg0LLRi9GI0LUsINC10YHQu9C4INC60L7QvdC10YfQvdC+INGF0L7Rh9C10YIg0YfRgtC+LdC70LjQsdC+INCy0L7Qt9Cy0YDQsNGC0LjRgtGMLlxuXG5cbi8vIGxldCBzdW0gPSAoYSxiKSA9PiBhICsgYjtcbi8vXG4vLyAvLyDQsNC90LDQu9C+0LMg0YEgZnVuY3Rpb25cbi8vIC8vIGxldCBzdW0gPSBmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhICsgYjsgfTtcbi8vXG4vLyBhbGVydCggc3VtKDEsIDIpICk7IC8vIDNcbi8vXG4vLyAvLyDQstGL0LfQvtCyIGdldFRpbWUoKSDQsdGD0LTQtdGCINCy0L7Qt9Cy0YDQsNGJ0LDRgtGMINGC0LXQutGD0YnQtdC1INCy0YDQtdC80Y9cbi8vIGxldCBnZXRUaW1lID0gKCkgPT4gbmV3IERhdGUoKS5nZXRIb3VycygpICsgJzonICsgbmV3IERhdGUoKS5nZXRNaW51dGVzKCk7XG4vL1xuLy8gYWxlcnQoIGdldFRpbWUoKSApOyAvLyDRgtC10LrRg9GJ0LXQtSDQstGA0LXQvNGPXG5cblxuLy8gZnVuY3Rpb24gc3VtKHsgYSA9IDEsIGIgPSAxLCBjID0gMSB9ID0geyBhOiAxLCBiOiAwLCBjOiAxIH0pIHtcbi8vICAgY29uc29sZS5sb2coYSArIGIgKyBjKTtcbi8vIH1cbi8vXG4vLyBzdW0oKTsgLy/QstGL0LfQvtCyINCx0LXQtyDQsNGA0LPRg9C80LXQvdGC0L7QsiDQstGL0LfQvtCy0LXRgiDQstGC0L7RgNC+0Lkg0L7QsdGK0LXQutGCICjQtNC10YTQvtC70YLQvdGL0LkpXG4vLyBzdW0oe30pO1xuLy8gc3VtKHsgYTogMSB9KTtcbi8vIHN1bSh7IGI6IDEgfSk7XG4vLyBzdW0oeyBjOiAxIH0pO1xuLy8gc3VtKHsgYTogMSwgYzogMSB9KTtcbi8vIHN1bSh7IGE6IDEsIGI6IDEsIGM6IDEgfSk7XG5cblxuLy8gY29uc3Qgb2JqID0ge1xuLy8gICBuZXN0ZWRPYmo6IHtcbi8vICAgICBrZXk6ICd2YWx1ZScsXG4vLyAgICAga2V5czogWzEsIDIsIDNdLFxuLy8gICAgIGFub3RoZXJBcnJheTogWzQsIDUsIC8qIGhlcmUgZGVmYXVsdCB2YWx1ZSA2ICovXSxcbi8vICAgICBvYmo6IHtcbi8vICAgICAgIGR1ZGU6ICdsb3JlbScsXG4vLyAgICAgICB2YWx1ZTogWzcsOCw5XSAvLyBzYXZlIGFzIGFycmF5XG4vLyAgICAgfSxcbi8vICAgICAvLyBkZWZhdWx0IHZhbHVlIGZvciB0aGUgaGVpZ2h0ID0gMTAwLCB3aWR0aCA9IDIwMCwga2V5cyA9IFsxLCAyLCAzXVxuLy8gICB9LFxuLy8gICBhcnI6IFsxLDIsM10sXG4vLyAgIGR1ZGU6IFtcbi8vICAgICBbMV0sXG4vLyAgICAgWzJdLFxuLy8gICAgIFszXVxuLy8gICBdLFxuLy8gICBmdW5jOiBmdW5jdGlvbigpIHtcbi8vICAgICBhbGVydCgyKTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIGxldCB7XG4vLyAgIG5lc3RlZE9iajoge1xuLy8gICAgIGtleSxcbi8vICAgICBrZXlzOiBba2V5MSwga2V5Miwga2V5M10sXG4vLyAgICAgYW5vdGhlckFycmF5OiBbYXJyMSwgYXJyMiwgYXJyMyA9IDZdLFxuLy8gICAgIG9iajoge1xuLy8gICAgICAgZHVkZSxcbi8vICAgICAgIHZhbHVlLFxuLy8gICAgIH0sXG4vLyAgICAgaGVpZ2h0ID0gMTAwLCB3aWR0aCA9IDIwMCxcbi8vICAgfSxcbi8vICAgYXJyOiBbYXJycjEsIGFycnIyLCBhcnJyM10sXG4vLyAgIGR1ZGU6IFtkdWRlMSwgZHVkZTIsIGR1ZGUzXSxcbi8vICAgZnVuYyxcbi8vIH0gPSBvYmo7XG4vL1xuLy8gYWxlcnQoYXJyMyk7XG5cblxuXG4vLyBsZXQgb3B0aW9ucyA9IHtcbi8vICAgdGl0bGU6IFwi0JzQtdC90Y5cIixcbi8vICAgd2lkdGg6IDEwMCxcbi8vICAgaGVpZ2h0OiAyMDBcbi8vIH07XG4vL1xuLy8gbGV0IHt0aXRsZSwgd2lkdGgsIGhlaWdodH0gPSBvcHRpb25zO1xuLy9cbi8vIC8vbGV0IHRpdGxlID0gb3B0aW9ucy50aXRsZTtcbi8vIC8vbGV0IHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbi8vIC8vbGV0IGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuLy9cbi8vIGFsZXJ0KHRpdGxlKTsgIC8vINCc0LXQvdGOXG4vLyBhbGVydCh3aWR0aCk7ICAvLyAxMDBcbi8vIGFsZXJ0KGhlaWdodCk7IC8vIDIwMFxuXG5cbi8vIHZhciBoZWFkID0ge1xuLy8gICBnbGFzc2VzOiAxXG4vLyB9O1xuLy9cbi8vIHZhciB0YWJsZSA9IHtcbi8vICAgcGVuOiAzLFxuLy8gICBfX3Byb3RvX186IGhlYWRcbi8vIH07XG4vL1xuLy8gdmFyIGJlZCA9IHtcbi8vICAgc2hlZXQ6IDEsXG4vLyAgIHBpbGxvdzogMixcbi8vICAgX19wcm90b19fOiB0YWJsZVxuLy8gfTtcbi8vXG4vLyB2YXIgcG9ja2V0cyA9IHtcbi8vICAgbW9uZXk6IDIwMDAsXG4vLyAgIF9fcHJvdG9fXzogYmVkXG4vLyB9O1xuLy9cbi8vIGNvbnNvbGUubG9nKHBvY2tldHMucGVuKTtcblxuXG4vLyB2YXIgbGVhZGVyID0ge1xuLy8gICBuYW1lOiBcItCS0LDRgdC40LvQuNC5INCY0LLQsNC90L7QstC40YdcIixcbi8vICAgYWdlOiAzNVxuLy8gfTtcbi8vXG4vLyB2YXIgc3RyID0gSlNPTi5zdHJpbmdpZnkobGVhZGVyKTtcbi8vIGNvbnNvbGUubG9nKHN0cik7XG4vL1xuLy8gbGVhZGVyID0gSlNPTi5wYXJzZShzdHIpO1xuLy8gY29uc29sZS5sb2cobGVhZGVyKTtcblxuXG4vLyB2YXIgdXNlciA9IHtcbi8vICAgbmFtZTogXCLQktCw0YHRj1wiLFxuLy8gICBhZ2U6IDI1LFxuLy8gICByb2xlczoge1xuLy8gICAgIGlzQWRtaW46IGZhbHNlLFxuLy8gICAgIGlzRWRpdG9yOiB0cnVlXG4vLyAgIH1cbi8vIH07XG4vL1xuLy8gdmFyIHN0ciA9IEpTT04uc3RyaW5naWZ5KHVzZXIsIFwiXCIsIDQpO1xuLy9cbi8vIGFsZXJ0KCBzdHIgKTtcbi8qINCg0LXQt9GD0LvRjNGC0LDRgiAtLSDQutGA0LDRgdC40LLQviDRgdC10YDQuNCw0LvQuNC30L7QstCw0L3QvdGL0Lkg0L7QsdGK0LXQutGCOlxue1xuICAgIFwibmFtZVwiOiBcItCS0LDRgdGPXCIsXG4gICAgXCJhZ2VcIjogMjUsXG4gICAgXCJyb2xlc1wiOiB7XG4gICAgICAgIFwiaXNBZG1pblwiOiBmYWxzZSxcbiAgICAgICAgXCJpc0VkaXRvclwiOiB0cnVlXG4gICAgfVxufVxuKi9cblxuXG4vLyDQtNCw0YLQsCDQsiDRgdGC0YDQvtC60LUgLSDQsiDRhNC+0YDQvNCw0YLQtSBVVENcbi8vIHZhciBzdHIgPSAne1widGl0bGVcIjpcItCa0L7QvdGE0LXRgNC10L3RhtC40Y9cIixcImRhdGVcIjpcIjIwMTQtMTEtMzBUMTI6MDA6MDAuMDAwWlwifSc7XG4vL1xuLy8gdmFyIGV2ZW50ID0gSlNPTi5wYXJzZShzdHIsIChrZXksIHZhbHVlKSA9PiB7XG4vLyAgIGlmIChrZXkgPT0gJ2RhdGUnKSByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuLy8gICByZXR1cm4gdmFsdWU7XG4vLyB9KTtcbi8vXG4vLyBhbGVydCggZXZlbnQuZGF0ZS5nZXREYXRlKCkgKTsgLy8g0YLQtdC/0LXRgNGMINGB0YDQsNCx0L7RgtCw0LXRgiFcblxuLy/QlNC10LvQviDQsiDRgtC+0LwsINGH0YLQviDQt9C90LDRh9C10L3QuNC10LwgZXZlbnQuZGF0ZSDRj9Cy0LvRj9C10YLRgdGPINGB0YLRgNC+0LrQsCwg0LAg0L7RgtC90Y7QtNGMINC90LUg0L7QsdGK0LXQutGCIERhdGUuXG4vL9Ce0YLQutGD0LTQsCDQvNC10YLQvtC00YMgSlNPTi5wYXJzZSDQt9C90LDRgtGMLCDRh9GC0L4g0L3Rg9C20L3QviDQv9GA0LXQstGA0LDRgtC40YLRjCDRgdGC0YDQvtC60YMg0LjQvNC10L3QvdC+INCyINC00LDRgtGDP1xuLy/QlNC70Y8g0LjQvdGC0LXQu9C70LXQutGC0YPQsNC70YzQvdC+0LPQviDQstC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNGPINC40Lcg0YHRgtGA0L7QutC4INGDIEpTT04ucGFyc2Uoc3RyLCByZXZpdmVyKSDQtdGB0YLRjFxuLy8g0LLRgtC+0YDQvtC5INC/0LDRgNCw0LzQtdGC0YAgcmV2aXZlciwg0LrQvtGC0L7RgNGL0Lkg0Y/QstC70Y/QtdGC0YHRjyDRhNGD0L3QutGG0LjQtdC5IGZ1bmN0aW9uKGtleSwgdmFsdWUpLlxuLy/QldGB0LvQuCDQvtC90LAg0YPQutCw0LfQsNC90LAsINGC0L4g0LIg0L/RgNC+0YbQtdGB0YHQtSDRh9GC0LXQvdC40Y8g0L7QsdGK0LXQutGC0LAg0LjQtyDRgdGC0YDQvtC60LggSlNPTi5wYXJzZSDQv9C10YDQtdC00LDRkdGCXG4vL9C10Lkg0L/QviDQvtGH0LXRgNC10LTQuCDQstGB0LUg0YHQvtC30LTQsNCy0LDQtdC80YvQtSDQv9Cw0YDRiyDQutC70Y7Rhy3Qt9C90LDRh9C10L3QuNC1INC4INC80L7QttC10YIg0LLQvtC30LLRgNCw0YLQuNGC0Ywg0LvQuNCx0L4g0L/RgNC10L7QsdGA0LDQt9C+0LLQsNC90L3QvtC1XG4vLyDQt9C90LDRh9C10L3QuNC1LCDQu9C40LHQviB1bmRlZmluZWQsINC10YHQu9C4INC10LPQviDQvdGD0LbQvdC+INC/0YDQvtC/0YPRgdGC0LjRgtGMLlxuXG5cbi8vIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuLy8gICB2YXIgdHlwZSA9IHt9LnRvU3RyaW5nLmNhbGwoZGF0ZSkuc2xpY2UoOCwgLTEpO1xuLy8gICB2YXIgcmVzdWx0O1xuLy8gICBzd2l0Y2ggKHR5cGUpIHtcbi8vICAgICBjYXNlIFwiU3RyaW5nXCI6XG4vLyAgICAgICByZXN1bHQgPSBuZXcgRGF0ZShkYXRlKTtcbi8vICAgICAgIGJyZWFrO1xuLy8gICAgIGNhc2UgXCJOdW1iZXJcIjpcbi8vICAgICAgIHJlc3VsdCA9IG5ldyBEYXRlKGRhdGUgKiAxMDAwKTsgLy8g0YHRh9C40YLQsNC10Lwg0LIg0LzQuNC70LvQuNGB0LXQutGD0L3QtNCw0YVcbi8vICAgICAgIGJyZWFrO1xuLy8gICAgIGNhc2UgXCJBcnJheVwiOlxuLy8gICAgICAgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZVswXSwgZGF0ZVsxXSwgZGF0ZVsyXSk7XG4vLyAgICAgICBicmVhaztcbi8vICAgICBkZWZhdWx0OlxuLy8gICAgICAgcmVzdWx0ID0gZGF0ZTtcbi8vICAgfVxuLy8gICByZXR1cm4gcmVzdWx0LnRvTG9jYWxlU3RyaW5nKFwicnVcIiwge1xuLy8gICAgIGRheTogJzItZGlnaXQnLFxuLy8gICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4vLyAgICAgeWVhcjogJzItZGlnaXQnXG4vLyAgIH0pO1xuLy8gfVxuLy9cbi8vIGNvbnNvbGUubG9nKCBmb3JtYXREYXRlKCcyMDExLTEwLTAyJykgKTsgLy8gMDIuMTAuMTFcbi8vIGNvbnNvbGUubG9nKCBmb3JtYXREYXRlKDEyMzQ1Njc4OTApICk7IC8vIDE0LjAyLjA5IC8v0L/RgNC40L3QuNC80LDQtdC8INCyINGB0LXQutGD0L3QtNCw0YVcbi8vIGNvbnNvbGUubG9nKCBmb3JtYXREYXRlKFsyMDE0LCAwLCAxXSkgKTsgLy8gMDEuMDEuMTRcbi8vIGNvbnNvbGUubG9nKCBmb3JtYXREYXRlKG5ldyBEYXRlKDIwMTQsIDAsIDEpKSApOyAvLyAwMS4wMS4xNFxuXG5cbi8vIGZ1bmN0aW9uIHNheUhpKHdobykge1xuLy9cbi8vICAgaWYgKEFycmF5LmlzQXJyYXkod2hvKSkge1xuLy8gICAgIHdoby5mb3JFYWNoKHNheUhpKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBhbGVydCggJ9Cf0YDQuNCy0LXRgiwgJyArIHdobyApO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gLy8g0JLRi9C30L7QsiDRgSDQv9GA0LjQvNC40YLQuNCy0L3Ri9C8INCw0YDQs9GD0LzQtdC90YLQvtC8XG4vLyBzYXlIaShcItCS0LDRgdGPXCIpOyAvLyDQn9GA0LjQstC10YIsINCS0LDRgdGPXG4vL1xuLy8gLy8g0JLRi9C30L7QsiDRgSDQvNCw0YHRgdC40LLQvtC8XG4vLyBzYXlIaShbXCLQodCw0YjQsFwiLCBcItCf0LXRgtGPXCJdKTsgLy8g0J/RgNC40LLQtdGCLCDQodCw0YjQsC4uLiDQn9C10YLRj1xuLy9cbi8vIC8vINCS0YvQt9C+0LIg0YEg0LLQu9C+0LbQtdC90L3Ri9C80Lgg0LzQsNGB0YHQuNCy0LDQvNC4IC0g0YLQvtC20LUg0YDQsNCx0L7RgtCw0LXRgiFcbi8vIHNheUhpKFtcItCh0LDRiNCwXCIsIFwi0J/QtdGC0Y9cIiwgW1wi0JzQsNGI0LBcIiwgXCLQrtC70Y9cIl1dKTsgLy8g0J/RgNC40LLQtdGCINCh0LDRiNCwLi7Qn9C10YLRjy4u0JzQsNGI0LAuLtCu0LvRj1xuXG5cbi8vIGZ1bmN0aW9uIGdldENsYXNzKG9iaikge1xuLy8gICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLnNsaWNlKDgsIC0xKTtcbi8vIH1cbi8vXG4vLyBhbGVydCggZ2V0Q2xhc3MobmV3IERhdGUpICk7IC8vIERhdGVcbi8vIGFsZXJ0KCBnZXRDbGFzcyhbMSwgMiwgM10pICk7IC8vIEFycmF5XG5cblxuLy8gdmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG4vL1xuLy8gdmFyIGFyciA9IFsxLCAyXTtcbi8vIGFsZXJ0KCB0b1N0cmluZy5jYWxsKGFycikgKTsgLy8gW29iamVjdCBBcnJheV1cbi8vXG4vLyB2YXIgZGF0ZSA9IG5ldyBEYXRlO1xuLy8gYWxlcnQoIHRvU3RyaW5nLmNhbGwoZGF0ZSkgKTsgLy8gW29iamVjdCBEYXRlXVxuLy9cbi8vIHZhciB1c2VyID0geyBuYW1lOiBcItCS0LDRgdGPXCIgfTtcbi8vIGFsZXJ0KCB0b1N0cmluZy5jYWxsKHVzZXIpICk7IC8vIFtvYmplY3QgT2JqZWN0XVxuXG5cbi8vIGZ1bmN0aW9uIGYoeCkge1xuLy8gICByZXR1cm4gTWF0aC5yYW5kb20oKSp4O1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIG1ha2VDYWNoaW5nKGYpIHtcbi8vICAgdmFyIGNhY2hlID0ge307XG4vL1xuLy8gICByZXR1cm4gZnVuY3Rpb24oeCkge1xuLy8gICAgIGlmICghKHggaW4gY2FjaGUpKSB7XG4vLyAgICAgICBjYWNoZVt4XSA9IGYuY2FsbCh0aGlzLCB4KTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIGNhY2hlW3hdO1xuLy8gICB9O1xuLy9cbi8vIH1cbi8vXG4vLyBmID0gbWFrZUNhY2hpbmcoZik7XG4vL1xuLy8gdmFyIGEgPSBmKDEpO1xuLy8gdmFyIGIgPSBmKDEpO1xuLy8gYWxlcnQoIGEgPT0gYiApOyAvLyB0cnVlICjQt9C90LDRh9C10L3QuNC1INC30LDQutC10YjQuNGA0L7QstCw0L3Qvilcbi8vXG4vLyBiID0gZigyKTtcbi8vIGFsZXJ0KCBhID09IGIgKTsgLy8gZmFsc2UsINC00YDRg9Cz0L7QuSDQsNGA0LPRg9C80LXQvdGCID0+INC00YDRg9Cz0L7QtSDQt9C90LDRh9C10L3QuNC1XG5cblxuLy8gZnVuY3Rpb24gd29yayhhLCBiKSB7XG4vLyAgIHJldHVybiBhICsgYjtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBtYWtlTG9nZ2luZyhmLCBsb2cpIHtcbi8vXG4vLyAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVyKCkge1xuLy8gICAgIGxvZy5wdXNoKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4vLyAgICAgZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gdmFyIGxvZyA9IFtdO1xuLy8gd29yayA9IG1ha2VMb2dnaW5nKHdvcmssIGxvZyk7XG4vL1xuLy8gd29yaygxLCAyKTsgLy8gM1xuLy8gd29yayg0LCA1KTsgLy8gOVxuLy9cbi8vIGZvciAodmFyIGkgPSAwOyBpIDwgbG9nLmxlbmd0aDsgaSsrKSB7XG4vLyAgIGFsZXJ0KCAn0JvQvtCzOiAnICsgbG9nW2ldICk7IC8vIFwi0JvQvtCzOiAxLDJcIiwgXCLQm9C+0LM6IDQsNVwiXG4vLyB9XG5cblxuLy/QlNC10LrQvtGA0LDRgtC+0YAg0LTQu9GPINC/0YDQvtCy0LXRgNC60Lgg0YLQuNC/0LBcbi8vINCy0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90LDRjyDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0L/RgNC+0LLQtdGA0LrQuCDQvdCwINGH0LjRgdC70L5cbi8vIGZ1bmN0aW9uIGNoZWNrTnVtYmVyKHZhbHVlKSB7XG4vLyAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcic7XG4vLyB9XG4vL1xuLy8gLy8g0LTQtdC60L7RgNCw0YLQvtGALCDQv9GA0L7QstC10YDRj9GO0YnQuNC5INGC0LjQv9GLINC00LvRjyBmXG4vLyAvLyDQstGC0L7RgNC+0Lkg0LDRgNCz0YPQvNC10L3RgiBjaGVja3MgLSDQvNCw0YHRgdC40LIg0YEg0YTRg9C90LrRhtC40Y/QvNC4INC00LvRjyDQv9GA0L7QstC10YDQutC4XG4vLyBmdW5jdGlvbiB0eXBlQ2hlY2soZiwgY2hlY2tzKSB7XG4vLyAgIHJldHVybiBmdW5jdGlvbigpIHtcbi8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgaWYgKCFjaGVja3NbaV0oYXJndW1lbnRzW2ldKSkge1xuLy8gICAgICAgICBhbGVydCggXCLQndC10LrQvtGA0YDQtdC60YLQvdGL0Lkg0YLQuNC/INCw0YDQs9GD0LzQtdC90YLQsDogJ1wiICsgYXJndW1lbnRzW2ldICsgXCInLCDQsNGA0LPRg9C80LXQvdGCINC00L7Qu9C20LXQvSDRgdC+0LTQtdGA0LbQsNGC0Ywg0YLQvtC70YzQutC+INGG0LjRhNGA0YsuXCIgKTtcbi8vICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gc3VtKGEsIGIpIHtcbi8vICAgcmV0dXJuIGEgKyBiO1xuLy8gfVxuLy9cbi8vIC8vINC+0LHQtdGA0L3RkdC8INC00LXQutC+0YDQsNGC0L7RgCDQtNC70Y8g0L/RgNC+0LLQtdGA0LrQuFxuLy8gc3VtID0gdHlwZUNoZWNrKHN1bSwgW2NoZWNrTnVtYmVyLCBjaGVja051bWJlcl0pOyAvLyDQvtCx0LAg0LDRgNCz0YPQvNC10L3RgtCwIC0g0YfQuNGB0LvQsFxuLy9cbi8vIC8vINC/0L7Qu9GM0LfRg9C10LzRgdGPINGE0YPQvdC60YbQuNC10Lkg0LrQsNC6INC+0LHRi9GH0L3QvlxuLy8gYWxlcnQoIHN1bSgxLCAyKSApOyAvLyAzLCDQstGB0LUg0YXQvtGA0L7RiNC+XG4vL1xuLy8gLy8g0LAg0LLQvtGCINGC0LDQuiAtINCx0YPQtNC10YIg0L7RiNC40LHQutCwXG4vLyBzdW0odHJ1ZSwgbnVsbCk7IC8vINC90LXQutC+0YDRgNC10LrRgtC90YvQuSDQsNGA0LPRg9C80LXQvdGCINC90L7QvNC10YAgMFxuLy8gc3VtKDEsIFtcImFycmF5XCIsIFwiaW5cIiwgXCJzdW0/IT9cIl0pOyAvLyDQvdC10LrQvtGA0YDQtdC60YLQvdGL0Lkg0LDRgNCz0YPQvNC10L3RgiDQvdC+0LzQtdGAIDFcblxuXG4vLyB2YXIgdGltZXJzID0ge307XG4vL1xuLy8gLy8g0L/RgNC40LHQsNCy0LjRgiDQstGA0LXQvNGPINCy0YvQv9C+0LvQvdC10L3QuNGPIGYg0Log0YLQsNC50LzQtdGA0YMgdGltZXJzW3RpbWVyXVxuLy8gZnVuY3Rpb24gdGltaW5nRGVjb3JhdG9yKGZpYiwgdGltZXIpIHtcbi8vICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuLy8gICAgIHZhciBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuLy9cbi8vICAgICB2YXIgcmVzdWx0ID0gZmliLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vICgqKVxuLy9cbi8vICAgICAvL9Ce0LHRgNCw0YLQuNC8INCy0L3QuNC80LDQvdC40LUg0L3QsCDRgdGC0YDQvtC60YMgKCopINCy0L3Rg9GC0YDQuCDQtNC10LrQvtGA0LDRgtC+0YDQsCwg0LrQvtGC0L7RgNCw0Y8g0Lgg0L7RgdGD0YnQtdGB0YLQstC70Y/QtdGCINC/0LXRgNC10LTQsNGH0YMg0LLRi9C30L7QstCwOlxuLy8gICAgIC8vINCt0YLQvtGCINC/0YDQuNGR0Lwg0L3QsNC30YvQstCw0LXRgtGB0Y8gwqvRhNC+0YDQstCw0YDQtNC40L3QsyDQstGL0LfQvtCy0LDCuyAo0L7RgiDQsNC90LPQuy4gZm9yd2FyZGluZyk6XG4vLyAgICAgLy8g0YLQtdC60YPRidC40Lkg0LrQvtC90YLQtdC60YHRgiDQuCDQsNGA0LPRg9C80LXQvdGC0Ysg0YfQtdGA0LXQtyBhcHBseSDQv9C10YDQtdC00LDRjtGC0YHRjyDQsiDRhNGD0L3QutGG0LjRjiBmLFxuLy8gICAgIC8vINGC0LDQuiDRh9GC0L4g0LjQt9C90YPRgtGA0LggZiDQstGB0ZEg0LLRi9Cz0LvRj9C00LjRgiDRgtCw0LosINC60LDQuiDQsdGL0LvQsCDQstGL0LfQstCw0L3QsCDQvtC90LAg0L3QsNC/0YDRj9C80YPRjiwg0LAg0L3QtSDQtNC10LrQvtGA0LDRgtC+0YAuXG4vL1xuLy8gICAgIGlmICghdGltZXJzW3RpbWVyXSkgdGltZXJzW3RpbWVyXSA9IDA7XG4vLyAgICAgdGltZXJzW3RpbWVyXSArPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0O1xuLy9cbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gLy8g0YTRg9C90LrRhtC40Y8g0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GA0L7QuNC30LLQvtC70YzQvdC+0LksINC90LDQv9GA0LjQvNC10YAg0YLQsNC60L7QuTpcbi8vIHZhciBmaWJvbmFjY2kgPSBmdW5jdGlvbiBmKG4pIHtcbi8vICAgcmV0dXJuIChuID4gMikgPyBmKG4gLSAxKSArIGYobiAtIDIpIDogMTtcbi8vIH1cbi8vXG4vLyAvLyDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtTog0LfQsNCy0LXRgNC90ZHQvCBmaWJvbmFjY2kg0LIg0LTQtdC60L7RgNCw0YLQvtGAXG4vLyBmaWJvbmFjY2kgPSB0aW1pbmdEZWNvcmF0b3IoZmlib25hY2NpLCBcImZpYm9cIik7XG4vL1xuLy8gLy8g0L3QtdC+0LTQvdC+0LrRgNCw0YLQvdGL0LUg0LLRi9C30L7QstGLLi4uXG4vLyBhbGVydCggZmlib25hY2NpKDEwKSApOyAvLyA1NVxuLy8gYWxlcnQoIGZpYm9uYWNjaSgyMCkgKTsgLy8gNjc2NVxuLy9cbi8vIC8vINCyINC70Y7QsdC+0Lkg0LzQvtC80LXQvdGCINC80L7QttC90L4g0L/QvtC70YPRh9C40YLRjCDQvtCx0YnQtdC1INC60L7Qu9C40YfQtdGB0YLQstC+INCy0YDQtdC80LXQvdC4INC90LAg0LLRi9C30L7QstGLXG4vLyBhbGVydCggdGltZXJzLmZpYm8gKyAn0LzRgScgKTtcblxuXG4vLyB2YXIgdXNlciA9IHtcbi8vICAgbmFtZTogJ9CS0LDRgdC40LvQuNC5Jyxcbi8vXG4vLyAgIHNheUhpOiBmdW5jdGlvbigpIHtcbi8vICAgICBhbGVydCggdGhpcy5uYW1lICk7XG4vLyAgIH1cbi8vIH07XG4vL1xuLy8gdmFyIGFkbWluID0gdXNlcjtcbi8vIC8vIHVzZXIgPSBudWxsO1xuLy8gLy8gZGVsZXRlIHVzZXI7IC8v0YPQtNCw0LvRj9C10YIg0YHQstC+0LnRgdGC0LLQsCDQvtCx0YrQtdC60YLQsFxuLy9cbi8vIGFkbWluLnNheUhpKCk7XG4vLyAvLyDQv9GA0Lgg0L7QsdC90YPQu9C10L3QuNC4IHVzZXIg0LLRgdC1INGA0LDQstC90L4g0LHRg9C00LXRgiDQstGL0LLQvtC0XG4vLyAvLyDQv9C+0YLQvtC80YMg0YfRgtC+INC90LAg0L7QsdGK0LXQutGCINC+0YHRgtCw0LvQsNGB0Ywg0YHRgdGL0LvQutCwIFwiYWRtaW5Qb2ludGVyXCJcblxuXG4vL2FzayDQv9C+0LvRg9GH0LDQtdGCINGC0L7Qu9GM0LrQviDRhNGD0L3QutGG0LjRjiwg0LHQtdC3INC+0LHRitC10LrRgtCwLdC60L7QvdGC0LXQutGB0YLQsCAo0LHQtdC3IGJpbmQpXG4vL9CY0YHQv9C+0LvRjNC30YPQtdC8IGJpbmQsINGH0YLQvtCx0Ysg0L/QtdGA0LXQtNCw0YLRjCDQsiBhc2sg0YTRg9C90LrRhtC40Y4g0YEg0YPQttC1INC/0YDQuNCy0Y/Qt9Cw0L3QvdGL0Lwg0LrQvtC90YLQtdC60YHRgtC+0Lxcbi8vIGZ1bmN0aW9uIGFzayhxdWVzdGlvbiwgYW5zd2VyLCBvaywgZmFpbCkge1xuLy8gICB2YXIgcmVzdWx0ID0gcHJvbXB0KHF1ZXN0aW9uLCAnJyk7XG4vLyAgIGlmIChyZXN1bHQudG9Mb3dlckNhc2UoKSA9PSBhbnN3ZXIudG9Mb3dlckNhc2UoKSkgb2soKTtcbi8vICAgZWxzZSBmYWlsKCk7XG4vLyB9XG4vL1xuLy8gdmFyIHVzZXIgPSB7XG4vLyAgIGxvZ2luOiAn0JLQsNGB0LjQu9C40LknLFxuLy8gICBwYXNzd29yZDogJzEyMzQ1Jyxcbi8vXG4vLyAgIC8vINC80LXRgtC+0LQg0LTQu9GPINCy0YvQt9C+0LLQsCDQuNC3IGFza1xuLy8gICBsb2dpbkRvbmU6IGZ1bmN0aW9uKHJlc3VsdCkge1xuLy8gICAgIGFsZXJ0KCB0aGlzLmxvZ2luICsgKHJlc3VsdCA/ICcg0LLQvtGI0ZHQuyDQsiDRgdCw0LnRgicgOiAnINC+0YjQuNCx0LrQsCDQstGF0L7QtNCwJykgKTtcbi8vICAgfSxcbi8vXG4vLyAgIGNoZWNrUGFzc3dvcmQ6IGZ1bmN0aW9uKCkge1xuLy8gICAgIGFzayhcItCS0LDRiCDQv9Cw0YDQvtC70Yw/XCIsIHRoaXMucGFzc3dvcmQsIHRoaXMubG9naW5Eb25lLmJpbmQodGhpcywgdHJ1ZSksIHRoaXMubG9naW5Eb25lLmJpbmQodGhpcywgZmFsc2UpKTtcbi8vICAgfVxuLy8gfTtcbi8vXG4vLyB2YXIgdmFzeWEgPSB1c2VyO1xuLy8gdXNlciA9IG51bGw7XG4vLyB2YXN5YS5jaGVja1Bhc3N3b3JkKCk7XG5cblxuXG5cblxuLy8gLy/Qu9C+0LPQuNC9INGH0LXRgNC10Lcg0LfQsNC80YvQutCw0L3QuNC1XG4vLyBmdW5jdGlvbiBhc2socXVlc3Rpb24sIGFuc3dlciwgb2ssIGZhaWwpIHtcbi8vICAgdmFyIHJlc3VsdCA9IHByb21wdChxdWVzdGlvbiwgJycpO1xuLy8gICBpZiAocmVzdWx0LnRvTG93ZXJDYXNlKCkgPT0gYW5zd2VyLnRvTG93ZXJDYXNlKCkpIG9rKCk7XG4vLyAgIGVsc2UgZmFpbCgpO1xuLy8gfVxuLy9cbi8vIHZhciB1c2VyID0ge1xuLy8gICBsb2dpbjogJ9CS0LDRgdC40LvQuNC5Jyxcbi8vICAgcGFzc3dvcmQ6ICcxMjM0NScsXG4vL1xuLy8gICAvLyDQvNC10YLQvtC0INC00LvRjyDQstGL0LfQvtCy0LAg0LjQtyBhc2tcbi8vICAgbG9naW5Eb25lOiBmdW5jdGlvbihyZXN1bHQpIHtcbi8vICAgICBhbGVydCggdGhpcy5sb2dpbiArIChyZXN1bHQgPyAnINCy0L7RiNGR0Lsg0L3QsCDRgdCw0LnRgicgOiAnINC+0YjQuNCx0LrQsCDQstGF0L7QtNCwJykgKTtcbi8vICAgfSxcbi8vXG4vLyAgIGNoZWNrUGFzc3dvcmQ6IGZ1bmN0aW9uKCkge1xuLy8gICAgIHZhciBzZWxmID0gdGhpcztcbi8vICAgICBhc2soXCLQktCw0Ygg0L/QsNGA0L7Qu9GMP1wiLCB0aGlzLnBhc3N3b3JkLFxuLy8gICAgICAgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIHNlbGYubG9naW5Eb25lKHRydWUpO1xuLy8gICAgICAgfSxcbi8vICAgICAgIGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICBzZWxmLmxvZ2luRG9uZShmYWxzZSk7XG4vLyAgICAgICB9XG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfTtcbi8vXG4vLyB2YXIgdmFzeWEgPSB1c2VyO1xuLy8gdXNlciA9IG51bGw7XG4vLyB2YXN5YS5jaGVja1Bhc3N3b3JkKCk7XG5cblxuLy8gZnVuY3Rpb24gc3VtKGEsIGIpIHtcbi8vICAgaWYgKGIpIHtcbi8vICAgICByZXR1cm4gYSAqIGI7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgICByZXR1cm4gZnVuY3Rpb24oYikge1xuLy8gICAgICAgIHJldHVybiBhICogYjtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBjb25zb2xlLmxvZyhzdW0oMikoMykpO1xuLy8gY29uc29sZS5sb2coc3VtKDIsIDMpKTtcblxuXG4vLyBmdW5jdGlvbiBtdWwoYSwgYikge1xuLy8gICByZXR1cm4gYSAqIGI7XG4vLyB9O1xuLy9cbi8vIC8vIGZ1bmN0aW9uICgpIHsgLy8oKilcbi8vIC8vICAgICByZXR1cm4gbXVsLmFwcGx5KG51bGwsIDIpOyAvL9C/0LXRgNCy0YvQvCDQsNGA0LPRg9C80LXQvdGC0L7QvCDQv9C10YDQtdC00LDQtdC8IDI7XG4vLyAvLyB9XG4vL1xuLy8gLy8gZG91YmxlINGD0LzQvdC+0LbQsNC10YIg0YLQvtC70YzQutC+INC90LAg0LTQstCwICgqKVxuLy8gdmFyIGRvdWJsZSA9IG11bC5iaW5kKG51bGwsIDIpOyAvLyDQutC+0L3RgtC10LrRgdGCINGE0LjQutGB0LjRgNGD0LXQvCBudWxsLCDQvtC9INC90LUg0LjRgdC/0L7Qu9GM0LfRg9C10YLRgdGPXG4vL1xuLy8gYWxlcnQoIGRvdWJsZSgzKSApOyAvLyA9IG11bCgyLCAzKSA9IDZcbi8vIGFsZXJ0KCBkb3VibGUoNCkgKTsgLy8gPSBtdWwoMiwgNCkgPSA4XG4vLyBhbGVydCggZG91YmxlKDUpICk7IC8vID0gbXVsKDIsIDUpID0gMTBcblxuXG4vLyB2YXIgdXNlciA9IHtcbi8vICAgZmlyc3ROYW1lOiBcItCS0LDRgdGPXCIsXG4vLyAgIHNheUhpOiBmdW5jdGlvbigpIHtcbi8vICAgICBhbGVydCggdGhpcy5maXJzdE5hbWUgKTtcbi8vICAgfVxuLy8gfTtcbi8vXG4vLyBmdW5jdGlvbiBiaW5kaW5nKCkgeyAvLyAoKilcbi8vICAgcmV0dXJuIHVzZXIuc2F5SGkuYXBwbHkodXNlciwgYXJndW1lbnRzKTtcbi8vIH07XG4vL1xuLy8gLy8gc2V0VGltZW91dCggYmluZCh1c2VyLnNheUhpLCB1c2VyKSwgMTAwMCApO1xuLy8gc2V0VGltZW91dChiaW5kaW5nLCAxMDAwKTtcbi8vIC8vc2V0VGltZW91dCh1c2VyLnNheUhpLmJpbmQodXNlciksIDEwMDApOyAvLyDQsNC90LDQu9C+0LMg0YfQtdGA0LXQtyDQstGB0YLRgNC+0LXQvdC90YvQuSDQvNC10YLQvtC0LCDQtNC+INCy0YvQt9C+0LLQsCDQt9C90LDRh9C10L3QuNC1IC0tPiAoKilcbi8vYmluZCDQvdC1INCy0YvQt9GL0LLQsNC10YIg0YTRg9C90LrRhtC40Y4uINCe0L0g0YLQvtC70YzQutC+INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCIMKr0L7QsdGR0YDRgtC60YPCuyxcbi8v0LrQvtGC0L7RgNGD0Y4g0LzRiyDQvNC+0LbQtdC8INCy0YvQt9Cy0LDRgtGMINC/0L7Qt9C20LUsINC4INC60L7RgtC+0YDQsNGPINC/0LXRgNC10LTQsNGB0YIg0LLRi9C30L7QsiDQsiDQuNGB0YXQvtC00L3Rg9GOINGE0YPQvdC60YbQuNGOLCDRgSDQv9GA0LjQstGP0LfQsNC90L3Ri9C8INC60L7QvdGC0LXQutGB0YLQvtC8LlxuXG5cbi8vIGZ1bmN0aW9uIHN1bSgpIHtcbi8vICAgcmV0dXJuIFtdLnJlZHVjZS5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24oYSwgYikge1xuLy8gICAgIHJldHVybiBhICsgYjtcbi8vICAgfSk7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gbXVsKCkge1xuLy8gICByZXR1cm4gW10ucmVkdWNlLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbihhLCBiKSB7XG4vLyAgICAgcmV0dXJuIGEgKiBiO1xuLy8gICB9KTtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBhcHBseUFsbChmdW5jKSB7XG4vLyAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbi8vIH1cbi8vXG4vLyBhbGVydCggYXBwbHlBbGwoc3VtLCAxLCAyLCAzKSApOyAvLyA2ICAvL2Z1bmMg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRjyDQsiDQutC+0L3RgtC10LrRgdGC0LUgc3VtINGBINCw0YDQs9GD0LzQtdC90YLQsNC80LggW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuLy8gYWxlcnQoIGFwcGx5QWxsKG11bCwgMiwgMywgNCkgKTsgLy8gMjRcbi8vIGFsZXJ0KCBhcHBseUFsbChNYXRoLm1heCwgMiwgLTIsIDMpICk7IC8vIDNcbi8vIGFsZXJ0KCBhcHBseUFsbChNYXRoLm1pbiwgMiwgLTIsIDMpICk7IC8vIC0yXG5cblxuLy8gZnVuY3Rpb24gc3VtQXJncygpIHtcbi8vICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4vL1xuLy8gICByZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xuLy8gICAgIHJldHVybiBhICsgYjtcbi8vICAgfSk7XG4vLyB9XG4vL1xuLy8gYWxlcnQoIHN1bUFyZ3MoMSwgMiwgMykgKTsgLy8gNiAoPTErMiszKVxuXG4vLyBmdW5jdGlvbiBzdW1BcmdzKCkgeyAvL9C60L7Qv9C40YDRg9C10Lwg0LzQtdGC0L7QtCDQuNC3INC80LDRgdGB0LjQstCwICjQv9GA0L7RgdGC0L4g0LLQtdGA0L3QtdC8INC60L7QtCDRhNGD0L3QutGG0LjQuCByZWR1Y2Uo0LLQvdGD0YLRgNC10L3QvdC40LkpKVxuLy8gICAvLyDQt9Cw0L/Rg9GB0YLQuNC8IHJlZHVjZSDQuNC3INC80LDRgdGB0LjQstCwINC90LDQv9GA0Y/QvNGD0Y4gLS0tPiBbXS5yZWR1Y2UgPT4gcmVkdWNlKCB7IE5hdGl2ZSBjb2RlIH0gKVxuLy8gICByZXR1cm4gW10ucmVkdWNlLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbihhLCBiKSB7IC8v0L/QuNC30LTQuNC8IHJlZHVjZSDRgyDQvNCw0YHRgdC40LLQsCDQuCDQstGL0LfRi9Cy0LDQtdC8INCyINC60L7QvdGC0LXQutGB0YLQtSBhcmd1bWVudHMgPSBbNCw1LDZdO1xuLy8gICAgIHJldHVybiBhICsgYjtcbi8vICAgfSk7XG4vLyB9XG4vL1xuLy8gYWxlcnQoIHN1bUFyZ3MoNCwgNSwgNikgKTsgLy8gMTVcblxuXG4vLyAvLyDQtNC10LvQsNC10Lwg0LjQtyBhcmd1bWVudHMg0L/QvtC70L3QvtGG0LXQvdC90YvQuSDQvNCw0YHRgdC40LIhISFcbi8vIGZ1bmN0aW9uIHByaW50QXJncygpIHtcbi8vICAgLy8g0LLRi9C30L7QsiBhcnIuc2xpY2UoKSDRgdC60L7Qv9C40YDRg9C10YIg0LLRgdC1INGN0LvQtdC80LXQvdGC0Ysg0LjQtyB0aGlzINCyINC90L7QstGL0Lkg0LzQsNGB0YHQuNCyXG4vLyAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuLy8gICBhbGVydCggYXJncy5qb2luKCcsICcpICk7IC8vIGFyZ3MgLSDQv9C+0LvQvdC+0YbQtdC90L3Ri9C5INC80LDRgdGB0LjQsiDQuNC3INCw0YDQs9GD0LzQtdC90YLQvtCyXG4vLyB9XG4vL1xuLy8gcHJpbnRBcmdzKCfQn9GA0LjQstC10YInLCAn0LzQvtC5JywgJ9C80LjRgCcpOyAvLyDQn9GA0LjQstC10YIsINC80L7QuSwg0LzQuNGAXG5cblxuLy8gZnVuY3Rpb24gcHJpbnRBcmdzKCkge1xuLy8gICB2YXIgam9pbiA9IFtdLmpvaW47IC8vINGB0LrQvtC/0LjRgNGD0LXQvCDRgdGB0YvQu9C60YMg0L3QsCDRhNGD0L3QutGG0LjRjiDQsiDQv9C10YDQtdC80LXQvdC90YPRjlxuLy9cbi8vICAgLy8g0LLRi9C30L7QstC10Lwgam9pbiDRgSB0aGlzPWFyZ3VtZW50cyxcbi8vICAgLy8g0Y3RgtC+0YIg0LLRi9C30L7QsiDRjdC60LLQuNCy0LDQu9C10L3RgtC10L0gYXJndW1lbnRzLmpvaW4oJzonKSDQuNC3INC/0YDQuNC80LXRgNCwINCy0YvRiNC1XG4vLyAgIHZhciBhcmdTdHIgPSBqb2luLmNhbGwoYXJndW1lbnRzLCAnOicpO1xuLy9cbi8vICAgYWxlcnQoIGFyZ1N0ciApOyAvLyDRgdGA0LDQsdC+0YLQsNC10YIg0Lgg0LLRi9Cy0LXQtNC10YIgMToyOjNcbi8vIH1cbi8vXG4vLyBwcmludEFyZ3MoMSwgMiwgMyk7XG5cblxuLy/QutC+0L/QuNGA0YPQtdC8INC80LXRgtC+0LQgam9pbiDRgyDQvNCw0YHRgdC40LLQsFxuLy8gZnVuY3Rpb24gcHJpbnRBcmdzKCkge1xuLy8gICBhcmd1bWVudHMuam9pbiA9IFtdLmpvaW47IC8vINC+0LTQvtC70LbQuNC70Lgg0LzQtdGC0L7QtCAoMSlcbi8vXG4vLyAgIHZhciBhcmdTdHIgPSBhcmd1bWVudHMuam9pbignOicpOyAvLyAoMilcbi8vXG4vLyAgIGFsZXJ0KCBhcmdTdHIgKTsgLy8g0YHRgNCw0LHQvtGC0LDQtdGCINC4INCy0YvQstC10LTQtdGCIDE6MjozXG4vLyB9XG4vL1xuLy8gcHJpbnRBcmdzKDEsIDIsIDMpO1xuXG5cbi8v0J/QvtC00YHRh9GR0YIg0L7QsdGJ0LXQs9C+INC60L7Qu9C40YfQtdGB0YLQstCwINGB0L7Qt9C00LDQvdC90YvRhSDQvtCx0YrQtdC60YLQvtCyLlxuLy/Ql9Cw0L/QvtC80LjQvdCw0L3QuNC1INC00LDRgtGLINC/0L7RgdC70LXQtNC90LXQs9C+INGB0L7Qt9C00LDQvdC90L7Qs9C+INC+0LHRitC10LrRgtCwLlxuLy8gZnVuY3Rpb24gQXJ0aWNsZSgpIHtcbi8vICAgdGhpcy5jcmVhdGVkID0gbmV3IERhdGUoKTsgLy90aGlzIC0g0Y3RgtC+INC90L7QstGL0Lkg0L7QsdGK0LXQutGCINC/0YDQuCDQutC+0L3RgdGC0YDRg9C40YDQvtCy0LDQvdC40Lgg0YfQtdGA0LXQtyBuZXcgQXJ0aWNsZSgpO1xuLy9cbi8vICAgQXJ0aWNsZS5jb3VudCsrO1xuLy8gICBBcnRpY2xlLmxhc3QgPSB0aGlzLmNyZWF0ZWQ7XG4vLyAgIC8v0KHQvtC30LTQsNC10Lwg0YHRgtCw0YLQuNGH0LXRgdC60L7QtSDRgdCy0L7QudGB0YLQstC+LiDQrdGC0L4g0YHQstC+0LnRgdGC0LLQviDQvdC1INC/0LXRgNC10LTQsNC10YLRgdGPINCyINC90L7QstGL0Lkg0L7QsdGK0LXQutGCLFxuLy8gICAvL9GB0L7Qt9C00LDQvdC90YvQuSDRh9C10YDQtdC3INC90LDRiCDQutC+0L3RgdGC0YDRg9C60YLQvtGALiDQntC90L4g0YTQuNC60YHQuNGA0YPQtdGC0YHRjyDQsiDRgdCw0LzQvtC5INGE0YPQvdC60YbQuNC4INC00LvRjyDQt9Cw0L/QvtC80LjQvdCw0L3QuNGPINC00LDRgtGLINC90L7QstC+0LPQviDQvtCx0YrQtdC60YLQsC5cbi8vICAgLy/QodC80YvRgdC7INCyINGC0L7QvCwg0YfRgtC+INGB0YLQsNGC0LjRh9C10YHQutC40LUg0LzQtdGC0L7QtNGLINC90LUg0YPRh9Cw0YHRgtCy0YPRjtGCINCyINGE0L7RgNC80LjRgNC+0LLQsNC90LjQuCDQvdC+0LLQvtCz0L4g0L7QsdGK0LXQutGC0LAg0YfQtdGA0LXQtyDQutC+0L3RgdGC0YDRg9C60YLQvtGALCDQsFxuLy8gICAvL9C/0YDQuNC80LXQvdGP0Y7RgtGB0Y8g0LTQu9GPINCy0YHQtdGFLCDRgtC40L/QuNC30LjRgNC+0LLQsNC90L3Ri9GFINGH0LXRgNC10Lcg0LrQvtC90YHRgtGA0YPQutGC0L7RgCDQvtCx0YrQtdC60YLQvtCyLlxuLy9cbi8vICAgLy/QnNGLINC/0YDQvtGB0YLQviDQv9C10YDQtdC+0L/RgNC10LTQtdC70Y/QtdC8INGB0LLQvtC50YHRgtCy0L4gXCJ0aGlzLmNyZWF0ZWRcIiDQsiBcInRoaXMubGFzdFwiLlxuLy8gICAvL9Ce0L3QviDQv9C10YDQtdC00LDQtdGC0YHRjyDQsiDQvdC+0LLRi9C5INC+0LHRitC10LrRgiwg0L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwsINC60LDQuiDRgdGC0LDRgtC40YfQtdGB0LrQuNC5INC80LXRgtC+0LQg0LzRiyDQtdCz0L4g0L3QtSDQvNC+0LbQtdC8LlxuLy8gfVxuLy9cbi8vIEFydGljbGUuY291bnQgPSAwO1xuLy9cbi8vIEFydGljbGUuc2hvd1N0YXRzID0gZnVuY3Rpb24oKSB7XG4vLyAgIGFsZXJ0KCAn0JLRgdC10LPQvjogJyArIHRoaXMuY291bnQgKyAnLCDQn9C+0YHQu9C10LTQvdGP0Y86ICcgKyB0aGlzLmxhc3QgKTtcbi8vIH07XG4vL1xuLy8gbmV3IEFydGljbGUoKTtcbi8vIG5ldyBBcnRpY2xlKCk7XG4vL1xuLy8gQXJ0aWNsZS5zaG93U3RhdHMoKTsgLy8g0JLRgdC10LPQvjogMiwg0J/QvtGB0LvQtdC00L3Rj9GPOiAo0LTQsNGC0LApXG4vL1xuLy8gbmV3IEFydGljbGUoKTtcbi8vXG4vLyBBcnRpY2xlLnNob3dTdGF0cygpOyAvLyDQktGB0LXQs9C+OiAzLCDQn9C+0YHQu9C10LTQvdGP0Y86ICjQtNCw0YLQsClcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8v0YHQstC+0LnRgdGC0LLQviBjb3VudCDQvtGC0L3QvtGB0LjRgtGB0Y8g0Log0YHQsNC80L7QuSDRhNGD0L3QutGG0LjQuC3QutC+0L3RgdGC0YDRg9C60YLQvtGA0YMgQXJ0aWNsZSwg0YIu0LUg0YTQsNC60YLQuNGH0LXRgdC60Lgg0Y/QstC70Y/QtdGC0YHRjyDRgdCy0L7QudGB0YLQstC+0LwgQXJ0aWNsZSxcbi8v0LAg0LLQvtGCINGB0LLQvtC50YHRgtCy0L4gY3JlYXRlZCDQvtGC0L3QvtGB0LjRgtGB0Y8g0Log0LrQsNC60L7QvNGDLdC70LjQsdC+INC+0LHRitC10LrRgtGDLCDRgdC+0LfQtNCw0L3QvdC+0LzRgyDRgSDQv9C+0LzQvtGJ0YzRjiBuZXcgQXJ0aWNsZSgpLlxuLy/QndCw0L/RgNC40LzQtdGAINC/0L7RgdC70LUg0LLRi9C/0L7Qu9C90LXQvdC40Y8g0LrQvtC00LBcblxuLy92YXIgc29tZUFydGljbGUgPSBuZXcgQXJ0aWNsZSgpO1xuXG4vL9CyIHNvbWVBcnRpY2xlINCx0YPQtNC10YIg0YHQstC+0LnRgdGC0LLQviBjcmVhdGVkLCDQsCDQsiDRgdCw0LzQvtC5INGE0YPQvdC60YbQuNC4IEFydGljbGUg0LHRg9C00LXRgiDRgdCy0L7QudGB0YLQstC+IGNvdW50KNGE0YPQvdC60YbQuNC4INGN0YLQviDRgNCw0LfQvdC+0LLQuNC00L3QvtGB0YLRjCDQvtCx0YrQtdC60YLQvtCyKNC90L4g0L3QtSDQvdCw0L7QsdC+0YDQvtGCKSkuXG5cbi8v0KLQviDRh9C10LzRgyDRgNCw0LLQtdC9IHRoaXMg0LfQsNCy0LjRgdC40YIg0L7RgiDRgtC+0LPQviDQs9C00LUg0L7QvSDQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y9cblxuLy90aGlzLmNyZWF0ZWQg0LjRgdC/0L7Qu9GM0LfRg9C10YLRgdGPINCyINC60L7QtNC1INGE0YPQvdC60YbQuNC4LdC60L7QvdGB0YLRgNGD0LrRgtC+0YDQsCBBcnRpY2xlLCDQv9C+0Y3RgtC+0LzRgyB0aGlzINCyINC90ZHQvCAtINGN0YLQviDRgdGB0YvQu9C60LAg0L3QsCDRgdC+0LfQtNCw0LLQsNC10LzRi9C5INGBINC/0L7QvNC+0YnRjNGOINGN0YLQvtCz0L4g0LrQvtC90YHRgtGA0YPQutGC0L7RgNCwINC+0LHRitC10LrRgi5cbi8v0JAg0LXRgdC70Lgg0YLRg9GCINC20LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMIHRoaXMuY291bnQsINGC0L4g0YTRg9C90LrRhtC40Y8g0LHRg9C00LXRgiDQuNGB0LrQsNGC0Ywg0Y3RgtC+INGB0LLQvtC50YHRgtCy0L4g0LIg0YHQvtC30LTQsNCy0LDQtdC80L7QvCDQvtCx0YrQtdC60YLQtSwg0YfRgtC+INCx0LXRgdGB0LzRi9GB0LvQtdC90L3Qvi5cbi8v0JAg0LLQvtGCINCyINC60L7QtNC1INC80LXRgtC+0LTQsCBBcnRpY2xlLnNob3dTdGF0cygpIHRoaXMg0Y/QstC70Y/QtdGC0YHRjyDRgdGB0YvQu9C60L7QuSDQvdCwINGB0LDQvCBBcnRpY2xlO1xuLy90aGlzLmNvdW50INGN0YLQvtGCINC60L7QtCDQvdCw0LnQtNGR0YIsINCwINCy0L7RgiB0aGlzLmNyZWF0ZWQgLSDQvdC10YIsINCy0LXQtNGMINCyIEFydGljbGUg0L3QtdGCINGB0LLQvtC50YHRgtCy0LAgY3JlYXRlZC5cblxuLy/QldGB0LvQuCDQv9C+0LTRi9GC0L7QttC40YLRjCwg0YLQviDQtNCw0L3QvdGL0Lkg0LrQvtC0INC90LUg0YDQsNCx0L7RgtCw0LXRgiwg0YIu0LouIGNvdW50INC4IGNyZWF0ZWQg0Y/QstC70Y/RjtGC0YHRjyDRgdCy0L7QudGB0YLQstCw0LzQuCDRgNCw0LfQvdGL0YUg0L7QsdGK0LXQutGC0L7QslxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbi8vIGZ1bmN0aW9uIFVzZXIodXNlckRhdGEpIHtcbi8vICAgaWYgKHVzZXJEYXRhKSB7IC8vINC10YHQu9C4INGD0LrQsNC30LDQvdGLINC00LDQvdC90YvQtSAtLSDQvtC00L3QsCDQstC10YLQutCwIGlmXG4vLyAgICAgdGhpcy5uYW1lID0gdXNlckRhdGEubmFtZTtcbi8vICAgICB0aGlzLmFnZSA9IHVzZXJEYXRhLmFnZTtcbi8vICAgfSBlbHNlIHsgLy8g0LXRgdC70Lgg0L3QtSDRg9C60LDQt9Cw0L3RiyAtLSDQtNGA0YPQs9Cw0Y9cbi8vICAgICB0aGlzLm5hbWUgPSAn0JDQvdC+0L3QuNC8Jztcbi8vICAgfVxuLy9cbi8vICAgdGhpcy5zYXlIaSA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIGFsZXJ0KHRoaXMubmFtZSlcbi8vICAgfTtcbi8vICAgLy8gLi4uXG4vLyB9XG4vL1xuLy8gLy8g0JjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LVcbi8vXG4vLyB2YXIgZ3Vlc3QgPSBuZXcgVXNlcigpO1xuLy8gZ3Vlc3Quc2F5SGkoKTsgLy8g0JDQvdC+0L3QuNC8XG4vL1xuLy8gdmFyIGtub3duVXNlciA9IG5ldyBVc2VyKHtcbi8vICAgbmFtZTogJ9CS0LDRgdGPJyxcbi8vICAgYWdlOiAyNVxuLy8gfSk7XG4vLyBrbm93blVzZXIuc2F5SGkoKTsgLy8g0JLQsNGB0Y9cblxuXG4vLyAvL1wi0KTQsNCx0YDQuNGH0L3Ri9C5INGB0YLQsNGC0LjRh9C10YHQutC40Lkg0LzQtdGC0L7QtFwiXG4vLyAvL9Ci0LDQuiDQvdCw0LfRi9Cy0LDQtdGC0YHRjyDRgdGC0LDRgtC40YfQtdGB0LrQuNC5INC80LXRgtC+0LQsINC60L7RgtC+0YDRi9C5INGB0LvRg9C20LjRgiDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyDQvdC+0LLRi9GFINC+0LHRitC10LrRgtC+0LIgKNC/0L7RjdGC0L7QvNGDINC4INC90LDQt9GL0LLQsNC10YLRgdGPIMKr0YTQsNCx0YDQuNGH0L3Ri9C8wrspLlxuLy8gZnVuY3Rpb24gVXNlcigpIHtcbi8vICAgdGhpcy5zYXlIaSA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIGFsZXJ0KHRoaXMubmFtZSlcbi8vICAgfTtcbi8vIH1cbi8vXG4vLyBVc2VyLmNyZWF0ZUFub255bW91cyA9IGZ1bmN0aW9uKCkge1xuLy8gICB2YXIgdXNlciA9IG5ldyBVc2VyO1xuLy8gICB1c2VyLm5hbWUgPSAn0JDQvdC+0L3QuNC8Jztcbi8vICAgcmV0dXJuIHVzZXI7XG4vLyB9XG4vL1xuLy8gVXNlci5jcmVhdGVGcm9tRGF0YSA9IGZ1bmN0aW9uKHVzZXJEYXRhKSB7XG4vLyAgIHZhciB1c2VyID0gbmV3IFVzZXI7XG4vLyAgIHVzZXIubmFtZSA9IHVzZXJEYXRhLm5hbWU7XG4vLyAgIHVzZXIuYWdlID0gdXNlckRhdGEuYWdlO1xuLy8gICByZXR1cm4gdXNlcjtcbi8vIH1cbi8vXG4vLyAvLyDQmNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtVxuLy9cbi8vIHZhciBndWVzdCA9IFVzZXIuY3JlYXRlQW5vbnltb3VzKCk7XG4vLyBndWVzdC5zYXlIaSgpOyAvLyDQkNC90L7QvdC40Lxcbi8vXG4vLyB2YXIga25vd25Vc2VyID0gVXNlci5jcmVhdGVGcm9tRGF0YSh7XG4vLyAgIG5hbWU6ICfQktCw0YHRjycsXG4vLyAgIGFnZTogMjVcbi8vIH0pO1xuLy8ga25vd25Vc2VyLnNheUhpKCk7IC8vINCS0LDRgdGPXG5cblxuLy8gLy/Qv9C+0LjRgdC6INGB0LDQvNC+0LPQviDQv9C+0LfQtNC90LXQs9C+INC20YPRgNC90LDQu9CwINC40Lcg0LzQsNGB0YHQuNCy0LBcbi8vIGZ1bmN0aW9uIEpvdXJuYWwoZGF0ZSkge1xuLy8gICB0aGlzLmRhdGUgPSBkYXRlO1xuLy9cbi8vICAgdGhpcy5mb3JtYXREYXRlID0gZnVuY3Rpb24oZGF0ZSkge1xuLy8gICAgIHJldHVybiBkYXRlLmdldERhdGUoKSArICcuJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSArICcuJyArIGRhdGUuZ2V0RnVsbFllYXIoKTtcbi8vICAgfTtcbi8vXG4vLyAgIHRoaXMuZ2V0VGl0bGUgPSBmdW5jdGlvbigpIHtcbi8vICAgICByZXR1cm4gXCLQktGL0L/Rg9GB0Log0L7RgiBcIiArIHRoaXMuZm9ybWF0RGF0ZSh0aGlzLmRhdGUpO1xuLy8gICB9O1xuLy9cbi8vIH1cbi8vXG4vLyBKb3VybmFsLmNvbXBhcmUgPSBmdW5jdGlvbihqb3VybmFsQSwgam91cm5hbEIpIHtcbi8vICAgcmV0dXJuIGpvdXJuYWxBLmRhdGUgLSBqb3VybmFsQi5kYXRlO1xuLy8gfTtcbi8vXG4vLyAvLyDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtTpcbi8vIHZhciBqb3VybmFscyA9IFtcbi8vICAgbmV3IEpvdXJuYWwobmV3IERhdGUoMjAxMywgMSwgMSkpLFxuLy8gICBuZXcgSm91cm5hbChuZXcgRGF0ZSgyMDEyLCAxLCAxKSksXG4vLyAgIG5ldyBKb3VybmFsKG5ldyBEYXRlKDIwMTEsIDAsIDEpKSxcbi8vICAgbmV3IEpvdXJuYWwobmV3IERhdGUoMjAwOSwgMCwgMSkpLFxuLy8gICBuZXcgSm91cm5hbChuZXcgRGF0ZSgyMDE4LCAwLCAxKSksXG4vLyAgIG5ldyBKb3VybmFsKG5ldyBEYXRlKDIwMTQsIDAsIDEpKVxuLy8gXTtcbi8vXG4vL1xuLy8gZnVuY3Rpb24gZmluZE1heChqb3VybmFscykge1xuLy8gICB2YXIgbWF4ID0gMDtcbi8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBqb3VybmFscy5sZW5ndGg7IGkrKykge1xuLy8gICAgIC8vINC40YHQv9C+0LvRjNC30YPQtdC8INGB0YLQsNGC0LjRh9C10YHQutC40Lkg0LzQtdGC0L7QtFxuLy8gICAgIGlmIChKb3VybmFsLmNvbXBhcmUoam91cm5hbHNbaV0sIGpvdXJuYWxzW21heF0pID4gMCkgbWF4ID0gaTtcbi8vICAgfVxuLy8gICByZXR1cm4gam91cm5hbHNbbWF4XTtcbi8vIH1cbi8vXG4vLyBhbGVydCggZmluZE1pbihqb3VybmFscykuZ2V0VGl0bGUoKSApO1xuXG5cbi8vIGZ1bmN0aW9uIFVzZXIoZnVsbE5hbWUpIHtcbi8vICAgdGhpcy5mdWxsTmFtZSA9IGZ1bGxOYW1lO1xuLy9cbi8vICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuLy8gICAgIGZpcnN0TmFtZToge1xuLy9cbi8vICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIHJldHVybiB0aGlzLmZ1bGxOYW1lLnNwbGl0KCcgJylbMF07XG4vLyAgICAgICB9LFxuLy9cbi8vICAgICAgIHNldDogZnVuY3Rpb24obmV3Rmlyc3ROYW1lKSB7XG4vLyAgICAgICAgIHRoaXMuZnVsbE5hbWUgPSBuZXdGaXJzdE5hbWUgKyAnICcgKyB0aGlzLmxhc3ROYW1lO1xuLy8gICAgICAgfVxuLy9cbi8vICAgICB9LFxuLy9cbi8vICAgICBsYXN0TmFtZToge1xuLy9cbi8vICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIHJldHVybiB0aGlzLmZ1bGxOYW1lLnNwbGl0KCcgJylbMV07XG4vLyAgICAgICB9LFxuLy9cbi8vICAgICAgIHNldDogZnVuY3Rpb24obmV3TGFzdE5hbWUpIHtcbi8vICAgICAgICAgdGhpcy5mdWxsTmFtZSA9IHRoaXMuZmlyc3ROYW1lICsgJyAnICsgbmV3TGFzdE5hbWU7XG4vLyAgICAgICB9XG4vL1xuLy8gICAgIH1cbi8vXG4vLyAgIH0pO1xuLy8gfVxuLy9cbi8vIHZhciB2YXN5YSA9IG5ldyBVc2VyKFwi0JLQsNGB0LjQu9C40Lkg0J/QvtC/0LrQuNC9XCIpO1xuLy9cbi8vIC8vINGH0YLQtdC90LjQtSBmaXJzdE5hbWUvbGFzdE5hbWVcbi8vIGFsZXJ0KCB2YXN5YS5maXJzdE5hbWUgKTsgLy8g0JLQsNGB0LjQu9C40Llcbi8vIGFsZXJ0KCB2YXN5YS5sYXN0TmFtZSApOyAvLyDQn9C+0L/QutC40L1cbi8vXG4vLyAvLyDQt9Cw0L/QuNGB0Ywg0LIgbGFzdE5hbWVcbi8vIHZhc3lhLmxhc3ROYW1lID0gJ9Ch0LjQtNC+0YDQvtCyJztcbi8vXG4vLyBhbGVydCggdmFzeWEuZnVsbE5hbWUgKTsgLy8g0JLQsNGB0LjQu9C40Lkg0KHQuNC00L7RgNC+0LJcblxuXG4vLyBmdW5jdGlvbiBDYWxjdWxhdG9yKCBzdHIgKSB7XG4vLyAvLyDQodC+0LfQtNCw0LXQvCDQvtCx0YrQtdC60YIg0LIg0LvQvtC60LDQu9GM0L3QvtC5INC+0LHQu9Cw0YHRgtC4INCy0LjQtNC40LzQvtGB0YLQuFxuLy8gLy8g0JXQs9C+INC80L7QttC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCyINGE0YPQvdC60YbQuNC4LCDQvdC+INC+0YIg0LLQvdC10YjQvdC10LPQviDQtNC+0YHRgtGD0L/QsCDQvtC9INGB0LrRgNGL0YJcbi8vICB2YXIgbWV0aG9kcyA9IHtcbi8vICAgICcrJzogZnVuY3Rpb24oIGEsIGIgKSB7XG4vLyAvLyDQkiDRgdCy0L7QudGB0YLQstC1INC+0LHRitC10LrRgtCwIC0g0LzQtdGC0L7QtCwg0YIu0LUsINGE0YPQvdC60YbQuNGPLiDQmNC80Y8g0LzQtdGC0L7QtNCwIC0g0L7Qv9C10YDQsNGC0L7RgCAoINC/0L7QutCwINGC0L7Qu9GM0LrQviArINC4IC0gKVxuLy8gLy8gJysnINC4ICctJyAtINC+0LHRi9GH0L3Ri9C1INC90LDQt9Cy0LDQvdC40Y8g0LzQtdGC0L7QtNCwLCDRgtCw0LrQuNC1INC20LUsINC60LDQuiwg0L3QsNC/0YDQuNC80LXRgCBuYW1lXG4vLyAgICAgIHJldHVybiBhICsgYjtcbi8vICAgIH0sXG4vLyAgICAnLSc6IGZ1bmN0aW9uICggYSwgYiApIHtcbi8vICAgICAgcmV0dXJuIGEgLSBiO1xuLy8gICAgfVxuLy8gIH07XG4vLyAgdGhpcy5jYWxjdWxhdGUgPSBmdW5jdGlvbiggc3RyICkge1xuLy8gLy8g0JfQtNC10YHRjCAtINC80LXRgtC+0LQg0YfQtdGA0LXQtyB0aGlzLCDQvtC9INCx0YPQtNC10YIg0LLRi9GF0L7QtNC40YLRjCDQsiDQs9C70L7QsdCw0LvRjNC90YPRjiDQvtCx0LvQsNGB0YLRjFxuLy8gICAgdmFyIHNwbGl0ID0gc3RyLnNwbGl0KCAnICcgKTtcbi8vICAgIC8vINCk0YPQvdC60YbQuNGPINC40YHQv9C+0LvRjNC30YPQtdGCINGB0YLRgNC+0LrRgyBcIjIgKiogM1wiINC00LvRjyDQv9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNGPINCyINC80LDRgdGB0LjQsjogc3BsaXQgPSBbICcyJywgJyoqJywgJzMnIF1cbi8vICAgIHZhciBhID0gK3NwbGl0WzBdO1xuLy8gLy8g0J/QtdGA0LLRi9C5INGN0LvQtdC80LXQvdGCINC80LDRgdGB0LjQstCwLiDQl9C90LDQuiDQv9C70Y7RgSAtINC/0YDQtdC+0LHRgNCw0LfQvtCy0LDQvdC40LUg0Log0YfQuNGB0LvRg1xuLy8gICAgdmFyIG9wID0gc3BsaXRbMV07XG4vLyAvLyDQktGC0L7RgNC+0Lkg0Y3Qu9C10LzQtdC90YIg0LHQtdC3INC/0YDQtdC+0LHRgNCw0LfQvtCy0LDQvdC40Y8g0Log0YfQuNGB0LvRgy4g0JrQsNC6INC10YHRgtGMOiAnKionXG4vLyAgICB2YXIgYiA9ICtzcGxpdFsyXTtcbi8vIC8vINCQ0L3QsNC70L7Qs9C40YfQvdC+INC/0LXRgNCy0L7QvNGDLlxuLy8gLy8g0KLQtdC/0LXRgNGMIGEgPSAyLCBvcCA9ICcqKicsIGIgPSAzXG4vL1xuLy8gICAgaWYgKCAhbWV0aG9kc1tvcF0gfHwgaXNOYU4oIGEgKSB8fCBpc05hTiggYiApICkge1xuLy8gLy8g0J/RgNC+0LLQtdGA0LrQsCDQvdCwINC+0YjQuNCx0LrQuFxuLy8gLy8gIW1ldGhvZHNbb3BdIC0g0LXRgdC70Lgg0LLRgtC+0YDQvtC5INGN0LvQtdC80LXQvdGCINC+0YLRgdGD0YLRgdGC0LLRg9C10YJcbi8vIC8vINC40LvQuCDQv9C10YDQstGL0Lkg0LjQu9C4INGC0YDQtdGC0LjQuSDQv9GA0L7RhdC+0LTRj9GCINC/0YDQvtCy0LXRgNC60YMg0L3QsCBOYU4gYyDRgNC10LfRg9C70YzRgtCw0YLQvtC8IHRydWUuLi5cbi8vICAgICAgcmV0dXJuIE5hTjtcbi8vIC8vINCy0LXRgNC90YPRgtGMIE5hTiwg0LXRgdC70Lgg0YPRgdC70L7QstC40LUg0LLRi9GI0LUg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRj1xuLy8gICAgfVxuLy9cbi8vICAgIHJldHVybiBtZXRob2RzW29wXSggYSwgYiApO1xuLy8gICAgLy8g0JLQvtC30LLRgNCw0YnQsNC10Lwg0LzQtdGC0L7QtCBtZXRob2RzW29wXS4g0JIg0L3QsNGI0LXQvCDRgdC70YPRh9Cw0LUg0Y3RgtC+IG1ldGhvZHNbJyoqJ11cbi8vICAgIC8vINCf0YDQuCDQvtCx0YDQsNGJ0LXQvdC40Lgg0Log0L3QtdC80YMsINC+0L0g0LfQsNC/0YPRgdC60LDQtdGCINGE0YPQvdC60YbQuNGOIGZ1bmN0aW9uKDIsIDMpIHtcbi8vICAgIC8vIHJldHVybiBNYXRoLnBvdygyLCAzKTtcbi8vICAgIC8vfSk7XG4vLyAgICAvLyDQpNCw0LrRgtC40YfQtdGB0LrQuCwg0LzRiyDQvtCx0YDQsNGJ0LDQtdC80YHRjyDQuiDQvNC10YLQvtC00YMg0L7QsdGK0LXQutGC0LAgbWV0aG9kc1snKionXSxcbi8vICAgIC8vINCwINC40LzRjyDQvNC10YLQvtC00LAgLSDRjdGC0L4g0LLRgtC+0YDQvtC5INGN0LvQtdC80LXQvdGCIChzcGxpdFsxXSkg0LzQsNGB0YHQuNCy0LAgc3BsaXQuXG4vL1xuLy8gLy8g0J7Qt9C90LDRh9Cw0LXRgiDQstC+0LfQstGA0LDRgiDQvNC10YLQvtC00LAg0L3QsNGI0LXQs9C+INC70L7QutCw0LvRjNC90L7Qs9C+INC+0LHRitC10LrRgtCwINGBINC40LzQtdC90LXQvCAnKycg0LjQu9C4ICctJ1xuLy8gLy8g0Lgg0LDRgNCz0YPQvNC10L3RgtCw0LzQuCBhINC4IGJcbi8vICB9O1xuLy8gIC8vINCh0L7Qt9C00LDQtdC8INC80LXRgtC+0LQg0LIg0LrQvtC90YLQtdC60YHRgtC1INGC0L7Qs9C+INC+0LHRitC10LrRgtCwLCDQsiDQutC+0YLQvtGA0L7QvCDQvtC9INCx0YPQtNC10YIg0LLRi9C30LLQsNC9XG4vLyAgdGhpcy5hZGRNZXRob2QgPSBmdW5jdGlvbiggbmFtZSwgZnVuYyApIHtcbi8vIC8vINCX0LTQtdGB0Ywg0LzRiyDQtNC+0LHQsNCy0LvRj9C10Lwg0LzQtdGC0L7QtCxcbi8vIC8vINCQ0YDQs9GD0LzQtdC90YIgbmFtZSDQtNC+0LHQsNCy0LvRj9C10YLRgdGPLCDQutCw0Log0YHQstC+0LnRgdGC0LLQviDQvNC10YLQvtC00LAgbWV0aG9kcyDQuCDQv9GA0LjRgdCy0LDQuNCy0LDQtdGC0YHRjyDQsiDQvdC10LPQviDRhNGD0L3QutGG0LjRjyBmdW5jICjQstGC0L7RgNC+0Lkg0LDRgNCz0YPQvNC10L3Rgilcbi8vICAgIG1ldGhvZHNbbmFtZV0gPSBmdW5jO1xuLy8gICAgLy8g0LIg0LrQsNGH0LXRgdGC0LLQtSDQsNGA0LPRg9C80LXQvdGC0LAgbmFtZSDQvNGLINC00L7QsdCw0LLQuNC70Lgg0L3QvtCy0YvQuSDQvtC/0LXRgNCw0YLQvtGAIFwiKipcIiDQuFxuLy8gICAgLy8g0YPQutCw0LfQsNC70Lgg0YTRg9C90LrRhtC40Y4sINC60L7RgtC+0YDRg9GOINC90YPQttC90L4g0YEg0L3QuNC8INC40YHQv9C+0LvRjNC30L7QstCw0YLRjC5cbi8vIC8vINGC0LXQv9C10YDRjCDQstGB0LUg0LDQvdCw0LvQvtCz0LjRh9C90L4g0LzQtdGC0L7QtNCw0LwgJysnINC4ICctJywg0YIu0LUsINC+0L/QuNGB0LDQvdC40LUg0L3QvtCy0L7Qs9C+INC80LXRgtC+0LTQsFxuLy8gLy8g0YHRjtC00LAg0LzQvtC20L3QviDQsdGD0LTQtdGCINC00L7QsdCw0LLQuNGC0Ywg0YHQstC+0Lkg0L7Qv9C10YDQsNGC0L7RgCDQuCDRhNGD0L3QutGG0LjRjiwg0L7Qv9C40YHRi9Cy0LDRjtGJ0YPRjiwg0YfRgtC+INC00LXQu9Cw0YLRjCDRgSDRjdGC0LjQvCDQvtC/0LXRgNCw0YLQvtGA0L7QvFxuLy8gIH07XG4vL1xuLy8gfVxuLy9cbi8vIHZhciBjYWxjID0gbmV3IENhbGN1bGF0b3I7XG4vL1xuLy8gY2FsYy5hZGRNZXRob2QoXCIqXCIsIGZ1bmN0aW9uKGEsIGIpIHtcbi8vICAgcmV0dXJuIGEgKiBiO1xuLy8gfSk7XG4vLyBjYWxjLmFkZE1ldGhvZChcIi9cIiwgZnVuY3Rpb24oYSwgYikge1xuLy8gICByZXR1cm4gYSAvIGI7XG4vLyB9KTtcbi8vIGNhbGMuYWRkTWV0aG9kKFwiKipcIiwgZnVuY3Rpb24oYSwgYikge1xuLy8gICByZXR1cm4gTWF0aC5wb3coYSwgYik7XG4vLyB9KTtcbi8vXG4vLyB2YXIgcmVzdWx0ID0gY2FsYy5jYWxjdWxhdGUoXCIyICoqIDNcIik7XG4vLyBhbGVydCggcmVzdWx0ICk7IC8vIDhcblxuXG4vLyBmdW5jdGlvbiBBY2N1bXVsYXRvcihzdGFydGluZ1ZhbHVlKSB7XG4vL1xuLy8gICB0aGlzLnZhbHVlID0gc3RhcnRpbmdWYWx1ZTtcbi8vXG4vLyAgIHRoaXMucmVhZCA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIHRoaXMudmFsdWUgKz0gK3Byb21wdCgn0JLQstC10LTQuNGC0LUg0YfQuNGB0LvQviDQtNC70Y8g0LTQvtCx0LDQstC70LXQvdC40Y86ICcsIDApO1xuLy8gICB9XG4vL1xuLy8gfVxuLy9cbi8vIHZhciBhY2N1bXVsYXRvciA9IG5ldyBBY2N1bXVsYXRvcigxKTsgLy8g0L3QsNGH0LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUgMVxuLy8gYWNjdW11bGF0b3IucmVhZCgpOyAvLyDQv9GA0LjQsdCw0LLQuNGCINCy0LLQvtC0IHByb21wdCDQuiDRgtC10LrRg9GJ0LXQvNGDINC30L3QsNGH0LXQvdC40Y5cbi8vIGFjY3VtdWxhdG9yLnJlYWQoKTsgLy8g0L/RgNC40LHQsNCy0LjRgiDQstCy0L7QtCBwcm9tcHQg0Log0YLQtdC60YPRidC10LzRgyDQt9C90LDRh9C10L3QuNGOXG4vLyBhY2N1bXVsYXRvci5yZWFkKCk7IC8vINC/0YDQuNCx0LDQstC40YIg0LLQstC+0LQgcHJvbXB0INC6INGC0LXQutGD0YnQtdC80YMg0LfQvdCw0YfQtdC90LjRjlxuLy8gYWNjdW11bGF0b3IucmVhZCgpOyAvLyDQv9GA0LjQsdCw0LLQuNGCINCy0LLQvtC0IHByb21wdCDQuiDRgtC10LrRg9GJ0LXQvNGDINC30L3QsNGH0LXQvdC40Y5cbi8vIGFsZXJ0KCBhY2N1bXVsYXRvci52YWx1ZSApOyAvLyDQstGL0LLQtdC00LXRgiDRgtC10LrRg9GJ0LXQtSDQt9C90LDRh9C10L3QuNC1XG5cblxuLy8gZnVuY3Rpb24gQ2FsY3VsYXRvcigpIHtcbi8vXG4vLyAgIHRoaXMucmVhZCA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIHRoaXMuYSA9ICtwcm9tcHQoJ2E/JywgMCk7XG4vLyAgICAgdGhpcy5iID0gK3Byb21wdCgnYj8nLCAwKTtcbi8vICAgfVxuLy9cbi8vICAgdGhpcy5zdW0gPSBmdW5jdGlvbigpIHtcbi8vICAgICByZXR1cm4gdGhpcy5hICsgdGhpcy5iO1xuLy8gICB9XG4vL1xuLy8gICB0aGlzLm11bCA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiB0aGlzLmEgKiB0aGlzLmI7XG4vLyAgIH1cbi8vXG4vLyB9XG4vL1xuLy9cbi8vIHZhciBjYWxjdWxhdG9yID0gbmV3IENhbGN1bGF0b3IoKTtcbi8vIGNhbGN1bGF0b3IucmVhZCgpO1xuLy9cbi8vIGFsZXJ0KCBcItCh0YPQvNC80LA9XCIgKyBjYWxjdWxhdG9yLnN1bSgpICk7XG4vLyBhbGVydCggXCLQn9GA0L7QuNC30LLQtdC00LXQvdC40LU9XCIgKyBjYWxjdWxhdG9yLm11bCgpICk7XG5cblxuLy8gZnVuY3Rpb24gQW5pbWFsKG5hbWUpIHtcbi8vICAgdGhpcy5uYW1lID0gbmFtZTtcbi8vICAgdGhpcy5jYW5XYWxrID0gdHJ1ZTtcbi8vXG4vLyAgIHRoaXMuSGlUZWxsaW5nID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgYWxlcnQoXCLQnNC10L3RjyDQt9C+0LLRg9GCOiBcIiArIHRoaXMubmFtZSk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyB2YXIgYW5pbWFsID0gbmV3IEFuaW1hbChcItGR0LbQuNC6XCIpO1xuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAvLyBmdW5jdGlvbiBBbmltYWwobmFtZSkge1xuLy8gLy8gICB0aGlzID0geyAvLyA8LS0g0YHQvtC30LTQsNC10YLRgdGPINC/0YPRgdGC0L7QuSDQvtCx0YrQtdC60YIgdGhpcyDQuCDQvdCw0L/QvtC70L3Rj9C10YLRgdGPINGB0LLQvtC50YHRgtCy0LDQvNC4INC4INC80LXRgtC+0LTQsNC80Lhcbi8vIC8vICAgICBuYW1lOiAn0ZHQttC40LonLFxuLy8gLy8gICAgIGNhbldhbGs6IHRydWVcbi8vIC8vICAgfVxuLy8gLy8gICByZXR1cm4gdGhpcztcbi8vIC8vICAgLy/Rg9C/0YDQsNCy0LvQtdC90LjQtSDQv9C10YDQtdC00LDQtdGC0YHRjyDQsiDQvtCx0LvQsNGB0YLRjCDQstGL0LfQvtCy0LAg0YTRg9C90LrRhtC40LggLS0+IGFuaW1hbCA9IHRoaXMgKGFuaW1hbCDQv9GA0LjRgdCy0LDQuNCy0LDQtdGC0YHRjyDQt9C90LDRh9C10L3QuNC1IHRoaXMpXG4vLyAvLyB9XG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIGFsZXJ0KGFuaW1hbC5uYW1lKTtcblxuXG4vL9Ck0YPQvdC60YbQuNGPLCDQutC+0YLQvtGA0LDRjyDQstC+0LfQstGA0LDRidCw0LXRgtGB0Y8gc3VtLCDQtNC+0LvQttC90LAg0L3QsNC60LDQv9C70LjQstCw0YLRjCDQt9C90LDRh9C10L3QuNC1INC/0YDQuCDQutCw0LbQtNC+0Lwg0LLRi9C30L7QstC1LlxuLy/Qo9C00L7QsdC90LXQtSDQstGB0LXQs9C+INGF0YDQsNC90LjRgtGMINC10LPQviDQsiDQt9Cw0LzRi9C60LDQvdC40LgsINCyINC/0LXRgNC10LzQtdC90L3QvtC5IGN1cnJlbnRTdW0uINCa0LDQttC00YvQuSDQstGL0LfQvtCyINC/0YDQuNCx0LDQstC70Y/QtdGCINC6INC90LXQuSDQvtGH0LXRgNC10LTQvdC+0LUg0LfQvdCw0YfQtdC90LjQtTpcbi8vIGZ1bmN0aW9uIHN1bVgoYSkge1xuLy8gICAgIHZhciBjdXJyZW50U3VtID0gYTtcbi8vXG4vLyAgICAgZnVuY3Rpb24gZihiKSB7XG4vLyAgICAgICBjdXJyZW50U3VtICs9IGI7XG4vLyAgICAgICByZXR1cm4gZjsgIC8vIDwtLSDQvdC1INCy0YvQt9GL0LLQsNC10YIg0YHQsNC80LAg0YHQtdCx0Y8sINCwINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0YHRi9C70LrRgyDQvdCwINGB0LXQsdGPXG4vLyAgICAgfVxuLy9cbi8vICAgZi50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiBjdXJyZW50U3VtO1xuLy8gICB9O1xuLy9cbi8vIC8v0KTRg9C90LrRhtC40Y8gc3VtINGB0YDQsNCx0LDRgtGL0LLQsNC10YIg0YLQvtC70YzQutC+INC+0LTQuNC9INGA0LDQty4g0J7QvdCwINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGE0YPQvdC60YbQuNGOIGYuXG4vLyAvL9CX0LDRgtC10LwsINC/0YDQuCDQutCw0LbQtNC+0Lwg0LfQsNC/0YPRgdC60LUg0YTRg9C90LrRhtC40Y8gZiDQtNC+0LHQsNCy0LvRj9C10YIg0L/QsNGA0LDQvNC10YLRgCDQuiDRgdGD0LzQvNC1IGN1cnJlbnRTdW0sXG4vLyAvL9GF0YDQsNC90Y/RidC10LnRgdGPINCyINC30LDQvNGL0LrQsNC90LjQuCwg0Lgg0LLQvtC30LLRgNCw0YnQsNC10YIg0YHQsNC80LAg0YHQtdCx0Y8uXG4vL1xuLy8gICAgIHJldHVybiBmO1xuLy8gICB9XG4vL1xuLy8gICAvLyBmdW5jdGlvbiBzdW0oKSB7XG4vLyAgIC8vICAgcmV0dXJuIE51bWJlcihTdHJpbmcoc3VtWChhcmd1bWVudHMpKSk7XG4vLyAgIC8vIH1cbi8vXG4vLyAgIGFsZXJ0KCBzdW0oMSkoMikgKTsgLy8gM1xuLy8gICBhbGVydCggc3VtKDEpKDIpICk7IC8vIDNcbi8vICAgYWxlcnQoIHN1bSg1KSgtMSkoMikgKTsgLy8gNlxuXG5cbi8vIHZhciBmb28gPSB7XG4vLyAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbi8vICAgICByZXR1cm4gJ2Zvbyc7XG4vLyAgIH0sXG4vLyAgIHZhbHVlT2Y6IGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiAyO1xuLy8gICB9XG4vLyB9O1xuLy9cbi8vIGFsZXJ0KCBmb28gKTtcbi8vIGFsZXJ0KCBmb28gKyAxICk7XG4vLyBhbGVydCggZm9vICsgXCIzXCIgKTtcbi8vb25seSBkaWZmZXJlbmNlIGlzIHRoYXQgdmFsdWVPZiBpcyBjYWxsZWQgd2hlbiBvYmplY3QgbXVzdCBiZSBjb252ZXJ0ZWQgdG8gIE51bWJlclxuLy9vYmplY3QgaXMgY29udmVydGVkIHRvIG51bWJlciB3aGVuIHVzZWQgd2l0aCBvcGVyYXRvcnMgbGlrZTogKywgKiBhbmQgLS5cbi8vQWxzbyAgdmFsdWVPZiBpcyB1c2VkIHdoZW4gb2JqZWN0cyBhcmUgY29tcGFyZWQgdXNpbmcgPiBvciA+PSBvcGVyYXRvcnMuXG5cbi8vIHZhciBuYW1lID0gXCJcIjtcbi8vXG4vLyB2YXIgdXNlciA9IHtcbi8vICAgbmFtZTogXCLQktCw0YHQuNC70LjQuVwiLFxuLy9cbi8vICAgZXhwb3J0OiBmdW5jdGlvbigpIHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgdmFsdWU6IHRoaXNcbi8vICAgICB9O1xuLy8gICB9XG4vL1xuLy8gfTtcbi8vXG4vLyBhbGVydCggdXNlci5leHBvcnQoKS52YWx1ZSA9PSB1c2VyICk7IC8vIHRydWVcblxuXG5cbi8vIHZhciBsYWRkZXIgPSB7XG4vLyAgIHN0ZXA6IDAsXG4vLyAgIHVwOiBmdW5jdGlvbigpIHsgLy8g0LLQstC10YDRhSDQv9C+INC70LXRgdGC0L3QuNGG0LVcbi8vICAgICB0aGlzLnN0ZXArKztcbi8vICAgICByZXR1cm4gdGhpcztcbi8vICAgfSxcbi8vICAgZG93bjogZnVuY3Rpb24oKSB7IC8vINCy0L3QuNC3INC/0L4g0LvQtdGB0YLQvdC40YbQtVxuLy8gICAgIHRoaXMuc3RlcC0tO1xuLy8gICAgIHJldHVybiB0aGlzO1xuLy8gICB9LFxuLy8gICBzaG93U3RlcDogZnVuY3Rpb24oKSB7IC8vINCy0YvQstC10YHRgtC4INGC0LXQutGD0YnRg9GOINGB0YLRg9C/0LXQvdGM0LrRg1xuLy8gICAgIGFsZXJ0KCB0aGlzLnN0ZXAgKTtcbi8vICAgICByZXR1cm4gdGhpcztcbi8vICAgfVxuLy8gfTtcbi8vXG4vLyBsYWRkZXIudXAoKS5kb3duKCkuc2hvd1N0ZXAoKTsgLy8wXG5cblxuLy8gdmFyIGNhbGN1bGF0b3IgPSB7XG4vL1xuLy8gICByZWFkOiBmdW5jdGlvbigpIHtcbi8vICAgICB0aGlzLmEgPSArcHJvbXB0KCdhPycsIDApO1xuLy8gICAgIHRoaXMuYiA9ICtwcm9tcHQoJ2I/JywgMCk7XG4vLyAgIH0sXG4vL1xuLy8gICBzdW06IGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiB0aGlzLmEgKyB0aGlzLmI7XG4vLyAgIH0sXG4vL1xuLy8gICBtdWw6IGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiB0aGlzLmEgKiB0aGlzLmI7XG4vLyAgIH1cbi8vXG4vLyB9XG4vL1xuLy8gY2FsY3VsYXRvci5yZWFkKCk7XG4vLyBhbGVydCggY2FsY3VsYXRvci5zdW0oKSApO1xuLy8gYWxlcnQoIGNhbGN1bGF0b3IubXVsKCkgKTtcblxuXG4vLyB2YXIgbmFtZSA9IFwiXCI7XG4vL1xuLy8gdmFyIHVzZXIgPSB7XG4vLyAgIG5hbWU6IFwi0JLQsNGB0LjQu9C40LlcIixcbi8vXG4vLyAgIGV4cG9ydDogZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHZhbHVlOiB0aGlzXG4vLyAgICAgfTtcbi8vICAgfVxuLy9cbi8vIH07XG4vL1xuLy8gYWxlcnQoIHVzZXIuZXhwb3J0KCkudmFsdWUubmFtZSApO1xuLy9cbi8vIC8vINCS0L4g0LLRgNC10LzRjyDQstGL0L/QvtC70L3QtdC90LjRjyB1c2VyLmV4cG9ydCgpINC30L3QsNGH0LXQvdC40LUgdGhpcyA9IHVzZXIuXG4vLyAvLyDQn9GA0Lgg0YHQvtC30LTQsNC90LjQuCDQvtCx0YrQtdC60YLQsCB7IHZhbHVlOiB0aGlzIH0sINCyINGB0LLQvtC50YHRgtCy0L4gdmFsdWUg0LrQvtC/0LjRgNGD0LXRgtGB0Y8g0YHRgdGL0LvQutCwINC90LAg0YLQtdC60YPRidC40Lkg0LrQvtC90YLQtdC60YHRgiwg0YLQviDQtdGB0YLRjCDQvdCwIHVzZXIuXG4vLyAvLyDQn9C+0LvRg9GH0LDQtdGC0YHRjyDRh9GC0L4gdXNlci5leHBvcnQoKS52YWx1ZSA9PSB1c2VyLlxuXG4vL1xuLy8gdmFyIHVzZXIgPSB7IGZpcnN0TmFtZTogJ9CS0LDRgdGPJywgZjogZnVuYyB9O1xuLy8gdmFyIGFkbWluID0geyBmaXJzdE5hbWU6ICfQkNC00LzQuNC9JywgZzogZnVuYyB9O1xuLy9cbi8vIGZ1bmN0aW9uIGZ1bmMoKSB7XG4vLyAgIGFsZXJ0KHRoaXMuZmlyc3ROYW1lKTtcbi8vIH1cbi8vXG4vLyAvLyB0aGlzINGA0LDQstC10L0g0L7QsdGK0LXQutGC0YMg0L/QtdGA0LXQtCDRgtC+0YfQutC+0Llcbi8vXG4vLyB1c2VyLmYoKTsgLy8g0JLQsNGB0Y9cbi8vIGFkbWluLmcoKTsgLy8g0JDQtNC80LjQvVxuLy8gYWRtaW5bJ2cnXSgpOyAvLyDQkNC00LzQuNC9IC0gKNCy0YHQtSDRgNCw0LLQvdC+INC90LAg0LfQsNC/0LjRgdGMKVxuXG5cblxuLy8g0JrQvtCz0LTQsCDQvNGLINCy0YvQt9GL0LLQsNC10Lwg0LzQtdGC0L7QtCDRh9C10YDQtdC3INGC0L7Rh9C60YMg0LjQu9C4INC60LLQsNC00YDQsNGC0L3Ri9C1INGB0LrQvtCx0LrQuCwg0YLQviDRgdGH0LjRgtCw0YLRjCDRgtC10LrRg9GJ0LjQvCDQvtCx0YrQtdC60YIsXG4vLyDQutC+0YLQvtGA0L7QvNGDINC/0YDQuNC90LDQtNC70LXQttC40YIg0LzQtdGC0L7QtCwg0LIg0L7RgdGC0LDQu9GM0L3Ri9GFINGB0LvRg9GH0LDRj9GFINGB0YfQuNGC0LDRgtGMLCDRh9GC0L4g0L7QsdGK0LXQutGCINCx0YvQuyDQstGB0LXQs9C+INC70LjRiNGMINGF0YDQsNC90LjQu9C40YnQtdC8INC80LXRgtC+0LTQsCjRhNGD0L3QutGG0LjQuClcbi8vINC4INC/0YDQviDQvtCx0YrQtdC60YIsINC40Lcg0LrQvtGC0L7RgNC+0LPQviDQvNC10YLQvtC0INCy0YvQt9Cy0LDQvSwg0LzQvtC20L3QviDQt9Cw0LHRi9GC0YwuXG5cblxuXG5cblxuLy8gdmFyIHVzZXIgPSB7XG4vLyAgIG5hbWU6ICfQktCw0YHQuNC70LjQuScsXG4vL1xuLy8gICBzYXlIaTogZnVuY3Rpb24oKSB7XG4vLyAgICAgc2hvd05hbWUodGhpcyk7IC8vINC/0LXRgNC10LTQsNGC0Ywg0YLQtdC60YPRidC40Lkg0L7QsdGK0LXQutGCINCyIHNob3dOYW1lXG4vLyAgIH1cbi8vIH07XG4vL1xuLy8gZnVuY3Rpb24gc2hvd05hbWUobmFtZWRPYmopIHsgIC8vc2hvd05hbWUgPSB7bmFtZTogJ9CS0LDRgdC40LvQuNC5Jywgc2F5SGk6IGZ9XG4vLyAgIGFsZXJ0KCBuYW1lZE9iai5uYW1lICk7XG4vLyB9XG4vL1xuLy8gdXNlci5zYXlIaSgpOyAvLyDQktCw0YHQuNC70LjQuVxuXG5cbi8vIGZ1bmN0aW9uIG1hcnJ5KG1hbiwgd29tYW4pIHtcbi8vICAgd29tYW4uaHVzYmFuZCA9IG1hbjtcbi8vICAgbWFuLndpZmUgPSB3b21hbjtcbi8vXG4vLyAgIHJldHVybiB7XG4vLyAgICAgZmF0aGVyOiBtYW4sXG4vLyAgICAgbW90aGVyOiB3b21hblxuLy8gICB9XG4vLyB9XG4vL1xuLy8gdmFyIGZhbWlseSA9IG1hcnJ5KHtcbi8vICAgbmFtZTogXCLQktCw0YHQuNC70LjQuVwiXG4vLyB9LCB7XG4vLyAgIG5hbWU6IFwi0JzQsNGA0LjRj1wiXG4vLyB9KTtcblxuXG4vLyBmdW5jdGlvbiBmYWN0b3JpYWwobikge1xuLy8gICByZXR1cm4gbiA/IG4gKiBmYWN0b3JpYWwobiAtIDEpIDogMTtcbi8vIH1cbi8vXG4vLyBhbGVydCggZmFjdG9yaWFsKDUpICk7IC8vIDEyMFxuXG5cbi8vL1JFQ1VSU0lPTi8vL1xuLy8gZnVuY3Rpb24gc3VtVG8obikge1xuLy8gICBpZiAobiA9PSAxKSByZXR1cm4gMTtcbi8vICAgLy8vL2V4ZWN1dGlvbiBjb250ZXh0cy8vLy9cbi8vICAgLy9uID0gMTAwXG4vLyAgIC8vbiA9IDk5XG4vLyAgIC8vLi4uXG4vLyAgIC8vbiA9IDUsXG4vLyAgIC8vbiA9IDQsXG4vLyAgIC8vbiA9IDMsXG4vLyAgIC8vbiA9IDIsXG4vLyAgIC8vXG4vLyAgIC8vbiA9IDEsIG4gPSAyIC0+IHJldHVybiAzLCBuID0gMyAtPiByZXR1cm4gNiwgbiA9IDQgLT4gcmV0dXJuIDEwLCBuID0gNSAtPiByZXR1cm4gMTVcbi8vICAgcmV0dXJuIG4gKyBzdW1UbyhuIC0gMSk7XG4vLyAgIC8vcmV0dXJuIDEgKyAyIC0+IDM7XG4vLyAgIC8vcmV0dXJuIDMgKyAzIC0+IDY7XG4vLyAgIC8vcmV0dXJuIDYgKyA0IC0+IDEwO1xuLy8gICAvL3JldHVybiAxMCArIDUgLT4gMTU7XG4vLyB9XG4vL1xuLy8gYWxlcnQoIHN1bVRvKDEwMCkgKTtcblxuXG5cblxuLy8gZnVuY3Rpb24gbWFrZUFybXkoKSB7XG4vL1xuLy8gICB2YXIgc2hvb3RlcnMgPSBbXTsgLy8g0LTQvtCx0LDQstC70LXQvdC40LUg0L/Rg9GB0YLQvtCz0L4g0LzQsNGB0YHQuNCy0LBcbi8vXG4vLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykgeyAvLyAxMCDQuNGC0LXRgNCw0YbQuNC5XG4vL1xuLy8gICAgIHZhciBvbmVNYW4gPSAoZnVuY3Rpb24oeCkgeyAgLy8g0L7RgtC00LXQu9GM0L3QvtC80YMg0YHRgtGA0LXQu9C60YMg0L/RgNC40YHQstCw0LjQstCw0LXRgtGB0Y8g0LfQvdCw0YfQtdC90LjQtSDQstGL0LfQvtCy0LAg0YTRg9C90LrRhtC40Lhcbi8vXG4vLyAgICAgICAgLy8gTGV4aWNhbEVudmlyb25tZW50ID0geyBmdW5jdGlvbjogMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTB9XG4vL1xuLy8gICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgeyAgLy8gW1tTY29wZV1dIC0+IExleGljYWxFbnZpcm9ubWVudFxuLy8gICAgICAgICBhbGVydCggeCApO1xuLy8gICAgICAgfTtcbi8vXG4vLyAgICAgICAvL9Ck0YPQvdC60YbQuNGPICdvbmVNYW4nINGB0L7Qt9C00LDQvdCwINC60LDQuiDRgNC10LfRg9C70YzRgtCw0YIg0LLRi9C30L7QstCwINC/0YDQvtC80LXQttGD0YLQvtGH0L3QvtCz0L4g0YTRg9C90LrRhtC40L7QvdCw0LvRjNC90L7Qs9C+INCy0YvRgNCw0LbQtdC90LjRjyBmdW5jdGlvbih4KSxcbi8vICAgICAgIC8v0LrQvtGC0L7RgNC+0LUg0L7QsdGK0Y/QstC70Y/QtdGC0YHRjyDigJMg0Lgg0YLRg9GCINC20LUg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRjywg0L/QvtC70YPRh9Cw0Y8geCA9IGkuXG4vL1xuLy8gICAgICAgLy/QotCw0Log0LrQsNC6IGZ1bmN0aW9uKHgpINGC0YPRgiDQttC1INC30LDQstC10YDRiNCw0LXRgtGB0Y8sINGC0L4g0LfQvdCw0YfQtdC90LjQtSB4INCx0L7Qu9GM0YjQtSDQvdC1INC80LXQvdGP0LXRgtGB0Y8uXG4vLyAgICAgICAvL9Ce0L3QviDQuCDQsdGD0LTQtdGCINC40YHQv9C+0LvRjNC30L7QstCw0L3QviDQsiDQstC+0LfQstGA0LDRidCw0LXQvNC+0Lkg0YTRg9C90LrRhtC40Lgt0YHRgtGA0LXQu9C60LUuXG4vL1xuLy8gICAgIH0pKGkpOyAvLyDQstGL0LfQvtCyINGE0YPQvdC60YbQuNC4IFwiZnVuY3Rpb24oeClcIiDRgSDRgtC10LrRg9GJ0LjQvCDQt9C90LDRh9C10L3QuNC10LwgaSwgKNGB0L7Qt9C00LDQu9C4INGE0YPQvdC60YbQuNGOIFwiZnVuY3Rpb24oeClcIiDQuCDRgdGA0LDQt9GDINC20LUg0LXQtSDQstGL0LfQstCw0LvQuC4pXG4vLyAgICAgLy8g0YLQsNC60LjQvCDQvtCx0YDQsNC30L7QvCwg0L3QvtC80LXRgCDRgdGC0YDQtdC70LrQsCDRhdGA0LDQvdC40YLRgdGPINCy0L3Rg9GC0YDQuCDRhNGD0L3QutGG0LjQuCBmdW5jdGlvbih4KVxuLy8gICAgIC8vINC60L7RgtC+0YDQsNGPINCy0YvRgdGC0YPQv9Cw0LXRgiDQsiDQutCw0YfQtdGB0YLQstC1INC70LXQutGB0LjRh9C10YHQutC+0LPQviDQvtC60YDRg9C20LXQvdC40Y8g0LTQu9GPINCw0L3QvtC90LjQvNC90L7QuSDRhNGD0L3QutGG0LjQuCDQstC90YPRgtGA0Lgg0YHQtdCx0Y8uXG4vL1xuLy8gICAgIHNob290ZXJzLnB1c2gob25lTWFuKTtcbi8vICAgfVxuLy9cbi8vICAgcmV0dXJuIHNob290ZXJzO1xuLy8gfVxuLy9cbi8vIHZhciBhcm15ID0gbWFrZUFybXkoKTsgLy/QndC+0LLRi9C5INCy0YvQt9C+0LIg0YTRg9C90LrRhtC40LggPSDQvdC+0LLQsNGPINC+0LHQu9Cw0YHRgtGMINCy0YvQv9C+0LvQvdC10L3QuNGPLiDQodC+0LfQtNCw0L3QuNC1INC90L7QstC+0Lkg0LvQvtC60LDQu9GM0L3QvtC5INC+0LHQu9Cw0YHRgtC4INCy0YvQv9C+0LvQvdC10L3QuNGPLlxuLy9cbi8vIGFybXlbMF0oKTsgLy8gMFxuLy8gYXJteVsxXSgpOyAvLyAxXG5cblxuLy8gZnVuY3Rpb24gZmlsdGVyKGFyciwgZnVuYykge1xuLy8gXHR2YXIgcmVzdWx0ID0gW107XG4vL1xuLy8gXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuLy8gXHRcdHZhciB2YWx1ZSA9IGFycltpXTtcbi8vIFx0XHRpZiAoZnVuYyh2YWx1ZSkpIHtcbi8vIFx0XHRcdHJlc3VsdC5wdXNoKHZhbHVlKTtcbi8vIFx0XHR9XG4vLyBcdH1cbi8vIFx0cmV0dXJuIHJlc3VsdDtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBpbkJldHdlZW4oYSwgYikge1xuLy8gXHRyZXR1cm4gZnVuY3Rpb24oeCkge1xuLy8gXHRcdHJldHVybiB4ID49IGEgJiYgeCA8PSBiO1xuLy8gXHR9XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gaW5BcnJheShhcnJheSkge1xuLy8gICByZXR1cm4gZnVuY3Rpb24oeCkge1xuLy8gICAgIHJldHVybiBhcnJheS5pbmRleE9mKHgpICE9IC0xO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gdmFyIGFyciA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3XTtcbi8vXG4vLyBhbGVydChmaWx0ZXIoYXJyLCBmdW5jdGlvbihhKSB7XG4vLyBcdHJldHVybiBhICUgMiA9PSAwXG4vLyB9KSk7IC8vIDIsNCw2XG4vL1xuLy8gYWxlcnQoZmlsdGVyKGFyciwgaW5CZXR3ZWVuKDMsIDYpKSk7IC8vIDMsNCw1LDZcbi8vXG4vLyBhbGVydChmaWx0ZXIoYXJyLCBpbkFycmF5KFsxLCAyLCAxMF0pKSk7IC8vIDEsMlxuXG5cbi8vIHZhciB1c2VycyA9IFt7XG4vLyAgIG5hbWU6ICfQktCw0YHRjycsXG4vLyAgIHN1cm5hbWU6ICfQmNCy0LDQvdC+0LInLFxuLy8gICBhZ2U6IDIwXG4vLyB9LCB7XG4vLyAgIG5hbWU6ICfQn9C10YLRjycsXG4vLyAgIHN1cm5hbWU6ICfQp9Cw0L/QsNC10LInLFxuLy8gICBhZ2U6IDI1XG4vLyB9LCB7XG4vLyAgIG5hbWU6ICfQnNCw0YjQsCcsXG4vLyAgIHN1cm5hbWU6ICfQnNC10LTQstC10LTQtdCy0LAnLFxuLy8gICBhZ2U6IDE4XG4vLyB9XTtcbi8vXG4vLyBmdW5jdGlvbiBieUZpZWxkKGZpZWxkKSB7XG4vLyAgIHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG4vLyAgICAgcmV0dXJuIGFbZmllbGRdID4gYltmaWVsZF0gPyAxIDogLTE7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyB1c2Vycy5zb3J0KGJ5RmllbGQoJ25hbWUnKSk7XG4vLyB1c2Vycy5mb3JFYWNoKGZ1bmN0aW9uKHVzZXIpIHtcbi8vICAgYWxlcnQoIHVzZXIubmFtZSApO1xuLy8gfSk7XG4vL1xuLy8gdXNlcnMuc29ydChieUZpZWxkKCdhZ2UnKSk7XG4vLyB1c2Vycy5mb3JFYWNoKGZ1bmN0aW9uKHVzZXIpIHtcbi8vICAgYWxlcnQoIHVzZXIubmFtZSApO1xuLy8gfSk7XG5cblxuLy8gZnVuY3Rpb24gbWFrZUJ1ZmZlcigpIHtcbi8vICAgdmFyIHRleHQgPSAnJztcbi8vXG4vLyAgIGZ1bmN0aW9uIGJ1ZmZlcih0ZXh0VmFsdWUpIHtcbi8vICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuLy8gICAgICAgcmV0dXJuIHRleHQ7XG4vLyAgICAgfVxuLy8gICAgIHRleHQgKz0gdGV4dFZhbHVlO1xuLy8gICB9O1xuLy9cbi8vICAgYnVmZmVyLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgdGV4dCA9ICcnO1xuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gYnVmZmVyO1xuLy9cbi8vIH07XG4vL1xuLy8gdmFyIGJ1ZmZlciA9IG1ha2VCdWZmZXIoKTtcbi8vXG4vLyAvLyDQtNC+0LHQsNCy0LjRgtGMINC30L3QsNGH0LXQvdC40Y8g0Log0LHRg9GE0LXRgNGDXG4vLyBidWZmZXIoJ9CX0LDQvNGL0LrQsNC90LjRjycpO1xuLy8gYnVmZmVyKCcg0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMJyk7XG4vLyBidWZmZXIoJyDQndGD0LbQvdC+IScpXG4vL1xuLy8gYWxlcnQoYnVmZmVyKCkpO1xuLy9cbi8vIGJ1ZmZlci5jbGVhcigpO1xuLy8gYWxlcnQoYnVmZmVyKCkpO1xuXG5cbi8vL3N1bShhKShiKSA9IGErYi8vL1xuLy8gZnVuY3Rpb24gc3VtKGEpIHtcbi8vXG4vLyAgIHJldHVybiBmdW5jdGlvbihiKSB7XG4vLyAgICAgcmV0dXJuIGEgKyBiO1xuLy8gICB9O1xuLy9cbi8vIH1cbi8vXG4vLyBhbGVydChzdW0oMikoMykpO1xuXG5cbi8vL9Ch0YfQtdGC0YfQuNC6INGH0LXRgNC10Lcg0L7QsdGK0LXQutGCICsg0YTRg9C90LrRhtC40Y4vLy9cbi8vIGZ1bmN0aW9uIG1ha2VDb3VudGVyKCkge1xuLy8gICB2YXIgY3VycmVudENvdW50ID0gMTtcbi8vXG4vLyAgIC8vINCy0L7Qt9Cy0YDQsNGJ0LDQtdC80YHRjyDQuiDRhNGD0L3QutGG0LjQuFxuLy8gICBmdW5jdGlvbiBjb3VudGVyKCkge1xuLy8gICAgIHJldHVybiBjdXJyZW50Q291bnQrKztcbi8vICAgfVxuLy9cbi8vICAgLy8gLi4u0Lgg0LTQvtCx0LDQstC70Y/QtdC8INC10Lkg0LzQtdGC0L7QtNGLIVxuLy8gICBjb3VudGVyLnNldCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4vLyAgICAgY3VycmVudENvdW50ID0gdmFsdWU7XG4vLyAgIH07XG4vL1xuLy8gICBjb3VudGVyLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgY3VycmVudENvdW50ID0gMTtcbi8vICAgfTtcbi8vXG4vLyAgIHJldHVybiBjb3VudGVyO1xuLy8gfVxuLy9cbi8vIHZhciBjb3VudGVyID0gbWFrZUNvdW50ZXIoKTtcbi8vXG4vLyBhbGVydCggY291bnRlcigpICk7IC8vIDFcbi8vIGFsZXJ0KCBjb3VudGVyKCkgKTsgLy8gMlxuLy9cbi8vIGNvdW50ZXIuc2V0KDUpO1xuLy8gYWxlcnQoIGNvdW50ZXIoKSApOyAvLyA1XG5cblxuLy8v0KHRh9C10YLRh9C40Log0YfQtdGA0LXQtyDQvtCx0YrQtdC60YIvLy9cbi8vIGZ1bmN0aW9uIG1ha2VDb3VudGVyKCkge1xuLy8gICB2YXIgY3VycmVudENvdW50ID0gMTtcbi8vXG4vLyAgIHJldHVybiB7IC8vINCy0L7Qt9Cy0YDQsNGC0LjQvCDQvtCx0YrQtdC60YIg0LLQvNC10YHRgtC+INGE0YPQvdC60YbQuNC4XG4vLyAgICAgZ2V0TmV4dDogZnVuY3Rpb24oKSB7XG4vLyAgICAgICByZXR1cm4gY3VycmVudENvdW50Kys7XG4vLyAgICAgfSxcbi8vXG4vLyAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuLy8gICAgICAgY3VycmVudENvdW50ID0gdmFsdWU7XG4vLyAgICAgfSxcbi8vXG4vLyAgICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuLy8gICAgICAgY3VycmVudENvdW50ID0gMTtcbi8vICAgICB9XG4vLyAgIH07XG4vLyB9XG4vL1xuLy8gdmFyIGNvdW50ZXIgPSBtYWtlQ291bnRlcigpO1xuLy9cbi8vIGFsZXJ0KCBjb3VudGVyLmdldE5leHQoKSApOyAvLyAxXG4vLyBhbGVydCggY291bnRlci5nZXROZXh0KCkgKTsgLy8gMlxuLy9cbi8vIGNvdW50ZXIuc2V0KDUpO1xuLy8gYWxlcnQoIGNvdW50ZXIuZ2V0TmV4dCgpICk7IC8vIDVcblxuLy8gdmFyIGEgPSAxO1xuLy9cbi8vIGZ1bmN0aW9uIGdldEZ1bmMoKSB7XG4vLyAgIHZhciBhID0gMjtcbi8vXG4vLyAgIHZhciBmdW5jID0gbmV3IEZ1bmN0aW9uKCdhbGVydChhKScpO1xuLy9cbi8vICAgcmV0dXJuIGZ1bmM7XG4vLyB9XG4vL1xuLy8gZ2V0RnVuYygpKCk7IC8vIDEsINC40Lcgd2luZG93XG5cblxuLy8vLy8vLy8vLy8vLy8vL9CX0JDQnNCr0JrQkNCd0JjQry8vLy8vLy8vLy8vLy8vLy9cbi8vIGZ1bmN0aW9uIG1ha2VDb3VudGVyKCkge1xuLy8gICBmdW5jdGlvbiBjb3VudGVyKCkge1xuLy8gICAgIHJldHVybiBjb3VudGVyLmN1cnJlbnRDb3VudCsrO1xuLy8gICB9O1xuLy8gICBjb3VudGVyLmN1cnJlbnRDb3VudCA9IDE7XG4vL1xuLy8gICByZXR1cm4gY291bnRlcjtcbi8vIH1cbi8vXG4vLyB2YXIgY291bnRlciA9IG1ha2VDb3VudGVyKCk7XG4vL1xuLy8gYWxlcnQoIGNvdW50ZXIoKSApOyAvLyAxXG4vLyBhbGVydCggY291bnRlcigpICk7IC8vIDJcblxuXG4vLyBmdW5jdGlvbiBtYWtlQ291bnRlcigpIHtcbi8vICAgdmFyIGN1cnJlbnRDb3VudCA9IDE7XG4vL1xuLy8gICByZXR1cm4gZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuIGN1cnJlbnRDb3VudCsrO1xuLy8gICB9O1xuLy8gfVxuLy9cbi8vIHZhciBjb3VudGVyID0gbWFrZUNvdW50ZXIoKTsgLy8gW1tTY29wZV1dIC0+IHtjdXJyZW50Q291bnQ6IDF9XG4vL1xuLy8gYWxlcnQoIGNvdW50ZXIoKSApOyAvLyAxLCBbW1Njb3BlXV0gLT4ge2N1cnJlbnRDb3VudDogMX1cbi8vIGFsZXJ0KCBjb3VudGVyKCkgKTsgLy8gMiwgW1tTY29wZV1dIC0+IHtjdXJyZW50Q291bnQ6IDJ9XG4vLyBhbGVydCggY291bnRlcigpICk7IC8vIDMsIFtbU2NvcGVdXSAtPiB7Y3VycmVudENvdW50OiAzfVxuXG5cbi8vIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuLy8gICB2YXIgZGlmZiA9IG5ldyBEYXRlKCkgLSBkYXRlO1xuLy9cbi8vICAgaWYgKGRpZmYgPD0gMTAwMCkge1xuLy8gICAgIHJldHVybiAn0YLQvtC70YzQutC+INGH0YLQvic7XG4vLyAgIH1cbi8vXG4vLyAgIHZhciBzZWMgPSBNYXRoLmZsb29yKGRpZmYgLyAxMDAwKTtcbi8vICAgaWYgKHNlYyA8IDYwKSB7XG4vLyAgICAgcmV0dXJuIHNlYyArICcg0YHQtdC6LiDQvdCw0LfQsNC0Jztcbi8vICAgfVxuLy9cbi8vICAgdmFyIG1pbiA9IE1hdGguZmxvb3IoZGlmZiAvIDYwMDAwKTtcbi8vICAgaWYgKG1pbiA8IDYwKSB7XG4vLyAgICAgcmV0dXJuIG1pbiArICcg0LzQuNC9LiDQvdCw0LfQsNC0Jztcbi8vICAgfVxuLy9cbi8vICAgdmFyIGQgPSBkYXRlO1xuLy9cbi8vICAgZCA9IFtcbi8vICAgICAnMCcgKyBkLmdldERhdGUoKSxcbi8vICAgICAnMCcgKyAoZC5nZXRNb250aCgpICsgMSksXG4vLyAgICAgJycgKyBkLmdldEZ1bGxZZWFyKCksXG4vLyAgICAgJzAnICsgZC5nZXRIb3VycygpLFxuLy8gICAgICcwJyArIGQuZ2V0TWludXRlcygpXG4vLyAgIF07XG4vL1xuLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGQubGVuZ3RoOyBpKyspIHtcbi8vICAgICBkW2ldID0gZFtpXS5zbGljZSgtMik7XG4vLyAgIH1cbi8vXG4vLyAgIHJldHVybiBkLnNsaWNlKDAsIDMpLmpvaW4oJy4nKSArICcgJyArIGQuc2xpY2UoMykuam9pbignOicpO1xuLy8gfVxuLy9cbi8vIGFsZXJ0KCBmb3JtYXREYXRlKG5ldyBEYXRlKG5ldyBEYXRlIC0gMSkpICk7IC8vIFwi0YLQvtC70YzQutC+INGH0YLQvlwiXG4vL1xuLy8gYWxlcnQoIGZvcm1hdERhdGUobmV3IERhdGUobmV3IERhdGUgLSAzMCAqIDEwMDApKSApOyAvLyBcIjMwINGB0LXQui4g0L3QsNC30LDQtFwiXG4vL1xuLy8gYWxlcnQoIGZvcm1hdERhdGUobmV3IERhdGUobmV3IERhdGUgLSA1ICogNjAgKiAxMDAwKSkgKTsgLy8gXCI1INC80LjQvS4g0L3QsNC30LDQtFwiXG4vL1xuLy8gYWxlcnQoIGZvcm1hdERhdGUobmV3IERhdGUobmV3IERhdGUgLSA4NjQwMCAqIDEwMDApKSApOyAvLyDQstGH0LXRgNCw0YjQvdGP0Y8g0LTQsNGC0LAg0LIg0YTQvtGA0LzQsNGC0LUgXCLQtNC0LtC80Lwu0LPQsyDRh9GHOtC80LxcIlxuXG5cbi8vIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuLy9cbi8vICAgdmFyIGRkID0gZGF0ZS5nZXREYXRlKCk7XG4vLyAgIGlmIChkZCA8IDEwKSBkZCA9ICcwJyArIGRkO1xuLy9cbi8vICAgdmFyIG1tID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbi8vICAgaWYgKG1tIDwgMTApIG1tID0gJzAnICsgbW07XG4vL1xuLy8gICB2YXIgeXkgPSBkYXRlLmdldEZ1bGxZZWFyKCkgJSAxMDA7XG4vLyAgIGlmICh5eSA8IDEwKSB5eSA9ICcwJyArIHl5O1xuLy9cbi8vICAgcmV0dXJuIGRkICsgJy4nICsgbW0gICsgJy4nICsgeXk7XG4vL1xuLy8gfVxuLy9cbi8vIHZhciBkID0gbmV3IERhdGUoMjAxNCwgMCwgMzApO1xuLy9cbi8vIGFsZXJ0KCBmb3JtYXREYXRlKGQpICk7XG5cblxuLy8gZnVuY3Rpb24gZ2V0U2Vjb25kc1RvVG9tb3Jyb3coKSB7XG4vLyAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuLy9cbi8vICAgdmFyIHRvbW9ycm93ID0gbmV3IERhdGUoIG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSArIDEgKTtcbi8vXG4vLyAgIHZhciBkaWZmID0gdG9tb3Jyb3cgLSBub3c7XG4vL1xuLy8gICByZXR1cm4gTWF0aC5mbG9vcihkaWZmIC8gMTAwMDApOyAgIC8vMzYwMDAwMCDQsiDRh9Cw0YHRi1xuLy9cbi8vIH1cbi8vXG4vLyBhbGVydChnZXRTZWNvbmRzVG9Ub21vcnJvdygpKTtcblxuXG4vLyBmdW5jdGlvbiBnZXRTZWNvbmRzVG9kYXkoKSB7XG4vLyAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuLy9cbi8vICAgdmFyIHRvZGF5ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpKTtcbi8vXG4vLyAgICB2YXIgZGlmZiA9IG5vdyAtIHRvZGF5O1xuLy9cbi8vICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYgLyAxMDAwKTtcbi8vIH1cbi8vXG4vLyBhbGVydChnZXRTZWNvbmRzVG9kYXkoKSk7XG5cblxuLy8gZnVuY3Rpb24gZ2V0TGFzdERheU9mTW9udGgoeWVhciwgbW9udGgpIHtcbi8vICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApO1xuLy8gICByZXR1cm4gZGF0ZS5nZXREYXRlKCk7XG4vLyB9XG4vL1xuLy8gYWxlcnQoIGdldExhc3REYXlPZk1vbnRoKDIwMTIsIDApICk7IC8vIDMxXG4vLyBhbGVydCggZ2V0TGFzdERheU9mTW9udGgoMjAxMiwgMSkgKTsgLy8gMjlcbi8vIGFsZXJ0KCBnZXRMYXN0RGF5T2ZNb250aCgyMDEzLCAxKSApOyAvLyAyOFxuXG5cbi8vIGZ1bmN0aW9uIGdldERhdGVBZ28oZGF0ZSwgZGF5cykge1xuLy8gICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkYXlzKTtcbi8vICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXREYXRlQWdvKGRhdGUsIGRheXMpIHtcbi8vICAgdmFyIGRhdGVDb3B5ID0gbmV3IERhdGUoZGF0ZSk7IC8vY29weSBvYmplY3Rcbi8vXG4vLyAgIGRhdGVDb3B5LnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkYXlzKTtcbi8vICAgcmV0dXJuIGRhdGVDb3B5LmdldERhdGUoKTtcbi8vIH1cbi8vXG4vLyB2YXIgZGF0ZSA9IG5ldyBEYXRlKDIwMTUsIDAsIDIpO1xuLy9cbi8vIGFsZXJ0KCBnZXREYXRlQWdvKGRhdGUsIDEpICk7IC8vIDEsICgxINGP0L3QstCw0YDRjyAyMDE1KVxuLy8gYWxlcnQoIGdldERhdGVBZ28oZGF0ZSwgMikgKTsgLy8gMzEsICgzMSDQtNC10LrQsNCx0YDRjyAyMDE0KVxuLy8gYWxlcnQoIGdldERhdGVBZ28oZGF0ZSwgMzY1KSApOyAvLyAyLCAoMiDRj9C90LLQsNGA0Y8gMjAxNClcblxuXG4vLy/QtNC10L3RjCDRgSDQv9C+0L3QtdC00LXQu9GM0L3QuNC60LAvLy9cbi8vIGZ1bmN0aW9uIGdldExvY2FsRGF5KGRhdGUpIHtcbi8vIFx0dmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4vL1xuLy8gXHRpZiAoZGF5ID09IDApIHtcbi8vIFx0XHRkYXkgPSA3O1xuLy8gXHR9XG4vL1xuLy8gXHRyZXR1cm4gZGF5O1xuLy8gfVxuLy9cbi8vIHZhciBkYXRlID0gbmV3IERhdGUoMjAxMiwgMCwgMyk7XG4vL1xuLy8gYWxlcnQoZ2V0TG9jYWxEYXkoIGRhdGUgKSk7XG5cblxuLy/Qn9C+0LvRg9GH0LjRgtGMINC00LXQvdGMINC90LXQtNC10LvQuFxuLy8gZnVuY3Rpb24gZ2V0V2Vla0RheShkYXRlKSB7XG4vLyAgIHZhciBkYXlzID0gWyfQktC+0YHQutGA0LXRgdC10L3RjNC1JywgJ9Cf0L7QvdC10LTQtdC70YzQvdC40LonLCAn0JLRgtC+0YDQvdC40LonLCAn0KHRgNC10LTQsCcsICfQp9C10YLQstC10YDQsycsICfQn9GP0YLQvdC40YbQsCcsICfQodGD0LHQsdC+0YLQsCcsICfQktC+0YHQutGA0LXRgdC10L3RjNC1J107XG4vL1xuLy8gICByZXR1cm4gZGF5c1tkYXRlLmdldERheSgpXTtcbi8vIH1cbi8vIHZhciBkYXRlID0gbmV3IERhdGUoMjAxOSwgOSwgMyk7XG4vLyBhbGVydChnZXRXZWVrRGF5KGRhdGUpKTtcbi8vXG4vLyB2YXIgZGF0ZSA9IG5ldyBEYXRlKDIwMTksIDksIDMpOyAvLyAzINGP0L3QstCw0YDRjyAyMDE0XG4vLyBhbGVydCggZGF0ZS50b0xvY2FsZVN0cmluZygncnUnLCB7d2Vla2RheTogJ2xvbmcnfSkgKTsgLy8gJ9Cf0YInXG5cblxuLy/QstC+0LfQstGA0LDRidCw0LXRgiDQtNCw0YLRgyDRgdGA0LDQt9GDINCyINCy0LjQtNC1INC80LjQu9C70LjRgdC10LrRg9C90LQsINC+0L0g0LDQvdCw0LvQvtCz0LjRh9C10L0g0LLRi9C30L7QstGDICtuZXcgRGF0ZSgpXG4vL9C90L4g0LIg0L7RgtC70LjRh9C40LUg0L7RgiDQvdC10LPQviDQvdC1INGB0L7Qt9C00LDRkdGCINC/0YDQvtC80LXQttGD0YLQvtGH0L3Ri9C5INC+0LHRitC10LrRgiDQtNCw0YLRiywg0LAg0L/QvtGN0YLQvtC80YMg4oCTINCy0L4g0LzQvdC+0LPQviDRgNCw0Lcg0LHRi9GB0YLRgNC10LUuXG4vL2FsZXJ0KERhdGUubm93KCkpO1xuXG4vLyB2YXIgbXNVVEMgPSBEYXRlLnBhcnNlKCcyMDEyLTAxLTI2VDEzOjUxOjUwLjQxN1onKTsgLy8g0LfQvtC90LAgVVRDXG4vLyBhbGVydCggbXNVVEMgKTsgLy8gMTMyNzU3MTUxMDQxNyAo0YfQuNGB0LvQviDQvNC40LvQu9C40YHQtdC60YPQvdC0KVxuXG5cbi8vINC40L3RgtC10YDQvdCw0YbQuNC+0L3QsNC70LjQt9Cw0YbQuNGPLy8vXG4vLyB2YXIgZGF0ZSA9IG5ldyBEYXRlKDIwMTQsIDExLCAzMSwgMTIsIDMwLCAwKTtcbi8vXG4vLyB2YXIgb3B0aW9ucyA9IHtcbi8vICAgZXJhOiAnbG9uZycsXG4vLyAgIHllYXI6ICdudW1lcmljJyxcbi8vICAgbW9udGg6ICdzaG9ydCcsXG4vLyAgIGRheTogJ251bWVyaWMnLFxuLy8gICB3ZWVrZGF5OiAnbG9uZycsXG4vLyAgIHRpbWV6b25lOiAnVVRDJyxcbi8vICAgaG91cjogJ251bWVyaWMnLFxuLy8gICBtaW51dGU6ICdudW1lcmljJyxcbi8vICAgc2Vjb25kOiAnbnVtZXJpYydcbi8vIH07XG4vL1xuLy8gYWxlcnQoIGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJydVwiLCBvcHRpb25zKSApOyAvLyDRgdGA0LXQtNCwLCAzMSDQtNC10LrQsNCx0YDRjyAyMDE0INCzLiDQvS7RjS4gMTI6MzA6MDBcbi8vIGFsZXJ0KCBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucykgKTsgLy8gV2VkbmVzZGF5LCBEZWNlbWJlciAzMSwgMjAxNCBBbm5vIERvbWluaSAxMjozMDowMCBQTVxuXG5cbi8vL2NvbnNvbGUudGltZS8vL1xuLy8gdmFyIGFyciA9IFtdO1xuLy8gZm9yICh2YXIgaSA9IDA7IGkgPCAxMDAwOyBpKyspIGFycltpXSA9IDA7XG4vL1xuLy8gZnVuY3Rpb24gd2Fsa0luKGFycikge1xuLy8gICBmb3IgKHZhciBrZXkgaW4gYXJyKSBhcnJba2V5XSsrO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIHdhbGtMZW5ndGgoYXJyKSB7XG4vLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnJbaV0rKztcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBiZW5jaChmKSB7XG4vLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDA7IGkrKykgZihhcnIpO1xuLy8gfVxuLy9cbi8vIGNvbnNvbGUudGltZShcIkFsbCBCZW5jaG1hcmtzXCIpO1xuLy9cbi8vIGNvbnNvbGUudGltZShcIndhbGtJblwiKTtcbi8vIGJlbmNoKHdhbGtJbik7XG4vLyBjb25zb2xlLnRpbWVFbmQoXCJ3YWxrSW5cIik7XG4vL1xuLy8gY29uc29sZS50aW1lKFwid2Fsa0xlbmd0aFwiKTtcbi8vIGJlbmNoKHdhbGtMZW5ndGgpO1xuLy8gY29uc29sZS50aW1lRW5kKFwid2Fsa0xlbmd0aFwiKTtcbi8vXG4vLyBjb25zb2xlLnRpbWVFbmQoXCJBbGwgQmVuY2htYXJrc1wiKTtcblxuXG4vLy9CZW5jaG1hcmtpbmcvLy9cbi8vIHZhciBhcnIgPSBbXTtcbi8vIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDsgaSsrKSBhcnJbaV0gPSAwO1xuLy9cbi8vIGZ1bmN0aW9uIHdhbGtJbihhcnIpIHtcbi8vICAgZm9yICh2YXIga2V5IGluIGFycikgYXJyW2tleV0rKztcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiB3YWxrTGVuZ3RoKGFycikge1xuLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyW2ldKys7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gYmVuY2goZikge1xuLy8gICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4vLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDsgaSsrKSBmKGFycik7XG4vLyAgIHJldHVybiBuZXcgRGF0ZSgpIC0gZGF0ZTtcbi8vIH1cbi8vXG4vLyAvLyBiZW5jaCDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0YLQtdGB0YLQsCDQt9Cw0L/Rg9GB0YLQuNC8INC80L3QvtCz0L4g0YDQsNC3LCDRh9C10YDQtdC00YPRj1xuLy8gdmFyIHRpbWVJbiA9IDAsXG4vLyAgIHRpbWVMZW5ndGggPSAwO1xuLy8gZm9yICh2YXIgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuLy8gICB0aW1lSW4gKz0gYmVuY2god2Fsa0luKTtcbi8vICAgdGltZUxlbmd0aCArPSBiZW5jaCh3YWxrTGVuZ3RoKTtcbi8vIH1cbi8vXG4vLyBhbGVydCggJ9CS0YDQtdC80Y8gd2Fsa0luOiAnICsgdGltZUluICsgJ9C80YEnICk7XG4vLyBhbGVydCggJ9CS0YDQtdC80Y8gd2Fsa0xlbmd0aDogJyArIHRpbWVMZW5ndGggKyAn0LzRgScgKTtcblxuXG4vLy9CZW5jaG1hcmtpbmcvLy9cbi8vIHZhciBhcnIgPSBbXTtcbi8vIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDsgaSsrKSBhcnJbaV0gPSAwO1xuLy9cbi8vIGZ1bmN0aW9uIHdhbGtJbihhcnIpIHtcbi8vICAgZm9yICh2YXIga2V5IGluIGFycikgYXJyW2tleV0rKztcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiB3YWxrTGVuZ3RoKGFycikge1xuLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyW2ldKys7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gYmVuY2goZikge1xuLy8gICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4vLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDA7IGkrKykgZihhcnIpO1xuLy8gICByZXR1cm4gbmV3IERhdGUoKSAtIGRhdGU7XG4vLyB9XG4vL1xuLy8gYWxlcnQoICfQktGA0LXQvNGPIHdhbGtJbjogJyArIGJlbmNoKHdhbGtJbikgKyAn0LzRgScgKTtcbi8vIGFsZXJ0KCAn0JLRgNC10LzRjyB3YWxrTGVuZ3RoOiAnICsgYmVuY2god2Fsa0xlbmd0aCkgKyAn0LzRgScgKTtcblxuXG4vLyB2YXIgc3RhcnQgPSBuZXcgRGF0ZTsgLy8g0LfQsNGB0LXQutC70Lgg0LLRgNC10LzRj1xuLy9cbi8vIC8vINGH0YLQvi3RgtC+INGB0LTQtdC70LDRgtGMXG4vLyBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDAwOyBpKyspIHtcbi8vICAgdmFyIGRvU29tZXRoaW5nID0gaSAqIGkgKiBpO1xuLy8gfVxuLy9cbi8vIHZhciBlbmQgPSBuZXcgRGF0ZTsgLy8g0LrQvtC90LXRhiDQuNC30LzQtdGA0LXQvdC40Y9cbi8vXG4vLyBhbGVydCggXCLQptC40LrQuyDQt9Cw0L3Rj9C7IFwiICsgKGVuZCAtIHN0YXJ0KSArIFwiIG1zXCIgKTtcblxuLy8gdmFyIGRhdGUgPSBuZXcgRGF0ZSgyMDExLCAwLCAxLCAyLCAzLCA0LCA1NjcpO1xuLy8gYWxlcnQoIGRhdGUuZ2V0TW9udGgoKSApOyAvLyAxLjAxLjIwMTEsIDAyOjAzOjA0LjU2N1xuXG5cbi8vIHZhciBKYW4wMl8xOTcwID0gbmV3IERhdGUoMzYwMCAqIDI0ICogMTAwMCk7XG4vLyBhbGVydCggSmFuMDJfMTk3MCApO1xuXG5cbi8vIC8vL0PRg9C80LzQsCDQstGB0LXRhSDQsNGA0LPRg9C80LXQvdGC0L7Qsi8vL1xuLy8gZnVuY3Rpb24gc3VtKHgpIHtcbi8vXG4vLyAgIHZhciByZXN1bHQgPSAwO1xuLy9cbi8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbi8vICAgICByZXN1bHQgKz0gYXJndW1lbnRzW2ldO1xuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gcmVzdWx0O1xuLy8gfVxuLy9cbi8vIGFsZXJ0KCBzdW0oKSApOyAvLyAwXG4vLyBhbGVydCggc3VtKDEpICk7IC8vIDFcbi8vIGFsZXJ0KCBzdW0oMSwgMikgKTsgLy8gM1xuLy8gYWxlcnQoIHN1bSgxLCAyLCAzKSApOyAvLyA2XG4vLyBhbGVydCggc3VtKDEsIDIsIDMsIDQpICk7IC8vIDEwXG5cbi8vLy8xLCDQtdGB0LvQuCDQv9C10YDQstGL0Lkg0LDRgNCz0YPQvNC10L3RgiDQtdGB0YLRjCwg0LggMCAtINC10YHQu9C4INC90LXRgi8vL1xuLy8gZnVuY3Rpb24gZih4KSB7XG4vLyAgIGFsZXJ0KGFyZ3VtZW50cy5sZW5ndGggPyAxIDogMCk7XG4vLyB9XG4vL1xuLy8gZigpO1xuXG5cbi8vL2Z1IGJhci8vL1xuLy8gdmFyIGFyciA9IFsxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMF07XG4vL1xuLy8gYXJyLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSl7XG4vLyBcdGlmKChpdGVtICUgMyA9PT0gMCAmJiBpdGVtICUgNSA9PT0gMCkpIHtcbi8vIFx0XHRhbGVydChpdGVtICsgXCI6IGZ1LCBiYXJcIik7XG4vLyBcdH0gZWxzZSBpZiAoKGl0ZW0gJSAzKSA9PT0gMCkge1xuLy8gXHRcdGFsZXJ0KGl0ZW0gKyBcIjogZnVcIik7XG4vLyBcdH0gZWxzZSBpZiAoKGl0ZW0gJSA1KSA9PT0gMCkge1xuLy8gXHRcdGFsZXJ0KGl0ZW0gKyBcIjogYmFyXCIpO1xuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdGFsZXJ0IChpdGVtKTtcbi8vIFx0fVxuLy8gfSk7XG5cbi8vZnUgYmFyIC0gZm9yLy8vXG4vLyB2YXIgYXJyID0gWzEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5LDIwXTtcbi8vXG4vLyBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuLy8gXHR2YXIgaXRlbSA9IGFycltpXTtcbi8vIFx0aWYgKGl0ZW0gJSAzID09PSAwICYmIGl0ZW0gJSA1ID09PSAwKSB7XG4vLyBcdFx0YWxlcnQoaXRlbSArIFwiIDogZnUsIGJhclwiKTtcbi8vIFx0fSBlbHNlIGlmIChpdGVtICUgMyA9PT0gMCkge1xuLy8gXHRcdGFsZXJ0KGl0ZW0gKyBcIiA6IGZ1XCIpO1xuLy8gXHR9IGVsc2UgaWYgKGFycltpXSAlIDUgPT09IDApIHtcbi8vIFx0XHRhbGVydChpdGVtICsgXCIgOiBiYXJcIik7XG4vLyBcdH0gZWxzZSB7XG4vLyBcdFx0YWxlcnQoaXRlbSk7XG4vLyBcdH1cbi8vIH1cblxuXG4vLyB2YXIgYXJyID0gWyAxLCAyLCAzLCA0LCA1IF1cbi8vXG4vLyBmdW5jdGlvbiBnZXRTdW1zKGFycikge1xuLy8gICB2YXIgcmVzdWx0ID0gW107XG4vLyAgIGlmICghYXJyLmxlbmd0aCkgcmV0dXJuIHJlc3VsdDtcbi8vXG4vLyAgIHZhciB0b3RhbFN1bSA9IGFyci5yZWR1Y2UoZnVuY3Rpb24oc3VtLCBpdGVtKSB7XG4vLyAgICAgcmVzdWx0LnB1c2goc3VtKTtcbi8vICAgICByZXR1cm4gc3VtICsgaXRlbTtcbi8vICAgfSk7XG4vLyAgIHJlc3VsdC5wdXNoKHRvdGFsU3VtKTtcbi8vXG4vLyAgIHJldHVybiByZXN1bHQ7XG4vLyB9XG4vL1xuLy8gYWxlcnQoZ2V0U3VtcyhbMSwgMiwgMywgNCwgNV0pKTtcblxuXG4vLy/QktGL0LHQvtGAINGD0L3QuNC60LDQu9GM0L3QvtCz0L4g0L7QsdGK0LXQutGC0LAgKNC80LXQtNC70LXQvdC90L4pLy8vXG4vLyBmdW5jdGlvbiB1bmlxdWUoYXJyKSB7XG4vLyAgIHZhciByZXN1bHQgPSBbXTtcbi8vXG4vLyAgIG5leHRJbnB1dDpcbi8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgdmFyIHN0ciA9IGFycltpXTsgLy8g0LTQu9GPINC60LDQttC00L7Qs9C+INGN0LvQtdC80LXQvdGC0LBcbi8vICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSB7IC8vINC40YnQtdC8LCDQsdGL0Lsg0LvQuCDQvtC9INGD0LbQtT9cbi8vICAgICAgICAgaWYgKHJlc3VsdFtqXSA9PSBzdHIpIGNvbnRpbnVlIG5leHRJbnB1dDsgLy8g0LXRgdC70Lgg0LTQsCwg0YLQviDRgdC70LXQtNGD0Y7RidC40Llcbi8vICAgICAgIH1cbi8vICAgICAgIHJlc3VsdC5wdXNoKHN0cik7XG4vLyAgICAgfVxuLy9cbi8vICAgcmV0dXJuIHJlc3VsdDtcbi8vIH1cbi8vXG4vLyB2YXIgc3RyaW5ncyA9IFtcItC60YDQuNGI0L3QsFwiLCBcItC60YDQuNGI0L3QsFwiLCBcItGF0LDRgNC1XCIsIFwi0YXQsNGA0LVcIixcbi8vICAgXCLRhdCw0YDQtVwiLCBcItGF0LDRgNC1XCIsIFwi0LrRgNC40YjQvdCwXCIsIFwi0LrRgNC40YjQvdCwXCIsIFwiOC0oKVwiXG4vLyBdO1xuLy9cbi8vIGFsZXJ0KCB1bmlxdWUoc3RyaW5ncykgKTsgLy8g0LrRgNC40YjQvdCwLCDRhdCw0YDQtSwgOC0oKVxuXG5cbi8vIC8vL9CS0YvQsdC+0YAg0YPQvdC40LrQsNC70YzQvdC+0LPQviDQvtCx0YrQtdC60YLQsCAo0LHRi9GB0YLRgNC+KS8vL1xuLy8gZnVuY3Rpb24gdW5pcXVlKGFycikge1xuLy8gICB2YXIgb2JqID0ge307XG4vL1xuLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuLy8gICAgIHZhciBzdHIgPSBhcnJbaV07XG4vLyAgICAgb2JqW3N0cl0gPSB0cnVlO1xuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gT2JqZWN0LmtleXMob2JqKTtcbi8vIH1cbi8vXG4vLyB2YXIgc3RyaW5ncyA9IFtcItC60YDQuNGI0L3QsFwiLCBcItC60YDQuNGI0L3QsFwiLCBcItGF0LDRgNC1XCIsIFwi0YXQsNGA0LVcIixcbi8vICAgXCLRhdCw0YDQtVwiLCBcItGF0LDRgNC1XCIsIFwi0LrRgNC40YjQvdCwXCIsIFwi0LrRgNC40YjQvdCwXCIsIFwiOC0oKVwiXG4vLyBdO1xuLy9cbi8vIGFsZXJ0KCB1bmlxdWUoc3RyaW5ncykgKTtcblxuXG4vLyBmdW5jdGlvbiBhY2xlYW4oYXJyKSB7XG4vL1xuLy8gICB2YXIgb2JqID0ge307XG4vL1xuLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuLy8gICAgIHZhciBzb3J0ZWQgPSBhcnJbaV0udG9Mb3dlckNhc2UoKS5zcGxpdCgnJykuc29ydCgpLmpvaW4oJycpO1xuLy9cbi8vICAgICBvYmpbc29ydGVkXSA9IGFycltpXTtcbi8vICAgfVxuLy9cbi8vICAgdmFyIHJlc3VsdCA9IFtdO1xuLy9cbi8vICAgZm9yICh2YXIga2V5IGluIG9iaikgcmVzdWx0LnB1c2gob2JqW2tleV0pO1xuLy9cbi8vICAgcmV0dXJuIHJlc3VsdDtcbi8vIH1cbi8vXG4vLyB2YXIgYXJyID0gW1wi0LLQvtC3XCIsIFwi0LrQuNCx0L7RgNCzXCIsIFwi0LrQvtGA0YHQtdGCXCIsIFwi0JfQntCSXCIsIFwi0LPRgNC+0LHQuNC6XCIsIFwi0LrQvtGB0YLQtdGAXCIsIFwi0YHQtdC60YLQvtGAXCJdO1xuLy9cbi8vIGFsZXJ0KCBhY2xlYW4oYXJyKSApO1xuXG5cbi8vIHZhciBsaXN0ID0ge1xuLy8gICB2YWx1ZTogMSxcbi8vICAgbmV4dDoge1xuLy8gICAgIHZhbHVlOiAyLFxuLy8gICAgIG5leHQ6IHtcbi8vICAgICAgIHZhbHVlOiAzLFxuLy8gICAgICAgbmV4dDoge1xuLy8gICAgICAgICB2YWx1ZTogNCxcbi8vICAgICAgICAgbmV4dDogbnVsbFxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfTtcbi8vXG4vLyBmdW5jdGlvbiBwcmludFJldmVyc2VMaXN0KGxpc3QpIHtcbi8vICAgdmFyIGFyciA9IFtdO1xuLy8gICB2YXIgdG1wID0gbGlzdDtcbi8vXG4vLyAgIHdoaWxlICh0bXApIHtcbi8vICAgICBhcnIucHVzaCh0bXAudmFsdWUpO1xuLy8gICAgIHRtcCA9IHRtcC5uZXh0O1xuLy8gICB9XG4vL1xuLy8gICBmb3IgKHZhciBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4vLyAgICAgYWxlcnQoIGFycltpXSApO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gcHJpbnRSZXZlcnNlTGlzdChsaXN0KTtcblxuXG4vLyB2YXIgbGlzdCA9IHtcbi8vICAgdmFsdWU6IDEsXG4vLyAgIG5leHQ6IHtcbi8vICAgICB2YWx1ZTogMixcbi8vICAgICBuZXh0OiB7XG4vLyAgICAgICB2YWx1ZTogMyxcbi8vICAgICAgIG5leHQ6IHtcbi8vICAgICAgICAgdmFsdWU6IDQsXG4vLyAgICAgICAgIG5leHQ6IG51bGxcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH07XG4vL1xuLy8gZnVuY3Rpb24gcHJpbnRSZXZlcnNlTGlzdChsaXN0KSB7XG4vL1xuLy8gICBpZiAobGlzdC5uZXh0KSB7XG4vLyAgICAgcHJpbnRSZXZlcnNlTGlzdChsaXN0Lm5leHQpO1xuLy8gICB9XG4vL1xuLy8gICBhbGVydCggbGlzdC52YWx1ZSApO1xuLy8gfVxuLy9cbi8vIHByaW50UmV2ZXJzZUxpc3QobGlzdCk7XG5cblxuXG4vLyB2YXIgbGlzdCA9IHtcbi8vICAgdmFsdWU6IDEsXG4vLyAgIG5leHQ6IHtcbi8vICAgICB2YWx1ZTogMixcbi8vICAgICBuZXh0OiB7XG4vLyAgICAgICB2YWx1ZTogMyxcbi8vICAgICAgIG5leHQ6IHtcbi8vICAgICAgICAgdmFsdWU6IDQsXG4vLyAgICAgICAgIG5leHQ6IG51bGxcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH07XG4vL1xuLy8gZnVuY3Rpb24gcHJpbnRMaXN0KGxpc3QpIHtcbi8vXG4vLyAgIGFsZXJ0KGxpc3QudmFsdWUpO1xuLy9cbi8vICAgaWYgKGxpc3QubmV4dCkge1xuLy8gICAgIHByaW50TGlzdChsaXN0Lm5leHQpO1xuLy8gICB9XG4vL1xuLy8gfVxuLy9cbi8vIHByaW50TGlzdChsaXN0KTtcblxuXG4vLyB2YXIgbGlzdCA9IHtcbi8vICAgdmFsdWU6IDEsXG4vLyAgIG5leHQ6IHtcbi8vICAgICB2YWx1ZTogMixcbi8vICAgICBuZXh0OiB7XG4vLyAgICAgICB2YWx1ZTogMyxcbi8vICAgICAgIG5leHQ6IHtcbi8vICAgICAgICAgdmFsdWU6IDQsXG4vLyAgICAgICAgIG5leHQ6IG51bGxcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH07XG4vL1xuLy8gZnVuY3Rpb24gcHJpbnRMaXN0KGxpc3QpIHtcbi8vICAgdmFyIHRtcCA9IGxpc3Q7XG4vL1xuLy8gICB3aGlsZSAodG1wKSB7XG4vLyAgICAgYWxlcnQgKCB0bXAudmFsdWUgKTtcbi8vICAgICB0bXAgPSB0bXAubmV4dDtcbi8vICAgfVxuLy9cbi8vIH1cbi8vXG4vLyBwcmludExpc3QobGlzdCk7XG5cbi8vIGZ1bmN0aW9uIHNvcnRCeUFnZShwZXJzb25BLCBwZXJzb25CKSB7XG4vLyAgIHJldHVybiBwZXJzb25BLmFnZSAtIHBlcnNvbkIuYWdlO1xuLy8gfVxuLy9cbi8vIHZhciB2YXN5YSA9IHtuYW1lOiAn0JLQsNGB0Y8nLCBhZ2U6IDIzIH07XG4vLyB2YXIgbWFzaGEgPSB7bmFtZTogJ9Cc0LDRiNCwJywgYWdlOiAxOCB9O1xuLy8gdmFyIHZvdm9jaGthID0ge25hbWU6ICfQktC+0LLQvtGH0LrQsCcsIGFnZTogNiB9O1xuLy9cbi8vIHZhciBwZW9wbGUgPSBbdmFzeWEsIG1hc2hhLCB2b3ZvY2hrYV07XG4vL1xuLy8gcGVvcGxlLnNvcnQoc29ydEJ5QWdlKTtcbi8vXG4vL1xuLy8gZm9yICh2YXIgaSA9IDA7IGkgPCBwZW9wbGUubGVuZ3RoOyBpKyspIHtcbi8vICAgYWxlcnQocGVvcGxlW2ldLm5hbWUpO1xuLy8gfVxuXG4vLy/QoNCw0L3QtNC+0Lwg0LfQvdCw0YfQtdC90LjQuSDQsiDQvNCw0YHRgdC40LLQtS8vL1xuLy8gdmFyIGFyciA9IFsxLCAyLCAzLCA0LCA1XTtcbi8vXG4vLyBmdW5jdGlvbiByYW5kb20oYSwgYikge1xuLy8gICByZXR1cm4gTWF0aC5yYW5kb20oKTtcbi8vIH1cbi8vXG4vLyBhcnIuc29ydChyYW5kb20pO1xuLy9cbi8vIGFsZXJ0KGFycik7XG5cblxuLy8v0KHQvtGA0YLQuNGA0L7QstC60LAvLy9cbi8vIHZhciBhcnIgPSBbJ0hUTUwnLCAnSmF2YVNjcmlwdCcsICdDU1MnXTtcbi8vXG4vLyB2YXIgYXJyU29ydGVkID0gYXJyLnNsaWNlKCkuc29ydCgpO1xuLy9cbi8vXG4vLyBhbGVydChhcnJTb3J0ZWQpO1xuLy8gYWxlcnQoYXJyKTtcblxuXG4vLy/QodGA0LDQstC90LXQvdC40LUg0L/QviDQv9C+0YDRj9C00LrRgy8vL1xuLy8gdmFyIGFyciA9IFs1LCAyLCAxLCAtMTAsIDhdO1xuLy9cbi8vIGZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuLy8gICByZXR1cm4gYSAtIGI7XG4vLyB9XG4vL1xuLy8gYWxlcnQoYXJyLnNvcnQoY29tcGFyZSkpO1xuXG5cbi8vIGZ1bmN0aW9uIGZpbHRlclJhbmdlSW5QbGFjZSAoYXJyLCBhLCBiKSB7XG4vL1xuLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuLy8gICAgIGlmIChhcnJbaV0gPCBhIHx8IGFycltpXSA+IGIpIHtcbi8vICAgICAgIGFyci5zcGxpY2UoaS0tLCAxKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyB2YXIgYXJyID0gWzUsIDMsIDgsIDFdO1xuLy9cbi8vIGZpbHRlclJhbmdlSW5QbGFjZShhcnIsIDEsIDQpO1xuLy8gYWxlcnQoIGFyciApOyAvLyBbMywgMV1cblxuXG4vLy/Qo9C00LDQu9C40YLRjCDQutC70LDRgdGBLy8vXG4vLyBmdW5jdGlvbiByZW1vdmVDbGFzcyhvYmosIGNscykge1xuLy9cbi8vICAgdmFyIHJlbW92ZSA9IG9iai5jbGFzc05hbWUgPyBvYmouY2xhc3NOYW1lLnNwbGl0KCcgJykgOiBbXTtcbi8vXG4vLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgaWYgKHJlbW92ZVtpXSA9PSBjbHMpIHtcbi8vICAgICAgIHJlbW92ZS5zcGxpY2UoaSwgMSk7XG4vLyAgICAgICBpLS07XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIG9iai5jbGFzc05hbWUgPSByZW1vdmUuam9pbignICcpO1xuLy9cbi8vIH1cbi8vXG4vLyB2YXIgb2JqID0ge1xuLy8gICBjbGFzc05hbWU6ICdvcGVuIG1lbnUgbWVudSdcbi8vIH1cbi8vXG4vLyByZW1vdmVDbGFzcyhvYmosICdibGFibGEnKTtcbi8vIHJlbW92ZUNsYXNzKG9iaiwgJ21lbnUnKTtcbi8vIGFsZXJ0KG9iai5jbGFzc05hbWUpO1xuXG5cbi8vL9Cj0LTQsNC70LXQvdC40LUg0LTQtdGE0LjRgdC+0LIvLy8vXG4vLyBmdW5jdGlvbiBjYW1lbGl6ZShzdHIpIHtcbi8vXG4vLyAgIHZhciBtaW51cyA9IHN0ci5zcGxpdCgnLScpO1xuLy9cbi8vICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtaW51cy5sZW5ndGg7IGkrKykge1xuLy8gICAgIC8v0L/QtdGA0LLRi9C5INGB0LjQvNCy0L7QuyDQv9C+0YHQu9C1INGB0L/Qu9C40YLQsCDRgSDQsdC+0LvRjNGI0L7QuSDQsdGD0LrQstGLXG4vLyAgICAgbWludXNbaV0gPSBtaW51c1tpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1pbnVzW2ldLnNsaWNlKDEpO1xuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gbWludXMuam9pbignJyk7XG4vL1xuLy8gfVxuLy9cbi8vIGFsZXJ0ICggY2FtZWxpemUgKFwiYmFja2dyb3VuZC1jb2xvclwiKSApO1xuLy8gYWxlcnQgKCBjYW1lbGl6ZSAoXCJsaXN0LXN0eWxlLWltYWdlXCIpICk7XG4vLyBhbGVydCAoIGNhbWVsaXplIChcIi13ZWJraXQtdHJhbnNpdGlvblwiKSApO1xuXG5cbi8vIGZ1bmN0aW9uIGFkZENsYXNzKG9iaiwgY2xzKSB7XG4vL1xuLy8gICB2YXIgY2xhc3NlcyA9IFtdO1xuLy9cbi8vICAgaWYgKG9iai5jbGFzc05hbWUpIHtcbi8vICAgICBjbGFzc2VzID0gb2JqLmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuLy8gICB9XG4vL1xuLy8gICAvLyB2YXIgY2xhc3NlcyA9IG9iai5jbGFzc05hbWUgPyBvYmouY2xhc3NOYW1lLnNwbGl0KCcgJykgOiBbXTtcbi8vXG4vLyBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbi8vICAgaWYgKGNsYXNzZXNbaV0gPT0gY2xzKSByZXR1cm47XG4vLyB9XG4vL1xuLy8gY2xhc3Nlcy5wdXNoKGNscyk7XG4vL1xuLy8gb2JqLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpO1xuLy9cbi8vIH1cbi8vXG4vLyB2YXIgb2JqID0ge1xuLy8gICBjbGFzc05hbWU6ICdvcGVuIG1lbnUnXG4vLyB9O1xuLy9cbi8vIGFkZENsYXNzKG9iaiwgJ25ldycpO1xuLy8gYWRkQ2xhc3Mob2JqLCAnb3BlbicpO1xuLy8gYWRkQ2xhc3Mob2JqLCAnbWUnKTtcbi8vIGFsZXJ0KG9iai5jbGFzc05hbWUpIC8vIG9wZW4gbWVudSBuZXcgbWVcblxuXG4vLyBmdW5jdGlvbiBhZGRDbGFzcyhvYmosIGNscykge1xuLy8gICB2YXIgY2xhc3NlcyA9IG9iai5jbGFzc05hbWUgPyBvYmouY2xhc3NOYW1lLnNwbGl0KCcgJykgOiBbXTtcbi8vXG4vLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuLy8gICAgIGlmIChjbGFzc2VzW2ldID09IGNscykgcmV0dXJuO1xuLy8gICB9XG4vL1xuLy8gICBjbGFzc2VzLnB1c2goY2xzKTtcbi8vXG4vLyAgIG9iai5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKTtcbi8vIH1cbi8vXG4vLyB2YXIgb2JqID0ge1xuLy8gICBjbGFzc05hbWU6ICdvcGVuIG1lbnUnXG4vLyB9O1xuLy9cbi8vIGFkZENsYXNzKG9iaiwgJ25ldycpO1xuLy8gYWRkQ2xhc3Mob2JqLCAnb3BlbicpO1xuLy8gYWRkQ2xhc3Mob2JqLCAnbWUnKTtcbi8vXG4vLyBhbGVydChvYmouY2xhc3NOYW1lKTtcblxuXG5cbi8vL9Cc0LDRgdGB0LjQsiDQvdCw0LjQsdC+0LvRjNGI0LXQuSDQs9GA0YPQv9C/0YsgKE8obikpIC8vL1xuLy8gZnVuY3Rpb24gZ2V0TWF4U3ViU3VtKGFycikge1xuLy8gICB2YXIgbWF4U3VtID0gMCxcbi8vICAgICBwYXJ0aWFsU3VtID0gMDtcbi8vXG4vLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIHBhcnRpYWxTdW0gKz0gYXJyW2ldO1xuLy8gICAgICAgbWF4U3VtID0gTWF0aC5tYXgobWF4U3VtLCBwYXJ0aWFsU3VtKTtcbi8vICAgICAgIGlmIChwYXJ0aWFsU3VtIDwgMCkgcGFydGlhbFN1bSA9IDA7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBtYXhTdW07XG4vLyB9XG4vL1xuLy8gYWxlcnQoIGdldE1heFN1YlN1bShbLTEsIDIsIDMsIC05XSkgKTsgLy8gNVxuLy8gYWxlcnQoIGdldE1heFN1YlN1bShbLTEsIDIsIDMsIC05LCAxMV0pICk7IC8vIDExXG4vLyBhbGVydCggZ2V0TWF4U3ViU3VtKFstMiwgLTEsIDEsIDJdKSApOyAvLyAzXG4vLyBhbGVydCggZ2V0TWF4U3ViU3VtKFsxMDAsIC05LCAyLCAtMywgNV0pICk7IC8vIDEwMFxuLy8gYWxlcnQoIGdldE1heFN1YlN1bShbMSwgMiwgM10pICk7IC8vIDZcbi8vIGFsZXJ0KCBnZXRNYXhTdWJTdW0oWy0xLCAtMiwgLTNdKSApOyAvLyAwXG5cblxuLy8v0LzQsNGB0YHQuNCyINC90LDQuNCx0L7Qu9GM0YjQtdC5INCz0YDRg9C/0L/RiyAoTyhuXjIpKS8vL1xuLy8gZnVuY3Rpb24gZ2V0TWF4U3ViU3VtKGFycikge1xuLy8gICB2YXIgbWF4U3VtID0gMDtcbi8vXG4vLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgdmFyIHN1bUZpeGVkU3RhcnQgPSAwO1xuLy8gICAgIGZvciAodmFyIGogPSBpOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XG4vLyAgICAgICBzdW1GaXhlZFN0YXJ0ICs9IGFycltqXTtcbi8vICAgICAgIG1heFN1bSA9IE1hdGgubWF4KG1heFN1bSwgc3VtRml4ZWRTdGFydCk7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIHJldHVybiBtYXhTdW07XG4vLyB9XG4vL1xuLy8gYWxlcnQoIGdldE1heFN1YlN1bShbLTEsIDIsIDMsIC05XSkgKTsgLy8gNVxuLy8gYWxlcnQoIGdldE1heFN1YlN1bShbLTEsIDIsIDMsIC05LCAxMV0pICk7IC8vIDExXG4vLyBhbGVydCggZ2V0TWF4U3ViU3VtKFstMiwgLTEsIDEsIDJdKSApOyAvLyAzXG4vLyBhbGVydCggZ2V0TWF4U3ViU3VtKFsxLCAyLCAzXSkgKTsgLy8gNlxuLy8gYWxlcnQoIGdldE1heFN1YlN1bShbMTAwLCAtOSwgMiwgLTMsIDVdKSApOyAvLyAxMDBcblxuXG4vL9Cg0LXRiNC10YLQviDQrdGA0LDRgtC+0YHRhNC10L3QsCAtICjQstGB0LUg0L/RgNC+0YHRgtGL0LUg0YfQuNGB0LvQsCDQvtGCIDIg0LTQviAxMDApXG4vLyDRiNCw0LMgMSAtINGB0L/QuNGB0L7QuiDQv9C+0YHQu9C10LTQvtCy0LDRgtC10LvRjNC90YvRhSDRh9C40YHQtdC7INC+0YIgMiDQtNC+IDEwMFxuLy8gdmFyIGFyciA9IFtdO1xuLy9cbi8vIGZvciAodmFyIGkgPSAyOyBpIDwgMTAwOyBpKyspIHtcbi8vICAgYXJyW2ldID0gdHJ1ZTtcbi8vIH1cbi8vXG4vLyAvLyDRiNCw0LMgMiAtINC/0LXRgNCy0L7QtSDQv9GA0L7RgdGC0L7QtSDRh9C40YHQu9C+XG4vLyB2YXIgcCA9IDI7XG4vL1xuLy8gZG8ge1xuLy8gICAvLyDRiNCw0LMgMyAtINC30LDRh9C10YDQutC40LLQsNC10Lwg0LLRgdC1INC/0L7RgdC70LXQtNGD0YnQuNC1INGH0LjRgdC70LAg0YEg0YDQsNC30L3QuNGG0LXQuSDQsiBwIC0gKDQsNiw4KVxuLy8gICBmb3IgKGkgPSAyICogcDsgaSA8IDEwMDsgaSArPSBwKSB7XG4vLyAgICAgYXJyW2ldID0gZmFsc2U7XG4vLyAgIH1cbi8vXG4vLyAgIC8vINGI0LDQsyA0XG4vLyAgIGZvciAoaSA9IHAgKyAxOyBpIDwgMTAwOyBpKyspIHtcbi8vICAgICBpZiAoYXJyW2ldKSBicmVhaztcbi8vICAgfVxuLy9cbi8vICAgcCA9IGk7IC8vICgzLCA1LCA3KVxuLy8gfSB3aGlsZSAocCAqIHAgPCAxMDApOyAvLyDRiNCw0LMgNVxuLy9cbi8vIC8vINGI0LDQsyA2ICjQs9C+0YLQvtCy0L4pXG4vLyAvLyDQv9C+0YHRh9C40YLQsNGC0Ywg0YHRg9C80LzRg1xuLy8gdmFyIHN1bSA9IDA7XG4vLyBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4vLyAgIGlmIChhcnJbaV0pIHtcbi8vICAgICBzdW0gKz0gaTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIGFsZXJ0KCBzdW0gKTtcblxuXG4vLyBmdW5jdGlvbiBmaWx0ZXJlZFJhbmdlIChhcnIsIGEsIGIpIHtcbi8vICAgdmFyIHJlc3VsdCA9IFtdO1xuLy9cbi8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgaWYgKGFycltpXSA+PSBhICYmIGFycltpXSA8PSBiKSB7XG4vLyAgICAgICAgIHJlc3VsdC5wdXNoKGFycltpXSk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy9cbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gfVxuLy9cbi8vIHZhciBhcnJheSA9IFs1LCA0LCAzICw4ICwwXTtcbi8vXG4vLyB2YXIgZmlsdGVyZWQgPSBmaWx0ZXJlZFJhbmdlKGFycmF5LCAzLCA1KTtcbi8vIGFsZXJ0KCBmaWx0ZXJlZCApO1xuXG5cbi8vL9C/0L7QuNGB0Log0LIg0LzQsNGB0YHQuNCy0LUvLy9cbi8vINGB0L7Qt9C00LDQtdC8INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LIg0Lgg0L/RgNC+0LLQtdGA0Y/QtdC8INC/0L7QtNC00LXRgNC20LjQstCw0LXRgtGB0Y8g0LvQuCBpbmRleE9mXG4vLyBpZiAoW10uaW5kZXhPZikge1xuLy9cbi8vICAgdmFyIGZpbmQgPSBmdW5jdGlvbihhcnJheSwgdmFsdWUpIHtcbi8vICAgICByZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSk7XG4vLyAgIH1cbi8vXG4vLyB9IGVsc2Uge1xuLy8gICB2YXIgZmluZCA9IGZ1bmN0aW9uKGFycmF5LCB2YWx1ZSkge1xuLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIGlmIChhcnJheVtpXSA9PT0gdmFsdWUpIHJldHVybiBpO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgcmV0dXJuIC0xO1xuLy8gICB9XG4vL1xuLy8gfVxuLy9cbi8vIHZhciBhcnIgPSBbJ2EnLCAtMSwgMiwgJ2InXTtcbi8vXG4vLyB2YXIgaW5kZXggPSBmaW5kKGFyciwgMik7XG4vL1xuLy8gYWxlcnQgKGluZGV4KTtcblxuXG4vLy/QmtCw0LvRjNC60YPQu9GP0YLQvtGALy8vXG4vLyB2YXIgbnVtYmVycyA9IFtdO1xuLy9cbi8vIHdoaWxlICh0cnVlKSB7XG4vL1xuLy8gICB2YXIgdmFsdWUgPSBwcm9tcHQoJ9CS0LLQtdC00LjRgtC1INGH0LjRgdC70L46JywgMCk7XG4vL1xuLy8gICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnIHx8IGlzTmFOKHZhbHVlKSkgYnJlYWs7XG4vL1xuLy8gICBudW1iZXJzLnB1c2goK3ZhbHVlKTtcbi8vXG4vLyB9XG4vL1xuLy8gdmFyIHN1bSA9IDA7XG4vLyBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlcnMubGVuZ3RoOyBpKyspIHtcbi8vICAgc3VtICs9IG51bWJlcnNbaV07XG4vLyB9XG4vL1xuLy8gYWxlcnQgKCBzdW0gKTtcblxuXG4vLyDQoNCw0L3QtNC+0Lwg0LfQvdCw0YfQtdC90LjRjy8vL1xuLy8gdmFyIGFyciA9IFsn0K/QsdC70L7QutC+JywgJ9CQ0L/QtdC70YzRgdC40L0nLCAn0JPRgNGD0YjQsCcsICfQm9C40LzQvtC9J107XG4vL1xuLy8gdmFyIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbi8vXG4vLyBhbGVydCggYXJyW3JhbmRdICk7XG4iXSwiZmlsZSI6ImFsZXJ0LmpzIn0=
