Actividad para Desarrollador Junior

### Proyecto: Aplicación TODO List

Por: Julio Fabian de la Rosa Izquierdo

### Paquetes necesarios para el desarrollo:

1. node.js descargable a traves de: https://nodejs.org/es/download
2. express, puede instalarlo usando npm (aunque en teoria se instala automaticamente al seguir las indicaciones): `npm install express`
3. opcional: puede usar nodemon para reiniciar el servidor cada que realice cambios y los guarde (aunque en teoria se instala automaticamente al seguir las indicaciones): 
`npm install nodemon -D` esto solo funcionara en desarrollo como indica `-D`.

### Instrucciones de instalacion:

1. Instale node.js, esto puede variar dependiendo del sistema operativo de tu computadora, en windows ejecute el instalador y siga las indicaciones del programa para instalarlo.
2. Clone el repositorio desde github, puede copiar la siguiente linea de comando y agregarla en su terminal, solo asegurese de 
encontrarse en la carpeta correcta: `git clone https://github.com/Julio-Fabian/Todo-List-Simple-App.git`

![imagen](https://github.com/user-attachments/assets/6c13013a-7404-475f-b3a4-f4761a4617a1)

*Este comando descargara el proyecto desde el servidor remoto y lo guardara en la carpeta del explorador en la que te encuentras dentro de la terminal.*

3. Una vez clonado el proyecto navegue a el usando `cd .\Todo-List-Simple-App\` (powershell) y podra ver los archivos usando el comando `ls`.

![imagen](https://github.com/user-attachments/assets/74795565-511d-4b7f-a327-a6e8e5a47e4f)

5. Asumiendo que tiene el editor Visual Studio Code instalado en su PC, ejecute el comando `code .`, esto abrira una nueva ventana de su editor en la carpeta
donde se encuentra el proyecto.

![imagen](https://github.com/user-attachments/assets/19b13bd0-de71-460f-8977-b12b2a0a3a5b)

6. Seleccione que confia en el directorio en que se encuentra y el editor continuara con todas sus extensiones habilitadas.
7. Ejecute la terminal de Visual Studio Code, en menu: `Terminal> Nueva Terminal (o New Terminal si esta en ingles)`
8. Suponiendo que ya tiene node js instalado, ejecute el comando `npm install` esta linea instalara todas las dependencias que se encuentran en `package.json` y sus
   configuraciones de desarrollo, en este caso hay un "perfil" llamado `dev` que se encuentra en `package.json`

![imagen](https://github.com/user-attachments/assets/ea2c076b-893a-4db1-898b-97cce8d0b9fd)

**CONFIGURACION Y PAQUETES DEL PROYECTO:**

![imagen](https://github.com/user-attachments/assets/214bcdc3-bd9c-485f-9274-0585a5a1307c)

**EJECUCION DEL SISTEMA:**

9. Para ejecutar la aplicacion ejecute el siguiente comando `npm run dev`, asi el servidor se levantara y la aplicacion comenzara a funcionar.
   Puedes accerder a la app en la siguiente url: `http://localhost:3000`, esto te llevara a la pagina principal de la app.

![imagen](https://github.com/user-attachments/assets/7a4d17ed-d7c4-4499-b14c-da19818ea84a)

### Elementos de la App

A) Crear nueva tarea:

![imagen](https://github.com/user-attachments/assets/9ed3b6b0-aea4-4899-b2d6-a679c35ca76c)

B) Editar una tarea (pulse el boton "editar")

![imagen](https://github.com/user-attachments/assets/f5b9a818-3562-475f-8b2a-0d06a287c6a3)

C) Ver detalle de la tarea (pulse el boton "ver detalles")

![imagen](https://github.com/user-attachments/assets/ece992c1-9798-48d9-ab8f-fa86c868ef6e)

D) Eliminar una tarea (Pulse el boton "eliminar")

![imagen](https://github.com/user-attachments/assets/ac6e00e1-c023-430c-950c-4d216704f63f)

Eliminamos tarea:

![imagen](https://github.com/user-attachments/assets/9f0b5c0f-78fb-457b-a302-33ab83803593)
![imagen](https://github.com/user-attachments/assets/e8422b09-9225-4eb2-8833-30c388462622)
![imagen](https://github.com/user-attachments/assets/f34ab07f-dede-4685-b861-af8e2078d330)

E) Terminar una tarea pendiente (pulse "terminar") para finalizar la actividad pendiente.

![imagen](https://github.com/user-attachments/assets/a0f8b202-f823-47c6-87a4-cad6679eab3c)
![imagen](https://github.com/user-attachments/assets/82145d02-c031-41bf-a92a-020ccd6f95ad)

Resultado final:

![imagen](https://github.com/user-attachments/assets/d8d5a3d4-71b7-48e0-ac96-2e25e66b1575)












