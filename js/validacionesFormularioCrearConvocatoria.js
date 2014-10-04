$(document).ready(function(){
	$('#submit-btn-1').click(validateConvocatoria);
});
$(document).ready(function(){
	$('#submit-btn-1').click(validateCodigoConvocatoria);
});

function validateConvocatoria(){
	var a=$('#convocatoria');
	if(a.length===1 && a.val()===''){
		var e1=$('#convocatoria-error');
		e1.html('Escriba el nombre de la convocatoria');
		e1.slideDown();
		$('#convocatoria').addClass('errorbox');
	}else{
		$('#convocatoria-error').slideUp().html('');
		$('#convocatoria').removeClass('errorbox');
	}
}

function validateCodigoConvocatoria(){
	var b=$('#codigoConvocatoria');
	if(b.length===1 && b.val()===''){
		var e2=$('#codigoConvocatoria-error');
		e2.html('Escriba el codigo de la convocatoria');
		e2.slideDown();
		$('#codigoConvocatoria').addClass('errorbox');
	}
	else{
		$('#codigoConvocatoria-error').slideUp.html('');
		$('#codigoConvocatoria').removeClass('errorbox');
	}
}
