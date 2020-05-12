function button1_Click()
       {
           var clave = "";
           var longitud = 0;
           var caracter;
           var casichars = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
           var chars = "$%#@!¡*+-_¿?;:^&.,abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');


           if (document.getElementById("longitud").value == "" || !isNumero(document.getElementById("longitud").value))  //modifico
           {
               alert("¡Indique una longitud con carácteres numéricos para la clave!");
               document.getElementById("longitud").value = null;
           }
           else if ((document.getElementById("longitud").value) < 6)
           {
               alert("Para una contraseña minimamente segura, seleccione una longitud para la clave minima de 6", "Atención!");
               document.getElementById("longitud").value = null;
           }
           else if((document.getElementById("longitud").value) >= 6 && (document.getElementById("longitud").value) <= 100)
           {
               clave = "";
               longitud = (document.getElementById("longitud").value);
               if (!document.getElementById("especiales").checked)   //sin caracteres especiales
               {
                   for (var i = 0; i < longitud; i++)
                   {
                       //var j = r.Next(casichars.Length);
                       var j = Math.floor((Math.random() * 62) + 0);
                       caracter = casichars[j];
                       clave += caracter;
                   }
                   document.getElementById("salida").innerHTML = clave;
               }
               else
               {
                   for (var i = 0; i < longitud; i++)
                   {
                       //var j = r.Next(chars.Length);
                       var j = Math.floor((Math.random() * 80) + 0);
                       caracter = chars[j];
                       clave += caracter;
                   }
                   document.getElementById("salida").innerHTML = clave;
               }
           }
           else
           {
              alert("Una clave con longitud mayor de 100 no tiene mucho sentido, seleccione una longitud con carácteres numéricos para la clave entre 6 y 100.");
               document.getElementById("longitud").value = null;
               document.getElementById("salida").value = null;
           }

       }

       function isNumero(text)
       {
           var salida = true;
           for (var i = 0; i < text.Length && salida; i++)
           {
               if ((text[i] >= '0' && text[i] <= '9'))
               {
                   salida = true;
               }
               else
               {
                   salida = false;
               }
           }
           return salida;
       }
