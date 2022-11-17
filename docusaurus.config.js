const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "SMSWithoutBorders",
  tagline: "Stay connected",
  url: "https://smswithoutborders.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "smswithoutborders",
  projectName: "smswithoutborders", // Usually your repo name.
  themeConfig: {
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
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/smswithoutborders/smswithoutborders.github.io/tree/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/smswithoutborders/smswithoutborders.github.io/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
