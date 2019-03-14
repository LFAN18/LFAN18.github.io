/* Web personal de Luis Francisco Albert Navarro, Ingeniero Informático con la especialidad de Tecnologías de la Información, donde plasmar parte de sus conocimientos en HTML, CSS, JavaScript, control de versiones, etc... 
Archivo donde se definen las funciones de JavaScript*/

$(document).ready(function(){
   	//código a ejecutar cuando el DOM está listo para recibir instrucciones.
	
	//Cargar página Política desde aviso 
      $("#aviso_politica_link").click(function(evento){
         evento.preventDefault();
         $("#container").css("display", "none");
         $("#container-body-content").load("pages/politica.html");
      });
   	
	//Cargar página Aviso
      $("#aviso_link").click(function(evento){
         evento.preventDefault();
         $("#container").css("display", "none");
         $("#container-body-content").load("pages/aviso.html");
      });

      //Cargar página Política 
      $("#politica_link").click(function(evento){
         evento.preventDefault();
         $("#container").css("display", "none");
         $("#container-body-content").load("pages/politica.html");
      });
	  
	 //Cargar página Noticias 
      $("#noticias").click(function(evento){
         evento.preventDefault();
         $("#container").css("display", "none");
         $("#container-body-content").load("pages/noticias.html");
      });
	  
	  //Cargar página Noticias Footer 
      $("#noticias_link").click(function(evento){
         evento.preventDefault();
         $("#container").css("display", "none");
         $("#container-body-content").load("pages/noticias.html");
      });
	  
	  //Cargar página Contacto 
      $("#contacto").click(function(evento){
         evento.preventDefault();
         $("#container").css("display", "none");
         $("#container-body-content").load("pages/contacto.html");
      });
	  
	  //Cargar página Contacto Footer 
      $("#contacto_link").click(function(evento){
         evento.preventDefault();
         $("#container").css("display", "none");
         $("#container-body-content").load("pages/contacto.html");
      });
	  
	  //Cargar página Proyectos 
      $("#proyectos").click(function(evento){
         evento.preventDefault();
         $("#container").css("display", "none");
         $("#container-body-content").load("pages/proyectos.html");
      });
	  
	  //Cargar página Experiencia 
      $("#experiencia").click(function(evento){
         evento.preventDefault();
         $("#container").css("display", "none");
         $("#container-body-content").load("pages/experiencia.html");
      });
	  
	  //Cargar página Formacion 
      $("#formacion").click(function(evento){
         evento.preventDefault();
         $("#container").css("display", "none");
         $("#container-body-content").load("pages/formacion.html");
      });
}); 