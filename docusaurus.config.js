const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "SMSWithoutBorders",
  tagline: "Stay productive",
  url: "https://smswithoutborders.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "smswithoutborders",
  projectName: "smswithoutborders", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "SSMSWithoutBorders",
      logo: {
        alt: "SMSwithoutborders logo",
        src: "img/logo-icon-light.png",
      },
      items: [
        {
          type: "doc",
          docId: "developers/introduction",
          position: "left",
          label: "Developers",
        },
        { to: "/blog", label: "Blog", position: "left" },
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
              to: "/docs/developers/introduction",
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
            "https://github.com/smswithoutborders/smswithoutborders.github.io",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/smswithoutborders/smswithoutborders.github.io",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
