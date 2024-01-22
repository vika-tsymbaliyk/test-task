import styled from "styled-components";

export const PageWrap = styled.div`
  padding: 20px;
`;
export const CenterDiv = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//HOME PAGE 
export const TitleWrap = styled.div`
  width:100%;
  display:flex;
  justify-content: space-between;
  gap:20px;
`;
export const CenterWrap = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: flex-end;
  gap:30px;
`;
export const Title = styled.h1`
  font-weight:600;
  padding-top: 35px;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.hover};
  line-height: 1.43;
`;

export const TextHomePage = styled.p`
font-weight: 500;
text-align: justify;
font-size: ${({ theme }) => theme.fontSizes.medium};
color: ${({ theme }) => theme.colors.textMain};
line-height: 1.43;
`;

export const HomeImg = styled.img`
  width:50%;
  height:auto;
`;
// FAVORITES  

export const TextFavPage = styled.p`
font-weight: 500;
text-align: justify;
font-size: ${({ theme }) => theme.fontSizes.medium};
color: ${({ theme }) => theme.colors.textMain};
line-height: 1.43;
margin-bottom: 100px;
padding-top:100px;
`;

