/* Web personal de Luis Francisco Albert Navarro, Ingeniero Informático con la especialidad de Tecnologías de la Información, donde plasmar parte de sus conocimientos en HTML, CSS, JavaScript, control de versiones, etc... 
Archivo donde se definen las funciones de JavaScript*/

$(document).ready(function() {
	//código a ejecutar cuando el DOM está listo para recibir instrucciones.

	//Cargar página Política desde aviso de cookies
      $("#aviso_politica_link").click(function(evento){
         evento.preventDefault();
         $("#container-home").css("display", "none");
         $("#container-body-content").load("pages/politica.html");
      });
   	
	//Cargar página Aviso
      $("#aviso_link").click(function(evento){
         evento.preventDefault();
         $("#container-home").css("display", "none");
         $("#container-body-content").load("pages/aviso.html");
      });

      //Cargar página Política 
      $("#politica_link").click(function(evento){
         evento.preventDefault();
         $("#container-home").css("display", "none");
         $("#container-body-content").load("pages/politica.html");
      });
	  
	 //Cargar página Noticias 
      $("#noticias").click(function(evento){
         evento.preventDefault();
         $("#container-home").css("display", "none");
         $("#container-body-content").load("pages/noticias.html");
      });
	  //Cargar página Noticias desde cartel 
      $("#c_noticias").click(function(evento){
         evento.preventDefault();
         $("#container-home").css("display", "none");
         $("#container-body-content").load("pages/noticias.html");
      });
	  //Cargar página Noticias Footer 
      $("#noticias_link").click(function(evento){
         evento.preventDefault();
         $("#container-home").css("display", "none");
         $("#container-body-content").load("pages/noticias.html");
      });
	  
	  //Cargar página Contacto 
      $("#contacto").click(function(evento){
         evento.preventDefault();
         $("#container-home").css("display", "none");
         $("#container-body-content").load("pages/contacto.html");
      });
	  
	  //Cargar página Contacto desde cartel 
      $("#c_contacto").click(function(evento){
         evento.preventDefault();
         $("#container-home").css("display", "none");
         $("#container-body-content").load("pages/contacto.html");
      });
	  
	  //Cargar página Contacto Footer 
      $("#contacto_link").click(function(evento){
         evento.preventDefault();
         $("#container-home").css("display", "none");
         $("#container-body-content").load("pages/contacto.html");
      });
	  
	  //Cargar página Proyectos 
      $("#proyectos").click(function(evento){
         evento.preventDefault();
         $("#container-home").css("display", "none");
         $("#container-body-content").load("pages/proyectos.html");
      });
	  //Cargar página Proyectos desde cartel 
      $("#c_proyectos").click(function(evento){
         evento.preventDefault();
         $("#container-home").css("display", "none");
         $("#container-body-content").load("pages/proyectos.html");
      });
	  
	  //Cargar página Experiencia 
      $("#experiencia").click(function(evento){
         evento.preventDefault();
         $("#container-home").css("display", "none");
         $("#container-body-content").load("pages/experiencia.html");
      });
	   //Cargar página Experiencia desde cartel
      $("#c_experiencia").click(function(evento){
         evento.preventDefault();
         $("#container-home").css("display", "none");
         $("#container-body-content").load("pages/experiencia.html");
      });
	  
	  //Cargar página Formacion 
      $("#formacion").click(function(evento){
         evento.preventDefault();
         $("#container-home").css("display", "none");
         $("#container-body-content").load("pages/formacion.html");
      });
	  
	  //Cargar página Formacion desde cartel
      $("#c_formacion").click(function(evento){
         evento.preventDefault();
         $("#container-home").css("display", "none");
         $("#container-body-content").load("pages/formacion.html");
      });
}); 

//Funciones que utilizo para cumpliri con el aviso de política de cookies.
function GetCookie(name) {
	var arg=name+"=";
	var alen=arg.length;
	var clen=document.cookie.length;
	var i=0;
	while (i<clen) {
		var j=i+alen;
		if (document.cookie.substring(i,j)==arg)
			return "1";
			i=document.cookie.indexOf(" ",i)+1;
		if (i==0)
			break;
	}
	return null;
}

function aceptar_cookies(){
	var expire=new Date();
	expire=new Date(expire.getTime()+7776000000);
	document.cookie="cookies_surestao=aceptada; expires="+expire;
	var visit=GetCookie("cookies_surestao");
	if (visit==1){
		cookiefunction();
	}
}

$(function() {
	var visit=GetCookie("cookies_surestao");
	if (visit==1){ cookiefunction(); }
});

function cookiefunction() {
	$('#cookiebox').toggle();
}