import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = param1 => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/services/web-development">
      <a style={linkStyle}>Web Development</a>
    </Link>
  </div>
)

export default Header
