---
sidebar_position: 3
---

# Hito 3

## Buscando dentro de una carpeta

Para este hito vas a trabajar con la misma función `mdLinks` pero esta vez la
usuaria será capaz de pasar una carpeta como ruta.

El La función `mdLinks(path, validate)` debe recorrer todos los archivos
existentes en la carpeta y por cada archivo `.md` que encuentre deberá
extraer los links para mostrarlos en pantalla.

Debes tener en cuenta que la carpeta puede contener archivos con extensiones
que no sean md. En este caso debes la función debe ignorarlos. (Crea una
carpeta con archivos de diferentes extensiones para probar tu función)

Ejemplo:

(resultados como comentarios)

```js
const mdLinks = require("md-links");


mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);


mdLinks("./some/dir", true )
  .then(links => {
    // => [{ href, text, file, status, ok }, ...]
  })
  .catch(console.error);


mdLinks("./some/dir", false)
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

```

## Tareas de este hito

* Obtén el contenido de un directorio

  Este hito consiste en buscar archivos en un directorio (o carpeta). Para eso,
  hay que leer el directorio, osea ver que está dentro.

  El módulo de `fs` también te será útil aquí. Recomendamos `readdirSync`.

  Intenta imprimir en consola la lista de archivos en una carpeta para probar
  como funciona.

* Une dos rutas

  Para poder acceder a carpetas y archivos será necesario que indiques en qué
  lugar de tu computadora se encuentran, a esto le llamamos rutas.

  Usa el módulo path para unir dos segmentos de ruta a una ruta completa, por
  ejemplo, si queremos unir:

  /home/Laboratoria/

  ./test

  El resultado sería: /home/Laboratoria/test

:::danger No olvides los tests
Antes de pasar al siguiente hito, asegúrate de escribir los tests correspondientes al código del hito actual.
:::