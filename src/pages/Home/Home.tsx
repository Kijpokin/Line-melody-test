import { fetchFriends } from '@api/friend'
import Header from '@components/Header'
import { Container } from '@components/styled/Container.styled'
import * as React from 'react'
import { useQuery } from 'react-query'

const Home: React.FC = () => {
  const { data, error, isLoading } = useQuery('friends', fetchFriends)

  return (
    <React.Fragment>
      <Header>
        <h1>Line melody</h1>
      </Header>
      <Container>
        <h3>Friend list</h3> <span>Select your best friend to send a gift</span>
        {data && <h4>Content: {data.content}</h4>}
        {isLoading && <h4>Loading...</h4>}
        {error && <h4>Error, please try to refresh this page again</h4>}
      </Container>
    </React.Fragment>
  )
}

export default Home
