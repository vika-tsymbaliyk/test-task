import styled from "styled-components";

export const CarCardWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImgWrap = styled.div`
  margin-bottom: 14px;
  position: relative;
`;

export const CarImg = styled.img`
  width: 274px;
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
  color:${({ theme }) => theme.colors.textMain};
`;

export const CarTitle = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CarTitleSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const InputStyled = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;
export const LabelInput = styled.label`
  position: absolute;
  display: inline-block;
  top: 14px;
  right: 14px;`

export const Text = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;

  &::after {
    content: "";
    width: 0px;
    height: 16px;
    border-left: 1px solid rgba(18, 20, 23, 0.1);
    margin-left: 6px;
    margin-right: 6px;
  }

  &:last-child::after {
    content: none;
  }
`;

export const TextWpap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height:40px;

  & > ${Text}:last-child::after {
    content: none;
  }
`;
