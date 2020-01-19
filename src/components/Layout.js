import Head from 'next/head'

import Header from './Header'

const Layout = props => (
  <>
    <Head>
      <title>{props.title}</title>
    </Head>
    <Header />
    <div className="main">
      {props.children}
    </div>
    <style jsx>{`
      .main {
        max-width: 1200px;
        margin: 10px auto;
      }
    `}</style>
  </>
)

export default Layout
