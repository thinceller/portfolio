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
        max-width: 1000px;
        margin: 0px auto;
        padding-left: 10px;
      }
    `}</style>
  </>
)

export default Layout
