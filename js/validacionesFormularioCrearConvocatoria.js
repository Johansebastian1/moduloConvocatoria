$(document).ready(function(){
	$('#submit-btn-1').click(validateConvocatoria);
	$('#submit-btn-1').click(validateCodigoConvocatoria);
	$('#submit-btn-1').click(validateMaximoPorcentajeFinanciar);
	$('#submit-btn-1').click(validateMinimoPorcentajeFinanciar);
	$('#submit-btn-1').click(validateMinimoPorcentajeContrapartidaDinero);
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
	}else{
		$('#codigoConvocatoria-error').slideUp.html('');
		$('#codigoConvocatoria').removeClass('errorbox');
	}
}

function validateMaximoPorcentajeFinanciar(){
	var c=$('#maximoPorcentajeFinanciar');
	if(c.length===1 && c.val()===''){
		var e3=$('#maximoPorcentajeFinanciar-error');
		e3.html('Escriba el maximo porcentaje financiar');
		e3.slideDown();
		$('#maximoPorcentajeFinanciar').addClass('errorbox');
	}else{
		$('#maximoPorcentajeFinanciar-error').slideUp.html('');
		$('#maximoPorcentajeFinanciar').removeClass('errorbox');
	}
}

function validateMinimoPorcentajeFinanciar(){
	var d=$('#minimoPorcentajeFinanciar');
	if(d.length===1 && d.val()===''){
		var e4=$('#minimoPorcentajeFinanciar-error');
		e4.html('Escriba el minimo porcentaje financiar');
		e4.slideDown();
		$('#minimoPorcentajeFinanciar').addClass('errorbox');
	}else{
		$('#minimoPorcentajeFinanciar-error').slideUp.html('');
		$('#minimoPorcentajeFinanciar').removeClass('errorbox');
	}
}

function validateMinimoPorcentajeContrapartidaDinero(){
	var d=$('#minimoPorcentajeContrapartidaDinero');
	if(e.length===1 && e.val()===''){
		var e5=$('#minimoPorcentajeContrapartidaDinero-error');
		e5.html('Escriba el minimo porcentaje contrapartida dinero');
		e5.slideDown();
		$('#minimoPorcentajeContrapartidaDinero').addClass('errorbox');
	}else{
		$('#minimoPorcentajeContrapartidaDinero-error').slideUp.html('');
		$('#minimoPorcentajeContrapartidaDinero').removeClass('errorbox');
	}
}