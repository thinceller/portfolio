import Head from 'next/head'

import {
  blogTitle,
  blogRootUrl,
  blogDescription,
  logoUrl,
  twitterCard,
  twitterAccount,
  facebookAppID
} from '../config/blog'

const Ogp = props => {
  const type = props.isArticle ? 'article' : 'website'
  return (
    <Head>
      <meta property="og:title" content={props.title || blogTitle} />
      <meta property="og:description" content={props.description || blogDescription} />
      <meta property="og:url" content={`${blogRootUrl}${props.url || ''}`} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={logoUrl} />
      <meta property="og:site_name" content={blogTitle} />
      <meta property="fb:app_id" content={facebookAppID} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={`@${twitterAccount}`} />
    </Head>
  )
}

export default Ogp
