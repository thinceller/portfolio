module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component']  }
      }
    )
    return cfg;
  },
  // TODO: next export 時の Dynamic Routing 設定
  // exportPathMap: async () => {
  //   const paths = {
  //     '/': { page: '/' },
  //     '/blog': { page: '/blog' }
  //   }

  //   const ctx = require.context('./content/blog', true, /\.md$/)
  //   const slugs = ctx
  //     .keys()
  //     .map(key => key.replace('./', '').split('.')[0])
  //   slugs.forEach(slug => {
  //     paths[`/blog/${slug}`] = { page: '/blog/[slug]', query: { slug: slug } }
  //   })

  //   return paths
  // }
}
