import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: ${({ $width }) => `${$width}px`};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary};   
  color: ${({ theme }) => theme.colors.textAlign}; 

   &:hover {
    background: ${({ theme }) => theme.colors.hover}; 
  }
  `;