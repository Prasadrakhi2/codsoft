/*global console*/
/*var value = document.form.textview.value;*/ //Does not work
function insert(num) {
	'use strict';
	document.form.textview.value += num;
}

function equal() {
	'use strict';
	document.form.textview.value = eval(document.form.textview.value);
}

function clean() {
	'use strict';
	document.form.textview.value = "";
}

function operat(oper) {
	'use strict';
	document.form.textview.value += oper;
	
	var x = document.form.textview.value.split("");
	
	if (x[0] === "+" || x[0] === "*" || x[0] === "/" || x[0] === ".") { //First Way to check
		console.log(x[0]);
		document.form.textview.value = "Erorr";
	}
}