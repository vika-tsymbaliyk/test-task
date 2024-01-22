import React from "react";
import { LoadMoreStyled } from "./LoadMoreBtn.styled";

const LoadMoreBtn = ({onClick}) => {
  return (
    <LoadMoreStyled type="button" onClick={onClick}>
      Load more
    </LoadMoreStyled>
  );
};

export default LoadMoreBtn;
