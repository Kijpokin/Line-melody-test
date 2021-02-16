import * as React from 'react'
import { Wrapper } from './Header.styled'

type HeaderProps = {
  children: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => <Wrapper>{children}</Wrapper>

export default Header
