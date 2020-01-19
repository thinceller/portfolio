import dayjs from 'dayjs'

import { Layout, Ogp } from '../../components'

const Blog = props => (
  <Layout title={`${props.title} - thinceller`}>
    <Ogp
      isArticle={true}
      title={props.title}
      description={props.description}
      url={`/blog/${props.slug}`}
    />
    <h1>{props.title}</h1>
    <p>{dayjs(props.date).format('YYYY/MM/DD')}</p>
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
