import Link from 'next/link'

import BlogDate from './BlogLinkDate'

const BlogLink = props => (
  <div>
    <h2>
      <Link href="/blog/[slug]" as={`/blog/${props.slug}`}>
        <a>{props.title}</a>
      </Link>
    </h2>
    <BlogDate date={props.date} />
    <p>{props.description}</p>
    <style jsx>{`
      div {
        padding: 50px 50px;
        border-top: solid 1px rgb(238, 238, 238);
        border-bottom: solid 1px rgb(238, 238, 238);
      }
    `}</style>
  </div>
)

export default BlogLink
