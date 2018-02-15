import Head from 'next/head'

import TopMenu from './TopMenu'
import Footer from './Footer'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = props => (
  <div style={layoutStyle}>
    <Head>
      <title>Initial</title>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.14/semantic.min.css" />
    </Head>
    <TopMenu />
    {props.children}
    <Footer />
  </div>
)

export default Layout
