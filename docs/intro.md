---
sidebar_position: 1
---

# Características

## Objetivos de aprendizaje

Aquí vas a poder ver los objetivos de aprendizaje que lograrás dominar al terminar este proyecto.

## Consideraciones generales

* Este proyecto se debe "resolver" de manera individual.

* El rango de tiempo estimado para completar el proyecto es de 3 a 5 sprints.

* Consideramos los hitos 1 y 2 como los criterios de aceptación mínimos del proyecto.

* Enfócate en aprender y no solamente en "completar" todos los hitos del proyecto.

* Te sugerimos que no intentes saber todo de Node.js antes de empezar a codear. No es necesario tomar un curso de Node.js completo. Aprenderás a medida que avances en el proceso.

## Consideraciones técnicas

Para comenzar este proyecto tendrás que hacer un fork y clonar este repositorio.

* En este proyecto hay que adoptar las convenciones que los proyectos open source de software usan para hacer seguimiento. Vas a usar Github projects con **[issues](https://docs.github.com/es/issues)** y **[milestones](https://docs.github.com/es/issues/using-labels-and-milestones-to-track-work/about-milestones)** para priorizar y organizar el trabajo y hacer seguimiento de tu proceso. Dentro de cada milestone se crearán y asignarán los issues que cada quien considere necesarios.

* La **librería** y el **script ejecutable** (herramienta de línea de comando -
  CLI) deben estar implementados en JavaScript para ser ejecutados con
  Node.js. **Está permitido usar librerías externas**.

* Tu módulo **debe ser instalable** via `npm install <github-user>/md-links`. Este
  módulo debe incluir tanto un _ejecutable_ que podamos invocar en la línea de
  comando como una interfaz que podamos importar con `require` para usarlo
  programáticamente.

* Los **tests unitarios** deben cubrir un mínimo del 70% de _statements_,
  _functions_, _lines_ y _branches_. Te recomendamos explorar [Jest](https://jestjs.io/) para tus pruebas unitarias.

* Para este proyecto **no está permitido** utilizar `async/await`.

* Para este proyecto, te recomendamos utilizar los módulos CommonJS con `require`,  que es el formato de módulos original de Node.js. Si prefieres utilizar ES Modules 
`(import/export)`, puedes hacerlo, pero ten en cuenta que deberás configurar adecuadamente tu proyecto para que Node.js pueda utilizar este formato. Puedes encontrar más información al respecto [aquí](https://nodejs.org/api/esm.html#enabling)

* Para este proyecto, te recomendamos evitar el uso de la función síncrona
  `readFileSync` para leer archivos. En su lugar, te sugerimos abordar este desafío de manera asíncrona utilizando `readFile`. Además, si utilizas el módulo [require("fs/promises")](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html), podrás aprovechar las promesas con `readFile`. 

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
* `.gitignore` para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).
* `test/md-links.spec.js` debe contener los tests unitarios para la función
  `mdLinks()`. Tu implementación debe pasar estos tests.

Este proyecto lo puedes ir construyendo por hitos. A continuación te sugerimos algunos:
