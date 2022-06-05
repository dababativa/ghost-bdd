# Ghost BDT

Este proyecto permite realizar pruebas desarrolladas buscando cumplir con el paradigma de pruebas BDT.

Desarrollado por (Semanas 1 a 6):
- Felipe Leyva - d.leyvad@uniandes.edu.co
- Maria Fernanda García - mf.garciam1@uniandes.edu.co
- Edward Sandoval - e.sandovalh@uniandes.edu.co
- Daniel Armando Babativa - da.babativa@uniandes.edu.co

Desarrollado por (Semanas 7 y 8):
- Daniel Armando Babativa - da.babativa@uniandes.edu.co

Para poder ejecutar estas pruebas de la mejor manera posible se recomienda cumplir con los siguientes puntos
- Correr Ghost localmente en el puerto 2368
- Correr la versión 4.42.0 de Ghost (para esta versión fueron diseñadas las pruebas y es posible que estas no funcionen correctamente en otra versión)
- Correr la versión 3.42.0 de Ghost para las pruebas especificas en la descripción de escenarios de pruebas de regresión lineal
- Instalar Kraken a nivel global en su máquina
- Instalar Cypress a nivel global en su máquina
- Crear los archivos cypress.env.json y properties.json como se indica en la guía de instalación de cada herramienta. En ambos archivos debe de agregar información de la versión y el puerto en el que se esté corriendo Ghost para que las pruebas puedan funcionar de manera correcta. (Nota: solamente se tendrá en cuenta esta información para las pruebas que han sido adaptadas para ambas versiones)
- Instalar BackstopJS a nivel global en su máquina
- Instalar FakerJS siguiendo la guía presentada en este archivo readme

## Indice
1. [Guía de instalación](#guía-de-instalación)
   - [Cypress](#cypress)
   - [Kraken](#kraken)
2. [Guía de Backstop](#guía-de-backstop)
3. [Guía de Faker](#guía-de-faker)
4. [Descripción de funcionalidades](#descripción-de-funcionalidades)
5. [Descripción de escenarios de prueba](#descripción-de-escenarios-de-prueba)
6. [Descripción de escenarios de pruebas de regresión visual](#descripción-de-escenarios-de-pruebas-de-regresión-visual)
7. [Descripción de escenarios de pruebas con generación de datos](#descripción-de-escenarios-de-pruebas-con-generación-de-datos)
8. [Pros & Contras Cypress](#pros--contras-cypress)
9. [Pros & Contras Kraken](#pros--contras-kraken)

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



## Guía de Backstop
En esta sección se presentará una corta guía de como utilizar backstop js para la generación del reporte HTML con las diferencias entre las versiones de Ghost.

Primero se debe instalar backstop de manera global en su máquina.
```
npm install -g backstopjs
```
Inicialice un proyecto de Backstop
```
backstop init
```
Copie y pegue el archivo backstop.json y la carpeta screenshots en la raíz del proyecto que acaba de crear

Asegurese de estar en la carpeta raíz del proyecto backstop y ejecuté el comando
```
backstop reference
```
Y luego para ejecutar las comparaciones ejecute el comando
```
backstop test
```

## Guía de Faker
En esta sección se presentará una corta guía de como instalar FakerJS para la ejecución de las pruebas

Debido a problemas de compatibilidad entre el equipo de computo y la libreria FakerJS el desarrollo de este proyecto se realiza usando una versión antigua de FakerJS la versión 5.5.3 y por lo tanto se debe instalar esta misma versión para asegurar la correcta ejecución de las pruebas.

Para instalar esta versión de FakerJS puede ejecutar uno de dos comandos en la raíz del proyecto
```
npm install
```
Que instala las dependencias automáticamente o el siguiente comando que instala la versión de manera manual 
```
npm i faker@5.5.3
```

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
- Iniciar Sesión: El usuario inicia sesión con un usuario y contraseña previamente registrado en el sistema de ghost.
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
- Crear: Se crea una nueva página en ghost y se corrobora que aparezca en el listado de páginas.
- Editar: Se crea una nueva página en ghost, luego a partir de la lista de páginas, se selecciona la página, se edita y actualiza. Se hace la respectiva validación de que la página aparezca en la lista con la nueva información.
- Eliminar: Se crea una nueva página en ghost. Después, se busca la página en la lista, se abre y se elimina. Se corrobora que esta ya no aparezca en la lista de páginas.
- Despublicar una página (pasa a borrador o draft): Se crea una nueva página en ghost. Después, se busca la página en la lista, se abre y se despublica. En la lista se verifica que ahora tenga estado borrador o draft (es el estado que toma una página cuando se despublica)

**_NOTA:_** Es necesario borrar cualquier página que haya sido creada como parte del proceso de pruebas para que estas tengan el mejor funcionamiento. Este proceso se dene ejecutar de manera manual.

### Manejo de miembros
- Crear: Se genera la creación de un nuevo miembro en el sistema y guarda la información para que quede publicado.
- Editar: Se realiza la creación de un nuevo miembro, se guarda y posteriormente se realiza edita la información y se guarda de nuevo para que quede publicado.
- Eliminar: Se realiza la creación de un nuevo miembro. Después se busca este miembro en la lista, se abre y se elimina. Se valida que el miembro ya no aparezca en la lista de los miembros.
- Ver: Se realiza la creación de un nuevo miembro. Después se busca este miembro en la lista y se accede a su información.

## Descripción de escenarios de pruebas de regresión visual

A continuación se detallan los escenarios de prueba para la regresión visual. Estas funcionalidades fueron adaptadas a ambas versiones de Ghost bajo pruebas (3.42 y 4.42):

**_NOTA:_** Todas las pruebas de la sección anterior fueron adaptadas para la toma de screenshots pero solamente las siguientes pruebas fueron adaptadas para le ejecución de pruebas en ambas versiones de Ghost

### Login
- Iniciar Sesión: El usuario inicia sesión con un usuario y contraseña previamente registrado en el sistema de ghost

### Manejo de posts 
- Crear post: Se genera la creación de un nuevo post en el sistema y se realiza la publicación del mismo.

### Manejo de tags 
- Crear: Se crea un nuevo tag en ghost y se valida que este aparezca en la lista
- Editar: Se realiza la creación de un nuevo tag en ghost, posteriormente se regresa a la lsita de tags, se abré el tag, se edita y actualiza. Se valida que este tag aparezca con la información actualizada en la lista y no con la previa

**_NOTA:_** Es necesario borrar cualquier tag que haya sigo creado como parte del proceso de pruebas para que estas tengan el mejor funcionamiento. Cuando se ejecutan estas pruebs en Cypress el mismo script de pruebas se encarga de borrar todos los tags previamente, en el caso de Kraken este proceso se debe realizar manualmente.

**_NOTA:_** La eliminación de tags internos presenta un bug que ha sido reportado en el repositorio con las incidencias encontradas, debido a esto el proceso de eliminiación de tags internos debe realizarse manualmente antes de cada prueba

### Manejo de páginas
- Eliminar: Se crea una nueva página en ghost y luego se elimina y se valida que esta desaparezca en la lista.
- Despublicar: Se realiza la creación de una nueva página en ghost, posteriormente se despublica. Se valida que esta página no aparezca.

**_NOTA:_** Es necesario borrar cualquier página que haya sido creada como parte del proceso de pruebas para que estas tengan el mejor funcionamiento. Este proceso se dene ejecutar de manera manual.

### Manejo de miembros
- Crear: Se genera la creación de un nuevo miembro en el sistema y guarda la información para que quede publicado.

## Descripción de escenarios de pruebas con generación de datos

A continuación se detallan los escenarios de prueba con generación de datos. Estas funcionalidades están divididas en tres bloques, A priori, Pseudo, Aleatorias y para cada uno de estos bloques de desarrollaron 10 funcionalidades. A continuación se explica detalladamente

Para ejecutar estas pruebas se debe abrir el proyecto de cypress y ejecutar los archivos, tags-a-priori.spec.js, tags-pseudo.spec.js, y tags-random.spec.js dependiendo de cual estrategia de generación de datos se quiere utilizar.

### A priori
Para la generación de datos A priori se decidió utilizar la herramienta Mockaroo que permite genearar miles de objetos siguiendo un esquema de generación para cada atributo de estos objetos. En este caso se decidió utilizar el siguiente esquema

![image](https://user-images.githubusercontent.com/42902488/172065121-5007767e-4e48-4263-8324-79d656c435a1.png)

Donde se están creando objetos tipo Tag con los atributos necesarios y a ser usados durante la ejecución de las pruebas. Utilizando este esquema se crea un archivo JSON el cual se importa durante la ejecución de las pruebas. 

Para ejecutar estas pruebas se debe ejecutar el archivo tags-a-priori.spec.js que ejecuta las siguientes pruebas tanto positivas como negativas
1. Crear tag bien
2. Crear tag sin nombre
3. Crear tag sin slug
4. Crear tag sin descripcion
5. Crear tag sin color
6. Crear tag con nombre extraño
7. Crear tag con slug raro
8. Crear tag con color en formato diferente
9. Editar tag sin color
10. Editar tag con color en formato diferente

## Pseudo
Para la generación de pruebas usando esta estretegia de utilizó la librería FakerJS cuya guía de instalación se encuentra [aquí](#guía-de-faker).

Esta libreria se importa dentro del archivo tags-pseudo.spec.js y además de utiliza una semilla que es fija para poder reproducir las pruebas con exactamente los mismos datos generados. En este caso la semilla utilizada es 2062022.

Para ejecutar las pruebas que abarcan esta estrategia se debe ejecutar el archivo tags-pseudo.spec.js que ejecuta las siguientes pruebas tanto positivas como negativas

11. Crear tag con descripción muy larga

12. Crear tag con nombre en el limite

13. Crear tag con slug en el limite

14. Crear tag con descripcion en el limite

15. Crear tag sin nada

16. Editar tag bien

17. Editar tag sin nombre

18. Editar tag sin slug

19. Editar tag sin descripcion

20. Crear tag con nombre muy largo

## Aleatorias
Nuevamente se usa la librería FakerJS cuya guía de instalación se encuentra [aquí](#guía-de-faker).

Al igual que en pseudo se importa la librería esta vez en un archivo tags-random.spec.js que ejecutas las pruebas con la diferencia que no se usa ninguna semilla para que entonces cada ejecución de las pruebas sea una totalmente diferente a la anterior, aleatorias entre si.

Para ejecutar las pruebas que abarcan esta estrategia se debe ejecutar el archivo tags-random.spec.js que ejecuta las siguientes pruebas tanto positivas como negativas

21. Editar tag con nombre extraño

22. Editar tag con slug raro

23. Crear tag con slug muy largo

24. Editar tag con nombre muy largo

25. Editar tag con slug muy largo

26. Editar tag con descripción muy larga

27. Editar tag con nombre en el limite

28. Editar tag tag con slug en el limite

29. Editar tag con descripcion en el limite

30. Editar tag sin nada

## Pros & Contras Cypress
### Pros
- Una herramienta clara que permite utilizar conocimiento previo de otras áreas del desarrollo para la facilidad de ejecución de las pruebas
- Sigue una estructura parecida a las pruebas unitarias en donde se tiene una etapa de preparación, una de validación y finalmente una de limpieza
- Su documentación brinda varios ejemplos y es muy clara
- Es muy intuitivo y la velocidad en que realiza las pruebas es muy buena
- Su sintaxis es bastante clara para la realización de las pruebas lo que ayuda a que sea facil escibirlas

### Contras
- A veces probar casos negativos puede ser complicado
- La descripción de algunos issues no es clara y es muy genérica otras veces
- Hace falta un mejor manejo de excepciones

## Pros & Contras Kraken
### Pros
- Es una herramienta versatil que permite la creación de escenarios usando la premisa Given When Then
- Permite realizar pruebas en diferentes tipos de aplicaciones
- Es multiplataforma y tiene buen soporte para móviles

### Contras
- Presenta errores de compatibilidad dependiendo de en cual sistema operativo se ejecuta
- Debido a la falta de una documentación clara y ejemplos fáciles de encontrar, su desarrollo puede presentar problemas dificiles de entender
- Aunque usa WebdriverIO, no todas las funciones son soportadas completamente
- Hace falta un foro o más espacios de soporte
- Su sintaxis genera inconsistencias ya que dada la falta de documentación no es facil detectar en que punto la prueba puede estar mal escrita o si falta alguna dependencia o librería para ejecutar

