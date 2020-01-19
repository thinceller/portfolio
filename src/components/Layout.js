import Head from 'next/head'

import Header from './Header'

const Layout = props => (
  <>
    <Head>
      <title>{props.title}</title>
    </Head>
    <Header />
    {props.children}
  </>
)

export default Layout
