import React from 'react'
import { HeaderStyled, NavStyled, NavLinkStyled } from './Header.styled'

const Header = () => {
  return (
    <HeaderStyled>
            <NavStyled>
                <NavLinkStyled to='/'>Home</NavLinkStyled>
                <NavLinkStyled to='/catalog'>Catalog</NavLinkStyled>
                <NavLinkStyled to='/favorites'>Favorites</NavLinkStyled>
            </NavStyled>
    </HeaderStyled>
  )
}

export default Header