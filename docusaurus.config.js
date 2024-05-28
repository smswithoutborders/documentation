// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SMSWithoutBorders",
  tagline: "Stay connected",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  organizationName: "smswithoutborders", // Usually your GitHub org/user name.
  projectName: "smswithoutborders.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: true,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
      locales: ['en','fr', 'fa'],
      path: 'i18n',
      localeConfigs: {
        en: {
          label: 'English',
          direction: 'ltr',
          htmlLang: 'en-US',
          calendar: 'gregory',
          path: 'en',
        },
        fr: {
          label: "French",
          direction: "ltr",
          htmlLang: "fr-FR",
          calendar: "gregory",
          path: "fr",
        },
        fa: {
          label: "فارسی",
          direction: "rtl",
          htmlLang: "fa-IR",
          calendar: "persian",
          path: "fa",
        },
      },
    },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          "https://github.com/smswithoutborders/smswithoutborders.github.io/tree/main/",
      },
      blog: {
        showReadingTime: true,
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          "https://github.com/smswithoutborders/smswithoutborders.github.io/tree/main/",
      },
      theme: {
        customCss: require.resolve("./src/css/custom.css"),
      },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
        navbar: {
          title: "SMSWithoutBorders",
          logo: {
            alt: "SMSwithoutborders logo",
            src: "img/logo-icon-light.png",
          },
          items: [
            {
              type: "doc",
              docId: "contributing/introduction",
              position: "left",
              label: "Docs",
            },
            {
              type: "doc",
              docId: "tutorials/getting-started",
              position: "left",
              label: "Tutorials",
            },
            {
              type: "doc",
              docId: "SWOB Account Management/Account Management",
              position: "left",
              label: "SWOB Account Management",
            },
            {
              type: "localeDropdown",
              position: "right",
            },
            {
              href: "https://github.com/smswithoutborders",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Developers",
                  to: "/docs/developers/account",
                },
                {
                  label: "Tutorials",
                  to: "/docs/tutorials/getting-started",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "IRC: freenode/#afkanerd",
                  href: "#",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/smswithoutborders",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  href: "https://afkanerd.github.io",
                },
                {
                  label: "FaceBook",
                  href: "https://www.facebook.com/SMSWithoutBorders",
                },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/@smswithoutborders9162",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} SMSWithoutBorders. Built with Docusaurus.`,
        },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
