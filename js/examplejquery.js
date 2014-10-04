/**$(document).ready(function(){
	$('#submit-btn-1').click(validateLogin);
	$('#submit-btn-2').click(validateLogin);
});

function validateLogin(){
	var u=$('#username');
	var p=$('#password')
	if(u.length===1 && u.val()===''){
		$('#username-error').html('Digite su nombre de usuario');
	}else{
		$('#username-error').html('');
	}
	if(p.length===1 && p.val()===''){
		$('#password-error').html('Digite su contraseña')
	}
	else{
		$('#password-error').html('')
	}
}**/
$(document).ready(function(){
	$('#submit-btn-1').click(validateLogin);
});

function validateLogin(){
	var u=$('#username');
	if(u.length===1 && u.val()===''){
		var e1=$('#username-error')
		e1.html('Digite su nombre de usuario')
		e1.slideDown();
		$('#username').addClass('errorbox');
	}else{
		$('#username-error').slideUp().html('');
		$('#username').removeClass('errorbox');
	}
}