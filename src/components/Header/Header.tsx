import { Container } from '@components/styled/Container.styled'
import * as React from 'react'
import { Wrapper } from './Header.styled'

type HeaderProps = {
  children: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
)

export default Header
