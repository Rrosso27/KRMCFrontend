
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
 