// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SMSWithoutBorders",
  tagline: "Stay connected",
  url: "https://smswithoutborders.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "smswithoutborders", // Usually your GitHub org/user name.
  projectName: "smswithoutborders.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: true,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fa', 'fr'],
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
        label: 'French',
        direction: 'ltr',
        htmlLang: 'fr-FR',
        calendar: 'gregory',
        path: 'fr',
      },
      fa: {
        label: 'فارسی',
        direction: 'rtl',
        htmlLang: 'fa-IR',
        calendar: 'persian',
        path: 'fa',
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
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
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: "doc",
            docId: "developers/account",
            position: "left",
            label: "Developers",
          },
          {
            type: "doc",
            docId: "tutorials/getting-started",
            position: "left",
            label: "Tutorials",
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
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SMSWithoutBorders. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;