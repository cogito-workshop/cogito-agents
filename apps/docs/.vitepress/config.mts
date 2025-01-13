import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Cogito Agent Docs',
  description: 'The documents for Cogito Agent',
  base: '/cogito-agents',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Cookbook', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Introduction', link: '/Introduction' },
          { text: 'How it works', link: '/Introduction/How-it-works' },
          { text: 'Quickstart', link: '/Introduction/QuickStart' },
          { text: 'FAQs', link: '/Introduction/FAQs' },
        ],
      },

      { text: 'Agents', items: [{ text: 'Overview', link: '' }] },

      {
        text: 'Cookbook',
        items: [
          {
            text: 'General',
            items: [
              {
                text: 'Form',
                link: '',
              },
            ],
          },
          {
            text: 'LLMs',
            items: [
              {
                text: 'OpenAI',
                link: '',
              },
            ],
          },
        ],
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/cogito-workshop/cogito-agents',
      },
    ],
  },
});
