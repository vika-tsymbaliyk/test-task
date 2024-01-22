import styled from "styled-components";

export const LoadMoreStyled = styled.button`
  display: flex;
  width: 79px;
  height: 24px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: : ${({ theme }) => theme.colors.hover};
  }
`;
