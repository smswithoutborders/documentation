import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SMSWithoutBorders >> Documentation",
  tagline: "Stay connected",
  favicon: "img/favicon.ico",
  url: "https://docs.smswithoutborders.com",
  baseUrl: "/",
  organizationName: "SMSWithoutBorders",
  projectName: "documentation",
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "fa"],
    path: "i18n",
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
        path: "en",
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
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/smswithoutborders/smswithoutborders.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
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
            label: "Tutorials",
            position: "left",
            type: "dropdown",
            items: [
              {
                label: "Getting Started with Android",
                to: "/docs/Android Tutorial/Getting-Started-With-Android",
              },
              {
                label: "Getting Started with iOS",
                to: "/docs/iOS Tutorial/Getting-Started-With-iOS",
              },
              {
                label: "Setting up a Gateway",
                to: "/docs/Tutorials/Gateway/Setting-Up-a-Gateway",
              },
              {
                label: "Contributing to RelaySMS",
                to: "/docs/Tutorials/Contributing/How-to-Contribute",
              },
            ],
          },
          {
            type: "doc",
            docId: "SWOB Account Management/Account Management",
            position: "left",
            label: "SWOB Account Management",
          },
          {
            type: "doc",
            docId: "Troubleshooting/Troubleshooting",
            position: "left",
            label: "Troubleshooting",
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
                label: "Tutorials",
                to: "/docs/Tutorials/getting-started",
              },
              {
                label: "Troubleshooting",
                to: "/docs/Troubleshooting",
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
                href: "https://blog.smswithoutborders.com",
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
