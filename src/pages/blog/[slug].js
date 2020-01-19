import { Layout } from '../../components'

const Blog = props => (
  <Layout title={`${props.title} - thinceller`}>
    <h1>{props.title}</h1>
    <p>{props.date}</p>
    <div dangerouslySetInnerHTML={{ __html: props.html }} />
  </Layout>
)

Blog.getInitialProps = async ctx => {
  const { slug } = ctx.query
  const fm = await import(`../../../content/blog/${slug}.md`)
  return {
    html: fm.html,
    ...fm.attributes
  }
}

export default Blog
