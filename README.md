# Ghost BDT

Este proyecto permite realizar pruebas desarrolladas buscando cumplir con el paradigma de pruebas BDT.

Desarrollado por:
- Felipe Leyva - d.leyvad@uniandes.edu.co
- Maria Fernanda García - @uniandes.edu.co
- Edward Sandoval - @uniandes.edu.co
- Daniel Armando Babativa - da.babativa@uniandes.edu.co

Para poder ejecutar estas pruebas de la mejor manera posible se recomienda cumplir con los siguientes puntos
- Correr Ghost localmente en el puerto 2368
- Correr la versión 4.42.0 de Ghost (para esta versión fueron diseñadas las pruebas y es posible que estas no funcionen correctamente en otra versión)
- Instalar Kraken a nivel global en su máquina
- Instalar Cypress a nivel global en su máquina
- Crear los archivos cypress.env.json y properties.json como se indica en la guía de instalación de cada herramienta

## Guía de instalación
Abra una consola de comandos donde desee clonar el repositorio y escriba los siguientes comandos

```
git clone https://github.com/dababativa/ghost-bdd.git
```
```
cd ghost-bdd
```
### Cypress
Para correr la porción de Cypress del proyecto siga las siguientes instrucciones

Una vez esté en el directorio raíz del proyecto puede entrar a la carpeta de Cypress con el comando

```
cd cypress
```

Dentro del directorio encontrará un archivo .json llamado cypress.env.example.json. En este encontrará la estructura necesaria para crear un nuevo archivo .json. En el mismo directorio cree un archivo llamado cypress.env.json, pegue el contenido del archivo previamente mencionado y remplace los valores por los correctos para realizar las pruebas en su versión local de ghost. Si usando el archivo cypress.env.json no lográ ejecutar las pruebas también puede incluir esas variables directamente en el atributo "env" del archivo cypress.json.

Para correr Cypress puede correr el comando
```
cypress open
```
o el comando
``` 
cypress run
```
Al utilizar el primer comando se abrirá la interfaz de Cypress donde podrá ejecutar las pruebas una por una en el orden deseado. Por otro lado el segundo comando es utilizado para correr todos las pruebas sin abrir la interfaz gráfica.

**_NOTA:_** Para usar Cypress y los comando descritos previamente es necesario instalar globalmente cypress en su computadora, puede seguir el tutorial oficial de cypress en internet  

### Kraken
Para correr la porción de Kraken del proyecto siga las siguientes instrucciones

Una vez esté en el directorio raíz del proyecto puede entrar a la carpeta de Kraken con el comando
```
cd kraken
```
Y corra el comanto 
```
npm install
```
El cual instalará todas las dependencias necesarias para correr el proyecto

Tras instalar las dependencias cree un archivo llamado properties.json, en este archivo pegue el contenido del archivo properties.example.json y reemplace los valores según corresponda para que las pruebas funcionen con su versión local de ghost.

Una vez creado el archivo properties ejecute algunos de los siguientes comandos
```
npx kraken-node run
```
```
./node_modules/kraken-node/bin/kraken-node run
```
```
kraken-node run
```
El primer comando correra kraken-node desde la nube, el segundo lo correra desde la versión instalada con npm install y el último comando lo correrá con su versión local de kraken-node.

**_NOTA:_** Para usar Kraken y los comando descritos previamente es recomendado instalar globalmente kraken-node en su computadora

## Descripción de funcionalidades

A continuación se detallan las funcionalidades que se tomaron como base para la realización de cada uno de los escenarios para cada herramienta previamente descrita:
- Login: Esta funcionalidad abarca todos los procesos relacionados con el login o ingreso de usuarios administradores al sistema.
- Manejo de posts: Esta funcionalidad abarca los procesos relacionados con la administración de post dentro del sistema.
- Manejo de tags: Esta funcionalidad abarca los procesos para gestión de tags por parte de los administradores del sistema.
- Manejo de páginas: Esta funcionalidad abarca los procesos de gestión de páginas por parte de usuarios administradores.
- Manejo de miembros: Esta funcionalidad está relacionada con el manejo de usuario colaboradores o miembros de la administración de la página.

## Descripción de escenarios de prueba

A continuación se detallan los escenarios de prueba para cada una de las funcionalidades descritas anteriormente:

### Login
- Iniciar Sesión: El usuario inicia sesión con un usuario y contraseña previamente registrado en el sistema de ghost:
- Iniciar Sesión con usuario inexistente: Se inicia sesión en el sistema de ghost con un usuario que no se encuentra previamente registrado.
- Iniciar Sesión con credenciales equivocadas: Se inicia sesioón con usuario existente pero con contraseña invalida.
- Olvidé mi contraseña: Proceso para restauración de contraseña de un usuario previamente registrado.

### Manejo de posts 
- Crear post: Se genera la creación de un nuevo post en el sistema y se realiza la publicación del mismo.
- Editar post: Se realiza la creación de un nuevo post, se publica y posterior a ello se realiza la edición del mismo realizando nuevamente su publicación.
- Eliminar post: Se realiza la eliminación del primer post que se encuentre dentro de la lista de post existentes en su pestaña general.
- Programación de post: Se crea un nuevo post pero no se prublica sino se programa con fecha de 20 de Mayo. Posterior a su programación se valida que se encuentre dentro de la lista de post programados en la pestaña "Scheduled"

### Manejo de tags 
- Crear: Se crea un nuevo tag en ghost y se valida que este aparezca en la lista
- Editar: Se realiza la creación de un nuevo tag en ghost, posteriormente se regresa a la lsita de tags, se abré el tag, se edita y actualiza. Se valida que este tag aparezca con la información actualizada en la lista y no con la previa
- Eliminar: Se realiza la creación de un nuevo tag en ghost. Después se busca este tag en la lista, se abre y se borra. Se valida que este ya no aparezca en la lista de los tags
- Crear tag interno: Se realiza la creación de un tag interno y luego se revisa la lista de tags normales como los tags internos. Se valida que este tag aparezca en la lista de tags internos.

**_NOTA:_** Es necesario borrar cualquier tag que haya sigo creado como parte del proceso de pruebas para que estas tengan el mejor funcionamiento. Cuando se ejecutan estas pruebs en Cypress el mismo script de pruebas se encarga de borrar todos los tags previamente, en el caso de Kraken este proceso se debe realizar manualmente.

**_NOTA:_** La eliminación de tags internos presenta un bug que ha sido reportado en el repositorio con las incidencias encontradas, debido a esto el proceso de eliminiación de tags internos debe realizarse manualmente antes de cada prueba

### Manejo de páginas
- Crear: 
- Editar: 
- Eliminar:
- Ver:

### Manejo de miembros
- Crear: Se genera la creación de un nuevo miembro en el sistema y guarda la información para que quede publicado.
- Editar: Se realiza la creación de un nuevo miembro, se guarda y posteriormente se realiza edita la información y se guarda de nuevo para que quede publicado.
- Eliminar: Se realiza la creación de un nuevo miembro. Después se busca este miembro en la lista, se abre y se elimina. Se valida que el miembro ya no aparezca en la lista de los miembros.
- Ver: Se realiza la creación de un nuevo miembro. Después se busca este miembro en la lista y se accede a su información.

## Pros & Contras Cypress
### Pros
- Una herramienta clara que permite utilizar conocimiento previo de otras áreas del desarrollo para la facilidad de ejecución de las pruebas
- Sigue una estructura parecida a las pruebas unitarias en donde se tiene una etapa de preparación, una de validación y finalmente una de limpieza
- Su documentación brinda varios ejemplos y es muy clara

### Cons
- A veces probar casos negativos puede ser complicado

## Pros y Contras Kraken
### Pros
- Es una herramienta versatil que permite la creación de escenarios usando la premisa Given When Then
- Permite realizar pruebas en diferentes tipos de aplicaciones

## Contras
- Presenta errores de compatibilidad dependiendo de en cual sistema operativo se ejecuta
- Debido a la falta de una documentación clara y ejemplos fáciles de encontrar, su desarrollo puede presentar problemas dificiles de entender
