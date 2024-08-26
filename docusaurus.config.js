// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Product Name',
  tagline: 'Product tag line - one sentence description',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-org', // Update this to your GitHub org/user name.
  projectName: 'your-repo', // Update this to your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/your-org/your-repo/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/your-org/your-repo/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
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
        title: 'Product Name',
        logo: {
          alt: 'Product Logo',
          src: 'img/logo.svg',
          href: '/', // Ensure clicking the logo returns to the homepage
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'News/Blog', position: 'left'},
          {to: '/about', label: 'About', position: 'left'},
          {
            href: 'https://github.com/your-org/your-repo',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
        style: 'dark', // Ensure the navbar uses a darker theme for a more professional look
        hideOnScroll: true, // Add hide on scroll to give a cleaner experience
      },
      footer: {
        style: 'dark', // Keep a consistent dark footer theme
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://slack.yourdomain.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/your-org/your-repo',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/yourhandle',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Email Us',
                href: 'mailto:contact@yourdomain.com',
              },
            ],
          },
        ],
        logo: {
          alt: 'Company Logo',
          src: 'img/logo.svg', // Optionally add a logo to the footer
          href: '/', // Clicking the logo redirects to the homepage
        },
        copyright: `Copyright © ${new Date().getFullYear()} Your Organization. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false, // Allow users to toggle between light and dark modes
      },
    }),
};

export default config;
