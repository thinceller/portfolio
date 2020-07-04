import { Layout, Ogp } from '../../components'

const Blog = () => (
  <Layout title="title - thinceller">
    <Ogp
      isArticle={true}
      title="title"
      description="description"
      url="/blog"
    />
    <h1>blog title</h1>
    <p>date</p>
  </Layout>
)

export default Blog
