import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title font-black">{siteConfig.title}</h1>
        <h2 className='text-left font-black'>Preámbulo</h2>
        <p className='paragraph'><a href="https://es.wikipedia.org/wiki/Markdown">Markdown</a> es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, etc.) y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional <i>README.md</i> ).</p>

        <p className='paragraph'>Estos archivos <i>Markdown</i> normalmente contienen <i>links</i> (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.</p>

        <p className='paragraph'>Dentro de una comunidad de código abierto, nos han propuesto crear una herramienta usando <a href="https://nodejs.org/">Node.js</a>, que lea y analice archivos en formato <i>Markdown</i>, para verificar los links que contengan y reportar algunas estadísticas.</p>

        <img src="https://github.com/Laboratoria/bootcamp/assets/12631491/fc6bc380-7824-4fab-ab8f-7ab53cd9d0e4" alt="mdlinks image" />
        
        <h2 className='text-left mt-24 font-black'>Resumen del proyecto</h2>

        <p className='paragraph'>En este proyecto desarrollarás una librería en Node.js que funcionará como herramienta para analizar links dentro de archivos Markdown. Esta librería estará disponible de dos formas: como un módulo publicado en GitHub, que las usuarias podrán instalar e importar en otros proyectos, y como una interfaz de línea de comandos (CLI) que permitirá utilizar la librería directamente desde el terminal.</p>

        <p className='paragraph'> <a href="https://nodejs.org/es/">Node.js</a> es un entorno de ejecución para JavaScript construido con el <a href="https://developers.google.com/v8/">motor de JavaScript V8 de Chrome</a>. Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo, ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder interactuar con el sistema en sí, archivos, redes, etc.</p>

        <p className='paragraph'>En esta oportunidad nos alejamos un poco del navegador para construir una librería que interactua con el sistema archivos y un script que se ejecute usando Node.js. Aprenderemos cómo buscar y leer archivos, cómo hacer consultas de red, sobre procesos (<i>process.env</i>, <i>process.argv</i>, ...), etc.</p>

        <p className='paragraph'>Diseñar tu propia librería es una experiencia fundamental para cualquier desarrolladora porque que te obliga a pensar en la interfaz (API) de tus <i>módulos</i> y cómo será usado por otras developers. Debes tener especial consideración en peculiaridades del lenguaje, convenciones y buenas prácticas. Al finalizar, podrás instalar esta librería utilizando NPM (Node Package Manager), que facilita la búsqueda e instalación de librerías de Node a través de su registro y también de GitHub. Una vez que hayas subido la librería a tu repositorio público, será accesible para otras developers.</p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Empieza aquí
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Bienvenida`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
