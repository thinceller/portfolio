import { Layout, Ogp } from '../../components'

const BlogIndex = () => {
  return (
    <Layout title="Blog - thinceller">
      <Ogp isArticle={false} />
      <h1>Blog</h1>
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

export default BlogIndex
