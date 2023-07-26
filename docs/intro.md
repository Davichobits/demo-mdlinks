---
slug: /
sidebar_position: 1
---

# Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en
muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, etc.) y
es muy común encontrar varios archivos en ese formato en cualquier tipo de
repositorio (empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://github.com/Laboratoria/bootcamp/assets/12631491/fc6bc380-7824-4fab-ab8f-7ab53cd9d0e4)

## Resumen del proyecto

En este proyecto desarrollarás una librería en Node.js que funcionará como
herramienta para analizar links dentro de archivos Markdown. Esta librería
estará disponible de dos formas: como un módulo publicado en GitHub, que las
usuarias podrán instalar e importar en otros proyectos, y como una interfaz
de línea de comandos (CLI) que permitirá utilizar la librería directamente
desde el terminal.

[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema en sí, archivos, redes, etc.

En esta oportunidad nos alejamos un poco del navegador para construir una
librería que interactua con el sistema archivos y un script que se ejecute
usando Node.js. Aprenderemos cómo buscar y leer archivos, cómo hacer consultas
de red, sobre procesos (`process.env`, `process.argv`, ...), etc.

Diseñar tu propia librería es una experiencia fundamental para cualquier
desarrolladora porque que te obliga a pensar en la interfaz (API) de tus
_módulos_ y cómo será usado por otras developers. Debes tener especial
consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.
Al finalizar, podrás instalar esta librería utilizando NPM (Node Package
Manager), que facilita la búsqueda e instalación de librerías de Node a
través de su registro y también de GitHub. Una vez que hayas subido la
librería a tu repositorio público, será accesible para otras developers.

## Objetivos de aprendizaje

Aquí vas a poder ver los objetivos de aprendizaje que lograrás dominar al terminar este proyecto.

## Consideraciones generales

* Este proyecto se debe "resolver" de manera individual.

* El rango de tiempo estimado para completar el proyecto es de 3 a 5 sprints.

* Consideramos los hitos 1 y 2 como los criterios de aceptación mínimos del proyecto.

* Enfócate en aprender y no solamente en "completar" todos los hitos del proyecto.

* Te sugerimos que no intentes saber todo de Node.js antes de empezar a codear.
  No es necesario tomar un curso de Node.js completo. Aprenderás a medida que
  avances en el proceso.

## Consideraciones técnicas

Para comenzar este proyecto tendrás que hacer un fork y clonar este repositorio.

* En este proyecto hay que adoptar las convenciones que los proyectos open
  source de software usan para hacer seguimiento. Vas a usar Github projects
  con **[issues](https://docs.github.com/es/issues)** y
  **[milestones](https://docs.github.com/es/issues/using-labels-and-milestones-to-track-work/about-milestones)**
  para priorizar y organizar el trabajo y hacer seguimiento de tu proceso.
  Dentro de cada milestone crearás los issues que
  consideres necesarios.

* La **librería** y el **script ejecutable** (herramienta de línea de comando -
  CLI) deben estar implementados en JavaScript para ser ejecutados con
  Node.js. **Está permitido usar librerías externas**.

* Tu módulo **debe ser instalable** via `npm install <github-user>/md-links`. Este
  módulo debe incluir tanto un _ejecutable_ que podamos invocar en la línea de
  comando como una interfaz que podamos importar con `require` para usarlo
  programáticamente.

* Los **tests unitarios** deben cubrir un mínimo del 70% de _statements_,
  _functions_, _lines_ y _branches_. Te recomendamos explorar [Jest](https://jestjs.io/)
  para tus pruebas unitarias.

* Para este proyecto **no está permitido** utilizar `async/await`.

* Para este proyecto, hay que decidir si vas a utilizar los módulos CommonJS
  o ES Modules. Los módulos CommonJS usan la síntaxis `require` y es el formato
  de módulos original de Node.js. Si prefieres utilizar ES Modules
  `(import/export)`, puedes hacerlo, pero ten en cuenta que
  deberás configurar adecuadamente tu proyecto para que Node.js pueda utilizar
  este formato. Puedes encontrar más información al respecto
  [aquí](https://nodejs.org/api/packages.html#determining-module-system). Además,
  tendrás que configurar Jest para ello también, siguiendo los
  [siguientes pasos](https://jestjs.io/docs/ecmascript-modules).
  Ten en consideración que Jest considera esto aún como un _feature
  experimental_.

* Para este proyecto, te recomendamos evitar el uso de la función síncrona
  `readFileSync` para leer archivos. En su lugar, te sugerimos abordar este
  desafío de manera asíncrona utilizando `readFile`. Además, si utilizas el
  módulo `fs/promises`, podrás utilizar la versión promisificada de las
  funciones como
  [`readFile`](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#fspromisesreadfilepath-options).

* Para disminuir la complejidad de tu algoritmo recursivo, te recomendamos
  utilizar la versión síncrona de la función para leer directorios, `readdirSync`.

## Descripción de los archivos del proyecto

* `README.md` con descripción del módulo, instrucciones de instalación/uso,
  documentación del API y ejemplos. Todo lo relevante para que cualquier
  developer que quiera usar tu librería pueda hacerlo sin inconvenientes.
* `index.js`: Desde este archivo debes exportar **una** función (`mdLinks`).
* `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...), main, bin
* `.editorconfig` con configuración para editores de texto. Este archivo no se
  debe cambiar.
* `.eslintrc` con configuración para linter. Este archivo contiene una
  configuración básica para ESLint, si deseas agregar reglas adicionales
  como Airbnb deberás modificar este archivo.
* `.gitignore` para ignorar `node_modules` u otras directorios que no deban
  incluirse en control de versiones (`git`).
* `test/md-links.spec.js` debe contener los tests unitarios para la función
  `mdLinks()`. Tu implementación debe pasar estos tests.

Este proyecto lo puedes ir construyendo por hitos. A continuación te sugerimos algunos: