import styled from "styled-components";

export const customStyles = {
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(18, 20, 23, 0.50)",
    zIndex: "100",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  content: {
    width: "541px",
    height: "'auto',",
    padding: "40px",
    border: "none",
    overflow: "hidden auto",
    margin: "0 auto",
    scrollbars: "none",
  },
};
export const ModalWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.textAlign};
  border-radius: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.textMain};
  width: 100%;
  height: 100%;
  padding-bottom:40px;
`;
export const CarImgModal = styled.img`
  width: 469px;
  height: 314px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;
export const CloseBtn = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;

  &:hover {
    scale: 1.3;
  }
`;
export const TitleCar = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: ${({ theme }) => theme.colors.textMain};
`;
export const TitleSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;
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

export const WrapText = styled.p`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const DescriptionText = styled.p`
  color: ${({ theme }) => theme.colors.textMain};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 24px;
`;
export const TextSubpoint = styled.p`
  color: ${({ theme }) => theme.colors.textMain};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
`;
export const ConditionsWrap = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;
