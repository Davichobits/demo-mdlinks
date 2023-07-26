---
sidebar_position: 3
---

# Tips y recursos

### Inicia con un diagrama de flujo y/o pseudocódigo

Este proyecto difiere de los anteriores en los que has trabajado, ya que no
implica una interfaz web. Todo el desarrollo se llevará a cabo en tu editor
y en la consola/terminal.

El proyecto se basa en un proceso lógico compuesto por diferentes pasos. Para
comprender mejor lo que debes hacer y planificar tus tareas y objetivos, se
recomienda desglosar el proceso en pasos y visualizarlo mediante un diagrama
de flujo o escribiendo pseudocódigo

### Sugerencias de implementación

La implementación de este proyecto tiene varias partes: leer del sistema de
archivos, recibir argumentos a través de la línea de comando, analizar texto,
hacer consultas HTTP, ... y todas estas cosas pueden enfocarse de muchas
formas, tanto usando librerías como implementando en VanillaJS.

Por poner un ejemplo, el parseado (análisis) del Markdown para extraer los
links podría plantearse de las siguientes maneras (todas válidas):

* Usando un módulo como
  [Markdown-it](https://www.npmjs.com/package/markdown-it), que nos devuelve
  un arreglo de tokens que podemos recorrer para identificar los links.

* También podríamos usar una combinación de varios módulos (podría ser válido
  transformar el Markdown a HTML usando algo como [marked](https://github.com/markedjs/marked)
  y de ahí extraer los links con una librería de DOM como [JSDOM](https://www.npmjs.com/package/jsdom)
  o [Cheerio](https://cheerio.js.org/) entre otras).

* Usando un [custom renderer de la librería marked](https://marked.js.org/using_pro#renderer)
  (new marked.Renderer()).

* Siguiendo otro camino completamente diferente, podríamos usar expresiones
  regulares (RegExp).

:::tip
No dudes en consultar a tus compañeras, coaches y/o el foro de la comunidad si tienes dudas existenciales con respecto a estas decisiones. No existe una "única" manera correcta 😉 Lo importante es que entiendas el código que escribes para lograr la tarea.
:::

### ¿CommonJS Modules o ES Modules, cual debería usar?

Desde el principio, es importante que tomes una decisión respecto a qué tipo de
módulos utilizarás: ES Modules (import/export) o CommonJS Modules
(require/module.exports). Ambos cumplen el mismo propósito de modularizar y
compartir código. Hasta ahora, Node.js ha empleado mayormente los CommonJS
Modules (require) y funcionan sin necesidad de configuraciones adicionales.
Sin embargo, en las versiones más recientes de Node.js, también puedes optar
por utilizar ES Modules, aunque esto requerirá algunos pasos de configuración
adicionales. Si decides utilizar ES Modules, asegúrate de investigar cómo
configurar tu proyecto según la versión de Node que estés utilizando. Ten en
cuenta esta decisión desde el inicio de tu proyecto, ya que afectará la forma
en que importas y exportas módulos en tu código.

### ¿Cuáles son partes de node son relevantes para este proyecto?

Node ofrece una amplia gama de módulos y funciones, pero no es necesario
conocerlos todos antes de comenzar a programar. Los hitos se refieren a partes
específicas de Node que puedes explorar, como los módulos `fs` (`readFile`,
`readdirSync`) y `path`.
Estos módulos son útiles para realizar operaciones de lectura y escritura de
archivos, así como para manipular y trabajar con rutas de archivos en tu código.
A medida que avanzas en tu proyecto, puedes investigar más sobre estos módulos
y cómo utilizar sus funciones para lograr tareas específicas. ¡No dudes en
sumergirte en la programación y explorar los partes relevantes de Node mientras
avanzas en tu proyecto!

### ¿Cómo hago para que mi módulo sea instalable con npm?

Para que el módulo sea instalable desde GitHub solo tiene que:

* Estar en un repo público de GitHub
* Contener un `package.json` válido

Con el comando `npm install githubname/reponame` podemos instalar directamente

Por ejemplo, el [`curriculum-parser`](https://github.com/Laboratoria/curriculum-parser)
que usamos para la currícula no está publicado en el registro público de NPM,
así que lo instalamos directamente desde GitHub con el comando `npm install
Laboratoria/curriculum-parser`.

### Hito 1

* [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
* [Node.js path - Documentación oficial](https://nodejs.org/api/path.html)
* [Cómo crear promesas - javascript.info](https://es.javascript.info/promise-basics)

### Hito 2

* [Validación de URLs con peticiones http - luisrrleal.com](https://luisrrleal.com/blog/como-hacer-peticiones-http-en-javascript)

### Hito 3

* [Cómo iterar un arreglo de promesas - mozilla.org](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

### Hito 4

* [Tú, yo y package.json](https://medium.com/noders/t%C3%BA-yo-y-package-json-9553929fb2e3)
* [Cómo crear y publicar packpage - npmjs.com](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Una guía para crear un paquete de línea de comandos NodeJS - medium.com](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)

### Hito 5

* [Qué es la recursividad y cómo crear funciones recursivas - javascript.info](https://es.javascript.info/recursion)

### Otros recursos

* [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
* [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
* [Asíncronía en js](https://carlosazaustre.es/manejando-la-asincronia-en-javascript)
* [Patrones para coincidencia de caracteres con expresiones regulares - mozilla.org](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions)

## Para pedir project feedback

* [ ] Un board en github projects con el backlog para la implementación de la
  librería.

* [ ] un `README.md` con documentación técnica de la librería y una guía de
  uso e instalación de la librería.

* [ ] un API `mdLinks(path, validate)` con los siguientes requisitos
  (Hito 1 y 2 son los mínimos):

  - El módulo debe exportar una función que cumpla con la interfaz (API)
    requerida. (Hito 1)
  - Deberá implementar el soporte para archivos individuales. (Hito 1)
  - Deberá implementar la funcionalidad de validación. (Hitos 1 y 2)
  - Deberá ofrecer soporte para directorios. (Hitos 1 al 3)
  - Deberá ofrecer soporte para directorios que pueden contener otros
    directorios. (Hitos 1 al 5)

* [ ] un CLI (Command Line Interface) que se ejecuta sin errores
  y tiene el output esperado. Además acepta los parámetros
  `--validate` y `--stats`. Y expone un ejecutable
  md-links en el path (configurado en el `package.json`)
* [ ] Pasa tests y linters (`npm test`). Tests unitarios cubren un mínimo
  del 70% de coverage tests, es decir statements, functions, lines y branches.
