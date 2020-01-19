import Head from 'next/head'

import Header from './Header'
import { blogTitle, blogDescription } from '../config/blog'

const Main = props => (
  <div>
    {props.children}
    <style jsx>{`
      div {
        max-width: 1000px;
        margin: 0px auto;
        padding-left: 10px;
      }
    `}</style>
  </div>
)

const Layout = props => (
  <>
    <Head>
      <title>{props.title || blogTitle}</title>
      <meta name="description" content={props.description || blogDescription} />
    </Head>
    <Header />
    <Main>
      {props.children}
    </Main>
  </>
)

export default Layout
