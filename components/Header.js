import Link from 'next/link'

const Header = () => (
  <>
    <ul>
      <li>
        <Link href='/'><a>Home</a></Link>
      </li>
      <li>
        <Link href='/blog'><a>Blog</a></Link>
      </li>
    </ul>
  </>
)

export default Header
