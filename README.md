# The Cloud Front end LaLiga

## Instalacion:

Abre tu terminal y accede al directorio que contiene el app de react. Una vez en esta usa el comando npm i para instalar las dependecias.

## Uso:

Una vez instaladas las dependencias usa el comando npm start para iniciar la aplicacion. Esta estara disponible en el puerto 3000 de tu ordenadore, si no se abre una ventana con la aplicacion en tu explorador dirigete a http://localhost:3000.

## Sobre el App front-end-laliga:

Es una pequeña aplicacion desarrollada en react, que consume el api de https://reqres.in/.

En esta podras hacer login usando uno de los emails disponibles en https://reqres.in/api/users. Una vez se autentiquen tus credenciales podras acceder a las lista de usuarios, ver sus detalles, editarlo y eliminarlos.

A tener en cuenta, al editar y eliminar, no se modificaran los datos de las lista si bien si se haran las peticions PUT y DELETE respectivamente.

El estado global de la aplicación se gestiona por medio de redux, y el manejo de efectos secundarios y la parte asyncrano con redux-saga.

La capa de estilos fue desarrollada usando SASS. Existe un punto de quiebre, 768px, en el cual se modifican los estilos para tener una buena experiencia tanto en ordenador como en dispositivos mobiles.

La navegacion de la aplicación se gestiona por medio de react-router-dom.

Todos los componentes base han sido testeados usando Jest y react-testing, usando el formato de test de render y de eventos si fuese el caso.

Para mantener la base del codigo simple opte por no usar librerias externas, y para mantenerla limpia configure prettier para que formate el codigo con cada guardado y eslint para que arrejo alamars si se declaran variables que nunca se utilizan.
