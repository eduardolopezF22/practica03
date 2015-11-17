// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	$('#btnjugar').on('click',function(){
		 var pantalla =$.mobile.getScreenHeight();
		 var encabezado =$('ui-header').outerHeight();
		 var pie =$('ui-footer').outerHeight();
		 var contenido=$('ui-content').outerHeight();
		 var alto=(pantalla-encabezado-pie)/2;
		 alert('pantalla '+pantalla);
		 alert('Encabezado '+encabezado);
		 
		
		
		});//btnjugar-click
$('.cuadro').on('mousedown',function(){
		
		$(this).addClass('pulsado');
});

$('.cuadro').on('mouseup',function(){
		
		$(this).removeClass('pulsado');
 
});
});