import styled from '@emotion/styled'
import * as React from 'react'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const Img = styled.img`
  width: 100px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 8px;
`

const MelodyItem: React.FC<any> = ({ title, artist, titleEn, coverPic, price }) => {
  return (
    <Wrapper>
      <Img src={coverPic} />
      <div>{artist.name}</div>
      <div>{title}</div>
      <div>{titleEn}</div>
      <div>{price} B</div>
    </Wrapper>
  )
}

export default MelodyItem
