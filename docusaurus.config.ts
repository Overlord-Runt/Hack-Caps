import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Hack Caps',
  tagline: 'YSWS where you make your own custom Keyboard Keycaps!',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://hackcaps.taranium.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/', // like if you want this on a path instead of a subdomain/apex domain

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Overlord-Runt', // Usually your GitHub org/user name.
  projectName: 'Hack-Caps', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Hack Caps', // title replace with your site name
      logo: {
        alt: 'Hack Caps Logo',
        src: 'img/hkcps.png',
      },
      items: [
        {  // copy for new section thingies
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Requirements',
        },
        {  // copy for new section thingies
          type: 'docSidebar',
          sidebarId: 'workySidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/Overlord-Runt/Hack-Caps', // repo link
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Requirements', // replace with title of the button thing
              to: '/docs/Requirements/intro', // path to the doc
            },
            {
              label: 'Tutorial', // replace with title of the button thing
              to: '/docs/Tutorial/intro', // path to the doc
            },
          ],
        },
        {
          title: 'Acknowledgement Of Country',
          items: [
            {
              label: 'We acknowledge and pay respect to the Traditional Owners of the land on which this site was built, the Darug people, and pay our respects to Elders past, present and emerging. And to the youth working with us today',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Overlord-Runt/Hack-Caps',  // repo link
            },
            {
              label: 'Slack',
              href: 'https://app.slack.com/client/T0266FRGM/C08913QV7S7',
            },
          ],
        },
      ],
      copyright: `Made by @Overlord Runt // Taran The Idiot. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
