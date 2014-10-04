var name = "julian";
var age = 18;

if(age!=='18') {
	console.log( 'bien!!' );
} else {
	console.log( 'mal :(' );
}


var _arrayData = new Array();
_arrayData.push( '123' );
_arrayData.push( 'hola' );
_arrayData.push( 987 );
_arrayData.push( 654 );

console.log( _arrayData );

//arrayData.pop();
_arrayData = _arrayData.slice(0,2);

console.log( _arrayData );

saludar(name);

function saludar( nombre, edad ) {
	var a = 123;
	if(edad!==undefined)
		console.log( 'Hola ' + nombre + ' - tu edad es:'+edad );
	else 
		console.log( 'Hola ' + nombre );


	console.log(_arrayData);
}

var getSkills = function(ex) {
	return Array('html', 'css');
}

var userData = {
	name:'Pepe',
	age:19,
	gender:'m',
	getSkills :  getSkills,
	proccessData : function(){

	}
};

console.log( userData.getSkills('asd') );

