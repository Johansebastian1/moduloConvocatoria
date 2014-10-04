
function processLogin() {
	var u = document.getElementById('username');
	var p = document.getElementById('password');

	if(u.value==='') {
		//alert('por favor digita tu usuario');
		var e1 = document.getElementById('username-error');
		e1.innerHTML = 'por favor digita tu usuario';
	} 

	var credentials = {username: u.value, password: p.value};

	
}


function initData() {
	console.log( 'init system!!!' );
}