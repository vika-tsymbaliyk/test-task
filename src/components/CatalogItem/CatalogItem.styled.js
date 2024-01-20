import styled from 'styled-components'

export const CarCardWrap = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ImgWrap = styled.div`
  margin-bottom: 14px;
`;

export const CarImg = styled.img`
  width: 100%;
    height: 268px;
    object-fit: cover;
    border-radius: 14px;
`;

export const TitleWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    margin: 0;
    color: #121417;
    
`;

export const CarTitle = styled.span`
    
`;

export const CarTitleSpan = styled.span`
    color: #3470FF;
`;