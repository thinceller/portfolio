import { Header } from '../components'
import Head from "next/head"

const Home = () => (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Header />
      <article>
        <h1>thinceller</h1>
      </article>
    </>
)

export default Home
