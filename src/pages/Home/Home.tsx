import { checkMelodyOwnerShip, fetchFriends, purchaseMelody } from '@api/friend'
import { fetchMelody } from '@api/melody'
import Header from '@components/Header'
import { Container } from '@components/styled/Container.styled'
import styled from '@emotion/styled'
import FriendItem from '@pages/Home/components'
import MelodyItem from '@pages/Home/components/MelodyItem'
import * as React from 'react'
import { useQuery } from 'react-query'

type Friend = {
  displayName: string
  pictureUrl: string
  userId: number
}

const ListWrapper = styled.div`
  padding: 16px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
`

const Error = styled.h3`
  color: red;
`

const SELECTED_MELODY_ID = 99

const MELODY_OWNERSHIP_STATUS = {
  AVAILABLE: 'available',
  UNAVAILABLE: 'unavailable',
}

const Home: React.FC = () => {
  const { data, error, isLoading } = useQuery('friends', fetchFriends)
  const [melody, setMelody] = React.useState(null)
  const [ownerShipError, setOwnerShipError] = React.useState(false)
  const [purchaseError, setPurchaseError] = React.useState(false)
  const [isPurchased, setIsPurchased] = React.useState(false)

  React.useEffect(() => {
    fetchMelody({ melodyId: SELECTED_MELODY_ID }).then((value) => setMelody(value))
  }, [])

  const handleUserClick = async (userId: number) => {
    await checkMelodyOwnerShip({ melodyId: SELECTED_MELODY_ID, userId }).then(async (data) => {
      if (data.status === MELODY_OWNERSHIP_STATUS.UNAVAILABLE) {
        setOwnerShipError(true)
      } else {
        try {
          await purchaseMelody({ melodyId: SELECTED_MELODY_ID, userId })
          setIsPurchased(true)
        } catch (e) {
          setPurchaseError(true)
        }
        setOwnerShipError(false)
      }
    })
  }

  return (
    <React.Fragment>
      <Header>
        <h1>Line melody</h1>
      </Header>
      <Container>
        <h3>Selected melody</h3>
        {melody && <MelodyItem {...melody} />}
        <h3>Friend list</h3> <span>Select your best friend to send a gift</span>
        {ownerShipError && <Error>Your friend already have this song</Error>}
        {purchaseError && <Error>Cannot be purchased for this user</Error>}
        {isPurchased && <h3>Thank you for purchasing this song</h3>}
        {data && !isPurchased && (
          <ListWrapper>
            {data.items.map((friend: Friend) => (
              <FriendItem key={friend.userId} {...friend} onClick={() => handleUserClick(friend.userId)} />
            ))}
          </ListWrapper>
        )}
        {isLoading && <h4>Loading...</h4>}
        {error && <h4>Error, please try to refresh this page again</h4>}
      </Container>
    </React.Fragment>
  )
}

export default Home
