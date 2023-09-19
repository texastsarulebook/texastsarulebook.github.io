// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Texas TSA Rulebook",
  tagline: "Explore the official rulebook of Texas TSA",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://texastsarulebook.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "texastsarulebook", // Usually your GitHub org/user name.
  projectName: "texastsarulebook", // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
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
            "https://github.com/texastsarulebook/texastsarulebook.github.io",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/texastsarulebook/texastsarulebook.github.io",
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
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Texas TSA Rulebook",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "rulebookSidebar",
            position: "left",
            label: "Rulebook",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://texastsa.org",
            label: "Main Website",
            position: "right",
          },
          {
            href: "https://github.com/texastsarulebook/texastsarulebook.github.io",
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
                label: "Introduction",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Instagram",
                href: "https://instagram.com/texastsa",
              },
              {
                label: "Facebook",
                href: "https://facebook.com/TexasTSA",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Texas_TSA",
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
              {
                label: "GitHub",
                href: "https://github.com/texastsarulebook/texastsarulebook.github.io",
              },
              {
                label: "National TSA",
                href: "https://tsaweb.org",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Texas Technology Student Association. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "H5AN8WVXHL",

        // Public API key: it is safe to commit it
        apiKey: "60c739ff4de5d5aadcd518a226c7f1bd",

        indexName: "texastsarulebook",
      },
    }),
};

module.exports = config;
