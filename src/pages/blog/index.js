import Link from 'next/link'

import { Layout } from '../../components'

const BlogIndex = props => {
  return (
    <Layout title="Blog - thinceller">
      <h1>Blog</h1>
      <ul>
        {props.blogdata.map(data => (
          <li key={data.slug}>
            <Link href='/blog/[slug]' as={`/blog/${data.slug}`}>
              <a>
                <div>{data.title}</div>
                <div>{data.description}</div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
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
  const blogdata = await Promise.all(promises)
  return {
    blogdata
  }
}

export default BlogIndex
