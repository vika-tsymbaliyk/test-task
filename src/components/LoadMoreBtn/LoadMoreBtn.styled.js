import styled from "styled-components";

export const LoadMoreStyled = styled.button`
  display: flex;
  /* width: 79px;
  height: 24px; */
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;
