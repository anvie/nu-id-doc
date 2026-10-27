// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const prismThemes = require('./src/utils/prismThemes');
const {logoMarkSvg} = require('./src/utils/logoMark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NU Identity',
  titleDelimiter: '·',
  tagline: 'NU.ID merupakan platform identitas tunggal, merupakan jembatan menuju visi "Satu Data NU"',
  favicon: 'img/favicon.ico',

  // Same type as nu-iam: Geist for text, Geist Mono for labels and code, Sora for headings.
  headTags: [
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/svg+xml', href: '/img/icon.svg'}},
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'}},
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'}},
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Sora:wght@500;600;700&display=swap',
  ],

  // Set the production url of your site here
  url: 'https://doc.nu.id',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'anvie', // Usually your GitHub org/user name.
  projectName: 'nu-id-doc', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/anvie/nu-id-doc/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/anvie/nu-id-doc/blob/main/',
        },
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
      image: 'img/social-card.jpg',
      // the brand (mark, wordmark, section label) is drawn by src/theme/Navbar/Logo
      navbar: {
        title: 'NU Identity',
        items: [
          {to: '/docs/intro', label: 'Pengenalan', position: 'right', activeBaseRegex: '^/docs/intro$'},
          {to: '/docs/API', label: 'API', position: 'right', activeBaseRegex: '^/docs/API'},
          {
            to: '/docs/category/integrasi',
            label: 'Integrasi',
            position: 'right',
            activeBaseRegex: '^/docs/(category/integrasi|integration)',
          },
          {to: '/docs/faq', label: 'FAQ', position: 'right', activeBaseRegex: '^/docs/faq$'},
          {
            type: 'html',
            position: 'right',
            className: 'nuid-cta-item',
            value: `<a class="nuid-cta" href="https://nu.id/login">${logoMarkSvg('#fff')}Masuk</a>`,
          },
        ],
      },
      // rendered by src/theme/Footer
      footer: {
        links: [
          {
            title: 'Dokumentasi',
            items: [
              {label: 'Pengenalan', to: '/docs/intro'},
              {label: 'OAuth 2.0', to: '/docs/API/oauth'},
              {label: 'Integrasi', to: '/docs/category/integrasi'},
            ],
          },
          {
            title: 'Platform',
            items: [
              {label: 'NU Identity', href: 'https://nu.id'},
              {label: 'Developer Console', href: 'https://nu.id/dashboard/apps'},
            ],
          },
          {
            title: 'Lainnya',
            items: [
              {label: 'Kebijakan Privasi', to: '/docs/privacy'},
              {label: 'muktamar@nu.id', href: 'mailto:muktamar@nu.id'},
              {label: 'contact@nu.id', href: 'mailto:contact@nu.id'},
            ],
          },
        ],
        copyright: `© 2023–${new Date().getFullYear()} Pengurus Besar Nahdlatul Ulama.`,
      },
      prism: {
        theme: prismThemes.light,
        darkTheme: prismThemes.dark,
      },
    }),
};

module.exports = config;
