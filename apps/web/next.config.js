const { remarkCodeHike } = require('@code-hike/mdx')
const theme = require('shiki/themes/dark-plus.json')

/** @type {import('nextra').NextraConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './nextra.theme.tsx',
  flexsearch: {
    codeblocks: false,
  },
  mdxOptions: {
    remarkPlugins: [[remarkCodeHike, { theme, autoImport: true }]],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: 'experimental-edge',
    nextScriptWorkers: true,
    mdxRs: true,
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/getting-started',
        permanent: false,
      },
      {
        source: '/',
        destination: '/docs',
        permanent: false,
      },
      {
        source: '/learn',
        destination: '/learn/introduction',
        permanent: false,
      },
    ]
  },
}

module.exports = withNextra(nextConfig)
