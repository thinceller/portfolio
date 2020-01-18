import Link from 'next/link'

const Header = () => (
  <>
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/blog'>Blog</Link>
      </li>
    </ul>
  </>
)

export default Header
