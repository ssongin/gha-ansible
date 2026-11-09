import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'gha-ansible',
  description: 'Reusable GitHub Actions for Ansible linting, testing, execution, and publishing.',
  lang: 'en-US',
  base: process.env.DOCS_BASE || '/',
  vite: {
    define: {
      __DOCS_VERSION_MANIFEST_URL__: JSON.stringify(
        process.env.DOCS_PAGES_URL
          ? new URL(
            'versions.json',
            `${process.env.DOCS_PAGES_URL.replace(/\/+$/, '')}/`
          ).toString()
          : ''
      )
    }
  },
  srcExclude: ['README.md', '_sidebar.md'],
  themeConfig: {
    siteTitle: 'gha-ansible',
    nav: [
      {
        text: 'Actions',
        items: [
          { text: 'Ansible lint', link: '/ansible-lint' },
          { text: 'Ansible test', link: '/ansible-test' },
          { text: 'Validate variables', link: '/ansible-schema-validate' },
          { text: 'Run a playbook', link: '/ansible-run' },
          { text: 'Publish a collection', link: '/ansible-galaxy-publish' },
          { text: 'Combined workflow', link: '/combined-usage' }
        ]
      },
      { text: 'Versioning', link: '/versioning' }
    ],
    sidebar: [
      {
        text: 'Actions',
        items: [
          { text: 'Ansible lint', link: '/ansible-lint' },
          { text: 'Ansible test', link: '/ansible-test' },
          { text: 'Validate variables', link: '/ansible-schema-validate' },
          { text: 'Run a playbook', link: '/ansible-run' },
          { text: 'Publish a collection', link: '/ansible-galaxy-publish' },
          { text: 'Combined workflow', link: '/combined-usage' }
        ]
      },
      {
        text: 'Reference',
        items: [{ text: 'Versioning', link: '/versioning' }]
      }
    ]
  }
})
