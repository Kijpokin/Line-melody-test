import { getContent } from '@api/content'
import Header from '@components/Header'
import * as React from 'react'
import { useQuery } from 'react-query'

const Home: React.FC = () => {
  const { data, error, isLoading } = useQuery('content', getContent)

  return (
    <React.Fragment>
      <Header>
        <h3>React query</h3>
      </Header>
      {data && <h4>Content: {data.content}</h4>}
      {isLoading && <h4>Loading...</h4>}
      {error && <h4>Error, please try to refresh this page again</h4>}
    </React.Fragment>
  )
}

export default Home
