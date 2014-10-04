$(document).ready(function(){
	$('#submit-btn-1').click(validateLogin);
});

function validateLogin(){
	var u=$('#convocatoria');
	if(u.length===1 && u.val()===''){
		var e1=$('#convocatoria-error');
		e1.html('Digite los datos requeridos');
		e1.slideDown();
		$('#convocatoria').addClass('errorbox');
	}else{
		$('#convocatoria-error').slideUp().html('');
		$('#convocatoria').removeClass('errorbox');
	}
}