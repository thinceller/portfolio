import dayjs from 'dayjs'

import { Layout, BlogLink } from '../../components'

const BlogIndex = props => {
  return (
    <Layout title="Blog - thinceller">
      <h1>Blog</h1>
      {props.blogdata.map(data => (
        <BlogLink {...data} key={data.slug} />
      ))}
      <style jsx>{`
        h1 {
          margin: 0px;
          padding: 50px 0px;
          text-align: center;
          border-bottom: solid 1px rgb(238, 238, 238);
        }
      `}</style>
    </Layout>
  )
}

BlogIndex.getInitialProps = async () => {
  const context = require.context('../../../content/blog', true, /\.md$/)
  const blogFiles = context
    .keys()
    .map(key => key.replace(/\.\//, ''))
  const promises = blogFiles.map(async filename => {
    const fm = await import(`../../../content/blog/${filename}`)
    return {
      title: fm.attributes.title,
      description: fm.attributes.description,
      date: fm.attributes.date,
      slug: fm.attributes.slug
    }
  })
  const data = await Promise.all(promises)
  // 新しいもの順に並び替える
  const blogdata = data.sort((a, b) => dayjs(b.date) - dayjs(a.date))
  return {
    blogdata
  }
}

export default BlogIndex
