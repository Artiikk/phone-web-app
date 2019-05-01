'use strict';

// var names = [356, 4, 5];
//
// var nameLengths = names.map(function(name) {
//   return name.length;
// });
//
// // получили массив с длинами
// alert( nameLengths ); // 4,3,10











// function marry(man, woman) {
//
//   woman {
//     husband: man
//   }
//   man {
//     wife: woman
//   }
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
