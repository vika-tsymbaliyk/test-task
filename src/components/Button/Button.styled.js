import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: ${({ $width }) => `${$width}px`};
  border: none;
  border-radius: 12px;
  padding: 12px 0;
  background: ${({ theme }) => theme.colors.primary};   
  color: ${({ theme }) => theme.colors.textAlign}; 

   &:hover {
    background: ${({ theme }) => theme.colors.hover}; 
  }
  `;