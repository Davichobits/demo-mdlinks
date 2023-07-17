// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'mdLinks',
  tagline: 'Proyecto mdlinks',
  favicon: 'img/enlace.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Laboratoria', // Usually your GitHub org/user name.
  projectName: 'mdlinks', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'mdlinks',
        logo: {
          alt: 'mdlinks logo',
          src: 'img/enlace.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'El proyecto',
          },
          {
            href: 'https://www.laboratoria.la/',
            label: 'Laboratoria',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '<Laboratoria>',
            items: [
              {
                label: 'Facebook',
                to: 'https://www.facebook.com/laboratoriala/',
              },
              {
                label: 'Instagram',
                to: 'https://www.instagram.com/laboratoriala/',
              },
              {
                label: 'Linkedin',
                to: 'https://www.linkedin.com/school/laboratoria/mycompany/',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/Laboratoriala',
              },
              {
                label: 'Youtube',
                to: 'https://www.youtube.com/channel/UC3LdpwpeIJqbm4hafXXqRHA',
              },
            ],
          },
          {
            title: 'CONOCE MÁS',
            items: [
              {
                label: 'Contáctanos',
                href: 'https://www.laboratoria.la/contactanos',
              },
              {
                label: 'Blog',
                href: 'https://hub.laboratoria.la/?utm_source=site-laboratoria&utm_medium=footer&utm_campaign=Hub%2520de%2520Laboratoria&_ga=2.140963249.2026375068.1687520629-326958292.1683129027',
              },
              {
                label: 'Conoce Laboratoria+',
                href: 'https://www.laboratoriaplus.la/',
              },
              {
                label: 'Política de privacidad',
                href: 'https://www.laboratoria.la/privacy',
              },
              {
                label: 'Términos y condiciones',
                href: 'https://www.laboratoria.la/terminosycondiciones',
              },
            ],
          },
          {
            title: 'INVOLÚCRATE',
            items: [
              {
                label: 'Postula al bootcamp',
                to: 'https://bootcamp.laboratoria.la/es/?utm_source=web_laboratoria&utm_medium=footer&utm_campaign=footer_web&_ga=2.140963249.2026375068.1687520629-326958292.1683129027',
              },
              {
                label: 'Contrata talento',
                href: 'https://talento.laboratoria.la/?utm_source=site-laboratoria&utm_medium=footer&_ga=2.140963249.2026375068.1687520629-326958292.1683129027',
              },
              {
                label: 'Trabaja con nosotros/as',
                href: 'https://www.laboratoria.la/trabaja-con-nosotros',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Laboratoria. Todos los derechos reservados.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
