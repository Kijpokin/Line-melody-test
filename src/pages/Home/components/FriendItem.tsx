import styled from '@emotion/styled'
import * as React from 'react'

type FriendItemProps = {
  displayName: string
  pictureUrl: string
  userId: number
  onClick: (userId: number) => void
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 2px solid #eeeeee;
  border-radius: 4px;

  &:hover {
    background: #eeeeee;
  }
`

const Img = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
`

const Profile = styled.div`
  padding: 16px;
`

const FriendItem: React.FC<FriendItemProps> = ({ displayName, pictureUrl, userId, onClick }) => {
  return (
    <Wrapper onClick={() => onClick(userId)}>
      <Img src={pictureUrl} />
      <Profile>{displayName}</Profile>
    </Wrapper>
  )
}

export default FriendItem
