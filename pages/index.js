import Layout from '../components/layouts'

import api from '../api/base'

const Index = props => (
  <Layout>
    <h1>This is homepage</h1>
    <ul>
      {props.posts.map(post => (
        <li key={post._id}>
          <p>{post.snippets.en}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async () => {
  const res = await api.get('/posts/find')
  const data = await res.data
  return {
    posts: data
  }
}

export default Index
