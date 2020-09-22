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
// var styles = ['dzhas', 'blues'];
//
// styles.push('rockNroll'); //добавили рокнрол в конец
//
// styles[styles.length - 2] = 'classic'; //перезаписываем предпоследний на класик
//
// styles.shift(0);  //удаляем первый
//
// styles.unshift('rap', 'raggy'); // добавляем в начало рэп и рэгги
//
// alert(styles);
///Клонируем объект///
// var user = {
//   name: "Вася",
//   age: 30
// };
//
// var clone = {}; // новый пустой объект
//
// // скопируем в него все свойства user
// for (var key in user) {
//   clone[key] = user[key];
// }
//
// // теперь clone - полностью независимая копия
// clone.name = "Петя"; // поменяли данные в clone
//
// alert( user.name ); // по-прежнему "Вася"
///Умножаем числа///
// var menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
//
// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }
//
// function multiplyNumeric(obj){
//   for(var key in obj){
//
//     if(isNumeric(obj[key])) {
//       obj[key] *= 2;
//     }
//   }
// }
//
// multiplyNumeric(menu);
//
//
// alert( ' menu width = ' + menu.width + ' height = ' + menu.height + ' title = ' + menu.title );
///вывод зарплаты///
// var salaries = {
// 	'Вася': 100,
// 	'Петя': 300,
// 	'Даша': 250
// };
//
//
// var max = 0;
// var maxName ='';
//
// for (var name in salaries) {
//   if (max < salaries[name]) {
//     max = salaries[name];
//     maxName = name;
//   }
// }
//
// alert( maxName || 'нет сотрудников);
///Сумма зарплат в массиве///
// var salaries = {
//   'Вася' : 100,
//   'Петя' : 300,
//   'Даша' : 250
// };
//
// var sum = 0;
//
// for (var name in salaries) {
//   sum += salaries[name];
// }
//
// alert( sum );
///Наличие чего-либо в цикле///
// var shedule = {};
//
// function isEmpty(obj) {
//   for (var key in obj) {
//     return false;
//   }
//     return true;
//   }
//
//
// alert( isEmpty(shedule) );
//
// shedule['8:30'] = 'подъем';
//
// alert( isEmpty(shedule) );
// var codes = {
//   '+7': 'Россия',
//   '+38': 'Украина',
//   '+1': 'США',
// };
//
//
// for (var key in codes) {
//   var value = codes[key];
//   key = +key;
//
//   alert( key + ':' + value);
// }
///Количество элементов в массиве///
// var menu = {
//   width: 300,
//   height: 200,
//   title: 'Menu'
// };
//
// var counter = 0;
// for(var key in menu) {
//   counter++;
// }
//
// alert('Всего свойств: ' + counter);
// var menu = {
//   width: 300,
//   height: 200,
//   title: "Menu"
// };
//
// for (var key in menu) {
//   // этот код будет вызван для каждого свойства объекта
//   // ..и выведет имя свойства и его значение
//
//   alert( "Ключ: " + key + " значение: " + menu[key] );
// }
///Ассоциативный массив///
// var user = {};
//
// user.key =  'Вася';
// user.surname = 'Петров';
//
// user.name = 'Сергей';
//
// delete user.name;
///Oбрезаем долляр и переводим стринг в число///
// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }
//
// alert(extractCurrencyValue('$120'));
///Oбрезаем лишнее///
// function truncate(str, maxlength){
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength - 3) + '...';
//     //итоговая длина = maxlength
//   }
//   return str;
// }
//
// alert( truncate('Вот, что мне хотелось бы сказать на эту тему: ', 20));
// alert( truncate('Всем привет!', 20));
///check Spam///
// function checkSpam(str) {
//   var lowerStr = str.toLowerCase();
//
//   return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx')); // !! - преобразовываем к логическому типу
//   // ~str.indexOf - если найдено
// }
//
// alert( checkSpam ('buy ViAgRA now'));
// alert( checkSpam ('free xxxxx'));
// alert( checkSpam ('innocent rabbit'));
///Первая буква заглавная///
// function ucFirst(str) {
//
//   if (!str) return str;
//
//   var newStr = str[0].toUpperCase() + str.slice(1);
//   return newStr;
// }
//
// alert(ucFirst('ваня'));
///Поиск в строке///
// var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
// var target = "Иа"; // цель поиска
//
// var pos = 0;
// while (true) {
//   var foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;
//
//   alert( foundPos ); // нашли на этой позиции
//   pos = foundPos + 1; // продолжить поиск со следующей
// }
//Рандом от 5 до 10 - целым числом///
// function randomInteger(min, max) {
//   var rand = Math.random() * ((max + 1) - min) + min;
//   rand = Math.floor(rand);
//   return rand;
// }
//
// alert(randomInteger(5, 10));`
//Рандом от 5 до 10
// var min = 5,
// max = 10;
//
// alert( min + Math.random() * (max - min)); //Math.random возвращает число от 0 до 1
// Рандом от 0 до 10
// var max = 10;
//
// alert(Math.random() * max);
// function fibBinet(n) {
//   var phi = (1 + Math.sqrt(5)) / 2;
//   return Math.round(Math.pow(phi, n) / Math.sqrt(5));
// }
//
// alert(fibBinet(77));
// var price1 = 0.1, price2 = 0.2;
//
// alert(+(price1 + price2).toFixed(2) + '$'); // округляем до 2 десятых
// var a = +prompt('Введите первое число?', '');
// var b = +prompt('Введите второе число?', '');
//
// alert(a + b);
// var f = function factorial(n) {
// 	if (n != 1) {
// 		return n * factorial(n - 1) //
// 	} else {
// 		return 1;
// 	}
// }
//
// var g = f; // скопировали ссылку на функцию-факториал в g
// f = null;
//
// alert(g(5)); // 120, работает
//  Ошибка при выполнении, функция обращается к старому имени f (которого уже нет)
// function f(n) {
// 	if (n != 1) {
// 		return n * f(n - 1);
// 	} else {
// 		return 1;
// 	}
// }
//
// var g = f;
// f = null;
//
// alert(g(5));
////Фибоначчи цикл////
// function fib(n) {
// 	var a = 1,
// 			b = 1;
//
// 	for (var i = 3; i <= n; i++) {
// 		var c = a + b;
// 		a = b;
// 		b = c;
// 	}
// 	return b;
// }
//
// alert(fib(7));
////Фибоначчи рекурсия////
// function fib(n) {
// 	if (n <= 1) {
// 		return n;
// 	} else {
// 		return fib(n - 1) + fib(n - 2);
// 	}
// }
//
// alert(fib(1));
// alert(fib(7));  //следующее число = сумме 2 предыдущих (7 = (8 - 1) + (8-2))
////Факториал////
// function factorial(n) {
//   if (n != 1) {
//    return n * factorial(n - 1);
//   } else {
//    return 1;
//   }
// }
//
// alert(factorial(5))
///Сумма чисел арифметическая прогрессия///
// function sumTo (n) {
//   return n * (n + 1) / 2;
// }
//
// alert( sumTo(10) );
////Сумма чисел рекурсия///
// function sumTo(n) {
//   if (n == 1) {
//     return 1;
//   } else {
//     return n + sumTo(n - 1);
//   }
// }
//
//
// alert (sumTo(10));
////Сумма чисел цикл////
// function sumTo(n) {
//   var sum = 0;
//
//   for (var i = 1; i <= n; i++) {
//     sum += i;
//   }
//
//   return sum;
// }
//
// alert(sumTo(10));
// //Число в степень цикл//
// function pow(x, n) {
// 	var result = x;
// 	for (var i = 1; i < n; i++) {
// 		result *= x; //1) 2 * 2 = 4 => 2) result = 4 * 2 => 3) result = 8 * 2 = 16;
// 	}
// 	return result;
// }
//
//  alert(pow(2, 3));
////Рекурсия////
// function pow (x, n) {
//   if (n != 1) {
//     return x * pow(x, n - 1)
//   } else {
//     return x;
//   }
// }
//
// alert ( pow(2,3) );
/////Yes/No/////
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
//
// function showOk() {
//   alert ('Вы согласились.');
// }
//
// function showCancel() {
//   alert('Вы отменили выполнение.');
// }
//
// //использование
// ask('Вы согласны?', showOk, showCancel);
/////Function Expression//////
// var sayHi = function(name){
//   alert('Привет, ' + name)
// }
//
// sayHi('Вася');
//
/////Function Declaration/////
// function sayHi(name) {
//   alert('Привет, ' + name);
// }
//
// sayHi('Вася');
/////Число в степень/////
// function pow(x, n) {
//   var result = x;
//
//   for (var i = 1; i < n; i++) {
//     result *= x;
//   }
//
//   return result;
// }
//
// var x = prompt('x?', '');
// var n = prompt('n?', '');
//
// if (n <= 1) {
//   alert('Степень ' + n + 'не поддерживается');
// } else {
//   alert(pow (x, n) );
// }
/////МИНИМАЛЬНОЕ ЧИСЛО///////
// function minAB(a,b){
//   if (a < b){
//     return a;
//   } else {
//     return b;
//   }
// }
//
// function minAB(a,b) {
//   return a < b ? a : b;
// }
////ПРОВЕРКА ВОЗРАСТА//////
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
//
// var age = prompt('Ваш возраст?');
//
// if (checkAge(age)) {
//   alert('Доступ разрешен');
// } else {
//   alert ('В доступе отказано');
// }
////// КВАДРАТНОЕ УРАВНЕНИЕ//////
// function calcD(a,b,c) {
//   return b*b - 4*a*c;
// }
//
// var test = calcD(-4,2,1);
// alert(test);
//////ДЕКОР ТЕКСТА//////
// function showMessage(from, text) { // параметры from, text
//
//   from = "** " + from + " **"; // здесь может быть сложный код оформления
//
//   alert(from + ': ' + text);
// }
//
// showMessage('Паша', 'Привет!');
// showMessage('Маша', 'Как дела?');
// var a = +prompt('a?', '');
//
// switch (a) {
//   case 0:
//     alert (0);
//       break;
//
//   case 1:
//     alert(1);
//       break;
//
//   case 2:
//   case 3:
//     alert('2,3');
//       break;
// }
// if (browser == 'IE') {
//   alert('U vas IE!');
// } else if (browser == 'Chrome'
//         || browser == 'Firefox'
//         || browser == 'Safari'
//         || browser == 'Opera') {
//             alert ('Da, mi ih podderzhivaem');
// } else {
//   alert ('Мы надеемся, что и в вашем браузере все ок!');
// }
// var arg = prompt ('Введите argument?')
// switch(arg) {
//   case '0':
//   case '1':
//     alert ('Один или ноль');
//
//   case '2':
//     alert('Два');
//   break;
//
//   case '3':
//     alert('Никогда не выполнится');
//
//   default:
//     alert('Неизвестное значение: ' + arg)
// }
// nextSTEP:
// 	for (var i = 2; i <= 10; i++) { //2//
//
//   	for (var j = 2; j < i; j++) { //2//
// 			if (i % j == 0) continue nextSTEP;
// 		}
//
//     alert(i);
// 	}
/////// ВВОД ЧИСЛА БОЛЬШЕ, ЧЕМ 100 /////////
// var num;
//
// do{
//   num = prompt ('Введите число больше 100', 0);
// } while (num <= 100 && num != null)
/////// СЛОЖЕНИЕ ЧИСЕЛ /////////
// var sum = 0;
//
// while (true) {
//
//   var value = +prompt("Введите число", '');
//
//   if (!value) break; // (*)
//
//   sum += value;
//
// }
// alert( 'Сумма: ' + sum );
/////// FOR цикл /////////
// for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }
/////// WHILE цикл /////////
// var i = 0;
// while (i < 3) {
//   alert( "номер " + i + "!" );
//   i++;
// }
/////// ВЫВОД ТОЛЬКО ЧЕТНЫХ ЧИСЕЛ /////////
// for (var i = 2; i <= 10; i++){
//   if(i % 2 == 0){
//     alert (i);
//   }
// }
///////// ПРОВЕРКА ПОЛЬЗОВАТЕЛЯ ////////////
// var username = prompt('Кто пришел?');
//
// if (username == 'Admin') {
// 	var pass = prompt('Пароль?');
//
// 	if (pass == "Насрал Король") {
// 		alert('Добро пожаловать!');
// 	} else if (pass == '') {
// 		alert('Вход отменен');
// 	} else {
// 		alert('Пароль неверен, сукин ты сын');
// 	}
// } else if (username == '') {
// 	alert('Вход отменен');
// } else {
// 	alert('Я вас не знаю');
// }
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bmRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmdW5jdGlvbiAqaW5maW5pdGVOdW1iZXJzKCkge1xuLy8gICAgIHZhciBuID0gMTtcbi8vICAgICB3aGlsZSAodHJ1ZSkge1xuLy8gICAgICAgICB5aWVsZCBuKys7XG4vLyAgICAgfVxuLy8gfVxuLy9cbi8vIHZhciBudW1iZXJzID0gaW5maW5pdGVOdW1iZXJzKCk7IC8vINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC/0LXRgNC10LHQuNGA0LDQtdC80YvQuSDQvtCx0YrQtdC60YJcbi8vXG4vLyBjb25zb2xlLmxvZyhudW1iZXJzLm5leHQoKSk7IC8vIHsgdmFsdWU6IDEsIGRvbmU6IGZhbHNlIH1cbi8vIGNvbnNvbGUubG9nKG51bWJlcnMubmV4dCgpKTsgLy8geyB2YWx1ZTogMiwgZG9uZTogZmFsc2UgfVxuLy8gY29uc29sZS5sb2cobnVtYmVycy5uZXh0KCkpOyAvLyB7IHZhbHVlOiAzLCBkb25lOiBmYWxzZSB9XG4vLyBsZXQgbmlja25hbWVzID0gWydkaScsICdib28nLCAncHVua2V5ZSddO1xuLy8gLy8gbmlja25hbWVzLnNpemUgPSAzO1xuLy8gZm9yIChsZXQgbmlja25hbWUgb2Ygbmlja25hbWVzKSB7XG4vLyAgICAgY29uc29sZS5sb2cobmlja25hbWUpO1xuLy8gfVxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihpZCkge1xuLy8gICBsZXQgcmVzcG9uY2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLyR7aWR9YCk7XG4vLyAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uY2UuanNvbigpO1xuLy9cbi8vICAgcmV0dXJuIGRhdGE7XG4vL1xuLy8gfVxuLy9cbi8vIGFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4vLyAgIGxldCB1c2VyID0gYXdhaXQgZ2V0VXNlcigyKTtcbi8vICAgY29uc29sZS5sb2codXNlcik7XG4vLyB9XG4vL1xuLy8gbWFpbigpO1xuLy8gLy8g0LPQtdC90LXRgNCw0YLQvtGAINC00LvRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0Lgg0L/QvtC60LDQt9CwINCw0LLQsNGC0LDRgNCwXG4vLyAvLyDQvtC9IHlpZWxkJ9C40YIg0L/RgNC+0LzQuNGB0Ytcbi8vIGZ1bmN0aW9uKiBzaG93VXNlckF2YXRhcigpIHtcbi8vXG4vLyAgIGxldCB1c2VyRmV0Y2ggPSB5aWVsZCBmZXRjaCgnL2FydGljbGUvZ2VuZXJhdG9yL3VzZXIuanNvbicpO1xuLy8gICBsZXQgdXNlckluZm8gPSB5aWVsZCB1c2VyRmV0Y2guanNvbigpO1xuLy9cbi8vICAgbGV0IGdpdGh1YkZldGNoID0geWllbGQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VySW5mby5uYW1lfWApO1xuLy8gICBsZXQgZ2l0aHViVXNlckluZm8gPSB5aWVsZCBnaXRodWJGZXRjaC5qc29uKCk7XG4vL1xuLy8gICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4vLyAgIGltZy5zcmMgPSBnaXRodWJVc2VySW5mby5hdmF0YXJfdXJsO1xuLy8gICBpbWcuY2xhc3NOYW1lID0gXCJwcm9taXNlLWF2YXRhci1leGFtcGxlXCI7XG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKTtcbi8vXG4vLyAgIHlpZWxkIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMDAwKSk7XG4vL1xuLy8gICBpbWcucmVtb3ZlKCk7XG4vL1xuLy8gICByZXR1cm4gaW1nLnNyYztcbi8vIH1cbi8vXG4vLyAvLyDQstGB0L/QvtC80L7Qs9Cw0YLQtdC70YzQvdCw0Y8g0YTRg9C90LrRhtC40Y8t0YfQtdGA0L3QvtGA0LDQsdC+0YfQuNC5XG4vLyAvLyDQtNC70Y8g0LLRi9C/0L7Qu9C90LXQvdC40Y8g0L/RgNC+0LzQuNGB0L7QsiDQuNC3IGdlbmVyYXRvclxuLy8gZnVuY3Rpb24gZXhlY3V0ZShnZW5lcmF0b3IsIHlpZWxkVmFsdWUpIHtcbi8vXG4vLyAgIGxldCBuZXh0ID0gZ2VuZXJhdG9yLm5leHQoeWllbGRWYWx1ZSk7XG4vL1xuLy8gICBpZiAoIW5leHQuZG9uZSkge1xuLy8gICAgIG5leHQudmFsdWUudGhlbihcbi8vICAgICAgIHJlc3VsdCA9PiBleGVjdXRlKGdlbmVyYXRvciwgcmVzdWx0KSxcbi8vICAgICAgIGVyciA9PiBnZW5lcmF0b3IudGhyb3coZXJyKVxuLy8gICAgICk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgLy8g0L7QsdGA0LDQsdC+0YLQsNC10Lwg0YDQtdC30YPQu9GM0YLQsNGCIHJldHVybiDQuNC3INCz0LXQvdC10YDQsNGC0L7RgNCwXG4vLyAgICAgLy8g0L7QsdGL0YfQvdC+INC30LTQtdGB0Ywg0LLRi9C30L7QsiBjYWxsYmFjayDQuNC70Lgg0YfRgtC+LdGC0L4g0LIg0Y3RgtC+0Lwg0LTRg9GF0LVcbi8vICAgICBhbGVydChuZXh0LnZhbHVlKTtcbi8vICAgfVxuLy9cbi8vIH1cbi8vXG4vLyBleGVjdXRlKCBzaG93VXNlckF2YXRhcigpICk7XG4vLyBmdW5jdGlvbiogZ2VuKCkge1xuLy8gICBsZXQgYXNrMSA9IHlpZWxkIFwiMiArIDI/XCI7XG4vL1xuLy8gICBhbGVydChhc2sxKTsgLy8gNFxuLy9cbi8vICAgbGV0IGFzazIgPSB5aWVsZCBcIjMgKiAzP1wiXG4vL1xuLy8gICBhbGVydChhc2syKTsgLy8gOVxuLy8gfVxuLy9cbi8vIGxldCBnZW5lcmF0b3IgPSBnZW4oKTtcbi8vXG4vLyBhbGVydCggZ2VuZXJhdG9yLm5leHQoKS52YWx1ZSApOyAvLyBcIjIgKyAyP1wiXG4vL1xuLy8gYWxlcnQoIGdlbmVyYXRvci5uZXh0KDQpLnZhbHVlICk7IC8vIFwiMyAqIDM/XCJcbi8vXG4vLyBhbGVydCggZ2VuZXJhdG9yLm5leHQoOSkuZG9uZSApOyAvLyB0cnVlXG4vLyBmdW5jdGlvbiogZ2VuZXJhdGVTZXF1ZW5jZShzdGFydCwgZW5kKSB7XG4vLyAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykgeWllbGQgaTtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiogZ2VuZXJhdGVBbHBoYU51bSgpIHtcbi8vXG4vLyAgIC8vIDAuLjlcbi8vICAgeWllbGQqIGdlbmVyYXRlU2VxdWVuY2UoNDgsIDU3KTtcbi8vXG4vLyAgIC8vIEEuLlpcbi8vICAgeWllbGQqIGdlbmVyYXRlU2VxdWVuY2UoNjUsIDkwKTtcbi8vXG4vLyAgIC8vIGEuLnpcbi8vICAgeWllbGQqIGdlbmVyYXRlU2VxdWVuY2UoOTcsIDEyMik7XG4vL1xuLy8gfVxuLy9cbi8vIGxldCBzdHIgPSAnJztcbi8vXG4vLyBmb3IobGV0IGNvZGUgb2YgZ2VuZXJhdGVBbHBoYU51bSgpKSB7XG4vLyAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuLy8gfVxuLy9cbi8vIGFsZXJ0KHN0cik7IC8vIDAuLjlBLi5aYS4uelxuLy8gbGV0IGNoYWluID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4vL1xuLy8gbGV0IHJlc3VsdHMgPSBbXTtcbi8vXG4vLyAvLyDQsiDRhtC40LrQu9C1INC00L7QsdCw0LLQu9GP0LXQvCDQt9Cw0LTQsNGH0Lgg0LIg0YbQtdC/0L7Rh9C60YNcbi8vIHVybHMuZm9yRWFjaChmdW5jdGlvbih1cmwpIHtcbi8vICAgY2hhaW4gPSBjaGFpblxuLy8gICAgIC50aGVuKCgpID0+IGh0dHBHZXQodXJsKSlcbi8vICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4vLyAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbi8vICAgICB9KTtcbi8vIH0pO1xuLy9cbi8vIC8vINCyINC60L7QvdGG0LUg4oCUINCy0YvQstC+0LTQuNC8INGA0LXQt9GD0LvRjNGC0LDRgtGLXG4vLyBjaGFpbi50aGVuKCgpID0+IHtcbi8vICAgYWxlcnQocmVzdWx0cyk7XG4vLyB9KTtcbi8vIGxldCBkZWxheSA9IChtcykgPT4ge1xuLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy8gICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xuLy8gICB9KTtcbi8vIH1cbi8vXG4vLyBkZWxheSgxMDAwKVxuLy8gICAudGhlbigoKSA9PiBhbGVydChcIkhlbGxvIVwiKSk7XG4vLyAvLyDQodC+0LfQtNCw0ZHRgtGB0Y8g0L7QsdGK0LXQutGCIHByb21pc2Vcbi8vIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy9cbi8vIFx0c2V0VGltZW91dCgoKSA9PiB7XG4vLyBcdFx0Ly8g0L/QtdGA0LXQstC10LTRkdGCINC/0YDQvtC80LjRgSDQsiDRgdC+0YHRgtC+0Y/QvdC40LUgZnVsZmlsbGVkINGBINGA0LXQt9GD0LvRjNGC0LDRgtC+0LwgXCJyZXN1bHRcIlxuLy8gXHRcdHJlc29sdmUoXCJyZXN1bHRcIik7XG4vLyBcdH0sIDEwMDApO1xuLy9cbi8vIH0pO1xuLy9cbi8vIC8vIHByb21pc2UudGhlbiDQvdCw0LLQtdGI0LjQstCw0LXRgiDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INC90LAg0YPRgdC/0LXRiNC90YvQuSDRgNC10LfRg9C70YzRgtCw0YIg0LjQu9C4INC+0YjQuNCx0LrRg1xuLy8gcHJvbWlzZVxuLy8gXHQudGhlbihcbi8vIFx0XHRyZXN1bHQgPT4ge1xuLy8gXHRcdFx0Ly8g0L/QtdGA0LLQsNGPINGE0YPQvdC60YbQuNGPLdC+0LHRgNCw0LHQvtGC0YfQuNC6IC0g0LfQsNC/0YPRgdGC0LjRgtGB0Y8g0L/RgNC4INCy0YvQt9C+0LLQtSByZXNvbHZlXG4vLyBcdFx0XHRhbGVydChcIkZ1bGZpbGxlZDogXCIgKyByZXN1bHQpOyAvLyByZXN1bHQgLSDQsNGA0LPRg9C80LXQvdGCIHJlc29sdmVcbi8vIFx0XHR9LFxuLy8gXHRcdGVycm9yID0+IHtcbi8vIFx0XHRcdC8vINCy0YLQvtGA0LDRjyDRhNGD0L3QutGG0LjRjyAtINC30LDQv9GD0YHRgtC40YLRgdGPINC/0YDQuCDQstGL0LfQvtCy0LUgcmVqZWN0XG4vLyBcdFx0XHRhbGVydChcIlJlamVjdGVkOiBcIiArIGVycm9yKTsgLy8gZXJyb3IgLSDQsNGA0LPRg9C80LXQvdGCIHJlamVjdFxuLy8gXHRcdH1cbi8vIFx0KTtcbi8vIGZ1bmN0aW9uIHVuaXF1ZShhcnIpIHtcbi8vICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnIpKTtcbi8vIH1cbi8vXG4vLyBsZXQgdmFsdWVzID0gW1wiSGFyZVwiLCBcIktyaXNobmFcIiwgXCJIYXJlXCIsIFwiS3Jpc2huYVwiLFxuLy8gICBcIktyaXNobmFcIiwgXCJLcmlzaG5hXCIsIFwiSGFyZVwiLCBcIkhhcmVcIiwgXCI6LU9cIlxuLy8gXTtcbi8vXG4vLyBhbGVydCggdW5pcXVlKHZhbHVlcykgKTsgLy8gSGFyZSwgS3Jpc2huYSwgOi1PXG4vLyBmdW5jdGlvbiBhY2xlYW4oYXJyKSB7XG4vLyAgIGxldCBtYXAgPSBuZXcgTWFwKCk7XG4vL1xuLy8gICBmb3IgKGxldCB3b3JkIG9mIGFycikge1xuLy8gICAgIC8vIHNwbGl0IHRoZSB3b3JkIGJ5IGxldHRlcnMsIHNvcnQgdGhlbSBhbmQgam9pbiBiYWNrXG4vLyAgICAgbGV0IHNvcnRlZCA9IHdvcmQudG9Mb3dlckNhc2UoKS5zcGxpdCgnJykuc29ydCgpLmpvaW4oJycpOyAvLyAoKilcbi8vICAgICBtYXAuc2V0KHNvcnRlZCwgd29yZCk7XG4vLyAgIH1cbi8vXG4vLyAgIHJldHVybiBBcnJheS5mcm9tKG1hcC52YWx1ZXMoKSk7XG4vLyB9XG4vL1xuLy9cbi8vIGxldCBhcnIgPSBbXCJuYXBcIiwgXCJ0ZWFjaGVyc1wiLCBcImNoZWF0ZXJzXCIsIFwiUEFOXCIsIFwiZWFyXCIsIFwiZXJhXCIsIFwiaGVjdGFyZXNcIl07XG4vL1xuLy8gYWxlcnQoIGFjbGVhbihhcnIpICk7IC8vIFwibmFwLHRlYWNoZXJzLGVhclwiIG9yIFwiUEFOLGNoZWF0ZXJzLGVyYVwiXG4vLyBsZXQgbWFwID0gbmV3IE1hcCgpO1xuLy9cbi8vIG1hcC5zZXQoXCJuYW1lXCIsIFwiSm9oblwiKTtcbi8vXG4vLyBsZXQga2V5cyA9IEFycmF5LmZyb20obWFwLmtleXMoKSk7XG4vL1xuLy8ga2V5cy5wdXNoKFwibW9yZVwiKTtcbi8vXG4vLyBhbGVydChrZXlzKTsgLy8gbmFtZSwgbW9yZVxuLy8gbGV0IG1lc3NhZ2VzID0gW1xuLy8gICAgIHt0ZXh0OiBcIkhlbGxvXCIsIGZyb206IFwiSm9oblwifSxcbi8vICAgICB7dGV4dDogXCJIb3cgZ29lcz9cIiwgZnJvbTogXCJKb2huXCJ9LFxuLy8gICAgIHt0ZXh0OiBcIlNlZSB5b3Ugc29vblwiLCBmcm9tOiBcIkFsaWNlXCJ9XG4vLyBdO1xuLy9cbi8vIGxldCByZWFkTWVzc2FnZXMgPSBuZXcgV2Vha1NldCgpO1xuLy9cbi8vIC8vIHR3byBtZXNzYWdlcyBoYXZlIGJlZW4gcmVhZFxuLy8gcmVhZE1lc3NhZ2VzLmFkZChtZXNzYWdlc1swXSk7XG4vLyByZWFkTWVzc2FnZXMuYWRkKG1lc3NhZ2VzWzFdKTtcbi8vIC8vIHJlYWRNZXNzYWdlcyBoYXMgMiBlbGVtZW50c1xuLy9cbi8vIC8vIC4uLmxldCdzIHJlYWQgdGhlIGZpcnN0IG1lc3NhZ2UgYWdhaW4hXG4vLyByZWFkTWVzc2FnZXMuYWRkKG1lc3NhZ2VzWzBdKTtcbi8vIC8vIHJlYWRNZXNzYWdlcyBzdGlsbCBoYXMgMiB1bmlxdWUgZWxlbWVudHNcbi8vXG4vLyAvLyBhbnN3ZXI6IHdhcyB0aGUgbWVzc2FnZVswXSByZWFkP1xuLy8gYWxlcnQoXCJSZWFkIG1lc3NhZ2UgMDogXCIgKyByZWFkTWVzc2FnZXMuaGFzKG1lc3NhZ2VzWzBdKSk7IC8vIHRydWVcbi8vXG4vLyBtZXNzYWdlcy5zaGlmdCgpO1xuLy8gLy8gbm93IHJlYWRNZXNzYWdlcyBoYXMgMSBlbGVtZW50ICh0ZWNobmljYWxseSBtZW1vcnkgbWF5IGJlIGNsZWFuZWQgbGF0ZXIpXG4vLyBsZXQgbWVzc2FnZXMgPSBbXG4vLyAgICAge3RleHQ6IFwiSGVsbG9cIiwgZnJvbTogXCJKb2huXCJ9LFxuLy8gICAgIHt0ZXh0OiBcIkhvdyBnb2VzP1wiLCBmcm9tOiBcIkpvaG5cIn0sXG4vLyAgICAge3RleHQ6IFwiU2VlIHlvdSBzb29uXCIsIGZyb206IFwiQWxpY2VcIn1cbi8vIF07XG4vL1xuLy8gbGV0IHJlYWRNYXAgPSBuZXcgV2Vha01hcCgpO1xuLy9cbi8vIHJlYWRNYXAuc2V0KG1lc3NhZ2VzWzBdLCBuZXcgRGF0ZSgyMDE3LCAxLCAxKSk7XG4vLyBjb25zb2xlLmxvZyhyZWFkTWFwLmdldChtZXNzYWdlc1swXSkpO1xuLy8vLy8vLy8vLy8vQXJyYXkuZnJvbShvYmpbLCBtYXBGbiwgdGhpc0FyZ10pLy8vLy8vLy8vLy8vL1xuLy8gbGV0IGFycmF5TGlrZSA9IHtcbi8vICAgMDogXCJIZWxsb1wiLFxuLy8gICAxOiBcIldvcmxkXCIsXG4vLyAgIDI6IDEsXG4vLyAgIGxlbmd0aDogM1xuLy8gfTtcbi8vXG4vLyBsZXQgYXJyID0gQXJyYXkuZnJvbShhcnJheUxpa2UpOyAvLyAoKilcbi8vIGNvbnNvbGUubG9nKGFycik7XG4vL0FycmF5LmZyb20ob2JqWywgbWFwRm4sIHRoaXNBcmddKSBtYWtlcyBhIHJlYWwgQXJyYXkgb2YgYW4gaXRlcmFibGUgb3Jcbi8vYXJyYXktbGlrZSBvYmosIGFuZCB3ZSBjYW4gdGhlbiB1c2UgYXJyYXkgbWV0aG9kcyBvbiBpdC4gVFxuLy9oZSBvcHRpb25hbCBhcmd1bWVudHMgbWFwRm4gYW5kIHRoaXNBcmcgYWxsb3cgdXMgdG8gYXBwbHkgYSBmdW5jdGlvbiB0byBlYWNoIGl0ZW0uXG4vLyAvLyDRgtC10LrRg9GJ0LjQtSDQsNC60YLQuNCy0L3Ri9C1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQuFxuLy8gbGV0IGFjdGl2ZVVzZXJzID0gW1xuLy8gICB7bmFtZTogXCLQktCw0YHRj1wifSxcbi8vICAge25hbWU6IFwi0J/QtdGC0Y9cIn0sXG4vLyAgIHtuYW1lOiBcItCc0LDRiNCwXCJ9XG4vLyBdO1xuLy9cbi8vIC8vINCy0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90LDRjyDQuNC90YTQvtGA0LzQsNGG0LjRjyDQviDQvdC40YUsXG4vLyAvLyDQutC+0YLQvtGA0LDRjyDQvdCw0L/RgNGP0LzRg9GOINC90LUg0LLRhdC+0LTQuNGCINCyINC+0LHRitC10LrRgiDRjtC30LXRgNCwLFxuLy8gLy8g0Lgg0L/QvtGC0L7QvNGDINGF0YDQsNC90LjRgtGB0Y8g0L7RgtC00LXQu9GM0L3QvlxuLy8gbGV0IHdlYWtNYXAgPSBuZXcgV2Vha01hcCgpO1xuLy9cbi8vIHdlYWtNYXAuc2V0KGFjdGl2ZVVzZXJzWzBdLCAxKTtcbi8vIHdlYWtNYXAuc2V0KGFjdGl2ZVVzZXJzWzFdLCAyKTtcbi8vIHdlYWtNYXAuc2V0KGFjdGl2ZVVzZXJzWzJdLCAzKTtcbi8vIHdlYWtNYXAuc2V0KCdLYXR5YScsIDQpOyAvL9CR0YPQtNC10YIg0L7RiNC40LHQutCwIFR5cGVFcnJvcjogXCJLYXR5YVwiIGlzIG5vdCBhIG5vbi1udWxsIG9iamVjdFxuLy9cbi8vIGFsZXJ0KCB3ZWFrTWFwLmdldChhY3RpdmVVc2Vyc1swXSkgKTsgLy8gMVxuLy9cbi8vIGFjdGl2ZVVzZXJzLnNwbGljZSgwLCAxKTsgLy8g0JLQsNGB0Y8g0LHQvtC70LXQtSDQvdC1INCw0LrRgtC40LLQvdGL0Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMXG4vL1xuLy8gLy8gd2Vha01hcCDRgtC10L/QtdGA0Ywg0YHQvtC00LXRgNC20LjRgiDRgtC+0LvRjNC60L4gMiDRjdC70LXQvNC10L3RgtCwXG4vL1xuLy8gYWN0aXZlVXNlcnMuc3BsaWNlKDAsIDEpOyAvLyDQn9C10YLRjyDQsdC+0LvQtdC1INC90LUg0LDQutGC0LjQstC90YvQuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Yxcbi8vXG4vLyAvLyB3ZWFrTWFwINGC0LXQv9C10YDRjCDRgdC+0LTQtdGA0LbQuNGCINGC0L7Qu9GM0LrQviAxINGN0LvQtdC80LXQvdGCXG4vLyBsZXQgc2V0ID0gbmV3IFNldChbXCLQsNC/0LXQu9GM0YHQuNC90YtcIiwgXCLRj9Cx0LvQvtC60LhcIiwgXCLQsdCw0L3QsNC90YtcIl0pO1xuLy9cbi8vIC8vINGC0L4g0LbQtSwg0YfRgtC+OiBmb3IobGV0IHZhbHVlIG9mIHNldClcbi8vIC8vIGZvciAobGV0IHZhbHVlIG9mIHNldCkge1xuLy8gLy8gICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4vLyAvLyB9XG4vL1xuLy8gLy8gc2V0LmZvckVhY2goKHZhbHVlLCB2YWx1ZUFnYWluLCBzZXQpID0+IHtcbi8vIC8vICAgYWxlcnQodmFsdWUpOyAvLyDQsNC/0LXQu9GM0YHQuNC90YssINC30LDRgtC10Lwg0Y/QsdC70L7QutC4LCDQt9Cw0YLQtdC8INCx0LDQvdCw0L3Ri1xuLy8gLy8gfSk7XG4vLyBsZXQgc2V0ID0gbmV3IFNldCgpO1xuLy9cbi8vIGxldCB2YXN5YSA9IHtuYW1lOiBcItCS0LDRgdGPXCJ9O1xuLy8gbGV0IHBldHlhID0ge25hbWU6IFwi0J/QtdGC0Y9cIn07XG4vLyBsZXQgZGFzaGEgPSB7bmFtZTogXCLQlNCw0YjQsFwifTtcbi8vXG4vLyAvLyDQv9C+0YHQtdGJ0LXQvdC40Y8sINC90LXQutC+0YLQvtGA0YvQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Lgg0LfQsNGF0L7QtNGP0YIg0LzQvdC+0LPQviDRgNCw0Ldcbi8vIHNldC5hZGQodmFzeWEpO1xuLy8gc2V0LmFkZChwZXR5YSk7XG4vLyBzZXQuYWRkKGRhc2hhKTtcbi8vIHNldC5hZGQodmFzeWEpO1xuLy8gc2V0LmFkZChwZXR5YSk7XG4vL1xuLy8gLy8gc2V0INGB0L7RhdGA0LDQvdGP0LXRgiDRgtC+0LvRjNC60L4g0YPQvdC40LrQsNC70YzQvdGL0LUg0LfQvdCw0YfQtdC90LjRj1xuLy8gYWxlcnQoIHNldC5zaXplICk7IC8vIDNcbi8vXG4vLyBzZXQuZm9yRWFjaCggdXNlciA9PiBhbGVydCh1c2VyLm5hbWUgKSApOyAvLyDQktCw0YHRjywg0J/QtdGC0Y8sINCU0LDRiNCwXG4vLyBsZXQgcmVjaXBlTWFwID0gbmV3IE1hcChbXG4vLyAgIFsn0L7Qs9GD0YDRhtC+0LInLCAgICc1MDAg0LPRgCddLFxuLy8gICBbJ9C/0L7QvNC40LTQvtGA0L7QsicsICczNTAg0LPRgCddLFxuLy8gICBbJ9GB0LzQtdGC0LDQvdGLJywgICAnNTAg0LPRgCddXG4vLyBdKTtcbi8vXG4vLyAvLyDRhtC40LrQuyDQv9C+INC60LvRjtGH0LDQvFxuLy8gZm9yKGxldCBmcnVpdCBvZiByZWNpcGVNYXAua2V5cygpKSB7XG4vLyAgIGFsZXJ0KGZydWl0KTsgLy8g0L7Qs9GD0YDRhtC+0LIsINC/0L7QvNC40LTQvtGA0L7Qsiwg0YHQvNC10YLQsNC90Ytcbi8vIH1cbi8vXG4vLyAvLyDRhtC40LrQuyDQv9C+INC30L3QsNGH0LXQvdC40Y/QvFxuLy8gZm9yKGxldCBhbW91bnQgb2YgcmVjaXBlTWFwLnZhbHVlcygpKSB7XG4vLyAgIGFsZXJ0KGFtb3VudCk7IC8vIDUwMCDQs9GALCAzNTAg0LPRgCwgNTAg0LPRgFxuLy8gfVxuLy9cbi8vIC8vINGG0LjQutC7INC/0L4g0LfQsNC/0LjRgdGP0LwgW9C60LvRjtGHLNC30L3QsNGH0LXQvdC40LVdXG4vLyBmb3IobGV0IGVudHJ5IG9mIHJlY2lwZU1hcCkgeyAvLyDRgtC+INC20LUg0YfRgtC+INC4IHJlY2lwZU1hcC5lbnRyaWVzKClcbi8vICAgYWxlcnQoZW50cnkpOyAvLyDQvtCz0YPRgNGG0L7Qsiw1MDAg0LPRgCAsINC4INGCLtC0Liwg0LzQsNGB0YHQuNCy0Ysg0L/QviAyINC30L3QsNGH0LXQvdC40Y9cbi8vIH1cbi8vIGxldCBpc0FkbWluID0gU3ltYm9sKFwiaXNBZG1pblwiKTtcbi8vXG4vLyBsZXQgdXNlciA9IHtcbi8vICAgbmFtZTogXCLQktCw0YHRj1wiLFxuLy8gICBbaXNBZG1pbl06IHRydWUsXG4vLyAgIGlzQWRtaW46IGZhbHNlXG4vLyB9O1xuLy9cbi8vIGFsZXJ0KHVzZXJbaXNBZG1pbl0pOyAvLyB0cnVlXG4vLyBhbGVydCh1c2VyLmlzQWRtaW4pOyAvLyBmYWxzZVxuLy8gbGV0IHJhbmdlID0ge1xuLy8gICBmcm9tOiAxLFxuLy8gICB0bzogMTBcbi8vIH1cbi8vXG4vLyAvLyDRgdC00LXQu9Cw0LXQvCDQvtCx0YrQtdC60YIgcmFuZ2Ug0LjRgtC10YDQuNGA0YPQtdC80YvQvFxuLy8gcmFuZ2VbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuLy9cbi8vICAgbGV0IGN1cnJlbnQgPSB0aGlzLmZyb207XG4vLyAgIGxldCBsYXN0ID0gdGhpcy50bztcbi8vXG4vLyAgIC8vINC80LXRgtC+0LQg0LTQvtC70LbQtdC9INCy0LXRgNC90YPRgtGMINC+0LHRitC10LrRgiDRgSDQvNC10YLQvtC00L7QvCBuZXh0KClcbi8vICAgcmV0dXJuIHtcbi8vICAgICBuZXh0KCkge1xuLy8gICAgICAgaWYgKGN1cnJlbnQgPD0gbGFzdCkge1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgIGRvbmU6IGZhbHNlLFxuLy8gICAgICAgICAgIHZhbHVlOiBjdXJyZW50Kytcbi8vICAgICAgICAgfTtcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgZG9uZTogdHJ1ZVxuLy8gICAgICAgICB9O1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfTtcbi8vXG4vLyBmb3IgKGxldCBudW0gb2YgcmFuZ2UpIHtcbi8vICAgY29uc29sZS5sb2cobnVtKTsgLy8gMSwg0LfQsNGC0LXQvCAyLCAzLCA0LCA1XG4vLyB9XG4vLyBjb25zb2xlLmxvZyggTWF0aC5tYXgoLi4ucmFuZ2UpICk7XG4vLyBmdW5jdGlvbiBzaG93TWVudSh7dGl0bGU9XCLQl9Cw0LPQvtC70L7QstC+0LpcIiwgd2lkdGg6dz0xMDAsIGhlaWdodDpoPTIwMH0gPSB7fSkge1xuLy8gICBhbGVydCh0aXRsZSArICcgJyArIHcgKyAnICcgKyBoKTtcbi8vIH1cbi8vXG4vLyBzaG93TWVudSgpOyAvLyDQl9Cw0LPQvtC70L7QstC+0LogMTAwIDIwMFxuLy8gLy8vLy8vLy8vL1NQUkVBRCBGT1IgT0JKRUNUUy8vLy8vLy8vLy9cbi8vIGxldCBvcHRpb25zID0ge1xuLy8gICB0aXRsZTogXCLQnNC10L3RjlwiLFxuLy8gICB3aWR0aDogMTAwLFxuLy8gICBoZWlnaHQ6IDIwMFxuLy8gfTtcbi8vXG4vLyBsZXQge3RpdGxlLCAuLi5zaXplfSA9IG9wdGlvbnM7XG4vL1xuLy8gY29uc29sZS5sb2coc2l6ZSk7XG4vLyBzaXplID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDIwMH0gKNC+0YHRgtCw0YLQvtC6KVxuLy8gdmFyIGV2ZW50TWl4aW4gPSB7XG4vL1xuLy8gICAvKipcbi8vICAgICog0J/QvtC00L/QuNGB0LrQsCDQvdCwINGB0L7QsdGL0YLQuNC1XG4vLyAgICAqINCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1OlxuLy8gICAgKiAgbWVudS5vbignc2VsZWN0JywgZnVuY3Rpb24oaXRlbSkgeyAuLi4gfVxuLy8gICAgKi9cbi8vICAgb246IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuLy8gICAgIGlmICghdGhpcy5fZXZlbnRIYW5kbGVycykgdGhpcy5fZXZlbnRIYW5kbGVycyA9IHt9O1xuLy8gICAgIGlmICghdGhpcy5fZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdKSB7XG4vLyAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0gPSBbXTtcbi8vICAgICB9XG4vLyAgICAgdGhpcy5fZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdLnB1c2goaGFuZGxlcik7XG4vLyAgIH0sXG4vL1xuLy8gICAvKipcbi8vICAgICog0J/RgNC10LrRgNCw0YnQtdC90LjQtSDQv9C+0LTQv9C40YHQutC4XG4vLyAgICAqICBtZW51Lm9mZignc2VsZWN0JywgIGhhbmRsZXIpXG4vLyAgICAqL1xuLy8gICBvZmY6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuLy8gICAgIHZhciBoYW5kbGVycyA9IHRoaXMuX2V2ZW50SGFuZGxlcnMgJiYgdGhpcy5fZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdO1xuLy8gICAgIGlmICghaGFuZGxlcnMpIHJldHVybjtcbi8vICAgICBmb3IodmFyIGk9MDsgaTxoYW5kbGVycy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgaWYgKGhhbmRsZXJzW2ldID09IGhhbmRsZXIpIHtcbi8vICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGktLSwgMSk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9LFxuLy9cbi8vICAgLyoqXG4vLyAgICAqINCT0LXQvdC10YDQsNGG0LjRjyDRgdC+0LHRi9GC0LjRjyDRgSDQv9C10YDQtdC00LDRh9C10Lkg0LTQsNC90L3Ri9GFXG4vLyAgICAqICB0aGlzLnRyaWdnZXIoJ3NlbGVjdCcsIGl0ZW0pO1xuLy8gICAgKi9cbi8vICAgdHJpZ2dlcjogZnVuY3Rpb24oZXZlbnROYW1lIC8qLCAuLi4gKi8pIHtcbi8vXG4vLyAgICAgaWYgKCF0aGlzLl9ldmVudEhhbmRsZXJzIHx8ICF0aGlzLl9ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0pIHtcbi8vICAgICAgIHJldHVybjsgLy8g0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyINC00LvRjyDRgdC+0LHRi9GC0LjRjyDQvdC10YJcbi8vICAgICB9XG4vL1xuLy8gICAgIC8vINCy0YvQt9Cy0LDRgtGMINC+0LHRgNCw0LHQvtGC0YfQuNC60Lhcbi8vICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLl9ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV07XG4vLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgaGFuZGxlcnNbaV0uYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbi8vICAgICB9XG4vL1xuLy8gICB9XG4vLyB9O1xuLy9cbi8vIC8vINCa0LvQsNGB0YEgTWVudSDRgSDQv9GA0LjQvNC10YHRjNGOIGV2ZW50TWl4aW5cbi8vIGZ1bmN0aW9uIE1lbnUoKSB7XG4vLyAgIC8vIC4uLlxuLy8gfVxuLy9cbi8vIGZvcih2YXIga2V5IGluIGV2ZW50TWl4aW4pIHtcbi8vICAgTWVudS5wcm90b3R5cGVba2V5XSA9IGV2ZW50TWl4aW5ba2V5XTtcbi8vIH1cbi8vXG4vLyAvLyDQk9C10L3QtdGA0LjRgNGD0LXRgiDRgdC+0LHRi9GC0LjQtSBzZWxlY3Qg0L/RgNC4INCy0YvQsdC+0YDQtSDQt9C90LDRh9C10L3QuNGPXG4vLyBNZW51LnByb3RvdHlwZS5jaG9vc2UgPSBmdW5jdGlvbih2YWx1ZSkge1xuLy8gICB0aGlzLnRyaWdnZXIoXCJzZWxlY3RcIiwgdmFsdWUpO1xuLy8gfVxuLy9cbi8vIC8vINCh0L7Qt9C00LDQtNC40Lwg0LzQtdC90Y5cbi8vIHZhciBtZW51ID0gbmV3IE1lbnUoKTtcbi8vXG4vLyAvLyDQn9GA0Lgg0L3QsNGB0YLRg9C/0LvQtdC90LjQuCDRgdC+0LHRi9GC0LjRjyBzZWxlY3Qg0LLRi9C30LLQsNGC0Ywg0Y3RgtGDINGE0YPQvdC60YbQuNGOXG4vLyBtZW51Lm9uKFwic2VsZWN0XCIsIGZ1bmN0aW9uKHZhbHVlKSB7XG4vLyAgIGFsZXJ0KFwi0JLRi9Cx0YDQsNC90L4g0LfQvdCw0YfQtdC90LjQtSBcIiArIHZhbHVlKTtcbi8vIH0pO1xuLy9cbi8vIC8vINCX0LDQv9GD0YHQutCw0LXQvCDQstGL0LHQvtGAICjRgdC+0LHRi9GC0LjQtSBzZWxlY3Qg0LLRi9C30L7QstC10YIg0L7QsdGA0LDQsdC+0YLRh9C40LrQuClcbi8vIG1lbnUuY2hvb3NlKFwiMTIzXCIpO1xuLy8gZnVuY3Rpb24gbWFrZVRpbWVyKHdhaXQpIHtcbi8vICAgbGV0IGNvdW50ZXIgPSAwO1xuLy8gICBzZXRJbnRlcnZhbCh0aW1lSXQsIHdhaXQpO1xuLy8gICBmdW5jdGlvbiB0aW1lSXQoKSB7XG4vLyAgICAgY29uc29sZS5sb2coY291bnRlcisrKTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIG1ha2VUaW1lcigxMDAwKTtcbi8vIC8vINC/0YDQuNC80LXRgdGMXG4vLyB2YXIgc2F5SGlNaXhpbiA9IHtcbi8vICAgc2F5SGk6IGZ1bmN0aW9uKCkge1xuLy8gICAgIGFsZXJ0KFwi0J/RgNC40LLQtdGCIFwiICsgdGhpcy5uYW1lKTtcbi8vICAgfSxcbi8vICAgc2F5QnllOiBmdW5jdGlvbigpIHtcbi8vICAgICBhbGVydChcItCf0L7QutCwIFwiICsgdGhpcy5uYW1lKTtcbi8vICAgfVxuLy8gfTtcbi8vXG4vLyAvLyDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtTpcbi8vIGZ1bmN0aW9uIFVzZXIobmFtZSkge1xuLy8gICB0aGlzLm5hbWUgPSBuYW1lO1xuLy8gfVxuLy9cbi8vIC8vINC/0LXRgNC10LTQsNGC0Ywg0LzQtdGC0L7QtNGLINC/0YDQuNC80LXRgdC4XG4vLyBmb3IodmFyIGtleSBpbiBzYXlIaU1peGluKSBVc2VyLnByb3RvdHlwZVtrZXldID0gc2F5SGlNaXhpbltrZXldO1xuLy9cbi8vIC8vIFVzZXIgXCLRg9C80LXQtdGCXCIgc2F5SGlcbi8vIG5ldyBVc2VyKFwi0JLQsNGB0Y9cIikuc2F5SGkoKTsgLy8g0J/RgNC40LLQtdGCINCS0LDRgdGPXG4vLyBuZXcgVXNlcihcItCS0LDRgdGPXCIpLnNheUJ5ZSgpOyAvLyDQn9C+0LrQsCDQktCw0YHRj1xuLy8gZnVuY3Rpb24gRm9ybWF0RXJyb3IobWVzc2FnZSkge1xuLy8gICB0aGlzLm5hbWUgPSBcIkZvcm1hdEVycm9yXCI7XG4vL1xuLy8gICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuLy9cbi8vICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4vLyAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgdGhpcy5zdGFjayA9IChuZXcgRXJyb3IoKSkuc3RhY2s7XG4vLyAgIH1cbi8vXG4vLyB9XG4vL1xuLy8gRm9ybWF0RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTeW50YXhFcnJvci5wcm90b3R5cGUpO1xuLy8gRm9ybWF0RXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRm9ybWF0RXJyb3I7XG4vL1xuLy8gLy8g0JjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LVcbi8vXG4vLyB2YXIgZXJyID0gbmV3IEZvcm1hdEVycm9yKFwi0L7RiNC40LHQutCwINGE0L7RgNC80LDRgtC40YDQvtCy0LDQvdC40Y9cIik7XG4vL1xuLy8gYWxlcnQoIGVyci5tZXNzYWdlICk7IC8vINC+0YjQuNCx0LrQsCDRhNC+0YDQvNCw0YLQuNGA0L7QstCw0L3QuNGPXG4vLyBhbGVydCggZXJyLm5hbWUgKTsgLy8gRm9ybWF0RXJyb3Jcbi8vIGFsZXJ0KCBlcnIuc3RhY2sgKTsgLy8g0YHRgtC10Log0L3QsCDQvNC+0LzQtdC90YIg0LPQtdC90LXRgNCw0YbQuNC4INC+0YjQuNCx0LrQuFxuLy9cbi8vIGFsZXJ0KCBlcnIgaW5zdGFuY2VvZiBTeW50YXhFcnJvciApOyAvLyB0cnVlXG4vLyBmdW5jdGlvbiBBbmltYWwobmFtZSkge1xuLy8gICB0aGlzLm5hbWUgPSBuYW1lO1xuLy8gfVxuLy9cbi8vIEFuaW1hbC5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uKCkge1xuLy8gICBhbGVydCggXCLRhdC+0LTQuNGCIFwiICsgdGhpcy5uYW1lICk7XG4vLyB9O1xuLy9cbi8vIGZ1bmN0aW9uIFJhYmJpdChuYW1lKSB7XG4vLyAgIHRoaXMubmFtZSA9IG5hbWU7XG4vLyB9XG4vL1xuLy8gUmFiYml0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQW5pbWFsLnByb3RvdHlwZSk7XG4vLyAvLyBSYWJiaXQucHJvdG90eXBlID0gQW5pbWFsOyA/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/XG4vL1xuLy8gUmFiYml0LnByb3RvdHlwZS53YWxrID0gZnVuY3Rpb24oKSB7XG4vLyAgIGFsZXJ0KCBcItC/0YDRi9Cz0LDQtdGCISDQuCDRhdC+0LTQuNGCOiBcIiArIHRoaXMubmFtZSApO1xuLy8gfTtcbi8vXG4vLyBsZXQgYW5pbWFsID0gbmV3IEFuaW1hbCgnS3JvbCcpO1xuLy8gYW5pbWFsLndhbGsoKTtcbi8vIGZ1bmN0aW9uIEEoKSB7fVxuLy9cbi8vIGZ1bmN0aW9uIEIoKSB7fVxuLy9cbi8vIEEucHJvdG90eXBlID0gQi5wcm90b3R5cGU7XG4vL1xuLy8gdmFyIGIgPSBuZXcgQigpO1xuLy8gdmFyIGEgPSBuZXcgQSgpO1xuLy9cbi8vIGFsZXJ0KCBhIGluc3RhbmNlb2YgQiApOyAvLyB0cnVlXG4vLyBSYWJiaXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBbmltYWwucHJvdG90eXBlKTtcbi8vUmFiYml0LnByb3RvdHlwZSDRg9C60LDQt9GL0LLQsNC10YIg0L3QsCDQvdC+0LLRi9C5INC+0LHRitC10LrRgiDRgSDQv9GA0L7RgtC+0YLQuNC/0L7QvCAoQW5pbWFsLnByb3RvdHlwZSlcbi8vcmFiYml0Ll9fcHJvdG9fXyA9IG9iamVjdChBbmltYWwucHJvdG90eXBlKVxuLy9cbi8vIGZ1bmN0aW9uIEhhbXN0ZXIoKSB7fVxuLy9cbi8vIEhhbXN0ZXIucHJvdG90eXBlLmZvb2QgPSBbXTsgLy8g0L/Rg9GB0YLQvtC5IFwi0LbQuNCy0L7RglwiXG4vL1xuLy8gSGFtc3Rlci5wcm90b3R5cGUuZm91bmQgPSBmdW5jdGlvbihzb21ldGhpbmcpIHtcbi8vICAgdGhpcy5mb29kLnB1c2goc29tZXRoaW5nKTtcbi8vIH07XG4vL1xuLy8gLy8g0KHQvtC30LTQsNGR0Lwg0LTQstGD0YUg0YXQvtC80Y/QutC+0LIg0Lgg0LrQvtGA0LzQuNC8INC/0LXRgNCy0L7Qs9C+XG4vLyB2YXIgc3BlZWR5ID0gbmV3IEhhbXN0ZXIoKTtcbi8vIHZhciBsYXp5ID0gbmV3IEhhbXN0ZXIoKTtcbi8vXG4vLyBzcGVlZHkuZm91bmQoXCLRj9Cx0LvQvtC60L5cIik7XG4vLyBzcGVlZHkuZm91bmQoXCLQvtGA0LXRhVwiKTtcbi8vXG4vLyBhbGVydCggc3BlZWR5LmZvb2QubGVuZ3RoICk7IC8vIDJcbi8vIGFsZXJ0KCBsYXp5LmZvb2QubGVuZ3RoICk7IC8vIDIgKCE/Pylcbi8vXG4vLyAvLyAxKdCY0L3RgtC10YDQv9GA0LXRgtCw0YLQvtGAINC40YnQtdGCINGB0LLQvtC50YHRgtCy0L4gZm91bmQg0LIgc3BlZWR5LiDQndC+IHNwZWVkeSDigJMg0L/Rg9GB0YLQvtC5INC+0LHRitC10LrRgiwg0YIu0LouXG4vLyAvLyBuZXcgSGFtc3RlciDQvdC40YfQtdCz0L4g0L3QtSDQtNC10LvQsNC10YIg0YEgdGhpcy5cbi8vIC8vIDIp0JjQvdGC0LXRgNC/0YDQtdGC0LDRgtC+0YAg0LjQtNGR0YIg0L/QviDRgdGB0YvQu9C60LUgc3BlZWR5Ll9fcHJvdG9fXyAoPT1IYW1zdGVyLnByb3RvdHlwZSkg0Lhcbi8vIC8v0L3QsNGF0L7QtNGP0YIg0YLQsNC8INC80LXRgtC+0LQgZm91bmQsINC30LDQv9GD0YHQutCw0LXRgiDQtdCz0L4uXG4vLyAvLyAzKdCX0L3QsNGH0LXQvdC40LUgdGhpcyDRg9GB0YLQsNC90LDQstC70LjQstCw0LXRgtGB0Y8g0LIg0L7QsdGK0LXQutGCINC/0LXRgNC10LQg0YLQvtGH0LrQvtC5LCDRgi7QtS4g0LIgc3BlZWR5LlxuLy8gLy8gNCnQlNC70Y8g0LLRi9C/0L7Qu9C90LXQvdC40Y8gdGhpcy5mb29kLnB1c2goKSDQvdGD0LbQvdC+INC90LDQudGC0Lgg0YHQstC+0LnRgdGC0LLQviB0aGlzLmZvb2QuXG4vLyAvL9Ce0L3QviDQvtGC0YHRg9GC0YHRgtCy0YPQtdGCINCyIHNwZWVkeSwg0L3QviDQtdGB0YLRjCDQsiBzcGVlZHkuX19wcm90b19fLlxuLy8gLy8gNSnQl9C90LDRh9C10L3QuNC1IFwi0Y/QsdC70L7QutC+XCIg0LTQvtCx0LDQstC70Y/QtdGC0YHRjyDQsiBzcGVlZHkuX19wcm90b19fLmZvb2QuXG4vLyAvL9GB0LLQvtC50YHRgtCy0L4gZm9vZCDQuNC30LzQtdC90Y/QtdGC0YHRjyDQsiDQv9GA0L7RgtC+0YLQuNC/0LUsINC60L7RgtC+0YDRi9C5INGP0LLQu9GP0LXRgtGB0Y8g0L7QsdGJ0LjQvCDQtNC70Y8g0LLRgdC10YUg0L7QsdGK0LXQutGC0L7Qsi3RhdC+0LzRj9C60L7Qsi5cbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0ZJWC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gZnVuY3Rpb24gSGFtc3RlcigpIHtcbi8vICAgdGhpcy5mb29kID0gW107XG4vLyB9XG4vL1xuLy8gSGFtc3Rlci5wcm90b3R5cGUuZm91bmQgPSBmdW5jdGlvbihzb21ldGhpbmcpIHtcbi8vICAgdGhpcy5mb29kLnB1c2goc29tZXRoaW5nKTtcbi8vIH07XG4vL1xuLy8gdmFyIHNwZWVkeSA9IG5ldyBIYW1zdGVyKCk7XG4vLyB2YXIgbGF6eSA9IG5ldyBIYW1zdGVyKCk7XG4vL1xuLy8gc3BlZWR5LmZvdW5kKFwi0Y/QsdC70L7QutC+XCIpO1xuLy8gc3BlZWR5LmZvdW5kKFwi0L7RgNC10YVcIik7XG4vL1xuLy8gYWxlcnQoc3BlZWR5LmZvb2QubGVuZ3RoKSAvLyAyXG4vLyBhbGVydChsYXp5LmZvb2QubGVuZ3RoKSAvLyAwKCEpXG4vLyAvL9CU0LvRjyDQuNGB0L/RgNCw0LLQu9C10L3QuNGPINC/0YDQvtCx0LvQtdC80Ysg0L3Rg9C20L3QviDQtNCw0YLRjCDQutCw0LbQtNC+0LzRgyDRhdC+0LzRj9C60YMg0YHQstC+0Lkg0LbQuNCy0L7Rgi5cbi8vIC8v0K3RgtC+INC80L7QttC90L4g0YHQtNC10LvQsNGC0YwsINC/0YDQuNGB0LLQvtC40LIg0LXQs9C+INCyINC60L7QvdGB0YLRgNGD0LrRgtC+0YDQtS5cbi8vIGZ1bmN0aW9uIENvZmZlZU1hY2hpbmUocG93ZXIpIHtcbi8vICAgdGhpcy5fcG93ZXIgPSBwb3dlcjtcbi8vICAgdGhpcy5fd2F0ZXJBbW91bnQgPSAwO1xuLy8gfVxuLy9cbi8vIENvZmZlZU1hY2hpbmUucHJvdG90eXBlLldBVEVSX0hFQVRfQ0FQQUNJVFkgPSA0MjAwO1xuLy9cbi8vIENvZmZlZU1hY2hpbmUucHJvdG90eXBlLl9nZXRUaW1lVG9Cb2lsID0gZnVuY3Rpb24oKSB7XG4vLyAgIHJldHVybiB0aGlzLl93YXRlckFtb3VudCAqIHRoaXMuV0FURVJfSEVBVF9DQVBBQ0lUWSAqIDgwIC8gdGhpcy5fcG93ZXI7XG4vLyB9XG4vL1xuLy8gQ29mZmVlTWFjaGluZS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24oKSB7XG4vLyAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4vLyAgICAgYWxlcnQoICfQmtC+0YTQtSDQs9C+0YLQvtCyIScgKTtcbi8vICAgfSwgdGhpcy5fZ2V0VGltZVRvQm9pbCgpKTtcbi8vIH07XG4vL1xuLy8gQ29mZmVlTWFjaGluZS5wcm90b3R5cGUuc2V0V2F0ZXJBbW91bnQgPSBmdW5jdGlvbihhbW91bnQpIHtcbi8vICAgdGhpcy5fd2F0ZXJBbW91bnQgPSBhbW91bnQ7XG4vLyB9O1xuLy9cbi8vIHZhciBjb2ZmZWVNYWNoaW5lID0gbmV3IENvZmZlZU1hY2hpbmUoMTAwMDApO1xuLy8gY29mZmVlTWFjaGluZS5zZXRXYXRlckFtb3VudCg1MCk7XG4vLyBjb2ZmZWVNYWNoaW5lLnJ1bigpO1xuLy8g0LrQvtC90YHRgtGA0YPQutGC0L7RgFxuLy8gZnVuY3Rpb24gQW5pbWFsKG5hbWUpIHtcbi8vICAgdGhpcy5uYW1lID0gbmFtZTtcbi8vICAgdGhpcy5zcGVlZCA9IDA7XG4vLyB9XG4vL1xuLy8gLy8g0LzQtdGC0L7QtNGLINCyINC/0YDQvtGC0L7RgtC40L/QtVxuLy8gQW5pbWFsLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbihzcGVlZCkge1xuLy8gICB0aGlzLnNwZWVkICs9IHNwZWVkO1xuLy8gICBhbGVydCggdGhpcy5uYW1lICsgJyDQsdC10LbQuNGCLCDRgdC60L7RgNC+0YHRgtGMICcgKyB0aGlzLnNwZWVkICk7XG4vLyB9O1xuLy9cbi8vIEFuaW1hbC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuLy8gICB0aGlzLnNwZWVkID0gMDtcbi8vICAgYWxlcnQoIHRoaXMubmFtZSArICcg0YHRgtC+0LjRgicgKTtcbi8vIH07XG4vL1xuLy8gdmFyIGFuaW1hbCA9IG5ldyBBbmltYWwoJ9CX0LLQtdGA0YwnKTtcbi8vXG4vLyBhbGVydCggYW5pbWFsLnNwZWVkICk7IC8vIDAsINGB0LLQvtC50YHRgtCy0L4g0LLQt9GP0YLQviDQuNC3INC/0YDQvtGC0L7RgtC40L/QsFxuLy8gYW5pbWFsLnJ1big1KTsgLy8g0JfQstC10YDRjCDQsdC10LbQuNGCLCDRgdC60L7RgNC+0YHRgtGMIDVcbi8vIGFuaW1hbC5ydW4oNSk7IC8vINCX0LLQtdGA0Ywg0LHQtdC20LjRgiwg0YHQutC+0YDQvtGB0YLRjCAxMFxuLy8gYW5pbWFsLnN0b3AoKTsgLy8g0JfQstC10YDRjCDRgdGC0L7QuNGCXG4vLyBjbGFzcyBSYWJiaXQge1xuLy8gICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4vLyAgICAgdGhpcy5uYW1lID0gbmFtZTtcbi8vICAgfVxuLy9cbi8vICAgc2F5SGkoKSB7XG4vLyAgICAgYWxlcnQodGhpcy5uYW1lKTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIGxldCByYWJiaXQgPSBuZXcgUmFiYml0KFwiUmFiYml0XCIpO1xuLy9cbi8vIHJhYmJpdC5zYXlIaSgpO1xuLy8gUmFiYml0LnByb3RvdHlwZS5zYXlIaSgpO1xuLy8gT2JqZWN0LmdldFByb3RvdHlwZU9mKHJhYmJpdCkuc2F5SGkoKTtcbi8vIHJhYmJpdC5fX3Byb3RvX18uc2F5SGkoKTtcbi8vIGZ1bmN0aW9uIE1hY2hpbmUocG93ZXIpIHtcbi8vICAgdGhpcy5fcG93ZXIgPSBwb3dlcjtcbi8vICAgdGhpcy5fZW5hYmxlZCA9IGZhbHNlO1xuLy9cbi8vICAgdmFyIHNlbGYgPSB0aGlzO1xuLy9cbi8vICAgdGhpcy5lbmFibGUgPSBmdW5jdGlvbigpIHtcbi8vICAgICBzZWxmLl9lbmFibGVkID0gdHJ1ZTtcbi8vICAgfTtcbi8vXG4vLyAgIHRoaXMuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIHNlbGYuX2VuYWJsZWQgPSBmYWxzZTtcbi8vICAgfTtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBGcmlkZ2UocG93ZXIpIHtcbi8vICAgLy8g0YPQvdCw0YHQu9C10LTQvtCy0LDRgtGMXG4vLyAgIE1hY2hpbmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbi8vXG4vLyAgIHZhciBmb29kID0gW107IC8vINC/0YDQuNCy0LDRgtC90L7QtSDRgdCy0L7QudGB0YLQstC+IGZvb2Rcbi8vXG4vLyAgIHRoaXMuYWRkRm9vZCA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIGlmICghdGhpcy5fZW5hYmxlZCkge1xuLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0KXQvtC70L7QtNC40LvRjNC90LjQuiDQstGL0LrQu9GO0YfQtdC9XCIpO1xuLy8gICAgIH1cbi8vICAgICBpZiAoZm9vZC5sZW5ndGggKyBhcmd1bWVudHMubGVuZ3RoID49IHRoaXMuX3Bvd2VyIC8gMTAwKSB7XG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQndC10LvRjNC30Y8g0LTQvtCx0LDQstC40YLRjCwg0L3QtSDRhdCy0LDRgtCw0LXRgiDQvNC+0YnQvdC+0YHRgtC4XCIpO1xuLy8gICAgIH1cbi8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgZm9vZC5wdXNoKGFyZ3VtZW50c1tpXSk7IC8vINC00L7QsdCw0LLQuNGC0Ywg0LLRgdGRINC40LcgYXJndW1lbnRzXG4vLyAgICAgfVxuLy9cbi8vICAgfTtcbi8vXG4vLyAgIHRoaXMuZ2V0Rm9vZCA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIC8vINC60L7Qv9C40YDRg9C10Lwg0LXQtNGDINCyINC90L7QstGL0Lkg0LzQsNGB0YHQuNCyLCDRh9GC0L7QsdGLINC80LDQvdC40L/Rg9C70Y/RhtC40Lgg0YEg0L3QuNC8INC90LUg0LzQtdC90Y/Qu9C4IGZvb2Rcbi8vICAgICByZXR1cm4gZm9vZC5zbGljZSgpO1xuLy8gICB9O1xuLy9cbi8vICAgdGhpcy5maWx0ZXJGb29kID0gZnVuY3Rpb24oZmlsdGVyKSB7XG4vLyAgICAgcmV0dXJuIGZvb2QuZmlsdGVyKGZpbHRlcik7XG4vLyAgIH1cbi8vXG4vLyAgIHRoaXMucmVtb3ZlRm9vZCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbi8vICAgICB2YXIgaWR4ID0gZm9vZC5pbmRleE9mKGl0ZW0pO1xuLy8gICAgIGlmIChpZHggIT0gLTEpIGZvb2Quc3BsaWNlKGlkeCwgMSk7XG4vLyAgIH07XG4vLyB9XG4vL1xuLy8gdmFyIGZyaWRnZSA9IG5ldyBGcmlkZ2UoNTAwKTtcbi8vIGZyaWRnZS5lbmFibGUoKTtcbi8vIGZyaWRnZS5hZGRGb29kKHtcbi8vICAgdGl0bGU6IFwi0LrQvtGC0LvQtdGC0LBcIixcbi8vICAgY2Fsb3JpZXM6IDEwMFxuLy8gfSk7XG4vLyBmcmlkZ2UuYWRkRm9vZCh7XG4vLyAgIHRpdGxlOiBcItGB0L7QulwiLFxuLy8gICBjYWxvcmllczogMzBcbi8vIH0pO1xuLy8gZnJpZGdlLmFkZEZvb2Qoe1xuLy8gICB0aXRsZTogXCLQt9C10LvQtdC90YxcIixcbi8vICAgY2Fsb3JpZXM6IDEwXG4vLyB9KTtcbi8vIGZyaWRnZS5hZGRGb29kKHtcbi8vICAgdGl0bGU6IFwi0LLQsNGA0LXQvdGM0LVcIixcbi8vICAgY2Fsb3JpZXM6IDE1MFxuLy8gfSk7XG4vL1xuLy8gIGxldCBkaWV0SXRlbXMgPSBmcmlkZ2UuZmlsdGVyRm9vZChmdW5jdGlvbihpdGVtKSB7XG4vLyAgICByZXR1cm4gaXRlbS5jYWxvcmllcyA8IDUwO1xuLy8gIH0pO1xuLy9cbi8vIGZyaWRnZS5yZW1vdmVGb29kKFwi0L3QtdGCINGC0LDQutC+0Lkg0LXQtNGLXCIpOyAvLyDQsdC10Lcg0Y3RhNGE0LXQutGC0LBcbi8vIGFsZXJ0KCBmcmlkZ2UuZ2V0Rm9vZCgpLmxlbmd0aCApOyAvLyA0XG4vL1xuLy8gZGlldEl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuLy8gICBhbGVydCggaXRlbS50aXRsZSApOyAvLyDRgdC+0LosINC30LXQu9C10L3RjFxuLy8gICBmcmlkZ2UucmVtb3ZlRm9vZChpdGVtKTtcbi8vIH0pO1xuLy9cbi8vIGFsZXJ0KCBmcmlkZ2UuZ2V0Rm9vZCgpLmxlbmd0aCApOyAvLyAyXG4vLyBmdW5jdGlvbiBNYWNoaW5lKCkge1xuLy8gICB0aGlzLl9lbmFibGVkID0gZmFsc2U7IC8vINCy0LzQtdGB0YLQviB2YXIgZW5hYmxlZFxuLy9cbi8vICAgdGhpcy5lbmFibGUgPSBmdW5jdGlvbigpIHtcbi8vICAgICB0aGlzLl9lbmFibGVkID0gdHJ1ZTtcbi8vICAgfTtcbi8vXG4vLyAgIHRoaXMuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIHRoaXMuX2VuYWJsZWQgPSBmYWxzZTtcbi8vICAgfTtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBDb2ZmZWVNYWNoaW5lKHBvd2VyKSB7XG4vLyAgIE1hY2hpbmUuY2FsbCh0aGlzKTsgLy8g0L7RgtC90LDRgdC70LXQtNC+0LLQsNGC0Yxcbi8vXG4vLyAgIHZhciB3YXRlckFtb3VudCA9IDA7XG4vL1xuLy8gICB0aGlzLnNldFdhdGVyQW1vdW50ID0gZnVuY3Rpb24oYW1vdW50KSB7XG4vLyAgICAgd2F0ZXJBbW91bnQgPSBhbW91bnQ7XG4vLyAgIH07XG4vL1xuLy8gICB0aGlzLnJ1biA9ICgpID0+IHtcbi8vICAgICBpZiAoIXRoaXMuX2VuYWJsZWQpIHRocm93IG5ldyBFcnJvcign0LrQvtGE0LXQstCw0YDQutCwINCy0YvQutC70Y7Rh9C10L3QsCcpO1xuLy8gICB9XG4vL1xuLy8gfVxuLy9cbi8vXG4vLyB2YXIgY29mZmVlTWFjaGluZSA9IG5ldyBDb2ZmZWVNYWNoaW5lKDEwMDAwKTtcbi8vXG4vLyBjb2ZmZWVNYWNoaW5lLmVuYWJsZSgpO1xuLy8gY29mZmVlTWFjaGluZS5ydW4oKTtcbi8vIGZ1bmN0aW9uIENvZmZlZU1hY2hpbmUocG93ZXIsIGNhcGFjaXR5KSB7XG4vLyAgIHZhciB3YXRlckFtb3VudCA9IDA7XG4vL1xuLy8gICB2YXIgV0FURVJfSEVBVF9DQVBBQ0lUWSA9IDQyMDA7XG4vL1xuLy8gICB2YXIgdGltZXJJZDtcbi8vXG4vLyAgIHRoaXMuaXNSdW5uaW5nID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuICEhdGltZXJJZDtcbi8vICAgfTtcbi8vXG4vLyAgIGZ1bmN0aW9uIGdldFRpbWVUb0JvaWwoKSB7XG4vLyAgICAgcmV0dXJuIHdhdGVyQW1vdW50ICogV0FURVJfSEVBVF9DQVBBQ0lUWSAqIDgwIC8gcG93ZXI7XG4vLyAgIH1cbi8vXG4vLyAgIHRoaXMuc2V0V2F0ZXJBbW91bnQgPSBmdW5jdGlvbihhbW91bnQpIHtcbi8vICAgICAvLyAuLi4g0L/RgNC+0LLQtdGA0LrQuCDQv9GA0L7Qv9GD0YnQtdC90Ysg0LTQu9GPINC60YDQsNGC0LrQvtGB0YLQuFxuLy8gICAgIHdhdGVyQW1vdW50ID0gYW1vdW50O1xuLy8gICB9O1xuLy9cbi8vICAgdGhpcy5nZXRXYXRlckFtb3VudCA9IGZ1bmN0aW9uKGFtb3VudCkge1xuLy8gICAgIHJldHVybiB3YXRlckFtb3VudDtcbi8vICAgfTtcbi8vXG4vLyAgIGZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4vLyAgICAgYWxlcnQoICfQmtC+0YTQtSDQs9C+0YLQvtCyIScgKTtcbi8vICAgfVxuLy9cbi8vICAgdGhpcy5zZXRPblJlYWR5ID0gZnVuY3Rpb24obmV3T25SZWFkeSkge1xuLy8gICAgIG9uUmVhZHkgPSBuZXdPblJlYWR5O1xuLy8gICB9O1xuLy9cbi8vICAgdGhpcy5ydW4gPSBmdW5jdGlvbigpIHtcbi8vICAgICB0aW1lcklkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbi8vICAgICAgIHRpbWVySWQgPSBudWxsO1xuLy8gICAgICAgb25SZWFkeSgpO1xuLy8gICAgIH0sIGdldFRpbWVUb0JvaWwoKSk7XG4vLyAgIH07XG4vL1xuLy8gfVxuLy9cbi8vIHZhciBjb2ZmZWVNYWNoaW5lID0gbmV3IENvZmZlZU1hY2hpbmUoMjAwMDAsIDUwMCk7XG4vLyBjb2ZmZWVNYWNoaW5lLnNldFdhdGVyQW1vdW50KDEwMCk7XG4vL1xuLy8gYWxlcnQoICfQlNC+OiAnICsgY29mZmVlTWFjaGluZS5pc1J1bm5pbmcoKSApOyAvLyDQlNC+OiBmYWxzZVxuLy9cbi8vIGNvZmZlZU1hY2hpbmUucnVuKCk7XG4vLyBhbGVydCggJ9CSINC/0YDQvtGG0LXRgdGB0LU6ICcgKyBjb2ZmZWVNYWNoaW5lLmlzUnVubmluZygpICk7IC8vINCSINC/0YDQvtGG0LXRgdGB0LU6IHRydWVcbi8vXG4vLyBjb2ZmZWVNYWNoaW5lLnNldE9uUmVhZHkoZnVuY3Rpb24oKSB7XG4vLyAgIGFsZXJ0KCBcItCf0L7RgdC70LU6IFwiICsgY29mZmVlTWFjaGluZS5pc1J1bm5pbmcoKSApOyAvLyDQn9C+0YHQu9C1OiBmYWxzZVxuLy8gfSk7XG4vLyBmdW5jdGlvbiBDb2ZmZWVNYWNoaW5lKHBvd2VyLCBjYXBhY2l0eSkge1xuLy8gICB2YXIgd2F0ZXJBbW91bnQgPSAwO1xuLy9cbi8vICAgdmFyIFdBVEVSX0hFQVRfQ0FQQUNJVFkgPSA0MjAwO1xuLy9cbi8vICAgZnVuY3Rpb24gZ2V0VGltZVRvQm9pbCgpIHtcbi8vICAgICByZXR1cm4gd2F0ZXJBbW91bnQgKiBXQVRFUl9IRUFUX0NBUEFDSVRZICogODAgLyBwb3dlcjtcbi8vICAgfVxuLy9cbi8vICAgdGhpcy5zZXRXYXRlckFtb3VudCA9IGZ1bmN0aW9uKGFtb3VudCkge1xuLy8gICAgIC8vIC4uLiDQv9GA0L7QstC10YDQutC4INC/0YDQvtC/0YPRidC10L3RiyDQtNC70Y8g0LrRgNCw0YLQutC+0YHRgtC4XG4vLyAgICAgd2F0ZXJBbW91bnQgPSBhbW91bnQ7XG4vLyAgIH07XG4vL1xuLy8gICB0aGlzLmdldFdhdGVyQW1vdW50ID0gZnVuY3Rpb24oYW1vdW50KSB7XG4vLyAgICAgcmV0dXJuIHdhdGVyQW1vdW50O1xuLy8gICB9O1xuLy9cbi8vICAgZnVuY3Rpb24gb25SZWFkeSgpIHtcbi8vICAgICBhbGVydCggJ9Ca0L7RhNC1INCz0L7RgtC+0LIhJyApO1xuLy8gICB9XG4vL1xuLy8gICB0aGlzLnNldE9uUmVhZHkgPSAobmV3T25SZWFkeSkgPT4gb25SZWFkeSA9IG5ld09uUmVhZHk7XG4vL1xuLy8gICB0aGlzLnJ1biA9IGZ1bmN0aW9uKCkge1xuLy8gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbi8vICAgICAgb25SZWFkeSgpO1xuLy8gICAgfSwgZ2V0VGltZVRvQm9pbCgpKTtcbi8vICB9O1xuLy8gIC8v0LHQu9Cw0LPQvtC00LDRgNGPINCw0L3QvtC90LjQvNC90L7QuSDRhNGD0L3QutGG0LjQuCwgb25SZWFkeSgpINC90LDRh9C90LXRgiDQuNGB0LrQsNGC0Ywg0YHQstC+0LUg0L/QvtC70L7QttC10L3QuNC1INC4INC90LDQudC00LXRglxuLy8gIC8v0L/QvtGB0LvQtdC00L3QuNC1INC40LfQvNC10L3QtdC90LjRjyBzZXRPblJlYWR5KCksINCx0LXQtyDRjdGC0L7Qs9C+INC/0YDQvtGB0YLQviDQstGL0LfQvtCy0LXRgtGB0Y8g0LTQtdGE0L7Qu9GC0L3Ri9C5IG9uUmVhZHkoKVxuLy9cbi8vIH1cbi8vXG4vLyB2YXIgY29mZmVlTWFjaGluZSA9IG5ldyBDb2ZmZWVNYWNoaW5lKDIwMDAwLCA1MDApO1xuLy8gY29mZmVlTWFjaGluZS5zZXRXYXRlckFtb3VudCgxNTApO1xuLy9cbi8vIGNvZmZlZU1hY2hpbmUucnVuKCk7XG4vL1xuLy8gY29mZmVlTWFjaGluZS5zZXRPblJlYWR5KGZ1bmN0aW9uKCkge1xuLy8gICB2YXIgYW1vdW50ID0gY29mZmVlTWFjaGluZS5nZXRXYXRlckFtb3VudCgpO1xuLy8gICBhbGVydCggJ9CT0L7RgtC+0LIg0LrQvtGE0LU6ICcgKyBhbW91bnQgKyAn0LzQuycgKTsgLy8g0JPQvtGC0L7QsiDQutC+0YTQtTogMTUwINC80Ltcbi8vIH0pO1xuLy8gZnVuY3Rpb24gQ29mZmVlTWFjaGluZShwb3dlciwgY2FwYWNpdHkpIHtcbi8vICAgLy8uLi5cbi8vICAgdGhpcy5zZXRXYXRlckFtb3VudCA9IGZ1bmN0aW9uKGFtb3VudCkge1xuLy8gICAgIGlmIChhbW91bnQgPCAwKSB7XG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQl9C90LDRh9C10L3QuNC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQv9C+0LvQvtC20LjRgtC10LvRjNC90YvQvFwiKTtcbi8vICAgICB9XG4vLyAgICAgaWYgKGFtb3VudCA+IGNhcGFjaXR5KSB7XG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQndC10LvRjNC30Y8g0LfQsNC70LjRgtGMINCy0L7QtNGLINCx0L7Qu9GM0YjQtSwg0YfQtdC8IFwiICsgY2FwYWNpdHkpO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgd2F0ZXJBbW91bnQgPSBhbW91bnQ7XG4vLyAgIH07XG4vL1xuLy8gICB0aGlzLmdldFdhdGVyQW1vdW50ID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuIHdhdGVyQW1vdW50O1xuLy8gICB9O1xuLy9cbi8vICAgdGhpcy5nZXRQb3dlckFtb3VudCA9ICgpID0+IHBvd2VyO1xuLy8gfVxuLy9cbi8vIGxldCBjb2ZmZWVNYWNoaW5lID0gbmV3IENvZmZlZU1hY2hpbmUoMTAwMCwgMjAwKTtcbi8vIGNvbnNvbGUubG9nKCBjb2ZmZWVNYWNoaW5lLmdldFBvd2VyQW1vdW50KCkgKTtcbi8vIGZ1bmN0aW9uIFVzZXIoKSB7XG4vL1xuLy8gICBsZXQgZmlyc3ROYW1lLCBzdXJuYW1lO1xuLy9cbi8vICAgdGhpcy5zZXRGaXJzdE5hbWUgPSAobmV3Rmlyc3ROYW1lKSA9PiBmaXJzdE5hbWUgPSBuZXdGaXJzdE5hbWU7XG4vLyAgIHRoaXMuc2V0U3VybmFtZSA9IChuZXdMYXN0TmFtZSkgPT4gc3VybmFtZSA9IG5ld0xhc3ROYW1lO1xuLy9cbi8vICAgdGhpcy5nZXRGdWxsTmFtZSA9ICgpID0+IGAke2ZpcnN0TmFtZX0gJHtzdXJuYW1lfWA7XG4vLyB9XG4vL1xuLy8gdmFyIHVzZXIgPSBuZXcgVXNlcigpO1xuLy8gdXNlci5zZXRGaXJzdE5hbWUoXCLQn9C10YLRj1wiKTtcbi8vIHVzZXIuc2V0U3VybmFtZShcItCY0LLQsNC90L7QslwiKTtcbi8vXG4vLyBhbGVydCggdXNlci5nZXRGdWxsTmFtZSgpICk7IC8vINCf0LXRgtGPINCY0LLQsNC90L7QslxuLy8gZnVuY3Rpb24gQ29mZmVlTWFjaGluZShwb3dlciwgY2FwYWNpdHkpIHtcbi8vICAgdmFyIHdhdGVyQW1vdW50ID0gMDtcbi8vXG4vLyAgIHRoaXMud2F0ZXJBbW91bnQgPSBmdW5jdGlvbihhbW91bnQpIHtcbi8vICAgICAvLyDQstGL0LfQvtCyINCx0LXQtyDQv9Cw0YDQsNC80LXRgtGA0LAsINC30L3QsNGH0LjRgiDRgNC10LbQuNC8INCz0LXRgtGC0LXRgNCwLCDQstC+0LfQstGA0LDRidCw0LXQvCDRgdCy0L7QudGB0YLQstC+XG4vLyAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gd2F0ZXJBbW91bnQ7XG4vL1xuLy8gICAgIC8vINC40L3QsNGH0LUg0YDQtdC20LjQvCDRgdC10YLRgtC10YDQsFxuLy8gICAgIGlmIChhbW91bnQgPCAwKSB7XG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQl9C90LDRh9C10L3QuNC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQv9C+0LvQvtC20LjRgtC10LvRjNC90YvQvFwiKTtcbi8vICAgICB9XG4vLyAgICAgaWYgKGFtb3VudCA+IGNhcGFjaXR5KSB7XG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQndC10LvRjNC30Y8g0LfQsNC70LjRgtGMINCy0L7QtNGLINCx0L7Qu9GM0YjQtSwg0YfQtdC8IFwiICsgY2FwYWNpdHkpO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgd2F0ZXJBbW91bnQgPSBhbW91bnQ7XG4vLyAgIH07XG4vL1xuLy8gfVxuLy9cbi8vIHZhciBjb2ZmZWVNYWNoaW5lID0gbmV3IENvZmZlZU1hY2hpbmUoMTAwMCw1MDApO1xuLy9cbi8vIC8vINC/0YDQuNC80LXRgCDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRj1xuLy8gY29mZmVlTWFjaGluZS53YXRlckFtb3VudCg0NTApO1xuLy8gYWxlcnQoIGNvZmZlZU1hY2hpbmUud2F0ZXJBbW91bnQoKSApOyAvLyA0NTBcbi8vIGZ1bmN0aW9uIENvZmZlZU1hY2hpbmUocG93ZXIsIGNhcGFjaXR5KSB7IC8vIGNhcGFjaXR5IC0g0ZHQvNC60L7RgdGC0Ywg0LrQvtGE0LXQstCw0YDQutC4XG4vLyAgIHZhciB3YXRlckFtb3VudCA9IDA7XG4vL1xuLy8gICBjb25zdCBXQVRFUl9IRUFUX0NBUEFDSVRZID0gNDIwMDtcbi8vXG4vLyAgIGNvbnN0IGdldFRpbWVUb0JvaWwgPSAoKSA9PiB3YXRlckFtb3VudCAqIFdBVEVSX0hFQVRfQ0FQQUNJVFkgKiA4MCAvIHBvd2VyO1xuLy9cbi8vICAgLy8gXCLRg9C80L3QsNGPXCIg0YPRgdGC0LDQvdC+0LLQutCwINGB0LLQvtC50YHRgtCy0LBcbi8vICAgdGhpcy5zZXRXYXRlckFtb3VudCA9IChhbW91bnQpID0+IHtcbi8vICAgICBpZiAoYW1vdW50IDwgMCkge1xuLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0JfQvdCw0YfQtdC90LjQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0L/QvtC70L7QttC40YLQtdC70YzQvdGL0LxcIik7XG4vLyAgICAgfVxuLy8gICAgIGlmIChhbW91bnQgPiBjYXBhY2l0eSkge1xuLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0J3QtdC70YzQt9GPINC30LDQu9C40YLRjCDQstC+0LTRiyDQsdC+0LvRjNGI0LUsINGH0LXQvCBcIiArIGNhcGFjaXR5KTtcbi8vICAgICB9XG4vL1xuLy8gICAgIHdhdGVyQW1vdW50ID0gYW1vdW50O1xuLy8gICB9O1xuLy9cbi8vICAgLy/QlNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0LTQsNGC0Ywg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQstC90LXRiNC90LXQvNGDINC60L7QtNGDINGD0LfQvdCw0YLRjCDQtdCz0L4g0LfQvdCw0YfQtdC90LjQtSxcbi8vICAgLy8g0YHQvtC30LTQsNC00LjQvCDRgdC/0LXRhtC40LDQu9GM0L3Rg9GOINGE0YPQvdC60YbQuNGOIOKAkyDCq9Cz0LXRgtGC0LXRgMK7IChnZXR0ZXIgbWV0aG9kKS5cbi8vICAgdGhpcy5nZXRXYXRlckFtb3VudCA9ICgpID0+IGNvbnNvbGUubG9nKHdhdGVyQW1vdW50KTtcbi8vXG4vLyAgIGNvbnN0IG9uUmVhZHkgPSAoKSA9PiBhbGVydCggJ9Ca0L7RhNC1INCz0L7RgtC+0LIhJyApO1xuLy9cbi8vICAgdGhpcy5ydW4gPSAoKSA9PiBzZXRUaW1lb3V0KG9uUmVhZHksIGdldFRpbWVUb0JvaWwoKSk7XG4vLyB9XG4vL1xuLy8gdmFyIGNvZmZlZU1hY2hpbmUgPSBuZXcgQ29mZmVlTWFjaGluZSgxMDAwLCA1MDApO1xuLy8gY29mZmVlTWFjaGluZS5zZXRXYXRlckFtb3VudCg1MCk7IC8vINGD0L/RgSwg0L7RiNC40LHQutCwIVxuLy8gY29mZmVlTWFjaGluZS5nZXRXYXRlckFtb3VudCgpO1xuLy8gZnVuY3Rpb24gQ29mZmVlTWFjaGluZShwb3dlcikge1xuLy8gXHR0aGlzLndhdGVyQW1vdW50ID0gMDtcbi8vIFx0Y29uc3QgV0FURVJfSEVBVF9DQVBBQ0lUWSA9IDQyMDA7XG4vLyBcdGxldCB0aW1lcklkO1xuLy9cbi8vIFx0Y29uc3QgZ2V0Qm9pbFRpbWUgPSAoKSA9PiB0aGlzLndhdGVyQW1vdW50ICogV0FURVJfSEVBVF9DQVBBQ0lUWSAqIDgwIC8gcG93ZXI7XG4vL1xuLy8gXHRjb25zdCBvblJlYWR5ID0gKCkgPT4gYWxlcnQoJ9Ca0L7RhNC1INCz0L7RgtC+0LLQviEnKTtcbi8vXG4vLyBcdHRoaXMucnVuID0gKCkgPT4gdGltZXJJZCA9IHNldFRpbWVvdXQob25SZWFkeSwgZ2V0Qm9pbFRpbWUoKSk7XG4vLyBcdC8v0KTRg9C90LrRhtC40Y8gc2V0VGltZW91dCDQstC+0LfQstGA0LDRidCw0LXRgiDRh9C40YHQu9C+0LLQvtC5INC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINGC0LDQudC80LXRgNCwXG4vLyBcdC8vIHRpbWVySWQsINC60L7RgtC+0YDRi9C5INC80L7QttC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC00LvRjyDQvtGC0LzQtdC90Ysg0LTQtdC50YHRgtCy0LjRj1xuLy9cbi8vIFx0dGhpcy5zdG9wID0gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuLy8gfVxuLy9cbi8vIHZhciBjb2ZmZWVNYWNoaW5lID0gbmV3IENvZmZlZU1hY2hpbmUoNTAwMDApO1xuLy8gY29mZmVlTWFjaGluZS53YXRlckFtb3VudCA9IDIwMDtcbi8vXG4vLyBjb2ZmZWVNYWNoaW5lLnJ1bigpO1xuLy8gY29mZmVlTWFjaGluZS5zdG9wKCk7IC8vINC60L7RhNC1INC/0YDQuNCz0L7RgtC+0LLQu9C10L0g0L3QtSDQsdGD0LTQtdGCXG4vLyBmdW5jdGlvbiBDb2ZmZWVNYWNoaW5lKHBvd2VyKSB7XG4vL1xuLy8gICB0aGlzLndhdGVyQW1vdW50ID0gMDtcbi8vXG4vLyAgIC8vINGE0LjQt9C40YfQtdGB0LrQsNGPINC60L7QvdGB0YLQsNC90YLQsCAtINGD0LTQtdC70YzQvdCw0Y8g0YLQtdC/0LvQvtGR0LzQutC+0YHRgtGMINCy0L7QtNGLINC00LvRjyBnZXRCb2lsVGltZVxuLy8gICB2YXIgV0FURVJfSEVBVF9DQVBBQ0lUWSA9IDQyMDA7XG4vL1xuLy8gICBsZXQgc2VsZiA9IHRoaXM7IC8v0LTQvtGB0YLRg9C/INC6INC+0LHRitC10LrRgtGDINC40Lcg0LLQvdGD0YLRgNC10L3QvdC10LPQviDQvNC10YLQvtC00LBcbi8vICAgLy8g0YDQsNGB0YfRkdGCINCy0YDQtdC80LXQvdC4INC00LvRjyDQutC40L/Rj9GH0LXQvdC40Y9cbi8vICAgZnVuY3Rpb24gZ2V0Qm9pbFRpbWUoKSB7XG4vLyAgICAgcmV0dXJuIHNlbGYud2F0ZXJBbW91bnQgKiBXQVRFUl9IRUFUX0NBUEFDSVRZICogODAgLyBwb3dlcjsgLy8g0L7RiNC40LHQutCwIVxuLy8gICB9XG4vL1xuLy8gICAvLyDRh9GC0L4g0LTQtdC70LDRgtGMINC/0L4g0L7QutC+0L3Rh9Cw0L3QuNC4INC/0YDQvtGG0LXRgdGB0LBcbi8vICAgZnVuY3Rpb24gb25SZWFkeSgpIHtcbi8vICAgICBhbGVydCggJ9Ca0L7RhNC1INCz0L7RgtC+0LIhJyApO1xuLy8gICB9XG4vL1xuLy8gICB0aGlzLnJ1biA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIHNldFRpbWVvdXQob25SZWFkeSwgZ2V0Qm9pbFRpbWUoKSk7XG4vLyAgIH07XG4vL1xuLy8gfVxuLy9cbi8vIHZhciBjb2ZmZWVNYWNoaW5lID0gbmV3IENvZmZlZU1hY2hpbmUoMTAwMDAwKTtcbi8vIGNvZmZlZU1hY2hpbmUud2F0ZXJBbW91bnQgPSAyMDA7XG4vL1xuLy8gY29mZmVlTWFjaGluZS5ydW4oKTtcbi8vIHZhciBleHByLCByZXM7XG4vL1xuLy8gd2hpbGUgKHRydWUpIHtcbi8vICAgZXhwciA9IHByb21wdChcItCS0LLQtdC00LjRgtC1INCy0YvRgNCw0LbQtdC90LjQtT9cIiwgJzItJyk7XG4vLyAgIGlmIChleHByID09IG51bGwpIGJyZWFrO1xuLy9cbi8vICAgdHJ5IHtcbi8vICAgICByZXMgPSBldmFsKGV4cHIpO1xuLy8gICAgIGlmIChpc05hTihyZXMpKSB7XG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQoNC10LfRg9C70YzRgtCw0YIg0L3QtdC+0L/RgNC10LTQtdC70ZHQvVwiKTtcbi8vICAgICB9XG4vL1xuLy8gICAgIGJyZWFrO1xuLy8gICB9IGNhdGNoIChlKSB7XG4vLyAgICAgYWxlcnQoIFwi0J7RiNC40LHQutCwOiBcIiArIGUubWVzc2FnZSArIFwiLCDQv9C+0LLRgtC+0YDQuNGC0LUg0LLQstC+0LRcIiApO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gYWxlcnQoIHJlcyApO1xuLy8gdmFyIGRhdGEgPSAneyBcIm5hbWVcIjogXCLQktCw0YHRj1wiLCBcImFnZVwiOiAzMCB9JzsgLy8g0LTQsNC90L3Ri9C1INC60L7RgNGA0LXQutGC0L3Ri1xuLy9cbi8vIHRyeSB7XG4vL1xuLy8gICB2YXIgdXNlciA9IEpTT04ucGFyc2UoZGF0YSk7XG4vL1xuLy8gICBpZiAoIXVzZXIubmFtZSkge1xuLy8gICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcItCe0YjQuNCx0LrQsCDQsiDQtNCw0L3QvdGL0YVcIik7XG4vLyAgIH1cbi8vXG4vLyAgIGJsYWJsYSgpOyAvLyDQv9GA0L7QuNC30L7RiNC70LAg0L3QtdC/0YDQtdC00YPRgdC80L7RgtGA0LXQvdC90LDRjyDQvtGI0LjQsdC60LBcbi8vXG4vLyAgIGFsZXJ0KCB1c2VyLm5hbWUgKTtcbi8vXG4vLyB9IGNhdGNoIChlKSB7XG4vL1xuLy8gICBpZiAoZS5uYW1lID09IFwiU3ludGF4RXJyb3JcIikge1xuLy8gICAgIGFsZXJ0KCBcItCY0LfQstC40L3QuNGC0LUsINCyINC00LDQvdC90YvRhSDQvtGI0LjQsdC60LBcIiApO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHRocm93IGU7XG4vLyAgIH1cbi8vXG4vLyB9XG4vLyBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCBtcykge1xuLy9cbi8vICAgdmFyIGlzVGhyb3R0bGVkID0gZmFsc2UsXG4vLyAgICAgc2F2ZWRBcmdzLFxuLy8gICAgIHNhdmVkVGhpcztcbi8vXG4vLyAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVyKCkge1xuLy9cbi8vICAgICBpZiAoaXNUaHJvdHRsZWQpIHsgLy8gKDIpXG4vLyAgICAgICBzYXZlZEFyZ3MgPSBhcmd1bWVudHM7XG4vLyAgICAgICBzYXZlZFRoaXMgPSB0aGlzO1xuLy8gICAgICAgcmV0dXJuO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyAoMSlcbi8vXG4vLyAgICAgaXNUaHJvdHRsZWQgPSB0cnVlO1xuLy9cbi8vICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuLy8gICAgICAgaXNUaHJvdHRsZWQgPSBmYWxzZTsgLy8gKDMpXG4vLyAgICAgICBpZiAoc2F2ZWRBcmdzKSB7XG4vLyAgICAgICAgIHdyYXBwZXIuYXBwbHkoc2F2ZWRUaGlzLCBzYXZlZEFyZ3MpO1xuLy8gICAgICAgICBzYXZlZEFyZ3MgPSBzYXZlZFRoaXMgPSBudWxsO1xuLy8gICAgICAgfVxuLy8gICAgIH0sIG1zKTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vXG4vLyB2YXIgZiA9IGZ1bmN0aW9uKGEpIHtcbi8vICAgY29uc29sZS5sb2coYSlcbi8vIH07XG4vL1xuLy8gLy8g0LfQsNGC0L7RgNC80L7Qt9C40YLRjCDRhNGD0L3QutGG0LjRjiDQtNC+INC+0LTQvdC+0LPQviDRgNCw0LfQsCDQsiAxMDAwINC80YFcbi8vIHZhciBmMTAwMCA9IHRocm90dGxlKGYsIDEwMDApO1xuLy9cbi8vIGYxMDAwKDEpOyAvLyDQstGL0LLQtdC00LXRgiAxXG4vLyBmMTAwMCgyKTsgLy8gKNGC0L7RgNC80L7Qt9C40LwsINC90LUg0L/RgNC+0YjQu9C+IDEwMDAg0LzRgSlcbi8vIGYxMDAwKDMpOyAvLyAo0YLQvtGA0LzQvtC30LjQvCwg0L3QtSDQv9GA0L7RiNC70L4gMTAwMCDQvNGBKVxuLy8g0LrQvtCz0LTQsCDQv9GA0L7QudC00ZHRgiAxMDAwINC80YEuLi5cbi8vINCy0YvQstC10LTQtdGCIDMsINC/0YDQvtC80LXQttGD0YLQvtGH0L3QvtC1INC30L3QsNGH0LXQvdC40LUgMiDQuNCz0L3QvtGA0LjRgNGD0LXRgtGB0Y9cbi8vIGZ1bmN0aW9uIGRlYm91bmNlKGYsIG1zKSB7XG4vLyAgIGxldCB0aW1lciA9IG51bGw7XG4vL1xuLy8gICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbi8vICAgICBjb25zdCBvbkNvbXBsZXRlID0gKCkgPT4ge1xuLy8gICAgICAgZi5hcHBseSh0aGlzLCBhcmdzKTtcbi8vICAgICAgIHRpbWVyID0gbnVsbDtcbi8vICAgICB9XG4vL1xuLy8gICAgIGlmICh0aW1lcikge1xuLy8gICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbi8vICAgICB9XG4vL1xuLy8gICAgIHRpbWVyID0gc2V0VGltZW91dChvbkNvbXBsZXRlLCBtcyk7XG4vLyAgIH07XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gZih4KSB7IGFsZXJ0KHgpIH1cbi8vIGYgPSBkZWJvdW5jZShmLCAxMDAwKTtcbi8vXG4vLyBmKDEpOyAvLyDQstGL0LfQvtCyINC+0YLQu9C+0LbQtdC9INC90LAgMTAwMCDQvNGBXG4vLyBmKDIpOyAvLyDQv9GA0LXQtNGL0LTRg9GJ0LjQuSDQvtGC0LvQvtC20LXQvdC90YvQuSDQstGL0LfQvtCyINC40LPQvdC+0YDQuNGA0YPQtdGC0YHRjywg0YLQtdC60YPRidC40LkgKDIpINC+0YLQutC70LDQtNGL0LLQsNC10YLRgdGPINC90LAgMTAwMCDQvNGBXG4vL1xuLy8gLy8g0YfQtdGA0LXQtyAxINGB0LXQutGD0L3QtNGDINCx0YPQtNC10YIg0LLRi9C/0L7Qu9C90LXQvSDQstGL0LfQvtCyIGYoMSlcbi8vXG4vLyBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHsgZigzKSB9LCAxMTAwKTsgLy8g0YfQtdGA0LXQtyAxMTAwINC80YEg0L7RgtC70L7QttC40Lwg0LLRi9C30L7QsiDQtdGJ0LUg0L3QsCAxMDAwINC80YFcbi8vIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkgeyBmKDQpIH0sIDEyMDApOyAvLyDQuNCz0L3QvtGA0LjRgNGD0LXQvCDQstGL0LfQvtCyICgzKVxuLy8g0YfQtdGA0LXQtyAyMjAwINC80YEg0L7RgiDQvdCw0YfQsNC70LAg0LLRi9C/0L7Qu9C90LXQvdC40Y8g0LHRg9C00LXRgiDQstGL0L/QvtC70L3QtdC9INCy0YvQt9C+0LIgZig0KVxuLy8gZnVuY3Rpb24gZGVsYXkoZiwgbXMpIHtcbi8vICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbi8vICAgICB9LCBtcyk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBmKHgpIHtcbi8vICAgYWxlcnQoIHggKTtcbi8vIH1cbi8vXG4vLyB2YXIgZjEwMDAgPSBkZWxheShmLCAxMDAwKTtcbi8vIHZhciBmMTUwMCA9IGRlbGF5KGYsIDE1MDApO1xuLy9cbi8vIGYxMDAwKFwi0YLQtdGB0YJcIik7IC8vINCy0YvQstC10LTQtdGCIFwi0YLQtdGB0YJcIiDRh9C10YDQtdC3IDEwMDAg0LzQuNC70LvQuNGB0LXQutGD0L3QtFxuLy8gZjE1MDAoXCLRgtC10YHRgjJcIik7IC8vINCy0YvQstC10LTQtdGCIFwi0YLQtdGB0YIyXCIg0YfQtdGA0LXQtyAxNTAwINC80LjQu9C70LjRgdC10LrRg9C90LRcbi8vIGZ1bmN0aW9uIHByaW50TnVtYmVyc0ludGVydmFsKCkge1xuLy8gICB2YXIgaSA9IDE7XG4vLyAgIHNldFRpbWVvdXQoZnVuY3Rpb24gaXRlcmF0b3IoKSB7XG4vLyAgICAgY29uc29sZS5sb2coaSk7XG4vLyAgICAgaWYgKGkgPCAyMCkgc2V0VGltZW91dChpdGVyYXRvciwgMTAwKTtcbi8vICAgICBpKys7XG4vLyAgIH0sIDEwMCk7XG4vLyB9XG4vL1xuLy8gcHJpbnROdW1iZXJzSW50ZXJ2YWwoKTtcbi8vIGZ1bmN0aW9uIHByaW50TnVtYmVyc0ludGVydmFsKCkge1xuLy8gICB2YXIgaSA9IDE7XG4vLyAgIHZhciB0aW1lcklkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4vLyAgICAgY29uc29sZS5sb2coaSk7XG4vLyAgICAgaWYgKGkgPT0gMjApIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XG4vLyAgICAgaSsrO1xuLy8gICB9LCAxMDApO1xuLy8gfVxuLy8gcHJpbnROdW1iZXJzSW50ZXJ2YWwoKTtcbi8vIGNsYXNzIEFuaW1hbCB7XG4vLyBcdGNvbnN0cnVjdG9yKG5hbWUpIHtcbi8vIFx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuLy8gXHR9XG4vL1xuLy8gXHR3YWxrKCkge1xuLy8gXHRcdGFsZXJ0KFwiSSB3YWxrOiBcIiArIHRoaXMubmFtZSk7XG4vL1xuLy8gXHR9XG4vLyB9XG4vL1xuLy8gY2xhc3MgUmFiYml0IGV4dGVuZHMgQW5pbWFsIHtcbi8vIFx0d2FsaygpIHtcbi8vIFx0XHRzdXBlci53YWxrKCk7XG4vLyBcdFx0YWxlcnQoXCIuLi5hbmQganVtcCFcIik7XG4vL1xuLy8gXHR9XG4vLyB9XG4vL1xuLy8gbmV3IFJhYmJpdChcItCS0LDRgdGPXCIpLndhbGsoKTtcbi8vXG4vLyBjb25zb2xlLmxvZyhSYWJiaXQucHJvdG90eXBlLl9fcHJvdG9fXyA9PSBBbmltYWwucHJvdG90eXBlKTtcbi8vX19wcm90b19fINGB0LLQvtC50YHRgtCy0L4sINC90LUg0L3QsNC50LTQtdC90L3QvtC1INCyINC+0LTQvdC+0Lwg0L7QsdGK0LXQutGC0LUsINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INC40YnQtdGC0YHRjyDQsiDQtNGA0YPQs9C+0LwuXG4vL9CyIHByb3RvdHlwZSDQt9Cw0L/QuNGB0YvQstCw0Y7RgtGB0Y8g0LzQtdGC0L7QtNGLINC60LvQsNGB0YHQvtCyXG4vL3Byb3RvdHlwZSDRgyBSYWJiaXQg0YHRgdGL0LvQsNC10YLRgdGPINC90LAgQW5pbWFsIHByb3RvdHlwZVxuLy/Qv9GA0Lgg0YHQvtC30LTQsNC90LjQuCDQvtCx0YrQtdC60YLQsCDRh9C10YDQtdC3ICduZXcnINGD0YHRgtCw0L3QvtCy0LggX19wcm90b19fIFJhYmJpdC5wcm90b3R5cGUg0L3QsCBBbmltYWwucHJvdG90eXBlXG4vL9Cn0YLQvtCx0Ysg0L3QvtCy0YvQvCDQvtCx0YrQtdC60YLQsNC8INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INGB0YLQsNCy0LjRgtGMINC/0YDQvtGC0L7RgtC40L8sINC60L7QvdGB0YLRgNGD0LrRgtC+0YDRgyDRgdGC0LDQstC40YLRgdGPINGB0LLQvtC50YHRgtCy0L4gcHJvdG90eXBlLlxuLy/Qn9GA0Lgg0YHQvtC30LTQsNC90LjQuCDQvtCx0YrQtdC60YLQsCDRh9C10YDQtdC3IG5ldywg0LIg0LXQs9C+INC/0YDQvtGC0L7RgtC40L8gX19wcm90b19fINC30LDQv9C40YHRi9Cy0LDQtdGC0YHRjyDRgdGB0YvQu9C60LAg0LjQtyBwcm90b3R5cGUg0YTRg9C90LrRhtC40Lgt0LrQvtC90YHRgtGA0YPQutGC0L7RgNCwLlxuLy/QutC+0L3RgdGC0LDQvdGC0LAg0LIg0LrQu9Cw0YHRgdC1XG4vLyBjbGFzcyBNZW51IHtcbi8vICAgc3RhdGljIGdldCBlbGVtQ2xhc3MoKSB7XG4vLyAgICAgcmV0dXJuIFwibWVudVwiXG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBhbGVydCggTWVudS5lbGVtQ2xhc3MgKTsgLy8gbWVudVxuLy8gY2xhc3MgVXNlciB7XG4vLyAgIGNvbnN0cnVjdG9yKGZpcnN0TmFtZSwgbGFzdE5hbWUpIHtcbi8vICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbi8vICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XG4vLyAgIH1cbi8vXG4vLyAgIC8vINCz0LXRgtGC0LXRgFxuLy8gICBnZXQgZnVsbE5hbWUoKSB7XG4vLyAgICAgcmV0dXJuIGAke3RoaXMuZmlyc3ROYW1lfSAke3RoaXMubGFzdE5hbWV9YDtcbi8vICAgfVxuLy9cbi8vICAgLy8g0YHQtdGC0YLQtdGAXG4vLyAgIHNldCBmdWxsTmFtZShuZXdWYWx1ZSkge1xuLy8gICAgIFt0aGlzLmZpcnN0TmFtZSwgdGhpcy5sYXN0TmFtZV0gPSBuZXdWYWx1ZS5zcGxpdCgnICcpO1xuLy8gICB9XG4vL1xuLy8gICAvLyBbcmFuZF0oKSB7XG4vLyAgIC8vICAgYWxlcnQoXCJQQVNTRUQhXCIpO1xuLy8gICAvLyB9XG4vL1xuLy8gICAvLyDQstGL0YfQuNGB0LvRj9C10LzQvtC1INC90LDQt9Cy0LDQvdC40LUg0LzQtdGC0L7QtNCwXG4vLyAgIFtcInRlc3RcIi50b1VwcGVyQ2FzZSgpXSgpIHtcbi8vICAgICBhbGVydChcIlBBU1NFRCFcIik7XG4vLyAgIH1cbi8vIH07XG4vL1xuLy8gbGV0IHVzZXIgPSBuZXcgVXNlcihcItCS0LDRgdGPXCIsIFwi0J/Rg9C/0LrQvtCyXCIpO1xuLy8gYWxlcnQoIHVzZXIuZnVsbE5hbWUgKTsgLy8g0JLQsNGB0Y8g0J/Rg9C/0LrQvtCyXG4vLyB1c2VyLmZ1bGxOYW1lID0gXCLQmNCy0LDQvSDQn9C10YLRgNC+0LJcIjtcbi8vIGFsZXJ0KCB1c2VyLmZ1bGxOYW1lICk7IC8vINCY0LLQsNC9INCf0LXRgtGA0L7QslxuLy8gdXNlci5URVNUKCk7IC8vIFBBU1NFRCFcbi8vIGNsYXNzIFVzZXIge1xuLy8gICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4vLyAgICAgdGhpcy5uYW1lID0gbmFtZTtcbi8vICAgfVxuLy8gICBzYXlIaSgpIHtcbi8vICAgICBhbGVydCh0aGlzLm5hbWUpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gbGV0IGFsbE1vZGVscyA9IHt9O1xuLy9cbi8vIGZ1bmN0aW9uIGNyZWF0ZU1vZGVsKE1vZGVsLCAuLi5hcmdzKSB7XG4vLyAgIGxldCBtb2RlbCA9IG5ldyBNb2RlbCguLi5hcmdzKTtcbi8vXG4vLyAgIG1vZGVsLl9pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO1xuLy8gICBhbGxNb2RlbHNbbW9kZWwuX2lkXSA9IG1vZGVsO1xuLy9cbi8vICAgcmV0dXJuIG1vZGVsO1xuLy8gfVxuLy9cbi8vXG4vL1xuLy8gbGV0IHVzZXIgPSBjcmVhdGVNb2RlbChVc2VyLCBcItCS0LDRgdGPXCIpO1xuLy9cbi8vIHVzZXIuc2F5SGkoKTsgLy8g0JLQsNGB0Y9cbi8vXG4vLyBhbGVydCggYWxsTW9kZWxzW3VzZXIuX2lkXS5uYW1lICk7XG4vLyBsZXQgYW5pbWFsID0ge1xuLy8gICB3YWxrKCkge1xuLy8gICAgIGFsZXJ0KFwiSSdtIHdhbGtpbmdcIik7XG4vLyAgIH1cbi8vIH07XG4vLyBsZXQgcmFiYml0ID0ge1xuLy8gICBfX3Byb3RvX186IGFuaW1hbCxcbi8vICAgd2FsaygpIHsgICAgLy/Qn9GA0Lgg0L7QsdGA0LDRidC10L3QuNC4INGH0LXRgNC10Lcgc3VwZXIg0LjRgdC/0L7Qu9GM0LfRg9C10YLRgdGPIFtbSG9tZU9iamVjdF1dINGC0LXQutGD0YnQtdCz0L4g0LzQtdGC0L7QtNCwLFxuLy8gICAgICAgICAgICAgICAvL9C4INC+0YIg0L3QtdCz0L4g0LHQtdGA0ZHRgtGB0Y8gX19wcm90b19fLiDQn9C+0Y3RgtC+0LzRgyBzdXBlciDRgNCw0LHQvtGC0LDQtdGCINGC0L7Qu9GM0LrQviDQstC90YPRgtGA0Lgg0LzQtdGC0L7QtNC+0LIuXG4vLyAgICAgYWxlcnQoc3VwZXIud2Fsayk7IC8vIHdhbGsoKSB7IOKApiB9XG4vLyAgICAgc3VwZXIud2FsaygpOyAvLyBJJ20gd2Fsa2luZ1xuLy8gICB9XG4vLyB9O1xuLy9cbi8vIHJhYmJpdC53YWxrKCk7XG4vLyBsZXQgbWVzc2FnZXMgPSB7XG4vLyAgIFwiSGVsbG8sIHswfSFcIjogXCLQn9GA0LjQstC10YIsIHswfSFcIlxuLy8gfTtcbi8vXG4vLyBmdW5jdGlvbiBpMThuKHN0cmluZ3MsIC4uLnZhbHVlcykge1xuLy8gICAvLyDQn9C+INGE0L7RgNC80LUg0YHRgtGA0L7QutC4INC/0L7Qu9GD0YfQuNC8INGI0LDQsdC70L7QvSDQtNC70Y8g0L/QvtC40YHQutCwINCyIG1lc3NhZ2VzXG4vLyAgIC8vINCd0LAg0LzQtdGB0YLQtSDQutCw0LbQtNC+0LPQviDQuNC3INC30L3QsNGH0LXQvdC40Lkg0LHRg9C00LXRgiDQtdCz0L4g0L3QvtC80LXRgDogezB9LCB7MX0sIOKAplxuLy8gICBsZXQgcGF0dGVybiA9IFwiXCI7XG4vLyAgIGZvcihsZXQgaT0wOyBpPHZhbHVlcy5sZW5ndGg7IGkrKykge1xuLy8gICAgIHBhdHRlcm4gKz0gc3RyaW5nc1tpXSArICd7JyArIGkgKyAnfSc7XG4vLyAgIH1cbi8vICAgcGF0dGVybiArPSBzdHJpbmdzW3N0cmluZ3MubGVuZ3RoLTFdO1xuLy8gICAvLyDQotC10L/QtdGA0YwgcGF0dGVybiA9IFwiSGVsbG8sIHswfSFcIlxuLy9cbi8vICAgbGV0IHRyYW5zbGF0ZWQgPSBtZXNzYWdlc1twYXR0ZXJuXTsgLy8gXCLQn9GA0LjQstC10YIsIHswfSFcIlxuLy9cbi8vICAgLy8g0JfQsNC80LXQvdC40YIg0LIgXCLQn9GA0LjQstC10YIsIHswfVwiINGG0LjRhNGA0Ysg0LLQuNC00LAge251bX0g0L3QsCB2YWx1ZXNbbnVtXVxuLy8gICByZXR1cm4gdHJhbnNsYXRlZC5yZXBsYWNlKC9cXHsoXFxkKVxcfS9nLCAocywgbnVtKSA9PiB2YWx1ZXNbbnVtXSk7XG4vLyB9XG4vL1xuLy8gLy8g0J/RgNC40LzQtdGAINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPXG4vLyBsZXQgbmFtZSA9IFwi0JLQsNGB0Y9cIjtcbi8vXG4vLyAvLyDQn9C10YDQtdCy0LXRgdGC0Lgg0YHRgtGA0L7QutGDXG4vLyBhbGVydCggaTE4bmBIZWxsbywgJHtuYW1lfSFgICk7IC8vINCf0YDQuNCy0LXRgiwg0JLQsNGB0Y8hXG4vLyBmdW5jdGlvbiBkZWZlcihmLCBtcykge1xuLy8gICByZXR1cm4gZnVuY3Rpb24oKSB7XG4vLyAgICAgc2V0VGltZW91dCgoKSA9PiBmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIG1zKVxuLy8gICAgIC8v0YHRgtGA0LXQu9C60LAg0LHQtdGA0LXRgiBhcmd1bWVudHMg0LjQtyDQstC90LXRiNC90LXQuSDRhNGD0L3QutGG0LjQuFxuLy/QstGL0LfQvtCyINGE0YPQvdC60YbQuNC4INC00L7Qu9C20LXQvSDQutCw0Lot0YLQviBcItC00L7QsdGA0LDRgtGM0YHRj1wiINC00L4g0YTRg9C90LrRhtC40Lgg0LLQvdGD0YLRgNC4IHNldFRpbWVvdXRcbi8vICAgfVxuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIHNheUhpKHdobykge1xuLy8gICBhbGVydCgn0J/RgNC40LLQtdGCLCAnICsgd2hvKTtcbi8vIH1cbi8vXG4vLyBsZXQgc2F5SGlEZWZlcnJlZCA9IGRlZmVyKHNheUhpLCAyMDAwKTtcbi8vIHNheUhpRGVmZXJyZWQoXCLQktCw0YHRj1wiKTsgLy8g0J/RgNC40LLQtdGCLCDQktCw0YHRjyDRh9C10YDQtdC3IDIg0YHQtdC60YPQvdC00Ytcbi8vIGxldCBncm91cCA9IHtcbi8vICAgdGl0bGU6IFwi0J3QsNGIINC60YPRgNGBXCIsXG4vLyAgIHN0dWRlbnRzOiBbXCLQktCw0YHRj1wiLCBcItCf0LXRgtGPXCIsIFwi0JTQsNGI0LBcIl0sXG4vL1xuLy8gICBzaG93TGlzdDogZnVuY3Rpb24oKSB7XG4vLyAgICAgdGhpcy5zdHVkZW50cy5mb3JFYWNoKFxuLy8gICAgICAgc3R1ZGVudCA9PiBhbGVydCh0aGlzLnRpdGxlICsgJzogJyArIHN0dWRlbnQpXG4vLyAgICAgLy/RgdGC0YDQtdC70LrQsCDQsdC10YDQtdGCIHRoaXMg0LjQtyDQstC90LXRiNC90LXQs9C+INC+0LrRgNGD0LbQtdC90LjRj1xuLy8gICAgIClcbi8vICAgfVxuLy8gfVxuLy9cbi8vIGdyb3VwLnNob3dMaXN0KCk7XG4vLyAvLyDQndCw0Ygg0LrRg9GA0YE6INCS0LDRgdGPXG4vLyAvLyDQndCw0Ygg0LrRg9GA0YE6INCf0LXRgtGPXG4vLyAvLyDQndCw0Ygg0LrRg9GA0YE6INCU0LDRiNCw0LBcbi8vINCk0YPQvdC60YbQuNC4LdGB0YLRgNC10LvQutC4INC+0YfQtdC90Ywg0YPQtNC+0LHQvdGLINCyINC60LDRh9C10YHRgtCy0LUg0LrQvtC70LvQsdC10LrQvtCyLCDQvdCw0L/RgNC40LzQtdGAOlxuLy8gbGV0IGFyciA9IFs1LCA4LCAzXTtcbi8vXG4vLyBsZXQgc29ydGVkID0gYXJyLnNvcnQoIChhLGIpID0+IGEgLSBiICk7XG4vL1xuLy8gYWxlcnQoc29ydGVkKTsgLy8gMywgNSwgOFxuLy8gbGV0IGdldFRpbWUgPSAoKSA9PiB7XG4vLyAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbi8vICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuLy8gICBsZXQgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuLy8gICByZXR1cm4gaG91cnMgKyAnOicgKyBtaW51dGVzO1xuLy8gfTtcbi8vXG4vLyBhbGVydCggZ2V0VGltZSgpICk7IC8vINGC0LXQutGD0YnQtdC1INCy0YDQtdC80Y9cbi8vIC8v0JfQsNC80LXRgtC40LwsINGH0YLQviDQutCw0Log0YLQvtC70YzQutC+INGC0LXQu9C+INGE0YPQvdC60YbQuNC4INC+0LHQvtGA0LDRh9C40LLQsNC10YLRgdGPINCyIHvigKZ9LCDRgtC+INC10ZEg0YDQtdC30YPQu9GM0YLQsNGCINGD0LbQtVxuLy8gLy/QvdC1INCy0L7Qt9Cy0YDQsNGJ0LDQtdGC0YHRjyDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuC4g0KLQsNC60LDRjyDRhNGD0L3QutGG0LjRjyDQtNC+0LvQttC90LAg0LTQtdC70LDRgtGMINGP0LLQvdGL0LkgcmV0dXJuLCDQutCw0Lpcbi8vIC8v0LIg0L/RgNC40LzQtdGA0LUg0LLRi9GI0LUsINC10YHQu9C4INC60L7QvdC10YfQvdC+INGF0L7Rh9C10YIg0YfRgtC+LdC70LjQsdC+INCy0L7Qt9Cy0YDQsNGC0LjRgtGMLlxuLy8gbGV0IHN1bSA9IChhLGIpID0+IGEgKyBiO1xuLy9cbi8vIC8vINCw0L3QsNC70L7QsyDRgSBmdW5jdGlvblxuLy8gLy8gbGV0IHN1bSA9IGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgKyBiOyB9O1xuLy9cbi8vIGFsZXJ0KCBzdW0oMSwgMikgKTsgLy8gM1xuLy9cbi8vIC8vINCy0YvQt9C+0LIgZ2V0VGltZSgpINCx0YPQtNC10YIg0LLQvtC30LLRgNCw0YnQsNGC0Ywg0YLQtdC60YPRidC10LUg0LLRgNC10LzRj1xuLy8gbGV0IGdldFRpbWUgPSAoKSA9PiBuZXcgRGF0ZSgpLmdldEhvdXJzKCkgKyAnOicgKyBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKTtcbi8vXG4vLyBhbGVydCggZ2V0VGltZSgpICk7IC8vINGC0LXQutGD0YnQtdC1INCy0YDQtdC80Y9cbi8vIGZ1bmN0aW9uIHN1bSh7IGEgPSAxLCBiID0gMSwgYyA9IDEgfSA9IHsgYTogMSwgYjogMCwgYzogMSB9KSB7XG4vLyAgIGNvbnNvbGUubG9nKGEgKyBiICsgYyk7XG4vLyB9XG4vL1xuLy8gc3VtKCk7IC8v0LLRi9C30L7QsiDQsdC10Lcg0LDRgNCz0YPQvNC10L3RgtC+0LIg0LLRi9C30L7QstC10YIg0LLRgtC+0YDQvtC5INC+0LHRitC10LrRgiAo0LTQtdGE0L7Qu9GC0L3Ri9C5KVxuLy8gc3VtKHt9KTtcbi8vIHN1bSh7IGE6IDEgfSk7XG4vLyBzdW0oeyBiOiAxIH0pO1xuLy8gc3VtKHsgYzogMSB9KTtcbi8vIHN1bSh7IGE6IDEsIGM6IDEgfSk7XG4vLyBzdW0oeyBhOiAxLCBiOiAxLCBjOiAxIH0pO1xuLy8gY29uc3Qgb2JqID0ge1xuLy8gICBuZXN0ZWRPYmo6IHtcbi8vICAgICBrZXk6ICd2YWx1ZScsXG4vLyAgICAga2V5czogWzEsIDIsIDNdLFxuLy8gICAgIGFub3RoZXJBcnJheTogWzQsIDUsIC8qIGhlcmUgZGVmYXVsdCB2YWx1ZSA2ICovXSxcbi8vICAgICBvYmo6IHtcbi8vICAgICAgIGR1ZGU6ICdsb3JlbScsXG4vLyAgICAgICB2YWx1ZTogWzcsOCw5XSAvLyBzYXZlIGFzIGFycmF5XG4vLyAgICAgfSxcbi8vICAgICAvLyBkZWZhdWx0IHZhbHVlIGZvciB0aGUgaGVpZ2h0ID0gMTAwLCB3aWR0aCA9IDIwMCwga2V5cyA9IFsxLCAyLCAzXVxuLy8gICB9LFxuLy8gICBhcnI6IFsxLDIsM10sXG4vLyAgIGR1ZGU6IFtcbi8vICAgICBbMV0sXG4vLyAgICAgWzJdLFxuLy8gICAgIFszXVxuLy8gICBdLFxuLy8gICBmdW5jOiBmdW5jdGlvbigpIHtcbi8vICAgICBhbGVydCgyKTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIGxldCB7XG4vLyAgIG5lc3RlZE9iajoge1xuLy8gICAgIGtleSxcbi8vICAgICBrZXlzOiBba2V5MSwga2V5Miwga2V5M10sXG4vLyAgICAgYW5vdGhlckFycmF5OiBbYXJyMSwgYXJyMiwgYXJyMyA9IDZdLFxuLy8gICAgIG9iajoge1xuLy8gICAgICAgZHVkZSxcbi8vICAgICAgIHZhbHVlLFxuLy8gICAgIH0sXG4vLyAgICAgaGVpZ2h0ID0gMTAwLCB3aWR0aCA9IDIwMCxcbi8vICAgfSxcbi8vICAgYXJyOiBbYXJycjEsIGFycnIyLCBhcnJyM10sXG4vLyAgIGR1ZGU6IFtkdWRlMSwgZHVkZTIsIGR1ZGUzXSxcbi8vICAgZnVuYyxcbi8vIH0gPSBvYmo7XG4vL1xuLy8gYWxlcnQoYXJyMyk7XG4vLyBsZXQgb3B0aW9ucyA9IHtcbi8vICAgdGl0bGU6IFwi0JzQtdC90Y5cIixcbi8vICAgd2lkdGg6IDEwMCxcbi8vICAgaGVpZ2h0OiAyMDBcbi8vIH07XG4vL1xuLy8gbGV0IHt0aXRsZSwgd2lkdGgsIGhlaWdodH0gPSBvcHRpb25zO1xuLy9cbi8vIC8vbGV0IHRpdGxlID0gb3B0aW9ucy50aXRsZTtcbi8vIC8vbGV0IHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbi8vIC8vbGV0IGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuLy9cbi8vIGFsZXJ0KHRpdGxlKTsgIC8vINCc0LXQvdGOXG4vLyBhbGVydCh3aWR0aCk7ICAvLyAxMDBcbi8vIGFsZXJ0KGhlaWdodCk7IC8vIDIwMFxuLy8gdmFyIGhlYWQgPSB7XG4vLyAgIGdsYXNzZXM6IDFcbi8vIH07XG4vL1xuLy8gdmFyIHRhYmxlID0ge1xuLy8gICBwZW46IDMsXG4vLyAgIF9fcHJvdG9fXzogaGVhZFxuLy8gfTtcbi8vXG4vLyB2YXIgYmVkID0ge1xuLy8gICBzaGVldDogMSxcbi8vICAgcGlsbG93OiAyLFxuLy8gICBfX3Byb3RvX186IHRhYmxlXG4vLyB9O1xuLy9cbi8vIHZhciBwb2NrZXRzID0ge1xuLy8gICBtb25leTogMjAwMCxcbi8vICAgX19wcm90b19fOiBiZWRcbi8vIH07XG4vL1xuLy8gY29uc29sZS5sb2cocG9ja2V0cy5wZW4pO1xuLy8gdmFyIGxlYWRlciA9IHtcbi8vICAgbmFtZTogXCLQktCw0YHQuNC70LjQuSDQmNCy0LDQvdC+0LLQuNGHXCIsXG4vLyAgIGFnZTogMzVcbi8vIH07XG4vL1xuLy8gdmFyIHN0ciA9IEpTT04uc3RyaW5naWZ5KGxlYWRlcik7XG4vLyBjb25zb2xlLmxvZyhzdHIpO1xuLy9cbi8vIGxlYWRlciA9IEpTT04ucGFyc2Uoc3RyKTtcbi8vIGNvbnNvbGUubG9nKGxlYWRlcik7XG4vLyB2YXIgdXNlciA9IHtcbi8vICAgbmFtZTogXCLQktCw0YHRj1wiLFxuLy8gICBhZ2U6IDI1LFxuLy8gICByb2xlczoge1xuLy8gICAgIGlzQWRtaW46IGZhbHNlLFxuLy8gICAgIGlzRWRpdG9yOiB0cnVlXG4vLyAgIH1cbi8vIH07XG4vL1xuLy8gdmFyIHN0ciA9IEpTT04uc3RyaW5naWZ5KHVzZXIsIFwiXCIsIDQpO1xuLy9cbi8vIGFsZXJ0KCBzdHIgKTtcblxuLyog0KDQtdC30YPQu9GM0YLQsNGCIC0tINC60YDQsNGB0LjQstC+INGB0LXRgNC40LDQu9C40LfQvtCy0LDQvdC90YvQuSDQvtCx0YrQtdC60YI6XG57XG4gICAgXCJuYW1lXCI6IFwi0JLQsNGB0Y9cIixcbiAgICBcImFnZVwiOiAyNSxcbiAgICBcInJvbGVzXCI6IHtcbiAgICAgICAgXCJpc0FkbWluXCI6IGZhbHNlLFxuICAgICAgICBcImlzRWRpdG9yXCI6IHRydWVcbiAgICB9XG59XG4qL1xuLy8g0LTQsNGC0LAg0LIg0YHRgtGA0L7QutC1IC0g0LIg0YTQvtGA0LzQsNGC0LUgVVRDXG4vLyB2YXIgc3RyID0gJ3tcInRpdGxlXCI6XCLQmtC+0L3RhNC10YDQtdC90YbQuNGPXCIsXCJkYXRlXCI6XCIyMDE0LTExLTMwVDEyOjAwOjAwLjAwMFpcIn0nO1xuLy9cbi8vIHZhciBldmVudCA9IEpTT04ucGFyc2Uoc3RyLCAoa2V5LCB2YWx1ZSkgPT4ge1xuLy8gICBpZiAoa2V5ID09ICdkYXRlJykgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbi8vICAgcmV0dXJuIHZhbHVlO1xuLy8gfSk7XG4vL1xuLy8gYWxlcnQoIGV2ZW50LmRhdGUuZ2V0RGF0ZSgpICk7IC8vINGC0LXQv9C10YDRjCDRgdGA0LDQsdC+0YLQsNC10YIhXG4vL9CU0LXQu9C+INCyINGC0L7QvCwg0YfRgtC+INC30L3QsNGH0LXQvdC40LXQvCBldmVudC5kYXRlINGP0LLQu9GP0LXRgtGB0Y8g0YHRgtGA0L7QutCwLCDQsCDQvtGC0L3RjtC00Ywg0L3QtSDQvtCx0YrQtdC60YIgRGF0ZS5cbi8v0J7RgtC60YPQtNCwINC80LXRgtC+0LTRgyBKU09OLnBhcnNlINC30L3QsNGC0YwsINGH0YLQviDQvdGD0LbQvdC+INC/0YDQtdCy0YDQsNGC0LjRgtGMINGB0YLRgNC+0LrRgyDQuNC80LXQvdC90L4g0LIg0LTQsNGC0YM/XG4vL9CU0LvRjyDQuNC90YLQtdC70LvQtdC60YLRg9Cw0LvRjNC90L7Qs9C+INCy0L7RgdGB0YLQsNC90L7QstC70LXQvdC40Y8g0LjQtyDRgdGC0YDQvtC60Lgg0YMgSlNPTi5wYXJzZShzdHIsIHJldml2ZXIpINC10YHRgtGMXG4vLyDQstGC0L7RgNC+0Lkg0L/QsNGA0LDQvNC10YLRgCByZXZpdmVyLCDQutC+0YLQvtGA0YvQuSDRj9Cy0LvRj9C10YLRgdGPINGE0YPQvdC60YbQuNC10LkgZnVuY3Rpb24oa2V5LCB2YWx1ZSkuXG4vL9CV0YHQu9C4INC+0L3QsCDRg9C60LDQt9Cw0L3QsCwg0YLQviDQsiDQv9GA0L7RhtC10YHRgdC1INGH0YLQtdC90LjRjyDQvtCx0YrQtdC60YLQsCDQuNC3INGB0YLRgNC+0LrQuCBKU09OLnBhcnNlINC/0LXRgNC10LTQsNGR0YJcbi8v0LXQuSDQv9C+INC+0YfQtdGA0LXQtNC4INCy0YHQtSDRgdC+0LfQtNCw0LLQsNC10LzRi9C1INC/0LDRgNGLINC60LvRjtGHLdC30L3QsNGH0LXQvdC40LUg0Lgg0LzQvtC20LXRgiDQstC+0LfQstGA0LDRgtC40YLRjCDQu9C40LHQviDQv9GA0LXQvtCx0YDQsNC30L7QstCw0L3QvdC+0LVcbi8vINC30L3QsNGH0LXQvdC40LUsINC70LjQsdC+IHVuZGVmaW5lZCwg0LXRgdC70Lgg0LXQs9C+INC90YPQttC90L4g0L/RgNC+0L/Rg9GB0YLQuNGC0YwuXG4vLyBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbi8vICAgdmFyIHR5cGUgPSB7fS50b1N0cmluZy5jYWxsKGRhdGUpLnNsaWNlKDgsIC0xKTtcbi8vICAgdmFyIHJlc3VsdDtcbi8vICAgc3dpdGNoICh0eXBlKSB7XG4vLyAgICAgY2FzZSBcIlN0cmluZ1wiOlxuLy8gICAgICAgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZSk7XG4vLyAgICAgICBicmVhaztcbi8vICAgICBjYXNlIFwiTnVtYmVyXCI6XG4vLyAgICAgICByZXN1bHQgPSBuZXcgRGF0ZShkYXRlICogMTAwMCk7IC8vINGB0YfQuNGC0LDQtdC8INCyINC80LjQu9C70LjRgdC10LrRg9C90LTQsNGFXG4vLyAgICAgICBicmVhaztcbi8vICAgICBjYXNlIFwiQXJyYXlcIjpcbi8vICAgICAgIHJlc3VsdCA9IG5ldyBEYXRlKGRhdGVbMF0sIGRhdGVbMV0sIGRhdGVbMl0pO1xuLy8gICAgICAgYnJlYWs7XG4vLyAgICAgZGVmYXVsdDpcbi8vICAgICAgIHJlc3VsdCA9IGRhdGU7XG4vLyAgIH1cbi8vICAgcmV0dXJuIHJlc3VsdC50b0xvY2FsZVN0cmluZyhcInJ1XCIsIHtcbi8vICAgICBkYXk6ICcyLWRpZ2l0Jyxcbi8vICAgICBtb250aDogJzItZGlnaXQnLFxuLy8gICAgIHllYXI6ICcyLWRpZ2l0J1xuLy8gICB9KTtcbi8vIH1cbi8vXG4vLyBjb25zb2xlLmxvZyggZm9ybWF0RGF0ZSgnMjAxMS0xMC0wMicpICk7IC8vIDAyLjEwLjExXG4vLyBjb25zb2xlLmxvZyggZm9ybWF0RGF0ZSgxMjM0NTY3ODkwKSApOyAvLyAxNC4wMi4wOSAvL9C/0YDQuNC90LjQvNCw0LXQvCDQsiDRgdC10LrRg9C90LTQsNGFXG4vLyBjb25zb2xlLmxvZyggZm9ybWF0RGF0ZShbMjAxNCwgMCwgMV0pICk7IC8vIDAxLjAxLjE0XG4vLyBjb25zb2xlLmxvZyggZm9ybWF0RGF0ZShuZXcgRGF0ZSgyMDE0LCAwLCAxKSkgKTsgLy8gMDEuMDEuMTRcbi8vIGZ1bmN0aW9uIHNheUhpKHdobykge1xuLy9cbi8vICAgaWYgKEFycmF5LmlzQXJyYXkod2hvKSkge1xuLy8gICAgIHdoby5mb3JFYWNoKHNheUhpKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBhbGVydCggJ9Cf0YDQuNCy0LXRgiwgJyArIHdobyApO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gLy8g0JLRi9C30L7QsiDRgSDQv9GA0LjQvNC40YLQuNCy0L3Ri9C8INCw0YDQs9GD0LzQtdC90YLQvtC8XG4vLyBzYXlIaShcItCS0LDRgdGPXCIpOyAvLyDQn9GA0LjQstC10YIsINCS0LDRgdGPXG4vL1xuLy8gLy8g0JLRi9C30L7QsiDRgSDQvNCw0YHRgdC40LLQvtC8XG4vLyBzYXlIaShbXCLQodCw0YjQsFwiLCBcItCf0LXRgtGPXCJdKTsgLy8g0J/RgNC40LLQtdGCLCDQodCw0YjQsC4uLiDQn9C10YLRj1xuLy9cbi8vIC8vINCS0YvQt9C+0LIg0YEg0LLQu9C+0LbQtdC90L3Ri9C80Lgg0LzQsNGB0YHQuNCy0LDQvNC4IC0g0YLQvtC20LUg0YDQsNCx0L7RgtCw0LXRgiFcbi8vIHNheUhpKFtcItCh0LDRiNCwXCIsIFwi0J/QtdGC0Y9cIiwgW1wi0JzQsNGI0LBcIiwgXCLQrtC70Y9cIl1dKTsgLy8g0J/RgNC40LLQtdGCINCh0LDRiNCwLi7Qn9C10YLRjy4u0JzQsNGI0LAuLtCu0LvRj1xuLy8gZnVuY3Rpb24gZ2V0Q2xhc3Mob2JqKSB7XG4vLyAgIHJldHVybiB7fS50b1N0cmluZy5jYWxsKG9iaikuc2xpY2UoOCwgLTEpO1xuLy8gfVxuLy9cbi8vIGFsZXJ0KCBnZXRDbGFzcyhuZXcgRGF0ZSkgKTsgLy8gRGF0ZVxuLy8gYWxlcnQoIGdldENsYXNzKFsxLCAyLCAzXSkgKTsgLy8gQXJyYXlcbi8vIHZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuLy9cbi8vIHZhciBhcnIgPSBbMSwgMl07XG4vLyBhbGVydCggdG9TdHJpbmcuY2FsbChhcnIpICk7IC8vIFtvYmplY3QgQXJyYXldXG4vL1xuLy8gdmFyIGRhdGUgPSBuZXcgRGF0ZTtcbi8vIGFsZXJ0KCB0b1N0cmluZy5jYWxsKGRhdGUpICk7IC8vIFtvYmplY3QgRGF0ZV1cbi8vXG4vLyB2YXIgdXNlciA9IHsgbmFtZTogXCLQktCw0YHRj1wiIH07XG4vLyBhbGVydCggdG9TdHJpbmcuY2FsbCh1c2VyKSApOyAvLyBbb2JqZWN0IE9iamVjdF1cbi8vIGZ1bmN0aW9uIGYoeCkge1xuLy8gICByZXR1cm4gTWF0aC5yYW5kb20oKSp4O1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIG1ha2VDYWNoaW5nKGYpIHtcbi8vICAgdmFyIGNhY2hlID0ge307XG4vL1xuLy8gICByZXR1cm4gZnVuY3Rpb24oeCkge1xuLy8gICAgIGlmICghKHggaW4gY2FjaGUpKSB7XG4vLyAgICAgICBjYWNoZVt4XSA9IGYuY2FsbCh0aGlzLCB4KTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIGNhY2hlW3hdO1xuLy8gICB9O1xuLy9cbi8vIH1cbi8vXG4vLyBmID0gbWFrZUNhY2hpbmcoZik7XG4vL1xuLy8gdmFyIGEgPSBmKDEpO1xuLy8gdmFyIGIgPSBmKDEpO1xuLy8gYWxlcnQoIGEgPT0gYiApOyAvLyB0cnVlICjQt9C90LDRh9C10L3QuNC1INC30LDQutC10YjQuNGA0L7QstCw0L3Qvilcbi8vXG4vLyBiID0gZigyKTtcbi8vIGFsZXJ0KCBhID09IGIgKTsgLy8gZmFsc2UsINC00YDRg9Cz0L7QuSDQsNGA0LPRg9C80LXQvdGCID0+INC00YDRg9Cz0L7QtSDQt9C90LDRh9C10L3QuNC1XG4vLyBmdW5jdGlvbiB3b3JrKGEsIGIpIHtcbi8vICAgcmV0dXJuIGEgKyBiO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIG1ha2VMb2dnaW5nKGYsIGxvZykge1xuLy9cbi8vICAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4vLyAgICAgbG9nLnB1c2goW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbi8vICAgICBmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyB2YXIgbG9nID0gW107XG4vLyB3b3JrID0gbWFrZUxvZ2dpbmcod29yaywgbG9nKTtcbi8vXG4vLyB3b3JrKDEsIDIpOyAvLyAzXG4vLyB3b3JrKDQsIDUpOyAvLyA5XG4vL1xuLy8gZm9yICh2YXIgaSA9IDA7IGkgPCBsb2cubGVuZ3RoOyBpKyspIHtcbi8vICAgYWxlcnQoICfQm9C+0LM6ICcgKyBsb2dbaV0gKTsgLy8gXCLQm9C+0LM6IDEsMlwiLCBcItCb0L7QszogNCw1XCJcbi8vIH1cbi8v0JTQtdC60L7RgNCw0YLQvtGAINC00LvRjyDQv9GA0L7QstC10YDQutC4INGC0LjQv9CwXG4vLyDQstGB0L/QvtC80L7Qs9Cw0YLQtdC70YzQvdCw0Y8g0YTRg9C90LrRhtC40Y8g0LTQu9GPINC/0YDQvtCy0LXRgNC60Lgg0L3QsCDRh9C40YHQu9C+XG4vLyBmdW5jdGlvbiBjaGVja051bWJlcih2YWx1ZSkge1xuLy8gICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInO1xuLy8gfVxuLy9cbi8vIC8vINC00LXQutC+0YDQsNGC0L7RgCwg0L/RgNC+0LLQtdGA0Y/RjtGJ0LjQuSDRgtC40L/RiyDQtNC70Y8gZlxuLy8gLy8g0LLRgtC+0YDQvtC5INCw0YDQs9GD0LzQtdC90YIgY2hlY2tzIC0g0LzQsNGB0YHQuNCyINGBINGE0YPQvdC60YbQuNGP0LzQuCDQtNC70Y8g0L/RgNC+0LLQtdGA0LrQuFxuLy8gZnVuY3Rpb24gdHlwZUNoZWNrKGYsIGNoZWNrcykge1xuLy8gICByZXR1cm4gZnVuY3Rpb24oKSB7XG4vLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIGlmICghY2hlY2tzW2ldKGFyZ3VtZW50c1tpXSkpIHtcbi8vICAgICAgICAgYWxlcnQoIFwi0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INGC0LjQvyDQsNGA0LPRg9C80LXQvdGC0LA6ICdcIiArIGFyZ3VtZW50c1tpXSArIFwiJywg0LDRgNCz0YPQvNC10L3RgiDQtNC+0LvQttC10L0g0YHQvtC00LXRgNC20LDRgtGMINGC0L7Qu9GM0LrQviDRhtC40YTRgNGLLlwiICk7XG4vLyAgICAgICAgIHJldHVybjtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIHN1bShhLCBiKSB7XG4vLyAgIHJldHVybiBhICsgYjtcbi8vIH1cbi8vXG4vLyAvLyDQvtCx0LXRgNC90ZHQvCDQtNC10LrQvtGA0LDRgtC+0YAg0LTQu9GPINC/0YDQvtCy0LXRgNC60Lhcbi8vIHN1bSA9IHR5cGVDaGVjayhzdW0sIFtjaGVja051bWJlciwgY2hlY2tOdW1iZXJdKTsgLy8g0L7QsdCwINCw0YDQs9GD0LzQtdC90YLQsCAtINGH0LjRgdC70LBcbi8vXG4vLyAvLyDQv9C+0LvRjNC30YPQtdC80YHRjyDRhNGD0L3QutGG0LjQtdC5INC60LDQuiDQvtCx0YvRh9C90L5cbi8vIGFsZXJ0KCBzdW0oMSwgMikgKTsgLy8gMywg0LLRgdC1INGF0L7RgNC+0YjQvlxuLy9cbi8vIC8vINCwINCy0L7RgiDRgtCw0LogLSDQsdGD0LTQtdGCINC+0YjQuNCx0LrQsFxuLy8gc3VtKHRydWUsIG51bGwpOyAvLyDQvdC10LrQvtGA0YDQtdC60YLQvdGL0Lkg0LDRgNCz0YPQvNC10L3RgiDQvdC+0LzQtdGAIDBcbi8vIHN1bSgxLCBbXCJhcnJheVwiLCBcImluXCIsIFwic3VtPyE/XCJdKTsgLy8g0L3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INCw0YDQs9GD0LzQtdC90YIg0L3QvtC80LXRgCAxXG4vLyB2YXIgdGltZXJzID0ge307XG4vL1xuLy8gLy8g0L/RgNC40LHQsNCy0LjRgiDQstGA0LXQvNGPINCy0YvQv9C+0LvQvdC10L3QuNGPIGYg0Log0YLQsNC50LzQtdGA0YMgdGltZXJzW3RpbWVyXVxuLy8gZnVuY3Rpb24gdGltaW5nRGVjb3JhdG9yKGZpYiwgdGltZXIpIHtcbi8vICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuLy8gICAgIHZhciBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuLy9cbi8vICAgICB2YXIgcmVzdWx0ID0gZmliLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vICgqKVxuLy9cbi8vICAgICAvL9Ce0LHRgNCw0YLQuNC8INCy0L3QuNC80LDQvdC40LUg0L3QsCDRgdGC0YDQvtC60YMgKCopINCy0L3Rg9GC0YDQuCDQtNC10LrQvtGA0LDRgtC+0YDQsCwg0LrQvtGC0L7RgNCw0Y8g0Lgg0L7RgdGD0YnQtdGB0YLQstC70Y/QtdGCINC/0LXRgNC10LTQsNGH0YMg0LLRi9C30L7QstCwOlxuLy8gICAgIC8vINCt0YLQvtGCINC/0YDQuNGR0Lwg0L3QsNC30YvQstCw0LXRgtGB0Y8gwqvRhNC+0YDQstCw0YDQtNC40L3QsyDQstGL0LfQvtCy0LDCuyAo0L7RgiDQsNC90LPQuy4gZm9yd2FyZGluZyk6XG4vLyAgICAgLy8g0YLQtdC60YPRidC40Lkg0LrQvtC90YLQtdC60YHRgiDQuCDQsNGA0LPRg9C80LXQvdGC0Ysg0YfQtdGA0LXQtyBhcHBseSDQv9C10YDQtdC00LDRjtGC0YHRjyDQsiDRhNGD0L3QutGG0LjRjiBmLFxuLy8gICAgIC8vINGC0LDQuiDRh9GC0L4g0LjQt9C90YPRgtGA0LggZiDQstGB0ZEg0LLRi9Cz0LvRj9C00LjRgiDRgtCw0LosINC60LDQuiDQsdGL0LvQsCDQstGL0LfQstCw0L3QsCDQvtC90LAg0L3QsNC/0YDRj9C80YPRjiwg0LAg0L3QtSDQtNC10LrQvtGA0LDRgtC+0YAuXG4vL1xuLy8gICAgIGlmICghdGltZXJzW3RpbWVyXSkgdGltZXJzW3RpbWVyXSA9IDA7XG4vLyAgICAgdGltZXJzW3RpbWVyXSArPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0O1xuLy9cbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gLy8g0YTRg9C90LrRhtC40Y8g0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GA0L7QuNC30LLQvtC70YzQvdC+0LksINC90LDQv9GA0LjQvNC10YAg0YLQsNC60L7QuTpcbi8vIHZhciBmaWJvbmFjY2kgPSBmdW5jdGlvbiBmKG4pIHtcbi8vICAgcmV0dXJuIChuID4gMikgPyBmKG4gLSAxKSArIGYobiAtIDIpIDogMTtcbi8vIH1cbi8vXG4vLyAvLyDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtTog0LfQsNCy0LXRgNC90ZHQvCBmaWJvbmFjY2kg0LIg0LTQtdC60L7RgNCw0YLQvtGAXG4vLyBmaWJvbmFjY2kgPSB0aW1pbmdEZWNvcmF0b3IoZmlib25hY2NpLCBcImZpYm9cIik7XG4vL1xuLy8gLy8g0L3QtdC+0LTQvdC+0LrRgNCw0YLQvdGL0LUg0LLRi9C30L7QstGLLi4uXG4vLyBhbGVydCggZmlib25hY2NpKDEwKSApOyAvLyA1NVxuLy8gYWxlcnQoIGZpYm9uYWNjaSgyMCkgKTsgLy8gNjc2NVxuLy9cbi8vIC8vINCyINC70Y7QsdC+0Lkg0LzQvtC80LXQvdGCINC80L7QttC90L4g0L/QvtC70YPRh9C40YLRjCDQvtCx0YnQtdC1INC60L7Qu9C40YfQtdGB0YLQstC+INCy0YDQtdC80LXQvdC4INC90LAg0LLRi9C30L7QstGLXG4vLyBhbGVydCggdGltZXJzLmZpYm8gKyAn0LzRgScgKTtcbi8vIHZhciB1c2VyID0ge1xuLy8gICBuYW1lOiAn0JLQsNGB0LjQu9C40LknLFxuLy9cbi8vICAgc2F5SGk6IGZ1bmN0aW9uKCkge1xuLy8gICAgIGFsZXJ0KCB0aGlzLm5hbWUgKTtcbi8vICAgfVxuLy8gfTtcbi8vXG4vLyB2YXIgYWRtaW4gPSB1c2VyO1xuLy8gLy8gdXNlciA9IG51bGw7XG4vLyAvLyBkZWxldGUgdXNlcjsgLy/Rg9C00LDQu9GP0LXRgiDRgdCy0L7QudGB0YLQstCwINC+0LHRitC10LrRgtCwXG4vL1xuLy8gYWRtaW4uc2F5SGkoKTtcbi8vIC8vINC/0YDQuCDQvtCx0L3Rg9C70LXQvdC40LggdXNlciDQstGB0LUg0YDQsNCy0L3QviDQsdGD0LTQtdGCINCy0YvQstC+0LRcbi8vIC8vINC/0L7RgtC+0LzRgyDRh9GC0L4g0L3QsCDQvtCx0YrQtdC60YIg0L7RgdGC0LDQu9Cw0YHRjCDRgdGB0YvQu9C60LAgXCJhZG1pblBvaW50ZXJcIlxuLy9hc2sg0L/QvtC70YPRh9Cw0LXRgiDRgtC+0LvRjNC60L4g0YTRg9C90LrRhtC40Y4sINCx0LXQtyDQvtCx0YrQtdC60YLQsC3QutC+0L3RgtC10LrRgdGC0LAgKNCx0LXQtyBiaW5kKVxuLy/QmNGB0L/QvtC70YzQt9GD0LXQvCBiaW5kLCDRh9GC0L7QsdGLINC/0LXRgNC10LTQsNGC0Ywg0LIgYXNrINGE0YPQvdC60YbQuNGOINGBINGD0LbQtSDQv9GA0LjQstGP0LfQsNC90L3Ri9C8INC60L7QvdGC0LXQutGB0YLQvtC8XG4vLyBmdW5jdGlvbiBhc2socXVlc3Rpb24sIGFuc3dlciwgb2ssIGZhaWwpIHtcbi8vICAgdmFyIHJlc3VsdCA9IHByb21wdChxdWVzdGlvbiwgJycpO1xuLy8gICBpZiAocmVzdWx0LnRvTG93ZXJDYXNlKCkgPT0gYW5zd2VyLnRvTG93ZXJDYXNlKCkpIG9rKCk7XG4vLyAgIGVsc2UgZmFpbCgpO1xuLy8gfVxuLy9cbi8vIHZhciB1c2VyID0ge1xuLy8gICBsb2dpbjogJ9CS0LDRgdC40LvQuNC5Jyxcbi8vICAgcGFzc3dvcmQ6ICcxMjM0NScsXG4vL1xuLy8gICAvLyDQvNC10YLQvtC0INC00LvRjyDQstGL0LfQvtCy0LAg0LjQtyBhc2tcbi8vICAgbG9naW5Eb25lOiBmdW5jdGlvbihyZXN1bHQpIHtcbi8vICAgICBhbGVydCggdGhpcy5sb2dpbiArIChyZXN1bHQgPyAnINCy0L7RiNGR0Lsg0LIg0YHQsNC50YInIDogJyDQvtGI0LjQsdC60LAg0LLRhdC+0LTQsCcpICk7XG4vLyAgIH0sXG4vL1xuLy8gICBjaGVja1Bhc3N3b3JkOiBmdW5jdGlvbigpIHtcbi8vICAgICBhc2soXCLQktCw0Ygg0L/QsNGA0L7Qu9GMP1wiLCB0aGlzLnBhc3N3b3JkLCB0aGlzLmxvZ2luRG9uZS5iaW5kKHRoaXMsIHRydWUpLCB0aGlzLmxvZ2luRG9uZS5iaW5kKHRoaXMsIGZhbHNlKSk7XG4vLyAgIH1cbi8vIH07XG4vL1xuLy8gdmFyIHZhc3lhID0gdXNlcjtcbi8vIHVzZXIgPSBudWxsO1xuLy8gdmFzeWEuY2hlY2tQYXNzd29yZCgpO1xuLy8gLy/Qu9C+0LPQuNC9INGH0LXRgNC10Lcg0LfQsNC80YvQutCw0L3QuNC1XG4vLyBmdW5jdGlvbiBhc2socXVlc3Rpb24sIGFuc3dlciwgb2ssIGZhaWwpIHtcbi8vICAgdmFyIHJlc3VsdCA9IHByb21wdChxdWVzdGlvbiwgJycpO1xuLy8gICBpZiAocmVzdWx0LnRvTG93ZXJDYXNlKCkgPT0gYW5zd2VyLnRvTG93ZXJDYXNlKCkpIG9rKCk7XG4vLyAgIGVsc2UgZmFpbCgpO1xuLy8gfVxuLy9cbi8vIHZhciB1c2VyID0ge1xuLy8gICBsb2dpbjogJ9CS0LDRgdC40LvQuNC5Jyxcbi8vICAgcGFzc3dvcmQ6ICcxMjM0NScsXG4vL1xuLy8gICAvLyDQvNC10YLQvtC0INC00LvRjyDQstGL0LfQvtCy0LAg0LjQtyBhc2tcbi8vICAgbG9naW5Eb25lOiBmdW5jdGlvbihyZXN1bHQpIHtcbi8vICAgICBhbGVydCggdGhpcy5sb2dpbiArIChyZXN1bHQgPyAnINCy0L7RiNGR0Lsg0L3QsCDRgdCw0LnRgicgOiAnINC+0YjQuNCx0LrQsCDQstGF0L7QtNCwJykgKTtcbi8vICAgfSxcbi8vXG4vLyAgIGNoZWNrUGFzc3dvcmQ6IGZ1bmN0aW9uKCkge1xuLy8gICAgIHZhciBzZWxmID0gdGhpcztcbi8vICAgICBhc2soXCLQktCw0Ygg0L/QsNGA0L7Qu9GMP1wiLCB0aGlzLnBhc3N3b3JkLFxuLy8gICAgICAgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIHNlbGYubG9naW5Eb25lKHRydWUpO1xuLy8gICAgICAgfSxcbi8vICAgICAgIGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICBzZWxmLmxvZ2luRG9uZShmYWxzZSk7XG4vLyAgICAgICB9XG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfTtcbi8vXG4vLyB2YXIgdmFzeWEgPSB1c2VyO1xuLy8gdXNlciA9IG51bGw7XG4vLyB2YXN5YS5jaGVja1Bhc3N3b3JkKCk7XG4vLyBmdW5jdGlvbiBzdW0oYSwgYikge1xuLy8gICBpZiAoYikge1xuLy8gICAgIHJldHVybiBhICogYjtcbi8vICAgfSBlbHNlIHtcbi8vICAgICAgIHJldHVybiBmdW5jdGlvbihiKSB7XG4vLyAgICAgICAgcmV0dXJuIGEgKiBiO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuLy9cbi8vIGNvbnNvbGUubG9nKHN1bSgyKSgzKSk7XG4vLyBjb25zb2xlLmxvZyhzdW0oMiwgMykpO1xuLy8gZnVuY3Rpb24gbXVsKGEsIGIpIHtcbi8vICAgcmV0dXJuIGEgKiBiO1xuLy8gfTtcbi8vXG4vLyAvLyBmdW5jdGlvbiAoKSB7IC8vKCopXG4vLyAvLyAgICAgcmV0dXJuIG11bC5hcHBseShudWxsLCAyKTsgLy/Qv9C10YDQstGL0Lwg0LDRgNCz0YPQvNC10L3RgtC+0Lwg0L/QtdGA0LXQtNCw0LXQvCAyO1xuLy8gLy8gfVxuLy9cbi8vIC8vIGRvdWJsZSDRg9C80L3QvtC20LDQtdGCINGC0L7Qu9GM0LrQviDQvdCwINC00LLQsCAoKilcbi8vIHZhciBkb3VibGUgPSBtdWwuYmluZChudWxsLCAyKTsgLy8g0LrQvtC90YLQtdC60YHRgiDRhNC40LrRgdC40YDRg9C10LwgbnVsbCwg0L7QvSDQvdC1INC40YHQv9C+0LvRjNC30YPQtdGC0YHRj1xuLy9cbi8vIGFsZXJ0KCBkb3VibGUoMykgKTsgLy8gPSBtdWwoMiwgMykgPSA2XG4vLyBhbGVydCggZG91YmxlKDQpICk7IC8vID0gbXVsKDIsIDQpID0gOFxuLy8gYWxlcnQoIGRvdWJsZSg1KSApOyAvLyA9IG11bCgyLCA1KSA9IDEwXG4vLyB2YXIgdXNlciA9IHtcbi8vICAgZmlyc3ROYW1lOiBcItCS0LDRgdGPXCIsXG4vLyAgIHNheUhpOiBmdW5jdGlvbigpIHtcbi8vICAgICBhbGVydCggdGhpcy5maXJzdE5hbWUgKTtcbi8vICAgfVxuLy8gfTtcbi8vXG4vLyBmdW5jdGlvbiBiaW5kaW5nKCkgeyAvLyAoKilcbi8vICAgcmV0dXJuIHVzZXIuc2F5SGkuYXBwbHkodXNlciwgYXJndW1lbnRzKTtcbi8vIH07XG4vL1xuLy8gLy8gc2V0VGltZW91dCggYmluZCh1c2VyLnNheUhpLCB1c2VyKSwgMTAwMCApO1xuLy8gc2V0VGltZW91dChiaW5kaW5nLCAxMDAwKTtcbi8vIC8vc2V0VGltZW91dCh1c2VyLnNheUhpLmJpbmQodXNlciksIDEwMDApOyAvLyDQsNC90LDQu9C+0LMg0YfQtdGA0LXQtyDQstGB0YLRgNC+0LXQvdC90YvQuSDQvNC10YLQvtC0LCDQtNC+INCy0YvQt9C+0LLQsCDQt9C90LDRh9C10L3QuNC1IC0tPiAoKilcbi8vYmluZCDQvdC1INCy0YvQt9GL0LLQsNC10YIg0YTRg9C90LrRhtC40Y4uINCe0L0g0YLQvtC70YzQutC+INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCIMKr0L7QsdGR0YDRgtC60YPCuyxcbi8v0LrQvtGC0L7RgNGD0Y4g0LzRiyDQvNC+0LbQtdC8INCy0YvQt9Cy0LDRgtGMINC/0L7Qt9C20LUsINC4INC60L7RgtC+0YDQsNGPINC/0LXRgNC10LTQsNGB0YIg0LLRi9C30L7QsiDQsiDQuNGB0YXQvtC00L3Rg9GOINGE0YPQvdC60YbQuNGOLCDRgSDQv9GA0LjQstGP0LfQsNC90L3Ri9C8INC60L7QvdGC0LXQutGB0YLQvtC8LlxuLy8gZnVuY3Rpb24gc3VtKCkge1xuLy8gICByZXR1cm4gW10ucmVkdWNlLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbihhLCBiKSB7XG4vLyAgICAgcmV0dXJuIGEgKyBiO1xuLy8gICB9KTtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBtdWwoKSB7XG4vLyAgIHJldHVybiBbXS5yZWR1Y2UuY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uKGEsIGIpIHtcbi8vICAgICByZXR1cm4gYSAqIGI7XG4vLyAgIH0pO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIGFwcGx5QWxsKGZ1bmMpIHtcbi8vICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuLy8gfVxuLy9cbi8vIGFsZXJ0KCBhcHBseUFsbChzdW0sIDEsIDIsIDMpICk7IC8vIDYgIC8vZnVuYyDQstGL0L/QvtC70L3Rj9C10YLRgdGPINCyINC60L7QvdGC0LXQutGB0YLQtSBzdW0g0YEg0LDRgNCz0YPQvNC10L3RgtCw0LzQuCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4vLyBhbGVydCggYXBwbHlBbGwobXVsLCAyLCAzLCA0KSApOyAvLyAyNFxuLy8gYWxlcnQoIGFwcGx5QWxsKE1hdGgubWF4LCAyLCAtMiwgMykgKTsgLy8gM1xuLy8gYWxlcnQoIGFwcGx5QWxsKE1hdGgubWluLCAyLCAtMiwgMykgKTsgLy8gLTJcbi8vIGZ1bmN0aW9uIHN1bUFyZ3MoKSB7XG4vLyAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuLy9cbi8vICAgcmV0dXJuIGFyZ3MucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcbi8vICAgICByZXR1cm4gYSArIGI7XG4vLyAgIH0pO1xuLy8gfVxuLy9cbi8vIGFsZXJ0KCBzdW1BcmdzKDEsIDIsIDMpICk7IC8vIDYgKD0xKzIrMylcbi8vIGZ1bmN0aW9uIHN1bUFyZ3MoKSB7IC8v0LrQvtC/0LjRgNGD0LXQvCDQvNC10YLQvtC0INC40Lcg0LzQsNGB0YHQuNCy0LAgKNC/0YDQvtGB0YLQviDQstC10YDQvdC10Lwg0LrQvtC0INGE0YPQvdC60YbQuNC4IHJlZHVjZSjQstC90YPRgtGA0LXQvdC90LjQuSkpXG4vLyAgIC8vINC30LDQv9GD0YHRgtC40LwgcmVkdWNlINC40Lcg0LzQsNGB0YHQuNCy0LAg0L3QsNC/0YDRj9C80YPRjiAtLS0+IFtdLnJlZHVjZSA9PiByZWR1Y2UoIHsgTmF0aXZlIGNvZGUgfSApXG4vLyAgIHJldHVybiBbXS5yZWR1Y2UuY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uKGEsIGIpIHsgLy/Qv9C40LfQtNC40LwgcmVkdWNlINGDINC80LDRgdGB0LjQstCwINC4INCy0YvQt9GL0LLQsNC10Lwg0LIg0LrQvtC90YLQtdC60YHRgtC1IGFyZ3VtZW50cyA9IFs0LDUsNl07XG4vLyAgICAgcmV0dXJuIGEgKyBiO1xuLy8gICB9KTtcbi8vIH1cbi8vXG4vLyBhbGVydCggc3VtQXJncyg0LCA1LCA2KSApOyAvLyAxNVxuLy8gLy8g0LTQtdC70LDQtdC8INC40LcgYXJndW1lbnRzINC/0L7Qu9C90L7RhtC10L3QvdGL0Lkg0LzQsNGB0YHQuNCyISEhXG4vLyBmdW5jdGlvbiBwcmludEFyZ3MoKSB7XG4vLyAgIC8vINCy0YvQt9C+0LIgYXJyLnNsaWNlKCkg0YHQutC+0L/QuNGA0YPQtdGCINCy0YHQtSDRjdC70LXQvNC10L3RgtGLINC40LcgdGhpcyDQsiDQvdC+0LLRi9C5INC80LDRgdGB0LjQslxuLy8gICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbi8vICAgYWxlcnQoIGFyZ3Muam9pbignLCAnKSApOyAvLyBhcmdzIC0g0L/QvtC70L3QvtGG0LXQvdC90YvQuSDQvNCw0YHRgdC40LIg0LjQtyDQsNGA0LPRg9C80LXQvdGC0L7QslxuLy8gfVxuLy9cbi8vIHByaW50QXJncygn0J/RgNC40LLQtdGCJywgJ9C80L7QuScsICfQvNC40YAnKTsgLy8g0J/RgNC40LLQtdGCLCDQvNC+0LksINC80LjRgFxuLy8gZnVuY3Rpb24gcHJpbnRBcmdzKCkge1xuLy8gICB2YXIgam9pbiA9IFtdLmpvaW47IC8vINGB0LrQvtC/0LjRgNGD0LXQvCDRgdGB0YvQu9C60YMg0L3QsCDRhNGD0L3QutGG0LjRjiDQsiDQv9C10YDQtdC80LXQvdC90YPRjlxuLy9cbi8vICAgLy8g0LLRi9C30L7QstC10Lwgam9pbiDRgSB0aGlzPWFyZ3VtZW50cyxcbi8vICAgLy8g0Y3RgtC+0YIg0LLRi9C30L7QsiDRjdC60LLQuNCy0LDQu9C10L3RgtC10L0gYXJndW1lbnRzLmpvaW4oJzonKSDQuNC3INC/0YDQuNC80LXRgNCwINCy0YvRiNC1XG4vLyAgIHZhciBhcmdTdHIgPSBqb2luLmNhbGwoYXJndW1lbnRzLCAnOicpO1xuLy9cbi8vICAgYWxlcnQoIGFyZ1N0ciApOyAvLyDRgdGA0LDQsdC+0YLQsNC10YIg0Lgg0LLRi9Cy0LXQtNC10YIgMToyOjNcbi8vIH1cbi8vXG4vLyBwcmludEFyZ3MoMSwgMiwgMyk7XG4vL9C60L7Qv9C40YDRg9C10Lwg0LzQtdGC0L7QtCBqb2luINGDINC80LDRgdGB0LjQstCwXG4vLyBmdW5jdGlvbiBwcmludEFyZ3MoKSB7XG4vLyAgIGFyZ3VtZW50cy5qb2luID0gW10uam9pbjsgLy8g0L7QtNC+0LvQttC40LvQuCDQvNC10YLQvtC0ICgxKVxuLy9cbi8vICAgdmFyIGFyZ1N0ciA9IGFyZ3VtZW50cy5qb2luKCc6Jyk7IC8vICgyKVxuLy9cbi8vICAgYWxlcnQoIGFyZ1N0ciApOyAvLyDRgdGA0LDQsdC+0YLQsNC10YIg0Lgg0LLRi9Cy0LXQtNC10YIgMToyOjNcbi8vIH1cbi8vXG4vLyBwcmludEFyZ3MoMSwgMiwgMyk7XG4vL9Cf0L7QtNGB0YfRkdGCINC+0LHRidC10LPQviDQutC+0LvQuNGH0LXRgdGC0LLQsCDRgdC+0LfQtNCw0L3QvdGL0YUg0L7QsdGK0LXQutGC0L7Qsi5cbi8v0JfQsNC/0L7QvNC40L3QsNC90LjQtSDQtNCw0YLRiyDQv9C+0YHQu9C10LTQvdC10LPQviDRgdC+0LfQtNCw0L3QvdC+0LPQviDQvtCx0YrQtdC60YLQsC5cbi8vIGZ1bmN0aW9uIEFydGljbGUoKSB7XG4vLyAgIHRoaXMuY3JlYXRlZCA9IG5ldyBEYXRlKCk7IC8vdGhpcyAtINGN0YLQviDQvdC+0LLRi9C5INC+0LHRitC10LrRgiDQv9GA0Lgg0LrQvtC90YHRgtGA0YPQuNGA0L7QstCw0L3QuNC4INGH0LXRgNC10LcgbmV3IEFydGljbGUoKTtcbi8vXG4vLyAgIEFydGljbGUuY291bnQrKztcbi8vICAgQXJ0aWNsZS5sYXN0ID0gdGhpcy5jcmVhdGVkO1xuLy8gICAvL9Ch0L7Qt9C00LDQtdC8INGB0YLQsNGC0LjRh9C10YHQutC+0LUg0YHQstC+0LnRgdGC0LLQvi4g0K3RgtC+INGB0LLQvtC50YHRgtCy0L4g0L3QtSDQv9C10YDQtdC00LDQtdGC0YHRjyDQsiDQvdC+0LLRi9C5INC+0LHRitC10LrRgixcbi8vICAgLy/RgdC+0LfQtNCw0L3QvdGL0Lkg0YfQtdGA0LXQtyDQvdCw0Ygg0LrQvtC90YHRgtGA0YPQutGC0L7RgC4g0J7QvdC+INGE0LjQutGB0LjRgNGD0LXRgtGB0Y8g0LIg0YHQsNC80L7QuSDRhNGD0L3QutGG0LjQuCDQtNC70Y8g0LfQsNC/0L7QvNC40L3QsNC90LjRjyDQtNCw0YLRiyDQvdC+0LLQvtCz0L4g0L7QsdGK0LXQutGC0LAuXG4vLyAgIC8v0KHQvNGL0YHQuyDQsiDRgtC+0LwsINGH0YLQviDRgdGC0LDRgtC40YfQtdGB0LrQuNC1INC80LXRgtC+0LTRiyDQvdC1INGD0YfQsNGB0YLQstGD0Y7RgiDQsiDRhNC+0YDQvNC40YDQvtCy0LDQvdC40Lgg0L3QvtCy0L7Qs9C+INC+0LHRitC10LrRgtCwINGH0LXRgNC10Lcg0LrQvtC90YHRgtGA0YPQutGC0L7RgCwg0LBcbi8vICAgLy/Qv9GA0LjQvNC10L3Rj9GO0YLRgdGPINC00LvRjyDQstGB0LXRhSwg0YLQuNC/0LjQt9C40YDQvtCy0LDQvdC90YvRhSDRh9C10YDQtdC3INC60L7QvdGB0YLRgNGD0LrRgtC+0YAg0L7QsdGK0LXQutGC0L7Qsi5cbi8vXG4vLyAgIC8v0JzRiyDQv9GA0L7RgdGC0L4g0L/QtdGA0LXQvtC/0YDQtdC00LXQu9GP0LXQvCDRgdCy0L7QudGB0YLQstC+IFwidGhpcy5jcmVhdGVkXCIg0LIgXCJ0aGlzLmxhc3RcIi5cbi8vICAgLy/QntC90L4g0L/QtdGA0LXQtNCw0LXRgtGB0Y8g0LIg0L3QvtCy0YvQuSDQvtCx0YrQtdC60YIsINC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMLCDQutCw0Log0YHRgtCw0YLQuNGH0LXRgdC60LjQuSDQvNC10YLQvtC0INC80Ysg0LXQs9C+INC90LUg0LzQvtC20LXQvC5cbi8vIH1cbi8vXG4vLyBBcnRpY2xlLmNvdW50ID0gMDtcbi8vXG4vLyBBcnRpY2xlLnNob3dTdGF0cyA9IGZ1bmN0aW9uKCkge1xuLy8gICBhbGVydCggJ9CS0YHQtdCz0L46ICcgKyB0aGlzLmNvdW50ICsgJywg0J/QvtGB0LvQtdC00L3Rj9GPOiAnICsgdGhpcy5sYXN0ICk7XG4vLyB9O1xuLy9cbi8vIG5ldyBBcnRpY2xlKCk7XG4vLyBuZXcgQXJ0aWNsZSgpO1xuLy9cbi8vIEFydGljbGUuc2hvd1N0YXRzKCk7IC8vINCS0YHQtdCz0L46IDIsINCf0L7RgdC70LXQtNC90Y/RjzogKNC00LDRgtCwKVxuLy9cbi8vIG5ldyBBcnRpY2xlKCk7XG4vL1xuLy8gQXJ0aWNsZS5zaG93U3RhdHMoKTsgLy8g0JLRgdC10LPQvjogMywg0J/QvtGB0LvQtdC00L3Rj9GPOiAo0LTQsNGC0LApXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL9GB0LLQvtC50YHRgtCy0L4gY291bnQg0L7RgtC90L7RgdC40YLRgdGPINC6INGB0LDQvNC+0Lkg0YTRg9C90LrRhtC40Lgt0LrQvtC90YHRgtGA0YPQutGC0L7RgNGDIEFydGljbGUsINGCLtC1INGE0LDQutGC0LjRh9C10YHQutC4INGP0LLQu9GP0LXRgtGB0Y8g0YHQstC+0LnRgdGC0LLQvtC8IEFydGljbGUsXG4vL9CwINCy0L7RgiDRgdCy0L7QudGB0YLQstC+IGNyZWF0ZWQg0L7RgtC90L7RgdC40YLRgdGPINC6INC60LDQutC+0LzRgy3Qu9C40LHQviDQvtCx0YrQtdC60YLRgywg0YHQvtC30LTQsNC90L3QvtC80YMg0YEg0L/QvtC80L7RidGM0Y4gbmV3IEFydGljbGUoKS5cbi8v0J3QsNC/0YDQuNC80LXRgCDQv9C+0YHQu9C1INCy0YvQv9C+0LvQvdC10L3QuNGPINC60L7QtNCwXG4vL3ZhciBzb21lQXJ0aWNsZSA9IG5ldyBBcnRpY2xlKCk7XG4vL9CyIHNvbWVBcnRpY2xlINCx0YPQtNC10YIg0YHQstC+0LnRgdGC0LLQviBjcmVhdGVkLCDQsCDQsiDRgdCw0LzQvtC5INGE0YPQvdC60YbQuNC4IEFydGljbGUg0LHRg9C00LXRgiDRgdCy0L7QudGB0YLQstC+IGNvdW50KNGE0YPQvdC60YbQuNC4INGN0YLQviDRgNCw0LfQvdC+0LLQuNC00L3QvtGB0YLRjCDQvtCx0YrQtdC60YLQvtCyKNC90L4g0L3QtSDQvdCw0L7QsdC+0YDQvtGCKSkuXG4vL9Ci0L4g0YfQtdC80YMg0YDQsNCy0LXQvSB0aGlzINC30LDQstC40YHQuNGCINC+0YIg0YLQvtCz0L4g0LPQtNC1INC+0L0g0LjRgdC/0L7Qu9GM0LfRg9C10YLRgdGPXG4vL3RoaXMuY3JlYXRlZCDQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y8g0LIg0LrQvtC00LUg0YTRg9C90LrRhtC40Lgt0LrQvtC90YHRgtGA0YPQutGC0L7RgNCwIEFydGljbGUsINC/0L7RjdGC0L7QvNGDIHRoaXMg0LIg0L3RkdC8IC0g0Y3RgtC+INGB0YHRi9C70LrQsCDQvdCwINGB0L7Qt9C00LDQstCw0LXQvNGL0Lkg0YEg0L/QvtC80L7RidGM0Y4g0Y3RgtC+0LPQviDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LAg0L7QsdGK0LXQutGCLlxuLy/QkCDQtdGB0LvQuCDRgtGD0YIg0LbQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwgdGhpcy5jb3VudCwg0YLQviDRhNGD0L3QutGG0LjRjyDQsdGD0LTQtdGCINC40YHQutCw0YLRjCDRjdGC0L4g0YHQstC+0LnRgdGC0LLQviDQsiDRgdC+0LfQtNCw0LLQsNC10LzQvtC8INC+0LHRitC10LrRgtC1LCDRh9GC0L4g0LHQtdGB0YHQvNGL0YHQu9C10L3QvdC+LlxuLy/QkCDQstC+0YIg0LIg0LrQvtC00LUg0LzQtdGC0L7QtNCwIEFydGljbGUuc2hvd1N0YXRzKCkgdGhpcyDRj9Cy0LvRj9C10YLRgdGPINGB0YHRi9C70LrQvtC5INC90LAg0YHQsNC8IEFydGljbGU7XG4vL3RoaXMuY291bnQg0Y3RgtC+0YIg0LrQvtC0INC90LDQudC00ZHRgiwg0LAg0LLQvtGCIHRoaXMuY3JlYXRlZCAtINC90LXRgiwg0LLQtdC00Ywg0LIgQXJ0aWNsZSDQvdC10YIg0YHQstC+0LnRgdGC0LLQsCBjcmVhdGVkLlxuLy/QldGB0LvQuCDQv9C+0LTRi9GC0L7QttC40YLRjCwg0YLQviDQtNCw0L3QvdGL0Lkg0LrQvtC0INC90LUg0YDQsNCx0L7RgtCw0LXRgiwg0YIu0LouIGNvdW50INC4IGNyZWF0ZWQg0Y/QstC70Y/RjtGC0YHRjyDRgdCy0L7QudGB0YLQstCw0LzQuCDRgNCw0LfQvdGL0YUg0L7QsdGK0LXQutGC0L7QslxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gZnVuY3Rpb24gVXNlcih1c2VyRGF0YSkge1xuLy8gICBpZiAodXNlckRhdGEpIHsgLy8g0LXRgdC70Lgg0YPQutCw0LfQsNC90Ysg0LTQsNC90L3Ri9C1IC0tINC+0LTQvdCwINCy0LXRgtC60LAgaWZcbi8vICAgICB0aGlzLm5hbWUgPSB1c2VyRGF0YS5uYW1lO1xuLy8gICAgIHRoaXMuYWdlID0gdXNlckRhdGEuYWdlO1xuLy8gICB9IGVsc2UgeyAvLyDQtdGB0LvQuCDQvdC1INGD0LrQsNC30LDQvdGLIC0tINC00YDRg9Cz0LDRj1xuLy8gICAgIHRoaXMubmFtZSA9ICfQkNC90L7QvdC40LwnO1xuLy8gICB9XG4vL1xuLy8gICB0aGlzLnNheUhpID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgYWxlcnQodGhpcy5uYW1lKVxuLy8gICB9O1xuLy8gICAvLyAuLi5cbi8vIH1cbi8vXG4vLyAvLyDQmNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtVxuLy9cbi8vIHZhciBndWVzdCA9IG5ldyBVc2VyKCk7XG4vLyBndWVzdC5zYXlIaSgpOyAvLyDQkNC90L7QvdC40Lxcbi8vXG4vLyB2YXIga25vd25Vc2VyID0gbmV3IFVzZXIoe1xuLy8gICBuYW1lOiAn0JLQsNGB0Y8nLFxuLy8gICBhZ2U6IDI1XG4vLyB9KTtcbi8vIGtub3duVXNlci5zYXlIaSgpOyAvLyDQktCw0YHRj1xuLy8gLy9cItCk0LDQsdGA0LjRh9C90YvQuSDRgdGC0LDRgtC40YfQtdGB0LrQuNC5INC80LXRgtC+0LRcIlxuLy8gLy/QotCw0Log0L3QsNC30YvQstCw0LXRgtGB0Y8g0YHRgtCw0YLQuNGH0LXRgdC60LjQuSDQvNC10YLQvtC0LCDQutC+0YLQvtGA0YvQuSDRgdC70YPQttC40YIg0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0L3QvtCy0YvRhSDQvtCx0YrQtdC60YLQvtCyICjQv9C+0Y3RgtC+0LzRgyDQuCDQvdCw0LfRi9Cy0LDQtdGC0YHRjyDCq9GE0LDQsdGA0LjRh9C90YvQvMK7KS5cbi8vIGZ1bmN0aW9uIFVzZXIoKSB7XG4vLyAgIHRoaXMuc2F5SGkgPSBmdW5jdGlvbigpIHtcbi8vICAgICBhbGVydCh0aGlzLm5hbWUpXG4vLyAgIH07XG4vLyB9XG4vL1xuLy8gVXNlci5jcmVhdGVBbm9ueW1vdXMgPSBmdW5jdGlvbigpIHtcbi8vICAgdmFyIHVzZXIgPSBuZXcgVXNlcjtcbi8vICAgdXNlci5uYW1lID0gJ9CQ0L3QvtC90LjQvCc7XG4vLyAgIHJldHVybiB1c2VyO1xuLy8gfVxuLy9cbi8vIFVzZXIuY3JlYXRlRnJvbURhdGEgPSBmdW5jdGlvbih1c2VyRGF0YSkge1xuLy8gICB2YXIgdXNlciA9IG5ldyBVc2VyO1xuLy8gICB1c2VyLm5hbWUgPSB1c2VyRGF0YS5uYW1lO1xuLy8gICB1c2VyLmFnZSA9IHVzZXJEYXRhLmFnZTtcbi8vICAgcmV0dXJuIHVzZXI7XG4vLyB9XG4vL1xuLy8gLy8g0JjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LVcbi8vXG4vLyB2YXIgZ3Vlc3QgPSBVc2VyLmNyZWF0ZUFub255bW91cygpO1xuLy8gZ3Vlc3Quc2F5SGkoKTsgLy8g0JDQvdC+0L3QuNC8XG4vL1xuLy8gdmFyIGtub3duVXNlciA9IFVzZXIuY3JlYXRlRnJvbURhdGEoe1xuLy8gICBuYW1lOiAn0JLQsNGB0Y8nLFxuLy8gICBhZ2U6IDI1XG4vLyB9KTtcbi8vIGtub3duVXNlci5zYXlIaSgpOyAvLyDQktCw0YHRj1xuLy8gLy/Qv9C+0LjRgdC6INGB0LDQvNC+0LPQviDQv9C+0LfQtNC90LXQs9C+INC20YPRgNC90LDQu9CwINC40Lcg0LzQsNGB0YHQuNCy0LBcbi8vIGZ1bmN0aW9uIEpvdXJuYWwoZGF0ZSkge1xuLy8gICB0aGlzLmRhdGUgPSBkYXRlO1xuLy9cbi8vICAgdGhpcy5mb3JtYXREYXRlID0gZnVuY3Rpb24oZGF0ZSkge1xuLy8gICAgIHJldHVybiBkYXRlLmdldERhdGUoKSArICcuJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSArICcuJyArIGRhdGUuZ2V0RnVsbFllYXIoKTtcbi8vICAgfTtcbi8vXG4vLyAgIHRoaXMuZ2V0VGl0bGUgPSBmdW5jdGlvbigpIHtcbi8vICAgICByZXR1cm4gXCLQktGL0L/Rg9GB0Log0L7RgiBcIiArIHRoaXMuZm9ybWF0RGF0ZSh0aGlzLmRhdGUpO1xuLy8gICB9O1xuLy9cbi8vIH1cbi8vXG4vLyBKb3VybmFsLmNvbXBhcmUgPSBmdW5jdGlvbihqb3VybmFsQSwgam91cm5hbEIpIHtcbi8vICAgcmV0dXJuIGpvdXJuYWxBLmRhdGUgLSBqb3VybmFsQi5kYXRlO1xuLy8gfTtcbi8vXG4vLyAvLyDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtTpcbi8vIHZhciBqb3VybmFscyA9IFtcbi8vICAgbmV3IEpvdXJuYWwobmV3IERhdGUoMjAxMywgMSwgMSkpLFxuLy8gICBuZXcgSm91cm5hbChuZXcgRGF0ZSgyMDEyLCAxLCAxKSksXG4vLyAgIG5ldyBKb3VybmFsKG5ldyBEYXRlKDIwMTEsIDAsIDEpKSxcbi8vICAgbmV3IEpvdXJuYWwobmV3IERhdGUoMjAwOSwgMCwgMSkpLFxuLy8gICBuZXcgSm91cm5hbChuZXcgRGF0ZSgyMDE4LCAwLCAxKSksXG4vLyAgIG5ldyBKb3VybmFsKG5ldyBEYXRlKDIwMTQsIDAsIDEpKVxuLy8gXTtcbi8vXG4vL1xuLy8gZnVuY3Rpb24gZmluZE1heChqb3VybmFscykge1xuLy8gICB2YXIgbWF4ID0gMDtcbi8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBqb3VybmFscy5sZW5ndGg7IGkrKykge1xuLy8gICAgIC8vINC40YHQv9C+0LvRjNC30YPQtdC8INGB0YLQsNGC0LjRh9C10YHQutC40Lkg0LzQtdGC0L7QtFxuLy8gICAgIGlmIChKb3VybmFsLmNvbXBhcmUoam91cm5hbHNbaV0sIGpvdXJuYWxzW21heF0pID4gMCkgbWF4ID0gaTtcbi8vICAgfVxuLy8gICByZXR1cm4gam91cm5hbHNbbWF4XTtcbi8vIH1cbi8vXG4vLyBhbGVydCggZmluZE1pbihqb3VybmFscykuZ2V0VGl0bGUoKSApO1xuLy8gZnVuY3Rpb24gVXNlcihmdWxsTmFtZSkge1xuLy8gICB0aGlzLmZ1bGxOYW1lID0gZnVsbE5hbWU7XG4vL1xuLy8gICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4vLyAgICAgZmlyc3ROYW1lOiB7XG4vL1xuLy8gICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuZnVsbE5hbWUuc3BsaXQoJyAnKVswXTtcbi8vICAgICAgIH0sXG4vL1xuLy8gICAgICAgc2V0OiBmdW5jdGlvbihuZXdGaXJzdE5hbWUpIHtcbi8vICAgICAgICAgdGhpcy5mdWxsTmFtZSA9IG5ld0ZpcnN0TmFtZSArICcgJyArIHRoaXMubGFzdE5hbWU7XG4vLyAgICAgICB9XG4vL1xuLy8gICAgIH0sXG4vL1xuLy8gICAgIGxhc3ROYW1lOiB7XG4vL1xuLy8gICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuZnVsbE5hbWUuc3BsaXQoJyAnKVsxXTtcbi8vICAgICAgIH0sXG4vL1xuLy8gICAgICAgc2V0OiBmdW5jdGlvbihuZXdMYXN0TmFtZSkge1xuLy8gICAgICAgICB0aGlzLmZ1bGxOYW1lID0gdGhpcy5maXJzdE5hbWUgKyAnICcgKyBuZXdMYXN0TmFtZTtcbi8vICAgICAgIH1cbi8vXG4vLyAgICAgfVxuLy9cbi8vICAgfSk7XG4vLyB9XG4vL1xuLy8gdmFyIHZhc3lhID0gbmV3IFVzZXIoXCLQktCw0YHQuNC70LjQuSDQn9C+0L/QutC40L1cIik7XG4vL1xuLy8gLy8g0YfRgtC10L3QuNC1IGZpcnN0TmFtZS9sYXN0TmFtZVxuLy8gYWxlcnQoIHZhc3lhLmZpcnN0TmFtZSApOyAvLyDQktCw0YHQuNC70LjQuVxuLy8gYWxlcnQoIHZhc3lhLmxhc3ROYW1lICk7IC8vINCf0L7Qv9C60LjQvVxuLy9cbi8vIC8vINC30LDQv9C40YHRjCDQsiBsYXN0TmFtZVxuLy8gdmFzeWEubGFzdE5hbWUgPSAn0KHQuNC00L7RgNC+0LInO1xuLy9cbi8vIGFsZXJ0KCB2YXN5YS5mdWxsTmFtZSApOyAvLyDQktCw0YHQuNC70LjQuSDQodC40LTQvtGA0L7QslxuLy8gZnVuY3Rpb24gQ2FsY3VsYXRvciggc3RyICkge1xuLy8gLy8g0KHQvtC30LTQsNC10Lwg0L7QsdGK0LXQutGCINCyINC70L7QutCw0LvRjNC90L7QuSDQvtCx0LvQsNGB0YLQuCDQstC40LTQuNC80L7RgdGC0Lhcbi8vIC8vINCV0LPQviDQvNC+0LbQvdC+INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQsiDRhNGD0L3QutGG0LjQuCwg0L3QviDQvtGCINCy0L3QtdGI0L3QtdCz0L4g0LTQvtGB0YLRg9C/0LAg0L7QvSDRgdC60YDRi9GCXG4vLyAgdmFyIG1ldGhvZHMgPSB7XG4vLyAgICAnKyc6IGZ1bmN0aW9uKCBhLCBiICkge1xuLy8gLy8g0JIg0YHQstC+0LnRgdGC0LLQtSDQvtCx0YrQtdC60YLQsCAtINC80LXRgtC+0LQsINGCLtC1LCDRhNGD0L3QutGG0LjRjy4g0JjQvNGPINC80LXRgtC+0LTQsCAtINC+0L/QtdGA0LDRgtC+0YAgKCDQv9C+0LrQsCDRgtC+0LvRjNC60L4gKyDQuCAtIClcbi8vIC8vICcrJyDQuCAnLScgLSDQvtCx0YvRh9C90YvQtSDQvdCw0LfQstCw0L3QuNGPINC80LXRgtC+0LTQsCwg0YLQsNC60LjQtSDQttC1LCDQutCw0LosINC90LDQv9GA0LjQvNC10YAgbmFtZVxuLy8gICAgICByZXR1cm4gYSArIGI7XG4vLyAgICB9LFxuLy8gICAgJy0nOiBmdW5jdGlvbiAoIGEsIGIgKSB7XG4vLyAgICAgIHJldHVybiBhIC0gYjtcbi8vICAgIH1cbi8vICB9O1xuLy8gIHRoaXMuY2FsY3VsYXRlID0gZnVuY3Rpb24oIHN0ciApIHtcbi8vIC8vINCX0LTQtdGB0YwgLSDQvNC10YLQvtC0INGH0LXRgNC10LcgdGhpcywg0L7QvSDQsdGD0LTQtdGCINCy0YvRhdC+0LTQuNGC0Ywg0LIg0LPQu9C+0LHQsNC70YzQvdGD0Y4g0L7QsdC70LDRgdGC0Yxcbi8vICAgIHZhciBzcGxpdCA9IHN0ci5zcGxpdCggJyAnICk7XG4vLyAgICAvLyDQpNGD0L3QutGG0LjRjyDQuNGB0L/QvtC70YzQt9GD0LXRgiDRgdGC0YDQvtC60YMgXCIyICoqIDNcIiDQtNC70Y8g0L/RgNC10L7QsdGA0LDQt9C+0LLQsNC90LjRjyDQsiDQvNCw0YHRgdC40LI6IHNwbGl0ID0gWyAnMicsICcqKicsICczJyBdXG4vLyAgICB2YXIgYSA9ICtzcGxpdFswXTtcbi8vIC8vINCf0LXRgNCy0YvQuSDRjdC70LXQvNC10L3RgiDQvNCw0YHRgdC40LLQsC4g0JfQvdCw0Log0L/Qu9GO0YEgLSDQv9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNC1INC6INGH0LjRgdC70YNcbi8vICAgIHZhciBvcCA9IHNwbGl0WzFdO1xuLy8gLy8g0JLRgtC+0YDQvtC5INGN0LvQtdC80LXQvdGCINCx0LXQtyDQv9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNGPINC6INGH0LjRgdC70YMuINCa0LDQuiDQtdGB0YLRjDogJyoqJ1xuLy8gICAgdmFyIGIgPSArc3BsaXRbMl07XG4vLyAvLyDQkNC90LDQu9C+0LPQuNGH0L3QviDQv9C10YDQstC+0LzRgy5cbi8vIC8vINCi0LXQv9C10YDRjCBhID0gMiwgb3AgPSAnKionLCBiID0gM1xuLy9cbi8vICAgIGlmICggIW1ldGhvZHNbb3BdIHx8IGlzTmFOKCBhICkgfHwgaXNOYU4oIGIgKSApIHtcbi8vIC8vINCf0YDQvtCy0LXRgNC60LAg0L3QsCDQvtGI0LjQsdC60Lhcbi8vIC8vICFtZXRob2RzW29wXSAtINC10YHQu9C4INCy0YLQvtGA0L7QuSDRjdC70LXQvNC10L3RgiDQvtGC0YHRg9GC0YHRgtCy0YPQtdGCXG4vLyAvLyDQuNC70Lgg0L/QtdGA0LLRi9C5INC40LvQuCDRgtGA0LXRgtC40Lkg0L/RgNC+0YXQvtC00Y/RgiDQv9GA0L7QstC10YDQutGDINC90LAgTmFOIGMg0YDQtdC30YPQu9GM0YLQsNGC0L7QvCB0cnVlLi4uXG4vLyAgICAgIHJldHVybiBOYU47XG4vLyAvLyDQstC10YDQvdGD0YLRjCBOYU4sINC10YHQu9C4INGD0YHQu9C+0LLQuNC1INCy0YvRiNC1INCy0YvQv9C+0LvQvdGP0LXRgtGB0Y9cbi8vICAgIH1cbi8vXG4vLyAgICByZXR1cm4gbWV0aG9kc1tvcF0oIGEsIGIgKTtcbi8vICAgIC8vINCS0L7Qt9Cy0YDQsNGJ0LDQtdC8INC80LXRgtC+0LQgbWV0aG9kc1tvcF0uINCSINC90LDRiNC10Lwg0YHQu9GD0YfQsNC1INGN0YLQviBtZXRob2RzWycqKiddXG4vLyAgICAvLyDQn9GA0Lgg0L7QsdGA0LDRidC10L3QuNC4INC6INC90LXQvNGDLCDQvtC9INC30LDQv9GD0YHQutCw0LXRgiDRhNGD0L3QutGG0LjRjiBmdW5jdGlvbigyLCAzKSB7XG4vLyAgICAvLyByZXR1cm4gTWF0aC5wb3coMiwgMyk7XG4vLyAgICAvL30pO1xuLy8gICAgLy8g0KTQsNC60YLQuNGH0LXRgdC60LgsINC80Ysg0L7QsdGA0LDRidCw0LXQvNGB0Y8g0Log0LzQtdGC0L7QtNGDINC+0LHRitC10LrRgtCwIG1ldGhvZHNbJyoqJ10sXG4vLyAgICAvLyDQsCDQuNC80Y8g0LzQtdGC0L7QtNCwIC0g0Y3RgtC+INCy0YLQvtGA0L7QuSDRjdC70LXQvNC10L3RgiAoc3BsaXRbMV0pINC80LDRgdGB0LjQstCwIHNwbGl0LlxuLy9cbi8vIC8vINCe0LfQvdCw0YfQsNC10YIg0LLQvtC30LLRgNCw0YIg0LzQtdGC0L7QtNCwINC90LDRiNC10LPQviDQu9C+0LrQsNC70YzQvdC+0LPQviDQvtCx0YrQtdC60YLQsCDRgSDQuNC80LXQvdC10LwgJysnINC40LvQuCAnLSdcbi8vIC8vINC4INCw0YDQs9GD0LzQtdC90YLQsNC80LggYSDQuCBiXG4vLyAgfTtcbi8vICAvLyDQodC+0LfQtNCw0LXQvCDQvNC10YLQvtC0INCyINC60L7QvdGC0LXQutGB0YLQtSDRgtC+0LPQviDQvtCx0YrQtdC60YLQsCwg0LIg0LrQvtGC0L7RgNC+0Lwg0L7QvSDQsdGD0LTQtdGCINCy0YvQt9Cy0LDQvVxuLy8gIHRoaXMuYWRkTWV0aG9kID0gZnVuY3Rpb24oIG5hbWUsIGZ1bmMgKSB7XG4vLyAvLyDQl9C00LXRgdGMINC80Ysg0LTQvtCx0LDQstC70Y/QtdC8INC80LXRgtC+0LQsXG4vLyAvLyDQkNGA0LPRg9C80LXQvdGCIG5hbWUg0LTQvtCx0LDQstC70Y/QtdGC0YHRjywg0LrQsNC6INGB0LLQvtC50YHRgtCy0L4g0LzQtdGC0L7QtNCwIG1ldGhvZHMg0Lgg0L/RgNC40YHQstCw0LjQstCw0LXRgtGB0Y8g0LIg0L3QtdCz0L4g0YTRg9C90LrRhtC40Y8gZnVuYyAo0LLRgtC+0YDQvtC5INCw0YDQs9GD0LzQtdC90YIpXG4vLyAgICBtZXRob2RzW25hbWVdID0gZnVuYztcbi8vICAgIC8vINCyINC60LDRh9C10YHRgtCy0LUg0LDRgNCz0YPQvNC10L3RgtCwIG5hbWUg0LzRiyDQtNC+0LHQsNCy0LjQu9C4INC90L7QstGL0Lkg0L7Qv9C10YDQsNGC0L7RgCBcIioqXCIg0Lhcbi8vICAgIC8vINGD0LrQsNC30LDQu9C4INGE0YPQvdC60YbQuNGOLCDQutC+0YLQvtGA0YPRjiDQvdGD0LbQvdC+INGBINC90LjQvCDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwuXG4vLyAvLyDRgtC10L/QtdGA0Ywg0LLRgdC1INCw0L3QsNC70L7Qs9C40YfQvdC+INC80LXRgtC+0LTQsNC8ICcrJyDQuCAnLScsINGCLtC1LCDQvtC/0LjRgdCw0L3QuNC1INC90L7QstC+0LPQviDQvNC10YLQvtC00LBcbi8vIC8vINGB0Y7QtNCwINC80L7QttC90L4g0LHRg9C00LXRgiDQtNC+0LHQsNCy0LjRgtGMINGB0LLQvtC5INC+0L/QtdGA0LDRgtC+0YAg0Lgg0YTRg9C90LrRhtC40Y4sINC+0L/QuNGB0YvQstCw0Y7RidGD0Y4sINGH0YLQviDQtNC10LvQsNGC0Ywg0YEg0Y3RgtC40Lwg0L7Qv9C10YDQsNGC0L7RgNC+0Lxcbi8vICB9O1xuLy9cbi8vIH1cbi8vXG4vLyB2YXIgY2FsYyA9IG5ldyBDYWxjdWxhdG9yO1xuLy9cbi8vIGNhbGMuYWRkTWV0aG9kKFwiKlwiLCBmdW5jdGlvbihhLCBiKSB7XG4vLyAgIHJldHVybiBhICogYjtcbi8vIH0pO1xuLy8gY2FsYy5hZGRNZXRob2QoXCIvXCIsIGZ1bmN0aW9uKGEsIGIpIHtcbi8vICAgcmV0dXJuIGEgLyBiO1xuLy8gfSk7XG4vLyBjYWxjLmFkZE1ldGhvZChcIioqXCIsIGZ1bmN0aW9uKGEsIGIpIHtcbi8vICAgcmV0dXJuIE1hdGgucG93KGEsIGIpO1xuLy8gfSk7XG4vL1xuLy8gdmFyIHJlc3VsdCA9IGNhbGMuY2FsY3VsYXRlKFwiMiAqKiAzXCIpO1xuLy8gYWxlcnQoIHJlc3VsdCApOyAvLyA4XG4vLyBmdW5jdGlvbiBBY2N1bXVsYXRvcihzdGFydGluZ1ZhbHVlKSB7XG4vL1xuLy8gICB0aGlzLnZhbHVlID0gc3RhcnRpbmdWYWx1ZTtcbi8vXG4vLyAgIHRoaXMucmVhZCA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIHRoaXMudmFsdWUgKz0gK3Byb21wdCgn0JLQstC10LTQuNGC0LUg0YfQuNGB0LvQviDQtNC70Y8g0LTQvtCx0LDQstC70LXQvdC40Y86ICcsIDApO1xuLy8gICB9XG4vL1xuLy8gfVxuLy9cbi8vIHZhciBhY2N1bXVsYXRvciA9IG5ldyBBY2N1bXVsYXRvcigxKTsgLy8g0L3QsNGH0LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUgMVxuLy8gYWNjdW11bGF0b3IucmVhZCgpOyAvLyDQv9GA0LjQsdCw0LLQuNGCINCy0LLQvtC0IHByb21wdCDQuiDRgtC10LrRg9GJ0LXQvNGDINC30L3QsNGH0LXQvdC40Y5cbi8vIGFjY3VtdWxhdG9yLnJlYWQoKTsgLy8g0L/RgNC40LHQsNCy0LjRgiDQstCy0L7QtCBwcm9tcHQg0Log0YLQtdC60YPRidC10LzRgyDQt9C90LDRh9C10L3QuNGOXG4vLyBhY2N1bXVsYXRvci5yZWFkKCk7IC8vINC/0YDQuNCx0LDQstC40YIg0LLQstC+0LQgcHJvbXB0INC6INGC0LXQutGD0YnQtdC80YMg0LfQvdCw0YfQtdC90LjRjlxuLy8gYWNjdW11bGF0b3IucmVhZCgpOyAvLyDQv9GA0LjQsdCw0LLQuNGCINCy0LLQvtC0IHByb21wdCDQuiDRgtC10LrRg9GJ0LXQvNGDINC30L3QsNGH0LXQvdC40Y5cbi8vIGFsZXJ0KCBhY2N1bXVsYXRvci52YWx1ZSApOyAvLyDQstGL0LLQtdC00LXRgiDRgtC10LrRg9GJ0LXQtSDQt9C90LDRh9C10L3QuNC1XG4vLyBmdW5jdGlvbiBDYWxjdWxhdG9yKCkge1xuLy9cbi8vICAgdGhpcy5yZWFkID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgdGhpcy5hID0gK3Byb21wdCgnYT8nLCAwKTtcbi8vICAgICB0aGlzLmIgPSArcHJvbXB0KCdiPycsIDApO1xuLy8gICB9XG4vL1xuLy8gICB0aGlzLnN1bSA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiB0aGlzLmEgKyB0aGlzLmI7XG4vLyAgIH1cbi8vXG4vLyAgIHRoaXMubXVsID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuIHRoaXMuYSAqIHRoaXMuYjtcbi8vICAgfVxuLy9cbi8vIH1cbi8vXG4vL1xuLy8gdmFyIGNhbGN1bGF0b3IgPSBuZXcgQ2FsY3VsYXRvcigpO1xuLy8gY2FsY3VsYXRvci5yZWFkKCk7XG4vL1xuLy8gYWxlcnQoIFwi0KHRg9C80LzQsD1cIiArIGNhbGN1bGF0b3Iuc3VtKCkgKTtcbi8vIGFsZXJ0KCBcItCf0YDQvtC40LfQstC10LTQtdC90LjQtT1cIiArIGNhbGN1bGF0b3IubXVsKCkgKTtcbi8vIGZ1bmN0aW9uIEFuaW1hbChuYW1lKSB7XG4vLyAgIHRoaXMubmFtZSA9IG5hbWU7XG4vLyAgIHRoaXMuY2FuV2FsayA9IHRydWU7XG4vL1xuLy8gICB0aGlzLkhpVGVsbGluZyA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIGFsZXJ0KFwi0JzQtdC90Y8g0LfQvtCy0YPRgjogXCIgKyB0aGlzLm5hbWUpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gdmFyIGFuaW1hbCA9IG5ldyBBbmltYWwoXCLRkdC20LjQulwiKTtcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gLy8gZnVuY3Rpb24gQW5pbWFsKG5hbWUpIHtcbi8vIC8vICAgdGhpcyA9IHsgLy8gPC0tINGB0L7Qt9C00LDQtdGC0YHRjyDQv9GD0YHRgtC+0Lkg0L7QsdGK0LXQutGCIHRoaXMg0Lgg0L3QsNC/0L7Qu9C90Y/QtdGC0YHRjyDRgdCy0L7QudGB0YLQstCw0LzQuCDQuCDQvNC10YLQvtC00LDQvNC4XG4vLyAvLyAgICAgbmFtZTogJ9GR0LbQuNC6Jyxcbi8vIC8vICAgICBjYW5XYWxrOiB0cnVlXG4vLyAvLyAgIH1cbi8vIC8vICAgcmV0dXJuIHRoaXM7XG4vLyAvLyAgIC8v0YPQv9GA0LDQstC70LXQvdC40LUg0L/QtdGA0LXQtNCw0LXRgtGB0Y8g0LIg0L7QsdC70LDRgdGC0Ywg0LLRi9C30L7QstCwINGE0YPQvdC60YbQuNC4IC0tPiBhbmltYWwgPSB0aGlzIChhbmltYWwg0L/RgNC40YHQstCw0LjQstCw0LXRgtGB0Y8g0LfQvdCw0YfQtdC90LjQtSB0aGlzKVxuLy8gLy8gfVxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBhbGVydChhbmltYWwubmFtZSk7XG4vL9Ck0YPQvdC60YbQuNGPLCDQutC+0YLQvtGA0LDRjyDQstC+0LfQstGA0LDRidCw0LXRgtGB0Y8gc3VtLCDQtNC+0LvQttC90LAg0L3QsNC60LDQv9C70LjQstCw0YLRjCDQt9C90LDRh9C10L3QuNC1INC/0YDQuCDQutCw0LbQtNC+0Lwg0LLRi9C30L7QstC1LlxuLy/Qo9C00L7QsdC90LXQtSDQstGB0LXQs9C+INGF0YDQsNC90LjRgtGMINC10LPQviDQsiDQt9Cw0LzRi9C60LDQvdC40LgsINCyINC/0LXRgNC10LzQtdC90L3QvtC5IGN1cnJlbnRTdW0uINCa0LDQttC00YvQuSDQstGL0LfQvtCyINC/0YDQuNCx0LDQstC70Y/QtdGCINC6INC90LXQuSDQvtGH0LXRgNC10LTQvdC+0LUg0LfQvdCw0YfQtdC90LjQtTpcbi8vIGZ1bmN0aW9uIHN1bVgoYSkge1xuLy8gICAgIHZhciBjdXJyZW50U3VtID0gYTtcbi8vXG4vLyAgICAgZnVuY3Rpb24gZihiKSB7XG4vLyAgICAgICBjdXJyZW50U3VtICs9IGI7XG4vLyAgICAgICByZXR1cm4gZjsgIC8vIDwtLSDQvdC1INCy0YvQt9GL0LLQsNC10YIg0YHQsNC80LAg0YHQtdCx0Y8sINCwINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0YHRi9C70LrRgyDQvdCwINGB0LXQsdGPXG4vLyAgICAgfVxuLy9cbi8vICAgZi50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiBjdXJyZW50U3VtO1xuLy8gICB9O1xuLy9cbi8vIC8v0KTRg9C90LrRhtC40Y8gc3VtINGB0YDQsNCx0LDRgtGL0LLQsNC10YIg0YLQvtC70YzQutC+INC+0LTQuNC9INGA0LDQty4g0J7QvdCwINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGE0YPQvdC60YbQuNGOIGYuXG4vLyAvL9CX0LDRgtC10LwsINC/0YDQuCDQutCw0LbQtNC+0Lwg0LfQsNC/0YPRgdC60LUg0YTRg9C90LrRhtC40Y8gZiDQtNC+0LHQsNCy0LvRj9C10YIg0L/QsNGA0LDQvNC10YLRgCDQuiDRgdGD0LzQvNC1IGN1cnJlbnRTdW0sXG4vLyAvL9GF0YDQsNC90Y/RidC10LnRgdGPINCyINC30LDQvNGL0LrQsNC90LjQuCwg0Lgg0LLQvtC30LLRgNCw0YnQsNC10YIg0YHQsNC80LAg0YHQtdCx0Y8uXG4vL1xuLy8gICAgIHJldHVybiBmO1xuLy8gICB9XG4vL1xuLy8gICAvLyBmdW5jdGlvbiBzdW0oKSB7XG4vLyAgIC8vICAgcmV0dXJuIE51bWJlcihTdHJpbmcoc3VtWChhcmd1bWVudHMpKSk7XG4vLyAgIC8vIH1cbi8vXG4vLyAgIGFsZXJ0KCBzdW0oMSkoMikgKTsgLy8gM1xuLy8gICBhbGVydCggc3VtKDEpKDIpICk7IC8vIDNcbi8vICAgYWxlcnQoIHN1bSg1KSgtMSkoMikgKTsgLy8gNlxuLy8gdmFyIGZvbyA9IHtcbi8vICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiAnZm9vJztcbi8vICAgfSxcbi8vICAgdmFsdWVPZjogZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuIDI7XG4vLyAgIH1cbi8vIH07XG4vL1xuLy8gYWxlcnQoIGZvbyApO1xuLy8gYWxlcnQoIGZvbyArIDEgKTtcbi8vIGFsZXJ0KCBmb28gKyBcIjNcIiApO1xuLy9vbmx5IGRpZmZlcmVuY2UgaXMgdGhhdCB2YWx1ZU9mIGlzIGNhbGxlZCB3aGVuIG9iamVjdCBtdXN0IGJlIGNvbnZlcnRlZCB0byAgTnVtYmVyXG4vL29iamVjdCBpcyBjb252ZXJ0ZWQgdG8gbnVtYmVyIHdoZW4gdXNlZCB3aXRoIG9wZXJhdG9ycyBsaWtlOiArLCAqIGFuZCAtLlxuLy9BbHNvICB2YWx1ZU9mIGlzIHVzZWQgd2hlbiBvYmplY3RzIGFyZSBjb21wYXJlZCB1c2luZyA+IG9yID49IG9wZXJhdG9ycy5cbi8vIHZhciBuYW1lID0gXCJcIjtcbi8vXG4vLyB2YXIgdXNlciA9IHtcbi8vICAgbmFtZTogXCLQktCw0YHQuNC70LjQuVwiLFxuLy9cbi8vICAgZXhwb3J0OiBmdW5jdGlvbigpIHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgdmFsdWU6IHRoaXNcbi8vICAgICB9O1xuLy8gICB9XG4vL1xuLy8gfTtcbi8vXG4vLyBhbGVydCggdXNlci5leHBvcnQoKS52YWx1ZSA9PSB1c2VyICk7IC8vIHRydWVcbi8vIHZhciBsYWRkZXIgPSB7XG4vLyAgIHN0ZXA6IDAsXG4vLyAgIHVwOiBmdW5jdGlvbigpIHsgLy8g0LLQstC10YDRhSDQv9C+INC70LXRgdGC0L3QuNGG0LVcbi8vICAgICB0aGlzLnN0ZXArKztcbi8vICAgICByZXR1cm4gdGhpcztcbi8vICAgfSxcbi8vICAgZG93bjogZnVuY3Rpb24oKSB7IC8vINCy0L3QuNC3INC/0L4g0LvQtdGB0YLQvdC40YbQtVxuLy8gICAgIHRoaXMuc3RlcC0tO1xuLy8gICAgIHJldHVybiB0aGlzO1xuLy8gICB9LFxuLy8gICBzaG93U3RlcDogZnVuY3Rpb24oKSB7IC8vINCy0YvQstC10YHRgtC4INGC0LXQutGD0YnRg9GOINGB0YLRg9C/0LXQvdGM0LrRg1xuLy8gICAgIGFsZXJ0KCB0aGlzLnN0ZXAgKTtcbi8vICAgICByZXR1cm4gdGhpcztcbi8vICAgfVxuLy8gfTtcbi8vXG4vLyBsYWRkZXIudXAoKS5kb3duKCkuc2hvd1N0ZXAoKTsgLy8wXG4vLyB2YXIgY2FsY3VsYXRvciA9IHtcbi8vXG4vLyAgIHJlYWQ6IGZ1bmN0aW9uKCkge1xuLy8gICAgIHRoaXMuYSA9ICtwcm9tcHQoJ2E/JywgMCk7XG4vLyAgICAgdGhpcy5iID0gK3Byb21wdCgnYj8nLCAwKTtcbi8vICAgfSxcbi8vXG4vLyAgIHN1bTogZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuIHRoaXMuYSArIHRoaXMuYjtcbi8vICAgfSxcbi8vXG4vLyAgIG11bDogZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuIHRoaXMuYSAqIHRoaXMuYjtcbi8vICAgfVxuLy9cbi8vIH1cbi8vXG4vLyBjYWxjdWxhdG9yLnJlYWQoKTtcbi8vIGFsZXJ0KCBjYWxjdWxhdG9yLnN1bSgpICk7XG4vLyBhbGVydCggY2FsY3VsYXRvci5tdWwoKSApO1xuLy8gdmFyIG5hbWUgPSBcIlwiO1xuLy9cbi8vIHZhciB1c2VyID0ge1xuLy8gICBuYW1lOiBcItCS0LDRgdC40LvQuNC5XCIsXG4vL1xuLy8gICBleHBvcnQ6IGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICB2YWx1ZTogdGhpc1xuLy8gICAgIH07XG4vLyAgIH1cbi8vXG4vLyB9O1xuLy9cbi8vIGFsZXJ0KCB1c2VyLmV4cG9ydCgpLnZhbHVlLm5hbWUgKTtcbi8vXG4vLyAvLyDQktC+INCy0YDQtdC80Y8g0LLRi9C/0L7Qu9C90LXQvdC40Y8gdXNlci5leHBvcnQoKSDQt9C90LDRh9C10L3QuNC1IHRoaXMgPSB1c2VyLlxuLy8gLy8g0J/RgNC4INGB0L7Qt9C00LDQvdC40Lgg0L7QsdGK0LXQutGC0LAgeyB2YWx1ZTogdGhpcyB9LCDQsiDRgdCy0L7QudGB0YLQstC+IHZhbHVlINC60L7Qv9C40YDRg9C10YLRgdGPINGB0YHRi9C70LrQsCDQvdCwINGC0LXQutGD0YnQuNC5INC60L7QvdGC0LXQutGB0YIsINGC0L4g0LXRgdGC0Ywg0L3QsCB1c2VyLlxuLy8gLy8g0J/QvtC70YPRh9Cw0LXRgtGB0Y8g0YfRgtC+IHVzZXIuZXhwb3J0KCkudmFsdWUgPT0gdXNlci5cbi8vXG4vLyB2YXIgdXNlciA9IHsgZmlyc3ROYW1lOiAn0JLQsNGB0Y8nLCBmOiBmdW5jIH07XG4vLyB2YXIgYWRtaW4gPSB7IGZpcnN0TmFtZTogJ9CQ0LTQvNC40L0nLCBnOiBmdW5jIH07XG4vL1xuLy8gZnVuY3Rpb24gZnVuYygpIHtcbi8vICAgYWxlcnQodGhpcy5maXJzdE5hbWUpO1xuLy8gfVxuLy9cbi8vIC8vIHRoaXMg0YDQsNCy0LXQvSDQvtCx0YrQtdC60YLRgyDQv9C10YDQtdC0INGC0L7Rh9C60L7QuVxuLy9cbi8vIHVzZXIuZigpOyAvLyDQktCw0YHRj1xuLy8gYWRtaW4uZygpOyAvLyDQkNC00LzQuNC9XG4vLyBhZG1pblsnZyddKCk7IC8vINCQ0LTQvNC40L0gLSAo0LLRgdC1INGA0LDQstC90L4g0L3QsCDQt9Cw0L/QuNGB0YwpXG4vLyDQmtC+0LPQtNCwINC80Ysg0LLRi9C30YvQstCw0LXQvCDQvNC10YLQvtC0INGH0LXRgNC10Lcg0YLQvtGH0LrRgyDQuNC70Lgg0LrQstCw0LTRgNCw0YLQvdGL0LUg0YHQutC+0LHQutC4LCDRgtC+INGB0YfQuNGC0LDRgtGMINGC0LXQutGD0YnQuNC8INC+0LHRitC10LrRgixcbi8vINC60L7RgtC+0YDQvtC80YMg0L/RgNC40L3QsNC00LvQtdC20LjRgiDQvNC10YLQvtC0LCDQsiDQvtGB0YLQsNC70YzQvdGL0YUg0YHQu9GD0YfQsNGP0YUg0YHRh9C40YLQsNGC0YwsINGH0YLQviDQvtCx0YrQtdC60YIg0LHRi9C7INCy0YHQtdCz0L4g0LvQuNGI0Ywg0YXRgNCw0L3QuNC70LjRidC10Lwg0LzQtdGC0L7QtNCwKNGE0YPQvdC60YbQuNC4KVxuLy8g0Lgg0L/RgNC+INC+0LHRitC10LrRgiwg0LjQtyDQutC+0YLQvtGA0L7Qs9C+INC80LXRgtC+0LQg0LLRi9C30LLQsNC9LCDQvNC+0LbQvdC+INC30LDQsdGL0YLRjC5cbi8vIHZhciB1c2VyID0ge1xuLy8gICBuYW1lOiAn0JLQsNGB0LjQu9C40LknLFxuLy9cbi8vICAgc2F5SGk6IGZ1bmN0aW9uKCkge1xuLy8gICAgIHNob3dOYW1lKHRoaXMpOyAvLyDQv9C10YDQtdC00LDRgtGMINGC0LXQutGD0YnQuNC5INC+0LHRitC10LrRgiDQsiBzaG93TmFtZVxuLy8gICB9XG4vLyB9O1xuLy9cbi8vIGZ1bmN0aW9uIHNob3dOYW1lKG5hbWVkT2JqKSB7ICAvL3Nob3dOYW1lID0ge25hbWU6ICfQktCw0YHQuNC70LjQuScsIHNheUhpOiBmfVxuLy8gICBhbGVydCggbmFtZWRPYmoubmFtZSApO1xuLy8gfVxuLy9cbi8vIHVzZXIuc2F5SGkoKTsgLy8g0JLQsNGB0LjQu9C40Llcbi8vIGZ1bmN0aW9uIG1hcnJ5KG1hbiwgd29tYW4pIHtcbi8vICAgd29tYW4uaHVzYmFuZCA9IG1hbjtcbi8vICAgbWFuLndpZmUgPSB3b21hbjtcbi8vXG4vLyAgIHJldHVybiB7XG4vLyAgICAgZmF0aGVyOiBtYW4sXG4vLyAgICAgbW90aGVyOiB3b21hblxuLy8gICB9XG4vLyB9XG4vL1xuLy8gdmFyIGZhbWlseSA9IG1hcnJ5KHtcbi8vICAgbmFtZTogXCLQktCw0YHQuNC70LjQuVwiXG4vLyB9LCB7XG4vLyAgIG5hbWU6IFwi0JzQsNGA0LjRj1wiXG4vLyB9KTtcbi8vIGZ1bmN0aW9uIGZhY3RvcmlhbChuKSB7XG4vLyAgIHJldHVybiBuID8gbiAqIGZhY3RvcmlhbChuIC0gMSkgOiAxO1xuLy8gfVxuLy9cbi8vIGFsZXJ0KCBmYWN0b3JpYWwoNSkgKTsgLy8gMTIwXG4vLy9SRUNVUlNJT04vLy9cbi8vIGZ1bmN0aW9uIHN1bVRvKG4pIHtcbi8vICAgaWYgKG4gPT0gMSkgcmV0dXJuIDE7XG4vLyAgIC8vLy9leGVjdXRpb24gY29udGV4dHMvLy8vXG4vLyAgIC8vbiA9IDEwMFxuLy8gICAvL24gPSA5OVxuLy8gICAvLy4uLlxuLy8gICAvL24gPSA1LFxuLy8gICAvL24gPSA0LFxuLy8gICAvL24gPSAzLFxuLy8gICAvL24gPSAyLFxuLy8gICAvL1xuLy8gICAvL24gPSAxLCBuID0gMiAtPiByZXR1cm4gMywgbiA9IDMgLT4gcmV0dXJuIDYsIG4gPSA0IC0+IHJldHVybiAxMCwgbiA9IDUgLT4gcmV0dXJuIDE1XG4vLyAgIHJldHVybiBuICsgc3VtVG8obiAtIDEpO1xuLy8gICAvL3JldHVybiAxICsgMiAtPiAzO1xuLy8gICAvL3JldHVybiAzICsgMyAtPiA2O1xuLy8gICAvL3JldHVybiA2ICsgNCAtPiAxMDtcbi8vICAgLy9yZXR1cm4gMTAgKyA1IC0+IDE1O1xuLy8gfVxuLy9cbi8vIGFsZXJ0KCBzdW1UbygxMDApICk7XG4vLyBmdW5jdGlvbiBtYWtlQXJteSgpIHtcbi8vXG4vLyAgIHZhciBzaG9vdGVycyA9IFtdOyAvLyDQtNC+0LHQsNCy0LvQtdC90LjQtSDQv9GD0YHRgtC+0LPQviDQvNCw0YHRgdC40LLQsFxuLy9cbi8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vIDEwINC40YLQtdGA0LDRhtC40Llcbi8vXG4vLyAgICAgdmFyIG9uZU1hbiA9IChmdW5jdGlvbih4KSB7ICAvLyDQvtGC0LTQtdC70YzQvdC+0LzRgyDRgdGC0YDQtdC70LrRgyDQv9GA0LjRgdCy0LDQuNCy0LDQtdGC0YHRjyDQt9C90LDRh9C10L3QuNC1INCy0YvQt9C+0LLQsCDRhNGD0L3QutGG0LjQuFxuLy9cbi8vICAgICAgICAvLyBMZXhpY2FsRW52aXJvbm1lbnQgPSB7IGZ1bmN0aW9uOiAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMH1cbi8vXG4vLyAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7ICAvLyBbW1Njb3BlXV0gLT4gTGV4aWNhbEVudmlyb25tZW50XG4vLyAgICAgICAgIGFsZXJ0KCB4ICk7XG4vLyAgICAgICB9O1xuLy9cbi8vICAgICAgIC8v0KTRg9C90LrRhtC40Y8gJ29uZU1hbicg0YHQvtC30LTQsNC90LAg0LrQsNC6INGA0LXQt9GD0LvRjNGC0LDRgiDQstGL0LfQvtCy0LAg0L/RgNC+0LzQtdC20YPRgtC+0YfQvdC+0LPQviDRhNGD0L3QutGG0LjQvtC90LDQu9GM0L3QvtCz0L4g0LLRi9GA0LDQttC10L3QuNGPIGZ1bmN0aW9uKHgpLFxuLy8gICAgICAgLy/QutC+0YLQvtGA0L7QtSDQvtCx0YrRj9Cy0LvRj9C10YLRgdGPIOKAkyDQuCDRgtGD0YIg0LbQtSDQstGL0L/QvtC70L3Rj9C10YLRgdGPLCDQv9C+0LvRg9GH0LDRjyB4ID0gaS5cbi8vXG4vLyAgICAgICAvL9Ci0LDQuiDQutCw0LogZnVuY3Rpb24oeCkg0YLRg9GCINC20LUg0LfQsNCy0LXRgNGI0LDQtdGC0YHRjywg0YLQviDQt9C90LDRh9C10L3QuNC1IHgg0LHQvtC70YzRiNC1INC90LUg0LzQtdC90Y/QtdGC0YHRjy5cbi8vICAgICAgIC8v0J7QvdC+INC4INCx0YPQtNC10YIg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC+INCyINCy0L7Qt9Cy0YDQsNGJ0LDQtdC80L7QuSDRhNGD0L3QutGG0LjQuC3RgdGC0YDQtdC70LrQtS5cbi8vXG4vLyAgICAgfSkoaSk7IC8vINCy0YvQt9C+0LIg0YTRg9C90LrRhtC40LggXCJmdW5jdGlvbih4KVwiINGBINGC0LXQutGD0YnQuNC8INC30L3QsNGH0LXQvdC40LXQvCBpLCAo0YHQvtC30LTQsNC70Lgg0YTRg9C90LrRhtC40Y4gXCJmdW5jdGlvbih4KVwiINC4INGB0YDQsNC30YMg0LbQtSDQtdC1INCy0YvQt9Cy0LDQu9C4Lilcbi8vICAgICAvLyDRgtCw0LrQuNC8INC+0LHRgNCw0LfQvtC8LCDQvdC+0LzQtdGAINGB0YLRgNC10LvQutCwINGF0YDQsNC90LjRgtGB0Y8g0LLQvdGD0YLRgNC4INGE0YPQvdC60YbQuNC4IGZ1bmN0aW9uKHgpXG4vLyAgICAgLy8g0LrQvtGC0L7RgNCw0Y8g0LLRi9GB0YLRg9C/0LDQtdGCINCyINC60LDRh9C10YHRgtCy0LUg0LvQtdC60YHQuNGH0LXRgdC60L7Qs9C+INC+0LrRgNGD0LbQtdC90LjRjyDQtNC70Y8g0LDQvdC+0L3QuNC80L3QvtC5INGE0YPQvdC60YbQuNC4INCy0L3Rg9GC0YDQuCDRgdC10LHRjy5cbi8vXG4vLyAgICAgc2hvb3RlcnMucHVzaChvbmVNYW4pO1xuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gc2hvb3RlcnM7XG4vLyB9XG4vL1xuLy8gdmFyIGFybXkgPSBtYWtlQXJteSgpOyAvL9Cd0L7QstGL0Lkg0LLRi9C30L7QsiDRhNGD0L3QutGG0LjQuCA9INC90L7QstCw0Y8g0L7QsdC70LDRgdGC0Ywg0LLRi9C/0L7Qu9C90LXQvdC40Y8uINCh0L7Qt9C00LDQvdC40LUg0L3QvtCy0L7QuSDQu9C+0LrQsNC70YzQvdC+0Lkg0L7QsdC70LDRgdGC0Lgg0LLRi9C/0L7Qu9C90LXQvdC40Y8uXG4vL1xuLy8gYXJteVswXSgpOyAvLyAwXG4vLyBhcm15WzFdKCk7IC8vIDFcbi8vIGZ1bmN0aW9uIGZpbHRlcihhcnIsIGZ1bmMpIHtcbi8vIFx0dmFyIHJlc3VsdCA9IFtdO1xuLy9cbi8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbi8vIFx0XHR2YXIgdmFsdWUgPSBhcnJbaV07XG4vLyBcdFx0aWYgKGZ1bmModmFsdWUpKSB7XG4vLyBcdFx0XHRyZXN1bHQucHVzaCh2YWx1ZSk7XG4vLyBcdFx0fVxuLy8gXHR9XG4vLyBcdHJldHVybiByZXN1bHQ7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gaW5CZXR3ZWVuKGEsIGIpIHtcbi8vIFx0cmV0dXJuIGZ1bmN0aW9uKHgpIHtcbi8vIFx0XHRyZXR1cm4geCA+PSBhICYmIHggPD0gYjtcbi8vIFx0fVxuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIGluQXJyYXkoYXJyYXkpIHtcbi8vICAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbi8vICAgICByZXR1cm4gYXJyYXkuaW5kZXhPZih4KSAhPSAtMTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIHZhciBhcnIgPSBbMSwgMiwgMywgNCwgNSwgNiwgN107XG4vL1xuLy8gYWxlcnQoZmlsdGVyKGFyciwgZnVuY3Rpb24oYSkge1xuLy8gXHRyZXR1cm4gYSAlIDIgPT0gMFxuLy8gfSkpOyAvLyAyLDQsNlxuLy9cbi8vIGFsZXJ0KGZpbHRlcihhcnIsIGluQmV0d2VlbigzLCA2KSkpOyAvLyAzLDQsNSw2XG4vL1xuLy8gYWxlcnQoZmlsdGVyKGFyciwgaW5BcnJheShbMSwgMiwgMTBdKSkpOyAvLyAxLDJcbi8vIHZhciB1c2VycyA9IFt7XG4vLyAgIG5hbWU6ICfQktCw0YHRjycsXG4vLyAgIHN1cm5hbWU6ICfQmNCy0LDQvdC+0LInLFxuLy8gICBhZ2U6IDIwXG4vLyB9LCB7XG4vLyAgIG5hbWU6ICfQn9C10YLRjycsXG4vLyAgIHN1cm5hbWU6ICfQp9Cw0L/QsNC10LInLFxuLy8gICBhZ2U6IDI1XG4vLyB9LCB7XG4vLyAgIG5hbWU6ICfQnNCw0YjQsCcsXG4vLyAgIHN1cm5hbWU6ICfQnNC10LTQstC10LTQtdCy0LAnLFxuLy8gICBhZ2U6IDE4XG4vLyB9XTtcbi8vXG4vLyBmdW5jdGlvbiBieUZpZWxkKGZpZWxkKSB7XG4vLyAgIHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG4vLyAgICAgcmV0dXJuIGFbZmllbGRdID4gYltmaWVsZF0gPyAxIDogLTE7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyB1c2Vycy5zb3J0KGJ5RmllbGQoJ25hbWUnKSk7XG4vLyB1c2Vycy5mb3JFYWNoKGZ1bmN0aW9uKHVzZXIpIHtcbi8vICAgYWxlcnQoIHVzZXIubmFtZSApO1xuLy8gfSk7XG4vL1xuLy8gdXNlcnMuc29ydChieUZpZWxkKCdhZ2UnKSk7XG4vLyB1c2Vycy5mb3JFYWNoKGZ1bmN0aW9uKHVzZXIpIHtcbi8vICAgYWxlcnQoIHVzZXIubmFtZSApO1xuLy8gfSk7XG4vLyBmdW5jdGlvbiBtYWtlQnVmZmVyKCkge1xuLy8gICB2YXIgdGV4dCA9ICcnO1xuLy9cbi8vICAgZnVuY3Rpb24gYnVmZmVyKHRleHRWYWx1ZSkge1xuLy8gICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4vLyAgICAgICByZXR1cm4gdGV4dDtcbi8vICAgICB9XG4vLyAgICAgdGV4dCArPSB0ZXh0VmFsdWU7XG4vLyAgIH07XG4vL1xuLy8gICBidWZmZXIuY2xlYXIgPSBmdW5jdGlvbigpIHtcbi8vICAgICB0ZXh0ID0gJyc7XG4vLyAgIH1cbi8vXG4vLyAgIHJldHVybiBidWZmZXI7XG4vL1xuLy8gfTtcbi8vXG4vLyB2YXIgYnVmZmVyID0gbWFrZUJ1ZmZlcigpO1xuLy9cbi8vIC8vINC00L7QsdCw0LLQuNGC0Ywg0LfQvdCw0YfQtdC90LjRjyDQuiDQsdGD0YTQtdGA0YNcbi8vIGJ1ZmZlcign0JfQsNC80YvQutCw0L3QuNGPJyk7XG4vLyBidWZmZXIoJyDQmNGB0L/QvtC70YzQt9C+0LLQsNGC0YwnKTtcbi8vIGJ1ZmZlcignINCd0YPQttC90L4hJylcbi8vXG4vLyBhbGVydChidWZmZXIoKSk7XG4vL1xuLy8gYnVmZmVyLmNsZWFyKCk7XG4vLyBhbGVydChidWZmZXIoKSk7XG4vLy9zdW0oYSkoYikgPSBhK2IvLy9cbi8vIGZ1bmN0aW9uIHN1bShhKSB7XG4vL1xuLy8gICByZXR1cm4gZnVuY3Rpb24oYikge1xuLy8gICAgIHJldHVybiBhICsgYjtcbi8vICAgfTtcbi8vXG4vLyB9XG4vL1xuLy8gYWxlcnQoc3VtKDIpKDMpKTtcbi8vL9Ch0YfQtdGC0YfQuNC6INGH0LXRgNC10Lcg0L7QsdGK0LXQutGCICsg0YTRg9C90LrRhtC40Y4vLy9cbi8vIGZ1bmN0aW9uIG1ha2VDb3VudGVyKCkge1xuLy8gICB2YXIgY3VycmVudENvdW50ID0gMTtcbi8vXG4vLyAgIC8vINCy0L7Qt9Cy0YDQsNGJ0LDQtdC80YHRjyDQuiDRhNGD0L3QutGG0LjQuFxuLy8gICBmdW5jdGlvbiBjb3VudGVyKCkge1xuLy8gICAgIHJldHVybiBjdXJyZW50Q291bnQrKztcbi8vICAgfVxuLy9cbi8vICAgLy8gLi4u0Lgg0LTQvtCx0LDQstC70Y/QtdC8INC10Lkg0LzQtdGC0L7QtNGLIVxuLy8gICBjb3VudGVyLnNldCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4vLyAgICAgY3VycmVudENvdW50ID0gdmFsdWU7XG4vLyAgIH07XG4vL1xuLy8gICBjb3VudGVyLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgY3VycmVudENvdW50ID0gMTtcbi8vICAgfTtcbi8vXG4vLyAgIHJldHVybiBjb3VudGVyO1xuLy8gfVxuLy9cbi8vIHZhciBjb3VudGVyID0gbWFrZUNvdW50ZXIoKTtcbi8vXG4vLyBhbGVydCggY291bnRlcigpICk7IC8vIDFcbi8vIGFsZXJ0KCBjb3VudGVyKCkgKTsgLy8gMlxuLy9cbi8vIGNvdW50ZXIuc2V0KDUpO1xuLy8gYWxlcnQoIGNvdW50ZXIoKSApOyAvLyA1XG4vLy/QodGH0LXRgtGH0LjQuiDRh9C10YDQtdC3INC+0LHRitC10LrRgi8vL1xuLy8gZnVuY3Rpb24gbWFrZUNvdW50ZXIoKSB7XG4vLyAgIHZhciBjdXJyZW50Q291bnQgPSAxO1xuLy9cbi8vICAgcmV0dXJuIHsgLy8g0LLQvtC30LLRgNCw0YLQuNC8INC+0LHRitC10LrRgiDQstC80LXRgdGC0L4g0YTRg9C90LrRhtC40Lhcbi8vICAgICBnZXROZXh0OiBmdW5jdGlvbigpIHtcbi8vICAgICAgIHJldHVybiBjdXJyZW50Q291bnQrKztcbi8vICAgICB9LFxuLy9cbi8vICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4vLyAgICAgICBjdXJyZW50Q291bnQgPSB2YWx1ZTtcbi8vICAgICB9LFxuLy9cbi8vICAgICByZXNldDogZnVuY3Rpb24oKSB7XG4vLyAgICAgICBjdXJyZW50Q291bnQgPSAxO1xuLy8gICAgIH1cbi8vICAgfTtcbi8vIH1cbi8vXG4vLyB2YXIgY291bnRlciA9IG1ha2VDb3VudGVyKCk7XG4vL1xuLy8gYWxlcnQoIGNvdW50ZXIuZ2V0TmV4dCgpICk7IC8vIDFcbi8vIGFsZXJ0KCBjb3VudGVyLmdldE5leHQoKSApOyAvLyAyXG4vL1xuLy8gY291bnRlci5zZXQoNSk7XG4vLyBhbGVydCggY291bnRlci5nZXROZXh0KCkgKTsgLy8gNVxuLy8gdmFyIGEgPSAxO1xuLy9cbi8vIGZ1bmN0aW9uIGdldEZ1bmMoKSB7XG4vLyAgIHZhciBhID0gMjtcbi8vXG4vLyAgIHZhciBmdW5jID0gbmV3IEZ1bmN0aW9uKCdhbGVydChhKScpO1xuLy9cbi8vICAgcmV0dXJuIGZ1bmM7XG4vLyB9XG4vL1xuLy8gZ2V0RnVuYygpKCk7IC8vIDEsINC40Lcgd2luZG93XG4vLy8vLy8vLy8vLy8vLy8v0JfQkNCc0KvQmtCQ0J3QmNCvLy8vLy8vLy8vLy8vLy8vL1xuLy8gZnVuY3Rpb24gbWFrZUNvdW50ZXIoKSB7XG4vLyAgIGZ1bmN0aW9uIGNvdW50ZXIoKSB7XG4vLyAgICAgcmV0dXJuIGNvdW50ZXIuY3VycmVudENvdW50Kys7XG4vLyAgIH07XG4vLyAgIGNvdW50ZXIuY3VycmVudENvdW50ID0gMTtcbi8vXG4vLyAgIHJldHVybiBjb3VudGVyO1xuLy8gfVxuLy9cbi8vIHZhciBjb3VudGVyID0gbWFrZUNvdW50ZXIoKTtcbi8vXG4vLyBhbGVydCggY291bnRlcigpICk7IC8vIDFcbi8vIGFsZXJ0KCBjb3VudGVyKCkgKTsgLy8gMlxuLy8gZnVuY3Rpb24gbWFrZUNvdW50ZXIoKSB7XG4vLyAgIHZhciBjdXJyZW50Q291bnQgPSAxO1xuLy9cbi8vICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiBjdXJyZW50Q291bnQrKztcbi8vICAgfTtcbi8vIH1cbi8vXG4vLyB2YXIgY291bnRlciA9IG1ha2VDb3VudGVyKCk7IC8vIFtbU2NvcGVdXSAtPiB7Y3VycmVudENvdW50OiAxfVxuLy9cbi8vIGFsZXJ0KCBjb3VudGVyKCkgKTsgLy8gMSwgW1tTY29wZV1dIC0+IHtjdXJyZW50Q291bnQ6IDF9XG4vLyBhbGVydCggY291bnRlcigpICk7IC8vIDIsIFtbU2NvcGVdXSAtPiB7Y3VycmVudENvdW50OiAyfVxuLy8gYWxlcnQoIGNvdW50ZXIoKSApOyAvLyAzLCBbW1Njb3BlXV0gLT4ge2N1cnJlbnRDb3VudDogM31cbi8vIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuLy8gICB2YXIgZGlmZiA9IG5ldyBEYXRlKCkgLSBkYXRlO1xuLy9cbi8vICAgaWYgKGRpZmYgPD0gMTAwMCkge1xuLy8gICAgIHJldHVybiAn0YLQvtC70YzQutC+INGH0YLQvic7XG4vLyAgIH1cbi8vXG4vLyAgIHZhciBzZWMgPSBNYXRoLmZsb29yKGRpZmYgLyAxMDAwKTtcbi8vICAgaWYgKHNlYyA8IDYwKSB7XG4vLyAgICAgcmV0dXJuIHNlYyArICcg0YHQtdC6LiDQvdCw0LfQsNC0Jztcbi8vICAgfVxuLy9cbi8vICAgdmFyIG1pbiA9IE1hdGguZmxvb3IoZGlmZiAvIDYwMDAwKTtcbi8vICAgaWYgKG1pbiA8IDYwKSB7XG4vLyAgICAgcmV0dXJuIG1pbiArICcg0LzQuNC9LiDQvdCw0LfQsNC0Jztcbi8vICAgfVxuLy9cbi8vICAgdmFyIGQgPSBkYXRlO1xuLy9cbi8vICAgZCA9IFtcbi8vICAgICAnMCcgKyBkLmdldERhdGUoKSxcbi8vICAgICAnMCcgKyAoZC5nZXRNb250aCgpICsgMSksXG4vLyAgICAgJycgKyBkLmdldEZ1bGxZZWFyKCksXG4vLyAgICAgJzAnICsgZC5nZXRIb3VycygpLFxuLy8gICAgICcwJyArIGQuZ2V0TWludXRlcygpXG4vLyAgIF07XG4vL1xuLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGQubGVuZ3RoOyBpKyspIHtcbi8vICAgICBkW2ldID0gZFtpXS5zbGljZSgtMik7XG4vLyAgIH1cbi8vXG4vLyAgIHJldHVybiBkLnNsaWNlKDAsIDMpLmpvaW4oJy4nKSArICcgJyArIGQuc2xpY2UoMykuam9pbignOicpO1xuLy8gfVxuLy9cbi8vIGFsZXJ0KCBmb3JtYXREYXRlKG5ldyBEYXRlKG5ldyBEYXRlIC0gMSkpICk7IC8vIFwi0YLQvtC70YzQutC+INGH0YLQvlwiXG4vL1xuLy8gYWxlcnQoIGZvcm1hdERhdGUobmV3IERhdGUobmV3IERhdGUgLSAzMCAqIDEwMDApKSApOyAvLyBcIjMwINGB0LXQui4g0L3QsNC30LDQtFwiXG4vL1xuLy8gYWxlcnQoIGZvcm1hdERhdGUobmV3IERhdGUobmV3IERhdGUgLSA1ICogNjAgKiAxMDAwKSkgKTsgLy8gXCI1INC80LjQvS4g0L3QsNC30LDQtFwiXG4vL1xuLy8gYWxlcnQoIGZvcm1hdERhdGUobmV3IERhdGUobmV3IERhdGUgLSA4NjQwMCAqIDEwMDApKSApOyAvLyDQstGH0LXRgNCw0YjQvdGP0Y8g0LTQsNGC0LAg0LIg0YTQvtGA0LzQsNGC0LUgXCLQtNC0LtC80Lwu0LPQsyDRh9GHOtC80LxcIlxuLy8gZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4vL1xuLy8gICB2YXIgZGQgPSBkYXRlLmdldERhdGUoKTtcbi8vICAgaWYgKGRkIDwgMTApIGRkID0gJzAnICsgZGQ7XG4vL1xuLy8gICB2YXIgbW0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuLy8gICBpZiAobW0gPCAxMCkgbW0gPSAnMCcgKyBtbTtcbi8vXG4vLyAgIHZhciB5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKSAlIDEwMDtcbi8vICAgaWYgKHl5IDwgMTApIHl5ID0gJzAnICsgeXk7XG4vL1xuLy8gICByZXR1cm4gZGQgKyAnLicgKyBtbSAgKyAnLicgKyB5eTtcbi8vXG4vLyB9XG4vL1xuLy8gdmFyIGQgPSBuZXcgRGF0ZSgyMDE0LCAwLCAzMCk7XG4vL1xuLy8gYWxlcnQoIGZvcm1hdERhdGUoZCkgKTtcbi8vIGZ1bmN0aW9uIGdldFNlY29uZHNUb1RvbW9ycm93KCkge1xuLy8gICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbi8vXG4vLyAgIHZhciB0b21vcnJvdyA9IG5ldyBEYXRlKCBub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIG5vdy5nZXREYXRlKCkgKyAxICk7XG4vL1xuLy8gICB2YXIgZGlmZiA9IHRvbW9ycm93IC0gbm93O1xuLy9cbi8vICAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZiAvIDEwMDAwKTsgICAvLzM2MDAwMDAg0LIg0YfQsNGB0Ytcbi8vXG4vLyB9XG4vL1xuLy8gYWxlcnQoZ2V0U2Vjb25kc1RvVG9tb3Jyb3coKSk7XG4vLyBmdW5jdGlvbiBnZXRTZWNvbmRzVG9kYXkoKSB7XG4vLyAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuLy9cbi8vICAgdmFyIHRvZGF5ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpKTtcbi8vXG4vLyAgICB2YXIgZGlmZiA9IG5vdyAtIHRvZGF5O1xuLy9cbi8vICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYgLyAxMDAwKTtcbi8vIH1cbi8vXG4vLyBhbGVydChnZXRTZWNvbmRzVG9kYXkoKSk7XG4vLyBmdW5jdGlvbiBnZXRMYXN0RGF5T2ZNb250aCh5ZWFyLCBtb250aCkge1xuLy8gICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMCk7XG4vLyAgIHJldHVybiBkYXRlLmdldERhdGUoKTtcbi8vIH1cbi8vXG4vLyBhbGVydCggZ2V0TGFzdERheU9mTW9udGgoMjAxMiwgMCkgKTsgLy8gMzFcbi8vIGFsZXJ0KCBnZXRMYXN0RGF5T2ZNb250aCgyMDEyLCAxKSApOyAvLyAyOVxuLy8gYWxlcnQoIGdldExhc3REYXlPZk1vbnRoKDIwMTMsIDEpICk7IC8vIDI4XG4vLyBmdW5jdGlvbiBnZXREYXRlQWdvKGRhdGUsIGRheXMpIHtcbi8vICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGF5cyk7XG4vLyAgIHJldHVybiBkYXRlLmdldERhdGUoKTtcbi8vIH1cbi8vIGZ1bmN0aW9uIGdldERhdGVBZ28oZGF0ZSwgZGF5cykge1xuLy8gICB2YXIgZGF0ZUNvcHkgPSBuZXcgRGF0ZShkYXRlKTsgLy9jb3B5IG9iamVjdFxuLy9cbi8vICAgZGF0ZUNvcHkuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRheXMpO1xuLy8gICByZXR1cm4gZGF0ZUNvcHkuZ2V0RGF0ZSgpO1xuLy8gfVxuLy9cbi8vIHZhciBkYXRlID0gbmV3IERhdGUoMjAxNSwgMCwgMik7XG4vL1xuLy8gYWxlcnQoIGdldERhdGVBZ28oZGF0ZSwgMSkgKTsgLy8gMSwgKDEg0Y/QvdCy0LDRgNGPIDIwMTUpXG4vLyBhbGVydCggZ2V0RGF0ZUFnbyhkYXRlLCAyKSApOyAvLyAzMSwgKDMxINC00LXQutCw0LHRgNGPIDIwMTQpXG4vLyBhbGVydCggZ2V0RGF0ZUFnbyhkYXRlLCAzNjUpICk7IC8vIDIsICgyINGP0L3QstCw0YDRjyAyMDE0KVxuLy8v0LTQtdC90Ywg0YEg0L/QvtC90LXQtNC10LvRjNC90LjQutCwLy8vXG4vLyBmdW5jdGlvbiBnZXRMb2NhbERheShkYXRlKSB7XG4vLyBcdHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuLy9cbi8vIFx0aWYgKGRheSA9PSAwKSB7XG4vLyBcdFx0ZGF5ID0gNztcbi8vIFx0fVxuLy9cbi8vIFx0cmV0dXJuIGRheTtcbi8vIH1cbi8vXG4vLyB2YXIgZGF0ZSA9IG5ldyBEYXRlKDIwMTIsIDAsIDMpO1xuLy9cbi8vIGFsZXJ0KGdldExvY2FsRGF5KCBkYXRlICkpO1xuLy/Qn9C+0LvRg9GH0LjRgtGMINC00LXQvdGMINC90LXQtNC10LvQuFxuLy8gZnVuY3Rpb24gZ2V0V2Vla0RheShkYXRlKSB7XG4vLyAgIHZhciBkYXlzID0gWyfQktC+0YHQutGA0LXRgdC10L3RjNC1JywgJ9Cf0L7QvdC10LTQtdC70YzQvdC40LonLCAn0JLRgtC+0YDQvdC40LonLCAn0KHRgNC10LTQsCcsICfQp9C10YLQstC10YDQsycsICfQn9GP0YLQvdC40YbQsCcsICfQodGD0LHQsdC+0YLQsCcsICfQktC+0YHQutGA0LXRgdC10L3RjNC1J107XG4vL1xuLy8gICByZXR1cm4gZGF5c1tkYXRlLmdldERheSgpXTtcbi8vIH1cbi8vIHZhciBkYXRlID0gbmV3IERhdGUoMjAxOSwgOSwgMyk7XG4vLyBhbGVydChnZXRXZWVrRGF5KGRhdGUpKTtcbi8vXG4vLyB2YXIgZGF0ZSA9IG5ldyBEYXRlKDIwMTksIDksIDMpOyAvLyAzINGP0L3QstCw0YDRjyAyMDE0XG4vLyBhbGVydCggZGF0ZS50b0xvY2FsZVN0cmluZygncnUnLCB7d2Vla2RheTogJ2xvbmcnfSkgKTsgLy8gJ9Cf0YInXG4vL9Cy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC00LDRgtGDINGB0YDQsNC30YMg0LIg0LLQuNC00LUg0LzQuNC70LvQuNGB0LXQutGD0L3QtCwg0L7QvSDQsNC90LDQu9C+0LPQuNGH0LXQvSDQstGL0LfQvtCy0YMgK25ldyBEYXRlKClcbi8v0L3QviDQsiDQvtGC0LvQuNGH0LjQtSDQvtGCINC90LXQs9C+INC90LUg0YHQvtC30LTQsNGR0YIg0L/RgNC+0LzQtdC20YPRgtC+0YfQvdGL0Lkg0L7QsdGK0LXQutGCINC00LDRgtGLLCDQsCDQv9C+0Y3RgtC+0LzRgyDigJMg0LLQviDQvNC90L7Qs9C+INGA0LDQtyDQsdGL0YHRgtGA0LXQtS5cbi8vYWxlcnQoRGF0ZS5ub3coKSk7XG4vLyB2YXIgbXNVVEMgPSBEYXRlLnBhcnNlKCcyMDEyLTAxLTI2VDEzOjUxOjUwLjQxN1onKTsgLy8g0LfQvtC90LAgVVRDXG4vLyBhbGVydCggbXNVVEMgKTsgLy8gMTMyNzU3MTUxMDQxNyAo0YfQuNGB0LvQviDQvNC40LvQu9C40YHQtdC60YPQvdC0KVxuLy8g0LjQvdGC0LXRgNC90LDRhtC40L7QvdCw0LvQuNC30LDRhtC40Y8vLy9cbi8vIHZhciBkYXRlID0gbmV3IERhdGUoMjAxNCwgMTEsIDMxLCAxMiwgMzAsIDApO1xuLy9cbi8vIHZhciBvcHRpb25zID0ge1xuLy8gICBlcmE6ICdsb25nJyxcbi8vICAgeWVhcjogJ251bWVyaWMnLFxuLy8gICBtb250aDogJ3Nob3J0Jyxcbi8vICAgZGF5OiAnbnVtZXJpYycsXG4vLyAgIHdlZWtkYXk6ICdsb25nJyxcbi8vICAgdGltZXpvbmU6ICdVVEMnLFxuLy8gICBob3VyOiAnbnVtZXJpYycsXG4vLyAgIG1pbnV0ZTogJ251bWVyaWMnLFxuLy8gICBzZWNvbmQ6ICdudW1lcmljJ1xuLy8gfTtcbi8vXG4vLyBhbGVydCggZGF0ZS50b0xvY2FsZVN0cmluZyhcInJ1XCIsIG9wdGlvbnMpICk7IC8vINGB0YDQtdC00LAsIDMxINC00LXQutCw0LHRgNGPIDIwMTQg0LMuINC9LtGNLiAxMjozMDowMFxuLy8gYWxlcnQoIGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKSApOyAvLyBXZWRuZXNkYXksIERlY2VtYmVyIDMxLCAyMDE0IEFubm8gRG9taW5pIDEyOjMwOjAwIFBNXG4vLy9jb25zb2xlLnRpbWUvLy9cbi8vIHZhciBhcnIgPSBbXTtcbi8vIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDsgaSsrKSBhcnJbaV0gPSAwO1xuLy9cbi8vIGZ1bmN0aW9uIHdhbGtJbihhcnIpIHtcbi8vICAgZm9yICh2YXIga2V5IGluIGFycikgYXJyW2tleV0rKztcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiB3YWxrTGVuZ3RoKGFycikge1xuLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyW2ldKys7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gYmVuY2goZikge1xuLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDAwOyBpKyspIGYoYXJyKTtcbi8vIH1cbi8vXG4vLyBjb25zb2xlLnRpbWUoXCJBbGwgQmVuY2htYXJrc1wiKTtcbi8vXG4vLyBjb25zb2xlLnRpbWUoXCJ3YWxrSW5cIik7XG4vLyBiZW5jaCh3YWxrSW4pO1xuLy8gY29uc29sZS50aW1lRW5kKFwid2Fsa0luXCIpO1xuLy9cbi8vIGNvbnNvbGUudGltZShcIndhbGtMZW5ndGhcIik7XG4vLyBiZW5jaCh3YWxrTGVuZ3RoKTtcbi8vIGNvbnNvbGUudGltZUVuZChcIndhbGtMZW5ndGhcIik7XG4vL1xuLy8gY29uc29sZS50aW1lRW5kKFwiQWxsIEJlbmNobWFya3NcIik7XG4vLy9CZW5jaG1hcmtpbmcvLy9cbi8vIHZhciBhcnIgPSBbXTtcbi8vIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDsgaSsrKSBhcnJbaV0gPSAwO1xuLy9cbi8vIGZ1bmN0aW9uIHdhbGtJbihhcnIpIHtcbi8vICAgZm9yICh2YXIga2V5IGluIGFycikgYXJyW2tleV0rKztcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiB3YWxrTGVuZ3RoKGFycikge1xuLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyW2ldKys7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gYmVuY2goZikge1xuLy8gICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4vLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDsgaSsrKSBmKGFycik7XG4vLyAgIHJldHVybiBuZXcgRGF0ZSgpIC0gZGF0ZTtcbi8vIH1cbi8vXG4vLyAvLyBiZW5jaCDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0YLQtdGB0YLQsCDQt9Cw0L/Rg9GB0YLQuNC8INC80L3QvtCz0L4g0YDQsNC3LCDRh9C10YDQtdC00YPRj1xuLy8gdmFyIHRpbWVJbiA9IDAsXG4vLyAgIHRpbWVMZW5ndGggPSAwO1xuLy8gZm9yICh2YXIgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuLy8gICB0aW1lSW4gKz0gYmVuY2god2Fsa0luKTtcbi8vICAgdGltZUxlbmd0aCArPSBiZW5jaCh3YWxrTGVuZ3RoKTtcbi8vIH1cbi8vXG4vLyBhbGVydCggJ9CS0YDQtdC80Y8gd2Fsa0luOiAnICsgdGltZUluICsgJ9C80YEnICk7XG4vLyBhbGVydCggJ9CS0YDQtdC80Y8gd2Fsa0xlbmd0aDogJyArIHRpbWVMZW5ndGggKyAn0LzRgScgKTtcbi8vL0JlbmNobWFya2luZy8vL1xuLy8gdmFyIGFyciA9IFtdO1xuLy8gZm9yICh2YXIgaSA9IDA7IGkgPCAxMDAwOyBpKyspIGFycltpXSA9IDA7XG4vL1xuLy8gZnVuY3Rpb24gd2Fsa0luKGFycikge1xuLy8gICBmb3IgKHZhciBrZXkgaW4gYXJyKSBhcnJba2V5XSsrO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIHdhbGtMZW5ndGgoYXJyKSB7XG4vLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnJbaV0rKztcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBiZW5jaChmKSB7XG4vLyAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbi8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDAwMDsgaSsrKSBmKGFycik7XG4vLyAgIHJldHVybiBuZXcgRGF0ZSgpIC0gZGF0ZTtcbi8vIH1cbi8vXG4vLyBhbGVydCggJ9CS0YDQtdC80Y8gd2Fsa0luOiAnICsgYmVuY2god2Fsa0luKSArICfQvNGBJyApO1xuLy8gYWxlcnQoICfQktGA0LXQvNGPIHdhbGtMZW5ndGg6ICcgKyBiZW5jaCh3YWxrTGVuZ3RoKSArICfQvNGBJyApO1xuLy8gdmFyIHN0YXJ0ID0gbmV3IERhdGU7IC8vINC30LDRgdC10LrQu9C4INCy0YDQtdC80Y9cbi8vXG4vLyAvLyDRh9GC0L4t0YLQviDRgdC00LXQu9Cw0YLRjFxuLy8gZm9yICh2YXIgaSA9IDA7IGkgPCAxMDAwMDsgaSsrKSB7XG4vLyAgIHZhciBkb1NvbWV0aGluZyA9IGkgKiBpICogaTtcbi8vIH1cbi8vXG4vLyB2YXIgZW5kID0gbmV3IERhdGU7IC8vINC60L7QvdC10YYg0LjQt9C80LXRgNC10L3QuNGPXG4vL1xuLy8gYWxlcnQoIFwi0KbQuNC60Lsg0LfQsNC90Y/QuyBcIiArIChlbmQgLSBzdGFydCkgKyBcIiBtc1wiICk7XG4vLyB2YXIgZGF0ZSA9IG5ldyBEYXRlKDIwMTEsIDAsIDEsIDIsIDMsIDQsIDU2Nyk7XG4vLyBhbGVydCggZGF0ZS5nZXRNb250aCgpICk7IC8vIDEuMDEuMjAxMSwgMDI6MDM6MDQuNTY3XG4vLyB2YXIgSmFuMDJfMTk3MCA9IG5ldyBEYXRlKDM2MDAgKiAyNCAqIDEwMDApO1xuLy8gYWxlcnQoIEphbjAyXzE5NzAgKTtcbi8vIC8vL0PRg9C80LzQsCDQstGB0LXRhSDQsNGA0LPRg9C80LXQvdGC0L7Qsi8vL1xuLy8gZnVuY3Rpb24gc3VtKHgpIHtcbi8vXG4vLyAgIHZhciByZXN1bHQgPSAwO1xuLy9cbi8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbi8vICAgICByZXN1bHQgKz0gYXJndW1lbnRzW2ldO1xuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gcmVzdWx0O1xuLy8gfVxuLy9cbi8vIGFsZXJ0KCBzdW0oKSApOyAvLyAwXG4vLyBhbGVydCggc3VtKDEpICk7IC8vIDFcbi8vIGFsZXJ0KCBzdW0oMSwgMikgKTsgLy8gM1xuLy8gYWxlcnQoIHN1bSgxLCAyLCAzKSApOyAvLyA2XG4vLyBhbGVydCggc3VtKDEsIDIsIDMsIDQpICk7IC8vIDEwXG4vLy8vMSwg0LXRgdC70Lgg0L/QtdGA0LLRi9C5INCw0YDQs9GD0LzQtdC90YIg0LXRgdGC0YwsINC4IDAgLSDQtdGB0LvQuCDQvdC10YIvLy9cbi8vIGZ1bmN0aW9uIGYoeCkge1xuLy8gICBhbGVydChhcmd1bWVudHMubGVuZ3RoID8gMSA6IDApO1xuLy8gfVxuLy9cbi8vIGYoKTtcbi8vL2Z1IGJhci8vL1xuLy8gdmFyIGFyciA9IFsxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMF07XG4vL1xuLy8gYXJyLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSl7XG4vLyBcdGlmKChpdGVtICUgMyA9PT0gMCAmJiBpdGVtICUgNSA9PT0gMCkpIHtcbi8vIFx0XHRhbGVydChpdGVtICsgXCI6IGZ1LCBiYXJcIik7XG4vLyBcdH0gZWxzZSBpZiAoKGl0ZW0gJSAzKSA9PT0gMCkge1xuLy8gXHRcdGFsZXJ0KGl0ZW0gKyBcIjogZnVcIik7XG4vLyBcdH0gZWxzZSBpZiAoKGl0ZW0gJSA1KSA9PT0gMCkge1xuLy8gXHRcdGFsZXJ0KGl0ZW0gKyBcIjogYmFyXCIpO1xuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdGFsZXJ0IChpdGVtKTtcbi8vIFx0fVxuLy8gfSk7XG4vL2Z1IGJhciAtIGZvci8vL1xuLy8gdmFyIGFyciA9IFsxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMF07XG4vL1xuLy8gZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbi8vIFx0dmFyIGl0ZW0gPSBhcnJbaV07XG4vLyBcdGlmIChpdGVtICUgMyA9PT0gMCAmJiBpdGVtICUgNSA9PT0gMCkge1xuLy8gXHRcdGFsZXJ0KGl0ZW0gKyBcIiA6IGZ1LCBiYXJcIik7XG4vLyBcdH0gZWxzZSBpZiAoaXRlbSAlIDMgPT09IDApIHtcbi8vIFx0XHRhbGVydChpdGVtICsgXCIgOiBmdVwiKTtcbi8vIFx0fSBlbHNlIGlmIChhcnJbaV0gJSA1ID09PSAwKSB7XG4vLyBcdFx0YWxlcnQoaXRlbSArIFwiIDogYmFyXCIpO1xuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdGFsZXJ0KGl0ZW0pO1xuLy8gXHR9XG4vLyB9XG4vLyB2YXIgYXJyID0gWyAxLCAyLCAzLCA0LCA1IF1cbi8vXG4vLyBmdW5jdGlvbiBnZXRTdW1zKGFycikge1xuLy8gICB2YXIgcmVzdWx0ID0gW107XG4vLyAgIGlmICghYXJyLmxlbmd0aCkgcmV0dXJuIHJlc3VsdDtcbi8vXG4vLyAgIHZhciB0b3RhbFN1bSA9IGFyci5yZWR1Y2UoZnVuY3Rpb24oc3VtLCBpdGVtKSB7XG4vLyAgICAgcmVzdWx0LnB1c2goc3VtKTtcbi8vICAgICByZXR1cm4gc3VtICsgaXRlbTtcbi8vICAgfSk7XG4vLyAgIHJlc3VsdC5wdXNoKHRvdGFsU3VtKTtcbi8vXG4vLyAgIHJldHVybiByZXN1bHQ7XG4vLyB9XG4vL1xuLy8gYWxlcnQoZ2V0U3VtcyhbMSwgMiwgMywgNCwgNV0pKTtcbi8vL9CS0YvQsdC+0YAg0YPQvdC40LrQsNC70YzQvdC+0LPQviDQvtCx0YrQtdC60YLQsCAo0LzQtdC00LvQtdC90L3QvikvLy9cbi8vIGZ1bmN0aW9uIHVuaXF1ZShhcnIpIHtcbi8vICAgdmFyIHJlc3VsdCA9IFtdO1xuLy9cbi8vICAgbmV4dElucHV0OlxuLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICB2YXIgc3RyID0gYXJyW2ldOyAvLyDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0Y3Qu9C10LzQtdC90YLQsFxuLy8gICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZXN1bHQubGVuZ3RoOyBqKyspIHsgLy8g0LjRidC10LwsINCx0YvQuyDQu9C4INC+0L0g0YPQttC1P1xuLy8gICAgICAgICBpZiAocmVzdWx0W2pdID09IHN0cikgY29udGludWUgbmV4dElucHV0OyAvLyDQtdGB0LvQuCDQtNCwLCDRgtC+INGB0LvQtdC00YPRjtGJ0LjQuVxuLy8gICAgICAgfVxuLy8gICAgICAgcmVzdWx0LnB1c2goc3RyKTtcbi8vICAgICB9XG4vL1xuLy8gICByZXR1cm4gcmVzdWx0O1xuLy8gfVxuLy9cbi8vIHZhciBzdHJpbmdzID0gW1wi0LrRgNC40YjQvdCwXCIsIFwi0LrRgNC40YjQvdCwXCIsIFwi0YXQsNGA0LVcIiwgXCLRhdCw0YDQtVwiLFxuLy8gICBcItGF0LDRgNC1XCIsIFwi0YXQsNGA0LVcIiwgXCLQutGA0LjRiNC90LBcIiwgXCLQutGA0LjRiNC90LBcIiwgXCI4LSgpXCJcbi8vIF07XG4vL1xuLy8gYWxlcnQoIHVuaXF1ZShzdHJpbmdzKSApOyAvLyDQutGA0LjRiNC90LAsINGF0LDRgNC1LCA4LSgpXG4vLyAvLy/QktGL0LHQvtGAINGD0L3QuNC60LDQu9GM0L3QvtCz0L4g0L7QsdGK0LXQutGC0LAgKNCx0YvRgdGC0YDQvikvLy9cbi8vIGZ1bmN0aW9uIHVuaXF1ZShhcnIpIHtcbi8vICAgdmFyIG9iaiA9IHt9O1xuLy9cbi8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbi8vICAgICB2YXIgc3RyID0gYXJyW2ldO1xuLy8gICAgIG9ialtzdHJdID0gdHJ1ZTtcbi8vICAgfVxuLy9cbi8vICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaik7XG4vLyB9XG4vL1xuLy8gdmFyIHN0cmluZ3MgPSBbXCLQutGA0LjRiNC90LBcIiwgXCLQutGA0LjRiNC90LBcIiwgXCLRhdCw0YDQtVwiLCBcItGF0LDRgNC1XCIsXG4vLyAgIFwi0YXQsNGA0LVcIiwgXCLRhdCw0YDQtVwiLCBcItC60YDQuNGI0L3QsFwiLCBcItC60YDQuNGI0L3QsFwiLCBcIjgtKClcIlxuLy8gXTtcbi8vXG4vLyBhbGVydCggdW5pcXVlKHN0cmluZ3MpICk7XG4vLyBmdW5jdGlvbiBhY2xlYW4oYXJyKSB7XG4vL1xuLy8gICB2YXIgb2JqID0ge307XG4vL1xuLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuLy8gICAgIHZhciBzb3J0ZWQgPSBhcnJbaV0udG9Mb3dlckNhc2UoKS5zcGxpdCgnJykuc29ydCgpLmpvaW4oJycpO1xuLy9cbi8vICAgICBvYmpbc29ydGVkXSA9IGFycltpXTtcbi8vICAgfVxuLy9cbi8vICAgdmFyIHJlc3VsdCA9IFtdO1xuLy9cbi8vICAgZm9yICh2YXIga2V5IGluIG9iaikgcmVzdWx0LnB1c2gob2JqW2tleV0pO1xuLy9cbi8vICAgcmV0dXJuIHJlc3VsdDtcbi8vIH1cbi8vXG4vLyB2YXIgYXJyID0gW1wi0LLQvtC3XCIsIFwi0LrQuNCx0L7RgNCzXCIsIFwi0LrQvtGA0YHQtdGCXCIsIFwi0JfQntCSXCIsIFwi0LPRgNC+0LHQuNC6XCIsIFwi0LrQvtGB0YLQtdGAXCIsIFwi0YHQtdC60YLQvtGAXCJdO1xuLy9cbi8vIGFsZXJ0KCBhY2xlYW4oYXJyKSApO1xuLy8gdmFyIGxpc3QgPSB7XG4vLyAgIHZhbHVlOiAxLFxuLy8gICBuZXh0OiB7XG4vLyAgICAgdmFsdWU6IDIsXG4vLyAgICAgbmV4dDoge1xuLy8gICAgICAgdmFsdWU6IDMsXG4vLyAgICAgICBuZXh0OiB7XG4vLyAgICAgICAgIHZhbHVlOiA0LFxuLy8gICAgICAgICBuZXh0OiBudWxsXG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9O1xuLy9cbi8vIGZ1bmN0aW9uIHByaW50UmV2ZXJzZUxpc3QobGlzdCkge1xuLy8gICB2YXIgYXJyID0gW107XG4vLyAgIHZhciB0bXAgPSBsaXN0O1xuLy9cbi8vICAgd2hpbGUgKHRtcCkge1xuLy8gICAgIGFyci5wdXNoKHRtcC52YWx1ZSk7XG4vLyAgICAgdG1wID0gdG1wLm5leHQ7XG4vLyAgIH1cbi8vXG4vLyAgIGZvciAodmFyIGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbi8vICAgICBhbGVydCggYXJyW2ldICk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBwcmludFJldmVyc2VMaXN0KGxpc3QpO1xuLy8gdmFyIGxpc3QgPSB7XG4vLyAgIHZhbHVlOiAxLFxuLy8gICBuZXh0OiB7XG4vLyAgICAgdmFsdWU6IDIsXG4vLyAgICAgbmV4dDoge1xuLy8gICAgICAgdmFsdWU6IDMsXG4vLyAgICAgICBuZXh0OiB7XG4vLyAgICAgICAgIHZhbHVlOiA0LFxuLy8gICAgICAgICBuZXh0OiBudWxsXG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9O1xuLy9cbi8vIGZ1bmN0aW9uIHByaW50UmV2ZXJzZUxpc3QobGlzdCkge1xuLy9cbi8vICAgaWYgKGxpc3QubmV4dCkge1xuLy8gICAgIHByaW50UmV2ZXJzZUxpc3QobGlzdC5uZXh0KTtcbi8vICAgfVxuLy9cbi8vICAgYWxlcnQoIGxpc3QudmFsdWUgKTtcbi8vIH1cbi8vXG4vLyBwcmludFJldmVyc2VMaXN0KGxpc3QpO1xuLy8gdmFyIGxpc3QgPSB7XG4vLyAgIHZhbHVlOiAxLFxuLy8gICBuZXh0OiB7XG4vLyAgICAgdmFsdWU6IDIsXG4vLyAgICAgbmV4dDoge1xuLy8gICAgICAgdmFsdWU6IDMsXG4vLyAgICAgICBuZXh0OiB7XG4vLyAgICAgICAgIHZhbHVlOiA0LFxuLy8gICAgICAgICBuZXh0OiBudWxsXG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9O1xuLy9cbi8vIGZ1bmN0aW9uIHByaW50TGlzdChsaXN0KSB7XG4vL1xuLy8gICBhbGVydChsaXN0LnZhbHVlKTtcbi8vXG4vLyAgIGlmIChsaXN0Lm5leHQpIHtcbi8vICAgICBwcmludExpc3QobGlzdC5uZXh0KTtcbi8vICAgfVxuLy9cbi8vIH1cbi8vXG4vLyBwcmludExpc3QobGlzdCk7XG4vLyB2YXIgbGlzdCA9IHtcbi8vICAgdmFsdWU6IDEsXG4vLyAgIG5leHQ6IHtcbi8vICAgICB2YWx1ZTogMixcbi8vICAgICBuZXh0OiB7XG4vLyAgICAgICB2YWx1ZTogMyxcbi8vICAgICAgIG5leHQ6IHtcbi8vICAgICAgICAgdmFsdWU6IDQsXG4vLyAgICAgICAgIG5leHQ6IG51bGxcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH07XG4vL1xuLy8gZnVuY3Rpb24gcHJpbnRMaXN0KGxpc3QpIHtcbi8vICAgdmFyIHRtcCA9IGxpc3Q7XG4vL1xuLy8gICB3aGlsZSAodG1wKSB7XG4vLyAgICAgYWxlcnQgKCB0bXAudmFsdWUgKTtcbi8vICAgICB0bXAgPSB0bXAubmV4dDtcbi8vICAgfVxuLy9cbi8vIH1cbi8vXG4vLyBwcmludExpc3QobGlzdCk7XG4vLyBmdW5jdGlvbiBzb3J0QnlBZ2UocGVyc29uQSwgcGVyc29uQikge1xuLy8gICByZXR1cm4gcGVyc29uQS5hZ2UgLSBwZXJzb25CLmFnZTtcbi8vIH1cbi8vXG4vLyB2YXIgdmFzeWEgPSB7bmFtZTogJ9CS0LDRgdGPJywgYWdlOiAyMyB9O1xuLy8gdmFyIG1hc2hhID0ge25hbWU6ICfQnNCw0YjQsCcsIGFnZTogMTggfTtcbi8vIHZhciB2b3ZvY2hrYSA9IHtuYW1lOiAn0JLQvtCy0L7Rh9C60LAnLCBhZ2U6IDYgfTtcbi8vXG4vLyB2YXIgcGVvcGxlID0gW3Zhc3lhLCBtYXNoYSwgdm92b2Noa2FdO1xuLy9cbi8vIHBlb3BsZS5zb3J0KHNvcnRCeUFnZSk7XG4vL1xuLy9cbi8vIGZvciAodmFyIGkgPSAwOyBpIDwgcGVvcGxlLmxlbmd0aDsgaSsrKSB7XG4vLyAgIGFsZXJ0KHBlb3BsZVtpXS5uYW1lKTtcbi8vIH1cbi8vL9Cg0LDQvdC00L7QvCDQt9C90LDRh9C10L3QuNC5INCyINC80LDRgdGB0LjQstC1Ly8vXG4vLyB2YXIgYXJyID0gWzEsIDIsIDMsIDQsIDVdO1xuLy9cbi8vIGZ1bmN0aW9uIHJhbmRvbShhLCBiKSB7XG4vLyAgIHJldHVybiBNYXRoLnJhbmRvbSgpO1xuLy8gfVxuLy9cbi8vIGFyci5zb3J0KHJhbmRvbSk7XG4vL1xuLy8gYWxlcnQoYXJyKTtcbi8vL9Ch0L7RgNGC0LjRgNC+0LLQutCwLy8vXG4vLyB2YXIgYXJyID0gWydIVE1MJywgJ0phdmFTY3JpcHQnLCAnQ1NTJ107XG4vL1xuLy8gdmFyIGFyclNvcnRlZCA9IGFyci5zbGljZSgpLnNvcnQoKTtcbi8vXG4vL1xuLy8gYWxlcnQoYXJyU29ydGVkKTtcbi8vIGFsZXJ0KGFycik7XG4vLy/QodGA0LDQstC90LXQvdC40LUg0L/QviDQv9C+0YDRj9C00LrRgy8vL1xuLy8gdmFyIGFyciA9IFs1LCAyLCAxLCAtMTAsIDhdO1xuLy9cbi8vIGZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuLy8gICByZXR1cm4gYSAtIGI7XG4vLyB9XG4vL1xuLy8gYWxlcnQoYXJyLnNvcnQoY29tcGFyZSkpO1xuLy8gZnVuY3Rpb24gZmlsdGVyUmFuZ2VJblBsYWNlIChhcnIsIGEsIGIpIHtcbi8vXG4vLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgaWYgKGFycltpXSA8IGEgfHwgYXJyW2ldID4gYikge1xuLy8gICAgICAgYXJyLnNwbGljZShpLS0sIDEpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuLy9cbi8vIHZhciBhcnIgPSBbNSwgMywgOCwgMV07XG4vL1xuLy8gZmlsdGVyUmFuZ2VJblBsYWNlKGFyciwgMSwgNCk7XG4vLyBhbGVydCggYXJyICk7IC8vIFszLCAxXVxuLy8v0KPQtNCw0LvQuNGC0Ywg0LrQu9Cw0YHRgS8vL1xuLy8gZnVuY3Rpb24gcmVtb3ZlQ2xhc3Mob2JqLCBjbHMpIHtcbi8vXG4vLyAgIHZhciByZW1vdmUgPSBvYmouY2xhc3NOYW1lID8gb2JqLmNsYXNzTmFtZS5zcGxpdCgnICcpIDogW107XG4vL1xuLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IHJlbW92ZS5sZW5ndGg7IGkrKykge1xuLy8gICAgIGlmIChyZW1vdmVbaV0gPT0gY2xzKSB7XG4vLyAgICAgICByZW1vdmUuc3BsaWNlKGksIDEpO1xuLy8gICAgICAgaS0tO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICBvYmouY2xhc3NOYW1lID0gcmVtb3ZlLmpvaW4oJyAnKTtcbi8vXG4vLyB9XG4vL1xuLy8gdmFyIG9iaiA9IHtcbi8vICAgY2xhc3NOYW1lOiAnb3BlbiBtZW51IG1lbnUnXG4vLyB9XG4vL1xuLy8gcmVtb3ZlQ2xhc3Mob2JqLCAnYmxhYmxhJyk7XG4vLyByZW1vdmVDbGFzcyhvYmosICdtZW51Jyk7XG4vLyBhbGVydChvYmouY2xhc3NOYW1lKTtcbi8vL9Cj0LTQsNC70LXQvdC40LUg0LTQtdGE0LjRgdC+0LIvLy8vXG4vLyBmdW5jdGlvbiBjYW1lbGl6ZShzdHIpIHtcbi8vXG4vLyAgIHZhciBtaW51cyA9IHN0ci5zcGxpdCgnLScpO1xuLy9cbi8vICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtaW51cy5sZW5ndGg7IGkrKykge1xuLy8gICAgIC8v0L/QtdGA0LLRi9C5INGB0LjQvNCy0L7QuyDQv9C+0YHQu9C1INGB0L/Qu9C40YLQsCDRgSDQsdC+0LvRjNGI0L7QuSDQsdGD0LrQstGLXG4vLyAgICAgbWludXNbaV0gPSBtaW51c1tpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1pbnVzW2ldLnNsaWNlKDEpO1xuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gbWludXMuam9pbignJyk7XG4vL1xuLy8gfVxuLy9cbi8vIGFsZXJ0ICggY2FtZWxpemUgKFwiYmFja2dyb3VuZC1jb2xvclwiKSApO1xuLy8gYWxlcnQgKCBjYW1lbGl6ZSAoXCJsaXN0LXN0eWxlLWltYWdlXCIpICk7XG4vLyBhbGVydCAoIGNhbWVsaXplIChcIi13ZWJraXQtdHJhbnNpdGlvblwiKSApO1xuLy8gZnVuY3Rpb24gYWRkQ2xhc3Mob2JqLCBjbHMpIHtcbi8vXG4vLyAgIHZhciBjbGFzc2VzID0gW107XG4vL1xuLy8gICBpZiAob2JqLmNsYXNzTmFtZSkge1xuLy8gICAgIGNsYXNzZXMgPSBvYmouY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4vLyAgIH1cbi8vXG4vLyAgIC8vIHZhciBjbGFzc2VzID0gb2JqLmNsYXNzTmFtZSA/IG9iai5jbGFzc05hbWUuc3BsaXQoJyAnKSA6IFtdO1xuLy9cbi8vIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuLy8gICBpZiAoY2xhc3Nlc1tpXSA9PSBjbHMpIHJldHVybjtcbi8vIH1cbi8vXG4vLyBjbGFzc2VzLnB1c2goY2xzKTtcbi8vXG4vLyBvYmouY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJyk7XG4vL1xuLy8gfVxuLy9cbi8vIHZhciBvYmogPSB7XG4vLyAgIGNsYXNzTmFtZTogJ29wZW4gbWVudSdcbi8vIH07XG4vL1xuLy8gYWRkQ2xhc3Mob2JqLCAnbmV3Jyk7XG4vLyBhZGRDbGFzcyhvYmosICdvcGVuJyk7XG4vLyBhZGRDbGFzcyhvYmosICdtZScpO1xuLy8gYWxlcnQob2JqLmNsYXNzTmFtZSkgLy8gb3BlbiBtZW51IG5ldyBtZVxuLy8gZnVuY3Rpb24gYWRkQ2xhc3Mob2JqLCBjbHMpIHtcbi8vICAgdmFyIGNsYXNzZXMgPSBvYmouY2xhc3NOYW1lID8gb2JqLmNsYXNzTmFtZS5zcGxpdCgnICcpIDogW107XG4vL1xuLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICBpZiAoY2xhc3Nlc1tpXSA9PSBjbHMpIHJldHVybjtcbi8vICAgfVxuLy9cbi8vICAgY2xhc3Nlcy5wdXNoKGNscyk7XG4vL1xuLy8gICBvYmouY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJyk7XG4vLyB9XG4vL1xuLy8gdmFyIG9iaiA9IHtcbi8vICAgY2xhc3NOYW1lOiAnb3BlbiBtZW51J1xuLy8gfTtcbi8vXG4vLyBhZGRDbGFzcyhvYmosICduZXcnKTtcbi8vIGFkZENsYXNzKG9iaiwgJ29wZW4nKTtcbi8vIGFkZENsYXNzKG9iaiwgJ21lJyk7XG4vL1xuLy8gYWxlcnQob2JqLmNsYXNzTmFtZSk7XG4vLy/QnNCw0YHRgdC40LIg0L3QsNC40LHQvtC70YzRiNC10Lkg0LPRgNGD0L/Qv9GLIChPKG4pKSAvLy9cbi8vIGZ1bmN0aW9uIGdldE1heFN1YlN1bShhcnIpIHtcbi8vICAgdmFyIG1heFN1bSA9IDAsXG4vLyAgICAgcGFydGlhbFN1bSA9IDA7XG4vL1xuLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICBwYXJ0aWFsU3VtICs9IGFycltpXTtcbi8vICAgICAgIG1heFN1bSA9IE1hdGgubWF4KG1heFN1bSwgcGFydGlhbFN1bSk7XG4vLyAgICAgICBpZiAocGFydGlhbFN1bSA8IDApIHBhcnRpYWxTdW0gPSAwO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gbWF4U3VtO1xuLy8gfVxuLy9cbi8vIGFsZXJ0KCBnZXRNYXhTdWJTdW0oWy0xLCAyLCAzLCAtOV0pICk7IC8vIDVcbi8vIGFsZXJ0KCBnZXRNYXhTdWJTdW0oWy0xLCAyLCAzLCAtOSwgMTFdKSApOyAvLyAxMVxuLy8gYWxlcnQoIGdldE1heFN1YlN1bShbLTIsIC0xLCAxLCAyXSkgKTsgLy8gM1xuLy8gYWxlcnQoIGdldE1heFN1YlN1bShbMTAwLCAtOSwgMiwgLTMsIDVdKSApOyAvLyAxMDBcbi8vIGFsZXJ0KCBnZXRNYXhTdWJTdW0oWzEsIDIsIDNdKSApOyAvLyA2XG4vLyBhbGVydCggZ2V0TWF4U3ViU3VtKFstMSwgLTIsIC0zXSkgKTsgLy8gMFxuLy8v0LzQsNGB0YHQuNCyINC90LDQuNCx0L7Qu9GM0YjQtdC5INCz0YDRg9C/0L/RiyAoTyhuXjIpKS8vL1xuLy8gZnVuY3Rpb24gZ2V0TWF4U3ViU3VtKGFycikge1xuLy8gICB2YXIgbWF4U3VtID0gMDtcbi8vXG4vLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgdmFyIHN1bUZpeGVkU3RhcnQgPSAwO1xuLy8gICAgIGZvciAodmFyIGogPSBpOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XG4vLyAgICAgICBzdW1GaXhlZFN0YXJ0ICs9IGFycltqXTtcbi8vICAgICAgIG1heFN1bSA9IE1hdGgubWF4KG1heFN1bSwgc3VtRml4ZWRTdGFydCk7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIHJldHVybiBtYXhTdW07XG4vLyB9XG4vL1xuLy8gYWxlcnQoIGdldE1heFN1YlN1bShbLTEsIDIsIDMsIC05XSkgKTsgLy8gNVxuLy8gYWxlcnQoIGdldE1heFN1YlN1bShbLTEsIDIsIDMsIC05LCAxMV0pICk7IC8vIDExXG4vLyBhbGVydCggZ2V0TWF4U3ViU3VtKFstMiwgLTEsIDEsIDJdKSApOyAvLyAzXG4vLyBhbGVydCggZ2V0TWF4U3ViU3VtKFsxLCAyLCAzXSkgKTsgLy8gNlxuLy8gYWxlcnQoIGdldE1heFN1YlN1bShbMTAwLCAtOSwgMiwgLTMsIDVdKSApOyAvLyAxMDBcbi8v0KDQtdGI0LXRgtC+INCt0YDQsNGC0L7RgdGE0LXQvdCwIC0gKNCy0YHQtSDQv9GA0L7RgdGC0YvQtSDRh9C40YHQu9CwINC+0YIgMiDQtNC+IDEwMClcbi8vINGI0LDQsyAxIC0g0YHQv9C40YHQvtC6INC/0L7RgdC70LXQtNC+0LLQsNGC0LXQu9GM0L3Ri9GFINGH0LjRgdC10Lsg0L7RgiAyINC00L4gMTAwXG4vLyB2YXIgYXJyID0gW107XG4vL1xuLy8gZm9yICh2YXIgaSA9IDI7IGkgPCAxMDA7IGkrKykge1xuLy8gICBhcnJbaV0gPSB0cnVlO1xuLy8gfVxuLy9cbi8vIC8vINGI0LDQsyAyIC0g0L/QtdGA0LLQvtC1INC/0YDQvtGB0YLQvtC1INGH0LjRgdC70L5cbi8vIHZhciBwID0gMjtcbi8vXG4vLyBkbyB7XG4vLyAgIC8vINGI0LDQsyAzIC0g0LfQsNGH0LXRgNC60LjQstCw0LXQvCDQstGB0LUg0L/QvtGB0LvQtdC00YPRidC40LUg0YfQuNGB0LvQsCDRgSDRgNCw0LfQvdC40YbQtdC5INCyIHAgLSAoNCw2LDgpXG4vLyAgIGZvciAoaSA9IDIgKiBwOyBpIDwgMTAwOyBpICs9IHApIHtcbi8vICAgICBhcnJbaV0gPSBmYWxzZTtcbi8vICAgfVxuLy9cbi8vICAgLy8g0YjQsNCzIDRcbi8vICAgZm9yIChpID0gcCArIDE7IGkgPCAxMDA7IGkrKykge1xuLy8gICAgIGlmIChhcnJbaV0pIGJyZWFrO1xuLy8gICB9XG4vL1xuLy8gICBwID0gaTsgLy8gKDMsIDUsIDcpXG4vLyB9IHdoaWxlIChwICogcCA8IDEwMCk7IC8vINGI0LDQsyA1XG4vL1xuLy8gLy8g0YjQsNCzIDYgKNCz0L7RgtC+0LLQvilcbi8vIC8vINC/0L7RgdGH0LjRgtCw0YLRjCDRgdGD0LzQvNGDXG4vLyB2YXIgc3VtID0gMDtcbi8vIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbi8vICAgaWYgKGFycltpXSkge1xuLy8gICAgIHN1bSArPSBpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gYWxlcnQoIHN1bSApO1xuLy8gZnVuY3Rpb24gZmlsdGVyZWRSYW5nZSAoYXJyLCBhLCBiKSB7XG4vLyAgIHZhciByZXN1bHQgPSBbXTtcbi8vXG4vLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIGlmIChhcnJbaV0gPj0gYSAmJiBhcnJbaV0gPD0gYikge1xuLy8gICAgICAgICByZXN1bHQucHVzaChhcnJbaV0pO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vIH1cbi8vXG4vLyB2YXIgYXJyYXkgPSBbNSwgNCwgMyAsOCAsMF07XG4vL1xuLy8gdmFyIGZpbHRlcmVkID0gZmlsdGVyZWRSYW5nZShhcnJheSwgMywgNSk7XG4vLyBhbGVydCggZmlsdGVyZWQgKTtcbi8vL9C/0L7QuNGB0Log0LIg0LzQsNGB0YHQuNCy0LUvLy9cbi8vINGB0L7Qt9C00LDQtdC8INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LIg0Lgg0L/RgNC+0LLQtdGA0Y/QtdC8INC/0L7QtNC00LXRgNC20LjQstCw0LXRgtGB0Y8g0LvQuCBpbmRleE9mXG4vLyBpZiAoW10uaW5kZXhPZikge1xuLy9cbi8vICAgdmFyIGZpbmQgPSBmdW5jdGlvbihhcnJheSwgdmFsdWUpIHtcbi8vICAgICByZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSk7XG4vLyAgIH1cbi8vXG4vLyB9IGVsc2Uge1xuLy8gICB2YXIgZmluZCA9IGZ1bmN0aW9uKGFycmF5LCB2YWx1ZSkge1xuLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIGlmIChhcnJheVtpXSA9PT0gdmFsdWUpIHJldHVybiBpO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgcmV0dXJuIC0xO1xuLy8gICB9XG4vL1xuLy8gfVxuLy9cbi8vIHZhciBhcnIgPSBbJ2EnLCAtMSwgMiwgJ2InXTtcbi8vXG4vLyB2YXIgaW5kZXggPSBmaW5kKGFyciwgMik7XG4vL1xuLy8gYWxlcnQgKGluZGV4KTtcbi8vL9Ca0LDQu9GM0LrRg9C70Y/RgtC+0YAvLy9cbi8vIHZhciBudW1iZXJzID0gW107XG4vL1xuLy8gd2hpbGUgKHRydWUpIHtcbi8vXG4vLyAgIHZhciB2YWx1ZSA9IHByb21wdCgn0JLQstC10LTQuNGC0LUg0YfQuNGB0LvQvjonLCAwKTtcbi8vXG4vLyAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycgfHwgaXNOYU4odmFsdWUpKSBicmVhaztcbi8vXG4vLyAgIG51bWJlcnMucHVzaCgrdmFsdWUpO1xuLy9cbi8vIH1cbi8vXG4vLyB2YXIgc3VtID0gMDtcbi8vIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVycy5sZW5ndGg7IGkrKykge1xuLy8gICBzdW0gKz0gbnVtYmVyc1tpXTtcbi8vIH1cbi8vXG4vLyBhbGVydCAoIHN1bSApO1xuLy8g0KDQsNC90LTQvtC8INC30L3QsNGH0LXQvdC40Y8vLy9cbi8vIHZhciBhcnIgPSBbJ9Cv0LHQu9C+0LrQvicsICfQkNC/0LXQu9GM0YHQuNC9JywgJ9CT0YDRg9GI0LAnLCAn0JvQuNC80L7QvSddO1xuLy9cbi8vIHZhciByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7XG4vL1xuLy8gYWxlcnQoIGFycltyYW5kXSApO1xuLy8gdmFyIHN0eWxlcyA9IFsnZHpoYXMnLCAnYmx1ZXMnXTtcbi8vXG4vLyBzdHlsZXMucHVzaCgncm9ja05yb2xsJyk7IC8v0LTQvtCx0LDQstC40LvQuCDRgNC+0LrQvdGA0L7QuyDQsiDQutC+0L3QtdGGXG4vL1xuLy8gc3R5bGVzW3N0eWxlcy5sZW5ndGggLSAyXSA9ICdjbGFzc2ljJzsgLy/Qv9C10YDQtdC30LDQv9C40YHRi9Cy0LDQtdC8INC/0YDQtdC00L/QvtGB0LvQtdC00L3QuNC5INC90LAg0LrQu9Cw0YHQuNC6XG4vL1xuLy8gc3R5bGVzLnNoaWZ0KDApOyAgLy/Rg9C00LDQu9GP0LXQvCDQv9C10YDQstGL0Llcbi8vXG4vLyBzdHlsZXMudW5zaGlmdCgncmFwJywgJ3JhZ2d5Jyk7IC8vINC00L7QsdCw0LLQu9GP0LXQvCDQsiDQvdCw0YfQsNC70L4g0YDRjdC/INC4INGA0Y3Qs9Cz0Lhcbi8vXG4vLyBhbGVydChzdHlsZXMpO1xuLy8v0JrQu9C+0L3QuNGA0YPQtdC8INC+0LHRitC10LrRgi8vL1xuLy8gdmFyIHVzZXIgPSB7XG4vLyAgIG5hbWU6IFwi0JLQsNGB0Y9cIixcbi8vICAgYWdlOiAzMFxuLy8gfTtcbi8vXG4vLyB2YXIgY2xvbmUgPSB7fTsgLy8g0L3QvtCy0YvQuSDQv9GD0YHRgtC+0Lkg0L7QsdGK0LXQutGCXG4vL1xuLy8gLy8g0YHQutC+0L/QuNGA0YPQtdC8INCyINC90LXQs9C+INCy0YHQtSDRgdCy0L7QudGB0YLQstCwIHVzZXJcbi8vIGZvciAodmFyIGtleSBpbiB1c2VyKSB7XG4vLyAgIGNsb25lW2tleV0gPSB1c2VyW2tleV07XG4vLyB9XG4vL1xuLy8gLy8g0YLQtdC/0LXRgNGMIGNsb25lIC0g0L/QvtC70L3QvtGB0YLRjNGOINC90LXQt9Cw0LLQuNGB0LjQvNCw0Y8g0LrQvtC/0LjRj1xuLy8gY2xvbmUubmFtZSA9IFwi0J/QtdGC0Y9cIjsgLy8g0L/QvtC80LXQvdGP0LvQuCDQtNCw0L3QvdGL0LUg0LIgY2xvbmVcbi8vXG4vLyBhbGVydCggdXNlci5uYW1lICk7IC8vINC/0L4t0L/RgNC10LbQvdC10LzRgyBcItCS0LDRgdGPXCJcbi8vL9Cj0LzQvdC+0LbQsNC10Lwg0YfQuNGB0LvQsC8vL1xuLy8gdmFyIG1lbnUgPSB7XG4vLyAgIHdpZHRoOiAyMDAsXG4vLyAgIGhlaWdodDogMzAwLFxuLy8gICB0aXRsZTogXCJNeSBtZW51XCJcbi8vIH07XG4vL1xuLy8gZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbi8vICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBtdWx0aXBseU51bWVyaWMob2JqKXtcbi8vICAgZm9yKHZhciBrZXkgaW4gb2JqKXtcbi8vXG4vLyAgICAgaWYoaXNOdW1lcmljKG9ialtrZXldKSkge1xuLy8gICAgICAgb2JqW2tleV0gKj0gMjtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBtdWx0aXBseU51bWVyaWMobWVudSk7XG4vL1xuLy9cbi8vIGFsZXJ0KCAnIG1lbnUgd2lkdGggPSAnICsgbWVudS53aWR0aCArICcgaGVpZ2h0ID0gJyArIG1lbnUuaGVpZ2h0ICsgJyB0aXRsZSA9ICcgKyBtZW51LnRpdGxlICk7XG4vLy/QstGL0LLQvtC0INC30LDRgNC/0LvQsNGC0YsvLy9cbi8vIHZhciBzYWxhcmllcyA9IHtcbi8vIFx0J9CS0LDRgdGPJzogMTAwLFxuLy8gXHQn0J/QtdGC0Y8nOiAzMDAsXG4vLyBcdCfQlNCw0YjQsCc6IDI1MFxuLy8gfTtcbi8vXG4vL1xuLy8gdmFyIG1heCA9IDA7XG4vLyB2YXIgbWF4TmFtZSA9Jyc7XG4vL1xuLy8gZm9yICh2YXIgbmFtZSBpbiBzYWxhcmllcykge1xuLy8gICBpZiAobWF4IDwgc2FsYXJpZXNbbmFtZV0pIHtcbi8vICAgICBtYXggPSBzYWxhcmllc1tuYW1lXTtcbi8vICAgICBtYXhOYW1lID0gbmFtZTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIGFsZXJ0KCBtYXhOYW1lIHx8ICfQvdC10YIg0YHQvtGC0YDRg9C00L3QuNC60L7Qsik7XG4vLy/QodGD0LzQvNCwINC30LDRgNC/0LvQsNGCINCyINC80LDRgdGB0LjQstC1Ly8vXG4vLyB2YXIgc2FsYXJpZXMgPSB7XG4vLyAgICfQktCw0YHRjycgOiAxMDAsXG4vLyAgICfQn9C10YLRjycgOiAzMDAsXG4vLyAgICfQlNCw0YjQsCcgOiAyNTBcbi8vIH07XG4vL1xuLy8gdmFyIHN1bSA9IDA7XG4vL1xuLy8gZm9yICh2YXIgbmFtZSBpbiBzYWxhcmllcykge1xuLy8gICBzdW0gKz0gc2FsYXJpZXNbbmFtZV07XG4vLyB9XG4vL1xuLy8gYWxlcnQoIHN1bSApO1xuLy8v0J3QsNC70LjRh9C40LUg0YfQtdCz0L4t0LvQuNCx0L4g0LIg0YbQuNC60LvQtS8vL1xuLy8gdmFyIHNoZWR1bGUgPSB7fTtcbi8vXG4vLyBmdW5jdGlvbiBpc0VtcHR5KG9iaikge1xuLy8gICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4vLyAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICB9XG4vLyAgICAgcmV0dXJuIHRydWU7XG4vLyAgIH1cbi8vXG4vL1xuLy8gYWxlcnQoIGlzRW1wdHkoc2hlZHVsZSkgKTtcbi8vXG4vLyBzaGVkdWxlWyc4OjMwJ10gPSAn0L/QvtC00YrQtdC8Jztcbi8vXG4vLyBhbGVydCggaXNFbXB0eShzaGVkdWxlKSApO1xuLy8gdmFyIGNvZGVzID0ge1xuLy8gICAnKzcnOiAn0KDQvtGB0YHQuNGPJyxcbi8vICAgJyszOCc6ICfQo9C60YDQsNC40L3QsCcsXG4vLyAgICcrMSc6ICfQodCo0JAnLFxuLy8gfTtcbi8vXG4vL1xuLy8gZm9yICh2YXIga2V5IGluIGNvZGVzKSB7XG4vLyAgIHZhciB2YWx1ZSA9IGNvZGVzW2tleV07XG4vLyAgIGtleSA9ICtrZXk7XG4vL1xuLy8gICBhbGVydCgga2V5ICsgJzonICsgdmFsdWUpO1xuLy8gfVxuLy8v0JrQvtC70LjRh9C10YHRgtCy0L4g0Y3Qu9C10LzQtdC90YLQvtCyINCyINC80LDRgdGB0LjQstC1Ly8vXG4vLyB2YXIgbWVudSA9IHtcbi8vICAgd2lkdGg6IDMwMCxcbi8vICAgaGVpZ2h0OiAyMDAsXG4vLyAgIHRpdGxlOiAnTWVudSdcbi8vIH07XG4vL1xuLy8gdmFyIGNvdW50ZXIgPSAwO1xuLy8gZm9yKHZhciBrZXkgaW4gbWVudSkge1xuLy8gICBjb3VudGVyKys7XG4vLyB9XG4vL1xuLy8gYWxlcnQoJ9CS0YHQtdCz0L4g0YHQstC+0LnRgdGC0LI6ICcgKyBjb3VudGVyKTtcbi8vIHZhciBtZW51ID0ge1xuLy8gICB3aWR0aDogMzAwLFxuLy8gICBoZWlnaHQ6IDIwMCxcbi8vICAgdGl0bGU6IFwiTWVudVwiXG4vLyB9O1xuLy9cbi8vIGZvciAodmFyIGtleSBpbiBtZW51KSB7XG4vLyAgIC8vINGN0YLQvtGCINC60L7QtCDQsdGD0LTQtdGCINCy0YvQt9Cy0LDQvSDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0YHQstC+0LnRgdGC0LLQsCDQvtCx0YrQtdC60YLQsFxuLy8gICAvLyAuLtC4INCy0YvQstC10LTQtdGCINC40LzRjyDRgdCy0L7QudGB0YLQstCwINC4INC10LPQviDQt9C90LDRh9C10L3QuNC1XG4vL1xuLy8gICBhbGVydCggXCLQmtC70Y7RhzogXCIgKyBrZXkgKyBcIiDQt9C90LDRh9C10L3QuNC1OiBcIiArIG1lbnVba2V5XSApO1xuLy8gfVxuLy8v0JDRgdGB0L7RhtC40LDRgtC40LLQvdGL0Lkg0LzQsNGB0YHQuNCyLy8vXG4vLyB2YXIgdXNlciA9IHt9O1xuLy9cbi8vIHVzZXIua2V5ID0gICfQktCw0YHRjyc7XG4vLyB1c2VyLnN1cm5hbWUgPSAn0J/QtdGC0YDQvtCyJztcbi8vXG4vLyB1c2VyLm5hbWUgPSAn0KHQtdGA0LPQtdC5Jztcbi8vXG4vLyBkZWxldGUgdXNlci5uYW1lO1xuLy8vT9Cx0YDQtdC30LDQtdC8INC00L7Qu9C70Y/RgCDQuCDQv9C10YDQtdCy0L7QtNC40Lwg0YHRgtGA0LjQvdCzINCyINGH0LjRgdC70L4vLy9cbi8vIGZ1bmN0aW9uIGV4dHJhY3RDdXJyZW5jeVZhbHVlKHN0cikge1xuLy8gICByZXR1cm4gK3N0ci5zbGljZSgxKTtcbi8vIH1cbi8vXG4vLyBhbGVydChleHRyYWN0Q3VycmVuY3lWYWx1ZSgnJDEyMCcpKTtcbi8vL0/QsdGA0LXQt9Cw0LXQvCDQu9C40YjQvdC10LUvLy9cbi8vIGZ1bmN0aW9uIHRydW5jYXRlKHN0ciwgbWF4bGVuZ3RoKXtcbi8vICAgaWYgKHN0ci5sZW5ndGggPiBtYXhsZW5ndGgpIHtcbi8vICAgICByZXR1cm4gc3RyLnNsaWNlKDAsIG1heGxlbmd0aCAtIDMpICsgJy4uLic7XG4vLyAgICAgLy/QuNGC0L7Qs9C+0LLQsNGPINC00LvQuNC90LAgPSBtYXhsZW5ndGhcbi8vICAgfVxuLy8gICByZXR1cm4gc3RyO1xuLy8gfVxuLy9cbi8vIGFsZXJ0KCB0cnVuY2F0ZSgn0JLQvtGCLCDRh9GC0L4g0LzQvdC1INGF0L7RgtC10LvQvtGB0Ywg0LHRiyDRgdC60LDQt9Cw0YLRjCDQvdCwINGN0YLRgyDRgtC10LzRgzogJywgMjApKTtcbi8vIGFsZXJ0KCB0cnVuY2F0ZSgn0JLRgdC10Lwg0L/RgNC40LLQtdGCIScsIDIwKSk7XG4vLy9jaGVjayBTcGFtLy8vXG4vLyBmdW5jdGlvbiBjaGVja1NwYW0oc3RyKSB7XG4vLyAgIHZhciBsb3dlclN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xuLy9cbi8vICAgcmV0dXJuICEhKH5sb3dlclN0ci5pbmRleE9mKCd2aWFncmEnKSB8fCB+bG93ZXJTdHIuaW5kZXhPZigneHh4JykpOyAvLyAhISAtINC/0YDQtdC+0LHRgNCw0LfQvtCy0YvQstCw0LXQvCDQuiDQu9C+0LPQuNGH0LXRgdC60L7QvNGDINGC0LjQv9GDXG4vLyAgIC8vIH5zdHIuaW5kZXhPZiAtINC10YHQu9C4INC90LDQudC00LXQvdC+XG4vLyB9XG4vL1xuLy8gYWxlcnQoIGNoZWNrU3BhbSAoJ2J1eSBWaUFnUkEgbm93JykpO1xuLy8gYWxlcnQoIGNoZWNrU3BhbSAoJ2ZyZWUgeHh4eHgnKSk7XG4vLyBhbGVydCggY2hlY2tTcGFtICgnaW5ub2NlbnQgcmFiYml0JykpO1xuLy8v0J/QtdGA0LLQsNGPINCx0YPQutCy0LAg0LfQsNCz0LvQsNCy0L3QsNGPLy8vXG4vLyBmdW5jdGlvbiB1Y0ZpcnN0KHN0cikge1xuLy9cbi8vICAgaWYgKCFzdHIpIHJldHVybiBzdHI7XG4vL1xuLy8gICB2YXIgbmV3U3RyID0gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4vLyAgIHJldHVybiBuZXdTdHI7XG4vLyB9XG4vL1xuLy8gYWxlcnQodWNGaXJzdCgn0LLQsNC90Y8nKSk7XG4vLy/Qn9C+0LjRgdC6INCyINGB0YLRgNC+0LrQtS8vL1xuLy8gdmFyIHN0ciA9IFwi0J7RgdC70LjQuiDQmNCwLdCY0LAg0L/QvtGB0LzQvtGC0YDQtdC7INC90LAg0LLQuNCw0LTRg9C6XCI7IC8vINC40YnQtdC8INCyINGN0YLQvtC5INGB0YLRgNC+0LrQtVxuLy8gdmFyIHRhcmdldCA9IFwi0JjQsFwiOyAvLyDRhtC10LvRjCDQv9C+0LjRgdC60LBcbi8vXG4vLyB2YXIgcG9zID0gMDtcbi8vIHdoaWxlICh0cnVlKSB7XG4vLyAgIHZhciBmb3VuZFBvcyA9IHN0ci5pbmRleE9mKHRhcmdldCwgcG9zKTtcbi8vICAgaWYgKGZvdW5kUG9zID09IC0xKSBicmVhaztcbi8vXG4vLyAgIGFsZXJ0KCBmb3VuZFBvcyApOyAvLyDQvdCw0YjQu9C4INC90LAg0Y3RgtC+0Lkg0L/QvtC30LjRhtC40Lhcbi8vICAgcG9zID0gZm91bmRQb3MgKyAxOyAvLyDQv9GA0L7QtNC+0LvQttC40YLRjCDQv9C+0LjRgdC6INGB0L4g0YHQu9C10LTRg9GO0YnQtdC5XG4vLyB9XG4vL9Cg0LDQvdC00L7QvCDQvtGCIDUg0LTQviAxMCAtINGG0LXQu9GL0Lwg0YfQuNGB0LvQvtC8Ly8vXG4vLyBmdW5jdGlvbiByYW5kb21JbnRlZ2VyKG1pbiwgbWF4KSB7XG4vLyAgIHZhciByYW5kID0gTWF0aC5yYW5kb20oKSAqICgobWF4ICsgMSkgLSBtaW4pICsgbWluO1xuLy8gICByYW5kID0gTWF0aC5mbG9vcihyYW5kKTtcbi8vICAgcmV0dXJuIHJhbmQ7XG4vLyB9XG4vL1xuLy8gYWxlcnQocmFuZG9tSW50ZWdlcig1LCAxMCkpO2Bcbi8v0KDQsNC90LTQvtC8INC+0YIgNSDQtNC+IDEwXG4vLyB2YXIgbWluID0gNSxcbi8vIG1heCA9IDEwO1xuLy9cbi8vIGFsZXJ0KCBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpOyAvL01hdGgucmFuZG9tINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGH0LjRgdC70L4g0L7RgiAwINC00L4gMVxuLy8g0KDQsNC90LTQvtC8INC+0YIgMCDQtNC+IDEwXG4vLyB2YXIgbWF4ID0gMTA7XG4vL1xuLy8gYWxlcnQoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4vLyBmdW5jdGlvbiBmaWJCaW5ldChuKSB7XG4vLyAgIHZhciBwaGkgPSAoMSArIE1hdGguc3FydCg1KSkgLyAyO1xuLy8gICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnBvdyhwaGksIG4pIC8gTWF0aC5zcXJ0KDUpKTtcbi8vIH1cbi8vXG4vLyBhbGVydChmaWJCaW5ldCg3NykpO1xuLy8gdmFyIHByaWNlMSA9IDAuMSwgcHJpY2UyID0gMC4yO1xuLy9cbi8vIGFsZXJ0KCsocHJpY2UxICsgcHJpY2UyKS50b0ZpeGVkKDIpICsgJyQnKTsgLy8g0L7QutGA0YPQs9C70Y/QtdC8INC00L4gMiDQtNC10YHRj9GC0YvRhVxuLy8gdmFyIGEgPSArcHJvbXB0KCfQktCy0LXQtNC40YLQtSDQv9C10YDQstC+0LUg0YfQuNGB0LvQvj8nLCAnJyk7XG4vLyB2YXIgYiA9ICtwcm9tcHQoJ9CS0LLQtdC00LjRgtC1INCy0YLQvtGA0L7QtSDRh9C40YHQu9C+PycsICcnKTtcbi8vXG4vLyBhbGVydChhICsgYik7XG4vLyB2YXIgZiA9IGZ1bmN0aW9uIGZhY3RvcmlhbChuKSB7XG4vLyBcdGlmIChuICE9IDEpIHtcbi8vIFx0XHRyZXR1cm4gbiAqIGZhY3RvcmlhbChuIC0gMSkgLy9cbi8vIFx0fSBlbHNlIHtcbi8vIFx0XHRyZXR1cm4gMTtcbi8vIFx0fVxuLy8gfVxuLy9cbi8vIHZhciBnID0gZjsgLy8g0YHQutC+0L/QuNGA0L7QstCw0LvQuCDRgdGB0YvQu9C60YMg0L3QsCDRhNGD0L3QutGG0LjRji3RhNCw0LrRgtC+0YDQuNCw0Lsg0LIgZ1xuLy8gZiA9IG51bGw7XG4vL1xuLy8gYWxlcnQoZyg1KSk7IC8vIDEyMCwg0YDQsNCx0L7RgtCw0LXRglxuLy8gINCe0YjQuNCx0LrQsCDQv9GA0Lgg0LLRi9C/0L7Qu9C90LXQvdC40LgsINGE0YPQvdC60YbQuNGPINC+0LHRgNCw0YnQsNC10YLRgdGPINC6INGB0YLQsNGA0L7QvNGDINC40LzQtdC90LggZiAo0LrQvtGC0L7RgNC+0LPQviDRg9C20LUg0L3QtdGCKVxuLy8gZnVuY3Rpb24gZihuKSB7XG4vLyBcdGlmIChuICE9IDEpIHtcbi8vIFx0XHRyZXR1cm4gbiAqIGYobiAtIDEpO1xuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdHJldHVybiAxO1xuLy8gXHR9XG4vLyB9XG4vL1xuLy8gdmFyIGcgPSBmO1xuLy8gZiA9IG51bGw7XG4vL1xuLy8gYWxlcnQoZyg1KSk7XG4vLy8v0KTQuNCx0L7QvdCw0YfRh9C4INGG0LjQutC7Ly8vL1xuLy8gZnVuY3Rpb24gZmliKG4pIHtcbi8vIFx0dmFyIGEgPSAxLFxuLy8gXHRcdFx0YiA9IDE7XG4vL1xuLy8gXHRmb3IgKHZhciBpID0gMzsgaSA8PSBuOyBpKyspIHtcbi8vIFx0XHR2YXIgYyA9IGEgKyBiO1xuLy8gXHRcdGEgPSBiO1xuLy8gXHRcdGIgPSBjO1xuLy8gXHR9XG4vLyBcdHJldHVybiBiO1xuLy8gfVxuLy9cbi8vIGFsZXJ0KGZpYig3KSk7XG4vLy8v0KTQuNCx0L7QvdCw0YfRh9C4INGA0LXQutGD0YDRgdC40Y8vLy8vXG4vLyBmdW5jdGlvbiBmaWIobikge1xuLy8gXHRpZiAobiA8PSAxKSB7XG4vLyBcdFx0cmV0dXJuIG47XG4vLyBcdH0gZWxzZSB7XG4vLyBcdFx0cmV0dXJuIGZpYihuIC0gMSkgKyBmaWIobiAtIDIpO1xuLy8gXHR9XG4vLyB9XG4vL1xuLy8gYWxlcnQoZmliKDEpKTtcbi8vIGFsZXJ0KGZpYig3KSk7ICAvL9GB0LvQtdC00YPRjtGJ0LXQtSDRh9C40YHQu9C+ID0g0YHRg9C80LzQtSAyINC/0YDQtdC00YvQtNGD0YnQuNGFICg3ID0gKDggLSAxKSArICg4LTIpKVxuLy8vL9Ck0LDQutGC0L7RgNC40LDQuy8vLy9cbi8vIGZ1bmN0aW9uIGZhY3RvcmlhbChuKSB7XG4vLyAgIGlmIChuICE9IDEpIHtcbi8vICAgIHJldHVybiBuICogZmFjdG9yaWFsKG4gLSAxKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgIHJldHVybiAxO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gYWxlcnQoZmFjdG9yaWFsKDUpKVxuLy8v0KHRg9C80LzQsCDRh9C40YHQtdC7INCw0YDQuNGE0LzQtdGC0LjRh9C10YHQutCw0Y8g0L/RgNC+0LPRgNC10YHRgdC40Y8vLy9cbi8vIGZ1bmN0aW9uIHN1bVRvIChuKSB7XG4vLyAgIHJldHVybiBuICogKG4gKyAxKSAvIDI7XG4vLyB9XG4vL1xuLy8gYWxlcnQoIHN1bVRvKDEwKSApO1xuLy8vL9Ch0YPQvNC80LAg0YfQuNGB0LXQuyDRgNC10LrRg9GA0YHQuNGPLy8vXG4vLyBmdW5jdGlvbiBzdW1UbyhuKSB7XG4vLyAgIGlmIChuID09IDEpIHtcbi8vICAgICByZXR1cm4gMTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICByZXR1cm4gbiArIHN1bVRvKG4gLSAxKTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vXG4vLyBhbGVydCAoc3VtVG8oMTApKTtcbi8vLy/QodGD0LzQvNCwINGH0LjRgdC10Lsg0YbQuNC60LsvLy8vXG4vLyBmdW5jdGlvbiBzdW1UbyhuKSB7XG4vLyAgIHZhciBzdW0gPSAwO1xuLy9cbi8vICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gbjsgaSsrKSB7XG4vLyAgICAgc3VtICs9IGk7XG4vLyAgIH1cbi8vXG4vLyAgIHJldHVybiBzdW07XG4vLyB9XG4vL1xuLy8gYWxlcnQoc3VtVG8oMTApKTtcbi8vIC8v0KfQuNGB0LvQviDQsiDRgdGC0LXQv9C10L3RjCDRhtC40LrQuy8vXG4vLyBmdW5jdGlvbiBwb3coeCwgbikge1xuLy8gXHR2YXIgcmVzdWx0ID0geDtcbi8vIFx0Zm9yICh2YXIgaSA9IDE7IGkgPCBuOyBpKyspIHtcbi8vIFx0XHRyZXN1bHQgKj0geDsgLy8xKSAyICogMiA9IDQgPT4gMikgcmVzdWx0ID0gNCAqIDIgPT4gMykgcmVzdWx0ID0gOCAqIDIgPSAxNjtcbi8vIFx0fVxuLy8gXHRyZXR1cm4gcmVzdWx0O1xuLy8gfVxuLy9cbi8vICBhbGVydChwb3coMiwgMykpO1xuLy8vL9Cg0LXQutGD0YDRgdC40Y8vLy8vXG4vLyBmdW5jdGlvbiBwb3cgKHgsIG4pIHtcbi8vICAgaWYgKG4gIT0gMSkge1xuLy8gICAgIHJldHVybiB4ICogcG93KHgsIG4gLSAxKVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybiB4O1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gYWxlcnQgKCBwb3coMiwzKSApO1xuLy8vLy9ZZXMvTm8vLy8vL1xuLy8gZnVuY3Rpb24gYXNrKHF1ZXN0aW9uLCB5ZXMsIG5vKSB7XG4vLyAgIGlmIChjb25maXJtKHF1ZXN0aW9uKSkgeWVzKClcbi8vICAgZWxzZSBubygpO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIHNob3dPaygpIHtcbi8vICAgYWxlcnQgKCfQktGLINGB0L7Qs9C70LDRgdC40LvQuNGB0YwuJyk7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gc2hvd0NhbmNlbCgpIHtcbi8vICAgYWxlcnQoJ9CS0Ysg0L7RgtC80LXQvdC40LvQuCDQstGL0L/QvtC70L3QtdC90LjQtS4nKTtcbi8vIH1cbi8vXG4vLyAvL9C40YHQv9C+0LvRjNC30L7QstCw0L3QuNC1XG4vLyBhc2soJ9CS0Ysg0YHQvtCz0LvQsNGB0L3Riz8nLCBzaG93T2ssIHNob3dDYW5jZWwpO1xuLy8vLy9GdW5jdGlvbiBFeHByZXNzaW9uLy8vLy8vXG4vLyB2YXIgc2F5SGkgPSBmdW5jdGlvbihuYW1lKXtcbi8vICAgYWxlcnQoJ9Cf0YDQuNCy0LXRgiwgJyArIG5hbWUpXG4vLyB9XG4vL1xuLy8gc2F5SGkoJ9CS0LDRgdGPJyk7XG4vL1xuLy8vLy9GdW5jdGlvbiBEZWNsYXJhdGlvbi8vLy8vXG4vLyBmdW5jdGlvbiBzYXlIaShuYW1lKSB7XG4vLyAgIGFsZXJ0KCfQn9GA0LjQstC10YIsICcgKyBuYW1lKTtcbi8vIH1cbi8vXG4vLyBzYXlIaSgn0JLQsNGB0Y8nKTtcbi8vLy8v0KfQuNGB0LvQviDQsiDRgdGC0LXQv9C10L3RjC8vLy8vXG4vLyBmdW5jdGlvbiBwb3coeCwgbikge1xuLy8gICB2YXIgcmVzdWx0ID0geDtcbi8vXG4vLyAgIGZvciAodmFyIGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4vLyAgICAgcmVzdWx0ICo9IHg7XG4vLyAgIH1cbi8vXG4vLyAgIHJldHVybiByZXN1bHQ7XG4vLyB9XG4vL1xuLy8gdmFyIHggPSBwcm9tcHQoJ3g/JywgJycpO1xuLy8gdmFyIG4gPSBwcm9tcHQoJ24/JywgJycpO1xuLy9cbi8vIGlmIChuIDw9IDEpIHtcbi8vICAgYWxlcnQoJ9Ch0YLQtdC/0LXQvdGMICcgKyBuICsgJ9C90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGC0YHRjycpO1xuLy8gfSBlbHNlIHtcbi8vICAgYWxlcnQocG93ICh4LCBuKSApO1xuLy8gfVxuLy8vLy/QnNCY0J3QmNCc0JDQm9Cs0J3QntCVINCn0JjQodCb0J4vLy8vLy8vXG4vLyBmdW5jdGlvbiBtaW5BQihhLGIpe1xuLy8gICBpZiAoYSA8IGIpe1xuLy8gICAgIHJldHVybiBhO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybiBiO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gbWluQUIoYSxiKSB7XG4vLyAgIHJldHVybiBhIDwgYiA/IGEgOiBiO1xuLy8gfVxuLy8vL9Cf0KDQntCS0JXQoNCa0JAg0JLQntCX0KDQkNCh0KLQkC8vLy8vL1xuLy8gZnVuY3Rpb24gY2hlY2tBZ2UoYWdlKSB7XG4vLyAgIGlmIChhZ2UgPiAxOCkge1xuLy8gICAgIHJldHVybiB0cnVlO1xuLy9cbi8vICAgfSBlbHNlIHtcbi8vICAgICByZXR1cm4gY29uZmlybSgn0KDQvtC00LjRgtC10LvQuCDRgNCw0LfRgNC10YjQuNC70Lg/Jyk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyB2YXIgYWdlID0gcHJvbXB0KCfQktCw0Ygg0LLQvtC30YDQsNGB0YI/Jyk7XG4vL1xuLy8gaWYgKGNoZWNrQWdlKGFnZSkpIHtcbi8vICAgYWxlcnQoJ9CU0L7RgdGC0YPQvyDRgNCw0LfRgNC10YjQtdC9Jyk7XG4vLyB9IGVsc2Uge1xuLy8gICBhbGVydCAoJ9CSINC00L7RgdGC0YPQv9C1INC+0YLQutCw0LfQsNC90L4nKTtcbi8vIH1cbi8vLy8vLyDQmtCS0JDQlNCg0JDQotCd0J7QlSDQo9Cg0JDQktCd0JXQndCY0JUvLy8vLy9cbi8vIGZ1bmN0aW9uIGNhbGNEKGEsYixjKSB7XG4vLyAgIHJldHVybiBiKmIgLSA0KmEqYztcbi8vIH1cbi8vXG4vLyB2YXIgdGVzdCA9IGNhbGNEKC00LDIsMSk7XG4vLyBhbGVydCh0ZXN0KTtcbi8vLy8vL9CU0JXQmtCe0KAg0KLQldCa0KHQotCQLy8vLy8vXG4vLyBmdW5jdGlvbiBzaG93TWVzc2FnZShmcm9tLCB0ZXh0KSB7IC8vINC/0LDRgNCw0LzQtdGC0YDRiyBmcm9tLCB0ZXh0XG4vL1xuLy8gICBmcm9tID0gXCIqKiBcIiArIGZyb20gKyBcIiAqKlwiOyAvLyDQt9C00LXRgdGMINC80L7QttC10YIg0LHRi9GC0Ywg0YHQu9C+0LbQvdGL0Lkg0LrQvtC0INC+0YTQvtGA0LzQu9C10L3QuNGPXG4vL1xuLy8gICBhbGVydChmcm9tICsgJzogJyArIHRleHQpO1xuLy8gfVxuLy9cbi8vIHNob3dNZXNzYWdlKCfQn9Cw0YjQsCcsICfQn9GA0LjQstC10YIhJyk7XG4vLyBzaG93TWVzc2FnZSgn0JzQsNGI0LAnLCAn0JrQsNC6INC00LXQu9CwPycpO1xuLy8gdmFyIGEgPSArcHJvbXB0KCdhPycsICcnKTtcbi8vXG4vLyBzd2l0Y2ggKGEpIHtcbi8vICAgY2FzZSAwOlxuLy8gICAgIGFsZXJ0ICgwKTtcbi8vICAgICAgIGJyZWFrO1xuLy9cbi8vICAgY2FzZSAxOlxuLy8gICAgIGFsZXJ0KDEpO1xuLy8gICAgICAgYnJlYWs7XG4vL1xuLy8gICBjYXNlIDI6XG4vLyAgIGNhc2UgMzpcbi8vICAgICBhbGVydCgnMiwzJyk7XG4vLyAgICAgICBicmVhaztcbi8vIH1cbi8vIGlmIChicm93c2VyID09ICdJRScpIHtcbi8vICAgYWxlcnQoJ1UgdmFzIElFIScpO1xuLy8gfSBlbHNlIGlmIChicm93c2VyID09ICdDaHJvbWUnXG4vLyAgICAgICAgIHx8IGJyb3dzZXIgPT0gJ0ZpcmVmb3gnXG4vLyAgICAgICAgIHx8IGJyb3dzZXIgPT0gJ1NhZmFyaSdcbi8vICAgICAgICAgfHwgYnJvd3NlciA9PSAnT3BlcmEnKSB7XG4vLyAgICAgICAgICAgICBhbGVydCAoJ0RhLCBtaSBpaCBwb2RkZXJ6aGl2YWVtJyk7XG4vLyB9IGVsc2Uge1xuLy8gICBhbGVydCAoJ9Cc0Ysg0L3QsNC00LXQtdC80YHRjywg0YfRgtC+INC4INCyINCy0LDRiNC10Lwg0LHRgNCw0YPQt9C10YDQtSDQstGB0LUg0L7QuiEnKTtcbi8vIH1cbi8vIHZhciBhcmcgPSBwcm9tcHQgKCfQktCy0LXQtNC40YLQtSBhcmd1bWVudD8nKVxuLy8gc3dpdGNoKGFyZykge1xuLy8gICBjYXNlICcwJzpcbi8vICAgY2FzZSAnMSc6XG4vLyAgICAgYWxlcnQgKCfQntC00LjQvSDQuNC70Lgg0L3QvtC70YwnKTtcbi8vXG4vLyAgIGNhc2UgJzInOlxuLy8gICAgIGFsZXJ0KCfQlNCy0LAnKTtcbi8vICAgYnJlYWs7XG4vL1xuLy8gICBjYXNlICczJzpcbi8vICAgICBhbGVydCgn0J3QuNC60L7Qs9C00LAg0L3QtSDQstGL0L/QvtC70L3QuNGC0YHRjycpO1xuLy9cbi8vICAgZGVmYXVsdDpcbi8vICAgICBhbGVydCgn0J3QtdC40LfQstC10YHRgtC90L7QtSDQt9C90LDRh9C10L3QuNC1OiAnICsgYXJnKVxuLy8gfVxuLy8gbmV4dFNURVA6XG4vLyBcdGZvciAodmFyIGkgPSAyOyBpIDw9IDEwOyBpKyspIHsgLy8yLy9cbi8vXG4vLyAgIFx0Zm9yICh2YXIgaiA9IDI7IGogPCBpOyBqKyspIHsgLy8yLy9cbi8vIFx0XHRcdGlmIChpICUgaiA9PSAwKSBjb250aW51ZSBuZXh0U1RFUDtcbi8vIFx0XHR9XG4vL1xuLy8gICAgIGFsZXJ0KGkpO1xuLy8gXHR9XG4vLy8vLy8vINCS0JLQntCUINCn0JjQodCb0JAg0JHQntCb0KzQqNCVLCDQp9CV0JwgMTAwIC8vLy8vLy8vL1xuLy8gdmFyIG51bTtcbi8vXG4vLyBkb3tcbi8vICAgbnVtID0gcHJvbXB0ICgn0JLQstC10LTQuNGC0LUg0YfQuNGB0LvQviDQsdC+0LvRjNGI0LUgMTAwJywgMCk7XG4vLyB9IHdoaWxlIChudW0gPD0gMTAwICYmIG51bSAhPSBudWxsKVxuLy8vLy8vLyDQodCb0J7QltCV0J3QmNCVINCn0JjQodCV0JsgLy8vLy8vLy8vXG4vLyB2YXIgc3VtID0gMDtcbi8vXG4vLyB3aGlsZSAodHJ1ZSkge1xuLy9cbi8vICAgdmFyIHZhbHVlID0gK3Byb21wdChcItCS0LLQtdC00LjRgtC1INGH0LjRgdC70L5cIiwgJycpO1xuLy9cbi8vICAgaWYgKCF2YWx1ZSkgYnJlYWs7IC8vICgqKVxuLy9cbi8vICAgc3VtICs9IHZhbHVlO1xuLy9cbi8vIH1cbi8vIGFsZXJ0KCAn0KHRg9C80LzQsDogJyArIHN1bSApO1xuLy8vLy8vLyBGT1Ig0YbQuNC60LsgLy8vLy8vLy8vXG4vLyBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuLy8gICBhbGVydCggXCLQvdC+0LzQtdGAIFwiICsgaSArIFwiIVwiICk7XG4vLyB9XG4vLy8vLy8vIFdISUxFINGG0LjQutC7IC8vLy8vLy8vL1xuLy8gdmFyIGkgPSAwO1xuLy8gd2hpbGUgKGkgPCAzKSB7XG4vLyAgIGFsZXJ0KCBcItC90L7QvNC10YAgXCIgKyBpICsgXCIhXCIgKTtcbi8vICAgaSsrO1xuLy8gfVxuLy8vLy8vLyDQktCr0JLQntCUINCi0J7Qm9Cs0JrQniDQp9CV0KLQndCr0KUg0KfQmNCh0JXQmyAvLy8vLy8vLy9cbi8vIGZvciAodmFyIGkgPSAyOyBpIDw9IDEwOyBpKyspe1xuLy8gICBpZihpICUgMiA9PSAwKXtcbi8vICAgICBhbGVydCAoaSk7XG4vLyAgIH1cbi8vIH1cbi8vLy8vLy8vLyDQn9Cg0J7QktCV0KDQmtCQINCf0J7Qm9Cs0JfQntCS0JDQotCV0JvQryAvLy8vLy8vLy8vLy9cbi8vIHZhciB1c2VybmFtZSA9IHByb21wdCgn0JrRgtC+INC/0YDQuNGI0LXQuz8nKTtcbi8vXG4vLyBpZiAodXNlcm5hbWUgPT0gJ0FkbWluJykge1xuLy8gXHR2YXIgcGFzcyA9IHByb21wdCgn0J/QsNGA0L7Qu9GMPycpO1xuLy9cbi8vIFx0aWYgKHBhc3MgPT0gXCLQndCw0YHRgNCw0Lsg0JrQvtGA0L7Qu9GMXCIpIHtcbi8vIFx0XHRhbGVydCgn0JTQvtCx0YDQviDQv9C+0LbQsNC70L7QstCw0YLRjCEnKTtcbi8vIFx0fSBlbHNlIGlmIChwYXNzID09ICcnKSB7XG4vLyBcdFx0YWxlcnQoJ9CS0YXQvtC0INC+0YLQvNC10L3QtdC9Jyk7XG4vLyBcdH0gZWxzZSB7XG4vLyBcdFx0YWxlcnQoJ9Cf0LDRgNC+0LvRjCDQvdC10LLQtdGA0LXQvSwg0YHRg9C60LjQvSDRgtGLINGB0YvQvScpO1xuLy8gXHR9XG4vLyB9IGVsc2UgaWYgKHVzZXJuYW1lID09ICcnKSB7XG4vLyBcdGFsZXJ0KCfQktGF0L7QtCDQvtGC0LzQtdC90LXQvScpO1xuLy8gfSBlbHNlIHtcbi8vIFx0YWxlcnQoJ9CvINCy0LDRgSDQvdC1INC30L3QsNGOJyk7XG4vLyB9XG4iXSwiZmlsZSI6ImJ1bmRsZS5qcyJ9
