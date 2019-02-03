'use strict';





















// for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }


// var i = 0;
// while (i < 3) {
//   alert( "номер " + i + "!" );
//   i++;
// }


// for (var i = 2; i <= 10; i++){
//   if(i % 2 == 0){
//     alert (i);
//   }
// }


var username = prompt('Кто пришел?');

if (username == 'Admin') {
	var pass = prompt('Пароль?');

	if (pass == "Насрал Король") {
		alert('Добро пожаловать!');
	} else if (pass == '') {
		alert('Вход отменен');
	} else {
		alert('Пароль неверен, сукин ты сын');
	}
} else if (username == '') {
	alert('Вход отменен');
} else {
	alert('Я вас не знаю');
}
