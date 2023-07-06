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

        <img src="https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg" alt="mdlinks image" />
        

        <h2 className='text-left mt-24 font-black'>Resumen del proyecto</h2>

        <p className='paragraph'>En este proyecto crearás una librería de código que servirá como herramienta para analizar links dentro de archivos Markdown. Esta librería, escrita en Node.js, será accesible desde la línea de comandos (CLI) y permitirá a la usuaria ejecutar la librería directamente desde la terminal. </p>

        <p className='paragraph'>En esta oportunidad nos alejamos un poco del navegador para construir un script que se ejecute usando Node.js. Aprenderemos sobre procesos (`process.env`, `process.argv`, ...), cómo interactuar con el sistema archivos, cómo hacer consultas de red, etc.</p>

        <p className='paragraph'> <a href="https://nodejs.org/es/">Node.js</a> es un entorno de ejecución para JavaScript construido con el <a href="https://developers.google.com/v8/">motor de JavaScript V8 de Chrome</a>. Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo, ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder interactuar con el sistema en sí, archivos, redes, etc.</p>

        <p className='paragraph'>Diseñar tu propia librería es una experiencia fundamental para cualquier
        desarrolladora porque que te obliga a pensar en la interfaz (API) de tus
        <i>módulos</i> y cómo serán usado por otras developers. Debes tener especial
        consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.</p>

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
