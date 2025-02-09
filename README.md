
  # Iniciar Proyecto 🚀
  Para ejecutar el proyecto en tu entorno local de Docker, puedes hacerlo mediante este comando para Construir la imagen
 
  ~~~bash  
  docker build -t mi-react-app .
  ~~~
  Después de construir la imagen, ejecuta este comando que te permitirá ejecutar el proyecto en tu entorno local
  ~~~bash  
  docker run -p 3000:80 mi-react-app
  ~~~
  📝Nota: Al ejecutar el proyecto, se utilizarán los puertos 3000:80. Asegúrate de tener el puerto libre

  Eso es todo. Lo único que debes hacer es ingresar a esta URL
 ~~~bash  
    http://localhost:3000
  ~~~

# Navegación 
Al ingresar a la URL, se cargará la siguiente página.
![App Screenshot](https://github.com/Rrosso27/KRMCFrontend/blob/main/public/Screenshot%202025-02-09%20164108.png?raw=true) 
En la parte superior hay dos opciones: una para iniciar sesión en la página y otra para crear tu cuenta de usuario. En este caso, como es un caso de prueba, el formulario de registro tendrá dos opciones: una para registrarse como administrador y otra como empleado 

Opciones de Navegación: 

![App Screenshot](https://github.com/Rrosso27/KRMCFrontend/blob/main/public/Screenshot%202025-02-09%20164249.png?raw=true) 

Formulario de registro
![App Screenshot](https://github.com/Rrosso27/KRMCFrontend/blob/main/public/Screenshot%202025-02-09%20164641.png?raw=true) 


Formulario para inicio de cesión   
![App Screenshot](https://github.com/Rrosso27/KRMCFrontend/blob/main/public/Screenshot%202025-02-09%20164647.png?raw=true) 


## Navegación inicio de cesión 
Al iniciar sesión, se cargará un formulario para el registro de los empleados y un listado de los empleados ingresados al sistema. Este apartado puede variar según el rol del usuario.

## Formulario registro de empleados

 Este formulario, que se encuentra en la opción 'Administrar empleados' en la parte superior del menú de navegación, se encargará de gestionar el registro, actualización, consulta y eliminación de datos relacionados con los empleados

![App Screenshot](https://github.com/Rrosso27/KRMCFrontend/blob/main/public/Screenshot%202025-02-09%20165631.png?raw=true) 


## Formulario registro de Solicitudes 
Este formulario se encargará de administrar las solicitudes. Lo único que se requiere es un empleado para realizar el vínculo de la solicitud

![App Screenshot](https://github.com/Rrosso27/KRMCFrontend/blob/main/public/Screenshot%202025-02-09%20165516.png?raw=true) 
