import Link from 'next/link'

import { Logo } from '../components'

const Header = () => (
  <header>
    <div>
      <Link href='/'><a><Logo /></a></Link>
    </div>
    <div>
      <ul>
        <li>
          <Link href='/'><a>Home</a></Link>
        </li>
        <li>
          <Link href='/blog'><a>Blog</a></Link>
        </li>
        <li>
          <Link href='/about'><a>About</a></Link>
        </li>
      </ul>
    </div>
    <style jsx>{`
      header {
        padding-top: 10px;
        box-shadow: 0px 1px 10px rgba(0,0,0,0.4);
      }
      div {
        max-width: 1200px;
        margin: 0px auto;
        padding-left: 10px;
      }
      ul {
        margin: 0px;
        padding: 0px 0px 10px;
        list-style: none;
      }
      li {
        display: inline;
        margin-right: 20px;
      }
      li a {
        color: #000000;
        text-decoration: none;
      }
    `}</style>
  </header>
)

export default Header
