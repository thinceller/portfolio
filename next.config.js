const fs = require('fs')
const path = require('path')

const isFile = path => {
    const stat = fs.statSync(path);
    return stat.isFile();
}

const fetchMarkdownFIles = () => {
  const targetDir = path.join(__dirname, 'content', 'blog')
  const names = fs.readdirSync(targetDir)
  return names.filter(name => isFile(`${targetDir}/${name}`))
}

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
  // next export 時の Dynamic Routing 設定
  exportPathMap: async () => {
    const paths = {
      '/': { page: '/' },
      '/blog': { page: '/blog' }
    }

    const files = fetchMarkdownFIles()
    files.forEach(file => {
      const slug = file.split('.')[0]
      paths[`/blog/${slug}`] = { page: '/blog/[slug]', query: { slug: slug } }
    })

    return paths
  }
}
