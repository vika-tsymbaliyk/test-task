import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  display:flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #3470FF;
`;

export const NavStyled = styled.nav`
  width:100%;
  display:flex;
  justify-content:space-evenly;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #3470FF;
  font-size: 16px;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;

  transform: scale(0.7);

  &:hover,
  &:focus {
    color: #0B44CD;
  }

  &.active {
    color: #0B44CD;
    padding: 6px 12px;
    border-radius: 4px;
    transform: scale(0.9);
    pointer-events: none;
  }
`;