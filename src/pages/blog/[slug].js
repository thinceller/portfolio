import { Header } from '../../components'

const Blog = props => (
  <>
    <Header />
    <h1>{props.title}</h1>
    <p>{props.date}</p>
    <props.Markdown />
  </>
)

Blog.getInitialProps = async ctx => {
  const { slug } = ctx.query
  const fm = await import(`../../../content/blog/${slug}.md`)
  return {
    Markdown: fm.react,
    ...fm.attributes
  }
}

export default Blog
