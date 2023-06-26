---
sidebar_position: 1
---

# Hito 12

## Javascript API

Comienza haciendo la versión más sencilla de mdlinks. Crea una función que devuelva una promesa con los links encontrados dentro de un archivo markdown específico.

Esta función debe ser un módulo que puede **importarse** en otros scripts de Node.js y debe ofrecer la siguiente interfaz:

`mdLinks(path)`

Argumento:

* `path`: Ruta **absoluta** o **relativa** al **archivo** o **directorio**.
Si la ruta pasada es relativa, debe resolverse como relativa al directorio desde donde se invoca node (transformar a absoluta).

Valor de retorno:

La función `mdLinks(path)` debe **retornar una promesa** que **resuelva a un arreglo de objetos**, donde cada objeto representa un link y contiene las siguientes propiedades:

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link.
* `file`: Ruta del archivo donde se encontró el link.

Ejemplo:

(resultados como comentarios)

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);
```

## Test unitarios

Los tests unitarios son una excelente forma de verificar si tus funciones están funcionando correctamente mientras escribes el código. En este proyecto, recuerda que no hay una interfaz gráfica de navegador, por lo tanto para poderlo probar es necesario recurrir a los test unitarios. 

Por ejemplo, es recomendable escribir tests que invoquen la función `mdLinks` y comprueben que esta función resuelva con un arreglo con la información esperada. También es importante probar las otras funciones que hayas escrito en tu código. 

Ejemplo:
```js
describe('mdLinks', () => {
  it('debería retornar un arreglo con 3 links para un archivo .md con 3 links', ()=>{
    return mdLinks('miArchivo.md').then((result) => {
      expect...
    });
  });
});

```
## Tareas de este hito

* Crea una promesa

El valor de retorno de nuestra librería es una Promesa, no un array (la promesa resuelve un array). Prueba leyendo sobre las promesas y creando una por tu cuenta utilizando `new Promise()`

  Es importante que sepas qué es un callback pues las promesas los utilizarán.

* Lee un archivo

  Empieza leyendo un solo archivo con una ruta fija y retorna su contenido. Para ver este contenido puedes utilizar un `console.log()` al momento de ejecutar la función.

El módulo `fs` (FileSystem) te será de utilidad. Como mencionamos en las consideraciones técnicas, preferimos que uses `readFile` (en lugar de `readFileSync`) y recomendamos el módulo `fs/promises` para utilizar estas funciones con promesas.

* Asegúrate que el archivo es markdown

  Ya sabiendo leer un archivo, aventúrate a conocer cuál es su extensión.

  Recuerda, las extensiones son esas letras al final del nombre de un archivo, por ejemplo: .js, .txt, .doc, etc

  Aquí podrá ser útil el módulo `path`.

  En caso de que la extensión del archivo no sea md, la promesa de la función mdLinks debería rechazarse con un error.

---

:::danger No olvides los tests
Antes de pasar al siguiente hito, asegúrate de escribir los tests correspondientes al código del hito actual.
:::
