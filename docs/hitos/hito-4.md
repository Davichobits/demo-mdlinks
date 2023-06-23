---
sidebar_position: 4
---

# Hito 4

## Interfaz de Línea de comando

En este hito, crearás un paquete ejecutable de tu código, el mismo que internamente ejecutará la función mdLinks que acabas de crear.

Tu módulo debe ser instalable via npm install `<github-user>/md-links`.

Este módulo debe incluir tanto un ejecutable que podamos invocar en la línea de comando como una interfaz que podamos importar con require para usarlo programáticamente.

Este paquete deberá estar documentado y alojado en npm para poderlo descargar.

El ejecutable de tu aplicación debe poder correr de la siguiente manera a través de la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:

![mdlinks-example](https://github.com/Laboratoria/bootcamp/assets/123121338/7dcc83c4-873e-4ef8-b7d0-a15adb102680)

El comportamiento por defecto no debe validar si las URLs responden ok o no, solo debe identificar el archivo markdown (a partir de la ruta que recibe como argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto que hay dentro del link (truncado a 50 caracteres).

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

![mdlinks-example-validate](https://github.com/Laboratoria/bootcamp/assets/123121338/502cbafc-b4ac-4734-85b3-1734f67af1d3)

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

![mdlinks-example-stats](https://github.com/Laboratoria/bootcamp/assets/123121338/910720c6-aa3f-4d08-b076-c1add13c95f1)

También podemos combinar `--validate` y `--stats` para obtener estadísticas que
necesiten de los resultados de la validación.

![mdlinks-example-stats-validate](https://github.com/Laboratoria/bootcamp/assets/123121338/9d9971a0-866a-4c64-a890-4c62c3df3700)

Para ejecutar tu script utilizando el comando `mdlinks`, debes vincular este comando al sistema. Sin embargo, antes de vincular el comando, puedes desarrollar tu interfaz de línea de comandos (CLI) invocándola con node. Por ejemplo, puedes usar el siguiente comando: 

`node <RUTA_DE_TU_CLI.js> ruta options`

:::danger No olvides los tests
Antes de pasar al siguiente hito, asegúrate de escribir los tests correspondientes al código del hito actual.
:::