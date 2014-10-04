$(document).ready(function(){
	$('#submit-btn-1').click(validateConvocatoria);
	$('#submit-btn-1').click(validateCodigoConvocatoria);
	$('#submit-btn-1').click(validateMaximoPorcentajeFinanciar);
	$('#submit-btn-1').click(validateMinimoPorcentajeFinanciar);
	$('#submit-btn-1').click(validateMinimoPorcentajeContrapartidaDinero);
	$('#submit-btn-1').click(validateMinimoPorcentajeContrapartidaEspecie);
	$('#submit-btn-1').click(validateMontoMaximoFinanciar);
	$('#submit-btn-1').click(validateMontoTotalConvocatoria);
	$('#submit-btn-1').click(validateCdp);
	$('#submit-btn-1').click(validateCdr);
	$('#submit-btn-1').click(validateUrl);
	$('#submit-btn-1').click(validateNumeroProyecto);
	$('#submit-btn-1').click(validateVigencia);
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
		$('#codigoConvocatoria-error').slideUp().html('');
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
		$('#maximoPorcentajeFinanciar-error').slideUp().html('');
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
		$('#minimoPorcentajeFinanciar-error').slideUp().html('');
		$('#minimoPorcentajeFinanciar').removeClass('errorbox');
	}
}

function validateMinimoPorcentajeContrapartidaDinero(){
	var e=$('#minimoPorcentajeContrapartidaDinero');
	if(e.length===1 && e.val()===''){
		var e5=$('#minimoPorcentajeContrapartidaDinero-error');
		e5.html('Escriba el minimo porcentaje contrapartida dinero');
		e5.slideDown();
		$('#minimoPorcentajeContrapartidaDinero').addClass('errorbox');
	}else{
		$('#minimoPorcentajeContrapartidaDinero-error').slideUp().html('');
		$('#minimoPorcentajeContrapartidaDinero').removeClass('errorbox');
	}
}

function validateMinimoPorcentajeContrapartidaEspecie(){
		var f=$('#minimoPorcentajeContrapartidaEspecie');
	if(f.length===1 && f.val()===''){
		var e6=$('#minimoPorcentajeContrapartidaEspecie-error');
		e6.html('Escriba el minimo porcentaje contrapartida especie');
		e6.slideDown();
		$('#minimoPorcentajeContrapartidaEspecie').addClass('errorbox');
	}else{
		$('#minimoPorcentajeContrapartidaEspecie-error').slideUp().html('');
		$('#minimoPorcentajeContrapartidaEspecie').removeClass('errorbox');
	}
}

function validateMontoMaximoFinanciar(){
		var g=$('#montoMaximoFinanciar');
	if(g.length===1 && g.val()===''){
		var e7=$('#montoMaximoFinanciar-error');
		e7.html('Escriba el monto maximo financiar');
		e7.slideDown();
		$('#montoMaximoFinanciar').addClass('errorbox');
	}else{
		$('#montoMaximoFinanciar-error').slideUp().html('');
		$('#montoMaximoFinanciar').removeClass('errorbox');
	}
}

function validateMontoMaximoFinanciar(){
	var g=$('#montoMaximoFinanciar');
	if(g.length===1 && g.val()===''){
		var e7=$('#montoMaximoFinanciar-error');
		e7.html('Escriba el monto maximo financiar');
		e7.slideDown();
		$('#montoMaximoFinanciar').addClass('errorbox');
	}else{
		$('#montoMaximoFinanciar-error').slideUp().html('');
		$('#montoMaximoFinanciar').removeClass('errorbox');
	}
}

function validateMontoTotalConvocatoria(){
	var h=$('#montoMaximoFinanciar');
	if(h.length===1 && h.val()===''){
		var e8=$('#montoTotalConvocatoria-error');
		e8.html('Escriba el monto total convocatoria');
		e8.slideDown();
		$('#montoTotalConvocatoria').addClass('errorbox');
	}else{
		$('#montoTotalConvocatoria-error').slideUp().html('');
		$('#montoTotalConvocatoria').removeClass('errorbox');
	}
}

function validateCdp(){
	var i=$('#cdp');
	if(i.length===1 && i.val()===''){
		var e9=$('#cdp-error');
		e9.html('Escriba el cdp');
		e9.slideDown();
		$('#cdp').addClass('errorbox');
	}else{
		$('#cdp-error').slideUp().html('');
		$('#cdp').removeClass('errorbox');
	}
}

function validateCdr(){
	var j=$('#cdr');
	if(j.length===1 && j.val()===''){
		var e10=$('#cdr-error');
		e10.html('Escriba el cdr');
		e10.slideDown();
		$('#cdr').addClass('errorbox');
	}else{
		$('#cdr-error').slideUp().html('');
		$('#cdr').removeClass('errorbox');
	}
}

function validateUrl(){
	var k=$('#url');
	if(k.length===1 && k.val()===''){
		var e11=$('#url-error');
		e11.html('Escriba el url');
		e11.slideDown();
		$('#url').addClass('errorbox');
	}else{
		$('#url-error').slideUp().html('');
		$('#url').removeClass('errorbox');
	}
}

function validateNumeroProyecto(){
	var l=$('#numeroProyecto');
	if(l.length===1 && l.val()===''){
		var e12=$('#numeroProyecto-error');
		e12.html('Escriba el numero del proyecto');
		e12.slideDown();
		$('#numeroProyecto').addClass('errorbox');
	}else{
		$('#numeroProyecto-error').slideUp().html('');
		$('#numeroProyecto').removeClass('errorbox');
	}
}

function validateVigencia(){
	var m=$('#vigencia');
	if(m.length===1 && m.val()===''){
		var e12=$('#vigencia-error');
		e12.html('Escriba la vigencia');
		e12.slideDown();
		$('#vigencia').addClass('errorbox');
	}else{
		$('#vigencia-error').slideUp().html('');
		$('#vigencia').removeClass('errorbox');
	}
}

